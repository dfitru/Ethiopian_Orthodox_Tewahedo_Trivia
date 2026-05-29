// ══════════════════════════════════════════════
// ALL 28 QUESTIONS
// ══════════════════════════════════════════════
const ALL_QS=[
 {l:"Believing Without Seeing",c:"✝ Faith & Believing",q:"According to Hebrews 11:1, faith is the ___ of things hoped for and the ___ of things not seen.",o:["Dream / imagination","Substance / evidence","Promise / memory","Feeling / emotion"],a:1,e:"Hebrews 11:1: faith is the 'substance of things hoped for, the evidence of things not seen.' Like gravity — we cannot see it, but we see its effects everywhere."},
 {l:"Believing Without Seeing",c:"✝ Faith & Believing",q:"St. John Chrysostom teaches that the power of faith is that we ___ even when we cannot see the end result.",o:["Pray harder","Obey","Wait patiently","Stop worrying"],a:1,e:"St. Chrysostom: 'The power of faith is that we obey even when we cannot see the end result.' In the EOTC, faith is living trust shown through obedience and action."},
 {l:"How Great Is Faith",c:"✝ Faith & Believing",q:"Which Scripture says 'Without faith it is impossible to please the Lord'?",o:["John 3:16","Hebrews 11:6","Romans 8:15","Philippians 4:13"],a:1,e:"Hebrews 11:6: 'Without faith it is impossible to please the Lord.' Faith is the foundation of salvation."},
 {l:"Believing Without Seeing",c:"✝ Faith & Believing",q:"Which Old Testament hero of faith built an ark BEFORE seeing any rain, trusting God completely?",o:["Abraham","Moses","Noah","Elijah"],a:2,e:"Noah (Hebrews 11:7) built the ark before seeing any flood — a perfect example of active faith. His obedience showed he trusted God's promise without visible proof."},
 {l:"Power of Faith — Matthew 14",c:"✝ Faith & Believing",q:"When Peter walked on water toward Jesus, what caused him to begin sinking?",o:["He did not pray first","He became afraid and began to doubt","Jesus moved away","He was not baptized yet"],a:1,e:"Peter's faith faltered when he saw the wind and waves. Even so, Jesus lovingly saved him — when faith stumbles, we can cry out to Christ and He will help us."},
 {l:"How Great Is Faith",c:"✝ Faith & Believing",q:"The three great virtues in 1 Corinthians 13:13 are:",o:["Prayer, fasting, and almsgiving","Faith, hope, and love","Obedience, humility, and purity","Knowledge, wisdom, and courage"],a:1,e:"1 Corinthians 13:13 names faith, hope, and love — with love being the greatest. Faith is the beginning of the road that leads to God."},
 {l:"BB4 Lesson 4.1 — Defining Oneself",c:"👤 Identity in God",q:"Romans 8:15 tells us we received the Spirit of ___, by which we cry 'Abba, Father.'",o:["Obedience","Power","Adoption","Wisdom"],a:2,e:"Romans 8:15 — we received the Spirit of adoption. Our true identity is being children of God — a gift given by God, not earned or lost based on success or failure."},
 {l:"BB4 Lesson 4.1 — Defining Oneself",c:"👤 Identity in God",q:"Defining yourself by failures leads to ___, while defining yourself by successes leads to ___.",o:["Humility / gratitude","Despair / pride","Repentance / holiness","Peace / joy"],a:1,e:"Both are false identities from the devil. Failures → despair. Successes → pride. Our true God-given identity is stable and unchanging — we are His children."},
 {l:"BB4 Lesson 4.2 — Knowledge of God",c:"👤 Identity in God",q:"John 17:3 says: 'This is eternal life, that they may ___ You, the only true God.'",o:["Love","Fear","Know","Worship"],a:2,e:"Jesus says eternal life is to KNOW God — and this begins NOW, not only in heaven. Knowing God shapes our identity."},
 {l:"BB4 Lesson 4.3 — Joy & Contentment",c:"🌿 Joy, Sin & Boundaries",q:"Paul wrote Philippians — the 'Book of Joy' — from where?",o:["A palace","The Temple in Jerusalem","Prison chains","A mountain retreat"],a:2,e:"Paul wrote Philippians filled with joy from prison. True joy flows from real relationship with Christ, not from circumstances."},
 {l:"BB4 Lesson 4.4 — What Is Sin?",c:"🌿 Joy, Sin & Boundaries",q:"According to James 1:14–15, Sin = Desire + ___ + Action.",o:["Temptation","Opportunity","Weakness","Disobedience"],a:1,e:"James 1:14–15: Sin = Desire + Opportunity + Action. Remove any one and you break the cycle. Temptation itself is not sin — it becomes sin when we choose to act."},
 {l:"BB4 Lesson 4.4 — What Is Sin?",c:"🌿 Joy, Sin & Boundaries",q:"St. John Chrysostom warns Satan 'gives the ___ to sin and the ___ to repentance.'",o:["Permission / courage","Courage / shame","Pleasure / pain","Opportunity / regret"],a:1,e:"Satan gives courage to sin but shame to repentance. God works the opposite way. It is NEVER too late — even St. Peter denied Christ three times yet became a great champion of the Gospel."},
 {l:"BB4 Lesson 4.5 — Boundaries",c:"🌿 Joy, Sin & Boundaries",q:"Matthew 5:37: 'Let your ___ be ___ and your ___ be ___.' Jesus calls this a protective weapon.",o:["Heart / open / mind / clear","'Yes'/'Yes' and 'No'/'No'","Faith / strong / doubt / gone","Love / love and hate / hate"],a:1,e:"Matthew 5:37 — our words should be trustworthy. Saying no to compromise is wisdom. Healthy boundaries protect prayer, purity, charity, and time."},
 {l:"We Are Called to Be Champions — Eph. 6",c:"🛡 Armor of God",q:"The only OFFENSIVE weapon in the whole Armor of God is:",o:["The Shield of Faith","The Helmet of Salvation","The Sword of the Spirit — the Word of God","The Breastplate of Righteousness"],a:2,e:"Ephesians 6:17 — the Sword of the Spirit (the Word of God) is the only offensive weapon. All others are defensive. We use Scripture to fight lies and defend our faith."},
 {l:"We Are Called to Be Champions — Eph. 6",c:"🛡 Armor of God",q:"The Shield of Faith 'quenches all the fiery darts of the wicked one.' What does this represent?",o:["Attending church every Sunday","Trusting God even when life is hard or confusing","Memorizing every Bible verse","Never having any doubts"],a:1,e:"The Shield of Faith is trusting God even when life is confusing. When doubts, fears, or temptations come, our faith in Christ protects us."},
 {l:"We Are Called to Be Champions — 1 Cor. 9",c:"🛡 Armor of God",q:"St. Paul says athletes strive for a perishable crown, but we strive for a/an ___ crown.",o:["Golden","Heavenly","Imperishable","Eternal olive"],a:2,e:"St. Paul compares worldly rewards (a wreath that wilts) to the imperishable crown from God. We defend our faith for an eternal reward that never fades."},
 {l:"The Creed — Council of Nicaea 325 AD",c:"📜 The Creed",q:"At the Council of Nicaea (325 AD), how many bishops gathered to defend the faith against Arius?",o:["72","150","200","318"],a:3,e:"318 bishops gathered at Nicaea. They declared Jesus is 'true God of true God, begotten not made, of one essence (homoousios) with the Father,' refuting Arius."},
 {l:"The Creed — Council of Constantinople 381 AD",c:"📜 The Creed",q:"The Second Council (Constantinople, 381 AD) defended the divinity of the ___ against Macedonius.",o:["Virgin Mary","Apostles","Holy Spirit","Old Testament prophets"],a:2,e:"Macedonius denied the Holy Spirit is God. The Council declared the Holy Spirit is equal to Father and Son — one essence, one God."},
 {l:"The Creed — Council of Ephesus 431 AD",c:"📜 The Creed",q:"The Council of Ephesus (431 AD) affirmed the Virgin Mary should be called 'Theotokos,' which means:",o:["Mother of the Church","Queen of Heaven","God-Bearer (Mother of God)","Blessed Virgin"],a:2,e:"Theotokos means 'God-Bearer.' The Council declared Christ's divinity and humanity were never separated — 'not for a single moment, nor twinkling of an eye.'"},
 {l:"The Creed — Introduction",c:"📜 The Creed",q:"The Creed is prayed ___ in the Hours Prayers, reminding us that faith is life, not just belief.",o:["Once a week","Only on Sundays","Every day and night","Once a month"],a:2,e:"The Creed is prayed every day and night in the Hours Prayers of the EOTC. It is the foundation of our faith about God, Jesus Christ, and the Holy Spirit."},
 {l:"Ways to Serve God Daily — Psalm 100:2",c:"🙏 Serving God",q:"Psalm 100:2: 'Serve the Lord with ___; come before Him with joyful singing.'",o:["Reverence","Gladness","Obedience","Fasting"],a:1,e:"Psalm 100:2: 'Serve the Lord with gladness.' Serving God is not a burden — it is a joy. When we serve others, we serve God Himself."},
 {l:"Ways to Serve God Daily — L-C-C-B-T",c:"🙏 Serving God",q:"The acronym L-C-C-B-T = five ways to serve. What does 'B' stand for?",o:["Be baptized","Bear others' burdens","Bring tithes","Build the church"],a:1,e:"L-C-C-B-T = Love neighbors, Care for strangers, Copy Christ, Bear others' burdens, Talents for God. Bearing burdens means empathizing with those who struggle."},
 {l:"The Loving Motherhood of the Church",c:"⛪ The Church",q:"Christianity was first introduced to Ethiopia through Queen Candace's treasurer, baptized by Philip in ___ AD.",o:["34 AD","100 AD","251 AD","350 AD"],a:0,e:"Acts 8 — the Ethiopian treasurer was baptized by Philip in 34 AD, just one year after the Resurrection. Ethiopians were also among the 3,000 baptized on Pentecost (Acts 2:41)."},
 {l:"The Loving Motherhood of the Church",c:"⛪ The Church",q:"The Church is Apostolic because it is founded on the teachings of the Apostles. Which Scripture describes this?",o:["John 3:16","Matthew 16:18–19","Ephesians 4:4–6","Acts 2:41"],a:1,e:"Matthew 16:18–19 — 'Upon this rock I will build my church.' The Church is Apostolic because it rests on the Apostles, who received their authority from Christ Himself."},
 {l:"Holiness — Purity through Confession",c:"☩ Holiness & Confession",q:"In Genesis 1:26, 'Image' means we represent God. 'Likeness' points to our ___ into holiness over time.",o:["Immediate perfection","Growth","Transformation at baptism","Ordination"],a:1,e:"'Image' = made to represent God. 'Likeness' = growth into holiness through grace and obedience. Matthew 5:48: 'Be perfect as your Father is perfect' — a call to keep growing."},
 {l:"Holiness — Saint Moses the Strong",c:"☩ Holiness & Confession",q:"Why did we study Saint Moses the Strong in connection with repentance and confession?",o:["He wrote the Book of Psalms","He began in sin but was powerfully transformed through repentance — a model of holiness","He fasted 40 days in the desert","He defended faith before the Emperor"],a:1,e:"Saint Moses the Strong began his life making many wrong choices. Through repentance and confession, he was completely transformed — proving no one is beyond God's mercy."},
 {l:"Defending Our Faith and Morals",c:"🛡 Armor of God",q:"According to 1 Peter 3:15, before we can defend Christ, we must first do what in our hearts?",o:["Memorize every Scripture","Revere (honor) Christ as Lord","Attend every church service","Tell everyone our faith"],a:1,e:"St. Peter: we must revere Christ as Lord in our hearts before defending Him. Defending faith begins with loving God. Once we truly love and know Him, we naturally stand up for our faith."},
 {l:"Defending Our Faith and Morals",c:"🛡 Armor of God",q:"Matthew 5:14–16 — Jesus calls us 'the light of the world.' What does hiding our faith look like?",o:["Running away from trouble","Putting a lamp under a basket","Covering our eyes","Building a wall"],a:1,e:"Jesus says hiding our faith is like putting a lamp under a basket. When we openly live and defend our faith with love, people notice — and God is glorified by our witness."},
 {l:"BB4 Lesson 4.2 — Knowledge of God",c:"👤 Identity in God",q:"Which Scripture says: 'I can do all things through Christ who strengthens me'?",o:["Romans 8:28","Philippians 4:13","Isaiah 40:31","Hebrews 12:1"],a:1,e:"Philippians 4:13 — This verse reminds us that our strength comes not from ourselves but from our union with Christ. It connects directly to our identity as children of God who can face any challenge."},
];

