const HEB='אבגדהוזחטיכלמנסעפצקרשת';
const OPS={rotate:'א',mirror:'ב',fold:'ג',translate:'ד',split:'ה',bridge:'ו',invert:'ז',duck:'Q'};
function glyphFor(seed){return HEB[Math.abs(seed|0)%HEB.length];}
const rainCv=document.getElementById('rain'),rctx=rainCv.getContext('2d');
function sizeRain(){rainCv.width=innerWidth;rainCv.height=innerHeight;}sizeRain();addEventListener('resize',sizeRain);
let drops=[];function initDrops(){drops=[];const c=Math.floor(rainCv.width/16);for(let i=0;i<c;i++)drops.push(Math.random()*-50);}initDrops();
function drawRain(){rctx.fillStyle='rgba(0,0,0,0.08)';rctx.fillRect(0,0,rainCv.width,rainCv.height);rctx.fillStyle='#39ff6a';rctx.font='14px monospace';for(let i=0;i<drops.length;i++){rctx.fillText(glyphFor((Math.random()*1000)|0),i*16,drops[i]*16);if(drops[i]*16>rainCv.height&&Math.random()>0.975)drops[i]=0;drops[i]++;}}
let rainTimer=setInterval(drawRain,45);

const LEVEL_DATA=[
{name:'Operators',desc:'Glyph portals transform coordinates',seedGlyphs:'אבגד',start:{x:2.5,y:2.5,dir:0},glitch:false,
 rooms:[{id:'א',x:1,y:1,w:4,h:4},{id:'ב',x:8,y:1,w:4,h:4},{id:'ג',x:1,y:8,w:4,h:4},{id:'ד',x:8,y:8,w:4,h:4}],
 map:['1111111111111','1000001000001','1000001000001','1000001000001','1000001000001','1000001000001','1110111010111','1000001000001','1000001000001','1000001009001','1000001000001','1000001000001','1111111111111'],
 portalCells:[[5,3,2],[7,3,3],[5,9,4],[7,9,5],[3,5,6],[3,7,7],[9,5,10],[9,7,11]],falseWalls:[[2,2],[10,10]],duckCell:[2,10],
 portals:{2:{x:5.5,y:3.5,partner:3,facing:0,op:'rotate',glyph:'א'},3:{x:7.5,y:3.5,partner:2,facing:Math.PI,op:'rotate',glyph:'א'},4:{x:5.5,y:9.5,partner:5,facing:0,op:'mirror',glyph:'ב'},5:{x:7.5,y:9.5,partner:4,facing:Math.PI,op:'mirror',glyph:'ב'},6:{x:3.5,y:5.5,partner:7,facing:Math.PI/2,op:'fold',glyph:'ג'},7:{x:3.5,y:7.5,partner:6,facing:-Math.PI/2,op:'fold',glyph:'ג'},10:{x:9.5,y:5.5,partner:11,facing:Math.PI/2,op:'translate',glyph:'ד'},11:{x:9.5,y:7.5,partner:10,facing:-Math.PI/2,op:'translate',glyph:'ד'}}},
{name:'Bridge & Invert',desc:'ו bridges · ז inverts',seedGlyphs:'וזדה',start:{x:2.5,y:1.5,dir:0},
 rooms:[{id:'ו',x:1,y:1,w:3,h:3},{id:'ז',x:9,y:1,w:3,h:3},{id:'ד',x:1,y:7,w:3,h:3},{id:'ה',x:9,y:7,w:3,h:3}],
 map:['1111111111111','1000100010001','1000100010001','1000100010001','1110111010111','1000000000001','1110111010111','1000100010001','1000100010901','1000100010001','1111111111111'],
 portalCells:[[4,2,2],[8,2,3],[4,8,4],[8,8,5],[2,4,6],[2,6,7],[10,4,10],[10,6,11]],falseWalls:[[6,5]],duckCell:[6,1],
 portals:{2:{x:4.5,y:2.5,partner:3,facing:0,op:'bridge',glyph:'ו'},3:{x:8.5,y:2.5,partner:2,facing:Math.PI,op:'bridge',glyph:'ו'},4:{x:4.5,y:8.5,partner:5,facing:0,op:'invert',glyph:'ז'},5:{x:8.5,y:8.5,partner:4,facing:Math.PI,op:'invert',glyph:'ז'},6:{x:2.5,y:4.5,partner:7,facing:Math.PI/2,op:'fold',glyph:'ג'},7:{x:2.5,y:6.5,partner:6,facing:-Math.PI/2,op:'fold',glyph:'ג'},10:{x:10.5,y:4.5,partner:11,facing:Math.PI/2,op:'translate',glyph:'ד'},11:{x:10.5,y:6.5,partner:10,facing:-Math.PI/2,op:'translate',glyph:'ד'}}},
{name:'Glitch Field',desc:'Turn and topology rewires',seedGlyphs:'גלץ',start:{x:2.5,y:2.5,dir:0},glitch:true,
 rooms:[{id:'ג',x:1,y:1,w:5,h:3},{id:'ל',x:7,y:1,w:5,h:3},{id:'ץ',x:1,y:7,w:5,h:3}],
 map:['1111111111111','1000001000001','1000001000001','1000001000001','1110111010111','1000000000001','1110111010111','1000001000001','1000001009001','1000001000001','1111111111111'],
 portalCells:[[5,2,2],[7,2,3],[5,8,4],[7,8,5],[3,4,6],[3,6,7]],falseWalls:[[9,5],[2,8]],duckCell:[10,5],
 portals:{2:{x:5.5,y:2.5,partner:3,facing:0,op:'fold',glyph:'ג'},3:{x:7.5,y:2.5,partner:2,facing:Math.PI,op:'fold',glyph:'ג'},4:{x:5.5,y:8.5,partner:5,facing:0,op:'mirror',glyph:'ב'},5:{x:7.5,y:8.5,partner:4,facing:Math.PI,op:'mirror',glyph:'ב'},6:{x:3.5,y:4.5,partner:7,facing:Math.PI/2,op:'rotate',glyph:'א'},7:{x:3.5,y:6.5,partner:6,facing:-Math.PI/2,op:'rotate',glyph:'א'}}},
{name:'Full Alphabet',desc:'All operators · fill the observatory',seedGlyphs:'אבגדהוז',start:{x:1.5,y:1.5,dir:Math.PI/2},
 rooms:[{id:'א',x:1,y:1,w:3,h:2},{id:'ב',x:5,y:1,w:3,h:2},{id:'ג',x:9,y:1,w:3,h:2},{id:'ד',x:1,y:4,w:3,h:2},{id:'ה',x:5,y:4,w:3,h:2},{id:'ו',x:9,y:4,w:3,h:2},{id:'ז',x:5,y:7,w:3,h:3}],
 map:['1111111111111','1000100010001','1000100010001','1110111010111','1000100010001','1000100010001','1110111010111','1000000000001','1000009000001','1000000000001','1111111111111'],
 portalCells:[[3,1,2],[5,1,3],[7,1,4],[9,1,5],[1,3,6],[1,4,7],[3,5,10],[5,5,11],[7,5,12],[9,5,13],[6,6,14],[6,7,15]],falseWalls:[[2,8],[10,8]],duckCell:[11,9],
 portals:{2:{x:3.5,y:1.5,partner:3,facing:0,op:'rotate',glyph:'א'},3:{x:5.5,y:1.5,partner:2,facing:Math.PI,op:'rotate',glyph:'א'},4:{x:7.5,y:1.5,partner:5,facing:0,op:'mirror',glyph:'ב'},5:{x:9.5,y:1.5,partner:4,facing:Math.PI,op:'mirror',glyph:'ב'},6:{x:1.5,y:3.5,partner:7,facing:Math.PI/2,op:'fold',glyph:'ג'},7:{x:1.5,y:4.5,partner:6,facing:-Math.PI/2,op:'fold',glyph:'ג'},10:{x:3.5,y:5.5,partner:11,facing:0,op:'translate',glyph:'ד'},11:{x:5.5,y:5.5,partner:10,facing:Math.PI,op:'translate',glyph:'ד'},12:{x:7.5,y:5.5,partner:13,facing:0,op:'split',glyph:'ה'},13:{x:9.5,y:5.5,partner:12,facing:Math.PI,op:'split',glyph:'ה'},14:{x:6.5,y:6.5,partner:15,facing:Math.PI/2,op:'bridge',glyph:'ו'},15:{x:6.5,y:7.5,partner:14,facing:-Math.PI/2,op:'invert',glyph:'ז'}}}
];

