const CHAPTERS = [50,40,27,36,34,24,21,4,31,24,22,25,29,36,10,13,10,42,150,31,12,8,66,52,5,48,12,14,3,9,1,4,7,3,3,3,2,14,4,28,16,24,21,28,16,16,13,6,6,4,4,5,3,6,4,3,1,13,5,5,3,5,1,1,1,22];
const TOTAL = CHAPTERS.reduce((sum, n) => sum + n, 0);
const PASS = '2628';

const BOOKS = [
  ['창세기','창','Genesis',['창세기','창세','창','genesis','gen','ge']],
  ['출애굽기','출','Exodus',['출애굽기','출애굽','출애','출','exodus','exo','ex']],
  ['레위기','레','Leviticus',['레위기','레위','레','leviticus','lev']],
  ['민수기','민','Numbers',['민수기','민수','민','numbers','num']],
  ['신명기','신','Deuteronomy',['신명기','신명','신','deuteronomy','deut','dt']],
  ['여호수아','수','Joshua',['여호수아','여호','수','joshua','josh']],
  ['사사기','삿','Judges',['사사기','사사','삿','judges','judg']],
  ['룻기','룻','Ruth',['룻기','룻','ruth','ru']],
  ['사무엘상','삼상','1 Samuel',['사무엘상','삼상','1samuel','1sam','1sa']],
  ['사무엘하','삼하','2 Samuel',['사무엘하','삼하','2samuel','2sam','2sa']],
  ['열왕기상','왕상','1 Kings',['열왕기상','왕상','1kings','1kgs','1ki']],
  ['열왕기하','왕하','2 Kings',['열왕기하','왕하','2kings','2kgs','2ki']],
  ['역대상','대상','1 Chronicles',['역대상','대상','1chronicles','1chr','1ch']],
  ['역대하','대하','2 Chronicles',['역대하','대하','2chronicles','2chr','2ch']],
  ['에스라','스','Ezra',['에스라','스','ezra']],
  ['느헤미야','느','Nehemiah',['느헤미야','느헤','느','nehemiah','neh']],
  ['에스더','에','Esther',['에스더','에','esther','esth']],
  ['욥기','욥','Job',['욥기','욥','job']],
  ['시편','시','Psalms',['시편','시','psalms','psalm','ps']],
  ['잠언','잠','Proverbs',['잠언','잠','proverbs','prov']],
  ['전도서','전','Ecclesiastes',['전도서','전도','전','ecclesiastes','eccl']],
  ['아가','아','Song of Solomon',['아가','아','songofsolomon','song','sos']],
  ['이사야','사','Isaiah',['이사야','이사','사','isaiah','isa']],
  ['예레미야','렘','Jeremiah',['예레미야','예레','렘','jeremiah','jer']],
  ['예레미야애가','애','Lamentations',['예레미야애가','예레애가','애가','애','lamentations','lam']],
  ['에스겔','겔','Ezekiel',['에스겔','겔','ezekiel','ezek']],
  ['다니엘','단','Daniel',['다니엘','다니','단','daniel','dan']],
  ['호세아','호','Hosea',['호세아','호세','호','hosea','hos']],
  ['요엘','욜','Joel',['요엘','욜','joel']],
  ['아모스','암','Amos',['아모스','아모','암','amos']],
  ['오바댜','옵','Obadiah',['오바댜','오바','옵','obadiah','obad']],
  ['요나','욘','Jonah',['요나','욘','jonah']],
  ['미가','미','Micah',['미가','미','micah','mic']],
  ['나훔','나','Nahum',['나훔','나','nahum','nah']],
  ['하박국','합','Habakkuk',['하박국','하박','합','habakkuk','hab']],
  ['스바냐','습','Zephaniah',['스바냐','스바','습','zephaniah','zeph']],
  ['학개','학','Haggai',['학개','학','haggai','hag']],
  ['스가랴','슥','Zechariah',['스가랴','스가','슥','zechariah','zech']],
  ['말라기','말','Malachi',['말라기','말라','말','malachi','mal']],
  ['마태복음','마','Matthew',['마태복음','마태','마','matthew','matt','mt']],
  ['마가복음','막','Mark',['마가복음','마가','막','mark','mk']],
  ['누가복음','눅','Luke',['누가복음','누가','눅','luke','lk']],
  ['요한복음','요','John',['요한복음','요한','요','john','jn']],
  ['사도행전','행','Acts',['사도행전','행전','행','acts','ac']],
  ['로마서','롬','Romans',['로마서','로마','롬','romans','rom']],
  ['고린도전서','고전','1 Corinthians',['고린도전서','고전','1corinthians','1cor']],
  ['고린도후서','고후','2 Corinthians',['고린도후서','고후','2corinthians','2cor']],
  ['갈라디아서','갈','Galatians',['갈라디아서','갈라디아','갈','galatians','gal']],
  ['에베소서','엡','Ephesians',['에베소서','에베소','엡','ephesians','eph']],
  ['빌립보서','빌','Philippians',['빌립보서','빌립보','빌','philippians','phil']],
  ['골로새서','골','Colossians',['골로새서','골로새','골','colossians','col']],
  ['데살로니가전서','살전','1 Thessalonians',['데살로니가전서','살전','1thessalonians','1thess','1th']],
  ['데살로니가후서','살후','2 Thessalonians',['데살로니가후서','살후','2thessalonians','2thess','2th']],
  ['디모데전서','딤전','1 Timothy',['디모데전서','딤전','1timothy','1tim']],
  ['디모데후서','딤후','2 Timothy',['디모데후서','딤후','2timothy','2tim']],
  ['디도서','딛','Titus',['디도서','딛','titus','tit']],
  ['빌레몬서','몬','Philemon',['빌레몬서','빌레몬','몬','philemon','phlm']],
  ['히브리서','히','Hebrews',['히브리서','히브리','히','hebrews','heb']],
  ['야고보서','약','James',['야고보서','야고보','약','james','jas']],
  ['베드로전서','벧전','1 Peter',['베드로전서','벧전','1peter','1pet']],
  ['베드로후서','벧후','2 Peter',['베드로후서','벧후','2peter','2pet']],
  ['요한1서','요일','1 John',['요한1서','요한일서','요일','1john','1jn']],
  ['요한2서','요이','2 John',['요한2서','요한이서','요이','2john','2jn']],
  ['요한3서','요삼','3 John',['요한3서','요한삼서','요삼','3john','3jn']],
  ['유다서','유','Jude',['유다서','유다','유','jude']],
  ['요한계시록','계','Revelation',['요한계시록','계시록','계','revelation','rev']]
].map((row, index) => ({ id: index + 1, ko: row[0], abbr: row[1], en: row[2], aliases: row[3] }));

