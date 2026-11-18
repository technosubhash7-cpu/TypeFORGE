// [Module, Title, Description, Practice Text]
const lessonData = [
  ["Home Row", "Home row: F and J", "Find the home keys and learn the correct resting position.", "f j f j ff jj fj jf jff fjj fjf jfj"],
  ["Home Row", "Home row: D and K", "Add the middle fingers while keeping your hands centred.", "d k d k dd kk dk kd fjdk kdjf fjkd"],
  ["Home Row", "Home row: S and L", "Practise the ring fingers with steady, controlled movement.", "s l s l ss ll sl ls sdlk lkds fslj"],
  ["Home Row", "Home row: A and ;", "Complete the home row and practise short combinations.", "a ; a ; aa ;; asdf jkl; fdsa ;lkj"],
  ["Home Row", "Home row words & G, H", "Add index-finger reaches G and H to type full home-row words.", "sad fall ask flask salad lads glad hall dash flash"],
  ["Top Row", "Top row: E and I", "Reach upward with your middle fingers, then return to home row.", "e i e i ee ii de ki lie side life like"],
  ["Top Row", "Top row: R and U", "Practise the index-finger reaches on the top row.", "r u r u rr uu run true rule sure user"],
  ["Top Row", "Top row: T and O", "Add two more top-row keys without looking down.", "t o t o to too tool root store order"],
  ["Top Row", "Top row: Q, W, Y and P", "Complete the entire top letter row with smooth pinky and index reaches.", "quiet power your query write poetry yesterday"],
  ["Bottom Row", "Bottom row: C and comma", "Reach down carefully and return your fingers to home row.", "c , c , cc ,, can come, nice, cold, call,"],
  ["Bottom Row", "Bottom row: V and M", "Practise the lower index-finger reaches with relaxed movement.", "v m v m move minimum vivid silver moment"],
  ["Bottom Row", "Bottom row: B and N", "Stretch the index fingers cleanly to B and N without shifting wrists.", "bn nb ban name number cabin ribbon banner"],
  ["Bottom Row", "Bottom row: Z, X and period", "Finish all alphabet keys and end sentences cleanly with a period.", "zero next box. zone six. exact mix. lazy fox."],
  ["Capitals & Punctuation", "Left & right Shift keys", "Use the opposite hand's pinky to hold Shift for clean capital letters.", "Alice Bob Charlie David India Jaipur Sikar Delhi"],
  ["Capitals & Punctuation", "Apostrophes & quotation marks", "Practise right-pinky reaches for contractions and quoted speech.", "It's a great day. Don't rush; stay steady and \"focus\"."],
  ["Capitals & Punctuation", "Questions & exclamations", "Combine Shift with punctuation marks at the end of sentences.", "Ready to start? Keep going! Speed follows accuracy."],
  ["Numbers", "Numbers: 4, 5, 6 and 7", "Reach up from the index fingers to the center number keys.", "45 67 46 57 456 567 4756 6475 5467"],
  ["Numbers", "Numbers: 2, 3, 8 and 9", "Use your middle and ring fingers to reach the upper number row.", "23 89 28 39 238 892 3829 9283 2389"],
  ["Numbers", "Numbers: 1 and 0", "Stretch your left and right pinkies accurately to 1 and 0.", "10 100 101 2026 1990 1050 2010 1000"],
  ["Numbers", "Dates, times & invoices", "Type realistic numeric records, dates, and quantities.", "Invoice 1048 dated 18/11/2026 for 250 units at 14:30."],
  ["Symbols & Mastery", "Hyphens, slashes & brackets", "Master common technical and formatting symbols on the right hand.", "well-known 24/7 [item-1] (active) /home/user/docs"],
  ["Symbols & Mastery", "Emails & web addresses", "Practise @, #, $, %, & and dots used in everyday digital work.", "support@typeforge.io #101 $45.00 100% fast & clean"],
  ["Symbols & Mastery", "The pangram sprint", "Every letter of the English alphabet in three classic pangrams.", "The quick brown fox jumps over the lazy dog. Pack my box with five dozen liquor jugs."],
  ["Symbols & Mastery", "Professional fluency test", "Full-keyboard mastery combining capitals, numbers, and punctuation.", "Consistent daily practice builds lasting muscle memory. Aim for 96% accuracy at 40+ WPM!"]
];