let currentLevel=0,MAP=[],MAPW=0,MAPH=0,PORTALS={};
let player={x:2.5,y:2.5,dir:0,fov:Math.PI/3};
const MOVE_SPEED=2.7,TURN_SPEED=2.2;
let portalCooldown=0,finished=false,started=false;
let portalHistory=[],glyphLog={},currentRoom='?',lastDirBucket=0,glitchCooldown=0,seedStr='';

function cellType(x,y){if(x<0||y<0||x>=MAPW||y>=MAPH)return 1;return MAP[y][x];}
function isSolid(x,y){return cellType(x,y)===1;}
function isPortal(x,y){const t=cellType(x,y);return(t>=2&&t!==8&&t!==9&&t!==99)?t:0;}
function isFinish(x,y){return cellType(x,y)===9;}
function roomAt(x,y){const L=LEVEL_DATA[currentLevel];const cx=Math.floor(x),cy=Math.floor(y);for(const r of (L.rooms||[])){if(cx>=r.x&&cx<r.x+r.w&&cy>=r.y&&cy<r.y+r.h)return r.id;}return '?';}
function showRoomBanner(id,extra){const el=document.getElementById('roomBanner');el.innerHTML='<div style="font-size:32px">'+id+'</div><div style="font-size:12px;margin-top:4px">'+(extra||'PORTAL STATE: OPEN')+'</div>';el.classList.add('show');clearTimeout(showRoomBanner._t);showRoomBanner._t=setTimeout(()=>el.classList.remove('show'),1600);}
function updateHistoryUI(){const bar=document.getElementById('historyBar');bar.textContent=portalHistory.length?portalHistory.map(h=>h.glyph).join(' → '):'';}
function logGlyph(glyph,op,fromRoom){if(!glyphLog[glyph])glyphLog[glyph]={observed:0,op:op||'UNKNOWN',connections:new Set(),firstFrom:fromRoom,lastFrom:fromRoom};const g=glyphLog[glyph];g.observed++;if(op)g.op=op;g.lastFrom=fromRoom;if(fromRoom&&fromRoom!=='?')g.connections.add(fromRoom);}
function makeSeed(L){const n=Math.floor(Math.random()*90)+10;return (L.seedGlyphs||'אבג')+'-'+n+'-'+(L.seedGlyphs||'ד')[0]+'-'+(n^7);}