const VERSIONS = [
  { id: 'kornkrv', name: '개역개정' },
  { id: 'korhrv', name: '개역한글' },
  { id: 'korsaehan', name: '새한글성경' },
{ id: 'kornrsv', name: '새번역' },
  { id: 'kornkcb', name: '공동번역' },
  { id: 'korklb', name: '현대인의성경' },
  { id: 'koreasy', name: '쉬운성경' },
  { id: 'korktv', name: '우리말성경' },
  { id: 'kortkv', name: '현대어성경' },
  { id: 'korhkjv', name: '한글킹제임스' },
  { id: 'korhchv', name: '국한문' },
  { id: 'engkjv', name: 'KJV' }
];
const PALETTE = ['sand', 'blue', 'green', 'rose'];

const state = {
  book: 1,
  chapter: 1,
  verse: null,
  versions: ['kornkrv', 'korhrv', 'kornrsv'],
  font: 18,
  night: false,
  readMode: false,
  marks: {},
  recent: [],
  terms: [],
  data: new Map(),
  pending: new Map(),
  loadId: 0
};

const $ = (id) => document.getElementById(id);

function loadPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem('naranhi2') || '{}');
    if (saved.book) state.book = saved.book;
    if (saved.chapter) state.chapter = saved.chapter;
    if (Array.isArray(saved.versions) && saved.versions.length) {
      const ok = saved.versions.filter((id) => VERSIONS.some((v) => v.id === id));
      if (ok.length) state.versions = ok;
    }
    if (saved.font) state.font = saved.font;
    if (saved.night) state.night = true;
    if (saved.readMode) state.readMode = true;
    if (saved.marks) state.marks = saved.marks;
    if (Array.isArray(saved.recent)) state.recent = saved.recent;
  } catch {}
}

