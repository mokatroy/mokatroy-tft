const itemDetails = Gargoyle Stoneplate":{"stats":"100 Health • 25 Armor • 25 Magic Resist","effect":"Gain 10 Armor and 10 Magic Resist for each enemy targeting the holder."},"Spear of Shojin":{"stats":"15 Attack Damage • 15 Ability Power • 15 Mana","effect":"Attacks grant 5 bonus Mana."},"Deathblade":{"stats":"55% Attack Damage","effect":"Grants additional Attack Damage."},"Last Whisper":{"stats":"15% Attack Damage • 20% Attack Speed • 20% Critical Strike","effect":"Attacks and Ability damage Sunder the target for 3 seconds."},"Void Staff":{"stats":"10% Ability Power • 10% Attack Speed • 15 Mana","effect":"Attacks and Ability damage Shred the target for 5 seconds."},"Infinity Edge":{"stats":"35% Attack Damage • 35% Critical Strike","effect":"Gain Precision. Ability damage can critically strike."},"Giant Slayer":{"stats":"20% Attack Damage • 20% Attack Speed","effect":"Gain 15% additional Damage Amp against Tanks."},"Guardbreaker":{"stats":"10% Attack Damage • 10% Ability Power • 20% Attack Speed","effect":"After damaging a Shielded enemy, gain additional Damage Amp."},"Morellonomicon":{"stats":"150 Health • 10% Ability Power","effect":"Attacks and Abilities Burn and Wound enemies."},"Red Buff":{"stats":"20% Attack Speed","effect":"Attacks and Abilities Burn and Wound enemies."},"Thief's Gloves":{"stats":"20% Critical Strike • 20% Dodge","effect":"Each round: Equip 2 random items."},"Guinsoo's Rageblade":{"stats":"10% Ability Power • 10% Attack Speed","effect":"Gain 7% stacking Attack Speed every second."},"Adaptive Helm":{"stats":"20 Magic Resist • 15 Mana","effect":"Gain 15% additional Mana from all sources. Role-based defensive/offensive bonus."},"Crownguard":{"stats":"20 Armor • 20 Ability Power","effect":"Combat Start: gain a 25% max Health Shield for 8 seconds; then gain 25 Ability Power."},"Steadfast Heart":{"stats":"20 Armor • 20 Critical Strike","effect":"Gain 10% Durability; while above 50% Health, gain 18% instead."},"Protector's Vow":{"stats":"20 Armor • 15 Mana","effect":"At 40% Health, gain Mana and a Shield."},"Dragon's Claw":{"stats":"40 Magic Resist","effect":"Gain max Health. Every 2 seconds, heal a percentage of max Health."},"Jeweled Gauntlet":{"stats":"35% Critical Strike • 35 Ability Power","effect":"Gain Precision. Ability damage can critically strike."},"Ionic Spark":{"stats":"250 Health • 15% Ability Power • 35 Magic Resist","effect":"30% Shred within 2 hexes; when enemies cast, deal magic damage equal to 150% of Mana spent."},"Hand of Justice":{"stats":"20% Critical Strike • 15 Mana","effect":"18% Attack Damage and Ability Power plus 15% Omnivamp; doubles based on Health."},"Evenshroud":{"stats":"20 Health • 20 Magic Resist","effect":"Sunder nearby enemies and gain Armor and Magic Resist for the first 15 seconds."},"Blue Buff":{"stats":"15% Attack Damage • 15 Ability Power • 15 Mana","effect":"Gain 10% additional Attack Damage and Ability Power from all sources."},"Bramble Vest":{"stats":"40 Armor","effect":"Gain max Health and reduce damage from attacks; striking enemies deals magic damage."},"Kraken Slayer":{"stats":"20% Attack Speed • 20 Magic Resist","effect":"Attacks grant stacking Attack Damage; at full stacks gain Attack Speed."},"Edge of Night":{"stats":"10% Attack Damage • 20 Armor","effect":"At 60% Health, become untargetable briefly, shed negative effects and heal missing Health."},"Bloodthirster":{"stats":"20% Attack Damage • 20 Magic Resist","effect":"Once per combat at 40% Health, gain a Shield."},"Sterak's Gage":{"stats":"20% Attack Damage • 150 Health","effect":"At 60% Health, gain a Shield equal to 25% max Health."},"Archangel's Staff":{"stats":"10% Ability Power • 15 Mana","effect":"Combat start: gain 20% Ability Power every 5 seconds."},"Rabadon's Deathcap":{"stats":"50 Ability Power","effect":"Gain Damage Amp."},"Quicksilver":{"stats":"20% Attack Speed • 20 Magic Resist • 20% Critical Strike","effect":"Combat Start: Unstoppable for 14 seconds. Gain stacking Attack Speed."},"Titan’s Resolve":{"stats":"10% Attack Damage • 20 Armor • 20 Attack Speed","effect":"Attacking or taking damage grants stacking Attack Damage and Ability Power; at max stacks gain Damage Amp."},"Sunfire Cape":{"stats":"150 Health • 20 Armor","effect":"Gain max Health. Periodically Burn and Wound a nearby enemy."}};
;
const tiers = ["S", "A", "B", "C"];