function loadLevel(idx){
  currentLevel=((idx%LEVEL_DATA.length)+LEVEL_DATA.length)%LEVEL_DATA.length;
  const L=LEVEL_DATA[currentLevel];
  MAP=L.map.map(row=>row.split('').map(Number));
  for(const [x,y,id] of L.portalCells){if(MAP[y])MAP[y][x]=id;}
  if(L.falseWalls)for(const [x,y] of L.falseWalls){if(MAP[y]&&MAP[y][x]===0)MAP[y][x]=8;}
  if(L.duckCell){const[dx,dy]=L.duckCell;if(MAP[dy]&&MAP[dy][dx]===0)MAP[dy][dx]=99;}
  MAPW=MAP[0].length;MAPH=MAP.length;PORTALS=JSON.parse(JSON.stringify(L.portals));
  player.x=L.start.x;player.y=L.start.y;player.dir=L.start.dir;
  portalCooldown=0;finished=false;portalHistory=[];currentRoom=roomAt(player.x,player.y);
  seedStr=makeSeed(L);document.getElementById('seedBar').textContent='SEED: '+seedStr;
  document.getElementById('win').style.display='none';
  document.querySelectorAll('#levelSelect button').forEach((b,i)=>b.classList.toggle('active',i===currentLevel));
  updateHistoryUI();showRoomBanner(currentRoom,'ENTERING · OPERATORS ACTIVE');
}

