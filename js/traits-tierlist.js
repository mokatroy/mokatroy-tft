const traitBreakpoints = {
  Juggernaut: "2 / 4 / 6",
  Coven: "3 / 4 / 5 / 7",
  Vanguard: "2 / 4 / 6",
  Executioner: "2 / 3 / 4",
  Brawler: "2 / 4 / 6",
  Florafatalis: "1 / 2",
  Spellweaver: "2 / 4 / 6",
  Rapidfire: "2 / 3 / 4 / 5",
  Lunar: "2 / 3 / 4 / 5",
  Invoker: "2 / 3 / 4 / 5",
  Elderwood: "3 / 5 / 7 / 9",
  Ravager: "2 / 4 / 6",
  Blackthorn: "2 / 4 / 6",
  Hunter: "2 / 3 / 4 / 5",
  Fae: "2 / 4",
  Inferno: "2 / 3 / 5 / 7",
  Primal: "2 / 4",
  Blossom: "3 / 5 / 7 / 9",
  Sprykin: "3 / 5 / 7",
  Defender: "2 / 4 / 6"
};

const traitEffects = {
  Juggernaut: "Your team gains Durability; Juggernauts gain more.",
  Coven: "Gain Essence when you lose combat.",
  Vanguard: "Vanguards and the team gain defensive bonuses.",
  Executioner: "Executioners gain stronger damage against weakened enemies.",
  Brawler: "Your team gains max Health; Brawlers gain more.",
  Florafatalis: "Florafatalis provides its trait bonus as the set mechanic allows.",
  Spellweaver: "Your team gains Ability Power; Spellweavers gain more when they cast.",
  Rapidfire: "Your team gains Attack Speed; Rapidfire champions gain more per attack.",
  Lunar: "Lunar champions gain their trait bonuses at the active breakpoint.",
  Invoker: "Allies gain Mana regeneration.",
  Elderwood: "Elderwood grants scaling team bonuses.",
  Ravager: "Ravagers gain Omnivamp and bonus damage, doubled against low-Health enemies.",
  Blackthorn: "Blackthorn grants its defensive trait bonuses.",
  Hunter: "Hunters gain bonus Attack Damage.",
  Fae: "Fae grants its trait bonuses at the active breakpoint.",
  Inferno: "Inferno applies its burn and damage trait bonuses.",
  Primal: "Primal grants its scaling trait bonuses.",
  Blossom: "Blossom grants scaling trait bonuses.",
  Sprykin: "Sprykin grants its active trait bonuses.",
  Defender: "The team gains Armor and Magic Resist."
};

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
const search = document.querySelector("#tier-search");
const board = document.querySelector("#tier-board");

function render() {
  const query = (search.value || "").trim().toLowerCase();
  board.innerHTML = "";

  let visible = 0;

  tiers.forEach((tier) => {
    const matches = data.filter((item) =>
      item.tier === tier && item.name.toLowerCase().includes(query)
    );
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
      entry.tabIndex = 0;

      const img = document.createElement("img");
      img.src = item.img;
      img.alt = item.name;
      img.loading = "lazy";

      const tooltip = document.createElement("div");
      tooltip.className = "tier-tooltip";

      const title = document.createElement("strong");
      title.textContent = item.name;

      const stats = document.createElement("div");
      stats.className = "tooltip-stats";
      stats.textContent = "Breakpoints: " + (traitBreakpoints[item.name] || "Not available");

      const effect = document.createElement("p");
      effect.textContent = traitEffects[item.name] || "Trait effect details unavailable";

      tooltip.append(title, stats, effect);
      entry.append(img, tooltip);
      items.appendChild(entry);
    });

    row.append(label, items);
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
    search.placeholder = "Search…";
    button.textContent = "عربي";
  });
});

render();
