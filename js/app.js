import {setupLanguage,localize} from './i18n.js';
import {compCard} from './ui.js';

const load = path => fetch(path).then(response => {
  if (!response.ok) throw new Error(`Failed to load ${path}: ${response.status}`);
  return response.json();
});

async function render() {
  const featured = document.querySelector('#featured-comps');
  if (!featured) return;

  try {
    const [comps, patches] = await Promise.all([
      load('data/comps.json'),
      load('data/patches.json')
    ]);

    featured.innerHTML = comps.filter(comp => comp.featured).map(compCard).join('');

    const patch = patches[0];
    const count = document.querySelector('#stat-comps');
    const patchStat = document.querySelector('#stat-patch');
    const patchVersion = document.querySelector('#patch-version');
    const patchTitle = document.querySelector('#patch-title');
    const patchSummary = document.querySelector('#patch-summary');

    if (count) count.textContent = comps.length;
    if (patch && patchStat) patchStat.textContent = patch.version;
    if (patch && patchVersion) patchVersion.textContent = patch.version;
    if (patch && patchTitle) patchTitle.textContent = localize(patch.title);
    if (patch && patchSummary) patchSummary.textContent = localize(patch.summary);
  } catch (error) {
    console.error('Homepage data could not be loaded:', error);
    featured.innerHTML = '<p class="empty-state">تعذر تحميل بيانات الصفحة. حاول تحديث الصفحة.</p>';
  }
}

setupLanguage(render);