// ══════════════════════════════════════════════
// STORAGE & CONFIG
// ══════════════════════════════════════════════
const SK="eotc_v6";
const PIN_KEY="eotc_pin_v6";
const CFG_KEY="eotc_cfg_v6";
const ADMIN_KEY="eotc_admin_access_v1";
const ADMIN_SESSION_KEY="eotc_admin_session_v1";
const GAME_META_KEY="eotc_game_meta_v1";

const ld=()=>{try{const d=localStorage.getItem(SK);return d?JSON.parse(d):[]}catch{return[]}};
const sv=(a)=>{try{localStorage.setItem(SK,JSON.stringify(a))}catch{}};

function getGameMeta(){
  try{
    const raw=localStorage.getItem(GAME_META_KEY);
    return raw?JSON.parse(raw):{mode:'Friends Match'};
  }catch{
    return {mode:'Friends Match'};
  }
}

function setGameMeta(meta){
  try{localStorage.setItem(GAME_META_KEY,JSON.stringify(meta));}catch{}
}

// Student session PIN
function getPin(){
  return localStorage.getItem(PIN_KEY)||'';
}

function isValidAdminPin(value){
  return /^\d{4,8}$/.test((value||'').trim());
}

function getAdminPin(){
  const raw=(localStorage.getItem(ADMIN_KEY)||'').trim();
  if(isValidAdminPin(raw))return raw;
  if(raw)localStorage.removeItem(ADMIN_KEY);
  return '';
}