const practicePassages = {
  everyday: [
    "The best way to improve your typing is to practise a little every day. Keep your fingers close to the home row, look at the screen, and focus on accuracy before speed. With patience and consistency, your confidence will grow.",
    "Morning routines set the tone for the entire day. Taking ten quiet minutes to plan your priorities, clear your desk, and warm up your fingers on the keyboard makes every task feel smoother and more manageable.",
    "Learning a physical skill takes repetition rather than force. Musicians play scales slowly before performing fast passages, and typists build clean rhythm long before chasing high speeds."
  ],
  office: [
    "Please confirm the updated schedule for Tuesday at 10:30 AM. All department reports, attendance sheets, and vendor invoices must be verified and uploaded to the shared folder before 5:00 PM.",
    "Thank you for reaching out regarding your recent order #4829. Our support team has reviewed the billing summary and processed an updated receipt for your records.",
    "Clear communication saves hours of follow-up work. Keep emails concise, double-check numbers and dates before sending, and summarize key action items at the top."
  ],
  tech: [
    "Clean code is easy to read, simple to debug, and built with clear naming conventions. Always test edge cases, keep functions focused on a single task, and commit changes with descriptive messages.",
    "Modern web applications run directly inside the browser using HTML, CSS, and JavaScript. Storing lightweight user preferences in localStorage keeps the interface fast without requiring a backend server.",
    "Keyboard shortcuts dramatically speed up daily computer work. Mastering Ctrl+C, Ctrl+V, Ctrl+Z, and Alt+Tab lets you navigate documents without lifting your hands from the home row."
  ],
  numbers: [
    "Order #7092 includes 15 keyboards at $42.50 each, 8 monitors at $189.00 each, and 24 cables at $6.75 each. Total payable amount before 18% GST equals $2,311.50.",
    "Flight AI-402 departs at 06:45 on 24/11/2026 from Gate 12B and arrives at 09:15. Please check in online at least 120 minutes prior to departure.",
    "Quarterly metrics rose by 14.8% in Q3 2026, reaching 12,450 active users across 38 cities with an average session duration of 4 minutes and 35 seconds."
  ]
};

