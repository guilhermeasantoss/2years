/* ===== Configuração: edite aqui ===== */
const START = new Date(2024, 9, 29);                 // 29/10/2024
const PHOTOS = [
  'WhatsApp Image 2026-10-28 at 12.34.25 (1).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.25.jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.26 (1).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.26 (2).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.26 (3).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.26.jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.27 (1).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.27 (2).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.27 (3).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.27 (4).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.27.jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.35 (1).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.35 (2).jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.35.jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.55.jpeg',
  'WhatsApp Image 2026-10-28 at 12.34.57.jpeg',
  'WhatsApp Image 2026-10-28 at 12.38.18.jpeg'
].map(name => `images/${encodeURIComponent(name)}`);
const REASONS = [
  'Porque você transforma dias comuns em lembranças que eu quero guardar.',
  'Porque o seu sorriso é o meu lugar favorito.',
  'Porque com você tudo fica mais leve.',
  'Porque você me escolhe todos os dias.',
  'Porque o seu abraço é casa.',
  'Porque você acredita em mim, até quando eu duvido.',
  'Porque rir com você é o meu passatempo preferido.',
  'Porque o nosso futuro é a coisa que mais me anima.'
];
const SECRETS = ['Você é a minha pessoa favorita no mundo inteiro.', 'Meu lugar preferido é ao seu lado.', 'Dois anos e eu escolheria você de novo.'];
const PLACEHOLDER = 'Este espaço é seu. Escreva aqui o texto deste capítulo (arquivo script.js, lista CHAPTERS).';
const DATE_QUESTIONS = [
  { question: 'Qual o apelido que mais utilizo quando estou com você?', options: ['Momo', 'Amor', 'Vida', 'Dr. Pingo Fofo', 'Polenguinho', 'Todos'], correct: [0, 3, 5] },
  { question: 'Em nosso primeiro encontro, qual filme fomos assistir?', options: ['Verity', 'Zootopia 2', 'Homem-Aranha: Um Novo Dia', 'Coringa: Delírio a Dois', 'A Empregada'], correct: [3] },
  { question: 'Qual é a nossa comida preferida?', options: ['Comida japonesa', 'Pizza de atum', 'Big Burguer', 'Pizza de frango e mussarela'], correct: [2] },
  { question: 'Qual foi o primeiro e o último presente dado por seu namorado?', options: ['Uma caneta e chocolate', 'Um vestido azul e um ursinho do Stitch', 'Um vestido de flores e um tênis da Nike', 'Maquiagem e um salto alto'], correct: [2], partial: [1] }
];
// [titulo, tipo, texto opcional]
const CHAPTERS = [
  ['Juntos há...', 'time'],
  ['Uma carta pra você', 'text', 'Uma pequena carta para você, meu amor.\n\nSó tenho a agradecer por tudo o que você fez por mim e pelo homem que me tornei ao seu lado. Hoje, ao completarmos dois anos juntos, quero relembrar com você alguns dos momentos mais especiais que marcaram a nossa história, cada lembrança que construímos e cada instante que tornou o nosso amor tão único.'],
  ['O céu daquela noite', 'text', 'O céu daquela noite, nosso primeiro Ano-Novo juntos. Uma noite maravilhosa, em que vimos nossa série favorita, cozinhamos e assistimos aos fogos lado a lado.\n\nPor muitos outros Anos-Novos ao seu lado!! ❤️', 'images/ano-novo.jpeg'],
  ['A notícia do ano', 'news', 'NOTÍCIA DO ANO!! O MUNDO ESTÁ EM FESTA!\n\nNo dia 29 de outubro de 2024, uma data que ficará marcada para sempre na história, Guilherme Alves anuncia oficialmente seu namoro com a princesa Viviane Cavalcante!!\n\nApós uma história construída com carinho, cumplicidade, momentos inesquecíveis e um sentimento que só cresceu com o tempo, chega o momento de tornar oficial aquilo que o coração já sabia há muito tempo.\n\nFontes próximas ao casal afirmam que a felicidade é imensa e que os dois estão prontos para iniciar um novo capítulo dessa linda história, repleto de amor, companheirismo, sonhos compartilhados e novas memórias.\n\nA notícia já é considerada por muitos como o acontecimento mais importante do ano, superando qualquer outro evento e deixando claro que, quando duas pessoas se escolhem de verdade, não existe notícia mais bonita para anunciar.\n\nA partir deste Sábado, Guilherme Alves assume oficialmente o posto de namorado da princesa Viviane Cavalcante, com a missão de fazê-la sorrir, cuidar desse amor e construir ao seu lado uma história digna de um conto de fadas.\n\nQue venham muitos capítulos, muitas conquistas, abraços apertados, risadas sem motivo e sonhos realizados juntos!\n\nO amor venceu, a princesa encontrou seu príncipe e uma nova história acaba de começar!\n\n29 de outubro de 2024 — o início de um capítulo inesquecível.', 'images/bomba.jpeg'],
  ['Cabine de fotos', 'booth'],
  ['Dicionário do amor', 'text', 'Saudade: vontade de estar com você, mesmo quando acabamos de nos despedir.\n\nAbraço: meu lugar favorito no mundo.\n\nNós: a melhor parte de qualquer plano.\n\nAmor: escolher você, todos os dias.'],
  ['A nossa jornada', 'river'], ['O jogo dos encontros', 'quiz'],
  ['Momentos a dois', 'oven'], ['Os nossos tesouros', 'jar'], ['Abra quando...', 'lantern'],
  ['O nosso retrato', 'camera'], ['Raspadinha do amor', 'scratch'], ['A nossa música', 'vinyl']
];
/* ===================================== */

