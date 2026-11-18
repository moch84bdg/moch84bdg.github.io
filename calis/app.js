// Data Huruf A-Z Bahasa Indonesia
const ALPHABET_DATA = [
  { char: 'A', type: 'vocal', word: 'Apel', emoji: '🍎', phonetic: 'a' },
  { char: 'B', type: 'consonant', word: 'Bola', emoji: '⚽', phonetic: 'be' },
  { char: 'C', type: 'consonant', word: 'Ceri', emoji: '🍒', phonetic: 'ce' },
  { char: 'D', type: 'consonant', word: 'Domba', emoji: '🐑', phonetic: 'de' },
  { char: 'E', type: 'vocal', word: 'Elang', emoji: '🦅', phonetic: 'e' },
  { char: 'F', type: 'consonant', word: 'Foto', emoji: '📷', phonetic: 'ef' },
  { char: 'G', type: 'consonant', word: 'Gajah', emoji: '🐘', phonetic: 'ge' },
  { char: 'H', type: 'consonant', word: 'Harimau', emoji: '🐯', phonetic: 'ha' },
  { char: 'I', type: 'vocal', word: 'Ikan', emoji: '🐟', phonetic: 'i' },
  { char: 'J', type: 'consonant', word: 'Jerapah', emoji: '🦒', phonetic: 'je' },
  { char: 'K', type: 'consonant', word: 'Kucing', emoji: '🐱', phonetic: 'ka' },
  { char: 'L', type: 'consonant', word: 'Lumba-lumba', emoji: '🐬', phonetic: 'el' },
  { char: 'M', type: 'consonant', word: 'Monyet', emoji: '🐵', phonetic: 'em' },
  { char: 'N', type: 'consonant', word: 'Nanas', emoji: '🍍', phonetic: 'en' },
  { char: 'O', type: 'vocal', word: 'Obor', emoji: '🔦', phonetic: 'o' },
  { char: 'P', type: 'consonant', word: 'Pisang', emoji: '🍌', phonetic: 'pe' },
  { char: 'Q', type: 'consonant', word: 'Quran', emoji: '📖', phonetic: 'ki' },
  { char: 'R', type: 'consonant', word: 'Rusa', emoji: '🦌', phonetic: 'er' },
  { char: 'S', type: 'consonant', word: 'Singa', emoji: '🦁', phonetic: 'es' },
  { char: 'T', type: 'consonant', word: 'Topi', emoji: '🎩', phonetic: 'te' },
  { char: 'U', type: 'vocal', word: 'Ular', emoji: '🐍', phonetic: 'u' },
  { char: 'V', type: 'consonant', word: 'Vas', emoji: '🏺', phonetic: 've' },
  { char: 'W', type: 'consonant', word: 'Wortel', emoji: '🥕', phonetic: 'we' },
  { char: 'X', type: 'consonant', word: 'Xilofon', emoji: '🎶', phonetic: 'eks' },
  { char: 'Y', type: 'consonant', word: 'Yoyo', emoji: '🪀', phonetic: 'ye' },
  { char: 'Z', type: 'consonant', word: 'Zebra', emoji: '🦓', phonetic: 'zet' }
];

const CONSONANTS = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'W', 'Y', 'Z'];
const VOWELS = ['A', 'I', 'U', 'E', 'O'];

