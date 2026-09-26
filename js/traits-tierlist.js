const tiers=['S','A','B','C'];
const data=[
 {name:"Juggernaut",tier:'S',img:'assets/traits/juggernaut.png'},
 {name:"Coven",tier:'S',img:'assets/traits/coven.png'},
 {name:"Vanguard",tier:'S',img:'assets/traits/vanguard.png'},
 {name:"Executioner",tier:'S',img:'assets/traits/executioner.png'},
 {name:"Brawler",tier:'S',img:'assets/traits/brawler.png'},
 {name:"Florafatalis",tier:'S',img:'assets/traits/florafatalis.png'},
 {name:"Spellweaver",tier:'S',img:'assets/traits/spellweaver.png'},
 {name:"Rapidfire",tier:'S',img:'assets/traits/rapidfire.png'},
 {name:"Lunar",tier:'A',img:'assets/traits/lunar.png'},
 {name:"Invoker",tier:'A',img:'assets/traits/invoker.png'},
 {name:"Elderwood",tier:'A',img:'assets/traits/elderwood.png'},
 {name:"Florafatalis",tier:'A',img:'assets/traits/florafatalis.png'},
 {name:"Ravager",tier:'A',img:'assets/traits/ravager.png'},
 {name:"Blackthorn",tier:'A',img:'assets/traits/blackthorn.png'},
 {name:"Hunter",tier:'A',img:'assets/traits/hunter.png'},
 {name:"Fae",tier:'B',img:'assets/traits/fae.png'},
 {name:"Inferno",tier:'B',img:'assets/traits/inferno.png'},
 {name:"Primal",tier:'B',img:'assets/traits/primal.png'},
 {name:"Blossom",tier:'B',img:'assets/traits/blossom.png'},
 {name:"Sprykin",tier:'B',img:'assets/traits/sprykin.png'},
 {name:"Defender",tier:'C',img:'assets/traits/defender.png'}
];
const labels={S:'S TIER',A:'A TIER',B:'B TIER',C:'C TIER'};
function render(){const q=document.querySelector('#tier-search').value.trim().toLowerCase();document.querySelector('#tier-board').innerHTML=tiers.map(t=>{const entries=data.filter(x=>x.tier===t&&x.name.toLowerCase().includes(q));return entries.length?'<section class="tier-row tier-'+t.toLowerCase()+'"><div class="tier-label">'+labels[t]+'</div><div class="tier-items">'+entries.map(x=>'<article class="tier-entry"><img src="'+x.img+'" alt="" onerror="this.style.display=\\'none\\'"><span>'+x.name+'</span></article>').join('')+'</div></section>':''}).join('')||'<p class="empty">مفيش نتائج مطابقة.</p>'}
document.querySelector('#tier-search').addEventListener('input',render);document.querySelectorAll('.lang-toggle').forEach(b=>b.addEventListener('click',()=>{document.documentElement.lang='en';document.documentElement.dir='ltr';document.querySelectorAll('nav a').forEach(a=>{const m={'الرئيسية':'Home','التشكيلات':'Comps','الأيتمز':'Items','التريتس':'Traits','الباتش':'Patch'};a.textContent=m[a.textContent]||a.textContent});document.querySelector('#tier-search').placeholder='Search…';b.textContent='عربي'}));render();
