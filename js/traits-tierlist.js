const traitBreakpoints={"Juggernaut":"2 / 4 / 6","Coven":"3 / 4 / 5 / 7","Vanguard":"2 / 4 / 6","Executioner":"2 / 3 / 4","Brawler":"2 / 4 / 6","Florafatalis":"1 / 2","Spellweaver":"2 / 4 / 6","Rapidfire":"2 / 3 / 4 / 5","Lunar":"2 / 3 / 4 / 5","Invoker":"2 / 3 / 4 / 5","Elderwood":"3 / 5 / 7 / 9","Ravager":"2 / 4 / 6","Blackthorn":"2 / 4 / 6","Hunter":"2 / 3 / 4 / 5","Fae":"2 / 4","Inferno":"2 / 3 / 5 / 7","Primal":"2 / 4","Blossom":"3 / 5 / 7 / 9","Sprykin":"3 / 5 / 7","Defender":"2 / 4 / 6"};
const traitEffects={"Coven":"Essence per loss: 22 / 28 / 35 / 60.","Defender":"Team gains Armor and Magic Resist. Current resists: 25 / 60 / 115.","Hunter":"Bonus Attack Damage: 20% / 30% / 40% / 60%.","Inferno":"Burn amount: 1% / 1% / 3% / 4%.","Invoker":"Mana Regen: 3 / 4 / 6 / 8.","Vanguard":"Shield breakpoints: 2 / 4 / 6 units.","Brawler":"Team gains max Health; Brawlers gain more.","Juggernaut":"Your team gains Durability; Juggernauts gain more.","Rapidfire":"Your team gains Attack Speed; Rapidfire champions gain more per attack.","Spellweaver":"Your team gains Ability Power; Spellweavers gain more when they cast.","Ravager":"Ravagers gain Omnivamp and bonus damage, doubled against low-Health enemies."};
const tiers = ["S", "A", "B", "C"];
const data = [
  { name: "Juggernaut", tier: "S", img: "assets/traits/juggernaut.png" },
  { name: "Defender", tier: "S", img: "assets/traits/defender.png" },
  { name: "Vanguard", tier: "S", img: "assets/traits/vanguard.png" },
  { name: "Executioner", tier: "S", img: "assets/traits/executioner.png" },
  { name: "Brawler", tier: "S", img: "assets/traits/brawler.png" },
  { name: "Florafatalis", tier: "S", img: "assets/traits/florafatalis.png" },
  { name: "Spellweaver", tier: "S", img: "assets/traits/spellweaver.png" },
  { name: "Rapidfire", tier: "S", img: "assets/traits/rapidfire.png" },
  { name: "Lunar", tier: "A", img: "assets/traits/lunar.png" },
  { name: "Invoker", tier: "A", img: "assets/traits/invoker.png" },
  { name: "Elderwood", tier: "A", img: "assets/traits/elderwood.png" },
  { name: "Defender", tier: "A", img: "assets/traits/defender.png" },
  { name: "Ravager", tier: "A", img: "assets/traits/ravager.png" },
  { name: "Blackthorn", tier: "A", img: "assets/traits/blackthorn.png" },
  { name: "Hunter", tier: "A", img: "assets/traits/hunter.png" },
  { name: "Fae", tier: "B", img: "assets/traits/fae.png" },
  { name: "Inferno", tier: "B", img: "assets/traits/inferno.png" },
  { name: "Primal", tier: "B", img: "assets/traits/primal.png" },
  { name: "Blossom", tier: "B", img: "assets/traits/blossom.png" },
  { name: "Sprykin", tier: "B", img: "assets/traits/sprykin.png" },
  { name: "Coven", tier: "C", img: "assets/traits/coven.png" }
];

const labels = { S: "S TIER", A: "A TIER", B: "B TIER", C: "C TIER" };
const board = document.querySelector("#tier-board");
const search = document.querySelector("#tier-search");

function render() {
  const query = (search.value || "").trim().toLowerCase();
  board.innerHTML = "";
  let visible = 0;

  tiers.forEach((tier) => {
    const matches = data.filter((item) => item.tier === tier && item.name.toLowerCase().includes(query));
    if (!matches.length) return;
    visible += matches.length;

    const row = document.createElement("section");
    row.className = "tier-row tier-" + tier.toLowerCase();

    const label = document.createElement("div");
    label.className = "tier-label";
    label.textContent = labels[tier];

    const items = document.createElement("div");
    items.className = "tier-items";

    matches.forEach((item) => {
      const entry = document.createElement("article");
      entry.className = "tier-entry";
      entry.title = item.name;

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.loading = "lazy";

      entry.appendChild(img);
      items.appendChild(entry);
    });

    row.appendChild(label);
    row.appendChild(items);
    board.appendChild(row);
  });

  if (!visible) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "مفيش نتائج مطابقة.";
    board.appendChild(empty);
  }
}