const $ = (s, r = document) => r.querySelector(s);
const ROM = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX'];
const ph = i => `<span class="ph"><img src="${PHOTOS[i % PHOTOS.length]}" alt="" onerror="this.remove()"></span>`;
const wait = ms => new Promise(r => setTimeout(r, ms));
const aud = $('#aud'); const END = CHAPTERS.length + 1;
let cur = -1, timer = 0;

/* ---------- Páginas ---------- */
const V = {
  time: () => ({ h: `<p class="k">Desde 29 &bull; 10&bull;2024</p><h2 class="t">Juntos há...</h2><div class="clock"></div>`,
    f(p) { const c = $('.clock', p); const tick = () => { let d = Date.now() - START, s = Math.floor(d / 1e3);
      const a = [['dias', Math.floor(s / 86400)], ['horas', Math.floor(s / 3600) % 24], ['minutos', Math.floor(s / 60) % 60], ['segundos', s % 60]];
      c.innerHTML = a.map(x => `<div><b>${x[1]}</b>${x[0]}</div>`).join(''); }; tick(); timer = setInterval(tick, 1000); } }),
  text: (t, content = PLACEHOLDER, image) => ({ h: `<h2 class="t">${t}</h2><span class="hs"></span><p class="lead">${content.replace(/\n/g, '<br>')}</p>${image ? `<img class="chapter-photo" src="${image}" alt="${t}">` : ''}` }),
  quiz: t => ({ h: `<h2 class="t">${t}</h2><div class="date-quiz" aria-live="polite"></div>`,
    f(p) {
      const container = $('.date-quiz', p);
      let questionIndex = 0;
      let selected = -1;
      const answers = [];
      const renderQuestion = () => {
        const item = DATE_QUESTIONS[questionIndex];
        container.innerHTML = `<p class="quiz-progress">Pergunta ${questionIndex + 1} de ${DATE_QUESTIONS.length}</p><fieldset class="quiz-field"><legend>${item.question}</legend><div class="quiz-options">${item.options.map((option, index) => `<button class="quiz-option" type="button" data-answer="${index}" aria-pressed="false">${option}</button>`).join('')}</div></fieldset><button class="btn quiz-next" type="button" disabled>${questionIndex === DATE_QUESTIONS.length - 1 ? 'Ver nossas escolhas' : 'Próxima pergunta'}</button>`;
        container.querySelectorAll('.quiz-option').forEach(button => {
          button.onclick = () => {
            selected = Number(button.dataset.answer);
            container.querySelectorAll('.quiz-option').forEach(option => option.setAttribute('aria-pressed', String(option === button)));
            $('.quiz-next', container).disabled = false;
          };
        });
        $('.quiz-next', container).onclick = () => {
          if (selected < 0) return;
          const status = item.correct.includes(selected) ? 'correct' : item.partial?.includes(selected) ? 'partial' : 'wrong';
          answers.push({ question: item.question, option: item.options[selected], status });
          if (questionIndex < DATE_QUESTIONS.length - 1) {
            questionIndex++;
            selected = -1;
            renderQuestion();
            return;
          }
          const correctCount = answers.filter(answer => answer.status === 'correct').length;
          const feedback = { correct: 'Acertou!', partial: 'Quase! Essa resposta está meio certa.', wrong: 'Não foi dessa vez!' };
          container.innerHTML = `<p class="quiz-result">Você acertou ${correctCount} de ${DATE_QUESTIONS.length}! 💛</p><ul class="quiz-answers">${answers.map(answer => `<li class="quiz-answer ${answer.status}"><strong>${feedback[answer.status]}</strong><span>${answer.question}</span><span>${answer.option}</span></li>`).join('')}</ul><button class="btn quiz-restart" type="button">Jogar novamente</button>`;
          $('.quiz-restart', container).onclick = () => {
            questionIndex = 0;
            selected = -1;
            answers.length = 0;
            renderQuestion();
          };
        };
      };
      renderQuestion();
    } }),
  news: (t, content, image) => {
    const [headline, ...paragraphs] = content.split('\n\n');
    return { h: `<article class="newspaper"><header class="news-masthead"><span>Gazeta do Amor</span><span>Edição especial • 29 de outubro de 2024</span></header><p class="news-kicker">${t}</p><h2>${headline}</h2><div class="news-rule"></div><figure class="news-figure"><img src="${image}" alt="Foto da notícia do ano"><figcaption>Um capítulo novo e inesquecível começa hoje.</figcaption></figure><div class="news-copy">${paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('')}</div><footer class="news-footer">Guilherme &amp; Viviane • Uma história de amor</footer></article>` };
  },
  booth: t => ({ c: 'dark', h: `<h2 class="t">${t}</h2><div class="booth"><div class="plate">CABINE DE FOTOS</div><div class="flash"></div><div class="slot"><div class="strip">${[0, 1, 2, 3].map(() => '<div class="fr"></div>').join('')}</div></div></div><button class="btn" id="go">Sorria</button>`,
    f(p) { $('#go', p).onclick = async e => { e.target.disabled = true; const s = $('.strip', p), fl = $('.flash', p);
      const pick = [...PHOTOS.keys()].sort(() => Math.random() - .5);
      s.classList.add('out'); await wait(1800); const fr = s.querySelectorAll('.fr');
      for (let i = 0; i < 4; i++) { fl.classList.remove('go'); void fl.offsetWidth; fl.classList.add('go'); burst(innerWidth / 2, innerHeight / 2, 8);
        fr[i].innerHTML = ph(pick[i % pick.length]); fr[i].classList.add('on'); await wait(900); }
      e.target.textContent = 'De novo'; e.target.disabled = false; e.target.onclick = () => go(cur, 0); }; } }),
  oven: t => ({ h: `<h2 class="t">${t}</h2><div class="oven"><div class="win"></div><p class="k" style="margin-top:8px">Fornada de biscoitos</p></div><div class="tray"></div><button class="btn" id="go">Assar</button>`,
    f(p) { $('#go', p).onclick = async e => { e.target.disabled = true; const o = $('.oven', p); o.classList.add('baking'); await wait(2800); o.classList.remove('baking');
      $('.tray', p).innerHTML = PHOTOS.map((_, i) => `<div class="cookie" style="--d:${i * 150}ms">${ph(i)}</div>`).join(''); burst(innerWidth / 2, innerHeight / 2, 20); e.target.remove(); }; } }),
  jar: t => ({ h: `<h2 class="t">Por que eu te amo</h2><p class="k">O pote dos motivos</p><div class="jar" id="jar">${Array.from({ length: 16 }, () => `<i style="left:${10 + Math.random() * 100}px;bottom:${6 + Math.random() * 70}px;background:hsl(${Math.random() * 360} 70% 75%);transform:rotate(${Math.random() * 180}deg)"></i>`).join('')}</div><p class="k" style="margin-top:10px">Toque no pote</p><div id="out"></div>`,
    f(p) { let n = 0; const j = $('#jar', p); j.onclick = () => { j.classList.remove('shake'); void j.offsetWidth; j.classList.add('shake');
      setTimeout(() => { $('#out', p).innerHTML = `<div class="note">${REASONS[n++ % REASONS.length]}</div>`; burst(innerWidth / 2, innerHeight / 2, 10); }, 500); }; } }),
  vinyl: t => ({ c: 'dark', h: `<h2 class="t">${t}</h2><div class="deck" id="deck"><div class="disc"><b>G&amp;V</b></div><div class="arm"></div></div><button class="btn" id="pp">Tocar</button>`,
    f(p) { const d = $('#deck', p), b = $('#pp', p); const set = on => { d.classList.toggle('playing', on); b.textContent = on ? 'Pausar' : 'Tocar'; };
      b.onclick = () => { if (aud.paused) { aud.play().catch(() => {}); set(true); } else { aud.pause(); set(false); } }; set(!aud.paused); } }),
  lantern: t => ({ c: 'dark', h: `<h2 class="t">Apague a luz...</h2><div class="lt" id="lt"><div class="ly">
    <div class="pol" style="left:8%;top:8%;transform:rotate(-5deg)">${ph(0)}</div><div class="nt" style="left:30%;top:34%;transform:rotate(3deg)">${SECRETS[0]}</div>
    <div class="pol" style="left:60%;top:6%;transform:rotate(4deg)">${ph(1)}</div><div class="nt" style="left:62%;top:52%;transform:rotate(-3deg)">${SECRETS[1]}</div>
    <div class="pol" style="left:12%;top:56%;transform:rotate(3deg)">${ph(2)}</div><div class="nt" style="left:38%;top:72%;transform:rotate(-2deg)">${SECRETS[2]}</div></div></div><p class="k">Passe a luz pela página</p>`,
    f(p) { const l = $('#lt', p); l.onpointermove = e => { const r = l.getBoundingClientRect(); l.style.setProperty('--x', e.clientX - r.left + 'px'); l.style.setProperty('--y', e.clientY - r.top + 'px'); }; } }),
  camera: t => ({ h: `<h2 class="t">Sorria, meu amor</h2><div class="cam"><div class="flash"></div><div class="lens"></div><i class="red"></i></div><div class="prints">${[0, 1, 2].map(i => `<figure class="pol" style="--d:${i * 700}ms;--r:${[-5, 2, 6][i]}deg">${ph(i)}V &amp; G</figure>`).join('')}</div><button class="btn" id="go">Imprimir</button>`,
    f(p) { $('#go', p).onclick = e => { e.target.disabled = true; const fl = $('.flash', p); fl.classList.add('go'); $('.prints', p).classList.add('out'); burst(innerWidth / 2, innerHeight / 3, 14); }; } }),
  river: t => ({ c: 'dark', h: `<h2 class="t">${t}</h2><div class="river" id="rv"><div class="sun"></div><div class="msg" id="m1">Feche e jogue a chave fora</div><div class="fence">${Array.from({ length: 26 }, () => `<i class="lk" style="left:${Math.random() * 95}%;top:${20 + Math.random() * 75}%;background:hsl(${Math.random() * 360} 40% 50%);animation-delay:${Math.random() * 3}s"></i>`).join('')}</div>
    <div class="shackle"></div><div class="biglock" id="lock">V &hearts; G</div><div class="key" id="key"></div><i class="ring" id="ring"></i><div class="msg" id="m2" style="top:26%"><small>2</small>agora jogue a chave no rio</div></div>`.replace('&hearts;', '&amp;'),
    f(p) { const rv = $('#rv', p); $('#lock', p).onclick = () => { if (rv.classList.contains('closed')) return; rv.classList.add('closed'); $('#m1', p).classList.add('on'); burst(innerWidth / 2, innerHeight / 2, 16); setTimeout(() => $('#key', p).classList.add('show'), 900); };
      $('#key', p).onclick = async e => { e.target.classList.add('fall'); $('#m1', p).classList.remove('on'); await wait(1000); const r = $('#ring', p); r.classList.add('go'); $('#m2', p).classList.add('on'); }; } }),
  scratch: t => ({ h: `<h2 class="t">${t}</h2><div class="scr">${SECRETS[0]}<canvas></canvas></div><p class="k" style="margin-top:12px">Raspe com o dedo</p>`,
    f(p) { const c = $('canvas', p), x = c.getContext('2d'); c.width = c.offsetWidth; c.height = c.offsetHeight; const g = x.createLinearGradient(0, 0, c.width, c.height); g.addColorStop(0, '#d9b45a'); g.addColorStop(.5, '#f6e3a1'); g.addColorStop(1, '#a8812f'); x.fillStyle = g; x.fillRect(0, 0, c.width, c.height);
      let d = 0; c.onpointermove = e => { if (!(e.buttons || e.pointerType === 'touch')) return; const r = c.getBoundingClientRect(); x.globalCompositeOperation = 'destination-out'; x.beginPath(); x.arc(e.clientX - r.left, e.clientY - r.top, 18, 0, 7); x.fill(); if (++d % 25 == 0) burst(e.clientX, e.clientY, 2); }; } }),
};