function isAdminLoggedIn(){
  return localStorage.getItem(ADMIN_SESSION_KEY)==='1';
}

function setAdminLoggedIn(isLoggedIn){
  if(isLoggedIn)localStorage.setItem(ADMIN_SESSION_KEY,'1');
  else localStorage.removeItem(ADMIN_SESSION_KEY);
}

function promptAdminPin(msg){
  const input=prompt(msg||'Enter Teacher/Admin PIN (4-8 digits).');
  if(input===null)return '';
  const clean=input.trim();
  if(!isValidAdminPin(clean)){
    alert('Admin PIN must be 4 to 8 digits.');
    return '';
  }
  return clean;
}

function promptStudentPin(msg){
  const input=prompt(msg||'Enter student session PIN (4-8 digits).');
  if(input===null)return '';
  const clean=input.trim();
  if(!/^\d{4,8}$/.test(clean)){
    alert('Student PIN must be 4 to 8 digits.');
    return '';
  }
  return clean;
}

function showSetupError(msg){
  const e=document.getElementById('setup-err');
  e.textContent=msg;
  e.style.display='block';
}

function toggleSetupCard(show){
  const setup=document.getElementById('setup-card');
  const help=document.getElementById('admin-login-help');
  const login=document.getElementById('pi').closest('.card');
  setup.style.display=show?'block':'none';
  login.style.display=show?'none':'block';
  help.textContent=show?'Create Teacher/Admin PIN and Student PIN below':'Enter your Teacher/Admin access code';
  if(!show){
    document.getElementById('setup-err').style.display='none';
    document.getElementById('setup-admin-pin').value='';
    document.getElementById('setup-admin-pin-confirm').value='';
    document.getElementById('setup-student-pin').value='';
    document.getElementById('setup-student-pin-confirm').value='';
  }
}