function savePrefs() {
  localStorage.setItem('naranhi2', JSON.stringify({
    book: state.book,
    chapter: state.chapter,
    versions: state.versions,
    font: state.font,
    night: state.night,
    readMode: state.readMode,
    marks: state.marks,
    recent: state.recent.slice(0, 8)
  }));
}

function remember() {
  const item = { book: state.book, chapter: state.chapter, verse: state.verse };
  state.recent = [item, ...state.recent.filter((row) => !(row.book === item.book && row.chapter === item.chapter))].slice(0, 8);
  savePrefs();
}

function orderedVersions() {
  return VERSIONS.filter((v) => state.versions.includes(v.id));
}

function shownVersions() {
  const list = orderedVersions();
  return state.readMode ? list.slice(0, 1) : list;
}

function colorOf(index) { return PALETTE[index % PALETTE.length]; }
function bookById(id) { return BOOKS[id - 1]; }

function chapterIndex(book, chapter) {
  let n = 0;
  for (let i = 1; i < book; i++) n += CHAPTERS[i - 1];
  return n + chapter - 1;
}

function fromIndex(index) {
  let n = Math.max(0, Math.min(TOTAL - 1, index));
  for (let i = 0; i < CHAPTERS.length; i++) {
    if (n < CHAPTERS[i]) return { book: i + 1, chapter: n + 1 };
    n -= CHAPTERS[i];
  }
  return { book: 66, chapter: 22 };
}

function refLabel(book, chapter, verse) {
  return bookById(book).ko + ' ' + chapter + (verse ? ':' + verse : '장');
}

function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { el.hidden = true; }, 1900);
}

function escapeReg(text) { return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function paint(el, text) {
  el.textContent = '';
  const terms = state.terms.filter(Boolean);
  if (!terms.length) { el.textContent = text; return; }
  const re = new RegExp('(' + terms.map(escapeReg).join('|') + ')', 'gi');
  text.split(re).forEach((part) => {
    if (terms.some((term) => part.toLowerCase() === term.toLowerCase())) {
      const mark = document.createElement('mark');
      mark.textContent = part;
      el.appendChild(mark);
    } else if (part) {
      el.appendChild(document.createTextNode(part));
    }
  });
}

function loadVersion(id) {
  if (state.data.has(id)) return Promise.resolve(state.data.get(id));
  if (state.pending.has(id)) return state.pending.get(id);
  const job = fetch('./b-' + id + '.json')
    .then((res) => {
      if (!res.ok) throw new Error(id);
      return res.json();
    })
    .then((data) => {
      state.data.set(id, data);
      state.pending.delete(id);
      return data;
    })
    .catch((err) => {
      state.pending.delete(id);
      throw err;
    });
  state.pending.set(id, job);
  return job;
}

function chapterOf(id, book, chapter) {
  const data = state.data.get(id);
  if (!data) return null;
  return (data[book - 1] && data[book - 1][chapter - 1]) || [];
}

function renderChrome() {
  const book = bookById(state.book);
  $('title').textContent = book.ko + ' ' + state.chapter + '장';
  $('sub').textContent = book.en + ' ' + state.chapter + ' · ' + shownVersions().map((v) => v.name).join(' · ');
  document.documentElement.style.setProperty('--verse', state.font + 'px');
  $('fontLabel').textContent = String(state.font);
  $('modeBtn').textContent = state.readMode ? '나란히 보기' : '한 권 읽기';
  $('nightBtn').textContent = state.night ? '낮' : '밤';
  document.body.classList.toggle('night', state.night);
  document.body.classList.toggle('read-mode', state.readMode);
  $('scrub').max = String(TOTAL - 1);
  $('scrub').value = String(chapterIndex(state.book, state.chapter));
  $('scrubLabel').textContent = book.abbr + ' ' + state.chapter + ' / ' + CHAPTERS[state.book - 1];
  const first = state.book === 1 && state.chapter === 1;
  const last = state.book === 66 && state.chapter === CHAPTERS[65];
  $('prev').disabled = first;
  $('prev2').disabled = first;
  $('next').disabled = last;
  $('next2').disabled = last;

  $('versions').innerHTML = '';
  VERSIONS.forEach((version) => {
    const picked = state.versions.indexOf(version.id);
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip ' + (picked > -1 ? colorOf(orderedVersions().findIndex((v) => v.id === version.id)) + ' on' : '');
    btn.textContent = version.name;
    btn.onclick = () => toggleVersion(version.id);
    $('versions').appendChild(btn);
  });

  $('abbrs').innerHTML = '';
  BOOKS.forEach((item) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = item.abbr;
    btn.className = item.id === state.book ? 'on' : '';
    btn.onclick = () => openPlace(item.id, 1, null, []);
    $('abbrs').appendChild(btn);
  });
  const current = $('abbrs').querySelector('.on');
  if (current) current.scrollIntoView({ inline: 'center', block: 'nearest' });
}