const data = [
  { name: "Gargoyle Stoneplate", tier: "S", img: "assets/items/gargoylestoneplate.png" },
  { name: "Spear of Shojin", tier: "S", img: "assets/items/spearofshojin.png" },
  { name: "Deathblade", tier: "S", img: "assets/items/deathblade.png" },
  { name: "Last Whisper", tier: "S", img: "assets/items/lastwhisper.png" },
  { name: "Void Staff", tier: "S", img: "assets/items/voidstaff.png" },
  { name: "Infinity Edge", tier: "S", img: "assets/items/infinityedge.png" },
  { name: "Giant Slayer", tier: "S", img: "assets/items/giantslayer.png" },
  { name: "Guardbreaker", tier: "S", img: "assets/items/guardbreaker.png" },
  { name: "Morellonomicon", tier: "S", img: "assets/items/morellonomicon.png" },
  { name: "Red Buff", tier: "S", img: "assets/items/redbuff.png" },
  { name: "Thief's Gloves", tier: "S", img: "assets/items/thiefsgloves.png" },
  { name: "Guinsoo's Rageblade", tier: "S", img: "assets/items/guinsoosrageblade.png" },
  { name: "Adaptive Helm", tier: "A", img: "assets/items/adaptivehelm.png" },
  { name: "Crownguard", tier: "A", img: "assets/items/crownguard.png" },
  { name: "Steadfast Heart", tier: "A", img: "assets/items/steadfastheart.png" },
  { name: "Protector's Vow", tier: "A", img: "assets/items/protectorsvow.png" },
  { name: "Dragon's Claw", tier: "A", img: "assets/items/dragonsclaw.png" },
  { name: "Jeweled Gauntlet", tier: "A", img: "assets/items/jeweledgauntlet.png" },
  { name: "Ionic Spark", tier: "A", img: "assets/items/ionicspark.png" },
  { name: "Hand of Justice", tier: "A", img: "assets/items/handofjustice.png" },
  { name: "Evenshroud", tier: "A", img: "assets/items/evenshroud.png" },
  { name: "Blue Buff", tier: "A", img: "assets/items/bluebuff.png" },
  { name: "Bramble Vest", tier: "A", img: "assets/items/bramblevest.png" },
  { name: "Kraken Slayer", tier: "A", img: "assets/items/krakenslayer.png" },
  { name: "Edge of Night", tier: "A", img: "assets/items/edgeofnight.png" },
  { name: "Bloodthirster", tier: "A", img: "assets/items/bloodthirster.png" },
  { name: "Sterak's Gage", tier: "A", img: "assets/items/steraksgage.png" },
  { name: "Archangel's Staff", tier: "A", img: "assets/items/archangelsstaff.png" },
  { name: "Rabadon's Deathcap", tier: "A", img: "assets/items/rabadonsdeathcap.png" },
  { name: "Quicksilver", tier: "A", img: "assets/items/quicksilver.png" },
  { name: "Titan’s Resolve", tier: "B", img: "assets/items/titansresolve.png" },
  { name: "Sunfire Cape", tier: "B", img: "assets/items/sunfirecape.png" }
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

      const name = document.createElement("span");
      name.textContent = item.name;

      const tooltip = document.createElement("div");
      tooltip.className = "tier-tooltip";

      const title = document.createElement("strong");
      title.textContent = item.name;

      const stats = document.createElement("div");
      stats.className = "tooltip-stats";
      stats.textContent = (itemDetails[item.name] && itemDetails[item.name].stats) || "Stats unavailable";

      const effect = document.createElement("p");
      effect.textContent = (itemDetails[item.name] && itemDetails[item.name].effect) || "Effect details unavailable";

      tooltip.append(title, stats, effect);
      entry.append(img, name, tooltip);
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