// Bank Kata untuk Belajar Mengeja & Membaca
const READING_LEVELS = {
  1: [
    { word: 'BOLA', syllables: ['BO', 'LA'], emoji: '⚽' },
    { word: 'BUKU', syllables: ['BU', 'KU'], emoji: '📘' },
    { word: 'MATA', syllables: ['MA', 'TA'], emoji: '👀' },
    { word: 'KAKI', syllables: ['KA', 'KI'], emoji: '🦶' },
    { word: 'ROTI', syllables: ['RO', 'TI'], emoji: '🍞' },
    { word: 'SUSU', syllables: ['SU', 'SU'], emoji: '🥛' },
    { word: 'TOPI', syllables: ['TO', 'PI'], emoji: '🎩' },
    { word: 'KUDA', syllables: ['KU', 'DA'], emoji: '🐴' },
    { word: 'SAPI', syllables: ['SA', 'PI'], emoji: '🐄' },
    { word: 'BAJU', syllables: ['BA', 'JU'], emoji: '👕' }
  ],
  2: [
    { word: 'SEPEDA', syllables: ['SE', 'PE', 'DA'], emoji: '🚲' },
    { word: 'KELINCI', syllables: ['KE', 'LIN', 'CI'], emoji: '🐰' },
    { word: 'MATAHARI', syllables: ['MA', 'TA', 'HA', 'RI'], emoji: '☀️' },
    { word: 'SEPATU', syllables: ['SE', 'PA', 'TU'], emoji: '👟' },
    { word: 'JERAPAH', syllables: ['JE', 'RA', 'PAH'], emoji: '🦒' },
    { word: 'PELANGI', syllables: ['PE', 'LAN', 'GI'], emoji: '🌈' },
    { word: 'BENDERA', syllables: ['BEN', 'DE', 'RA'], emoji: '🇮🇩' },
    { word: 'HARIMAU', syllables: ['HA', 'RI', 'MAU'], emoji: '🐯' },
    { word: 'PESAWAT', syllables: ['PE', 'SA', 'WAT'], emoji: '✈️' },
    { word: 'SEKOLAH', syllables: ['SE', 'KO', 'LAH'], emoji: '🏫' }
  ],
  3: [
    { word: 'INI BOLA BUDI', syllables: ['I-NI', 'BO-LA', 'BU-DI'], emoji: '👦⚽' },
    { word: 'IBU BELI ROTI', syllables: ['I-BU', 'BE-LI', 'RO-TI'], emoji: '👩🍞' },
    { word: 'KUCING SUKA IKAN', syllables: ['KU-CING', 'SU-KA', 'I-KAN'], emoji: '🐱🐟' },
    { word: 'AYAH BACA BUKU', syllables: ['A-YAH', 'BA-CA', 'BU-KU'], emoji: '👨📖' },
    { word: 'BURUNG TERBANG TINGGI', syllables: ['BU-RUNG', 'TER-BANG', 'TING-GI'], emoji: '🐦☁️' },
    { word: 'ADIK MINUM SUSU', syllables: ['A-DIK', 'MI-NUM', 'SU-SU'], emoji: '👶🥛' }
  ]
};

// State Aplikasi
let state = {
  stars: parseInt(localStorage.getItem('duniabaca_stars') || '0', 10),
  voiceEnabled: true,
  selectedLetter: ALPHABET_DATA[0],
  letterFilter: 'all',
  selectedConsonant: 'B',
  mixedSlots: [],
  currentLevel: 1,
  currentWordIndex: 0,
  isSpelling: false,
  currentQuiz: null,
  quizLocked: false,
  selectedNumber: 1,
  countAnswer: 0,
  countLocked: false,
  opFilter: 'mix',
  opAnswer: 0,
  opLocked: false
};

// Speech Synthesis Helper (Bahasa Indonesia)
function speak(text, rate = 0.85, onEnd = null) {
  if (!state.voiceEnabled || !('speechSynthesis' in window)) {
    if (onEnd) setTimeout(onEnd, 450);
    return;
  }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text.toLowerCase());
  utter.lang = 'id-ID';
  utter.rate = rate;
  utter.pitch = 1.12;

  const voices = window.speechSynthesis.getVoices();
  const idVoice = voices.find(v => v.lang.toLowerCase().includes('id'));
  if (idVoice) utter.voice = idVoice;

  if (onEnd) utter.onend = onEnd;
  window.speechSynthesis.speak(utter);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

function addStars(amount = 1) {
  state.stars += amount;
  localStorage.setItem('duniabaca_stars', state.stars);
  document.getElementById('star-count').textContent = state.stars;
  launchConfetti();
}

function launchConfetti() {
  const container = document.getElementById('confetti-container');
  const colors = ['#ff6b35', '#fbbf24', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];
  for (let i = 0; i < 28; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (0.9 + Math.random() * 0.9) + 's';
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 1800);
  }
}

// Navigasi Tab Mode
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.mode-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      window.speechSynthesis?.cancel();
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      const mode = tab.dataset.mode;
      document.getElementById(`mode-${mode}`).classList.add('active');

      if (mode === 'kuis') generateQuiz();
      if (mode === 'berhitung') {
        generateCountQuestion();
        generateOperationQuestion();
      }
    });
  });
}

