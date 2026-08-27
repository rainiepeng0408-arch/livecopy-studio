const TONE_META = {
  promo: { hint: '热闹促销：折扣感和紧迫感更强，西语文案和按钮最容易被撑破。' },
  gentle: { hint: '温柔陪伴：少催促、少感叹号。日语会走礼貌体，更适合夜间陪伴场。' },
  shop: { hint: '清晰导购：先说动作再说利益。适合商品卡和「点这里看款」。' }
};

const LOCALES = [
  {
    id: 'en',
    label: 'US / English',
    short: 'EN',
    dir: 'ltr',
    live: 'LIVE',
    username: '@qingyu.live',
    music: '♪ original sound · qingyu',
    share: 'Share',
    culture: '美区直播可以用直接的折扣数字，但「今晚截止」要能兑现；夸大倒计时会被判误导。',
    comments: ['just joined 💕', 'is this 50% stacked?', 'link in the bag??']
  },
  {
    id: 'zh',
    label: '中文',
    short: 'ZH',
    dir: 'ltr',
    live: '直播',
    username: '@qingyu.live',
    music: '♪ 原创音乐 · qingyu',
    share: '分享',
    culture: '中文直播更吃口语节奏，「家人们」能拉近关系；硬广数字可以保留，但避免恐吓式倒计时。',
    comments: ['来了来了', '这波可以冲', '主播再转转款']
  },
  {
    id: 'ja',
    label: '日本 / 日本語',
    short: 'JA',
    dir: 'ltr',
    live: 'LIVE',
    username: '@qingyu.live',
    music: '♪ オリジナル楽曲 · qingyu',
    share: 'シェア',
    culture: '日语直播少用命令句。促销也常用です/ます；「今すぐ買え」会显得很冲，フォロー誘導更常见。',
    comments: ['来ました〜', '割引って本日限り？', 'かわいい']
  },
  {
    id: 'ko',
    label: '한국 / 한국어',
    short: 'KO',
    dir: 'ltr',
    live: 'LIVE',
    username: '@qingyu.live',
    music: '♪ 원작 음악 · qingyu',
    share: '공유',
    culture: '韩语直播语气可以热，但要分清半语和敬语。数字折扣很有效，按钮尽量短，用「참여」比长句更稳。',
    comments: ['왔어요!', '할인 실화?', '장바구니 링크요']
  },
  {
    id: 'es',
    label: 'LATAM / Español',
    short: 'ES',
    dir: 'ltr',
    live: 'EN VIVO',
    username: '@qingyu.live',
    music: '♪ sonido original · qingyu',
    share: 'Compartir',
    culture: '西语比英文长 20–30%，按钮最容易截断。拉美直播爱热情，但要避开过于侵略的命令式，且注意地区用词。',
    comments: ['recién llego', '¿el descuento es real?', 'quiero el link']
  }
];