function savePinSetup(){
  const ap=document.getElementById('setup-admin-pin').value.trim();
  const ap2=document.getElementById('setup-admin-pin-confirm').value.trim();
  const sp=document.getElementById('setup-student-pin').value.trim();
  const sp2=document.getElementById('setup-student-pin-confirm').value.trim();

  if(!/^\d{4,8}$/.test(ap))return showSetupError('Teacher/Admin PIN must be 4 to 8 digits.');
  if(ap!==ap2)return showSetupError('Teacher/Admin PINs do not match.');
  if(!/^\d{4,8}$/.test(sp))return showSetupError('Student PIN must be 4 to 8 digits.');
  if(sp!==sp2)return showSetupError('Student PINs do not match.');

  localStorage.setItem(ADMIN_KEY,ap);
  localStorage.setItem(PIN_KEY,sp);
  updateHomePinVisibility();
  toggleSetupCard(false);
  alert('Setup complete. You can now log in using your Teacher/Admin PIN.');
}

function setStudentPin(){
  const first=promptStudentPin('Create student session PIN (4-8 digits).');
  if(!first)return;
  const second=promptStudentPin('Confirm student session PIN.');
  if(!second)return;
  if(first!==second){
    alert('Student PINs do not match.');
    return;
  }
  localStorage.setItem(PIN_KEY,first);
  updateHomePinVisibility();
  const pinDisplay=document.getElementById('admin-current-pin');
  if(pinDisplay)pinDisplay.textContent=first;
  alert('Student PIN updated.');
}

function regenPin(){
  if(!confirm('Generate a new PIN? The old PIN will no longer work.'))return;
  const p=Math.floor(1000+Math.random()*9000).toString();
  localStorage.setItem(PIN_KEY,p);
  document.getElementById('admin-current-pin').textContent=p;
  updateHomePinVisibility();
  alert('New PIN: '+p+'\nShare this with your students.');
}
function copyPin(){
  const p=localStorage.getItem(PIN_KEY)||'';
  navigator.clipboard.writeText(p).then(()=>alert('PIN copied: '+p)).catch(()=>alert('PIN: '+p));
}

// Q count config
function getQCount(){
  const cfg=JSON.parse(localStorage.getItem(CFG_KEY)||'{"auto":true,"manual":5}');
  if(cfg.auto){
    const n=ld().length;
    if(n<=5)return 5;
    if(n<=10)return 7;
    if(n<=15)return 10;
    if(n<=20)return 12;
    return 15;
  }
  return Math.min(Math.max(parseInt(cfg.manual)||5,3),ALL_QS.length);
}
function toggleAutoQ(){
  const auto=document.getElementById('auto-q').checked;
  document.getElementById('manual-q').disabled=auto;
}
function saveQCount(){
  const auto=document.getElementById('auto-q').checked;
  const manual=parseInt(document.getElementById('manual-q').value)||5;
  localStorage.setItem(CFG_KEY,JSON.stringify({auto,manual}));
  updateQDisplay();
  alert('Saved! Students will now get '+getQCount()+' questions each.');
}
function updateQDisplay(){
  const q=getQCount();
  const auto=(JSON.parse(localStorage.getItem(CFG_KEY)||'{"auto":true}').auto);
  document.getElementById('current-q-display').textContent='Current: '+q+' Q'+(auto?' (auto)':' (manual)');
}

// Scores
function addSc(name,score,total){
  const mode=getGameMeta().mode||'Friends Match';
  const a=ld(),idx=a.findIndex(s=>s.name.toLowerCase()===name.toLowerCase()),e={name,score,total,pct:Math.round(score/total*100),date:new Date().toLocaleDateString(),mode};
  if(idx>=0){if(score/total>a[idx].score/a[idx].total)a[idx]=e;}else a.push(e);
  a.sort((x,y)=>(y.score/y.total)-(x.score/x.total)||x.name.localeCompare(y.name));sv(a);
}
const delSc=(i)=>{const a=ld();a.splice(i,1);sv(a);};
const rstSc=()=>sv([]);
const fmtPts=(v)=>Number.isInteger(v)?String(v):v.toFixed(1);

function getRank(p){
  if(p>=.9)return{label:"✞ Pillar of the Faith",color:"#C9953A",short:"Pillar"};
  if(p>=.75)return{label:"☩ Faithful Scholar",color:"#C0C0C0",short:"Scholar"};
  if(p>=.55)return{label:"✝ Growing in Faith",color:"#CD7F32",short:"Growing"};
  return{label:"📖 Keep Studying",color:"#EB8686",short:"Needs Review"};
}
const esc=(s)=>{const d=document.createElement('div');d.textContent=s;return d.innerHTML;};

// ══════════════════════════════════════════════
// SCREENS
// ══════════════════════════════════════════════
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}

function setPageView(view){
  const url=new URL(window.location.href);
  if(view==='home')url.searchParams.delete('page');
  else url.searchParams.set('page',view);
  window.history.replaceState({},'',url.pathname+url.search+url.hash);
}