search.addEventListener("input", render);

document.querySelectorAll(".lang-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.querySelectorAll("nav a").forEach((a) => {
      const map = { "الرئيسية": "Home", "التشكيلات": "Comps", "الأيتمز": "Items", "التريتس": "Traits", "الباتش": "Patch" };
      a.textContent = map[a.textContent] || a.textContent;
    });
    search.placeholder = "Search…";
    button.textContent = "عربي";
  });
});

render();const labels== ["S", "A", "B", "C"];
const data = [
  { name: "Juggernaut", tier: "S", img: "assets/traits/juggernaut.png" },
  { name: "Defender", tier: "S", img: "assets/traits/defender.png" },
  { name: "Vanguard", tier: "S", img: "assets/traits/vanguard.png" },
  { name: "Executioner", tier: "S", img: "assets/traits/executioner.png" },
  { name: "Brawler", tier: "S", img: "assets/traits/brawler.png" },
  { name: "Florafatalis", tier: "S", img: "assets/traits/florafatalis.png" },
  { name: "Spellweaver", tier: "S", img: "assets/traits/spellweaver.png" },
  { name: "Rapidfire", tier: "S", img: "assets/traits/rapidfire.png" },
  { name: "Lunar", tier: "A", img: "assets/traits/lunar.png" },
  { name: "Invoker", tier: "A", img: "assets/traits/invoker.png" },
  { name: "Elderwood", tier: "A", img: "assets/traits/elderwood.png" },
  { name: "Defender", tier: "A", img: "assets/traits/defender.png" },
  { name: "Ravager", tier: "A", img: "assets/traits/ravager.png" },
  { name: "Blackthorn", tier: "A", img: "assets/traits/blackthorn.png" },
  { name: "Hunter", tier: "A", img: "assets/traits/hunter.png" },
  { name: "Fae", tier: "B", img: "assets/traits/fae.png" },
  { name: "Inferno", tier: "B", img: "assets/traits/inferno.png" },
  { name: "Primal", tier: "B", img: "assets/traits/primal.png" },
  { name: "Blossom", tier: "B", img: "assets/traits/blossom.png" },
  { name: "Sprykin", tier: "B", img: "assets/traits/sprykin.png" },
  { name: "Coven", tier: "C", img: "assets/traits/coven.png" }
];

const labels = { S: "S TIER", A: "A TIER", B: "B TIER", C: "C TIER" };
const board = document.querySelector("#tier-board");
const search = document.querySelector("#tier-search");

function render() {
  const query = (search.value || "").trim().toLowerCase();
  board.innerHTML = "";
  let visible = 0;

  tiers.forEach((tier) => {
    const matches = data.filter((item) => item.tier === tier && item.name.toLowerCase().includes(query));
    if (!matches.length) return;
    visible += matches.length;

    const row = document.createElement("section");
    row.className = "tier-row tier-" + tier.toLowerCase();

    const label = document.createElement("div");
    label.className = "tier-label";
    label.textContent = labels[tier];

    const items = document.createElement("div");
    items.className = "tier-items";

    matches.forEach((item) => {
      const entry = document.createElement("article");
      entry.className = "tier-entry";
      entry.title = item.name;

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.loading = "lazy";

      entry.appendChild(img);
      items.appendChild(entry);
    });

    row.appendChild(label);
    row.appendChild(items);
    board.appendChild(row);
  });

  if (!visible) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "مفيش نتائج مطابقة.";
    board.appendChild(empty);
  }
}

search.addEventListener("input", render);

document.querySelectorAll(".lang-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    document.documentElement.lang = "en";
    document.documentElement.dir = "ltr";
    document.querySelectorAll("nav a").forEach((a) => {
      const map = { "الرئيسية": "Home", "التشكيلات": "Comps", "الأيتمز": "Items", "التريتس": "Traits", "الباتش": "Patch" };
      a.textContent = map[a.textContent] || a.textContent;
    });
    search.placeholder = "Search…";
    button.textContent = "عربي";
  });
});

render();
