/* =========================================================
   index2.html — 경력 리뷰 타임라인 / 프로젝트 목록 / reveal
   스타일은 css/style2.css 의 클래스로만 바꾼다 (인라인 style 금지)
   ========================================================= */
(function () {
  // k: 타임라인 클립 위치 클래스(css .k1~k14), r: 트랙(1 V1 · 2 V2 · 3 A1)
  // f: 필터 분류 (full | dev | etc)
  const P = [
    { k: 'k14', r: 3, f: 'etc',  t: '청년사관학교 새싹 성동캠퍼스 · AI 풀스택 교육과정', c: '새싹 성동캠퍼스', p: '2026.10 ~ 현재', role: 'In progress', s: ['AI', 'Full-stack'], n: 'AI를 활용한 풀스택 개발 교육과정을 수료 중입니다.', live: true },
    { k: 'k13', r: 1, f: 'full', t: '한국투자신탁운용 업무효율화 개발', c: '한국투자신탁운용', p: '2026.04 ~ 2026.10', role: 'Full-stack', s: ['React', 'TypeScript', 'Java', 'Oracle', 'AI 활용'], n: '분석·설계부터 개발까지. 리얼그리드 기반 업무 화면을 만들었어요.' },
    { k: 'k12', r: 1, f: 'full', t: '현대자동차 글로벌 보증시스템 구축', c: '현대오토에버', p: '2025.08 ~ 2026.01', role: 'Full-stack', s: ['Vue3', 'TypeScript', 'JPA', 'PostgreSQL'], n: '글로벌 보증 업무 시스템을 Vue3 + JPA로 구축했습니다.' },
    { k: 'k11', r: 2, f: 'dev',  t: '삼성 MCH 구축', c: '삼성SDS', p: '2025.05 ~ 2025.06', role: 'Development', s: [], n: '삼성SDS MCH 구축 프로젝트 개발에 참여했습니다.' },
    { k: 'k10', r: 2, f: 'dev',  t: '휴젤몰 구축', c: 'GS ITM', p: '2024.12 ~ 2025.02', role: 'Frontend', s: ['Vue', 'TypeScript', 'Nuxt'], n: 'Nuxt 기반 쇼핑몰 프론트엔드, 위즈모 그리드를 사용했어요.' },
    { k: 'k9',  r: 1, f: 'full', t: '삼성엔지니어링', c: '삼성SDS', p: '2024.05 ~ 2024.09', role: 'Full-stack', s: ['Vue3', 'Java', 'Oracle', 'MyBatis'], n: 'Vue3 + Java, 리얼그리드 기반 업무 시스템 개발.' },
    { k: 'k8',  r: 1, f: 'full', t: 'SK렌터카', c: 'IBM', p: '2023.09 ~ 2024.03', role: 'Full-stack', s: ['Vue', 'Java', 'PostgreSQL', 'MyBatis'], n: '렌터카 업무 시스템을 Vue + Java로 개발했습니다.' },
    { k: 'k7',  r: 1, f: 'full', t: 'PNS네트웍스', c: 'PNS네트웍스', p: '2022.11 ~ 2023.05', role: 'Full-stack', s: ['React', 'React Query', 'TypeScript', 'Java'], n: '함수형 React, React Query, react-hook-form으로 화면을 구성했어요.' },
    { k: 'k6',  r: 1, f: 'full', t: '코오롱 인사시스템', c: '코오롱베니트', p: '2022.01 ~ 2022.10', role: 'Full-stack', s: ['Vue', 'JPA', 'Java 8', 'MSA'], n: 'MSA 환경의 인사 시스템, Java 8 + JPA.' },
    { k: 'k5',  r: 2, f: 'dev',  t: '리만코리아', c: '리만코리아', p: '2021.05 ~ 2021.11', role: 'Frontend', s: ['Vue2/3', 'TypeScript', 'Spring Boot'], n: '관리자는 Vue2, 사용자 화면은 Vue3로 개발했습니다.' },
    { k: 'k4',  r: 1, f: 'full', t: 'GS Marketfor', c: 'GS ITM', p: '2020.07 ~ 2021.04', role: 'Full-stack', s: ['Vue', 'Java', 'PostgreSQL', 'Nexacro'], n: '대부분 Vue, 일부 넥사크로 화면을 함께 다뤘어요.' },
    { k: 'k3',  r: 2, f: 'dev',  t: '포스코 MES 3.0', c: '포스코', p: '2019.11 ~ 2020.06', role: 'Frontend', s: ['JSP', 'Oracle'], n: '제조 MES 3.0 화면 개발.' },
    { k: 'k2',  r: 3, f: 'etc',  t: '베네피아 쇼핑몰 운영', c: 'SK엠엔서비스', p: '2019.06 ~ 2019.10', role: 'Operation', s: ['Java', 'Spring', 'MyBatis'], n: '쇼핑몰 개발성 운영.' },
    { k: 'k1',  r: 3, f: 'etc',  t: '비트캠프 내일배움카드 교육 수료', c: '비트캠프', p: '2019.03 ~ 2019.05', role: 'Training', s: [], n: '웹 개발 교육과정을 수료하고 다시 개발로 돌아왔어요.' },
    { k: null,  f: 'dev',  t: '전산시스템 구축 (여신신청/심사/실행)', c: 'BS캐피탈', p: '2010.01 ~ 2010.12', role: 'Development', s: ['Delphi', 'Oracle'], n: '여신 신청·심사·실행 전산시스템 구축.' },
    { k: null,  f: 'dev',  t: 'IFRS 적용 (결산)', c: 'IBK캐피탈', p: '2009.07 ~ 2009.12', role: 'Development', s: ['Delphi', 'Oracle'], n: 'IFRS 결산 적용 개발.' },
    { k: null,  f: 'etc',  t: '개인신용대출 운영', c: 'IBK캐피탈', p: '2008.07 ~ 2009.06', role: 'Operation', s: ['Delphi', 'Oracle'], n: '개인신용대출 시스템 운영. 커리어의 시작.' },
  ];

  const $ = (id) => document.getElementById(id);
  const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DUR = 3600;

  /* ---------- build timeline clips ---------- */
  const tracks = $('tracks'), ph = $('ph');
  const clipOf = {};
  P.forEach((d, i) => {
    if (!d.k) return;
    const b = el('button', 'clip r' + d.r + ' ' + d.k + (d.live ? ' live-clip' : ''));
    b.type = 'button';
    b.setAttribute('aria-label', d.t + ' ' + d.p);
    b.title = d.t;
    b.appendChild(el('span', null, d.t));
    b.addEventListener('click', () => { stop(); select(i); });
    tracks.insertBefore(b, ph);
    clipOf[i] = b;
  });

  /* ---------- build comments ---------- */
  const list = $('c-list'), items = [];
  $('c-cnt').textContent = P.length;
  P.forEach((d, i) => {
    const li = el('li');
    const b = el('button', 'c-item');
    b.type = 'button';
    b.appendChild(el('span', 'ava', 'SH'));
    const body = el('div');
    const meta = el('div', 'c-meta');
    meta.appendChild(el('b', null, '박성현'));
    meta.appendChild(el('span', 'c-tc', d.p));
    const txt = el('p', 'c-txt');
    txt.appendChild(el('strong', null, d.t));
    txt.appendChild(document.createTextNode(' — ' + d.n));
    body.appendChild(meta); body.appendChild(txt);
    b.appendChild(body);
    b.addEventListener('click', () => { stop(); select(i); });
    li.appendChild(b); list.appendChild(li);
    items[i] = b;
  });

  /* ---------- viewer ---------- */
  const frame = $('frame'), prog = $('v-prog');
  let cur = -1;
  function select(i, fromPlay) {
    const d = P[i];
    cur = i;
    $('v-period').textContent = d.p;
    $('v-role').textContent = d.role;
    $('v-client').textContent = d.c;
    $('v-title').textContent = d.t;
    $('v-note').textContent = d.n;
    $('tc').textContent = d.p.replace('~', '—');
    const st = $('v-stack'); st.textContent = '';
    d.s.forEach((s) => st.appendChild(el('li', null, s)));

    frame.classList.remove('swap'); void frame.offsetWidth; frame.classList.add('swap');

    Object.values(clipOf).forEach((c) => c.classList.remove('is-on'));
    items.forEach((c) => c.classList.remove('is-on'));
    items[i].classList.add('is-on');
    if (clipOf[i]) { clipOf[i].classList.add('is-on'); ph.setAttribute('data-at', d.k); }
    else ph.removeAttribute('data-at');

    // 댓글 목록 안에서만 스크롤 (페이지는 움직이지 않음)
    const it = items[i], box = list;
    const top = it.offsetTop - box.offsetTop;
    if (top < box.scrollTop || top + it.offsetHeight > box.scrollTop + box.clientHeight) {
      box.scrollTo({ top: top - 8, behavior: fromPlay && !reduce ? 'smooth' : 'auto' });
    }

    prog.classList.remove('run'); void prog.offsetWidth;
    if (playing) prog.classList.add('run');
  }

  /* ---------- playback : 과거 → 현재 순서로 클립을 넘김 ---------- */
  const order = P.map((d, i) => (d.k ? i : -1)).filter((i) => i >= 0).reverse();
  const playBtn = $('play');
  let playing = false, timer = null;
  function next() {
    const pos = order.indexOf(cur);
    select(order[(pos + 1) % order.length], true);
  }
  function play() {
    playing = true; playBtn.classList.add('is-playing');
    if (order.indexOf(cur) === -1) select(order[0], true);
    else { prog.classList.remove('run'); void prog.offsetWidth; prog.classList.add('run'); }
    clearInterval(timer); timer = setInterval(next, DUR);
  }
  function stop() {
    playing = false; playBtn.classList.remove('is-playing');
    clearInterval(timer); prog.classList.remove('run');
  }
  playBtn.addEventListener('click', () => (playing ? stop() : play()));

  // 첫 화면: 최근 실무 프로젝트
  select(P.findIndex((d) => d.k === 'k13'));

  // 리뷰 화면이 보이면 자동 재생 (모션 줄이기 설정이면 재생 안 함)
  if (!reduce) {
    let auto = false;
    new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting && !auto) { auto = true; play(); }
    }), { threshold: .5 }).observe($('review'));
  }

  /* ---------- projects table + filter ---------- */
  const table = $('ptable'), rows = [];
  P.forEach((d) => {
    const li = el('li', 'pr');
    li.dataset.f = d.f;
    li.appendChild(el('span', 'pr-d', d.p));
    const t = el('div', 'pr-t', d.t); t.appendChild(el('small', null, d.c)); li.appendChild(t);
    li.appendChild(el('span', 'pr-s', d.s.join(' · ') || '—'));
    li.appendChild(el('span', 'pr-r ' + d.f, d.role));
    table.appendChild(li); rows.push(li);
  });
  document.querySelectorAll('.tab').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach((x) => x.classList.toggle('is-on', x === tab));
    const f = tab.dataset.f;
    rows.forEach((r) => r.classList.toggle('is-hidden', f !== 'all' && r.dataset.f !== f));
  }));

  /* ---------- nav on scroll ---------- */
  const nav = $('nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', scrollY > 10);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* ---------- reveal ---------- */
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .1 });
  document.querySelectorAll('.rv').forEach((x) => io.observe(x));
})();