function applyInitialPageRoute(){
  const view=(new URLSearchParams(window.location.search).get('page')||'home').toLowerCase();
  if(view==='leaderboard'){showLB();return;}
  if(view==='admin'){showAL();return;}
  goHome();
}

function goHome(){
  setPageView('home');
  show('s-name');
  document.getElementById('ni').value='';
  document.getElementById('student-pin').value='';
  // Show/hide PIN entry based on whether PIN is required
  updateHomePinVisibility();
}

function adminLogout(){
  setAdminLoggedIn(false);
  goHome();
}

function updateHomePinVisibility(){
  const pin=localStorage.getItem(PIN_KEY);
  const hasPin=pin&&pin.length>0;
  document.getElementById('pin-entry-card').style.display=hasPin?'block':'none';
}

// ══════════════════════════════════════════════
// QUIZ STATE
// ══════════════════════════════════════════════
let pName='',pScore=0,shuf=[],ci=0,cs=0,cst=0,answered=false,myTotal=0,hintUsed=false;

document.getElementById('ni').addEventListener('keydown',e=>{if(e.key==='Enter')startQ();});
document.getElementById('student-pin').addEventListener('keydown',e=>{if(e.key==='Enter')startQ();});

function startQ(){
  const n=document.getElementById('ni').value.trim(),ee=document.getElementById('ne');
  const modeSel=document.getElementById('gm');
  const chosenMode=modeSel?modeSel.value:'Friends Match';
  const spe=document.getElementById('spe');
  if(!n){ee.textContent='Please enter your name.';ee.style.display='block';return;}
  if(n.length>30){ee.textContent='Max 30 characters.';ee.style.display='block';return;}
  ee.style.display='none';
  setGameMeta({mode:chosenMode});

  // Check student PIN
  const adminPin=localStorage.getItem(PIN_KEY);
  if(adminPin){
    const enteredPin=document.getElementById('student-pin').value.trim();
    if(!enteredPin){spe.textContent='Please enter the session PIN from your teacher.';spe.style.display='block';return;}
    if(enteredPin!==adminPin){spe.textContent='Incorrect PIN. Ask your teacher for the correct PIN.';spe.style.display='block';return;}
    spe.style.display='none';
  }

  pName=n;cs=0;cst=0;ci=0;
  myTotal=getQCount();
  // Shuffle all questions and take myTotal
  const pool=[...ALL_QS];
  for(let i=pool.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[pool[i],pool[j]]=[pool[j],pool[i]];}
  shuf=pool.slice(0,myTotal);
  document.getElementById('pa').textContent='Mode: '+chosenMode+' | Player: '+pName+' | '+myTotal+' questions';
  loadQ();show('s-quiz');
}

function loadQ(){
  answered=false;hintUsed=false;const q=shuf[ci],tot=shuf.length;
  document.getElementById('qn').textContent='Question '+(ci+1);
  document.getElementById('qc').textContent=(ci+1)+'/'+tot;
  document.getElementById('ql').textContent=q.l;
  document.getElementById('qcat').textContent=q.c;
  document.getElementById('qt').textContent=q.q;
  document.getElementById('sv').textContent=fmtPts(cs);
  document.getElementById('stk').textContent=cst;
  document.getElementById('pf').style.width=((ci/tot)*100)+'%';
  document.getElementById('fb').className='fb';
  const nb=document.getElementById('nb');nb.style.display='none';nb.disabled=true;
  const hb=document.getElementById('hb');
  hb.style.display=q.o.length>3?'block':'none';
  hb.disabled=false;
  hb.textContent='Hint (-0.5 point, removes one wrong choice)';
  nb.textContent=(ci+1>=tot)?'See Results & Leaderboard ✞':'Next Question →';
  const og=document.getElementById('og');og.innerHTML='';
  const lt=['A','B','C','D'];
  q.o.forEach((opt,i)=>{
    const b=document.createElement('button');b.className='obtn';
    b.innerHTML='<span class="oletter">'+lt[i]+'.</span>'+opt;
    b.onclick=()=>pickA(i);og.appendChild(b);
  });
}

function useHint(){
  if(answered||hintUsed)return;
  const q=shuf[ci];
  if(!q||q.o.length<=3)return;

  const cor=q.a;
  const options=[...document.querySelectorAll('.obtn')];
  const removable=options.filter((b,i)=>i!==cor&&!b.disabled);
  if(!removable.length)return;

  const choice=removable[Math.floor(Math.random()*removable.length)];
  choice.disabled=true;
  choice.style.opacity='0.35';
  choice.style.borderColor='rgba(201,149,58,.12)';

  hintUsed=true;
  const hb=document.getElementById('hb');
  hb.disabled=true;
  hb.textContent='Hint Used (-0.5 point for this question)';

  const fb=document.getElementById('fb');
  fb.className='fb show';
  document.getElementById('fbt').textContent='Hint used';
  document.getElementById('fbx').textContent='One wrong answer was removed. This question is now worth 0.5 points if you answer correctly.';
}