// MODE 1: KENAL HURUF
function renderAlphabet() {
  const grid = document.getElementById('alphabet-grid');
  grid.innerHTML = '';

  const filtered = ALPHABET_DATA.filter(item => {
    if (state.letterFilter === 'all') return true;
    return item.type === state.letterFilter;
  });

  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = `letter-card ${item.type} ${state.selectedLetter.char === item.char ? 'selected' : ''}`;
    card.innerHTML = `
      <span class="char">${item.char}${item.char.toLowerCase()}</span>
      <span class="mini-emoji">${item.emoji}</span>
    `;
    card.addEventListener('click', () => selectLetter(item));
    grid.appendChild(card);
  });
}

function selectLetter(item) {
  state.selectedLetter = item;
  document.getElementById('showcase-letter').textContent = `${item.char}${item.char.toLowerCase()}`;
  document.getElementById('showcase-emoji').textContent = item.emoji;
  document.getElementById('showcase-word').innerHTML = `<strong>${item.word[0]}</strong>${item.word.slice(1)}`;
  renderAlphabet();
  speak(`${item.phonetic}. ${item.word}`, 0.85);
}

function initAlphabetMode() {
  document.querySelectorAll('[data-letter-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-letter-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.letterFilter = btn.dataset.letterFilter;
      renderAlphabet();
    });
  });

  document.getElementById('btn-repeat-letter').addEventListener('click', () => {
    const item = state.selectedLetter;
    speak(`${item.phonetic}. ${item.word}`, 0.85);
  });

  renderAlphabet();
}

// MODE 2: SUKU KATA
function initSyllableMode() {
  const consContainer = document.getElementById('consonant-selector');
  CONSONANTS.forEach(c => {
    const btn = document.createElement('button');
    btn.className = `cons-btn ${c === state.selectedConsonant ? 'active' : ''}`;
    btn.textContent = c;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cons-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedConsonant = c;
      renderSyllables();
    });
    consContainer.appendChild(btn);
  });

  document.getElementById('btn-read-mixed').addEventListener('click', () => {
    if (state.mixedSlots.length === 2) {
      const combined = state.mixedSlots.join('');
      speak(combined, 0.8);
    }
  });

  document.getElementById('btn-clear-mixed').addEventListener('click', () => {
    state.mixedSlots = [];
    updateMixerUI();
  });

  renderSyllables();
}

function renderSyllables() {
  const container = document.getElementById('syllable-cards');
  container.innerHTML = '';
  VOWELS.forEach(v => {
    const syl = state.selectedConsonant + v;
    const btn = document.createElement('button');
    btn.className = 'syl-btn';
    btn.textContent = syl;
    btn.addEventListener('click', () => {
      speak(syl, 0.82);
      addSyllableToMixer(syl);
    });
    container.appendChild(btn);
  });
}

function addSyllableToMixer(syl) {
  if (state.mixedSlots.length >= 2) {
    state.mixedSlots = [syl];
  } else {
    state.mixedSlots.push(syl);
  }
  updateMixerUI();
  if (state.mixedSlots.length === 2) {
    const combined = state.mixedSlots.join('');
    setTimeout(() => speak(combined, 0.8), 550);
  }
}

function updateMixerUI() {
  const slot1 = document.getElementById('slot-1');
  const slot2 = document.getElementById('slot-2');
  const result = document.getElementById('slot-result');
  const btnRead = document.getElementById('btn-read-mixed');

  slot1.textContent = state.mixedSlots[0] || '?';
  slot1.classList.toggle('filled', Boolean(state.mixedSlots[0]));

  slot2.textContent = state.mixedSlots[1] || '?';
  slot2.classList.toggle('filled', Boolean(state.mixedSlots[1]));

  if (state.mixedSlots.length === 2) {
    result.textContent = state.mixedSlots.join('');
    btnRead.disabled = false;
  } else {
    result.textContent = '...';
    btnRead.disabled = true;
  }
}