const COPY = {
  en: {
    promo: {
      sale: { caption: 'Live now — 50% off tonight only. Don’t miss it.', cta: 'Grab 50% off' },
      join: { caption: 'We’re live. Jump in before tonight’s drop ends.', cta: 'Join live' },
      gift: { caption: 'Live giveaway energy tonight. Come hang.', cta: 'Join for gifts' },
      follow: { caption: 'Live with me tonight — follow so you don’t miss the drop.', cta: 'Follow & join' },
      generic: { caption: 'Come hang in the live. Tonight feels special.', cta: 'Join live' }
    },
    gentle: {
      sale: { caption: 'If you’re around tonight, we’re softly restocking favorites at 50% off.', cta: 'Peek the live' },
      join: { caption: 'The room is warm tonight. Come sit with us when you’re ready.', cta: 'Come say hi' },
      gift: { caption: 'A few little surprises in the live, no rush.', cta: 'Come sit' },
      follow: { caption: 'I’ll be here tonight. Follow if you want a quiet reminder.', cta: 'Stay with me' },
      generic: { caption: 'Soft lighting, slow chat. The live is open.', cta: 'Come sit' }
    },
    shop: {
      sale: { caption: 'Tap to see tonight’s 50% off pieces. Stock updates in the live.', cta: 'See 50% off' },
      join: { caption: 'Open the live to browse what’s on camera and add to bag.', cta: 'Browse live' },
      gift: { caption: 'Watch the live to see gift drops and how to claim.', cta: 'See gifts' },
      follow: { caption: 'Follow, then open live to get restock alerts on camera.', cta: 'Follow to shop' },
      generic: { caption: 'Everything on camera can be added from the live bag.', cta: 'Open live bag' }
    }
  },
  zh: {
    promo: {
      sale: { caption: '直播间现在有今晚限定五折，错过今晚就没了。', cta: '进直播抢五折' },
      join: { caption: '来了来了，今晚直播间福利正在发。', cta: '来直播间' },
      gift: { caption: '今晚直播间有礼物雨，速来围观。', cta: '进房领礼物' },
      follow: { caption: '先关注再进房，今晚掉货提醒不漏。', cta: '关注并进入' },
      generic: { caption: '直播间热闹起来了，家人们来坐坐。', cta: '进直播间' }
    },
    gentle: {
      sale: { caption: '今晚直播间有五折悄悄补货，路过可以看看。', cta: '进来看看' },
      join: { caption: '灯已经开了，想聊天的时候再进来就好。', cta: '来坐坐' },
      gift: { caption: '直播间有一点小心意，不着急。', cta: '来坐坐' },
      follow: { caption: '想被轻轻提醒的话，关注一下就好。', cta: '关注陪伴' },
      generic: { caption: '直播间很安静，欢迎来发呆。', cta: '来坐坐' }
    },
    shop: {
      sale: { caption: '点进来看今晚五折款，库存会在镜头前更新。', cta: '看五折款' },
      join: { caption: '打开直播间即可边看边加购镜头里的单品。', cta: '去看款' },
      gift: { caption: '打开直播间查看赠品和领取方式。', cta: '看赠品' },
      follow: { caption: '关注后进直播，补货会在镜头里说。', cta: '关注看款' },
      generic: { caption: '镜头里的单品都可以从直播购物袋加购。', cta: '打开购物袋' }
    }
  },
  ja: {
    promo: {
      sale: { caption: '今夜限定で50%OFF。ライブ配信中です。', cta: 'ライブを見る' },
      join: { caption: '配信スタートしました。今夜のうちに遊びに来てください。', cta: 'ライブへ' },
      gift: { caption: '今夜のライブでプレゼント企画をしています。', cta: 'ギフトを見る' },
      follow: { caption: 'フォローしておくと、今夜の入荷をお知らせできます。', cta: 'フォローする' },
      generic: { caption: 'ライブ配信中です。よかったら遊びに来てください。', cta: 'ライブへ' }
    },
    gentle: {
      sale: { caption: '今夜はお気に入りを50%OFFで、ゆっくりご紹介しています。', cta: 'のぞいてみる' },
      join: { caption: 'お部屋、あたたかいです。気が向いたら遊びに来てくださいね。', cta: 'こんにちは' },
      gift: { caption: '小さなプレゼントもあります。急がなくて大丈夫です。', cta: 'ゆっくり見る' },
      follow: { caption: 'よければフォローしてください。リマインドだけお送りします。', cta: 'フォローする' },
      generic: { caption: 'ゆっくりお話しています。よければご一緒に。', cta: '一緒にいる' }
    },
    shop: {
      sale: { caption: '今夜の50%OFFアイテムは、ライブから確認できます。', cta: '商品を見る' },
      join: { caption: 'ライブを開くと、映っている商品をカートに入れられます。', cta: '商品を見る' },
      gift: { caption: '特典の受け取り方法はライブでご案内しています。', cta: '特典を見る' },
      follow: { caption: 'フォロー後にライブを開くと、入荷をお伝えできます。', cta: 'フォローする' },
      generic: { caption: '映っている商品はライブのバッグから追加できます。', cta: 'バッグを開く' }
    }
  },
  ko: {
    promo: {
      sale: { caption: '오늘 밤만 50% 할인, 지금 라이브 중이에요.', cta: '라이브 참여' },
      join: { caption: '라이브 시작했어요. 오늘 밤 혜택 놓치지 마세요.', cta: '참여하기' },
      gift: { caption: '오늘 라이브에서 선물 이벤트 진행 중!', cta: '선물 보기' },
      follow: { caption: '팔로우하면 오늘 재입고 알려드릴게요.', cta: '팔로우' },
      generic: { caption: '라이브 켜뒀어요. 놀러 오세요.', cta: '참여하기' }
    },
    gentle: {
      sale: { caption: '오늘 밤은 50%로 천천히 소개하고 있어요.', cta: '살짝 보기' },
      join: { caption: '방 분위기 따뜻해요. 편할 때 들러요.', cta: '인사하기' },
      gift: { caption: '작은 선물도 있어요. 서두르지 않아도 돼요.', cta: '둘러보기' },
      follow: { caption: '알림만 받아도 괜찮아요. 팔로우 부탁해요.', cta: '팔로우' },
      generic: { caption: '천천히 이야기 중이에요. 같이 있어 줄래요?', cta: '함께하기' }
    },
    shop: {
      sale: { caption: '오늘 50% 상품은 라이브에서 바로 볼 수 있어요.', cta: '상품 보기' },
      join: { caption: '라이브를 열면 화면에 나온 상품을 담을 수 있어요.', cta: '상품 보기' },
      gift: { caption: '증정 받는 방법은 라이브에서 안내해요.', cta: '혜택 보기' },
      follow: { caption: '팔로우 후 라이브에서 재입고를 알려요.', cta: '팔로우' },
      generic: { caption: '화면에 있는 상품은 라이브 백에서 담아요.', cta: '백 열기' }
    }
  },
  es: {
    promo: {
      sale: { caption: 'En vivo ahora: 50% de descuento solo esta noche. ¡No te lo pierdas!', cta: 'Aprovecha el 50% ahora' },
      join: { caption: 'Ya estamos en vivo. Entra antes de que se acabe la noche.', cta: 'Únete al vivo ahora' },
      gift: { caption: 'Esta noche hay regalos en el vivo. Ven a verlos.', cta: 'Entra por regalos' },
      follow: { caption: 'Sígueme y entra al vivo para no perder el drop de esta noche.', cta: 'Sígueme y entra' },
      generic: { caption: 'El vivo ya empezó. Ven a acompañarnos esta noche.', cta: 'Únete al vivo' }
    },
    gentle: {
      sale: { caption: 'Esta noche reponemos con calma favoritos al 50%. Si pasas, te esperamos.', cta: 'Mira el vivo' },
      join: { caption: 'La sala está cálida. Entra cuando quieras saludar.', cta: 'Ven a saludar' },
      gift: { caption: 'Hay unas sorpresitas en el vivo, sin prisa.', cta: 'Pasa a ver' },
      follow: { caption: 'Si quieres un recordatorio suave, sígueme y nos vemos esta noche.', cta: 'Quédate cerca' },
      generic: { caption: 'Luz bajita y charla lenta. El vivo está abierto.', cta: 'Ven a sentarte' }
    },
    shop: {
      sale: { caption: 'Entra para ver las prendas con 50% de esta noche. El stock se actualiza en cámara.', cta: 'Ver el 50% de descuento' },
      join: { caption: 'Abre el vivo para ver lo que está en cámara y añadirlo a la bolsa.', cta: 'Ver productos' },
      gift: { caption: 'Mira el vivo para saber cómo reclamar los regalos.', cta: 'Ver regalos' },
      follow: { caption: 'Sígueme y abre el vivo para avisos de reposición en cámara.', cta: 'Seguir para comprar' },
      generic: { caption: 'Todo lo que aparece en cámara se puede añadir desde la bolsa del vivo.', cta: 'Abrir la bolsa' }
    }
  }
};

