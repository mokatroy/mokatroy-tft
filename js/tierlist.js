const isTraits=location.pathname.endsWith('traits.html');
const tiers=['S','A','B','C'];
const data=isTraits?[
 {name:'Riftbeast',tier:'A',img:'assets/traits/riftbeast.png'}, {name:'Blackthorn',tier:'A',img:'assets/traits/blackthorn.png'}, {name:'Blossom',tier:'A',img:'assets/traits/blossom.png'}, {name:'Juggernaut',tier:'A',img:'assets/traits/juggernaut.png'}, {name:'Hunter',tier:'B',img:'assets/traits/hunter.png'}, {name:'Invoker',tier:'B',img:'assets/traits/invoker.png'}, {name:'Vanguard',tier:'B',img:'assets/traits/vanguard.png'}, {name:'Inferno',tier:'B',img:'assets/traits/inferno.png'}
]:[
 {name:'Gargoyle Stoneplate',tier:'S',img:'assets/items/gargoylestoneplate.png'},
 {name:"Spear of Shojin",tier:'S',img:'assets/items/spearofshojin.png'},
 {name:'Deathblade',tier:'S',img:'assets/items/deathblade.png'},
 {name:'Last Whisper',tier:'S',img:'assets/items/lastwhisper.png'},
 {name:'Void Staff',tier:'S',img:'assets/items/voidstaff.png'},
 {name:'Infinity Edge',tier:'S',img:'assets/items/infinityedge.png'},
 {name:'Giant Slayer',tier:'S',img:'assets/items/giantslayer.png'},
 {name:'Guardbreaker',tier:'S',img:'assets/items/guardbreaker.png'},
 {name:'Morellonomicon',tier:'S',img:'assets/items/morellonomicon.png'},
 {name:'Red Buff',tier:'S',img:'assets/items/redbuff.png'},
 {name:"Thief's Gloves",tier:'S',img:'assets/items/thiefsgloves.png'},
 {name:"Guinsoo's Rageblade",tier:'S',img:'assets/items/guinsoosrageblade.png'},
 {name:'Adaptive Helm',tier:'A',img:'assets/items/adaptivehelm.png'},
 {name:'Crownguard',tier:'A',img:'assets/items/crownguard.png'},
 {name:'Steadfast Heart',tier:'A',img:'assets/items/steadfastheart.png'},
 {name:"Protector's Vow",tier:'A',img:'assets/items/protectorsvow.png'},
 {name:"Dragon's Claw",tier:'A',img:'assets/items/dragonsclaw.png'},
 {name:'Jeweled Gauntlet',tier:'A',img:'assets/items/jeweledgauntlet.png'},
 {name:'Ionic Spark',tier:'A',img:'assets/items/ionicspark.png'},
 {name:'Hand of Justice',tier:'A',img:'assets/items/handofjustice.png'},
 {name:'Evenshroud',tier:'A',img:'assets/items/evenshroud.png'},
 {name:'Blue Buff',tier:'A',img:'assets/items/bluebuff.png'},
 {name:'Bramble Vest',tier:'A',img:'assets/items/bramblevest.png'},
 {name:'Kraken Slayer',tier:'A',img:'assets/items/krakenslayer.png'},
 {name:'Edge of Night',tier:'A',img:'assets/items/edgeofnight.png'},
 {name:'Bloodthirster',tier:'A',img:'assets/items/bloodthirster.png'},
 {name:"Sterak's Gage",tier:'A',img:'assets/items/steraksgage.png'},
 {name:"Archangel's Staff",tier:'A',img:'assets/items/archangelsstaff.png'},
 {name:"Rabadon's Deathcap",tier:'A',img:'assets/items/rabadonsdeathcap.png'},
 {name:'Quicksilver',tier:'A',img:'assets/items/quicksilver.png'},
 {name:'Titan’s Resolve',tier:'B',img:'assets/items/titansresolve.png'},
 {name:'Sunfire Cape',tier:'B',img:'assets/items/sunfirecape.png'}
];
const labels={S:'S TIER',A:'A TIER',B:'B TIER',C:'C TIER'};
function render(){const q=document.querySelector('#tier-search').value.trim().toLowerCase();document.querySelector('#tier-board').innerHTML=tiers.map(t=>{const entries=data.filter(x=>x.tier===t&&x.name.toLowerCase().includes(q));return entries.length?'<section class="tier-row tier-'+t.toLowerCase()+'"><div class="tier-label">'+labels[t]+'</div><div class="tier-items">'+entries.map(x=>'<article class="tier-entry"><img src="'+x.img+'" alt="" onerror="this.style.display=\'none\'"><span>'+x.name+'</span></article>').join('')+'</div></section>':''}).join('')||'<p class="empty">مفيش نتائج مطابقة.</p>'}
document.querySelector('#tier-search').addEventListener('input',render);document.querySelectorAll('.lang-toggle').forEach(b=>b.addEventListener('click',()=>{document.documentElement.lang='en';document.documentElement.dir='ltr';document.querySelectorAll('nav a').forEach(a=>{const m={'الرئيسية':'Home','التشكيلات':'Comps','الأيتمز':'Items','التريتس':'Traits','الباتش':'Patch'};a.textContent=m[a.textContent]||a.textContent});document.querySelector('#tier-search').placeholder='Search…';b.textContent='عربي'}));render();