// MODE 3: MENGEJA KATA
function initReadingMode() {
  document.querySelectorAll('[data-level]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-level]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentLevel = parseInt(btn.dataset.level, 10);
      state.currentWordIndex = 0;
      renderReadingCard();
    });
  });

  document.getElementById('btn-spell-step').addEventListener('click', spellCurrentWord);
  document.getElementById('btn-read-whole').addEventListener('click', () => {
    const list = READING_LEVELS[state.currentLevel];
    const item = list[state.currentWordIndex];
    speak(item.word, 0.82);
  });

  document.getElementById('btn-prev-word').addEventListener('click', () => {
    const list = READING_LEVELS[state.currentLevel];
    state.currentWordIndex = (state.currentWordIndex - 1 + list.length) % list.length;
    renderReadingCard();
  });

  document.getElementById('btn-next-word').addEventListener('click', () => {
    const list = READING_LEVELS[state.currentLevel];
    state.currentWordIndex = (state.currentWordIndex + 1) % list.length;
    renderReadingCard();
  });

  renderReadingCard();
}

function renderReadingCard() {
  state.isSpelling = false;
  const list = READING_LEVELS[state.currentLevel];
  const item = list[state.currentWordIndex];

  document.getElementById('word-progress').textContent = `${state.currentWordIndex + 1} / ${list.length}`;
  document.getElementById('word-emoji').textContent = item.emoji;
  document.getElementById('full-word-display').textContent = item.word;

  const breakdown = document.getElementById('syllable-breakdown');
  breakdown.innerHTML = '';

  item.syllables.forEach((syl) => {
    const tile = document.createElement('div');
    tile.className = 'syllable-tile';
    tile.textContent = syl;
    tile.addEventListener('click', () => {
      tile.classList.add('highlight');
      speak(syl.replace(/-/g, ''), 0.78, () => tile.classList.remove('highlight'));
    });
    breakdown.appendChild(tile);
  });
}

function spellCurrentWord() {
  if (state.isSpelling) return;
  state.isSpelling = true;

  const list = READING_LEVELS[state.currentLevel];
  const item = list[state.currentWordIndex];
  const tiles = document.querySelectorAll('#syllable-breakdown .syllable-tile');

  let idx = 0;
  function step() {
    tiles.forEach(t => t.classList.remove('highlight'));
    if (idx < item.syllables.length) {
      const currentTile = tiles[idx];
      currentTile.classList.add('highlight');
      const cleanText = item.syllables[idx].replace(/-/g, '');
      idx++;
      speak(cleanText, 0.72, () => {
        setTimeout(step, 260);
      });
    } else {
      setTimeout(() => {
        speak(item.word, 0.82, () => {
          state.isSpelling = false;
        });
      }, 300);
    }
  }
  step();
}

// MODE 4: KUIS TEBAK KATA
function getAllQuizWords() {
  return [...READING_LEVELS[1], ...READING_LEVELS[2]];
}

function generateQuiz() {
  state.quizLocked = false;
  const feedback = document.getElementById('quiz-feedback');
  feedback.textContent = '';
  feedback.style.color = 'inherit';

  const pool = getAllQuizWords();
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const answer = shuffled[0];
  const choices = shuffled.slice(0, 4).sort(() => Math.random() - 0.5);

  state.currentQuiz = answer;
  document.getElementById('quiz-emoji').textContent = answer.emoji;

  const optionsEl = document.getElementById('quiz-options');
  optionsEl.innerHTML = '';

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = choice.word;
    btn.addEventListener('click', () => handleQuizAnswer(btn, choice));
    optionsEl.appendChild(btn);
  });

  setTimeout(() => speak(`Mana kata ${answer.word}?`, 0.85), 250);
}

function handleQuizAnswer(btn, choice) {
  if (state.quizLocked) return;
  const feedback = document.getElementById('quiz-feedback');

  if (choice.word === state.currentQuiz.word) {
    state.quizLocked = true;
    btn.classList.add('correct');
    feedback.textContent = `🎉 Hebat! Benar, ini ${state.currentQuiz.word}! (+1 ⭐)`;
    feedback.style.color = '#15803d';
    addStars(1);
    speak(`Hebat! Benar, ${state.currentQuiz.word}`, 0.9);
    setTimeout(generateQuiz, 2100);
  } else {
    btn.classList.add('wrong');
    feedback.textContent = '😅 Ups, coba dengarkan lagi ya!';
    feedback.style.color = '#b91c1c';
    speak(`Bukan, itu ${choice.word}. Coba lagi!`, 0.88);
    setTimeout(() => btn.classList.remove('wrong'), 600);
  }
}

function initQuizMode() {
  document.getElementById('btn-quiz-audio').addEventListener('click', () => {
    if (state.currentQuiz) {
      speak(state.currentQuiz.word, 0.8);
    }
  });
}

