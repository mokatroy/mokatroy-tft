import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const PAGES = ["index.html","comps.html","comp.html","champions.html","items.html","traits.html","patch.html","augments.html"];

const copy = {
  en: {
    navHome:"Home",navComps:"Comps",navAugments:"Augments",navChampions:"Champions",navItems:"Items",navTraits:"Traits",navPatch:"Patch",
    eyebrow:"Your smart Teamfight Tactics guide",heroTitle:"Build your team.<br><span>Win the lobby.</span>",heroCopy:"The best comps, champion items, and clear guides to help you reach Top 4.",
    exploreComps:"Explore comps",currentPatch:"Current patch",statComps:"Ready comps",statPatch:"Current patch",statLanguage:"Three languages",
    liveNow:"Live now",patchHeadline:"Patch at a glance",patchNotes:"Patch notes",seePatch:"Full patch notes →",featured:"Our picks",featuredHeadline:"Best comps right now",allComps:"All comps →",
    footer:"Demo content, ready to replace every patch",compsEyebrow:"Patch {v} guide",compsTitle:"Comps",compsSubtitle:"Choose your playstyle, then open the full build and positioning guide.",
    searchPlaceholder:"Search a comp or champion…",all:"All",notFound:"No matching comps.",back:"← All comps",units:"Final board",traits:"Traits",items:"Recommended items",
    howToPlay:"How to play",earlyUnits:"Early Units",earlyNote:"Play these first, then transition into the final board",positioning:"Positioning",itemPriority:"Item Priority",flexUnits:"Flex Units",
    stageGuide:"Stage Guide",stage:"Stage",augmentPriority:"Augment Priority",patch:"Patch",abilitySoon:"Ability details coming soon",
    patchPageTitle:"Patch Notes",patchPageEyebrow:"All changes in patch",released:"Released",buffs:"Buffs",nerfs:"Nerfs",adjustments:"Adjustments",
    categoryChampion:"Champions",categoryTrait:"Traits",categoryItem:"Items",categoryAugment:"Augments",categorySystem:"Systems",categoryHotfix:"Hotfix",hotfixNote:"Hotfix changes shipped after the main patch.",
    allPatches:"All patches",seeMeta:"See the meta →",
    itemsEyebrow:"SET 18 · PATCH 18.3B",itemsTitle:"Item Tier List",itemsSubtitle:"Item strength ranking for the current meta. Rankings change with the patch.",itemsSearch:"Search for an item…",metaFooter:"Meta data can be updated every patch",
    traitsEyebrow:"SET 18 · PATCH 18.3B",traitsTitle:"Trait Tier List",traitsSubtitle:"Explore trait strength and search by name.",traitsSearch:"Search for a trait…",
    augmentsEyebrow:"SET 18 · PATCH 18.3",augmentsTitle:"Augments",augmentsSubtitle:"Augment data by rarity.",augmentSearch:"Search for an Augment or part of its description…",silver:"Silver",gold:"Gold",prismatic:"Prismatic",
    setFooter:"Set 18 · Enchanted Wilds"
  },
  ja: {
    navHome:"ホーム",navComps:"構成",navAugments:"オーグメント",navChampions:"チャンピオン",navItems:"アイテム",navTraits:"トレイト",navPatch:"パッチ",
    eyebrow:"Teamfight Tactics の攻略ガイド",heroTitle:"チームを作り。<br><span>ロビーを制す。</span>",heroCopy:"今パッチ最強の構成、アイテム、そしてTop4に入るための明快なガイド。",
    exploreComps:"構成を見る",currentPatch:"現在のパッチ",statComps:"掲載構成",statPatch:"現在のパッチ",statLanguage:"対応言語",
    liveNow:"公開中",patchHeadline:"パッチ概要",patchNotes:"パッチノート",seePatch:"パッチ詳細を見る →",featured:"おすすめ",featuredHeadline:"今おすすめの構成",allComps:"すべての構成 →",
    footer:"パッチごとに更新されるデータ",compsEyebrow:"パッチ {v} ガイド",compsTitle:"構成",compsSubtitle:"プレイスタイルを選び、ビルドと配置の詳細ガイドを開こう。",
    searchPlaceholder:"構成やチャンピオンを検索…",all:"すべて",notFound:"該当する構成がありません。",back:"← すべての構成",units:"最終構成",traits:"シナジー",items:"おすすめアイテム",
    howToPlay:"立ち回り",earlyUnits:"序盤ユニット",earlyNote:"序盤はこれらを使い、最終構成へ移行します",positioning:"配置",itemPriority:"アイテム優先度",flexUnits:"フレックスユニット",
    stageGuide:"ステージガイド",stage:"ステージ",augmentPriority:"オーグメント優先度",patch:"パッチ",abilitySoon:"アビリティ詳細は近日公開",
    patchPageTitle:"パッチノート",patchPageEyebrow:"パッチの全変更点",released:"リリース日",buffs:"バフ",nerfs:"ナーフ",adjustments:"調整",
    categoryChampion:"チャンピオン",categoryTrait:"トレイト",categoryItem:"アイテム",categoryAugment:"オーグメント",categorySystem:"システム",categoryHotfix:"緊急修正",hotfixNote:"本パッチ後に配信された緊急修正です。",
    allPatches:"すべてのパッチ",seeMeta:"メタを見る →",
    itemsEyebrow:"SET 18 · PATCH 18.3B",itemsTitle:"アイテムティアリスト",itemsSubtitle:"現在のメタにおけるアイテム評価。パッチごとに変わります。",itemsSearch:"アイテムを検索…",metaFooter:"メタデータは各パッチで更新できます",
    traitsEyebrow:"SET 18 · PATCH 18.3B",traitsTitle:"トレイトティアリスト",traitsSubtitle:"トレイトの強さを確認し、名前で検索できます。",traitsSearch:"トレイトを検索…",
    augmentsEyebrow:"SET 18 · PATCH 18.3",augmentsTitle:"オーグメント",augmentsSubtitle:"レアリティ別のオーグメントデータ。",augmentSearch:"オーグメント名または説明の一部を検索…",silver:"Silver",gold:"Gold",prismatic:"Prismatic",
    setFooter:"セット18 · Enchanted Wilds"
  }
};