const sourceText = document.getElementById('sourceText');
const translatedTextEl = document.getElementById('translatedText');
const charCountEl = document.getElementById('charCount');
const captionLimitInput = document.getElementById('captionLimit');
const buttonLimitInput = document.getElementById('buttonLimit');
const ctaButton = document.getElementById('ctaButton');
const copyBtn = document.getElementById('copyBtn');
const statusEl = document.getElementById('status');
const marketGrid = document.getElementById('marketGrid');
const issueList = document.getElementById('issueList');
const cultureNote = document.getElementById('cultureNote');
const toneHint = document.getElementById('toneHint');
const measureCta = document.getElementById('measureCta');
const measureCaption = document.getElementById('measureCaption');

let currentLang = 'en';
let currentTone = 'promo';
let debounceTimer = null;
let lastPacks = [];

function classify(text) {
  const t = text.toLowerCase();
  if (/gift|giveaway|regalo|선물|プレゼント|礼物/.test(t)) return 'gift';
  if (/follow|フォロー|팔로우|关注/.test(t)) return 'follow';
  if (/%|off|sale|discount|descuento|할인|割引|五折|折扣/.test(t)) return 'sale';
  if (/join|live|vivo|라이브|ライブ|直播/.test(t)) return 'join';
  return 'generic';
}

