// ── STATE ──────────────────────────────────────────────────────────────
let current = 0;
let answers = {};

// ── FUNCTIONS ──────────────────────────────────────────────────────────
function startQuiz() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('qcount').textContent = questions.length;
  renderQ();
}

function renderQ() {
  const q = questions[current];
  const card = document.getElementById('q-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'rise 0.4s cubic-bezier(0.16,1,0.3,1) both';

  const phaseIdx = Math.floor(current / 3);
  document.getElementById('phase-label').textContent = phases[Math.min(phaseIdx, phases.length - 1)];
  document.getElementById('qnum').textContent = current + 1;
  document.getElementById('bar-fill').style.width = `${((current + 1) / questions.length) * 100}%`;
  document.getElementById('q-category').textContent = q.category;
  document.getElementById('q-text').textContent = q.text;

  const list = document.getElementById('options-list');
  list.innerHTML = '';
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn' + (answers[current] === i ? ' selected' : '');
    btn.innerHTML = `
      <span class="opt-letter">${letters[i]}</span>
      <div class="opt-body">
        <div class="opt-main">${opt.main}</div>
        <div class="opt-sub">${opt.sub}</div>
      </div>`;
    btn.onclick = () => pick(i);
    list.appendChild(btn);
  });

  document.getElementById('btn-next').disabled = answers[current] === undefined;
  const back = document.getElementById('btn-back');
  back.disabled = current === 0;

  const next = document.getElementById('btn-next');
  next.innerHTML = current === questions.length - 1 ? 'See My Results <span>→</span>' : 'Continue <span>→</span>';
}

function pick(i) {
  answers[current] = i;
  document.querySelectorAll('.opt-btn').forEach((b, idx) => b.classList.toggle('selected', idx === i));
  document.getElementById('btn-next').disabled = false;
}

function goNext() {
  if (answers[current] === undefined) return;
  if (current < questions.length - 1) { current++; renderQ(); }
  else showResults();
}

function goBack() {
  if (current > 0) { current--; renderQ(); }
}

// ── SCORING ──────────────────────────────────────────────────────────
function score() {
  const s = { creative: 0, intellectual: 0, helper: 0, leader: 0, builder: 0, organiser: 0 };
  const mapping = {
    creative: 'creative', intellectual: 'intellectual', people: 'helper',
    helping: 'helper', emotional: 'helper', leadership: 'leader', entrepreneur: 'leader',
    maker: 'builder', technical: 'builder', organiser: 'organiser', structured: 'organiser',
    analytical: 'intellectual', mastery: 'intellectual', meaning: 'helper',
    autonomy_need: 'leader', introvert: 'intellectual', extrovert: 'helper',
    creative_need: 'creative', intellectual_need: 'intellectual', maker_need: 'builder',
    structure_need: 'organiser'
  };

  questions.forEach((q, qi) => {
    const ai = answers[qi];
    if (ai === undefined) return;
    const cats = q.options[ai].cats;
    Object.entries(cats).forEach(([k, v]) => {
      const pid = mapping[k];
      if (pid && s[pid] !== undefined) s[pid] += v;
    });
  });
  return s;
}

// ── RESULTS ──────────────────────────────────────────────────────────
function showResults() {
  document.getElementById('quiz').style.display = 'none';
  const resultsEl = document.getElementById('results');
  resultsEl.classList.add('active');

  const s = score();
  const profMap = { creative: 0, intellectual: 1, helper: 2, leader: 3, builder: 4, organiser: 5 };
  const ranked = Object.entries(s)
    .map(([id, val]) => ({ profile: profiles[profMap[id]], val }))
    .sort((a, b) => b.val - a.val);

  const top = ranked[0].profile;
  const second = ranked[1].profile;
  const max = Math.max(...ranked.map(r => r.val), 1);

  // Strengths / weaknesses = top profile's
  const swHtml = `
    <div class="sw-grid">
      <div class="sw-card strengths">
        <div class="sw-head">Your Strengths</div>
        ${top.strengths.map(s => `<div class="sw-item"><div class="sw-dot"></div><span>${s}</span></div>`).join('')}
      </div>
      <div class="sw-card weaknesses">
        <div class="sw-head">Watch Out For</div>
        ${top.weaknesses.map(w => `<div class="sw-item"><div class="sw-dot"></div><span>${w}</span></div>`).join('')}
      </div>
    </div>`;

  // Score bars
  const barColors = { creative: '#c4532a', intellectual: '#2a7ac4', helper: '#2ac47a', leader: '#c49a2a', builder: '#8a4ac4', organiser: '#c4532a' };
  const barHtml = ranked.map(({ profile, val }) => {
    const pct = Math.round((val / max) * 100);
    return `
      <div class="score-row">
        <div class="score-top">
          <div class="score-name-wrap">
            <span class="score-emoji">${profile.emoji}</span>
            <span class="score-name">${profile.name}</span>
          </div>
          <span class="score-num" style="color:${profile.color}">${pct}%</span>
        </div>
        <div class="score-track">
          <div class="score-fill" style="background:${profile.color}" data-w="${pct}"></div>
        </div>
      </div>`;
  }).join('');

//  Top 3 paths (from top + second profile)
  const pathCards = [
    ...top.paths.map((p, i) => ({ ...p, rank: i + 1, fromProfile: top })),
    ...second.paths.slice(0, 1).map(p => ({ ...p, rank: 4, fromProfile: second }))
  ].map(p => `
    <div class="path-card ${p.rank === 1 ? 'rank-1' : ''}">
      <div class="path-rank">${p.rank === 1 ? '★' : '#' + p.rank}</div>
      <div class="path-top">
        <div class="path-icon-wrap">${p.icon}</div>
        <div class="path-title">${p.title}</div>
      </div>
      <div class="path-desc">${p.desc}</div>
      <div class="path-actions">${p.actions.map(a => `<span class="action-chip">${a}</span>`).join('')}</div>
    </div>`).join('');

  resultsEl.innerHTML = `
    <div class="result-masthead">
      <div class="result-label">Your Life Compass Result</div>
      <div class="result-headline">You are <em>${top.name}</em> ${top.emoji}</div>
      <p class="result-summary">${top.summary}</p>
    </div>

    ${swHtml}

    <div class="profile-section">
      <div class="section-label">Your Full Profile</div>
      ${barHtml}
    </div>

    <div class="closing-note">
      <p>
        <strong>A note on this result:</strong> You're not just one type — you're a mix, and that mix evolves.
        Use this as a starting point, not a verdict. The most important insight is often what
        <em>drains</em> you, not just what excites you. Design your life to do more of the first column and less of the second.
      </p>
    </div>

    <button class="restart-btn" onclick="restartQuiz()">↺ Retake the Quiz</button>`;

  setTimeout(() => {
    document.querySelectorAll('.score-fill').forEach(el => {
      el.style.width = el.dataset.w + '%';
    });
  }, 200);
}

function restartQuiz() {
  answers = {};
  current = 0;
  document.getElementById('results').classList.remove('active');
  document.getElementById('results').innerHTML = '';
  document.getElementById('results').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  renderQ();
}