function stripI18nAttrs(html) {
  return html.replace(/\sdata-i18n(?:-placeholder)?="[^"]*"/g, "");
}
function translate(html, locale) {
  const dict = copy[locale];
  html = html.replace(/(<[^>]*?)\sdata-i18n="([^"]+)"([^>]*>)([\s\S]*?)(<\/[^>]+>)/g, (_, a, key, c, _text, close) => {
    const value = dict[key] ?? _text;
    return a + c + value + close;
  });
  html = html.replace(/(placeholder=")[^"]*(")([^>]*data-i18n-placeholder="([^"]+)")/g, (_, p, q, rest, key) => p + (dict[key] ?? "") + q);
  html = stripI18nAttrs(html);
  html = html.replace(/<html lang="[^"]*" dir="[^"]*">/, '<html lang="'+locale+'" dir="ltr">');
  html = html.replace(/<head>(?!.*<base href="../">)/s, '<head><base href="../">');
  const prefix = locale + "/";
  html = html.replace(/href="(?:ja\/|en\/)?(index\.html|comps\.html|augments\.html|champions\.html|items\.html|traits\.html|patch\.html|comp\.html)"/g, (_, file) => 'href="'+prefix+file+'"');
  html = html.replace(/href="(?:ja\/|en\/)"/g, 'href="'+prefix+'"');
  html = html.replace(/<button class="lang-toggle"([^>]*)>[^<]*<\/button>/g, (_, attrs) => '<button class="lang-toggle"'+attrs+'>'+ (locale==="en"?"日本語":"عربي") +'</button>');
  html = html.replace(/og:locale" content="[^"]*"/g, 'og:locale" content="'+(locale==="en"?"en_US":"ja_JP")+'"');
  return html;
}

for (const page of PAGES) {
  const source = fs.readFileSync(path.join(ROOT,page),"utf8");
  for (const locale of ["en","ja"]) {
    const target = path.join(ROOT,locale,page);
    fs.mkdirSync(path.dirname(target),{recursive:true});
    fs.writeFileSync(target, translate(source, locale));
  }
}
console.log("Built en/ and ja/ localized pages:", PAGES.length);
