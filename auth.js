(function(){
  "use strict";

  // === Dán Client ID OAuth (loại "Web application") từ Google Cloud Console vào đây ===
  var GOOGLE_CLIENT_ID = "101367679859-qabbv5fe6a37sfk2mtf4l5f38i3tm9b0.apps.googleusercontent.com";

  // Danh sách email được phép đăng nhập, lưu dưới dạng SHA-256 (không lưu email dạng chữ rõ).
  // Đây chỉ là một lớp cản trở (obfuscation) vì trang tĩnh không có server — không phải bảo mật thực sự:
  // ai mở DevTools và tự tạo ID token hợp lệ của Google cho MỘT email bất kỳ rồi hash email đó để so khớp
  // thì vẫn qua được, nhưng việc này đòi hỏi họ phải đăng nhập Google bằng chính email đó.
  var ALLOWED_HASHES = [
    "7e168e74710427043f7ffff12d263d7381801012cf4dc9424a52e7866a13099c",
    "ba8154abebade8bb1e92f95abacdc5fd3c9cb0f5d2d0b35c2d1de7545f0b8b4f",
    "2dc728e4f046bbb491a9806d60ba87f8617254aaa53f1fc2dd1cd45743c62831"
  ];

  var SESSION_KEY = "honmen_auth_session";
  var SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 giờ

  var gateEl = document.getElementById("gate");
  var appRootEl = document.getElementById("appRoot");
  var gateErrorEl = document.getElementById("gateError");
  var gateLoadingEl = document.getElementById("gateLoading");
  var userEmailLbl = document.getElementById("userEmailLbl");
  var btnLogout = document.getElementById("btnLogout");

  function sha256Hex(str){
    var data = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", data).then(function(buf){
      return Array.prototype.map.call(new Uint8Array(buf), function(b){
        return b.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  function showError(msg){
    gateErrorEl.textContent = msg;
    gateErrorEl.hidden = false;
  }
  function clearError(){
    gateErrorEl.hidden = true;
    gateErrorEl.textContent = "";
  }
  function setLoading(on){
    gateLoadingEl.hidden = !on;
  }

  function unlock(email){
    gateEl.hidden = true;
    appRootEl.hidden = false;
    userEmailLbl.textContent = email || "";
  }

  function lock(){
    appRootEl.hidden = true;
    gateEl.hidden = false;
  }

  function saveSession(emailHash, email){
    try{
      localStorage.setItem(SESSION_KEY, JSON.stringify({
        h: emailHash, e: email, exp: Date.now() + SESSION_TTL_MS
      }));
    } catch(e){}
  }

  function readSession(){
    try{
      var raw = localStorage.getItem(SESSION_KEY);
      if(!raw) return null;
      var s = JSON.parse(raw);
      if(!s || !s.exp || Date.now() > s.exp) return null;
      if(ALLOWED_HASHES.indexOf(s.h) === -1) return null;
      return s;
    } catch(e){ return null; }
  }

  function clearSession(){
    try{ localStorage.removeItem(SESSION_KEY); } catch(e){}
  }

  // Google gọi hàm này sau khi người dùng đăng nhập trên popup/button của Google.
  window.handleCredentialResponse = function(response){
    clearError();
    setLoading(true);
    var idToken = response.credential;

    // Xác thực chữ ký + nguồn gốc token qua chính server của Google (không cần backend riêng).
    fetch("https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(idToken))
      .then(function(res){
        if(!res.ok) throw new Error("bad_token");
        return res.json();
      })
      .then(function(payload){
        if(payload.aud !== GOOGLE_CLIENT_ID){
          throw new Error("wrong_audience");
        }
        if(payload.email_verified !== "true" && payload.email_verified !== true){
          throw new Error("unverified");
        }
        var email = String(payload.email || "").trim().toLowerCase();
        return sha256Hex(email).then(function(hash){
          if(ALLOWED_HASHES.indexOf(hash) === -1){
            throw new Error("not_allowed");
          }
          saveSession(hash, payload.email);
          setLoading(false);
          unlock(payload.email);
        });
      })
      .catch(function(err){
        setLoading(false);
        if(err && err.message === "not_allowed"){
          showError("Email này không có quyền truy cập trang này.");
        } else {
          showError("Đăng nhập thất bại, vui lòng thử lại.");
        }
      });
  };

  btnLogout.addEventListener("click", function(){
    clearSession();
    try{ if(window.google && window.google.accounts && window.google.accounts.id){ window.google.accounts.id.disableAutoSelect(); } } catch(e){}
    lock();
  });

  function initGoogleButton(){
    if(!(window.google && window.google.accounts && window.google.accounts.id)){
      setTimeout(initGoogleButton, 150);
      return;
    }
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: window.handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById("g_id_signin"),
      { theme: "outline", size: "large", shape: "pill", text: "signin_with", locale: "vi" }
    );
  }

  // ---------- init ----------
  var existing = readSession();
  if(existing){
    unlock(existing.e);
  } else {
    lock();
    initGoogleButton();
  }
})();
