(function(){
'use strict';

// Decks (rutas de imágenes 00.jpg … 77.jpg)
var DECKS = {
  noblet: {name:'Jean Noblet DEMO (78)', cards:Array.from({length:78},(_,i)=>({id:i,file:'assets/decks/noblet/'+String(i).padStart(2,'0')+'.jpg'}))},
  rosenwald: {name:'Rosenwald', cards:Array.from({length:78},(_,i)=>({id:i,file:'assets/decks/rosenwald/'+String(i).padStart(2,'0')+'.jpg'}))},
  visconti_sforza: {name:'Visconti-Sforza', cards:Array.from({length:78},(_,i)=>({id:i,file:'assets/decks/visconti_sforza/'+String(i).padStart(2,'0')+'.jpg'}))},
  budapest: {name:'Budapest', cards:Array.from({length:78},(_,i)=>({id:i,file:'assets/decks/budapest/'+String(i).padStart(2,'0')+'.jpg'}))}
};

// Preguntas (puedes editar desde el editor integrado)
var DEFAULT_QSETS = {
  "Practica 70":[
    "¿Qué aprendizaje vital necesito integrar en este momento?","¿Qué actitud debo cultivar para avanzar en mi desarrollo personal?","¿Qué estoy evitando mirar de mí mismo?","¿Cuál es mi mayor obstáculo interno en este periodo?","¿Qué me está fortaleciendo en silencio ahora mismo?","¿Qué parte de mi vida necesita más disciplina?","¿Qué parte de mí reclama más libertad?","¿Qué semilla estoy plantando hoy para el futuro?","¿Dónde debo poner mis límites con más claridad?","¿Qué me impide soltar lo que ya no corresponde?",
    "¿Qué dinámica inconsciente influye en mis relaciones?","¿Qué papel estoy jugando en mis amistades ahora?","¿Qué debo comprender sobre mi relación con la familia?","¿Cómo puedo nutrir de mejor manera mis vínculos cercanos?","¿Qué energía aporto a una relación importante en mi vida?","¿Qué estoy pidiendo en exceso a los demás?","¿Qué doy que no está siendo reconocido?","¿Qué enseñanza me deja una relación pasada?","¿Qué necesita sanar en mi manera de vincularme?","¿Qué relación me está mostrando un espejo que no veo?",
    "¿Qué debo priorizar en mi trabajo/proyecto actual?","¿Qué aspecto de mi vocación busca expresión?","¿Qué está bloqueando mi creatividad en este momento?","¿Qué habilidad debo reforzar para crecer en mi ámbito profesional?","¿Qué amenaza debo considerar en mi camino laboral?","¿Qué oportunidad estoy pasando por alto?","¿Qué me motiva realmente a seguir trabajando en lo que hago?","¿Qué debo transformar en mi forma de gestionar los recursos?","¿Qué alianza o colaboración es clave para mi futuro cercano?","¿Qué me recuerda mi trabajo sobre mi propósito de vida?",
    "¿Qué actitud debo tener hacia el dinero ahora mismo?","¿Qué me genera inseguridad material en este momento?","¿Qué gasto o inversión debo reconsiderar?","¿Qué me da estabilidad real (más allá del dinero)?","¿Qué oportunidad financiera puedo abrir?","¿Qué debo aprender de mis patrones económicos pasados?","¿Qué representa la abundancia para mí en este momento?","¿Qué estoy acumulando sin necesidad?","¿Qué decisión material me fortalecería?","¿Qué me muestra el tarot sobre mi relación con el trabajo y el dinero?",
    "¿Qué energía espiritual me acompaña ahora mismo?","¿Qué camino de sabiduría se abre para mí en este tiempo?","¿Qué enseñanza del pasado debo honrar en mi presente?","¿Qué me impide confiar más en el fluir de la vida?","¿Qué símbolo guía mi proceso actual?","¿Qué llamada interior estoy ignorando?","¿Qué parte de mí busca reconciliarse con lo trascendente?","¿Qué me está mostrando el silencio en este tiempo?","¿Qué debo entregar como ofrenda (material o simbólica) a la vida?","¿Qué visión mayor quiere revelarse a través de mí?",
    "¿Qué necesito entender de la dinámica central de esta relación ahora mismo?","¿Cómo se siente X respecto a mí y qué está dispuesto/a a hacer al respecto?","¿Hacia dónde se dirige nuestra relación en los próximos meses si nada cambia?","¿Qué patrones repetidos (míos o de ambos) están afectando el vínculo?","¿Qué puedo hacer yo para mejorar esta situación afectiva?","¿Qué me está impidiendo abrirme a una relación sana?",
    "¿Debería quedarme en mi trabajo actual o empezar a buscar otra opción?","¿Qué pasos concretos puedo dar para mejorar mis perspectivas profesionales?","¿Qué habilidad o área de desarrollo me conviene priorizar ahora?","¿Qué oportunidad laboral estoy pasando por alto?","¿Qué alianza o colaboración me conviene cultivar a corto plazo?",
    "¿Qué actitud me conviene adoptar hacia el dinero en este momento?","¿Qué está bloqueando mi flujo financiero y cómo puedo destrabarlo?","¿Qué gasto o inversión necesito reconsiderar ya?",
    "¿Qué aprendizaje vital necesito integrar ahora mismo?","¿Dónde estoy (des)alineado con mis valores y cómo puedo corregirlo?","¿Qué parte de mí pide más disciplina y cuál más libertad?","¿Qué recurso interno o externo no estoy aprovechando?",
    "¿Cuál es la energía dominante para mí hoy y dónde conviene enfocar mi atención?","¿Qué necesito saber (o escuchar) sobre esta situación ahora mismo?"
  ]
};

// Soporte editor
function loadQsets(){var custom=JSON.parse(localStorage.getItem('tarot_qsets_custom')||'{}');var out=JSON.parse(JSON.stringify(DEFAULT_QSETS));for(var k in custom){out[k]=custom[k]}return out;}
function saveQset(name,arr){var custom=JSON.parse(localStorage.getItem('tarot_qsets_custom')||'{}');custom[name]=arr;localStorage.setItem('tarot_qsets_custom',JSON.stringify(custom));}

var deckSelect=document.getElementById('deck'), qsetSelect=document.getElementById('qset'), spreadSelect=document.getElementById('spread'), scopeSelect=document.getElementById('scope');
var btnDraw=document.getElementById('btnDraw'), btnReveal=document.getElementById('btnReveal'), btnSave=document.getElementById('btnSave'), btnHistory=document.getElementById('btnHistory'), btnEdit=document.getElementById('btnEdit'), btnInstall=document.getElementById('btnInstall');
var cardsWrap=document.getElementById('cardsWrap'), questionEl=document.getElementById('question'), notesEl=document.getElementById('notes'), metaEl=document.getElementById('meta');
var historyPanel=document.getElementById('historyPanel'), histTable=document.getElementById('histTable').getElementsByTagName('tbody')[0];
var QSETS=loadQsets();
var current={deckKey:'noblet', cardIds:[], questionIndex:null, ts:null, spread:'line5', scope:'full', qsetKey:'Practica 70'};

function rng(seed){var x=seed||Date.now()|0;return function(){x^=x<<13;x^=x>>>17;x^=x<<5;return((x>>>0)/4294967296)}}
function sampleUnique(pool,n,r){var a=pool.slice(0),out=[];for(var i=0;i<n&&a.length;i++){var idx=Math.floor(r()*a.length);out.push(a.splice(idx,1)[0])}return out;}
function choice(arr,r){var i=Math.floor(r()*arr.length);return{value:arr[i],index:i};}
function clearNode(n){while(n.firstChild)n.removeChild(n.firstChild);}

function renderDecks(){for(var k in DECKS){var o=document.createElement('option');o.value=k;o.textContent=DECKS[k].name;deckSelect.appendChild(o);} deckSelect.value='noblet';}
function renderQsets(){clearNode(qsetSelect);for(var k in QSETS){var o=document.createElement('option');o.value=k;o.textContent=k;qsetSelect.appendChild(o);} if(!QSETS[current.qsetKey]) current.qsetKey=Object.keys(QSETS)[0]; qsetSelect.value=current.qsetKey;}

function renderCards(){
  if(current.spread==='grid3'){
    cardsWrap.innerHTML = '<div class="grid3" id="grid"></div>';
    var container=document.getElementById('grid');
    for(var i=0;i<9;i++){var slot=document.createElement('div');slot.className='card';container.appendChild(slot);}
  }else{
    // ¡CLAVE! Siempre usamos la clase 'row line5'
    cardsWrap.innerHTML = '<div class="row line5" id="row"></div>';
    var container=document.getElementById('row');
    for(var i=0;i<5;i++){var slot=document.createElement('div');slot.className='card';container.appendChild(slot);}
  }
  var nodes=cardsWrap.querySelectorAll('.card');
  for(var i=0;i<nodes.length;i++){
    var id=current.cardIds[i];
    var img=document.createElement('img'); img.src=DECKS[current.deckKey].cards[id].file;
    nodes[i].appendChild(img);
  }
}

function availableIds(deckKey,scope){var ids=DECKS[deckKey].cards.map(c=>c.id); if(scope==='majors'){ids=ids.slice(0,22);} return ids;}

function newDraw(){
  var dk=deckSelect.value, qk=qsetSelect.value, sp=spreadSelect.value, sc=scopeSelect.value;
  var n=(sp==='grid3')?9:5; var r=rng(Date.now()|0);
  var ids=sampleUnique(availableIds(dk,sc), n, r);
  var q=choice(QSETS[qk], r);
  current={deckKey:dk, cardIds:ids, questionIndex:q.index, ts:(new Date()).toISOString(), spread:sp, scope:sc, qsetKey:qk};
  localStorage.setItem('tarot_current_pwa', JSON.stringify(current));
  renderCards(); questionEl.textContent='···'; questionEl.classList.add('hidden'); notesEl.value='';
  metaEl.textContent='Tirada: '+current.ts+' • '+(sp==='grid3'?'3×3':'Línea de 5')+' • '+(sc==='majors'?'Solo Mayores':'Mazo completo');
}

function reveal(){if(current.questionIndex==null||!current.qsetKey)return; var q=QSETS[current.qsetKey][current.questionIndex]; questionEl.textContent=q; questionEl.classList.remove('hidden');}

function saveNote(){
  var log=JSON.parse(localStorage.getItem('tarot_log_pwa')||'[]');
  var entry={ts:current.ts, deck:current.deckKey, spread:current.spread, scope:current.scope, qset:current.qsetKey, cards:current.cardIds.slice(0), question:QSETS[current.qsetKey][current.questionIndex], notes:notesEl.value||''};
  log.push(entry); localStorage.setItem('tarot_log_pwa', JSON.stringify(log));
  metaEl.textContent=metaEl.textContent+' • Guardado ✔';
}

function showHistory(){historyPanel.style.display=(historyPanel.style.display==='none')?'block':'none'; if(historyPanel.style.display==='block'){renderHistory();}}
function renderHistory(){clearNode(histTable); var log=JSON.parse(localStorage.getItem('tarot_log_pwa')||'[]'); for(var i=0;i<log.length;i++){var e=log[i], tr=document.createElement('tr'); function td(t){var el=document.createElement('td'); el.textContent=t; return el;} tr.appendChild(td(e.ts)); tr.appendChild(td(e.deck)); tr.appendChild(td(e.spread==='grid3'?'3×3':'Línea de 5')); tr.appendChild(td(e.cards.join(','))); tr.appendChild(td(e.question)); tr.appendChild(td(e.notes)); histTable.appendChild(tr);}}
function exportCSV(){var log=JSON.parse(localStorage.getItem('tarot_log_pwa')||'[]'); var rows=[['fecha','mazo','tirada','alcance','cartas','pregunta','notas']]; for(var i=0;i<log.length;i++){var e=log[i]; rows.push([e.ts,e.deck,(e.spread==='grid3'?'3x3':'linea5'),(e.scope==='majors'?'mayores':'completo'),e.cards.join(' '),e.question,(e.notes||'').replace(/\n/g,' ')]);} var csv=rows.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\n'); var blob=new Blob([csv],{type:'text/csv;charset=utf-8;'}); var url=URL.createObjectURL(blob); var a=document.createElement('a'); a.href=url; a.download='tarot_historial.csv'; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(url);a.remove();},500);}

// Editor
function openEditor(){document.getElementById('edSet').textContent=qsetSelect.value; document.getElementById('edText').value=(QSETS[qsetSelect.value]||[]).join('\n'); document.getElementById('editor').style.display='block';}
function closeEditor(){document.getElementById('editor').style.display='none';}
function saveEditor(){var arr=document.getElementById('edText').value.split(/\n/).map(s=>s.trim()).filter(Boolean); var name=qsetSelect.value; saveQset(name,arr); QSETS=loadQsets(); renderQsets(); qsetSelect.value=name; closeEditor();}
function exportQuestions(){var data={}; data[qsetSelect.value]=QSETS[qsetSelect.value]; var blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}); var url=URL.createObjectURL(blob); var a=document.createElement('a'); a.href=url; a.download='preguntas_'+qsetSelect.value+'.json'; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(url);a.remove();},500);}
function importQuestions(ev){var f=ev.target.files[0]; if(!f)return; var r=new FileReader(); r.onload=function(){ try{ var obj=JSON.parse(r.result); var keys=Object.keys(obj); if(keys.length){ var name=keys[0]; saveQset(name,obj[name]); QSETS=loadQsets(); renderQsets(); qsetSelect.value=name; alert('Importado "'+name+'" con '+obj[name].length+' preguntas.'); } }catch(e){ alert('JSON inválido'); } }; r.readAsText(f);}

// PWA
var deferredPrompt=null;
window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();deferredPrompt=e;document.getElementById('btnInstall').style.display='inline-block';});
document.getElementById('btnInstall').addEventListener('click',function(){if(!deferredPrompt)return;deferredPrompt.prompt();deferredPrompt.userChoice.finally(function(){deferredPrompt=null;document.getElementById('btnInstall').style.display='none';});});

function init(){
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js'); }
  renderDecks(); renderQsets();
  document.getElementById('btnDraw').addEventListener('click', newDraw);
  document.getElementById('btnReveal').addEventListener('click', reveal);
  document.getElementById('btnSave').addEventListener('click', saveNote);
  document.getElementById('btnHistory').addEventListener('click', showHistory);
  document.getElementById('btnExport').addEventListener('click', exportCSV);
  document.getElementById('btnEdit').addEventListener('click', openEditor);
  document.getElementById('edSave').addEventListener('click', saveEditor);
  document.getElementById('edExport').addEventListener('click', exportQuestions);
  document.getElementById('edImport').addEventListener('change', importQuestions);
  document.getElementById('edClose').addEventListener('click', closeEditor);
}
init();
})();