function localize(source, localeId, tone) {
  const kind = classify(source);
  const pack = COPY[localeId][tone][kind];
  return { caption: pack.caption, cta: pack.cta, kind };
}

function estimateLines(text) {
  measureCaption.textContent = text || ' ';
  const styles = getComputedStyle(measureCaption);
  const line = parseFloat(styles.lineHeight) || 20;
  return Math.max(1, Math.round(measureCaption.scrollHeight / line));
}

function ctaOverflows(text, maxWidth) {
  measureCta.textContent = text || '';
  measureCta.style.maxWidth = 'none';
  return measureCta.getBoundingClientRect().width > maxWidth;
}

function qaFor(pack, source) {
  const captionLimit = Number(captionLimitInput.value) || 3;
  const buttonLimit = Number(buttonLimitInput.value) || 168;
  const lines = estimateLines(pack.caption);
  const buttonOverflow = ctaOverflows(pack.cta, buttonLimit);
  const issues = [];

  if (buttonOverflow) {
    issues.push({ level: 'bad', text: `按钮「${pack.cta}」超出 ${buttonLimit}px，线上会被裁成省略号。` });
  }
  if (lines > captionLimit) {
    issues.push({ level: 'warn', text: `字幕约 ${lines} 行，超过上限 ${captionLimit} 行，可能挡住商品卡。` });
  }
  if (!source.trim()) {
    issues.push({ level: 'warn', text: '还没有输入意图。' });
  }
  if (!issues.length) {
    issues.push({ level: 'ok', text: '按钮宽度和字幕行数都还安全。' });
  }

  return { lines, buttonOverflow, issues };
}

function renderComments(locale) {
  const root = document.getElementById('commentStream');
  root.innerHTML = locale.comments
    .slice(0, 3)
    .map((c) => `<div class="live-comment">${c}</div>`)
    .join('');
}

function renderFocus(pack) {
  const locale = LOCALES.find((l) => l.id === currentLang);
  const screen = document.getElementById('phoneScreen');
  screen.dir = locale.dir;
  screen.className = `phone-screen lang-${locale.id}`;
  document.getElementById('livePill').textContent = locale.live;
  document.getElementById('username').textContent = locale.username;
  document.getElementById('musicRow').textContent = locale.music;
  document.getElementById('shareLabel').textContent = locale.share;
  document.getElementById('focusMarket').textContent = locale.label + (pack.ai ? ' · ✨ AI 生成' : '');
  translatedTextEl.textContent = pack.caption;
  ctaButton.textContent = pack.cta;
  ctaButton.classList.toggle('is-overflow', pack.qa.buttonOverflow);
  charCountEl.textContent = `${pack.caption.length} 字 · ${pack.qa.lines} 行`;
  cultureNote.textContent = locale.culture;
  issueList.innerHTML = pack.qa.issues
    .map((i) => `<li class="${i.level}">${i.text}</li>`)
    .join('');
  renderComments(locale);
}

function renderGrid(packs) {
  marketGrid.innerHTML = packs.map((pack) => {
    const locale = LOCALES.find((l) => l.id === pack.id);
    const badge = pack.qa.buttonOverflow
      ? '<span class="badge bad">按钮溢出</span>'
      : pack.qa.lines > Number(captionLimitInput.value)
        ? '<span class="badge warn">字幕过长</span>'
        : '<span class="badge ok">可上</span>';
    const aiBadge = pack.ai ? '<span class="badge ai">✨ AI</span>' : '';
    const active = pack.id === currentLang ? ' active' : '';
    const risk = pack.qa.buttonOverflow ? ' risk' : '';
    return `
      <button class="market-card${active}${risk}" data-lang="${pack.id}" type="button">
        <div class="market-top">
          <span class="market-name">${locale.short}</span>
          <span class="badges">${aiBadge}${badge}</span>
        </div>
        <p class="mini-caption">${pack.caption}</p>
        <span class="mini-cta">${pack.cta}</span>
        <p class="mini-note">${locale.culture}</p>
      </button>
    `;
  }).join('');
}