function pickA(sel){
  if(answered)return;answered=true;
  const q=shuf[ci],cor=q.a;
  const hb=document.getElementById('hb');
  hb.disabled=true;
  document.querySelectorAll('.obtn').forEach((b,i)=>{b.disabled=true;if(i===cor)b.classList.add('correct');else if(i===sel)b.classList.add('wrong');});
  const ok=(sel===cor);
  if(ok){cs+=hintUsed?0.5:1;cst++;}else cst=0;
  document.getElementById('sv').textContent=fmtPts(cs);
  document.getElementById('stk').textContent=cst;
  const fb=document.getElementById('fb');
  fb.className='fb show '+(ok?'ok':'bad');
  document.getElementById('fbt').textContent=ok?(hintUsed?'✓ Correct! (+0.5 point)':(cst>=3?'✓ Correct! 🔥 '+cst+' in a row!':'✓ Correct!')):'✗ Not quite:';
  document.getElementById('fbx').textContent=q.e;
  const nb=document.getElementById('nb');nb.style.display='block';nb.disabled=false;
}

function nextQ(){ci++;if(ci>=shuf.length)finishQ();else loadQ();}

function finishQ(){
  pScore=cs;addSc(pName,pScore,myTotal);
  const scores=ld(),p=pScore/myTotal,rank=getRank(p);
  document.getElementById('rn').textContent=pName;
  document.getElementById('fs').textContent=fmtPts(pScore);
  document.getElementById('tot-q').textContent=myTotal;
  document.getElementById('fp').textContent=Math.round(p*100);
  const rb=document.getElementById('rb');
  rb.textContent=rank.label;rb.style.color=rank.color;rb.style.border='1px solid '+rank.color;rb.style.background=rank.color+'22';
  const msgs={.9:"'Well done, good and faithful servant.' Excellent mastery of this year's lessons.",.75:"Strong work! You have a solid foundation. Keep growing through prayer and Scripture.",.55:"Good effort! Review the topics where you struggled — every step is progress.",0:"'Seek and you shall find.' Review your lesson notes and try again — God rewards those who persevere."};
  document.getElementById('rm').textContent=p>=.9?msgs[.9]:p>=.75?msgs[.75]:p>=.55?msgs[.55]:msgs[0];
  const ml=document.getElementById('ml');ml.innerHTML='';
  scores.slice(0,5).forEach((s,i)=>{
    const r=getRank(s.score/s.total),row=document.createElement('div');
    row.style.cssText='display:flex;align-items:center;gap:8px;margin-bottom:6px;padding:4px 7px;border-radius:5px;background:'+(s.name===pName?'rgba(201,149,58,.1)':'transparent');
    row.innerHTML='<span style="font-size:1rem;min-width:22px;text-align:center">'+(i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)+'.')+'</span><span style="flex:1;color:'+(s.name===pName?'#E8C06A':'#F9F3E3')+';font-weight:'+(s.name===pName?'bold':'normal')+';font-size:.9rem">'+esc(s.name)+'</span><span style="color:#C9953A;font-weight:bold;font-size:.95rem">'+fmtPts(s.score)+'/'+s.total+'</span><span style="color:'+r.color+';font-size:.7rem;min-width:40px;text-align:right">'+s.pct+'%</span>';
    ml.appendChild(row);
  });
  show('s-results');
}

// ══════════════════════════════════════════════
// LEADERBOARD
// ══════════════════════════════════════════════
function showLB(){
  setPageView('leaderboard');
  const scores=ld();
  const mode=getGameMeta().mode||'Friends Match';
  document.getElementById('lbc').textContent=scores.length+' player'+(scores.length!==1?'s':'')+' completed this game • Mode: '+mode;
  const ll=document.getElementById('lbl');ll.innerHTML='';
  if(!scores.length){ll.innerHTML='<div style="text-align:center;color:var(--goldP);opacity:.5;padding:38px;font-style:italic;">No scores yet. Be the first!</div>';}
  else scores.forEach((s,i)=>{
    const r=getRank(s.score/s.total),medal=i===0?'🥇':i===1?'🥈':i===2?'🥉':'',row=document.createElement('div');
    row.className='lbrow'+(i===0?' top':i%2===0?' alt':'');
    row.innerHTML='<div style="font-size:'+(i<3?'1.4rem':'.88rem')+';min-width:28px;text-align:center;color:'+(i>=3?'rgba(201,149,58,.4)':'inherit')+';font-weight:'+(i>=3?'bold':'inherit')+'">'+(medal||i+1)+'</div><div style="flex:1"><div style="color:'+(i===0?'#E8C06A':'#F9F3E3')+';font-weight:'+(i<3?'bold':'normal')+';font-size:.95rem;margin-bottom:1px">'+esc(s.name)+'</div><div style="color:'+r.color+';font-size:.68rem">'+r.label+'</div><div style="color:var(--goldP);opacity:.55;font-size:.64rem;margin-top:1px">'+esc(s.mode||'Friends Match')+'</div></div><div style="text-align:right"><div style="color:#C9953A;font-weight:bold;font-size:1.18rem">'+s.score+'/'+s.total+'</div><div style="color:var(--goldP);font-size:.7rem;opacity:.63">('+s.pct+'%)</div></div><div style="width:4px;height:34px;border-radius:3px;background:linear-gradient(180deg,'+r.color+',transparent)"></div>';
    ll.appendChild(row);
  });
  show('s-lb');
}

