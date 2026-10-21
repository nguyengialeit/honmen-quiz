(function(){
  "use strict";

  // === Dán Client ID OAuth (loại "Web application") từ Google Cloud Console vào đây ===
  var GOOGLE_CLIENT_ID = "101367679859-qabbv5fe6a37sfk2mtf4l5f38i3tm9b0.apps.googleusercontent.com";

  // Không whitelist email trong code: app OAuth này đang ở chế độ "Testing" trên Google Cloud
  // Console, nên Google chỉ cho phép các email nằm trong danh sách "Test users" đăng nhập được —
  // ai không có trong danh sách đó bị Google chặn ngay từ màn hình đăng nhập, trước khi tới trang này.
  // Nếu sau này đổi app sang "Production" hoặc thêm test user khác, nhớ thêm lại việc kiểm tra email ở đây.

  var SESSION_KEY = "honmen_auth_session";
  var SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 giờ

  var gateEl = document.getElementById("gate");
  var appRootEl = document.getElementById("appRoot");
  var gateErrorEl = document.getElementById("gateError");
  var gateLoadingEl = document.getElementById("gateLoading");
  var userEmailLbl = document.getElementById("userEmailLbl");
  var btnLogout = document.getElementById("btnLogout");

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

  function saveSession(email){
    try{
      localStorage.setItem(SESSION_KEY, JSON.stringify({
        e: email, exp: Date.now() + SESSION_TTL_MS
      }));
    } catch(e){}
  }

  function readSession(){
    try{
      var raw = localStorage.getItem(SESSION_KEY);
      if(!raw) return null;
      var s = JSON.parse(raw);
      if(!s || !s.exp || Date.now() > s.exp) return null;
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
        saveSession(payload.email);
        setLoading(false);
        unlock(payload.email);
      })
      .catch(function(err){
        setLoading(false);
        showError("Đăng nhập thất bại, vui lòng thử lại.");
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