const drillWordBank = [
  "about","above","after","again","always","among","around","because","before","between","beyond","build",
  "change","clear","common","complete","control","create","daily","design","develop","different","direct",
  "during","early","energy","enough","every","example","experience","family","follow","form","future","general",
  "ground","growth","habit","health","history","improve","include","industry","inside","interest","journey",
  "keyboard","knowledge","language","learning","letter","level","market","memory","method","minute","modern",
  "moment","motion","nature","network","number","object","office","order","pattern","people","perfect",
  "period","person","place","point","power","practice","prepare","problem","process","program","project",
  "quality","question","quick","quiet","reach","reason","record","report","result","return","rhythm","right",
  "school","screen","second","section","service","should","signal","simple","skill","small","smooth","social",
  "sound","source","space","speed","standard","start","steady","story","strong","structure","study","success",
  "support","system","target","theory","thought","through","together","toward","training","travel","update",
  "value","version","visual","voice","water","window","within","without","world","write","young","zero","zone"
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const keyboardRows = [
  ["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],
  ["Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\"],
  ["Caps","a","s","d","f","g","h","j","k","l",";","'","Enter"],
  ["Shift","z","x","c","v","b","n","m",",",".","/","Shift"],
  ["Ctrl","Alt","Space","Alt","Ctrl"]
];

const shiftSymbolMap = {
  "~":"`","!":"1","@":"2","#":"3","$":"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0","_":"-","+":"=",
  "{":"[","}":"]","|":"\\",":":";","\"":"'","<":",",">":".","?":"/"
};

const fingerMap = {
  "`":["Left pinky","pinky"],"1":["Left pinky","pinky"],q:["Left pinky","pinky"],a:["Left pinky","pinky"],z:["Left pinky","pinky"],
  "2":["Left ring finger","ring"],w:["Left ring finger","ring"],s:["Left ring finger","ring"],x:["Left ring finger","ring"],
  "3":["Left middle finger","middle"],e:["Left middle finger","middle"],d:["Left middle finger","middle"],c:["Left middle finger","middle"],
  "4":["Left index finger","index"],"5":["Left index finger","index"],r:["Left index finger","index"],f:["Left index finger","index"],v:["Left index finger","index"],t:["Left index finger","index"],g:["Left index finger","index"],b:["Left index finger","index"],
  "6":["Right index finger","index"],"7":["Right index finger","index"],y:["Right index finger","index"],h:["Right index finger","index"],n:["Right index finger","index"],u:["Right index finger","index"],j:["Right index finger","index"],m:["Right index finger","index"],
  "8":["Right middle finger","middle"],i:["Right middle finger","middle"],k:["Right middle finger","middle"],",":["Right middle finger","middle"],
  "9":["Right ring finger","ring"],o:["Right ring finger","ring"],l:["Right ring finger","ring"],".":["Right ring finger","ring"],
  "0":["Right pinky","pinky"],"-":["Right pinky","pinky"],"=":["Right pinky","pinky"],p:["Right pinky","pinky"],"[":["Right pinky","pinky"],"]":["Right pinky","pinky"],"\\":["Right pinky","pinky"],";":["Right pinky","pinky"],"'":["Right pinky","pinky"],"/":["Right pinky","pinky"],
  " ":["Either thumb","thumb"]
};

function keyLabel(k){
  return k === " " ? "SPACE" : k.length === 1 ? k.toUpperCase() : k;
}

function renderKeyboard(nextChar = ""){
  const host = $("#virtual-keyboard");
  if(!host) return;
  const baseChar = shiftSymbolMap[nextChar] || nextChar.toLowerCase();
  const needsShift = Boolean(nextChar && (shiftSymbolMap[nextChar] || (nextChar !== nextChar.toLowerCase() && nextChar === nextChar.toUpperCase())));

  host.innerHTML = keyboardRows.map(row => `<div class="key-row">${row.map(k => {
    const norm = k.toLowerCase();
    const info = fingerMap[norm] || ["Use the nearest comfortable finger", ""];
    const active = nextChar && (
      baseChar === norm ||
      (nextChar === " " && k === "Space") ||
      (needsShift && k === "Shift")
    );
    const width = ["Backspace","Caps","Enter","Shift","Tab"].includes(k) ? "wide" : k === "Space" ? "space" : "";
    return `<div class="vkey ${info[1]} ${width} ${active ? "active-key" : ""}">${keyLabel(k)}${info[1] ? `<span class="finger-tag">${info[1][0].toUpperCase()}</span>` : ""}</div>`;
  }).join("")}</div>`).join("");

  const info = fingerMap[baseChar] || (nextChar === " " ? fingerMap[" "] : null);
  const shiftNote = needsShift ? " + Hold Shift" : "";
  $("#finger-hint").textContent = nextChar
    ? (info ? `Next key: ${nextChar === " " ? "SPACE" : nextChar}${shiftNote} · ${info[0]}` : `Next key: ${nextChar}${shiftNote} · Use the appropriate nearby finger`)
    : "Start typing to see which finger to use.";
}

const storeKey = "typeforge-data-v1";
let data = JSON.parse(localStorage.getItem(storeKey) || '{"completed":[],"tests":[],"keyStats":{}}');
if(!data.keyStats) data.keyStats = {};

let activeLesson = null, isSmartDrill = false, selectedModule = "all";
let duration = 60, remaining = 60, interval = null, startedAt = null, finished = false;
let promptText = practicePassages.everyday[0];
let maxCheckedIndex = 0, sessionMistakes = {};

const save = () => localStorage.setItem(storeKey, JSON.stringify(data));
const esc = s => s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;");

function recordKeystroke(expectedChar, typedChar){
  if(!expectedChar || expectedChar === " ") return;
  const key = expectedChar.toLowerCase();
  if(!data.keyStats[key]) data.keyStats[key] = {hits: 0, misses: 0};
  data.keyStats[key].hits++;
  if(typedChar !== expectedChar){
    data.keyStats[key].misses++;
    sessionMistakes[key] = (sessionMistakes[key] || 0) + 1;
  }
}

function getWeakKeys(limit = 6){
  return Object.entries(data.keyStats)
    .filter(([_, s]) => s.hits >= 3 && s.misses > 0)
    .map(([key, s]) => ({
      key,
      hits: s.hits,
      misses: s.misses,
      rate: Math.round((s.misses / s.hits) * 100),
      finger: (fingerMap[shiftSymbolMap[key] || key] || ["Nearby finger"])[0]
    }))
    .sort((a, b) => b.rate - a.rate || b.misses - a.misses)
    .slice(0, limit);
}

function generateSmartDrillText(){
  const weak = getWeakKeys(4);
  const targets = weak.length ? weak.map(w => w.key) : ["e", "t", "r", "i"];
  const chunks = [];

  // Part 1: Focused rhythmic key pairs
  targets.forEach(k => {
    const partner = k === "f" ? "j" : (["a","s","d","f","q","w","e","r","z","x","c","v"].includes(k) ? "j" : "f");
    chunks.push(`${k}${k} ${k}${partner} ${partner}${k} ${k}${k}${partner}`);
  });

  // Part 2: Real words containing the weak keys
  const matchingWords = drillWordBank.filter(w => targets.some(t => w.includes(t)));
  const pool = matchingWords.length >= 8 ? matchingWords : drillWordBank;
  for(let i = 0; i < 14; i++){
    chunks.push(pool[Math.floor(Math.random() * pool.length)]);
  }

  return {
    text: chunks.join(" "),
    targets,
    isFallback: weak.length === 0
  };
}

function launchSmartDrill(){
  const drill = generateSmartDrill();
  activeLesson = null;
  isSmartDrill = true;
  promptText = drill.text;
  resetTest();
  go("practice");
  $("#typing-status").textContent = drill.isFallback
    ? "Smart Drill: Starter accuracy warm-up (type more tests to unlock personalized weak-key drills)"
    : `Smart Drill · Targeting your weak keys: ${drill.targets.map(k => k.toUpperCase()).join(", ")}`;
  $("#typing-input").focus();
}

function pickPassage(cat = $("#passage-category")?.value || "all"){
  const pool = cat === "all" ? Object.values(practicePassages).flat() : (practicePassages[cat] || practicePassages.everyday);
  const choices = pool.filter(p => p !== promptText);
  return choices[Math.floor(Math.random() * choices.length)] || pool[0];
}

function go(view){
  $$(".view").forEach(v => v.classList.add("hidden"));
  $("#" + view + "-view").classList.remove("hidden");
  $$(".nav-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
  $("#page-title").textContent = {dashboard:"Dashboard",lessons:"Lessons",practice:"Practice",statistics:"Statistics"}[view];
  if(view === "statistics") renderStats();
  if(view === "dashboard") renderDashboard();
}

$$(".nav-item").forEach(b => b.addEventListener("click", () => go(b.dataset.view)));
$$("[data-goto]").forEach(b => b.addEventListener("click", () => go(b.dataset.goto)));

function renderLessons(){
  const filtered = lessonData.map((item, i) => ({item, i})).filter(({item}) => selectedModule === "all" || item[0] === selectedModule);
  $("#all-lessons").innerHTML = filtered.map(({item, i}) => `
    <article class="lesson-card">
      <div class="lesson-card-top">
        <span class="lesson-number">${String(i+1).padStart(2,"0")}</span>
        <span class="muted">${data.completed.includes(i) ? "✓ Completed" : "Lesson " + (i+1)}</span>
      </div>
      <span class="module-badge">${item[0]}</span>
      <h3>${item[1]}</h3>
      <p>${item[2]}</p>
      <button data-lesson="${i}">${data.completed.includes(i) ? "Practise again" : "Start lesson →"}</button>
    </article>`).join("");

  const upcoming = lessonData.map((item, i) => ({item, i})).filter(({i}) => !data.completed.includes(i));
  const dashList = (upcoming.length ? upcoming : lessonData.map((item, i) => ({item, i}))).slice(0, 4);
  $("#dashboard-lessons").innerHTML = dashList.map(({item, i}) => `
    <div class="lesson-row" style="cursor:pointer" data-lesson="${i}">
      <span class="lesson-number">${String(i+1).padStart(2,"0")}</span>
      <div><b>${item[1]}</b><small>${item[0]} · ${item[2]}</small></div>
      <span class="row-status">${data.completed.includes(i) ? "✓" : "Start →"}</span>
    </div>`).join("");

  $$("[data-lesson]").forEach(b => b.addEventListener("click", () => startLesson(+b.dataset.lesson)));
}

$$(".filter-chip").forEach(chip => chip.addEventListener("click", () => {
  $$(".filter-chip").forEach(c => c.classList.remove("active"));
  chip.classList.add("active");
  selectedModule = chip.dataset.module;
  renderLessons();
}));

function startLesson(i){
  activeLesson = i;
  isSmartDrill = false;
  promptText = lessonData[i][3];
  resetTest();
  go("practice");
  $("#typing-status").textContent = `Lesson ${i+1} (${lessonData[i][0]}): ${lessonData[i][1]}`;
  $("#typing-input").focus();
}

function stats(){
  const tests = data.tests;
  return {
    best: tests.length ? Math.max(...tests.map(t => t.wpm)) : 0,
    avg: tests.length ? Math.round(tests.reduce((a,t) => a + t.accuracy, 0) / tests.length) : null
  };
}

function renderWeakKeysUI(){
  const weak = getWeakKeys(6);

  // Dashboard compact pills
  const dashHost = $("#dash-weak-keys");
  if(dashHost){
    dashHost.innerHTML = weak.length
      ? weak.slice(0, 4).map(w => `<div class="weak-pill"><kbd>${w.key.toUpperCase()}</kbd><span>${w.rate}% err</span></div>`).join("")
      : '<span class="muted">Complete a lesson or test to detect weak keys.</span>';
  }

  // Statistics full diagnostic grid
  const statsHost = $("#weak-key-grid");
  if(statsHost){
    statsHost.innerHTML = weak.length
      ? weak.map(w => `
        <div class="weak-card">
          <div class="weak-card-top">
            <div style="display:flex;align-items:center;gap:10px">
              <div class="weak-keycap">${w.key.toUpperCase()}</div>
              <div><b style="font-size:12px">Key "${w.key.toUpperCase()}"</b><small style="display:block;color:var(--muted);font-size:10px">${w.finger}</small></div>
            </div>
            <span class="weak-rate">${w.rate}% error</span>
          </div>
          <div class="weak-bar"><span style="width:${Math.min(100, w.rate)}%"></span></div>
          <div class="weak-meta"><span>${w.misses} misses</span><span>${w.hits} total presses</span></div>
        </div>`).join("")
      : '<p class="muted">No weak keys flagged yet. Type a few lessons or passages and your most missed keys will appear here.</p>';
  }
}

function renderDashboard(){
  const s = stats();
  const total = lessonData.length;
  $("#best-wpm").innerHTML = `${s.best} <small>WPM</small>`;
  $("#avg-accuracy").innerHTML = `${s.avg ?? "—"} <small>%</small>`;
  $("#completed-count").innerHTML = `${data.completed.length} <small>/ ${total}</small>`;
  $("#session-count").textContent = data.tests.length;
  $("#goal-progress").textContent = `${Math.min(s.best, 30)} / 30 WPM`;
  $("#goal-fill").style.width = Math.min(100, s.best / 30 * 100) + "%";
  renderLessons();
  renderWeakKeysUI();
}

function renderStats(){
  const s = stats();
  const total = lessonData.length;
  $("#stats-best").innerHTML = `${s.best} <small>WPM</small>`;
  $("#stats-accuracy").innerHTML = `${s.avg ?? "—"} <small>%</small>`;
  $("#stats-lessons").innerHTML = `${data.completed.length} <small>/ ${total}</small>`;
  $("#stats-sessions").textContent = data.tests.length;
  renderWeakKeysUI();
  $("#history-list").innerHTML = data.tests.length
    ? [...data.tests].reverse().slice(0,12).map(t => `<div class="history-row"><b>${t.wpm} WPM <span>· ${t.accuracy}% accuracy${t.mode ? ` · ${t.mode}` : ""}</span></b><span>${new Date(t.date).toLocaleString()}</span></div>`).join("")
    : '<p class="muted">No tests yet. Complete a typing test to see your results here.</p>';
}

function renderPrompt(typed = ""){
  let html = "";
  for(let i = 0; i < promptText.length; i++){
    let cls = i < typed.length ? (typed[i] === promptText[i] ? "correct" : "incorrect") : (i === typed.length ? "current" : "");
    html += `<span class="${cls}">${esc(promptText[i])}</span>`;
  }
  $("#typing-prompt").innerHTML = html;
  renderKeyboard(promptText[typed.length] || "");
}

function resetTest(){
  clearInterval(interval);
  interval = null;
  remaining = duration;
  startedAt = null;
  finished = false;
  maxCheckedIndex = 0;
  sessionMistakes = {};
  $("#timer").textContent = formatTime(remaining);
  $("#typing-input").value = "";
  $("#typing-input").disabled = false;
  $("#typing-status").textContent = activeLesson !== null
    ? `Lesson ${activeLesson+1}: ${lessonData[activeLesson][1]}`
    : (isSmartDrill ? "Smart Drill active — focus on clean accuracy" : "Click the box and begin typing");
  $("#result-box").classList.add("hidden");
  renderPrompt();
  updateLive();
}

function formatTime(t){
  return `${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`;
}

function updateLive(){
  let typed = $("#typing-input").value;
  // Record keystroke telemetry only for newly reached character positions
  while(maxCheckedIndex < typed.length && maxCheckedIndex < promptText.length){
    recordKeystroke(promptText[maxCheckedIndex], typed[maxCheckedIndex]);
    maxCheckedIndex++;
  }

  let elapsed = startedAt ? Math.max(1, (Date.now() - startedAt) / 1000) : 0;
  let correct = 0;
  for(let i = 0; i < typed.length; i++) if(typed[i] === promptText[i]) correct++;
  let accuracy = typed.length ? Math.round(correct / typed.length * 100) : 100;
  let wpm = elapsed ? Math.round((correct / 5) / (elapsed / 60)) : 0;
  $("#live-wpm").innerHTML = `${wpm} <small>WPM</small>`;
  $("#live-accuracy").innerHTML = `${accuracy}<small>%</small>`;
  $("#live-chars").textContent = typed.length;
  renderPrompt(typed);
  return {wpm, accuracy, typed, correct};
}

function finishTest(){
  if(finished) return;
  finished = true;
  clearInterval(interval);
  interval = null;
  $("#typing-input").disabled = true;
  let r = updateLive();

  const modeLabel = activeLesson !== null
    ? `Lesson ${activeLesson + 1}`
    : (isSmartDrill ? "Smart Drill" : "Practice");

  if(r.typed.length){
    data.tests.push({wpm: r.wpm, accuracy: r.accuracy, mode: modeLabel, date: new Date().toISOString()});
    save();
  }

  const completedLessonIndex = activeLesson;
  if(activeLesson !== null && r.typed.length >= promptText.length && r.accuracy >= 85){
    if(!data.completed.includes(activeLesson)) data.completed.push(activeLesson);
    save();
    activeLesson = null;
  }

  const missedList = Object.entries(sessionMistakes).sort((a,b) => b[1] - a[1]).slice(0, 4);
  $("#session-misses").innerHTML = missedList.length
    ? `Missed keys this session: <b>${missedList.map(([k,c]) => `${k.toUpperCase()} (${c}×)`).join(", ")}</b>`
    : `<span style="color:var(--green)">Zero missed keys! Flawless run.</span>`;

  $("#result-wpm").innerHTML = `${r.wpm} <small>WPM</small>`;
  $("#result-detail").textContent = `${r.accuracy}% accuracy · ${r.correct} correct characters. ${r.accuracy >= 95 ? "Excellent accuracy!" : "Keep practising for more accuracy."}`;
  $("#try-again").textContent = (completedLessonIndex !== null && completedLessonIndex + 1 < lessonData.length)
    ? "Next lesson →"
    : (isSmartDrill ? "New smart drill →" : "Next passage →");
  $("#try-again").dataset.nextLesson = (completedLessonIndex !== null && completedLessonIndex + 1 < lessonData.length) ? completedLessonIndex + 1 : "";
  $("#result-box").classList.remove("hidden");
  $("#typing-status").textContent = "Test complete — keystroke analytics updated.";
  renderDashboard();
}

$("#typing-input").addEventListener("input", () => {
  if(finished) return;
  if(!startedAt){
    startedAt = Date.now();
    interval = setInterval(() => {
      remaining--;
      $("#timer").textContent = formatTime(remaining);
      if(remaining <= 0) finishTest();
    }, 1000);
  }
  let r = updateLive();
  if(r.typed.length >= promptText.length) finishTest();
});

$$(".duration").forEach(b => b.addEventListener("click", () => {
  $$(".duration").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  duration = +b.dataset.time;
  resetTest();
}));

$("#passage-category").addEventListener("change", () => {
  activeLesson = null;
  isSmartDrill = false;
  promptText = pickPassage();
  resetTest();
});

$("#new-passage").addEventListener("click", () => {
  activeLesson = null;
  isSmartDrill = false;
  promptText = pickPassage();
  resetTest();
  $("#typing-input").focus();
});

$("#smart-drill-btn").addEventListener("click", launchSmartDrill);
$("#dash-smart-drill").addEventListener("click", launchSmartDrill);
$("#stats-smart-drill").addEventListener("click", launchSmartDrill);

$("#reset-key-stats").addEventListener("click", () => {
  data.keyStats = {};
  save();
  renderStats();
  renderDashboard();
});

$("#reset-test").addEventListener("click", resetTest);

$("#try-again").addEventListener("click", () => {
  const nextL = $("#try-again").dataset.nextLesson;
  if(nextL !== ""){
    startLesson(+nextL);
  } else if(isSmartDrill){
    launchSmartDrill();
  } else {
    activeLesson = null;
    promptText = pickPassage();
    resetTest();
    $("#typing-input").focus();
  }
});

$("#start-learning").addEventListener("click", () => {
  const nextIdx = lessonData.findIndex((_, i) => !data.completed.includes(i));
  startLesson(nextIdx !== -1 ? nextIdx : 0);
});

$("#theme-toggle").addEventListener("click", () => document.body.classList.toggle("light"));

renderDashboard();
renderPrompt();