// ══════════════════════════════════════════════
// ADMIN
// ══════════════════════════════════════════════
function ensureAdminCode(){
  let code=getAdminPin();
  if(code)return code;

  const cleanFirst=promptAdminPin('Create a Teacher/Admin PIN (4-8 digits).');
  if(!cleanFirst)return '';

  const cleanSecond=promptAdminPin('Confirm your Teacher/Admin PIN.');
  if(!cleanSecond)return '';
  if(cleanFirst!==cleanSecond){
    alert('PINs do not match. Please try again.');
    return '';
  }

  localStorage.setItem(ADMIN_KEY,cleanFirst);
  alert('Teacher/Admin PIN saved.');
  return cleanFirst;
}

function setupBothPins(){
  const adminCode=ensureAdminCode();
  if(!adminCode)return false;

  const pin=getPin();
  if(pin)return true;

  const first=promptStudentPin('Create student session PIN (4-8 digits).');
  if(!first)return false;
  const second=promptStudentPin('Confirm student session PIN.');
  if(!second)return false;
  if(first!==second){
    alert('Student PINs do not match.');
    return false;
  }

  localStorage.setItem(PIN_KEY,first);
  updateHomePinVisibility();
  alert('Teacher/Admin code and Student PIN are now set.');
  return true;
}

function ensurePinsSetup(){
  const adminCode=getAdminPin();
  const studentPin=getPin();
  if(adminCode&&studentPin)return true;

  setPageView('admin');
  show('s-al');
  toggleSetupCard(true);
  return false;
}

function changeAdminCode(){
  const current=getAdminPin();
  if(!current){
    if(!ensureAdminCode())return;
  }else{
    const oldCode=promptAdminPin('Enter current Teacher/Admin PIN.');
    if(!oldCode)return;
    if(oldCode!==current){
      alert('Current PIN is incorrect.');
      return;
    }
  }

  const cleanFirst=promptAdminPin('Enter new Teacher/Admin PIN (4-8 digits).');
  if(!cleanFirst)return;

  const cleanSecond=promptAdminPin('Confirm new Teacher/Admin PIN.');
  if(!cleanSecond)return;
  if(cleanFirst!==cleanSecond){
    alert('PINs do not match.');
    return;
  }

  localStorage.setItem(ADMIN_KEY,cleanFirst);
  alert('Teacher/Admin PIN updated.');
}

function showAL(){
  if(!ensurePinsSetup())return;

  if(isAdminLoggedIn()){
    loadAdmin();
    setPageView('admin');
    show('s-admin');
    return;
  }

  toggleSetupCard(false);
  document.getElementById('pi').value='';
  document.getElementById('pe').style.display='none';
  document.getElementById('admin-login-help').textContent='Enter your Teacher/Admin access code';
  setPageView('admin');
  show('s-al');
}

document.getElementById('pi').addEventListener('keydown',e=>{if(e.key==='Enter')chkPin();});
function chkPin(){
  const p=document.getElementById('pi').value.trim(),ee=document.getElementById('pe');
  const code=getAdminPin();
  if(p&&p===code){ee.style.display='none';setAdminLoggedIn(true);loadAdmin();setPageView('admin');show('s-admin');}
  else{ee.textContent='Incorrect access code.';ee.style.display='block';document.getElementById('pi').value='';}
}

