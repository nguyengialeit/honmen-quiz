(function(){
  "use strict";

  // ---------- build normalized question pools ----------
  function buildSimple(raw, prefix){
    return raw.map(function(r, i){
      return { id: prefix + (i+1), kind:"simple", q:r[0], ans: !!r[1], note: r[2]||"", img: r[3]||null };
    });
  }
  function buildTH(raw){
    return raw.map(function(t, i){
      return {
        id: "TH" + (i+1), kind:"th", scene:t.scene, img: t.img||null,
        stmts: t.stmts.map(function(s){ return {q:s[0], ans:!!s[1], note:s[2]||""}; })
      };
    });
  }

  var ALL_SIMPLE = buildSimple(DE1_RAW, "D1-").concat(buildSimple(DE2_RAW, "D2-"));
  var ALL_TH = buildTH(TH_RAW);

  var EXAMS = SET_SIMPLE_IDX.map(function(idxList, i){
    return {
      key: "exam" + (i+1),
      label: "Đề " + (i+1),
      simple: idxList.map(function(ix){ return ALL_SIMPLE[ix]; }),
      th: SET_TH_IDX[i].map(function(ix){ return ALL_TH[ix]; })
    };
  });

  // ---------- state ----------
  var EXAM_SECONDS = 50 * 60;
  var state = {
    examKey: null,
    examLabel: "",
    pool: [],
    idx: 0,
    results: [],
    timerId: null,
    timeLeft: 0,
    timed: false
  };

  var qTimerEl = document.getElementById("qTimer");

  // ---------- save / resume progress (per exam, this browser only) ----------
  var STORAGE_PREFIX = "honmen_progress_";

  function saveProgress(){
    if(!state.timed || !state.examKey) return;
    try{
      var payload = {
        examKey: state.examKey,
        examLabel: state.examLabel,
        pool: state.pool.map(cloneFresh),
        results: state.results,
        timeLeft: state.timeLeft,
        savedAt: Date.now()
      };
      localStorage.setItem(STORAGE_PREFIX + state.examKey, JSON.stringify(payload));
    } catch(e){}
  }

  function loadProgress(examKey){
    try{
      var raw = localStorage.getItem(STORAGE_PREFIX + examKey);
      if(!raw) return null;
      var data = JSON.parse(raw);
      if(!data || !data.pool || !data.results || data.results.length >= data.pool.length) return null;
      return data;
    } catch(e){ return null; }
  }

  function clearProgress(examKey){
    try{ localStorage.removeItem(STORAGE_PREFIX + examKey); } catch(e){}
  }

  function stopTimer(){
    if(state.timerId){ clearInterval(state.timerId); state.timerId = null; }
  }

  function formatTime(sec){
    sec = Math.max(0, sec);
    var m = Math.floor(sec/60), s = sec%60;
    return m + ":" + (s<10 ? "0"+s : s);
  }

  function startTimer(initialSeconds){
    stopTimer();
    state.timed = true;
    state.timeLeft = (initialSeconds===undefined) ? EXAM_SECONDS : initialSeconds;
    qTimerEl.hidden = false;
    renderTimer();
    state.timerId = setInterval(function(){
      state.timeLeft--;
      renderTimer();
      saveProgress();
      if(state.timeLeft <= 0){
        stopTimer();
        finishQuiz(true);
      }
    }, 1000);
  }

  function renderTimer(){
    qTimerEl.textContent = "⏱ " + formatTime(state.timeLeft);
    qTimerEl.classList.toggle("warn", state.timeLeft <= 300);
  }

  function shuffle(arr){
    var a = arr.slice();
    for(var i=a.length-1;i>0;i--){
      var j = Math.floor(Math.random()*(i+1));
      var t=a[i]; a[i]=a[j]; a[j]=t;
    }
    return a;
  }

  function cloneFresh(item){
    var copy = {};
    for(var k in item){
      if(k.charAt(0) === "_") continue;
      copy[k] = item[k];
    }
    if(copy.stmts) copy.stmts = copy.stmts.map(function(s){ return {q:s.q, ans:s.ans, note:s.note}; });
    return copy;
  }

  // ---------- DOM refs ----------
  var homeHeader = document.getElementById("homeHeader");
  var screenHome = document.getElementById("screen-home");
  var screenQuiz = document.getElementById("screen-quiz");
  var screenResult = document.getElementById("screen-result");
  var modeList = document.getElementById("modeList");
  var qModeLabel = document.getElementById("qModeLabel");
  var qCounter = document.getElementById("qCounter");
  var progressFill = document.getElementById("progressFill");
  var sceneEl = document.getElementById("scene");
  var qtextEl = document.getElementById("qtext");
  var qimgEl = document.getElementById("qimg");
  var simpleAns = document.getElementById("simpleAns");
  var simpleFeedback = document.getElementById("simpleFeedback");
  var thBlock = document.getElementById("thBlock");
  var thSubmitRow = document.getElementById("thSubmitRow");
  var thCheckBtn = document.getElementById("thCheckBtn");
  var btnNext = document.getElementById("btnNext");
  var btnQuit = document.getElementById("btnQuit");
  var btnHome = document.getElementById("btnHome");
  var btnRedo = document.getElementById("btnRedo");
  var btnPause = document.getElementById("btnPause");
  var btnResume = document.getElementById("btnResume");
  var pausePanel = document.getElementById("pausePanel");
  var quizBody = document.getElementById("quizBody");

  function pauseQuiz(){
    if(!state.timed || !state.timerId) return;
    stopTimer();
    saveProgress();
    quizBody.hidden = true;
    pausePanel.hidden = false;
  }

  function unpauseQuiz(){
    pausePanel.hidden = true;
    quizBody.hidden = false;
    startTimer(state.timeLeft);
  }

  btnPause.addEventListener("click", pauseQuiz);
  btnResume.addEventListener("click", unpauseQuiz);

  function showScreen(name){
    homeHeader.hidden = name!=="home";
    screenHome.hidden = name!=="home";
    screenQuiz.hidden = name!=="quiz";
    screenResult.hidden = name!=="result";
    window.scrollTo(0,0);
  }

  // ---------- home ----------
  function renderHome(){
    modeList.innerHTML = "";
    EXAMS.forEach(function(ex){
      var saved = loadProgress(ex.key);
      var card = document.createElement("div");
      if(saved){
        card.className = "mode-card has-progress";
        card.innerHTML =
          '<span class="mprow"><span><span class="mtitle">'+ex.label+'</span><br><span class="mdesc">Đang dở — đã làm '+saved.results.length+'/'+saved.pool.length+' câu, còn '+formatTime(saved.timeLeft)+'</span></span></span>' +
          '<span class="mactions">' +
            '<button type="button" class="btn btn-primary" data-act="continue">Tiếp tục</button>' +
            '<button type="button" class="btn" data-act="restart">Làm lại từ đầu</button>' +
          '</span>';
        card.querySelector('[data-act="continue"]').addEventListener("click", function(){ resumeExam(ex, saved); });
        card.querySelector('[data-act="restart"]').addEventListener("click", function(){ clearProgress(ex.key); startExam(ex); });
      } else {
        card.className = "mode-card";
        card.innerHTML = '<span><span class="mtitle">'+ex.label+'</span><br><span class="mdesc">90 câu Đúng/Sai + 5 câu tình huống · 100 điểm</span></span><span class="marrow">→</span>';
        card.addEventListener("click", function(){ startExam(ex); });
      }
      modeList.appendChild(card);
    });
  }

  // ---------- quiz flow ----------
  function startExam(ex){
    clearProgress(ex.key);
    var pool = shuffle(ex.simple).concat(shuffle(ex.th));
    state.examKey = ex.key;
    state.examLabel = ex.label;
    state.pool = pool.map(cloneFresh);
    state.idx = 0;
    state.results = [];
    qModeLabel.textContent = ex.label;
    pausePanel.hidden = true;
    quizBody.hidden = false;
    btnPause.hidden = false;
    showScreen("quiz");
    renderQuestion();
    startTimer();
  }

  function resumeExam(ex, saved){
    state.examKey = ex.key;
    state.examLabel = saved.examLabel || ex.label;
    state.pool = saved.pool.map(cloneFresh);
    state.results = saved.results;
    state.idx = Math.min(saved.results.length, state.pool.length - 1);
    qModeLabel.textContent = state.examLabel;
    pausePanel.hidden = true;
    quizBody.hidden = false;
    btnPause.hidden = false;
    showScreen("quiz");
    renderQuestion();
    startTimer(saved.timeLeft);
  }

  function startCustomRun(label, items){
    state.examKey = null;
    state.examLabel = label;
    state.pool = items.map(cloneFresh);
    state.idx = 0;
    state.results = [];
    state.timed = false;
    qTimerEl.hidden = true;
    stopTimer();
    pausePanel.hidden = true;
    quizBody.hidden = false;
    btnPause.hidden = true;
    qModeLabel.textContent = label;
    showScreen("quiz");
    renderQuestion();
  }

  function currentItem(){ return state.pool[state.idx]; }

  function renderQuestion(){
    var item = currentItem();
    btnNext.disabled = true;
    qCounter.textContent = "Câu " + (state.idx+1) + "/" + state.pool.length;
    progressFill.style.width = Math.round((state.idx)/state.pool.length*100) + "%";

    simpleFeedback.innerHTML = "";
    simpleAns.innerHTML = "";
    thBlock.innerHTML = "";
    qimgEl.hidden = true;
    qimgEl.removeAttribute("src");

    if(item.kind === "simple"){
      sceneEl.hidden = true;
      thBlock.hidden = true;
      thSubmitRow.hidden = true;
      simpleAns.hidden = false;
      qtextEl.textContent = item.q;
      if(item.img){ qimgEl.src = item.img; qimgEl.hidden = false; }

      var bTrue = mkAnsBtn("Đúng", true);
      var bFalse = mkAnsBtn("Sai", false);
      simpleAns.appendChild(bTrue);
      simpleAns.appendChild(bFalse);
    } else {
      // tình huống
      simpleAns.hidden = true;
      sceneEl.hidden = false;
      sceneEl.textContent = item.scene;
      if(item.img){ qimgEl.src = item.img; qimgEl.hidden = false; }
      qtextEl.textContent = "Nhận định sau đây đúng hay sai? (cần đúng cả 3 ý mới được 2 điểm)";
      thBlock.hidden = false;
      thSubmitRow.hidden = false;
      thCheckBtn.disabled = false;

      item._picks = [null,null,null];
      item.stmts.forEach(function(s, si){
        var block = document.createElement("div");
        block.className = "stmt-block";
        block.innerHTML =
          '<div class="stext">('+(si+1)+') '+escapeHtml(s.q)+'</div>' +
          '<div class="stmt-toggle">' +
            '<button type="button" data-si="'+si+'" data-v="1">Đúng</button>' +
            '<button type="button" data-si="'+si+'" data-v="0">Sai</button>' +
          '</div>' +
          '<div class="snote" hidden></div>';
        thBlock.appendChild(block);
      });

      thBlock.addEventListener("click", onThPick);
    }
  }

  function mkAnsBtn(label, val){
    var b = document.createElement("button");
    b.className = "ans-btn " + (val ? "true-opt" : "false-opt");
    b.textContent = label;
    b.addEventListener("click", function(){ onSimpleAnswer(val, b); });
    return b;
  }

  function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function onSimpleAnswer(val, btnEl){
    var item = currentItem();
    if(item._answered) return;
    item._answered = true;
    var correct = (val === item.ans);

    Array.prototype.forEach.call(simpleAns.children, function(b){ b.disabled = true; });
    var truthBtn = simpleAns.children[0], falseBtn = simpleAns.children[1];
    (item.ans ? truthBtn : falseBtn).classList.add("correct");
    if(!correct) btnEl.classList.add("wrong");
    else btnEl.classList.add("correct");
    Array.prototype.forEach.call(simpleAns.children, function(b){
      if(!b.classList.contains("correct") && !b.classList.contains("wrong")) b.classList.add("dim");
    });

    var fb = document.createElement("div");
    fb.className = "feedback " + (correct ? "ok" : "no");
    fb.innerHTML = "<b>" + (correct ? "Chính xác! (+1 điểm)" : "Chưa đúng — đáp án đúng là: " + (item.ans?"Đúng":"Sai")) + "</b>" +
      (!correct && item.note ? '<div class="note">'+escapeHtml(item.note)+'</div>' : "");
    simpleFeedback.appendChild(fb);

    state.results.push({ kind:"simple", item:item, correct: correct, userAns: val, weight:1 });
    btnNext.disabled = false;
    saveProgress();
  }

  function onThPick(e){
    var btn = e.target.closest("button[data-si]");
    if(!btn) return;
    var item = currentItem();
    if(item._graded) return;
    var si = +btn.dataset.si, v = +btn.dataset.v;
    item._picks[si] = v;
    var block = btn.closest(".stmt-block");
    Array.prototype.forEach.call(block.querySelectorAll(".stmt-toggle button"), function(b){
      b.classList.remove("sel-true","sel-false");
    });
    btn.classList.add(v===1 ? "sel-true" : "sel-false");
    thCheckBtn.disabled = item._picks.some(function(p){ return p===null; });
  }

  thCheckBtn.addEventListener("click", function(){
    var item = currentItem();
    if(item._graded) return;
    item._graded = true;
    var blocks = thBlock.querySelectorAll(".stmt-block");
    var allCorrect = true;
    item.stmts.forEach(function(s, si){
      var block = blocks[si];
      block.classList.add("graded");
      var pick = item._picks[si];
      var isRight = (pick === (s.ans?1:0));
      if(!isRight) allCorrect = false;
      Array.prototype.forEach.call(block.querySelectorAll(".stmt-toggle button"), function(b){
        b.disabled = true;
        var bv = +b.dataset.v;
        if(bv === (s.ans?1:0)) b.classList.add("correct");
        else if(bv === pick) b.classList.add("wrong");
      });
      if(!isRight){
        var noteEl = block.querySelector(".snote");
        noteEl.hidden = false;
        noteEl.textContent = "Đáp án đúng: " + (s.ans?"Đúng":"Sai") + (s.note ? ". " + s.note : "");
      }
    });
    thCheckBtn.disabled = true;

    var fb = document.createElement("div");
    fb.className = "feedback " + (allCorrect ? "ok" : "no");
    fb.innerHTML = "<b>" + (allCorrect ? "Chính xác cả 3 ý! (+2 điểm)" : "Chưa đúng hết 3 ý (0 điểm)") + "</b>";
    thBlock.appendChild(fb);

    state.results.push({ kind:"th", item:item, correct: allCorrect, userStmts: item._picks.slice(), weight:2 });
    btnNext.disabled = false;
    saveProgress();
  });

  btnNext.addEventListener("click", function(){
    if(state.idx < state.pool.length - 1){
      state.idx++;
      renderQuestion();
    } else {
      finishQuiz();
    }
  });

  function exitToHome(){ saveProgress(); stopTimer(); renderHome(); showScreen("home"); }
  btnQuit.addEventListener("click", exitToHome);
  document.getElementById("btnQuitPaused").addEventListener("click", exitToHome);

  // ---------- result ----------
  function finishQuiz(timeUp){
    stopTimer();
    if(state.examKey) clearProgress(state.examKey);
    for(var i = state.results.length; i < state.pool.length; i++){
      var it = state.pool[i];
      var w = it.kind === "th" ? 2 : 1;
      state.results.push({ kind: it.kind, item: it, correct:false, weight:w, unanswered:true, userAns:null, userStmts:[null,null,null] });
    }
    progressFill.style.width = "100%";
    var total = state.results.length;
    var correctCount = state.results.filter(function(r){ return r.correct; }).length;
    var earned = state.results.reduce(function(sum,r){ return sum + (r.correct ? r.weight : 0); }, 0);
    var maxPoints = state.results.reduce(function(sum,r){ return sum + r.weight; }, 0);
    var pct = maxPoints ? Math.round(earned/maxPoints*100) : 0;

    document.getElementById("resultTitle").textContent = "Kết quả — " + state.examLabel + (timeUp ? " (hết giờ)" : "");
    var pctEl = document.getElementById("resultPct");
    pctEl.textContent = earned + "/" + maxPoints + " điểm";
    pctEl.className = "pct " + (pct>=80 ? "good" : (pct<50 ? "bad" : ""));
    document.getElementById("resultLbl").textContent = correctCount + "/" + total + " câu đúng (" + pct + "%)";

    var passBadge = document.getElementById("passBadge");
    if (maxPoints === 100) {
      var passed = earned >= 90;
      passBadge.hidden = false;
      passBadge.className = "passbadge " + (passed ? "pass" : "fail");
      passBadge.textContent = passed ? "✓ ĐỖ (từ 90 điểm)" : "✗ TRƯỢT (cần từ 90 điểm)";
    } else {
      passBadge.hidden = true;
    }

    var statBlock = document.getElementById("statBlock");
    statBlock.innerHTML = "";
    function addStat(k,v){
      var row = document.createElement("div");
      row.className = "statrow";
      row.innerHTML = '<span class="k">'+k+'</span><span class="v">'+v+'</span>';
      statBlock.appendChild(row);
    }
    var simpleResults = state.results.filter(function(r){ return r.kind==="simple"; });
    var thResults = state.results.filter(function(r){ return r.kind==="th"; });
    addStat("Tổng số câu", total + " (" + simpleResults.length + " Đúng/Sai + " + thResults.length + " tình huống)");
    addStat("Số câu đúng", correctCount);
    addStat("Số câu sai", total - correctCount);
    addStat("Điểm Đúng/Sai", simpleResults.filter(function(r){return r.correct;}).length + "/" + simpleResults.length + " điểm");
    addStat("Điểm tình huống", (thResults.filter(function(r){return r.correct;}).length*2) + "/" + (thResults.length*2) + " điểm");
    addStat("Tổng điểm", earned + "/" + maxPoints);

    renderReviewList();

    var wrongCount = total - correctCount;
    btnRedo.hidden = wrongCount === 0;
    btnRedo.onclick = function(){
      var wrong = state.results.filter(function(r){ return !r.correct; }).map(function(r){ return r.item; });
      startCustomRun("Làm lại câu sai · " + state.examLabel, wrong);
    };

    showScreen("result");
  }

  function renderReviewList(){
    var list = document.getElementById("reviewList");
    list.innerHTML = "";
    state.results.forEach(function(r, i){
      var row = document.createElement("div");
      row.className = "review-row";
      var shortText = r.kind === "simple" ? r.item.q : r.item.scene;
      var head = document.createElement("button");
      head.type = "button";
      head.className = "review-head";
      head.innerHTML =
        '<span class="badge ' + (r.correct?"ok":"no") + '">' + (r.correct?"✓":(r.unanswered?"–":"✗")) + '</span>' +
        '<span class="rnum">Câu ' + (i+1) + '</span>' +
        '<span class="rtext">' + escapeHtml(shortText) + (r.unanswered?" (chưa làm)":"") + '</span>' +
        '<span class="rchev">›</span>';
      var body = document.createElement("div");
      body.className = "review-body";
      body.hidden = true;
      body.innerHTML = buildReviewBody(r);
      head.addEventListener("click", function(){
        var open = row.classList.toggle("open");
        body.hidden = !open;
      });
      row.appendChild(head);
      row.appendChild(body);
      list.appendChild(row);
    });
  }

  function buildReviewBody(r){
    if(r.kind === "simple"){
      var it = r.item;
      var imgHtml = it.img ? '<img class="qimg" src="'+it.img+'" style="max-width:200px">' : "";
      var youChose = r.userAns===null ? "Chưa trả lời (hết giờ)" : (r.userAns?"Đúng":"Sai");
      return '<div class="rq">' + escapeHtml(it.q) + '</div>' + imgHtml +
        '<div class="rline ryou">Bạn chọn: <b>' + youChose + '</b></div>' +
        '<div class="rline">Đáp án đúng: <b class="' + (r.correct?"tag-ok":"tag-no") + '">' + (it.ans?"Đúng":"Sai") + '</b></div>' +
        (it.note ? '<div class="rnote">' + escapeHtml(it.note) + '</div>' : "");
    } else {
      var it2 = r.item;
      var imgHtml2 = it2.img ? '<img class="qimg" src="'+it2.img+'" style="max-width:200px">' : "";
      var html = '<div class="rq">' + escapeHtml(it2.scene) + '</div>' + imgHtml2;
      it2.stmts.forEach(function(s, si){
        var pick = r.userStmts[si];
        var isRight = pick === (s.ans?1:0);
        var youChoseS = pick===null||pick===undefined ? "Chưa trả lời" : (pick===1?"Đúng":"Sai");
        html += '<div class="review-stmt">' +
          '<div class="rsline">(' + (si+1) + ') ' + escapeHtml(s.q) + '</div>' +
          '<div class="rline ryou">Bạn chọn: <b>' + youChoseS + '</b> — Đáp án đúng: <b class="' + (isRight?"tag-ok":"tag-no") + '">' + (s.ans?"Đúng":"Sai") + '</b></div>' +
          (!isRight && s.note ? '<div class="rnote">' + escapeHtml(s.note) + '</div>' : "") +
          '</div>';
      });
      html += '<div class="rline" style="margin-top:8px">Kết quả: <b class="' + (r.correct?"tag-ok":"tag-no") + '">' + (r.correct?"Đúng cả 3 ý (+2 điểm)":"Chưa đúng hết 3 ý (0 điểm)") + '</b></div>';
      return html;
    }
  }

  btnHome.addEventListener("click", function(){ renderHome(); showScreen("home"); });

  // ---------- init ----------
  renderHome();
  showScreen("home");
})();