function renderBoard() {
  const versions = shownVersions();
  const board = $('board');
  board.style.setProperty('--cols', String(Math.max(versions.length, 1)));
  board.innerHTML = '';
  $('results').hidden = true;
  board.hidden = false;

  const head = document.createElement('div');
  head.className = 'head-row';
  versions.forEach((version, i) => {
    const cell = document.createElement('div');
    cell.className = 'col-head ' + colorOf(i);
    cell.textContent = version.name;
    head.appendChild(cell);
  });
  board.appendChild(head);

  const texts = versions.map((v) => chapterOf(v.id, state.book, state.chapter));
  let max = 0;
  texts.forEach((rows) => { if (rows) max = Math.max(max, rows.length); });
  if (!max) {
    const wait = document.createElement('p');
    wait.className = 'muted';
    wait.textContent = '본문을 불러오는 중입니다.';
    board.appendChild(wait);
    return;
  }

  for (let i = 0; i < max; i++) {
    const row = document.createElement('div');
    row.className = 'verse-row' + (state.verse === i + 1 ? ' on' : '');
    row.id = 'v' + (i + 1);
    versions.forEach((version, colIndex) => {
      const cell = document.createElement('div');
      const mark = state.marks[state.book + '-' + state.chapter + '-' + (i + 1)];
      cell.className = 'cell ' + colorOf(colIndex) + (mark ? ' mark-' + mark : '');
      const num = document.createElement('button');
      num.type = 'button';
      num.className = 'vnum';
      num.textContent = String(i + 1);
      num.onclick = () => selectVerse(i + 1);
      const p = document.createElement('p');
      const rows = texts[colIndex];
      if (!rows) {
        p.className = 'muted';
        p.textContent = '불러오는 중';
      } else if (!rows[i]) {
        p.className = 'muted';
        p.textContent = '이 절 없음';
      } else {
        paint(p, rows[i]);
      }
      cell.appendChild(num);
      cell.appendChild(p);
      cell.onclick = (event) => { if (event.target !== num) selectVerse(i + 1); };
      row.appendChild(cell);
    });
    board.appendChild(row);
  }
}

function selectVerse(verse) {
  state.verse = verse;
  renderBoard();
  const row = $('v' + verse);
  if (row) row.scrollIntoView({ block: 'center' });
  $('action').hidden = false;
  $('actionLabel').textContent = refLabel(state.book, state.chapter, verse);
  history.replaceState(null, '', location.pathname + '#/' + state.book + '/' + state.chapter + '/' + verse);
  remember();
}

