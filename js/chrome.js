// Modern UI chrome: sticky header mobile menu + Cmd/Ctrl+K search
(function(){
  function qs(s, el){ return (el||document).querySelector(s); }
  function qsa(s, el){ return [...(el||document).querySelectorAll(s)]; }

  // --- Mobile menu ---
  function setupMenu(){
    const btn = qs('.menu-btn');
    const nav = qs('.mobile-nav');
    if(!btn || !nav) return;
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.textContent = open ? '×' : '☰';
    });
    nav.addEventListener('click', e => {
      if(e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.textContent = '☰';
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- Command search ---
  let searchData = [];
  let activeIdx = 0;

  async function loadSearchData(){
    try {
      const [comps, champs] = await Promise.all([
        fetch('data/comps.json').then(r=>r.json()).catch(()=>[]),
        fetch('data/champions.json').then(r=>r.json()).catch(()=>({champions:[]}))
      ]);
      const base = location.pathname.includes('/en/') ? '../' : location.pathname.includes('/ja/') ? '../' : '';
      searchData = [
        ...(comps||[]).map(c => ({
          type: 'comp',
          label: c.name?.en || c.slug,
          labelAr: c.name?.ar,
          labelJa: c.name?.ja,
          href: base + 'comp.html?slug=' + encodeURIComponent(c.slug),
          tier: c.tier
        })),
        ...(champs.champions||[]).map(c => ({
          type: 'champ',
          label: c.name?.en || '',
          labelAr: c.name?.ar,
          labelJa: c.name?.ja,
          href: base + 'champions.html#' + encodeURIComponent((c.name?.en||'').toLowerCase()),
          cost: c.cost
        }))
      ];
    } catch(e){ console.warn('search data', e); }
  }

  function openSearch(){
    const ov = qs('.cmd-overlay');
    if(!ov) return;
    ov.classList.add('open');
    const input = qs('.cmd-box input');
    if(input){ input.value=''; input.focus(); }
    renderResults('');
  }
  function closeSearch(){
    const ov = qs('.cmd-overlay');
    if(ov) ov.classList.remove('open');
  }

  function renderResults(q){
    const box = qs('.cmd-results');
    if(!box) return;
    const lang = document.documentElement.lang || 'ar';
    const qq = (q||'').trim().toLowerCase();
    let list = searchData;
    if(qq){
      list = searchData.filter(i => {
        const hay = [i.label, i.labelAr, i.labelJa, i.type].filter(Boolean).join(' ').toLowerCase();
        return hay.includes(qq);
      });
    }
    list = list.slice(0, 12);
    activeIdx = 0;
    if(!list.length){
      box.innerHTML = '<div class="cmd-empty">No results</div>';
      return;
    }
    box.innerHTML = list.map((i, idx) => {
      const name = lang==='ar' ? (i.labelAr||i.label) : lang==='ja' ? (i.labelJa||i.label) : i.label;
      const meta = i.type==='comp' ? (i.tier||'comp') : ('★'+ (i.cost||''));
      return `<a class="cmd-item" href="${i.href}" data-idx="${idx}" data-active="${idx===0}"><span>${name}</span><small>${meta}</small></a>`;
    }).join('');
  }

  function setupSearch(){
    const btn = qs('.search-btn');
    if(btn) btn.addEventListener('click', openSearch);
    if(!qs('.cmd-overlay')){
      const ov = document.createElement('div');
      ov.className = 'cmd-overlay';
      ov.innerHTML = `<div class="cmd-box"><input type="search" placeholder="Search comps & champions…" autocomplete="off"/><div class="cmd-results"></div></div>`;
      document.body.appendChild(ov);
      ov.addEventListener('click', e => { if(e.target === ov) closeSearch(); });
    }
    const input = qs('.cmd-box input');
    if(input){
      input.addEventListener('input', () => renderResults(input.value));
      input.addEventListener('keydown', e => {
        const items = qsa('.cmd-item');
        if(e.key === 'Escape'){ closeSearch(); return; }
        if(e.key === 'ArrowDown'){ e.preventDefault(); activeIdx = Math.min(activeIdx+1, items.length-1); }
        if(e.key === 'ArrowUp'){ e.preventDefault(); activeIdx = Math.max(activeIdx-1, 0); }
        if(e.key === 'Enter' && items[activeIdx]){ items[activeIdx].click(); return; }
        items.forEach((el,i)=> el.dataset.active = i===activeIdx ? 'true' : 'false');
      });
    }
    document.addEventListener('keydown', e => {
      if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){
        e.preventDefault();
        openSearch();
      }
      if(e.key === 'Escape') closeSearch();
    });
    loadSearchData();
  }

  function init(){
    setupMenu();
    setupSearch();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