const levelSelect=document.getElementById('levelSelect');
LEVEL_DATA.forEach((L,i)=>{const b=document.createElement('button');b.textContent=(i+1)+'. '+L.name;b.title=L.desc;b.onclick=e=>{e.stopPropagation();loadLevel(i);};levelSelect.appendChild(b);});
loadLevel(0);

function portalExitRay(src,dst,rdx,rdy){
  const inAng=Math.atan2(rdy,rdx);const rel=inAng-(src.facing+Math.PI);let outAng=dst.facing+rel;
  const op=dst.op||src.op||'fold';
  if(op==='rotate')outAng+=Math.PI/2;else if(op==='mirror')outAng=2*dst.facing-outAng;else if(op==='invert')outAng+=Math.PI;else if(op==='split')outAng+=(Math.random()<0.5?0.4:-0.4);
  return{rdx:Math.cos(outAng),rdy:Math.sin(outAng),ang:outAng,op};
}

const keys={};
addEventListener('keydown',e=>{const k=e.key.toLowerCase();keys[k]=true;if(!started)startGame();if(k==='m')showMinimap=!showMinimap;if(k==='v')ANAGLYPH=!ANAGLYPH;if(k==='g')togglePanel('obsPanel');if(k==='t')togglePanel('topoPanel');if(k>='1'&&k<='4'){loadLevel(parseInt(k,10)-1);if(!started)startGame();}});
addEventListener('keyup',e=>{keys[e.key.toLowerCase()]=false;});
document.getElementById('title').onclick=startGame;
document.getElementById('title').addEventListener('touchstart',e=>{if(e.target.closest('#levelSelect'))return;e.preventDefault();startGame();},{passive:false});

const padButtons=Array.from(document.querySelectorAll('#controlBar .btn'));
const activePadKeys=new Set();
function setPadKey(key,down){if(down)activePadKeys.add(key);else activePadKeys.delete(key);keys[key]=activePadKeys.has(key);padButtons.forEach(b=>b.classList.toggle('active',activePadKeys.has(b.dataset.key)));}
padButtons.forEach(btn=>{const key=btn.dataset.key;const down=e=>{e.preventDefault();e.stopPropagation();if(!started)startGame();setPadKey(key,true);};const up=e=>{e.preventDefault();e.stopPropagation();setPadKey(key,false);};btn.addEventListener('mousedown',down);btn.addEventListener('mouseup',up);btn.addEventListener('mouseleave',up);btn.addEventListener('touchstart',down,{passive:false});btn.addEventListener('touchend',up,{passive:false});btn.addEventListener('touchcancel',up,{passive:false});});

document.getElementById('mmBtn').onclick=()=>{showMinimap=!showMinimap;};
document.getElementById('stereoBtn').onclick=()=>{ANAGLYPH=!ANAGLYPH;};
document.getElementById('levelBtn').onclick=()=>showTitle();
document.getElementById('padBtn').onclick=()=>document.getElementById('controlBar').classList.toggle('hidden');
document.getElementById('obsBtn').onclick=()=>togglePanel('obsPanel');
document.getElementById('topoBtn').onclick=()=>togglePanel('topoPanel');
document.getElementById('obsClose').onclick=()=>document.getElementById('obsPanel').classList.remove('open');
document.getElementById('topoClose').onclick=()=>document.getElementById('topoPanel').classList.remove('open');
document.getElementById('winNext').onclick=()=>loadLevel(currentLevel+1);
document.getElementById('winRetry').onclick=()=>loadLevel(currentLevel);
document.getElementById('winMenu').onclick=()=>showTitle();
document.getElementById('seedBar').onclick=()=>{navigator.clipboard?.writeText(seedStr);document.getElementById('seedBar').textContent='COPIED: '+seedStr;setTimeout(()=>document.getElementById('seedBar').textContent='SEED: '+seedStr,1200);};