function updatePreview() {
  const source = sourceText.value.trim();
  lastPacks = LOCALES.map((locale) => {
    const copy = localize(source || 'Come hang in the live.', locale.id, currentTone);
    const qa = qaFor(copy, source);
    return { id: locale.id, ...copy, qa };
  });

  /* AI 引擎开启时：用当前语气的缓存结果覆盖规则引擎产出（来源一致才生效） */
  if (AI.engine === 'ai') {
    const cached = AI.results.get(currentTone);
    if (cached && cached.source === (source || 'Come hang in the live.')) {
      lastPacks = lastPacks.map((p) => {
        const aiPack = cached.byLocale[p.id];
        return aiPack ? { ...p, ...aiPack, qa: qaFor(aiPack, source) } : p;
      });
    } else if (!AI.running && typeof aiStatus !== 'undefined') {
      aiStatus.textContent = '当前意图/语气还没有 AI 结果，点「✨ AI 生成」用大模型重写五个市场。';
    }
  }

  const focus = lastPacks.find((p) => p.id === currentLang);
  renderFocus(focus);
  renderGrid(lastPacks);
}

document.querySelectorAll('.tone-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.tone-btn.active').classList.remove('active');
    btn.classList.add('active');
    currentTone = btn.dataset.tone;
    toneHint.textContent = TONE_META[currentTone].hint;
    updatePreview();
  });
});

marketGrid.addEventListener('click', (e) => {
  const card = e.target.closest('[data-lang]');
  if (!card) return;
  currentLang = card.dataset.lang;
  updatePreview();
});

sourceText.addEventListener('input', () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(updatePreview, 180);
});
captionLimitInput.addEventListener('change', updatePreview);
buttonLimitInput.addEventListener('change', updatePreview);

copyBtn.addEventListener('click', async () => {
  const pack = lastPacks.find((p) => p.id === currentLang);
  const text = `${pack.caption}\n${pack.cta}`;
  try {
    await navigator.clipboard.writeText(text);
    statusEl.textContent = '已复制该市场字幕和按钮';
  } catch {
    statusEl.textContent = '复制失败';
  }
  setTimeout(() => { statusEl.textContent = ''; }, 2000);
});

document.getElementById('likeBtn').addEventListener('click', () => {
  const btn = document.getElementById('likeBtn');
  btn.classList.toggle('active');
  document.getElementById('likeCount').textContent = btn.classList.contains('active') ? '12.8万' : '12.7万';
});

document.getElementById('saveBtn').addEventListener('click', () => {
  const btn = document.getElementById('saveBtn');
  btn.classList.toggle('active');
  document.getElementById('saveCount').textContent = btn.classList.contains('active') ? '9613' : '9612';
});

document.getElementById('commentBtn').addEventListener('click', () => {
  const locale = LOCALES.find((l) => l.id === currentLang);
  locale.comments.push(locale.comments.shift());
  renderComments(locale);
});

/* ============================================================
   AI 双引擎：规则引擎离线兜底 + OpenAI 兼容大模型现场生成
   密钥只存本机 localStorage，请求直连所选供应商
   ============================================================ */