async function openPlace(book, chapter, verse, terms) {
  const id = ++state.loadId;
  state.book = book;
  state.chapter = Math.min(Math.max(1, chapter), CHAPTERS[book - 1]);
  state.verse = verse || null;
  if (terms) state.terms = terms;
  $('action').hidden = !verse;
  renderChrome();
  renderBoard();
  history.replaceState(null, '', location.pathname + '#/' + book + '/' + state.chapter + (verse ? '/' + verse : ''));

  const wanted = shownVersions();
  await Promise.all(wanted.map((v) => loadVersion(v.id).catch(() => toast(v.name + '을 불러오지 못했습니다'))));
  if (id !== state.loadId) return;
  renderChrome();
  renderBoard();
  if (verse) {
    const row = $('v' + verse);
    if (row) row.scrollIntoView({ block: 'center' });
    $('action').hidden = false;
    $('actionLabel').textContent = refLabel(book, state.chapter, verse);
  } else {
    $('scroller').scrollTop = 0;
  }
  remember();
}

function step(delta) {
  const next = fromIndex(chapterIndex(state.book, state.chapter) + delta);
  openPlace(next.book, next.chapter, null, []);
}

function toggleVersion(id) {
  if (state.versions.includes(id)) {
    if (state.versions.length === 1) { toast('한 역본은 남겨 두세요'); return; }
    state.versions = state.versions.filter((item) => item !== id);
  } else {
    state.versions = VERSIONS.map((v) => v.id).filter((item) => item === id || state.versions.includes(item));
  }
  savePrefs();
  openPlace(state.book, state.chapter, state.verse, state.terms);
}

function matchBook(raw) {
  const key = raw.replace(/\s+/g, '').toLowerCase();
  for (const book of BOOKS) if (book.aliases.includes(key)) return book;
  let best = null;
  let bestLen = 1;
  BOOKS.forEach((book) => {
    book.aliases.forEach((alias) => {
      if (alias.length > bestLen && key.startsWith(alias)) { best = book; bestLen = alias.length; }
    });
  });
  return best;
}

function parseQuery(input) {
  const text = input.trim();
  if (!text) return null;
  const match = text.match(/^([^\d]+?)\s*(\d+)\s*(?:[:：장.]\s*(\d+))?\s*(?:절)?(?:\s*[-~]\s*\d+)?$/);
  if (!match) {
    const book = matchBook(text);
    if (book && book.aliases.includes(text.replace(/\s+/g, '').toLowerCase())) return { book: book.id, chapter: 1, verse: null };
    return null;
  }
  const book = matchBook(match[1]);
  if (!book) return null;
  const chapter = Number(match[2]);
  if (chapter < 1 || chapter > CHAPTERS[book.id - 1]) return { error: book.ko + '는 ' + CHAPTERS[book.id - 1] + '장까지 있습니다' };
  return { book: book.id, chapter, verse: match[3] ? Number(match[3]) : null };
}

async function searchText(query) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return;
  const main = shownVersions()[0];
  $('results').hidden = false;
  $('board').hidden = true;
  $('results').innerHTML = '<p class="muted">' + main.name + '에서 찾는 중입니다.</p>';
  try {
    await loadVersion(main.id);
  } catch {
    toast('본문을 불러오지 못했습니다');
    return;
  }
  const data = state.data.get(main.id);
  const hits = [];
  for (let b = 0; b < 66; b++) {
    const chapters = data[b] || [];
    for (let c = 0; c < chapters.length; c++) {
      const verses = chapters[c] || [];
      for (let v = 0; v < verses.length; v++) {
        const text = verses[v];
        if (text && terms.every((term) => text.includes(term))) {
          hits.push({ book: b + 1, chapter: c + 1, verse: v + 1, text });
        }
      }
    }
  }
  renderResults(hits, terms, main.name);
}