// MODE 5: BERHITUNG & MATEMATIKA DASAR
const NUMBER_WORDS = [
  '', 'SATU', 'DUA', 'TIGA', 'EMPAT', 'LIMA',
  'ENAM', 'TUJUH', 'DELAPAN', 'SEMBILAN', 'SEPULUH',
  'SEBELAS', 'DUA BELAS', 'TIGA BELAS', 'EMPAT BELAS', 'LIMA BELAS',
  'ENAM BELAS', 'TUJUH BELAS', 'DELAPAN BELAS', 'SEMBILAN BELAS', 'DUA PULUH'
];

const COUNT_OBJECTS = [
  { emoji: '🍎', name: 'apel' },
  { emoji: '🍌', name: 'pisang' },
  { emoji: '🍓', name: 'stroberi' },
  { emoji: '⭐', name: 'bintang' },
  { emoji: '🎈', name: 'balon' },
  { emoji: '🐟', name: 'ikan' },
  { emoji: '🚗', name: 'mobil' },
  { emoji: '🍪', name: 'kue' }
];

function initMathMode() {
  // Sub-tab navigasi
  document.querySelectorAll('[data-math-mode]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-math-mode]').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.math-subpanel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const sub = btn.dataset.mathMode;
      document.getElementById(`math-panel-${sub}`).classList.add('active');

      if (sub === 'hitung-benda') generateCountQuestion();
      if (sub === 'operasi') generateOperationQuestion();
    });
  });

  // Sub-mode A: Kenal Angka 1-20
  const grid = document.getElementById('numbers-grid');
  for (let n = 1; n <= 20; n++) {
    const card = document.createElement('div');
    card.className = `num-card ${n === 1 ? 'selected' : ''}`;
    card.dataset.num = n;
    card.textContent = n;
    card.addEventListener('click', () => selectNumber(n));
    grid.appendChild(card);
  }

  document.getElementById('btn-repeat-number').addEventListener('click', () => {
    speak(NUMBER_WORDS[state.selectedNumber], 0.85);
  });

  // Filter operasi (+ / -)
  document.querySelectorAll('[data-op-type]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-op-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.opFilter = btn.dataset.opType;
      generateOperationQuestion();
    });
  });

  selectNumber(1, false);
  generateCountQuestion();
  generateOperationQuestion();
}

function selectNumber(n, shouldSpeak = true) {
  state.selectedNumber = n;
  document.getElementById('showcase-number').textContent = n;
  document.getElementById('showcase-number-word').textContent = NUMBER_WORDS[n];
  document.getElementById('showcase-number-objects').textContent = '🍎'.repeat(n);

  document.querySelectorAll('.num-card').forEach(c => {
    c.classList.toggle('selected', parseInt(c.dataset.num, 10) === n);
  });

  if (shouldSpeak) {
    speak(NUMBER_WORDS[n], 0.85);
  }
}

function generateNumberChoices(correct, maxVal = 15) {
  const set = new Set([correct]);
  while (set.size < 4) {
    const offset = Math.floor(Math.random() * 5) - 2;
    const candidate = Math.max(1, Math.min(maxVal, correct + offset || correct + 3));
    set.add(candidate);
  }
  return [...set].sort(() => Math.random() - 0.5);
}