function build(i) {
  if (i === 0) return { h: `<p class="k">O álbum de G &amp; V</p><h2 class="t big">Sumário</h2><ol class="toc">${CHAPTERS.map((c, n) => `<li style="--d:${n * 45}ms"><button data-i="${n + 1}"><b>${ROM[n + 1]}</b><span>${c[0]}</span></button></li>`).join('')}</ol>`,
    f(p) { p.querySelectorAll('[data-i]').forEach(b => b.onclick = () => go(+b.dataset.i)); } };
  if (i === END) return { c: 'end', h: `<p class="k">Para sempre</p><span class="hs"></span><h2>A melhor parte da nossa história ainda nem aconteceu.</h2><span class="hs"></span><p class="seal" style="width:auto;height:auto;padding:8px 26px;border-radius:40px;font-size:1.4rem">Gui &amp; Vivi</p><p class="k">Feito com amor</p>`, f() { burst(innerWidth / 2, innerHeight / 2, 40); } };
  const [t, k, content, image] = CHAPTERS[i - 1]; return V[k](t, content, image);
}

function go(i, dir = 1) {
  if (i < 0 || i > END) return; clearInterval(timer); const old = $('.page'); const v = build(i); const p = document.createElement('section');
  p.className = `page ${v.c || ''} ${dir >= 0 ? 'fwd' : 'back'}`; p.innerHTML = v.h; cur = i; $('#pages').appendChild(p); if (v.f) v.f(p);
  if (old) setTimeout(() => old.remove(), 100);
  $('#nav').hidden = false; $('#btnToc').hidden = i === 0 || i === END; $('#count').textContent = `${i} / ${END}`;
  $('#prev').disabled = i === 0; $('#next').disabled = i === END;
}
$('#next').onclick = () => go(cur + 1); $('#prev').onclick = () => go(cur - 1, -1); $('#btnToc').onclick = () => go(0, -1);
addEventListener('keydown', e => { if (cur < 0) return; if (e.key === 'ArrowRight') go(cur + 1); if (e.key === 'ArrowLeft') go(cur - 1, -1); });
const cover = $('#cover');
const open = () => {
  if (cover.classList.contains('open')) return;
  cover.classList.add('open');
  aud.play().catch(error => console.error('Não foi possível iniciar a música:', error));
  burst(innerWidth / 2, innerHeight / 2, 30);
  setTimeout(() => go(0), 500);
  setTimeout(() => cover.remove(), 1800);
};
cover.onclick = open; cover.onkeydown = e => { if (e.key === 'Enter') open(); };