function renderResults(hits, terms, versionName) {
  state.terms = terms;
  const box = $('results');
  box.hidden = false;
  $('board').hidden = true;
  box.innerHTML = '';
  const head = document.createElement('div');
  head.className = 'result-head';
  const count = document.createElement('strong');
  count.textContent = hits.length ? versionName + ' ' + hits.length + '구절' : '찾는 말이 없습니다';
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'ghost';
  back.textContent = '읽기로 돌아가기';
  back.onclick = () => openPlace(state.book, state.chapter, state.verse, terms);
  head.appendChild(count);
  head.appendChild(back);
  box.appendChild(head);
  hits.slice(0, 100).forEach((hit) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'result';
    const title = document.createElement('b');
    title.textContent = refLabel(hit.book, hit.chapter, hit.verse);
    const p = document.createElement('span');
    paint(p, hit.text);
    btn.appendChild(title);
    btn.appendChild(p);
    btn.onclick = () => openPlace(hit.book, hit.chapter, hit.verse, terms);
    box.appendChild(btn);
  });
  if (hits.length > 100) {
    const more = document.createElement('p');
    more.className = 'muted';
    more.textContent = '앞 100구절만 보여 줍니다. 말을 더 붙여서 찾아보세요.';
    box.appendChild(more);
  }
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast('복사했습니다');
  } catch {
    toast('복사하지 못했습니다');
  }
}

function copyVerse(all) {
  if (!state.verse) return;
  const list = all ? shownVersions() : [shownVersions()[0]];
  const lines = list.map((v) => {
    const rows = chapterOf(v.id, state.book, state.chapter) || [];
    return v.name + ' ' + refLabel(state.book, state.chapter, state.verse) + '\n' + (rows[state.verse - 1] || '');
  });
  copyText(lines.join('\n\n'));
}

function copyChapter() {
  const main = shownVersions()[0];
  const rows = chapterOf(main.id, state.book, state.chapter) || [];
  const body = rows.map((text, i) => (i + 1) + ' ' + text).join('\n');
  copyText(main.name + ' ' + bookById(state.book).ko + ' ' + state.chapter + '장\n' + body);
}

function setMark(color) {
  if (!state.verse) return;
  const key = state.book + '-' + state.chapter + '-' + state.verse;
  if (color) state.marks[key] = color; else delete state.marks[key];
  savePrefs();
  renderBoard();
}

function openBooks() {
  $('dialogTitle').textContent = '성경 찾기';
  const body = $('dialogBody');
  body.innerHTML = '';
  if (state.recent.length) {
    const title = document.createElement('div');
    title.className = 'section-title';
    title.textContent = '이어서 읽기';
    const row = document.createElement('div');
    row.className = 'recent';
    state.recent.forEach((item) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chip';
      btn.textContent = refLabel(item.book, item.chapter, item.verse);
      btn.onclick = () => { $('bookDialog').close(); openPlace(item.book, item.chapter, item.verse, []); };
      row.appendChild(btn);
    });
    body.appendChild(title);
    body.appendChild(row);
  }
  addBookGroup(body, '구약', BOOKS.slice(0, 39));
  addBookGroup(body, '신약', BOOKS.slice(39));
  $('bookDialog').showModal();
}

function addBookGroup(body, title, books) {
  const label = document.createElement('div');
  label.className = 'section-title';
  label.textContent = title;
  const grid = document.createElement('div');
  grid.className = 'book-grid';
  books.forEach((book) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'book-btn';
    btn.textContent = book.abbr + ' ' + book.ko;
    btn.onclick = () => showChapters(book);
    grid.appendChild(btn);
  });
  body.appendChild(label);
  body.appendChild(grid);
}

function showChapters(book) {
  $('dialogTitle').textContent = book.ko;
  const body = $('dialogBody');
  body.innerHTML = '';
  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'ghost';
  back.textContent = '책 목록';
  back.onclick = openBooks;
  const grid = document.createElement('div');
  grid.className = 'ch-grid';
  for (let chapter = 1; chapter <= CHAPTERS[book.id - 1]; chapter++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ch-btn';
    btn.textContent = chapter + '장';
    btn.onclick = () => { $('bookDialog').close(); openPlace(book.id, chapter, null, []); };
    grid.appendChild(btn);
  }
  body.appendChild(back);
  body.appendChild(grid);
}