function loadAdmin(){
  const pin=getPin();
  const mode=getGameMeta().mode||'Friends Match';
  document.getElementById('admin-current-pin').textContent=pin;
  updateQDisplay();

  // Load cfg into UI
  const cfg=JSON.parse(localStorage.getItem(CFG_KEY)||'{"auto":true,"manual":5}');
  document.getElementById('auto-q').checked=cfg.auto;
  document.getElementById('manual-q').value=cfg.manual;
  document.getElementById('manual-q').disabled=cfg.auto;

  const scores=ld();
  const avg=scores.length?(scores.reduce((a,s)=>a+(s.score/s.total*100),0)/scores.length).toFixed(1)+'%':'—';
  const topS=scores.length?scores[0]:'';
  const pass=scores.filter(s=>s.score/s.total>=.55).length;
  document.getElementById('astats').innerHTML=[
    ['👥 Students',scores.length],
    ['📊 Avg %',avg],
    ['🏆 Top Score',topS?(topS.score+'/'+topS.total):'—'],
    ['✅ Passing',pass],
    ['❌ Review',scores.length-pass],
    ['❓ Q per Student',getQCount()],
    ['🎮 Game Mode',mode]
  ].map(([l,v])=>'<div class="sstat"><div style="font-size:.6rem;color:var(--gold);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">'+l+'</div><div class="ssv">'+v+'</div></div>').join('');

  // Scores table
  const tb=document.getElementById('stbody');tb.innerHTML='';
  document.getElementById('noscore').style.display=scores.length?'none':'block';
  scores.forEach((s,i)=>{
    const r=getRank(s.score/s.total),tr=document.createElement('tr');
    tr.innerHTML='<td style="color:var(--goldP)">'+(i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1)+'</td>'
      +'<td style="color:var(--parch);font-weight:'+(i<3?'bold':'normal')+'">'+esc(s.name)+'</td>'
      +'<td style="color:#C9953A;font-weight:bold">'+s.score+'</td>'
      +'<td style="color:var(--goldP);opacity:.7">'+s.total+'</td>'
      +'<td style="color:'+r.color+'">'+s.pct+'%</td>'
      +'<td style="color:'+r.color+';font-size:.73rem">'+r.short+'</td>'
      +'<td style="color:var(--goldP);font-size:.76rem;opacity:.58">'+(s.date||'—')+'</td>'
      +'<td><button onclick="remSt('+i+')" style="background:none;border:1px solid rgba(139,26,26,.5);color:rgba(235,134,134,.72);border-radius:5px;padding:3px 8px;cursor:pointer;font-size:.7rem;font-family:\'Cormorant Garamond\',serif;">Remove</button></td>';
    tb.appendChild(tr);
  });

  // Breakdown
  const tiers=[{label:"✞ Pillar of the Faith",min:.9,max:1.1,c:"#C9953A"},{label:"☩ Faithful Scholar",min:.75,max:.9,c:"#C0C0C0"},{label:"✝ Growing in Faith",min:.55,max:.75,c:"#CD7F32"},{label:"📖 Keep Studying",min:0,max:.55,c:"#EB8686"}];
  let bh='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:9px;margin-bottom:12px">';
  tiers.forEach(t=>{
    const g=scores.filter(s=>{const p=s.score/s.total;return p>=t.min&&p<t.max;}),pct=scores.length?Math.round(g.length/scores.length*100):0;
    bh+='<div class="card" style="border-color:'+t.c+'44"><div style="color:'+t.c+';font-size:.83rem;font-weight:700;margin-bottom:6px">'+t.label+'</div><div style="font-size:2rem;color:'+t.c+';font-weight:300;line-height:1;margin-bottom:2px">'+g.length+'</div><div style="font-size:.73rem;color:var(--goldP);opacity:.68;margin-bottom:7px">'+pct+'% of class</div><div style="background:rgba(255,255,255,.06);border-radius:3px;height:4px;overflow:hidden"><div style="width:'+pct+'%;height:100%;background:'+t.c+'"></div></div>'+(g.length?'<div style="margin-top:8px;font-size:.71rem;color:var(--goldP);opacity:.62">'+g.map(s=>esc(s.name)).join(', ')+'</div>':'')+'</div>';
  });
  bh+='</div>';
  if(scores.length){
    bh+='<div class="card"><div style="color:var(--gold);font-size:.66rem;letter-spacing:2px;text-transform:uppercase;margin-bottom:11px;font-weight:700">Score Progress — All Students</div>';
    scores.forEach(s=>{const pct=s.pct,r=getRank(s.score/s.total);bh+='<div style="margin-bottom:9px"><div style="display:flex;justify-content:space-between;margin-bottom:2px"><span style="color:var(--parch);font-size:.83rem">'+esc(s.name)+'</span><span style="color:'+r.color+';font-size:.83rem;font-weight:bold">'+s.score+'/'+s.total+' ('+pct+'%)</span></div><div style="background:rgba(255,255,255,.06);border-radius:3px;height:6px;overflow:hidden"><div style="width:'+pct+'%;height:100%;background:linear-gradient(90deg,#8B1A1A,'+r.color+');border-radius:3px"></div></div></div>';});
    bh+='</div>';
  }
  document.getElementById('bkcontent').innerHTML=bh;

  // Topics
  const cats=[...new Set(ALL_QS.map(q=>q.c))];
  let th='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(268px,1fr));gap:9px">';
  cats.forEach(cat=>{
    const qs=ALL_QS.filter(q=>q.c===cat);
    th+='<div class="card"><div style="color:var(--goldL);font-size:.88rem;font-weight:700;margin-bottom:4px">'+cat+'</div><div style="color:var(--goldP);font-size:.71rem;opacity:.58;margin-bottom:7px">'+qs.length+' question'+(qs.length!==1?'s':'')+'</div>';
    qs.forEach(q=>{th+='<div style="font-size:.74rem;color:var(--goldP);opacity:.68;margin-bottom:3px;padding-left:7px;border-left:2px solid rgba(201,149,58,.2);line-height:1.4">'+(q.q.length>68?q.q.slice(0,68)+'…':q.q)+'</div>';});
    th+='</div>';
  });
  th+='</div>';document.getElementById('topcontent').innerHTML=th;

  // Export
  document.getElementById('exptxt').value=scores.length===0?'No scores yet.'
    :'Ethiopian Orthodox End of Year Trivia — Dallas AGA\n'+'='.repeat(46)+'\n'+'Session PIN: '+pin+'\n\n'
    +scores.map((s,i)=>`${i+1}. ${s.name.padEnd(22)} ${s.score}/${s.total} (${s.pct}%) — ${getRank(s.score/s.total).short}`).join('\n')
    +'\n\nGenerated: '+new Date().toLocaleDateString();
}

function remSt(i){if(!confirm('Remove this student from the leaderboard?'))return;delSc(i);loadAdmin();}
function askReset(){document.getElementById('rconf').style.display='block';document.getElementById('rbtn').style.display='none';}
function cancelReset(){document.getElementById('rconf').style.display='none';document.getElementById('rbtn').style.display='block';}
function doReset(){rstSc();loadAdmin();cancelReset();}
function swTab(id,btn){document.querySelectorAll('.tpane').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.tbtn').forEach(b=>b.classList.remove('active'));document.getElementById(id).classList.add('active');btn.classList.add('active');}

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════
(function init(){
  const gm=document.getElementById('gm');
  if(gm){
    gm.value=getGameMeta().mode||'Friends Match';
  }
  updateHomePinVisibility();
  applyInitialPageRoute();
})();