// Sub-mode B: Hitung Benda
function generateCountQuestion() {
  state.countLocked = false;
  const feedback = document.getElementById('count-feedback');
  feedback.textContent = '';

  const obj = COUNT_OBJECTS[Math.floor(Math.random() * COUNT_OBJECTS.length)];
  const target = Math.floor(Math.random() * 10) + 1;
  state.countAnswer = target;

  document.getElementById('count-prompt-text').textContent = `Ada berapa jumlah ${obj.name} di bawah ini?`;

  const arena = document.getElementById('counting-arena');
  arena.innerHTML = '';
  let tappedCount = 0;

  for (let i = 0; i < target; i++) {
    const span = document.createElement('span');
    span.className = 'count-item';
    span.textContent = obj.emoji;
    span.title = 'Ketuk untuk menghitung';
    span.addEventListener('click', () => {
      if (!span.classList.contains('tapped')) {
        span.classList.add('tapped');
        tappedCount++;
        speak(String(tappedCount), 0.95);
      }
    });
    arena.appendChild(span);
  }

  const optionsEl = document.getElementById('count-options');
  optionsEl.innerHTML = '';
  generateNumberChoices(target, 12).forEach(num => {
    const btn = document.createElement('button');
    btn.className = 'math-opt-btn';
    btn.textContent = num;
    btn.addEventListener('click', () => {
      if (state.countLocked) return;
      if (num === target) {
        state.countLocked = true;
        btn.classList.add('correct');
        feedback.textContent = `🎉 Benar! Jumlah ${obj.name} ada ${target}! (+1 ⭐)`;
        feedback.style.color = '#15803d';
        addStars(1);
        speak(`Hebat! Jumlah ${obj.name} ada ${target}`, 0.9);
        setTimeout(generateCountQuestion, 2000);
      } else {
        btn.classList.add('wrong');
        feedback.textContent = '😅 Coba hitung lagi satu per satu ya!';
        feedback.style.color = '#b91c1c';
        speak(`Bukan ${num}, coba hitung lagi!`, 0.88);
        setTimeout(() => btn.classList.remove('wrong'), 600);
      }
    });
    optionsEl.appendChild(btn);
  });
}

// Sub-mode C: Tambah & Kurang
function generateOperationQuestion() {
  state.opLocked = false;
  const feedback = document.getElementById('op-feedback');
  feedback.textContent = '';

  let isAdd = true;
  if (state.opFilter === 'sub') isAdd = false;
  else if (state.opFilter === 'mix') isAdd = Math.random() < 0.5;

  let a, b, answer, symbol;
  if (isAdd) {
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 5) + 1;
    answer = a + b;
    symbol = '+';
  } else {
    a = Math.floor(Math.random() * 7) + 3;
    b = Math.floor(Math.random() * (a - 1)) + 1;
    answer = a - b;
    symbol = '-';
  }

  state.opAnswer = answer;
  document.getElementById('number-equation').textContent = `${a} ${symbol} ${b} = ?`;

  const visualEl = document.getElementById('visual-equation');
  visualEl.innerHTML = `
    <div class="eq-group">${'🍊'.repeat(a)}</div>
    <span class="eq-symbol">${symbol}</span>
    <div class="eq-group">${'🍊'.repeat(b)}</div>
    <span class="eq-symbol">=</span>
    <div class="eq-group">❓</div>
  `;

  const optionsEl = document.getElementById('op-options');
  optionsEl.innerHTML = '';
  generateNumberChoices(answer, 12).forEach(num => {
    const btn = document.createElement('button');
    btn.className = 'math-opt-btn';
    btn.textContent = num;
    btn.addEventListener('click', () => {
      if (state.opLocked) return;
      if (num === answer) {
        state.opLocked = true;
        btn.classList.add('correct');
        document.getElementById('number-equation').textContent = `${a} ${symbol} ${b} = ${answer}`;
        feedback.textContent = `🎉 Pintar! ${a} ${symbol} ${b} sama dengan ${answer}! (+1 ⭐)`;
        feedback.style.color = '#15803d';
        addStars(1);
        const spokenOp = isAdd ? 'ditambah' : 'dikurangi';
        speak(`Pintar! ${a} ${spokenOp} ${b} sama dengan ${answer}`, 0.9);
        setTimeout(generateOperationQuestion, 2200);
      } else {
        btn.classList.add('wrong');
        feedback.textContent = '😅 Belum tepat, yuk hitung jeruknya lagi!';
        feedback.style.color = '#b91c1c';
        speak(`Belum tepat, coba lagi ya!`, 0.88);
        setTimeout(() => btn.classList.remove('wrong'), 600);
      }
    });
    optionsEl.appendChild(btn);
  });
}

// Inisialisasi Aplikasi
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('star-count').textContent = state.stars;

  const voiceBtn = document.getElementById('btn-voice-toggle');
  voiceBtn.addEventListener('click', () => {
    state.voiceEnabled = !state.voiceEnabled;
    voiceBtn.textContent = state.voiceEnabled ? '🔊' : '🔇';
    voiceBtn.classList.toggle('muted', !state.voiceEnabled);
    if (!state.voiceEnabled) window.speechSynthesis?.cancel();
  });

  initTabs();
  initAlphabetMode();
  initSyllableMode();
  initReadingMode();
  initQuizMode();
  initMathMode();
});