function applyHash() {
  const parts = location.hash.replace(/^#\/?/, '').split('/').map(Number);
  if (parts[0] >= 1 && parts[0] <= 66) {
    state.book = parts[0];
    state.chapter = parts[1] || 1;
    state.verse = parts[2] || null;
  }
}

function onSearch(event) {
  event.preventDefault();
  const query = $('q').value.trim();
  const parsed = parseQuery(query);
  $('suggest').hidden = true;
  if (parsed && parsed.error) { toast(parsed.error); return; }
  if (parsed && parsed.book) { openPlace(parsed.book, parsed.chapter, parsed.verse, []); return; }
  if (query) searchText(query);
}

function onType() {
  const parsed = parseQuery($('q').value.trim());
  if (parsed && parsed.book) {
    $('suggest').hidden = false;
    $('suggest').textContent = refLabel(parsed.book, parsed.chapter, parsed.verse) + '으로 갑니다. Enter를 누르세요.';
  } else {
    $('suggest').hidden = true;
  }
}

function startApp() {
  $('gate').hidden = true;
  $('app').hidden = false;
  loadPrefs();
  applyHash();
  renderChrome();
  openPlace(state.book, state.chapter, state.verse, []);
  VERSIONS.slice(0, 4).forEach((v) => loadVersion(v.id).catch(() => {}));
}

function boot() {
  $('gateForm').addEventListener('submit', (event) => {
    event.preventDefault();
    if ($('pw').value.trim() === PASS) {
      sessionStorage.setItem('naranhiOpen', '1');
      startApp();
    } else {
      $('gateMsg').textContent = '비밀번호가 다릅니다.';
      $('pw').value = '';
      $('pw').focus();
    }
  });

  $('searchForm').addEventListener('submit', onSearch);
  $('q').addEventListener('input', onType);
  $('prev').onclick = () => step(-1);
  $('next').onclick = () => step(1);
  $('prev2').onclick = () => step(-1);
  $('next2').onclick = () => step(1);
  $('scrub').addEventListener('input', () => {
    const next = fromIndex(Number($('scrub').value));
    $('scrubLabel').textContent = bookById(next.book).abbr + ' ' + next.chapter;
  });
  $('scrub').addEventListener('change', () => {
    const next = fromIndex(Number($('scrub').value));
    openPlace(next.book, next.chapter, null, []);
  });
  $('fontDown').onclick = () => { state.font = Math.max(15, state.font - 1); savePrefs(); renderChrome(); };
  $('fontUp').onclick = () => { state.font = Math.min(28, state.font + 1); savePrefs(); renderChrome(); };
  $('nightBtn').onclick = () => { state.night = !state.night; savePrefs(); renderChrome(); };
  $('modeBtn').onclick = () => { state.readMode = !state.readMode; savePrefs(); openPlace(state.book, state.chapter, state.verse, state.terms); };
  $('bookBtn').onclick = openBooks;
  $('closeBooks').onclick = () => $('bookDialog').close();
  $('aboutBtn').onclick = () => $('aboutDialog').showModal();
  $('closeAbout').onclick = () => $('aboutDialog').close();
  $('copyOne').onclick = () => copyVerse(false);
  $('copyAll').onclick = () => copyVerse(true);
  $('copyChapter').onclick = copyChapter;
  $('clearMark').onclick = () => setMark(null);
  document.querySelectorAll('.swatch').forEach((btn) => { btn.onclick = () => setMark(btn.dataset.color); });
  $('shareBtn').onclick = () => copyText(location.href);
  document.addEventListener('keydown', (event) => {
    const typing = event.target.matches('input, textarea');
    if (event.key === '/' && !typing) { event.preventDefault(); $('q').focus(); return; }
    if (typing) return;
    if (event.key === 'ArrowLeft') step(-1);
    if (event.key === 'ArrowRight') step(1);
    if (event.key === 'Escape') $('action').hidden = true;
  });

  if (sessionStorage.getItem('naranhiOpen') === '1') startApp();
  else $('pw').focus();
}

boot();
