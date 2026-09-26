import {itemTooltip,traitTooltip,traitIcon} from "./hover-data.js";
import {copy} from "./i18n.js";
const labels={
ar:{title:"التشامبيونز",subtitle:"كل تشامبيونات السيت الحالي مع التكلفة والتريتس والقدرة.",search:"ابحث عن تشامبيون أو Trait…",all:"الكل",cost:"كوست",best:"أفضل 3 Items"},
en:{title:"Champions",subtitle:"Every current-set champion with cost, traits, and ability.",search:"Search a champion or trait…",all:"All",cost:"Cost",best:"Top 3 Items"},
ja:{title:"チャンピオン",subtitle:"現在のセットの全チャンピオン、コスト、トレイト、アビリティ。",search:"チャンピオンやトレイトを検索…",all:"すべて",cost:"コスト",best:"おすすめ3アイテム"}
};
let lang=localStorage.getItem("mokatroy-lang")||"ar";
let champions=[],cost="All",query="";
const grid=document.querySelector("#champ-grid"),search=document.querySelector("#champ-search"),filters=document.querySelector("#cost-filters");
let modal=document.querySelector("#champ-modal");
if(!modal){modal=document.createElement("div");modal.id="champ-modal";modal.className="champ-modal";document.body.appendChild(modal);}
function apply(){const L=labels[lang]||labels.en;document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";const navKeys={"index.html":"navHome","comps.html":"navComps","augments.html":"navAugments","champions.html":"navChampions","items.html":"navItems","traits.html":"navTraits","patch.html":"navPatch"};document.querySelectorAll(".site-header nav a").forEach(a=>{const key=navKeys[a.getAttribute("href")];if(key)a.textContent=copy[lang]?.[key]||copy.en[key]||a.textContent});document.querySelector("#title").textContent=L.title;document.querySelector("#subtitle").textContent=L.subtitle;search.placeholder=L.search;document.querySelector(".lang-toggle").textContent=lang==="ar"?"EN":lang==="en"?"日本語":"عربي";render();}
function render(){
 grid.innerHTML="";
 const q=query.trim().toLowerCase();
 const list=champions.filter(c=>(cost==="All"||String(c.cost)===cost)&&(!q||c.name.en.toLowerCase().includes(q)||c.traits.some(t=>String(t.name).toLowerCase().includes(q))));
 const L=labels[lang]||labels.en;
 filters.innerHTML=[["All",L.all],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"]].map(([v,t])=>'<button class="'+(cost===v?"active":"")+'" data-cost="'+v+'">'+t+"</button>").join("");
 filters.querySelectorAll("button").forEach(b=>b.onclick=()=>{cost=b.dataset.cost;render();});
 list.forEach(c=>{
   const card=document.createElement("article");card.className="champ-card";
   const traits=c.traits.map(t=>'<span class="champ-trait has-global-tip '+(t.special?"special":"")+'"><img src="'+traitIcon(t.name)+'" alt=""><span>'+t.name+"</span>"+traitTooltip(t.name)+"</span>").join("");
   const bestItems=(c.bestItems||[]).map(it=>'<span class="best-item-icon" title="'+it.name+'"><img src="'+it.image+'" alt="'+it.name+'"></span>').join("");
   const ability=c.ability?c.ability.name:"";
   const abilityText=c.ability?(lang==="ar"?c.ability.ar:c.ability.en):"";
   const photo=c.image?'<img class="champ-photo" src="'+c.image+'" alt="'+c.name.en+'">':'<div class="champ-photo champ-photo-empty">'+c.name.en.slice(0,1)+"</div>";
   card.innerHTML='<div class="champ-top"><span class="champ-cost">'+c.cost+'-cost</span><span class="champ-id">Set 18</span></div>'+photo+'<h2>'+c.name.en+'</h2><div class="champ-traits">'+traits+'</div><div class="champ-best"><span>'+L.best+'</span><div class="best-items-row">'+bestItems+"</div></div>"+(ability?'<div class="champ-ability"><strong>'+ability+"</strong>"+(abilityText?"<p>"+abilityText+"</p>":"")+(c.specialNote?"<small>"+c.specialNote+"</small>":"")+"</div>":"");
   card.addEventListener("click",()=>openModal(c));
   grid.appendChild(card);
 });
}
function openModal(c){
 const L=labels[lang]||labels.en;
 const traits=c.traits.map(t=>'<span class="modal-trait has-global-tip"><img src="'+traitIcon(t.name)+'" alt="">'+t.name+traitTooltip(t.name)+"</span>").join("");
 const bestHtml=(c.bestItems||[]).map((it,i)=>'<div class="modal-item has-global-tip"><b>'+(i+1)+'</b><img src="'+it.image+'" alt="'+it.name+'"><span>'+it.name+"</span>"+itemTooltip(it.name)+"</div>").join("");
 modal.innerHTML='<div class="champ-modal-backdrop"></div><div class="champ-modal-card"><button class="champ-modal-close" type="button">×</button><div>'+ (c.image?'<img class="modal-champ-photo" src="'+c.image+'" alt="'+c.name.en+'">':'') +'</div><div class="modal-main"><span class="champ-cost">'+c.cost+'-cost</span><h2>'+c.name.en+'</h2><div class="modal-traits">'+traits+'</div><h3>'+L.best+'</h3><div class="modal-items">'+bestHtml+"</div>"+(c.ability?'<div class="modal-ability"><strong>'+c.ability.name+"</strong><p>"+(lang==="ar"?c.ability.ar:c.ability.en)+"</p></div>":"")+"</div></div>";
 modal.classList.add("open");
 modal.querySelector(".champ-modal-close").onclick=closeModal;
 modal.querySelector(".champ-modal-backdrop").onclick=closeModal;
}
function closeModal(){modal.classList.remove("open");modal.innerHTML="";}
search.addEventListener("input",e=>{query=e.target.value;render();});
document.querySelector(".lang-toggle").addEventListener("click",()=>{lang=lang==="ar"?"en":lang==="en"?"ja":"ar";localStorage.setItem("mokatroy-lang",lang);apply();});
fetch("data/champions.json").then(r=>r.json()).then(d=>{champions=d.champions;render();});
apply();