function togglePanel(id){const p=document.getElementById(id);const open=!p.classList.contains('open');document.querySelectorAll('.panel').forEach(x=>x.classList.remove('open'));if(open){p.classList.add('open');if(id==='obsPanel')renderObservatory();if(id==='topoPanel')renderTopo();}}
function renderObservatory(){const body=document.getElementById('obsBody');const glyphs=Object.keys(glyphLog);if(!glyphs.length){body.innerHTML='<p style="opacity:0.7">No glyphs observed yet. Walk through portals.</p>';return;}body.innerHTML=glyphs.map(g=>{const d=glyphLog[g];const conns=[...d.connections].join(' · ')||'—';return '<div class="glyphCard"><div class="big">'+g+'</div><div class="meta">Observed: '+d.observed+'×<br>Behavior: '+(d.op||'UNKNOWN').toUpperCase()+'<br>Connections: '+conns+'<br>First: '+(d.firstFrom||'?')+' · Last: '+(d.lastFrom||'?')+'</div></div>';}).join('');}
function renderTopo(){const cv=document.getElementById('topoCanvas');const ctx=cv.getContext('2d');ctx.fillStyle='#000';ctx.fillRect(0,0,cv.width,cv.height);const L=LEVEL_DATA[currentLevel];const rooms=L.rooms||[];const nodes={};rooms.forEach((r,i)=>{const ang=i/rooms.length*Math.PI*2-Math.PI/2;nodes[r.id]={x:210+Math.cos(ang)*100,y:140+Math.sin(ang)*90};});ctx.strokeStyle='#0c3a1c';ctx.lineWidth=2;const pairs=new Set();for(const p of Object.values(PORTALS)){const a=p.glyph,b=PORTALS[p.partner]?.glyph;if(a&&b&&nodes[a]&&nodes[b]){const key=[a,b].sort().join('');if(pairs.has(key))continue;pairs.add(key);ctx.beginPath();ctx.moveTo(nodes[a].x,nodes[a].y);ctx.lineTo(nodes[b].x,nodes[b].y);ctx.stroke();}}for(const id in nodes){const n=nodes[id];ctx.fillStyle=id===currentRoom?'#ffd700':'#39ff6a';ctx.beginPath();ctx.arc(n.x,n.y,18,0,Math.PI*2);ctx.fill();ctx.fillStyle='#000';ctx.font='16px monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(id,n.x,n.y);}document.getElementById('topoWhere').textContent='WHERE AM I?  '+currentRoom+(portalHistory.length?'  ·  '+portalHistory.map(h=>h.fromRoom).join(' → '):'');}

const cv=document.getElementById('game'),ctx=cv.getContext('2d');const ROWS=60;ctx.textBaseline='top';
const mm=document.getElementById('minimap'),mctx=mm.getContext('2d');
let showMinimap=true,ANAGLYPH=true,flickerFrame=0;const COLS=100,CELL=cv.width/COLS,MAX_DISPARITY_PX=3.4;
const dbgEl=document.getElementById('debug');

function castRay(ox,oy,rdx,rdy,maxSteps){
  let mapX=Math.floor(ox),mapY=Math.floor(oy);
  let deltaDistX=rdx===0?1e30:Math.abs(1/rdx),deltaDistY=rdy===0?1e30:Math.abs(1/rdy);
  let stepX,sideDistX,stepY,sideDistY;
  if(rdx<0){stepX=-1;sideDistX=(ox-mapX)*deltaDistX;}else{stepX=1;sideDistX=(mapX+1-ox)*deltaDistX;}
  if(rdy<0){stepY=-1;sideDistY=(oy-mapY)*deltaDistY;}else{stepY=1;sideDistY=(mapY+1-oy)*deltaDistY;}
  let hit=0,side=0,dist=0,guard=0,px=ox,py=oy,prdx=rdx,prdy=rdy,isFinishHit=false,throughPortal=false,portalHops=0;
  while(hit===0&&guard<maxSteps){
    if(sideDistX<sideDistY){sideDistX+=deltaDistX;mapX+=stepX;side=0;}else{sideDistY+=deltaDistY;mapY+=stepY;side=1;}
    const cell=cellType(mapX,mapY);
    if(cell===1||cell===8||cell===99){hit=1;dist=side===0?(sideDistX-deltaDistX):(sideDistY-deltaDistY);}
    else if(cell===9){hit=1;isFinishHit=true;dist=side===0?(sideDistX-deltaDistX):(sideDistY-deltaDistY);}
    else if(cell>=2&&PORTALS[cell]){
      const src=PORTALS[cell],dst=PORTALS[src.partner];if(!dst){hit=1;dist=0.5;break;}
      const tr=portalExitRay(src,dst,prdx,prdy);prdx=tr.rdx;prdy=tr.rdy;
      px=dst.x+prdx*0.4;py=dst.y+prdy*0.4;mapX=Math.floor(px);mapY=Math.floor(py);
      deltaDistX=prdx===0?1e30:Math.abs(1/prdx);deltaDistY=prdy===0?1e30:Math.abs(1/prdy);
      if(prdx<0){stepX=-1;sideDistX=(px-mapX)*deltaDistX;}else{stepX=1;sideDistX=(mapX+1-px)*deltaDistX;}
      if(prdy<0){stepY=-1;sideDistY=(py-mapY)*deltaDistY;}else{stepY=1;sideDistY=(mapY+1-py)*deltaDistY;}
      dist+=0.12;portalHops++;throughPortal=true;if(portalHops>6){hit=1;dist=Math.max(dist,8);break;}
    }
    guard++;
  }
  if(hit===0)dist=20;return{dist:Math.max(0.05,dist),side,mapX,mapY,isFinishHit,throughPortal};
}

function renderFrame(){
  ctx.font=(CELL+1)+"px 'Courier New', monospace";ctx.clearRect(0,0,cv.width,cv.height);
  ctx.fillStyle='#020402';ctx.fillRect(0,0,cv.width,cv.height*0.5);ctx.fillStyle='#050805';ctx.fillRect(0,cv.height*0.5,cv.width,cv.height*0.5);
  const planeLen=Math.tan(player.fov/2);const dirX=Math.cos(player.dir),dirY=Math.sin(player.dir);
  const planeX=-dirY*planeLen,planeY=dirX*planeLen;const maxDist=12;
  for(let col=0;col<COLS;col++){
    const camX=2*col/COLS-1;const rdx=dirX+planeX*camX,rdy=dirY+planeY*camX;
    const{dist:perpDist,side,mapX,mapY,isFinishHit,throughPortal}=castRay(player.x,player.y,rdx,rdy,90);
    const lineHeight=Math.floor(ROWS/perpDist);let drawStart=Math.floor(-lineHeight/2+ROWS/2),drawEnd=Math.floor(lineHeight/2+ROWS/2);
    if(drawStart<0)drawStart=0;if(drawEnd>=ROWS)drawEnd=ROWS-1;
    let bright=Math.max(0,1-perpDist/maxDist);if(side===1)bright*=0.65;
    const colX=col*CELL;const disparity=ANAGLYPH?MAX_DISPARITY_PX*Math.max(0,1-perpDist/5):0;
    for(let row=0;row<drawStart;row++){if(Math.random()<0.05){ctx.fillStyle='rgb(0,30,20)';ctx.fillText(glyphFor(col+row),colX,row*CELL);}}
    for(let row=drawStart;row<=drawEnd;row++){
      const ch=glyphFor(mapX*131+mapY*337+row*17+Math.floor(flickerFrame)%5);const g=Math.floor(bright*220)+15;
      if(isFinishHit){const gold=Math.floor(bright*200)+40;if(ANAGLYPH){ctx.globalCompositeOperation='lighter';ctx.fillStyle='rgb('+gold+',0,0)';ctx.fillText(ch,colX-disparity/2,row*CELL);ctx.fillStyle='rgb(0,'+Math.floor(gold*0.9)+',40)';ctx.fillText(ch,colX+disparity/2,row*CELL);ctx.globalCompositeOperation='source-over';}else{ctx.fillStyle='rgb('+gold+','+Math.floor(gold*0.85)+',40)';ctx.fillText(ch,colX,row*CELL);}}
      else if(ANAGLYPH){ctx.globalCompositeOperation='lighter';const rB=throughPortal?50:0,cB=throughPortal?35:0;ctx.fillStyle='rgb('+(Math.floor(bright*230)+10+rB)+',0,0)';ctx.fillText(ch,colX-disparity/2,row*CELL);ctx.fillStyle='rgb(0,'+Math.min(255,g+cB)+','+(Math.floor(bright*180)+10+cB)+')';ctx.fillText(ch,colX+disparity/2,row*CELL);ctx.globalCompositeOperation='source-over';}
      else{ctx.fillStyle=throughPortal?'rgb('+Math.floor(bright*100)+','+g+',40)':'rgb('+Math.floor(bright*40)+','+g+','+Math.floor(bright*90)+')';ctx.fillText(ch,colX,row*CELL);}
    }
    for(let row=drawEnd+1;row<ROWS;row++){if(Math.random()<0.1){ctx.fillStyle='rgb(0,40,20)';ctx.fillText(glyphFor(col+row),colX,row*CELL);}}
  }
  flickerFrame+=0.4;
}

function drawMinimap(){mctx.clearRect(0,0,mm.width,mm.height);if(!showMinimap)return;const cs=Math.min(mm.width/MAPW,mm.height/MAPH);for(let y=0;y<MAPH;y++)for(let x=0;x<MAPW;x++){const t=MAP[y][x];if(t===1)mctx.fillStyle='#0c3a1c';else if(t===8)mctx.fillStyle='#1a5a30';else if(t===9)mctx.fillStyle='#ffd700';else if(t===99)mctx.fillStyle='#886600';else if(t>=2)mctx.fillStyle='#ff6a39';else mctx.fillStyle='#000';mctx.fillRect(x*cs,y*cs,cs+0.5,cs+0.5);}mctx.fillStyle='#39ff6a';mctx.beginPath();mctx.arc(player.x*cs,player.y*cs,3,0,Math.PI*2);mctx.fill();mctx.strokeStyle='#39ff6a';mctx.beginPath();mctx.moveTo(player.x*cs,player.y*cs);mctx.lineTo((player.x+Math.cos(player.dir)*1.4)*cs,(player.y+Math.sin(player.dir)*1.4)*cs);mctx.stroke();}

function tryPortal(){
  if(portalCooldown>0||finished)return;
  const cx=Math.floor(player.x),cy=Math.floor(player.y);
  if(cellType(cx,cy)===99){portalCooldown=2;const ov=document.getElementById('duckOverlay');ov.style.display='flex';setTimeout(()=>{ov.style.display='none';player.x=MAPW-2.5;player.y=MAPH-2.5;player.dir=Math.random()*Math.PI*2;logGlyph('Q','duck',currentRoom);portalHistory.push({glyph:'Q',op:'duck',fromRoom:currentRoom});updateHistoryUI();currentRoom=roomAt(player.x,player.y);showRoomBanner(currentRoom,'QUACK DISPLACEMENT');},900);return;}
  const pid=isPortal(cx,cy);
  if(pid&&PORTALS[pid]){const src=PORTALS[pid],dst=PORTALS[src.partner];if(dst){const from=currentRoom;const tr=portalExitRay(src,dst,Math.cos(player.dir),Math.sin(player.dir));player.dir=tr.ang;player.x=dst.x+tr.rdx*0.45;player.y=dst.y+tr.rdy*0.45;portalCooldown=0.55;const g=src.glyph||'?';const op=tr.op||src.op||'fold';portalHistory.push({glyph:g,op,fromRoom:from});if(portalHistory.length>12)portalHistory.shift();logGlyph(g,op,from);updateHistoryUI();const nr=roomAt(player.x,player.y);if(nr!==currentRoom){currentRoom=nr;showRoomBanner(nr,'OP: '+op.toUpperCase()+' · via '+g);}else showRoomBanner(g,'OP: '+op.toUpperCase());}}
}
function checkFinish(){if(finished)return;if(isFinish(Math.floor(player.x),Math.floor(player.y))){finished=true;const L=LEVEL_DATA[currentLevel];document.getElementById('winMsg').textContent='Level "'+L.name+'" complete. '+L.desc;document.getElementById('win').style.display='flex';}}
function maybeGlitch(dt){const L=LEVEL_DATA[currentLevel];if(!L.glitch||finished)return;glitchCooldown-=dt;const bucket=Math.floor(((player.dir%(Math.PI*2))+Math.PI*2)%(Math.PI*2)/(Math.PI/2));if(bucket!==lastDirBucket&&glitchCooldown<=0){lastDirBucket=bucket;glitchCooldown=1.2;const ids=Object.keys(PORTALS).map(Number);if(ids.length>=2){const a=ids[(Math.random()*ids.length)|0],b=ids[(Math.random()*ids.length)|0];if(a!==b){PORTALS[a].partner=b;PORTALS[b].partner=a;const ops=['rotate','mirror','fold','invert'];PORTALS[a].op=ops[(Math.random()*ops.length)|0];PORTALS[a].glyph=OPS[PORTALS[a].op]||PORTALS[a].glyph;}}}}

let lastT=performance.now();
function loop(t){
  const dt=Math.min(0.05,(t-lastT)/1000);lastT=t;if(portalCooldown>0)portalCooldown-=dt;
  if(!finished){if(keys['arrowleft'])player.dir-=TURN_SPEED*dt;if(keys['arrowright'])player.dir+=TURN_SPEED*dt;
    const dirX=Math.cos(player.dir),dirY=Math.sin(player.dir);let mvx=0,mvy=0;
    if(keys['w']){mvx+=dirX;mvy+=dirY;}if(keys['s']){mvx-=dirX;mvy-=dirY;}if(keys['a']||keys['q']){mvx+=dirY;mvy-=dirX;}if(keys['d']||keys['e']){mvx-=dirY;mvy+=dirX;}
    const mlen=Math.hypot(mvx,mvy);if(mlen>0){mvx=mvx/mlen*MOVE_SPEED*dt;mvy=mvy/mlen*MOVE_SPEED*dt;const margin=0.18;if(!isSolid(Math.floor(player.x+mvx+Math.sign(mvx)*margin),Math.floor(player.y)))player.x+=mvx;if(!isSolid(Math.floor(player.x),Math.floor(player.y+mvy+Math.sign(mvy)*margin)))player.y+=mvy;}
    const r=roomAt(player.x,player.y);if(r!=='?'&&r!==currentRoom){currentRoom=r;showRoomBanner(r,'PORTAL STATE: OPEN');}
    tryPortal();checkFinish();maybeGlitch(dt);}
  const L=LEVEL_DATA[currentLevel];dbgEl.textContent='['+(currentLevel+1)+'] '+L.name+' · room '+currentRoom+'\npos '+player.x.toFixed(2)+','+player.y.toFixed(2)+'\nG index · T topology';
  renderFrame();drawMinimap();requestAnimationFrame(loop);
}
function startGame(){if(started)return;started=true;clearInterval(rainTimer);document.getElementById('title').style.display='none';requestAnimationFrame(loop);}
function showTitle(){started=false;finished=false;document.getElementById('win').style.display='none';document.querySelectorAll('.panel').forEach(p=>p.classList.remove('open'));document.getElementById('title').style.display='flex';rainTimer=setInterval(drawRain,45);}