/* ---------- Partículas: corações e brilhos ---------- */
const cv = $('#fx'), cx = cv.getContext('2d'); let ps = [];
const size = () => { cv.width = innerWidth; cv.height = innerHeight; }; size(); addEventListener('resize', size);
function heart(x, y, s, col, a) { cx.save(); cx.globalAlpha = a; cx.fillStyle = col; cx.translate(x, y); cx.scale(s, s); cx.beginPath(); cx.moveTo(0, 3); cx.bezierCurveTo(-5, -3, -10, 4, 0, 11); cx.bezierCurveTo(10, 4, 5, -3, 0, 3); cx.fill(); cx.restore(); }
function spawn(x, y, burstMode) { const a = Math.random() * 6.28, v = burstMode ? 1 + Math.random() * 4 : 0;
  ps.push({ x, y, vx: Math.cos(a) * v, vy: burstMode ? Math.sin(a) * v - 1 : -(.3 + Math.random() * .7), s: .5 + Math.random() * .9, l: 1, d: burstMode ? .012 : .0015, c: ['#e0555e', '#e8a77f', '#c9a24a', '#b3262f'][Math.floor(Math.random() * 4)] }); }
function burst(x, y, n) { for (let i = 0; i < n; i++) spawn(x, y, true); }
(function loop() { cx.clearRect(0, 0, cv.width, cv.height); if (Math.random() < .06 && ps.length < 60) spawn(Math.random() * cv.width, cv.height + 10);
  ps = ps.filter(p => p.l > 0); ps.forEach(p => { p.x += p.vx + Math.sin(p.y / 40) * .3; p.y += p.vy; p.l -= p.d; heart(p.x, p.y, p.s, p.c, Math.max(p.l, 0) * .5); }); requestAnimationFrame(loop); })();
