'use strict';

const byId = id => document.getElementById(id);
const distance = byId('distance');
const results = byId('results');
const error = byId('error');
let chinese = new URLSearchParams(location.search).get('lang') === 'zh';

const copy = {
  en: {
    title: 'TV viewing distance calculator',
    intro: 'Compare 16:9 TV sizes for your Hong Kong home. Measure from your seated eye position to the screen.',
    label: 'Viewing distance (metres)',
    notes: 'Screen width excludes the bezel, stand and carton. Check the exact model’s cabinet fit, stand spacing and delivery route before buying.',
    error: 'Enter a distance between 0.1 and 30 metres.',
    references: ['Smaller reference', 'Middle reference', 'Larger reference'],
    resultLabel: 'Screen-size references',
    edge: 'The target falls outside the listed sizes.',
    links: ['Official calculator', 'Compare 65-inch TVs', 'Compare 75-inch TVs', 'Delivery access checklist'],
  },
  zh: {
    title: '電視視距與尺寸計算器',
    intro: '比較香港家居適用的 16:9 電視尺寸。請量度坐下時雙眼到屏幕的距離。',
    label: '觀看距離（米）',
    notes: '屏幕闊度未計邊框、腳架同紙箱。買之前請按完整型號核對電視櫃、腳架間距同入屋路線。',
    error: '請輸入 0.1 至 30 米嘅距離。',
    references: ['較細尺寸', '中間尺寸', '較大尺寸'],
    resultLabel: '尺寸參考',
    edge: '計算目標超出清單內嘅尺寸。',
    links: ['官網計算器', '比較 65 吋電視', '比較 75 吋電視', '電視入屋量度清單'],
  },
};

function renderResults() {
  const words = chinese ? copy.zh : copy.en;
  const metres = distance.valueAsNumber;
  const valid = Number.isFinite(metres) && metres >= 0.1 && metres <= 30;
  results.replaceChildren();
  error.hidden = valid;
  error.textContent = valid ? '' : words.error;
  distance.setAttribute('aria-invalid', String(!valid));
  if (!valid) return;

  TVViewingDistance.recommendations(metres).forEach((result, i) => {
    const card = document.createElement('article');
    const title = document.createElement('h2');
    title.textContent = words.references[i] + ' · ' + result.angle + '°';
    const size = document.createElement('p');
    size.className = 'size';
    size.textContent = result.inches + (chinese ? ' 吋' : '″');
    const dimensions = document.createElement('p');
    dimensions.textContent = result.width.toFixed(1) + ' × ' + result.height.toFixed(1) + ' cm';
    const angle = document.createElement('p');
    angle.textContent = (chinese ? '實際水平視角 ' : 'Actual horizontal angle ') + result.actualAngle.toFixed(1) + '°';
    card.append(title, size, dimensions, angle);
    if (result.outsideRange) {
      const edge = document.createElement('p');
      edge.textContent = words.edge;
      card.append(edge);
    }
    results.append(card);
  });
}

function renderLanguage() {
  const words = chinese ? copy.zh : copy.en;
  document.documentElement.lang = chinese ? 'zh-Hant' : 'en';
  document.title = words.title + ' | Elechid 音立';
  for (const key of ['title', 'intro', 'label', 'notes']) byId(key).textContent = words[key];
  results.setAttribute('aria-label', words.resultLabel);
  const language = byId('language');
  language.textContent = chinese ? 'English' : '繁體中文';
  language.lang = chinese ? 'en' : 'zh-Hant';
  const base = 'https://elechid.com' + (chinese ? '' : '/en');
  const paths = [
    '/pages/tv-size-calculator', '/collections/65-inch-smart-tv',
    '/collections/75-inch-smart-tv', '/blogs/news/large-tv-lift-staircase-measurement-hong-kong',
  ];
  byId('brand').href = base + paths[0];
  byId('links').replaceChildren(...paths.map((path, i) => {
    const link = document.createElement('a');
    link.href = base + path;
    link.textContent = words.links[i];
    return link;
  }));
  renderResults();
}

byId('language').addEventListener('click', () => {
  chinese = !chinese;
  renderLanguage();
});
distance.addEventListener('input', renderResults);
renderLanguage();
