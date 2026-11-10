---
layout: page
permalink: /teachings/macroeconomics-i/islm-lab/
title: "IS–LM Lab: Three Markets, One Equilibrium"
description: "A step-by-step IS–LM simulator for ECON 202 (Module 5), rebuilt from the Seville teaching experiment: three linked panels — income–expenditure, money market, IS–LM — with ghost lines for the old curves and a disequilibrium walk-through, so you see why the economy moves, not just where it ends up."
nav: false
---

<style>
/* ============================================================================
   IS-LM Lab (ECON 202, Module 5)
   Self-contained SVG + vanilla JS. Palette + type matched to the course page:
   muted indigo / terracotta / dusty rose on Inter. Design follows the Seville
   simulator rules: no gridlines, no text on the graphs, highlight what moved.
   ========================================================================== */
.lab {
  --mc-blue:   #5f74a0;   /* indigo — LM, money supply, structure */
  --mc-orange: #c0895e;   /* terracotta — IS, expenditure           */
  --mc-red:    #c98a97;   /* dusty rose — money demand, accents     */
  --mc-ink:    #4a4a4a;
  --mc-ghost:  #c7ccd6;
  --mc-soft:   rgba(95, 116, 160, 0.08);
  --mc-card:   #ffffff;
  --mc-line:   rgba(95,116,160,0.25);
  max-width: 1040px; margin: 0 auto;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: var(--mc-ink);
}
html[data-theme="dark"] .lab {
  --mc-blue:   #9fb0d6;
  --mc-orange: #d6a985;
  --mc-red:    #dba6b1;
  --mc-ghost:  #4b5368;
  --mc-soft:   rgba(159, 176, 214, 0.14);
  --mc-ink:    var(--global-text-color);
  --mc-card:   var(--global-card-bg-color, #1c1c1d);
  --mc-line:   rgba(159,176,214,0.3);
}

.lab-back { display:inline-block; font-size:0.9rem; font-weight:600; color:var(--mc-blue); margin-bottom:0.5rem; }
.lab-back:hover { color:var(--mc-orange); text-decoration:none; }

.lab-lede {
  font-size:1.04rem; line-height:1.6; border-left:4px solid var(--mc-blue);
  background:var(--mc-soft); padding:0.8rem 1.05rem; border-radius:0 6px 6px 0; margin:0.6rem 0 1.1rem;
}
.lab-lede .fq { font-weight:700; color:var(--mc-blue); }

.lab-howto { font-size:0.95rem; line-height:1.6; margin:0.6rem 0 1rem; }
.lab-howto strong { color:var(--mc-orange); }
.lab-howto ul { margin:0.3rem 0 0 1.1rem; }
.lab-howto em { color:var(--mc-blue); font-style:normal; font-weight:600; }

/* ---- layout ---- */
.lab-grid { display:grid; grid-template-columns:250px 1fr; gap:16px; align-items:start; }
.lab-side { position:sticky; top:72px; }
.lab-card { background:var(--mc-card); border:1px solid var(--mc-line); border-radius:8px; padding:12px 14px; box-shadow:0 2px 12px rgba(95,116,160,0.10); }
.lab-card + .lab-card { margin-top:12px; }
.lab-card h4 { margin:0 0 6px; font-size:0.72rem; letter-spacing:0.08em; text-transform:uppercase; color:var(--mc-blue); font-family:inherit; }

.lab-row { display:grid; grid-template-columns:1fr auto; align-items:baseline; font-size:0.84rem; margin-top:6px; }
.lab-row label { color:var(--mc-ink); }
.lab-row output { font-variant-numeric:tabular-nums; color:var(--mc-blue); font-weight:600; }
.lab-row input[type=range] { grid-column:1/3; width:100%; margin:1px 0 0; accent-color:var(--mc-blue); }

.lab-chips { display:flex; flex-wrap:wrap; gap:6px; margin-top:8px; }
.lab-chip {
  font:inherit; font-size:0.78rem; font-weight:700; cursor:pointer; user-select:none;
  border:1px solid var(--mc-line); border-radius:999px; padding:0.28rem 0.7rem;
  background:var(--mc-soft); color:var(--mc-ink); transition:transform .15s, filter .15s;
}
.lab-chip:hover { transform:translateY(-1px); filter:brightness(0.96); }
.lab-chip.primary { background:var(--mc-blue); color:#fff; border-color:var(--mc-blue); }
.lab-chip.warm { background:var(--mc-orange); color:#fff; border-color:var(--mc-orange); }
.lab-chip[aria-pressed="true"] { outline:2px solid var(--mc-blue); outline-offset:1px; }

.lab-panels { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.lab-panel { background:var(--mc-card); border:1px solid var(--mc-line); border-radius:8px; box-shadow:0 2px 12px rgba(95,116,160,0.10); overflow:hidden; }
.lab-panel .cap { font-size:0.74rem; letter-spacing:0.06em; text-transform:uppercase; color:var(--mc-blue); padding:8px 12px 0; font-weight:700; }
.lab-panel svg { width:100%; height:auto; display:block; }
.lab-panel svg text { font-family:inherit; font-size:11px; fill:var(--mc-ink); }
.lab-panel svg .ax { stroke:var(--mc-ink); stroke-opacity:0.55; stroke-width:1; }
.lab-panel svg .tick { fill:var(--mc-ink); fill-opacity:0.6; font-size:10px; }
.lab-panel svg .cl { font-weight:700; font-size:12px; }

.lab-status { font-size:0.9rem; line-height:1.55; }
.lab-status .big { font-size:1.05rem; font-weight:700; color:var(--mc-blue); font-variant-numeric:tabular-nums; }
.lab-status .ok { color:#5a8f5a; font-weight:700; }
.lab-status .no { color:var(--mc-orange); font-weight:700; }
.lab-status .d  { color:var(--mc-ink); opacity:0.8; font-variant-numeric:tabular-nums; }
.lab-status small { display:block; margin-top:4px; opacity:0.75; }

.lab-attrib {
  font-size:0.82rem; color:var(--global-text-color-light); line-height:1.5;
  border-top:1px solid var(--global-divider-color); margin-top:1.4rem; padding-top:0.8rem;
}
.lab-attrib a { color:var(--mc-blue); }
.lab-attrib a:hover { color:var(--mc-orange); }

@media (max-width: 820px) {
  .lab-grid { grid-template-columns:1fr; }
  .lab-side { position:static; }
  .lab-panels { grid-template-columns:1fr; }
}
</style>

<div class="lab">

<a class="lab-back" href="{{ '/teachings/macroeconomics-i/#additional-readings' | relative_url }}">&larr; Back to Macroeconomics-I</a>

<p class="lab-lede">
<span class="fq">The central bank prints money. Why does output rise — and through which market first?</span>
Most IS–LM tools jump straight to the new intersection. This one doesn't. Change a lever and the curve that moves is highlighted, the old one stays as a faint ghost, and the economy is left <em>out of equilibrium</em> until you walk it back — one market at a time — to where IS and LM cross. The three panels are the three graphs we draw on the board: income–expenditure, the money market, and IS–LM.
</p>

<div class="lab-howto">
<strong>How to use it</strong>
<ul>
  <li>Move a <em>policy lever</em> (G, t, TR, M, P). Watch which curve shifts and which panel is now out of balance.</li>
  <li>Press <em>Step</em> to let one market adjust at a time (money market sets r, then goods market sets Y, and so on). Press <em>Finish</em> to go straight to the new equilibrium. Switch to <em>instant</em> mode if you just want comparative statics.</li>
  <li>Change the <em>structure</em> (c, b, k, h) to see special cases: h → 1 makes LM vertical; b → small makes IS steep so monetary policy loses its bite.</li>
  <li><em>Clear ghosts</em> wipes the old curves; <em>Set baseline</em> makes the current state the new reference.</li>
</ul>
</div>

<div class="lab-grid">

  <div class="lab-side">
    <div class="lab-card">
      <h4>Policy levers</h4>
      <div id="lab-levers"></div>
      <div class="lab-chips">
        <button class="lab-chip warm" data-p="fiscal" type="button">Fiscal expansion</button>
        <button class="lab-chip primary" data-p="monetary" type="button">Monetary expansion</button>
        <button class="lab-chip" data-p="taxcut" type="button">Tax cut</button>
      </div>
    </div>
    <div class="lab-card">
      <h4>Structure</h4>
      <div id="lab-params"></div>
      <div class="lab-chips">
        <button class="lab-chip" data-p="vertlm" type="button">Vertical LM (h → 1)</button>
        <button class="lab-chip" data-p="steepis" type="button">Steep IS (b small)</button>
      </div>
    </div>
    <div class="lab-card">
      <h4>Adjustment</h4>
      <div class="lab-chips">
        <button class="lab-chip primary" data-a="step" type="button">Step ▸</button>
        <button class="lab-chip" data-a="finish" type="button">Finish ▸▸</button>
        <button class="lab-chip" data-a="mode" id="lab-mode" type="button" aria-pressed="false">Mode: step-by-step</button>
      </div>
      <div class="lab-chips">
        <button class="lab-chip" data-a="ghost" type="button">Clear ghosts</button>
        <button class="lab-chip" data-a="base" type="button">Set baseline</button>
        <button class="lab-chip" data-a="reset" type="button">Reset</button>
      </div>
    </div>
  </div>

  <div>
    <div class="lab-panels">
      <div class="lab-card lab-status" id="lab-status"></div>
      <div class="lab-panel"><div class="cap">Income – expenditure (at current r)</div>
        <svg id="lab-ie" viewBox="0 0 420 300" role="img" aria-label="Income-expenditure diagram"></svg></div>
      <div class="lab-panel"><div class="cap">Money market (at current Y)</div>
        <svg id="lab-mm" viewBox="0 0 420 300" role="img" aria-label="Money market diagram"></svg></div>
      <div class="lab-panel"><div class="cap">IS – LM</div>
        <svg id="lab-is" viewBox="0 0 420 300" role="img" aria-label="IS-LM diagram"></svg></div>
    </div>
  </div>

</div>

<p class="lab-attrib">
Model and panel design follow Pablo-Romero, Pozo-Barajas &amp; Gómez-Calero,
<em>Evaluation of Teaching the IS-LM Model through a Simulation Program</em>,
<em>Educational Technology &amp; Society</em> 15(4), 2012, 193–204
(<a href="https://core.ac.uk/download/51383477.pdf">open access</a>): D<sub>A</sub> = A̅ + c(1−t)Y − b·r with A̅ = C̅ + c·TR̅ + I̅ + G̅;
L = kY − h·r; real money supply M/P. Interest rate in percent. Their C++ program was tested on 324 Seville students in 2009/10 — the simulator group scored 5.2/10 on the IS–LM exam question against 3.2 for the classroom-only group.
This is an independent browser rebuild of that teaching design for ECON 202, written by Ravikiran Naik; no code is shared with the original.
For a comparative-statics-only tool see the <a href="{{ '/teachings/macroeconomics-i/islm-simulator/' | relative_url }}">TU Berlin simulator</a>.
</p>

</div>

<script>
(function () {
  var root = document.querySelector('.lab');
  if (!root) return;

  // ---------- model ----------
  var DEF = { C0:50, I0:60, G:60, TR:20, t:0.25, M:100, P:1, c:0.8, b:15, k:0.7, h:30 };
  var LEVERS = [
    ['G',  'Government purchases G', 0, 160, 1],
    ['t',  'Tax rate t',             0, 0.5, 0.01],
    ['TR', 'Transfers TR',           0, 80,  1],
    ['M',  'Money supply M',         40, 220, 1],
    ['P',  'Price level P',          0.5, 2, 0.05]
  ];
  var PARAMS = [
    ['c', 'Marginal propensity to consume c', 0.5, 0.95, 0.01],
    ['b', 'Investment sensitivity to r (b)',  2,   50,   1],
    ['k', 'Money demand: income (k)',         0.2, 1.2,  0.01],
    ['h', 'Money demand: interest (h)',       1,   60,   1]
  ];
  var S = clone(DEF), base = clone(DEF);
  var cur = { Y:0, r:0 };        // current (possibly disequilibrium) state
  var ghosts = { ie:[], mm:[], is:[] };
  var instant = false;
  var lastTouched = null;

  function clone(o){ var r={}; for (var k in o) r[k]=o[k]; return r; }
  function Abar(s){ return s.C0 + s.c*s.TR + s.I0 + s.G; }
  function sv(s){ return 1 - s.c*(1 - s.t); }                 // 1 - c(1-t)
  function m(s){ return s.M / s.P; }
  function Ygoods(s, r){ return (Abar(s) - s.b*r) / sv(s); }  // goods-market-clearing Y at r
  function rMoney(s, Y){ return (s.k*Y - m(s)) / s.h; }       // money-market-clearing r at Y
  function isR(s, Y){ return (Abar(s) - sv(s)*Y) / s.b; }
  function lmR(s, Y){ return (s.k*Y - m(s)) / s.h; }
  function eq(s){
    var Y = (Abar(s) + s.b*m(s)/s.h) / (sv(s) + s.b*s.k/s.h);
    return { Y:Y, r:lmR(s, Y) };
  }
  function expend(s, r, Y){ return Abar(s) + s.c*(1-s.t)*Y - s.b*r; }

  var e0 = eq(S); cur.Y = e0.Y; cur.r = e0.r;

  // ---------- controls ----------
  function mk(host, list){
    list.forEach(function(d){
      var key=d[0], lab=d[1];
      var row=document.createElement('div'); row.className='lab-row';
      row.innerHTML='<label for="lab-x-'+key+'">'+lab+'</label><output id="lab-o-'+key+'"></output>'+
        '<input id="lab-x-'+key+'" type="range" min="'+d[2]+'" max="'+d[3]+'" step="'+d[4]+'">';
      host.appendChild(row);
      row.querySelector('input').addEventListener('input', function(ev){
        snapshotGhost(); S[key]=+ev.target.value; lastTouched=key;
        if (instant){ var e=eq(S); cur.Y=e.Y; cur.r=e.r; }
        draw();
      });
    });
  }
  mk(root.querySelector('#lab-levers'), LEVERS);
  mk(root.querySelector('#lab-params'), PARAMS);

  function fmt(key, v){
    if (key==='t'||key==='c'||key==='k'||key==='P') return (+v).toFixed(2);
    return Math.round(v);
  }

  // ---------- svg helpers ----------
  var NS='http://www.w3.org/2000/svg';
  function el(n,a,txt){ var e=document.createElementNS(NS,n); for (var k in a) e.setAttribute(k,a[k]); if (txt!=null) e.textContent=txt; return e; }
  var YM=600, RM=12, MM=260, EM=600;

  function frame(svg, xmax, ymax, xl, yl, xticks, yticks){
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    var W=420,H=300, L=40,R=14,T=16,B=30;
    var px=function(x){ return L + x/xmax*(W-L-R); };
    var py=function(y){ return H-B - y/ymax*(H-T-B); };
    svg.appendChild(el('line',{x1:px(0),y1:py(0),x2:px(xmax),y2:py(0),'class':'ax'}));
    svg.appendChild(el('line',{x1:px(0),y1:py(0),x2:px(0),y2:py(ymax),'class':'ax'}));
    xticks.forEach(function(v){ svg.appendChild(el('text',{x:px(v),y:H-B+13,'text-anchor':'middle','class':'tick'},v)); });
    yticks.forEach(function(v){ svg.appendChild(el('text',{x:L-5,y:py(v)+3.5,'text-anchor':'end','class':'tick'},v)); });
    svg.appendChild(el('text',{x:W-R,y:H-5,'text-anchor':'end','class':'tick'},xl));
    svg.appendChild(el('text',{x:L+2,y:T-4,'class':'tick'},yl));
    return {px:px,py:py,W:W,H:H,L:L,R:R,T:T,B:B,xmax:xmax,ymax:ymax};
  }
  // clip a straight line y=f(x) to the box and draw it
  function lineFn(svg,f,fn,col,w,dash,cls){
    var pts=[], xs=[0,f.xmax], i;
    for (i=0;i<2;i++){ pts.push([xs[i],fn(xs[i])]); }
    // clip to y in [0,ymax]
    var a=pts[0],b=pts[1];
    function clipY(p,q,yv){ var tt=(yv-p[1])/(q[1]-p[1]); return [p[0]+tt*(q[0]-p[0]), yv]; }
    if (a[1]<0) a=clipY(a,b,0); if (a[1]>f.ymax) a=clipY(a,b,f.ymax);
    if (b[1]<0) b=clipY(b,a,0); if (b[1]>f.ymax) b=clipY(b,a,f.ymax);
    if (a[0]<0||a[0]>f.xmax||b[0]<0||b[0]>f.xmax) return null;
    var ln=el('line',{x1:f.px(a[0]),y1:f.py(a[1]),x2:f.px(b[0]),y2:f.py(b[1]),stroke:col,'stroke-width':w,'stroke-linecap':'round'});
    if (dash) ln.setAttribute('stroke-dasharray',dash);
    if (cls) ln.setAttribute('class',cls);
    svg.appendChild(ln); return {a:a,b:b};
  }
  function vline(svg,f,x,col,w,dash){
    if (x<0||x>f.xmax) return;
    var ln=el('line',{x1:f.px(x),y1:f.py(0),x2:f.px(x),y2:f.py(f.ymax),stroke:col,'stroke-width':w,'stroke-linecap':'round'});
    if (dash) ln.setAttribute('stroke-dasharray',dash); svg.appendChild(ln);
  }
  function guide(svg,f,x,y,col){
    if (x<0||x>f.xmax||y<0||y>f.ymax) return;
    svg.appendChild(el('line',{x1:f.px(x),y1:f.py(0),x2:f.px(x),y2:f.py(y),stroke:col,'stroke-width':1,'stroke-dasharray':'2 3',opacity:0.7}));
    svg.appendChild(el('line',{x1:f.px(0),y1:f.py(y),x2:f.px(x),y2:f.py(y),stroke:col,'stroke-width':1,'stroke-dasharray':'2 3',opacity:0.7}));
  }
  function dot(svg,f,x,y,col,r,hollow){
    if (x<0||x>f.xmax||y<0||y>f.ymax) return;
    svg.appendChild(el('circle',{cx:f.px(x),cy:f.py(y),r:r||4.5,fill:hollow?'none':col,stroke:col,'stroke-width':2}));
  }
  function label(svg,f,x,y,txt,col,anchor){
    svg.appendChild(el('text',{x:f.px(x),y:f.py(y),fill:col,'class':'cl','text-anchor':anchor||'start'},txt));
  }
  var css=function(v){ return getComputedStyle(root).getPropertyValue(v).trim(); };

  // ---------- ghosts ----------
  function snapshotGhost(){
    var keep=function(arr,item){ arr.push(item); if (arr.length>4) arr.shift(); };
    var s=clone(S), c={Y:cur.Y,r:cur.r};
    keep(ghosts.ie,{s:s,r:c.r});
    keep(ghosts.mm,{s:s,Y:c.Y});
    keep(ghosts.is,{s:s});
  }

  // ---------- draw ----------
  function draw(){
    var i, key;
    for (i=0;i<LEVERS.length;i++){ key=LEVERS[i][0]; root.querySelector('#lab-x-'+key).value=S[key]; root.querySelector('#lab-o-'+key).textContent=fmt(key,S[key]); }
    for (i=0;i<PARAMS.length;i++){ key=PARAMS[i][0]; root.querySelector('#lab-x-'+key).value=S[key]; root.querySelector('#lab-o-'+key).textContent=fmt(key,S[key]); }

    var cIS=css('--mc-orange'), cLM=css('--mc-blue'), cMD=css('--mc-red'), cG=css('--mc-ghost'), ink=css('--mc-ink');
    var hiIS = (lastTouched && 'G t TR c b'.indexOf(lastTouched)>=0);
    var hiLM = (lastTouched && 'M P k h'.indexOf(lastTouched)>=0);
    var wIS = hiIS?3.4:2.4, wLM = hiLM?3.4:2.4;

    var E=eq(S);
    var Yg=Ygoods(S,cur.r), rm=rMoney(S,cur.Y);
    var goodsGap = expend(S,cur.r,cur.Y) - cur.Y;        // E - Y  (>0 excess demand)
    var moneyGap = (S.k*cur.Y - S.h*cur.r) - m(S);        // L - M/P (>0 excess demand)
    var tol = 0.5;
    var inEq = Math.abs(goodsGap)<tol && Math.abs(moneyGap)<tol*0.5;

    // ---- income-expenditure ----
    var sIE=root.querySelector('#lab-ie'), f=frame(sIE,YM,EM,'Y','E',[0,200,400,600],[200,400,600]);
    lineFn(sIE,f,function(x){return x;},ink,1,'3 3');
    label(sIE,f,YM-8,YM-30,'45°',ink,'end');
    ghosts.ie.forEach(function(g){ lineFn(sIE,f,function(x){return expend(g.s,g.r,x);},cG,1.4,'5 4'); });
    lineFn(sIE,f,function(x){return expend(S,cur.r,x);},cIS,wIS);
    var Eend=expend(S,cur.r,YM); label(sIE,f,YM-6,Math.min(Eend,EM-14)+8,'E = C+I+G',cIS,'end');
    guide(sIE,f,Yg,Yg,cIS);
    dot(sIE,f,Yg,Yg,cIS,4.5,true);                // goods-clearing Y at current r
    dot(sIE,f,cur.Y,expend(S,cur.r,cur.Y),ink,4.5);  // where we are
    if (!inEq) { vline(sIE,f,cur.Y,ink,1,'2 3'); }

    // ---- money market ----
    var sMM=root.querySelector('#lab-mm'), g=frame(sMM,MM,RM,'M/P','r (%)',[0,100,200],[4,8,12]);
    ghosts.mm.forEach(function(gh){ vline(sMM,g,m(gh.s),cG,1.4,'5 4'); lineFn(sMM,g,function(x){return (gh.s.k*gh.Y - x)/gh.s.h;},cG,1.4,'5 4'); });
    vline(sMM,g,m(S),cLM,wLM);
    lineFn(sMM,g,function(x){return (S.k*cur.Y - x)/S.h;},cMD,2.4);
    label(sMM,g,Math.min(m(S)+6,MM-30),RM-0.6,'M/P',cLM);
    var mdx0 = S.k*cur.Y - S.h*RM; label(sMM,g,Math.max(mdx0,4)+4,RM-1.6,'L(Y, r)',cMD);
    guide(sMM,g,m(S),rm,cLM);
    dot(sMM,g,m(S),rm,cLM,4.5,true);              // money-clearing r at current Y
    dot(sMM,g,S.k*cur.Y - S.h*cur.r,cur.r,ink,4.5); // where we are on L at current r
    if (!inEq) { var hl=el('line',{x1:g.px(0),y1:g.py(cur.r),x2:g.px(MM),y2:g.py(cur.r),stroke:ink,'stroke-width':1,'stroke-dasharray':'2 3'}); sMM.appendChild(hl); }

    // ---- IS-LM ----
    var sIS=root.querySelector('#lab-is'), h=frame(sIS,YM,RM,'Y','r (%)',[0,200,400,600],[4,8,12]);
    ghosts.is.forEach(function(gh){ lineFn(sIS,h,function(x){return isR(gh.s,x);},cG,1.4,'5 4'); lineFn(sIS,h,function(x){return lmR(gh.s,x);},cG,1.4,'5 4'); });
    var isSeg=lineFn(sIS,h,function(x){return isR(S,x);},cIS,wIS);
    var lmSeg=lineFn(sIS,h,function(x){return lmR(S,x);},cLM,wLM);
    if (isSeg) label(sIS,h,Math.max(isSeg.a[0],8),Math.min(isSeg.a[1],RM-0.4)-0.3,'IS',cIS);
    if (lmSeg) label(sIS,h,Math.min(lmSeg.b[0],YM-22),Math.min(lmSeg.b[1],RM-0.5)-0.3,'LM',cLM);
    var b0=eq(base); dot(sIS,h,b0.Y,b0.r,cG,4,true);
    guide(sIS,h,E.Y,E.r,ink);
    dot(sIS,h,E.Y,E.r,cLM,4.5,true);              // target equilibrium
    dot(sIS,h,cur.Y,cur.r,ink,5);                 // where we are
    if (!inEq){
      // arrows hinting direction
      var ax=el('line',{x1:h.px(cur.Y),y1:h.py(cur.r),x2:h.px(E.Y),y2:h.py(E.r),stroke:ink,'stroke-width':1,'stroke-dasharray':'2 3',opacity:0.6});
      sIS.appendChild(ax);
    }

    // ---- status ----
    var dY=E.Y-b0.Y, dr=E.r-b0.r;
    var gs = Math.abs(goodsGap)<tol ? '<span class="ok">clears</span>' : (goodsGap>0?'<span class="no">excess demand</span> → Y rises':'<span class="no">excess supply</span> → Y falls');
    var ms = Math.abs(moneyGap)<tol*0.5 ? '<span class="ok">clears</span>' : (moneyGap>0?'<span class="no">excess demand for money</span> → r rises':'<span class="no">excess supply of money</span> → r falls');
    var zlb = (E.r<0) ? '<small><strong>r* &lt; 0:</strong> the equilibrium needs a negative nominal rate — the zero lower bound binds (liquidity trap).</small>' : '';
    root.querySelector('#lab-status').innerHTML =
      '<div>Now: <span class="big">Y = '+cur.Y.toFixed(0)+'</span> &nbsp; <span class="big">r = '+cur.r.toFixed(2)+'%</span></div>'+
      '<div>Goods market: '+gs+'</div><div>Money market: '+ms+'</div>'+
      '<div style="margin-top:6px">Equilibrium: <span class="d">Y* = '+E.Y.toFixed(0)+', r* = '+E.r.toFixed(2)+'%</span> &nbsp;·&nbsp; vs baseline: <span class="d">ΔY = '+(dY>=0?'+':'')+dY.toFixed(0)+', Δr = '+(dr>=0?'+':'')+dr.toFixed(2)+' pp</span></div>'+
      '<div>Multiplier 1/[1−c(1−t)] = <span class="d">'+(1/sv(S)).toFixed(2)+'</span></div>'+zlb+
      (inEq?'<small>Both markets clear. Change a lever to start a new experiment.</small>':'<small>Press <strong>Step</strong> to let the next market adjust, or <strong>Finish</strong> to jump to equilibrium.</small>');
  }

  // ---------- adjustment ----------
  var phase = 'money';  // alternate: money market sets r, then goods market sets Y
  function step(){
    var E=eq(S);
    var ratio = Math.abs(S.b*S.k/(S.h*sv(S)));
    var lam = ratio<0.95 ? 1 : 0.5;        // damp when the naive alternation would overshoot
    if (phase==='money'){ var rm=rMoney(S,cur.Y); cur.r = cur.r + lam*(rm-cur.r); phase='goods'; }
    else { var Yg=Ygoods(S,cur.r); cur.Y = cur.Y + lam*(Yg-cur.Y); phase='money'; }
    if (Math.abs(cur.Y-E.Y)<0.5 && Math.abs(cur.r-E.r)<0.02){ cur.Y=E.Y; cur.r=E.r; }
    draw();
  }
  function finish(){ var E=eq(S); cur.Y=E.Y; cur.r=E.r; phase='money'; draw(); }

  root.querySelectorAll('[data-a]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var a=btn.getAttribute('data-a');
      if (a==='step') step();
      if (a==='finish') finish();
      if (a==='mode'){ instant=!instant; btn.textContent= instant?'Mode: instant':'Mode: step-by-step'; btn.setAttribute('aria-pressed',instant?'true':'false'); if (instant) finish(); }
      if (a==='ghost'){ ghosts={ie:[],mm:[],is:[]}; lastTouched=null; draw(); }
      if (a==='base'){ base=clone(S); ghosts={ie:[],mm:[],is:[]}; lastTouched=null; draw(); }
      if (a==='reset'){ S=clone(DEF); base=clone(DEF); ghosts={ie:[],mm:[],is:[]}; lastTouched=null; finish(); }
    });
  });
  root.querySelectorAll('[data-p]').forEach(function(btn){
    btn.addEventListener('click', function(){
      var p=btn.getAttribute('data-p'); snapshotGhost();
      if (p==='fiscal'){ S.G=Math.min(160,S.G+30); lastTouched='G'; }
      if (p==='monetary'){ S.M=Math.min(220,S.M+30); lastTouched='M'; }
      if (p==='taxcut'){ S.t=Math.max(0,+(S.t-0.1).toFixed(2)); lastTouched='t'; }
      if (p==='vertlm'){ S.h=1; lastTouched='h'; }
      if (p==='steepis'){ S.b=3; lastTouched='b'; }
      if (instant) finish(); else draw();
    });
  });

  draw();
})();
</script>