const AI_PROVIDERS = {
  glm: { label: '智谱 GLM', baseURL: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4-flash' },
  deepseek: { label: 'DeepSeek', baseURL: 'https://api.deepseek.com', model: 'deepseek-chat' },
  kimi: { label: '月之暗面 Kimi', baseURL: 'https://api.moonshot.cn/v1', model: 'moonshot-v1-8k' },
  qwen: { label: '通义千问', baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus' },
  openai: { label: 'OpenAI', baseURL: 'https://api.openai.com/v1', model: 'gpt-4o-mini' },
  custom: { label: '自定义', baseURL: '', model: '' }
};

const TONE_PROMPTS = {
  promo: '热闹促销：折扣感和紧迫感强，节奏快',
  gentle: '温柔陪伴：少催促、少感叹号，像朋友间的温和邀请',
  shop: '清晰导购：先说动作再说利益，像耐心的商品导购'
};

const AI = { engine: 'rules', results: new Map(), running: false };

const aiSettings = document.getElementById('aiSettings');
const aiProvider = document.getElementById('aiProvider');
const aiKey = document.getElementById('aiKey');
const aiModel = document.getElementById('aiModel');
const aiBase = document.getElementById('aiBase');
const aiBaseRow = document.getElementById('aiBaseRow');
const aiGenerate = document.getElementById('aiGenerate');
const aiStatus = document.getElementById('aiStatus');

function loadAIPrefs() {
  const saved = localStorage.getItem('livecopy_ai_provider');
  aiProvider.value = AI_PROVIDERS[saved] ? saved : 'glm';
  aiKey.value = localStorage.getItem('livecopy_ai_key') || '';
  applyProviderDefaults();
}

function applyProviderDefaults() {
  const cfg = AI_PROVIDERS[aiProvider.value];
  aiModel.value = cfg.model;
  aiBase.value = cfg.baseURL;
  aiBaseRow.hidden = aiProvider.value !== 'custom';
}

function saveAIPrefs() {
  localStorage.setItem('livecopy_ai_provider', aiProvider.value);
  localStorage.setItem('livecopy_ai_key', aiKey.value.trim());
  localStorage.setItem('livecopy_ai_model', aiModel.value.trim());
  localStorage.setItem('livecopy_ai_base', aiBase.value.trim());
}

async function callLLM(source, locale, tone) {
  const cfg = AI_PROVIDERS[aiProvider.value];
  const baseURL = (aiProvider.value === 'custom' ? aiBase.value.trim() : cfg.baseURL).replace(/\/+$/, '');
  const key = aiKey.value.trim();
  const model = aiModel.value.trim() || cfg.model;
  if (!baseURL || !key) throw new Error('缺少 Base URL 或 API Key');

  const system = '你是 TikTok 直播电商的资深本地化文案专家，为不同市场重写直播文案：不逐词翻译，按当地口语习惯重新创作。只输出一个 JSON 对象，格式 {"caption":"...","cta":"..."}，不要输出解释、markdown 或任何多余内容。';
  const user = `英文直播意图：${source}
目标市场：${locale.label}（必须使用该市场的语言撰写）
语气：${TONE_PROMPTS[tone]}
文化要求（务必遵守）：${locale.culture}
硬性约束：caption 是直播画面底部字幕，控制在 25 个字/词以内；cta 是红色按钮上的文字，不超过 4 个字/词，短促有力。
现在输出 JSON。`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 30000);
  let res;
  try {
    res = await fetch(baseURL + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user }
        ],
        temperature: 0.8
      }),
      signal: controller.signal
    });
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) throw new Error('HTTP ' + res.status);
  const data = await res.json();
  const text = (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || '';
  const match = text.match(/\{[\s\S]*?\}/);
  if (!match) throw new Error('未返回 JSON');
  const parsed = JSON.parse(match[0]);
  const caption = String(parsed.caption || '').trim();
  const cta = String(parsed.cta || '').trim();
  if (!caption || !cta) throw new Error('JSON 内容为空');
  return { caption, cta };
}

async function aiGenerateAll() {
  if (AI.running) return;
  if (!aiKey.value.trim()) {
    aiStatus.textContent = '请先填写 API Key（在上方选择供应商后填入）';
    return;
  }
  const source = sourceText.value.trim() || 'Come hang in the live.';
  AI.running = true;
  aiGenerate.disabled = true;
  aiStatus.textContent = 'AI 正在为五个市场撰写文案，约需 5–20 秒…';

  const tone = currentTone;
  const results = await Promise.all(LOCALES.map(async (locale) => {
    try {
      const pack = await callLLM(source, locale, tone);
      return { id: locale.id, caption: pack.caption, cta: pack.cta, ai: true };
    } catch (err) {
      return { id: locale.id, error: err.message };
    }
  }));

  const byLocale = {};
  let ok = 0;
  results.forEach((r) => { if (r.caption) { byLocale[r.id] = r; ok += 1; } });

  if (!ok) {
    const firstErr = (results.find((r) => r.error) || {}).error || '未知错误';
    aiStatus.textContent = `五个市场全部失败（原因：${firstErr}）。请检查 Key 是否完整、账户是否可用。已保持规则引擎结果。`;
    AI.running = false;
    aiGenerate.disabled = false;
    return;
  }

  AI.results.set(tone, { byLocale, source });
  updatePreview();
  const failed = LOCALES.length - ok;
  aiStatus.textContent = failed
    ? `生成完成：${ok} 个市场来自 AI，${failed} 个失败市场已回退规则引擎。`
    : '生成完成 ✨ AI 文案同样要过像素校验——红黄标照样会亮。';
  AI.running = false;
  aiGenerate.disabled = false;
}

document.querySelectorAll('.engine-pill').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.engine-pill.active').classList.remove('active');
    btn.classList.add('active');
    AI.engine = btn.dataset.engine;
    aiSettings.hidden = AI.engine !== 'ai';
    updatePreview();
  });
});

aiProvider.addEventListener('change', () => {
  applyProviderDefaults();
  saveAIPrefs();
});
[aiKey, aiModel, aiBase].forEach((input) => input.addEventListener('change', saveAIPrefs));
aiGenerate.addEventListener('click', aiGenerateAll);

loadAIPrefs();

updatePreview();
