(function () {
'use strict';

/* ===========================
   MAZO ÚNICO: JEAN NOBLET
   =========================== */
var DECKS = {
  noblet: {
    name: 'Jean Noblet (BnF)',
    cards: Array.from({ length: 78 }, (_, i) => ({
      id: i,
      file: 'assets/decks/noblet/' + String(i).padStart(2, '0') + '.jpg'
    }))
  }
};

/* ===========================
   PREGUNTAS POR DEFECTO
   =========================== */
var DEFAULT_QSETS = {
  "Práctica 70": [
    // Identidad y proceso personal (10)
    "¿Qué aprendizaje vital necesito integrar en este momento?",
    "¿Qué actitud me conviene cultivar para avanzar en mi desarrollo personal?",
    "¿Qué estoy evitando mirar de mí mismo/a?",
    "¿Cuál es mi mayor obstáculo interno ahora?",
    "¿Qué me está fortaleciendo en silencio en este periodo?",
    "¿Qué parte de mi vida necesita más disciplina?",
    "¿Qué parte de mí reclama mayor libertad?",
    "¿Qué semilla estoy plantando hoy para el futuro?",
    "¿Dónde debo poner límites con más claridad?",
    "¿Qué me impide soltar lo que ya no corresponde?",
    // Vínculos y relación con otros (10)
    "¿Qué dinámica inconsciente está influyendo en mis relaciones?",
    "¿Qué papel estoy jugando en mis amistades ahora?",
    "¿Qué debo comprender sobre mi relación con la familia?",
    "¿Cómo puedo nutrir mejor mis vínculos cercanos?",
    "¿Qué energía aporto a una relación importante en mi vida?",
    "¿Qué estoy pidiendo en exceso a los demás?",
    "¿Qué doy que no está siendo reconocido?",
    "¿Qué enseñanza me deja una relación pasada?",
    "¿Qué necesita sanar en mi manera de vincularme?",
    "¿Qué espejo me muestran hoy mis relaciones?",
    // Vocación y trabajo (10)
    "¿Qué debo priorizar en mi trabajo o proyecto actual?",
    "¿Qué aspecto de mi vocación busca expresión ahora?",
    "¿Qué bloquea mi creatividad en este momento?",
    "¿Qué habilidad debo reforzar para crecer profesionalmente?",
    "¿Qué amenaza debo tener presente en mi camino laboral?",
    "¿Qué oportunidad estoy pasando por alto?",
    "¿Qué me motiva realmente en lo que hago?",
    "¿Qué debo transformar en mi forma de gestionar recursos y tiempo?",
    "¿Qué colaboración puede ser clave en el corto plazo?",
    "¿Qué me recuerda mi trabajo sobre mi propósito de vida?",
    // Recursos y materialidad (10)
    "¿Qué actitud me conviene adoptar hacia el dinero ahora?",
    "¿Qué me genera inseguridad material en este momento?",
    "¿Qué gasto o inversión necesito reconsiderar?",
    "¿Qué me da estabilidad real más allá del dinero?",
    "¿Qué puerta financiera puedo abrir conscientemente?",
    "¿Qué patrón económico del pasado debo revisar?",
    "¿Qué significa abundancia para mí hoy?",
    "¿Qué estoy acumulando sin necesidad?",
    "¿Qué decisión material me fortalecería ahora?",
    "¿Cómo se entrelazan trabajo y dinero en mi caso hoy?",
    // Camino espiritual y sentido (10)
    "¿Qué energía espiritual me acompaña ahora mismo?",
    "¿Qué camino de sabiduría se abre para mí en este tiempo?",
    "¿Qué enseñanza del pasado debo honrar en mi presente?",
    "¿Qué me impide confiar más en el fluir de la vida?",
    "¿Qué símbolo guía mi proceso actual?",
    "¿Qué llamada interior estoy ignorando?",
    "¿Qué parte de mí busca reconciliarse con lo trascendente?",
    "¿Qué me muestra el silencio en este tiempo?",
    "¿Qué debo entregar como ofrenda simbólica a la vida?",
    "¿Qué visión mayor quiere revelarse a través de mí?",
    // Afectos y pareja (10)
    "¿Qué necesito entender de la dinámica central de esta relación?",
    "¿Cómo se siente la otra persona respecto a mí y qué está dispuesta a hacer?",
    "¿Hacia dónde se dirige este vínculo si nada cambia?",
    "¿Qué patrón repetido (mío o de ambos) afecta la relación?",
    "¿Qué puedo hacer para mejorar esta situación afectiva?",
    "¿Qué me impide abrirme a una relación sana?",
    "¿Qué aprendizaje trae esta experiencia amorosa?",
    "¿Qué límites sanos debo establecer en este vínculo?",
    "¿Qué necesita cuidado y ternura ahora mismo?",
    "¿Cómo puedo comunicarme de forma más clara y honesta?",
    // Enfoque diario (10)
    "¿Cuál es la energía dominante para mí hoy?",
    "¿Dónde conviene enfocar mi atención en las próximas 24–48 horas?",
    "¿Qué debo saber de esta situación ahora mismo?",
    "¿Qué acción pequeña tendría mayor impacto hoy?",
    "¿Qué apoyo externo puedo solicitar de forma concreta?",
    "¿Qué debo dejar reposar y no forzar hoy?",
    "¿Qué me conviene observar sin intervenir por ahora?",
    "¿Qué hábito mínimo sostiene mejor mi equilibrio hoy?",
    "¿Qué me conviene agradecer conscientemente ahora?",
    "¿Qué mensaje síntesis tiene el tarot para mi día?"
  ],
  "Comunes 50": [
    // Vida y decisiones (10)
    "¿Cuál es la mejor perspectiva para tomar esta decisión?",
    "¿Qué no estoy viendo que sea crucial para decidir?",
    "¿Qué resultado es más probable si sigo por este camino?",
    "¿Cuál es el mayor riesgo y cómo mitigarlo?",
    "¿Qué alternativa me conviene explorar?",
    "¿Qué debo soltar para avanzar con claridad?",
    "¿Cómo alinear esta decisión con mis valores?",
    "¿Qué me conviene priorizar ahora mismo?",
    "¿Qué aprendizaje trae este cruce de caminos?",
    "¿Qué apoyo necesito pedir y a quién?",
    // Amor y vínculos (10)
    "¿Qué siente realmente por mí y qué disposición tiene?",
    "¿Cómo evolucionará esta relación en los próximos meses?",
    "¿Qué bloqueos personales afectan el vínculo?",
    "¿Qué acciones concretas mejorarían nuestra comunicación?",
    "¿Qué límites sanos debo establecer en esta relación?",
    "¿Qué patrón repito en lo afectivo y cómo transformarlo?",
    "¿Qué energía trae una nueva relación a mi vida?",
    "¿Qué cerrar para abrir espacio a un vínculo más sano?",
    "¿Qué puedo aprender de esta relación pasada?",
    "¿Qué espejo me ofrece esta persona ahora?",
    // Trabajo y dinero (10)
    "¿Qué enfoque potenciará mi crecimiento profesional?",
    "¿Qué habilidad clave debo desarrollar ahora?",
    "¿Cómo se ve el panorama si cambio de trabajo?",
    "¿Qué oportunidad laboral estoy pasando por alto?",
    "¿Qué colaboración estratégica conviene cultivar?",
    "¿Cómo mejorar mi relación con el dinero hoy?",
    "¿Qué gasto debo revisar con honestidad?",
    "¿Qué inversión/ahorro me conviene priorizar?",
    "¿Qué patrón económico merece ser sanado?",
    "¿Qué acción concreta mejoraría mi estabilidad material?",
    // Salud y bienestar (10)
    "¿Qué hábito simple mejoraría mi bienestar ahora?",
    "¿Qué está drenando mi energía últimamente?",
    "¿Qué necesito para recuperar equilibrio cuerpo-mente?",
    "¿Qué emoción pide ser atendida con urgencia?",
    "¿Qué límite físico debo respetar hoy?",
    "¿Qué práctica me ayudaría a dormir mejor?",
    "¿Qué actividad me devolvería entusiasmo y presencia?",
    "¿Cómo puedo relacionarme con mi estrés de manera más sabia?",
    "¿Qué apoyo profesional sería oportuno considerar?",
    "¿Qué autocuidado estoy postergando?",
    // Camino interno (10)
    "¿Qué símbolo/arquetipo guía mi proceso actual?",
    "¿Qué sombra está pidiendo luz y compasión?",
    "¿Qué llamada interior debo escuchar sin miedo?",
    "¿Qué ciclo se está cerrando y cuál se abre?",
    "¿Qué aprendizaje debo integrar del pasado reciente?",
    "¿Qué intuición necesito tomar en serio?",
    "¿Qué me muestra la sincronicidad de estos días?",
    "¿Cómo alinearme mejor con mi propósito?",
    "¿Qué acto de coraje me toca dar ahora?",
    "¿Qué consejo final ofrece el tarot para este tema?"
  ]
};

/* ===========================
   PERSISTENCIA
   =========================== */
function loadQsets() {
  var custom = JSON.parse(localStorage.getItem('tarot_qsets_custom') || '{}');
  var out = JSON.parse(JSON.stringify(DEFAULT_QSETS));
  for (var k in custom) out[k] = custom[k];
  return out;
}
function saveQset(name, arr) {
  var custom = JSON.parse(localStorage.getItem('tarot_qsets_custom') || '{}');
  custom[name] = arr;
  localStorage.setItem('tarot_qsets_custom', JSON.stringify(custom));
}

/* ===========================
   ELEMENTOS DEL DOM
   =========================== */
var deckSelect  = document.getElementById('deck');
var qsetSelect  = document.getElementById('qset');
var spreadSelect= document.getElementById('spread');
var scopeSelect = document.getElementById('scope');

var btnDraw   = document.getElementById('btnDraw');
var btnReveal = document.getElementById('btnReveal');
var btnSave   = document.getElementById('btnSave');
var btnHistory= document.getElementById('btnHistory');
var btnEdit   = document.getElementById('btnEdit');
var btnInstall= document.getElementById('btnInstall');
var btnExport = document.getElementById('btnExport');

var cardsWrap  = document.getElementById('cardsWrap');
var questionEl = document.getElementById('question');
var notesEl    = document.getElementById('notes');
var metaEl     = document.getElementById('meta');

var historyPanel = document.getElementById('historyPanel');
var histTable = document.getElementById('histTable').getElementsByTagName('tbody')[0];

var edSetEl = document.getElementById('edSet');
var edText  = document.getElementById('edText');
var edSave  = document.getElementById('edSave');
var edExport= document.getElementById('edExport');
var edImport= document.getElementById('edImport');
var edClose = document.getElementById('edClose');
var editor  = document.getElementById('editor');

var QSETS = loadQsets();

/* ===========================
   ESTADO ACTUAL
   =========================== */
var current = {
  deckKey: 'noblet',
  cardIds: [],
  questionIndex: null,
  ts: null,
  spread: 'line5',
  scope: 'full',
  qsetKey: 'Práctica 70'
};

/* ===========================
   UTILIDADES
   =========================== */
function rng(seed) {
  var x = seed || (Date.now() | 0);
  return function () {
    x ^= x << 13; x ^= x >>> 17; x ^= x << 5;
    return ((x >>> 0) / 4294967296);
  };
}
function sampleUnique(pool, n, r) {
  var a = pool.slice(0), out = [];
  for (var i = 0; i < n && a.length; i++) {
    var idx = Math.floor(r() * a.length);
    out.push(a.splice(idx, 1)[0]);
  }
  return out;
}
function choice(arr, r) {
  var i = Math.floor(r() * arr.length);
  return { value: arr[i], index: i };
}
function clearNode(n) { while (n.firstChild) n.removeChild(n.firstChild); }

function renderDecks() {
  clearNode(deckSelect);
  for (var k in DECKS) {
    var o = document.createElement('option');
    o.value = k; o.textContent = DECKS[k].name;
    deckSelect.appendChild(o);
  }
  deckSelect.value = 'noblet';
}

function renderQsets() {
  clearNode(qsetSelect);
  for (var k in QSETS) {
    var o = document.createElement('option');
    o.value = k; o.textContent = k;
    qsetSelect.appendChild(o);
  }
  if (!QSETS[current.qsetKey]) current.qsetKey = Object.keys(QSETS)[0];
  qsetSelect.value = current.qsetKey;
}

function availableIds(deckKey, scope) {
  var ids = DECKS[deckKey].cards.map(function (c) { return c.id; });
  if (scope === 'majors') ids = ids.slice(0, 22);
  return ids;
}

/* ===========================
   RENDER DE CARTAS
   =========================== */
function renderCards() {
  if (current.spread === 'grid3') {
    cardsWrap.innerHTML = '<div class="grid3" id="grid"></div>';
    var container = document.getElementById('grid');
    for (var i = 0; i < 9; i++) {
      var slot = document.createElement('div');
      slot.className = 'card';
      container.appendChild(slot);
    }
  } else {
    // IMPORTANTE: fila única con clase line5 (CSS ya la fuerza horizontal)
    cardsWrap.innerHTML = '<div class="row line5" id="row"></div>';
    var container = document.getElementById('row');
    for (var i = 0; i < 5; i++) {
      var slot = document.createElement('div');
      slot.className = 'card';
      container.appendChild(slot);
    }
  }

  var nodes = cardsWrap.querySelectorAll('.card');
  for (var j = 0; j < nodes.length; j++) {
    var id = current.cardIds[j];
    var img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = 'Carta ' + String(id).padStart(2, '0');
    img.src = DECKS[current.deckKey].cards[id].file;
    nodes[j].appendChild(img);
  }
}

/* ===========================
   LÓGICA DE TIRADA
   =========================== */
function newDraw() {
  var dk = deckSelect.value;
  var qk = qsetSelect.value;
  var sp = spreadSelect.value;
  var sc = scopeSelect.value;

  var n = (sp === 'grid3') ? 9 : 5;
  var r = rng(Date.now() | 0);
  var ids = sampleUnique(availableIds(dk, sc), n, r);
  var q = choice(QSETS[qk], r);

  current = {
    deckKey: dk,
    cardIds: ids,
    questionIndex: q.index,
    ts: (new Date()).toISOString(),
    spread: sp,
    scope: sc,
    qsetKey: qk
  };

  localStorage.setItem('tarot_current_pwa', JSON.stringify(current));

  renderCards();
  questionEl.textContent = '···';
  questionEl.classList.add('hidden');
  notesEl.value = '';
  metaEl.textContent = 'Tirada: ' + current.ts +
    ' • ' + (sp === 'grid3' ? '3×3' : 'Línea de 5') +
    ' • ' + (sc === 'majors' ? 'Solo Mayores' : 'Mazo completo');
}

function reveal() {
  if (current.questionIndex == null || !current.qsetKey) return;
  var q = QSETS[current.qsetKey][current.questionIndex];
  questionEl.textContent = q;
  questionEl.classList.remove('hidden');
}

/* ===========================
   HISTORIAL
   =========================== */
function saveNote() {
  var log = JSON.parse(localStorage.getItem('tarot_log_pwa') || '[]');
  var entry = {
    ts: current.ts,
    deck: current.deckKey,
    spread: current.spread,
    scope: current.scope,
    qset: current.qsetKey,
    cards: current.cardIds.slice(0),
    question: (QSETS[current.qsetKey] || [])[current.questionIndex],
    notes: notesEl.value || ''
  };
  log.push(entry);
  localStorage.setItem('tarot_log_pwa', JSON.stringify(log));
  metaEl.textContent = metaEl.textContent + ' • Guardado ✔';
}

function renderHistory() {
  clearNode(histTable);
  var log = JSON.parse(localStorage.getItem('tarot_log_pwa') || '[]');
  function td(t) { var el = document.createElement('td'); el.textContent = t; return el; }
  for (var i = 0; i < log.length; i++) {
    var e = log[i], tr = document.createElement('tr');
    tr.appendChild(td(e.ts));
    tr.appendChild(td(e.deck));
    tr.appendChild(td(e.spread === 'grid3' ? '3×3' : 'Línea de 5'));
    tr.appendChild(td((e.cards || []).join(',')));
    tr.appendChild(td(e.question || ''));
    tr.appendChild(td(e.notes || ''));
    histTable.appendChild(tr);
  }
}

function showHistory() {
  historyPanel.style.display = (historyPanel.style.display === 'none') ? 'block' : 'none';
  if (historyPanel.style.display === 'block') renderHistory();
}

function exportCSV() {
  var log = JSON.parse(localStorage.getItem('tarot_log_pwa') || '[]');
  var rows = [['fecha', 'mazo', 'tirada', 'alcance', 'cartas', 'pregunta', 'notas']];
  for (var i = 0; i < log.length; i++) {
    var e = log[i];
    rows.push([
      e.ts,
      e.deck,
      (e.spread === 'grid3' ? '3x3' : 'linea5'),
      (e.scope === 'majors' ? 'mayores' : 'completo'),
      (e.cards || []).join(' '),
      (e.question || ''),
      (e.notes || '').replace(/\n/g, ' ')
    ]);
  }
  var csv = rows.map(function (r) { return r.map(function (x) { return '"' + String(x).replace(/"/g, '""') + '"'; }).join(','); }).join('\n');
  var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'tarot_historial.csv';
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 500);
}

/* ===========================
   EDITOR DE PREGUNTAS
   =========================== */
function openEditor() {
  edSetEl.textContent = qsetSelect.value;
  edText.value = (QSETS[qsetSelect.value] || []).join('\n');
  editor.style.display = 'block';
}
function closeEditor() { editor.style.display = 'none'; }
function saveEditor() {
  var arr = edText.value.split(/\n/).map(function (s) { return s.trim(); }).filter(Boolean);
  var name = qsetSelect.value;
  saveQset(name, arr);
  QSETS = loadQsets();
  renderQsets();
  qsetSelect.value = name;
  closeEditor();
}
function exportQuestions() {
  var data = {};
  data[qsetSelect.value] = QSETS[qsetSelect.value];
  var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url; a.download = 'preguntas_' + qsetSelect.value + '.json';
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 500);
}
function importQuestions(ev) {
  var f = ev.target.files[0]; if (!f) return;
  var r = new FileReader();
  r.onload = function () {
    try {
      var obj = JSON.parse(r.result);
      var keys = Object.keys(obj);
      if (keys.length) {
        var name = keys[0];
        saveQset(name, obj[name]);
        QSETS = loadQsets();
        renderQsets();
        qsetSelect.value = name;
        alert('Importado "' + name + '" con ' + obj[name].length + ' preguntas.');
      }
    } catch (e) { alert('JSON inválido'); }
  };
  r.readAsText(f);
}

/* ===========================
   PWA: INSTALACIÓN
   =========================== */
var deferredPrompt = null;
window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  deferredPrompt = e;
  btnInstall.style.display = 'inline-block';
});
btnInstall.addEventListener('click', function () {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.finally(function () {
    deferredPrompt = null;
    btnInstall.style.display = 'none';
  });
});

/* ===========================
   INICIALIZACIÓN
   =========================== */
function init() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
  renderDecks();
  renderQsets();

  // Si quieres ocultar el selector de mazo porque solo hay Noblet:
  // document.getElementById('deck').style.display = 'none';

  btnDraw.addEventListener('click', newDraw);
  btnReveal.addEventListener('click', reveal);
  btnSave.addEventListener('click', saveNote);
  btnHistory.addEventListener('click', showHistory);
  btnExport.addEventListener('click', exportCSV);

  btnEdit.addEventListener('click', openEditor);
  edSave.addEventListener('click', saveEditor);
  edExport.addEventListener('click', exportQuestions);
  edImport.addEventListener('change', importQuestions);
  edClose.addEventListener('click', closeEditor);
}

init();

})();
