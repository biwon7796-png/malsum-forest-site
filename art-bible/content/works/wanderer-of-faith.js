/* ART-BIBLE-008 · 떠나는 사람의 믿음 — 프리드리히 · 슈베르트 《방랑자 환상곡》 · 창세기 12:1–9
   승인된 상세 편집 기획 v0.2에 따라 제작하고 Captain이 2026-11-15 공개를 승인한 기본편. */
ArtBook.register({
  id: "wanderer-of-faith",

  meta: {
    status: "candidate",
    summary: "안개 앞에 선 방랑자의 뒷모습과 슈베르트의 긴장 어린 선율을 지나, 목적지를 다 알지 못한 채 부르심에 응답한 아브람의 출발에 머뭅니다.",
    themes: ["부르심", "출발", "믿음"],
    tags: ["떠나라", "아브람", "가나안", "약속", "복", "장막", "제단", "프리드리히", "안개 바다 위의 방랑자", "슈베르트", "방랑자 환상곡", "천로역정"],
    bible: { books: ["창세기"], bookAliases: ["창"], ranges: ["창세기 12:1–9"], related: ["창세기 11:27–32", "사도행전 7:2–5", "히브리서 11:8–10", "갈라디아서 3:8"] },
    art: { artist: "카스파르 다비트 프리드리히", artistAliases: ["프리드리히", "Caspar David Friedrich"], title: "안개 바다 위의 방랑자", titleAliases: ["Wanderer above the Sea of Fog", "Der Wanderer über dem Nebelmeer"], year: "약 1817" },
    music: { composer: "프란츠 슈베르트", composerAliases: ["슈베르트", "Franz Schubert"], work: "방랑자 환상곡", workAliases: ["Wanderer-Fantasie", "Fantasy in C major", "D. 760", "Op. 15"] },
    cover: { src: "assets/wanderer-480.jpg", alt: "안개가 가득한 바위산을 등지고 바라보는 한 사람의 뒷모습" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "기본편 · Captain 공개 승인본",
  title: "떠나는 사람의 믿음",
  passage: "창세기 12:1–9",
  themes: "부르심 · 출발 · 믿음",

  scenes: [
    { id: "s1", name: "바라보다" }, { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" }, { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/wanderer-1280.jpg", srcset: "assets/wanderer-480.jpg 480w, assets/wanderer-1280.jpg 1280w", zoom: "assets/wanderer-1280.jpg",
      width: 1280, height: 1642,
      alt: "짙은 초록 외투를 입고 지팡이를 든 남자가 바위 위에 등을 보인 채 서 있다. 발아래에는 흰 안개가 바다처럼 골짜기를 덮고, 안개 사이로 날카로운 암봉과 먼 산등성이가 겹쳐 보인다."
    },
    caption: {
      artist: "카스파르 다비트 프리드리히 (Caspar David Friedrich, 1774–1840)",
      work: "《안개 바다 위의 방랑자》 (Wanderer über dem Nebelmeer)",
      meta: "약 1817년 · 캔버스에 유채 · 94.8 × 74.8 cm",
      owner: "함부르크 미술관 소장 · 작품번호 HK-5161",
      notes: ["그림 파일은 Wikimedia Commons가 Public Domain Mark로 제공하는 충실한 복제본입니다. 미술관의 별도 권리 사진은 사용하지 않았고, 비율과 색을 유지한 채 화면 크기만 줄였습니다."]
    },
    prompt: "인물의 발밑 바위에서 시작해 지팡이와 뒷모습, 안개 사이의 봉우리, 가장 먼 산 순서로 천천히 바라보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "한 사람이 높은 바위 위에 멈춰 섰지만, 그의 앞길은 안개 속에 감춰져 있습니다.",
    items: [
      { tag: "사실", text: "프리드리히는 약 1817년에 이 유화를 그렸습니다. 화면 중앙의 인물은 관람자에게 등을 보이는 ‘뒷모습 인물’로, 우리가 그와 함께 풍경을 바라보게 합니다." },
      { tag: "관찰", text: "짙은 외투와 지팡이가 인물을 또렷한 수직선으로 세웁니다. 가까운 바위는 날카롭고 단단하지만, 그 너머의 골짜기와 산은 흰 안개 속에서 나타났다 사라집니다." },
      { tag: "해석", text: "높은 곳에 올랐다고 해서 모든 길이 보이는 것은 아닙니다. 정복자의 자세와 망설이는 여행자의 자세가 한 화면에 겹치며, 보이는 것보다 보이지 않는 것이 더 넓게 남습니다." },
      { tag: "연결", text: "이 풍경은 목적지를 다 알지 못한 채 떠나는 믿음을 생각하게 합니다. 그러나 그림은 창세기 장면의 삽화가 아니며, 프리드리히가 아브람을 그렸다고 볼 근거도 없습니다." },
      { tag: "구별", text: "그림 속 방랑자는 홀로 서 있지만, 창세기의 아브람은 사래와 롯, 사람들과 소유를 이끌고 떠납니다. 성경의 출발을 개인 영웅의 모험으로 축소하지 않습니다." }
    ],
    again: "다시 보세요. 선명하게 보이는 가까운 것과 안개에 가려진 먼 것을 하나씩 구별해 보세요."
  },

  listen: {
    work: "프란츠 슈베르트 · 《방랑자 환상곡》 C장조, Op. 15, D. 760",
    titleDe: "Wanderer-Fantasie, Op. 15, D. 760",
    titleKo: "방랑자 환상곡 — 전곡",
    items: [
      { tag: "사실", text: "슈베르트는 1822년 네 부분이 끊이지 않고 이어지는 이 피아노 환상곡을 썼습니다. 둘째 부분의 중심 선율은 자신의 가곡 《방랑자》 D. 489에서 가져왔고, 그 리듬과 음형이 작품 전체를 다른 모습으로 관통합니다." },
      { tag: "관찰", text: "첫 화음부터 강한 리듬이 앞으로 밀고 나갑니다. 빠른 음형이 길을 재촉하는 듯 이어지다가도, 밝음과 어두움, 확신과 흔들림이 짧은 틈마다 교차합니다." },
      { tag: "해석", text: "방랑은 한 방향의 행진으로만 들리지 않습니다. 같은 재료가 계속 변형되어 돌아오면서, 떠남이 바깥의 이동인 동시에 내면의 긴장과 질문임을 느끼게 합니다." },
      { tag: "감상", text: "이 음악을 아브람의 배경음악으로 단정하지 않습니다. 낭만주의 음악이 빚은 방랑의 정서와, 하나님의 말씀과 약속에 응답한 창세기의 출발 사이의 닮음과 차이를 함께 들어 보세요." }
    ],
    duration: "전체 21분 35초",
    channel: "Claudius Tanski 공식 제공",
    playLabel: "방랑자의 선율 감상하기",
    embedTitle: "슈베르트 방랑자 환상곡 전곡 — 클라우디우스 탄스키",
    performance: "연주: 클라우디우스 탄스키 · 피아니스트가 직접 제공하고 G. Henle 출판사가 소개한 전곡 영상",
    videoId: "3mU1sMDjIeY",
    externalPlayUrl: "https://www.youtube.com/watch?v=3mU1sMDjIeY",
    links: [
      { label: "피아니스트 제공 전곡 영상", url: "https://www.youtube.com/watch?v=3mU1sMDjIeY" },
      { label: "G. Henle 연주·작품 해설", url: "https://blog.henle.de/en/2021/05/24/schuberts-wanderer-fantasy-and-the-challenges-of-an-urtext-edition/" }
    ],
    note: "버튼을 누르기 전에는 영상과 소리가 불러와지지 않습니다. 자동재생하지 않으며 음원 파일을 저장하지 않습니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)", range: "창세기 12:1–9",
      lines: [
        { v: 1, t: "여호와께서 아브람에게 이르시되 너는 너의 본토 친척 아비 집을 떠나 내가 네게 지시할 땅으로 가라" },
        { v: 2, t: "내가 너로 큰 민족을 이루고 네게 복을 주어 네 이름을 창대케 하리니 너는 복의 근원이 될찌라" },
        { v: 3, t: "너를 축복하는 자에게는 내가 복을 내리고 너를 저주하는 자에게는 내가 저주하리니 땅의 모든 족속이 너를 인하여 복을 얻을 것이니라 하신지라" },
        { v: 4, t: "이에 아브람이 여호와의 말씀을 좇아 갔고 롯도 그와 함께 갔으며 아브람이 하란을 떠날 때에 그 나이 칠십 오세였더라" },
        { v: 5, t: "아브람이 그 아내 사래와 조카 롯과 하란에서 모은 모든 소유와 얻은 사람들을 이끌고 가나안 땅으로 가려고 떠나서 마침내 가나안 땅에 들어 갔더라" },
        { v: 6, t: "아브람이 그 땅을 통과하여 세겜 땅 모레 상수리나무에 이르니 그 때에 가나안 사람이 그 땅에 거하였더라" },
        { v: 7, t: "여호와께서 아브람에게 나타나 가라사대 내가 이 땅을 네 자손에게 주리라 하신지라 그가 자기에게 나타나신 여호와를 위하여 그 곳에 단을 쌓고" },
        { v: 8, t: "거기서 벧엘 동편 산으로 옮겨 장막을 치니 서는 벧엘이요 동은 아이라 그가 그 곳에서 여호와를 위하여 단을 쌓고 여호와의 이름을 부르더니" },
        { v: 9, t: "점점 남방으로 옮겨 갔더라" }
      ]
    },
    intro: "본문은 아브람의 용기보다 먼저 하나님의 명령과 약속을 놓습니다. 떠남은 모든 지도를 받은 뒤의 이동이 아니라, ‘내가 네게 지시할 땅’이라는 말씀을 따라 시작된 응답입니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "12:1", items: [
        { tag: "본문", text: "하나님은 아브람에게 본토와 친척과 아비 집을 떠나, 하나님이 지시하실 땅으로 가라고 말씀하십니다." },
        { tag: "관찰", text: "목적지의 이름보다 먼저 떠나라는 명령이 주어집니다. 아브람의 출발은 방랑 충동이나 자기 실현이 아니라 하나님의 부르심에서 시작됩니다." }
      ]},
      { ref: "12:2–3", items: [
        { tag: "본문", text: "큰 민족, 복, 창대한 이름의 약속은 아브람 개인에게서 닫히지 않습니다. 땅의 모든 족속이 그를 인하여 복을 얻는 데까지 뻗어 갑니다." },
        { tag: "해석", text: "선택은 특권의 울타리가 아니라 복이 흘러갈 통로를 세우는 부르심입니다. 하나님이 약속의 주체이고, 아브람은 그 약속에 응답합니다." }
      ]},
      { ref: "12:4–6", items: [
        { tag: "본문", text: "아브람은 일흔다섯 살에 말씀을 좇아 떠납니다. 사래와 롯, 소유와 사람들이 함께하며, 가나안 땅에는 이미 가나안 사람이 살고 있습니다." },
        { tag: "관찰", text: "이 출발은 혼자만의 낭만적 모험이 아닙니다. 관계와 삶의 무게를 동반한 이동이며, 약속의 땅도 비어 있는 무대처럼 소개되지 않습니다." }
      ]},
      { ref: "12:7–9", items: [
        { tag: "본문", text: "여호와께서 나타나 약속을 다시 말씀하시자 아브람은 단을 쌓습니다. 이어 장막을 치고, 단을 쌓고, 여호와의 이름을 부르며 남방으로 옮겨 갑니다." },
        { tag: "해석", text: "장막은 계속되는 여정을, 제단은 그 길에서 하나님께 응답하는 예배를 보여 줍니다. 믿음의 출발은 한 번의 결단으로 끝나지 않고 이동과 예배의 리듬으로 이어집니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "창세기 11:27–32", tag: "배경", text: "아브람의 가족과 하란까지의 이동을 먼저 보여 줍니다. 창세기 12장의 부르심은 가족사와 실제 장소의 맥락 안에 놓입니다." },
      { ref: "사도행전 7:2–5", tag: "연결", text: "스데반은 하나님이 아브라함에게 나타나 떠나게 하셨고, 당시에는 발붙일 만큼의 유업도 주지 않으셨다고 회고합니다." },
      { ref: "히브리서 11:8–10", tag: "연결", text: "아브라함은 갈 바를 알지 못하고 나아갔다고 해석됩니다. 이는 무계획의 미화가 아니라 부르신 분의 약속을 신뢰한 순종으로 제시됩니다." },
      { ref: "갈라디아서 3:8", tag: "연결", text: "바울은 ‘모든 이방이 너를 인하여 복을 받으리라’는 약속을 복음의 보편적 방향과 연결합니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "본문이 말하는 것: 믿음의 주도권은 아브람의 모험심이 아니라 말씀하시고 약속하시는 하나님께 있습니다.",
        "땅의 현실: 6절은 가나안 사람이 이미 살고 있었다고 밝힙니다. 이 본문을 오늘의 영토 점유를 단순 정당화하는 문장으로 사용하지 않습니다.",
        "예술의 자리: 그림 속 방랑자는 아브람이 아니고, 슈베르트의 작품도 성경 장면을 묘사한 음악이 아닙니다. 두 작품은 ‘보이지 않는 길’에 관해 생각하도록 돕는 대화 상대입니다.",
        "문학의 자리: 존 버니언의 《천로역정》은 그리스도인의 여정을 꿈의 비유로 그린 문학입니다. 역사적 아브람 이야기와 동일한 사건으로 합치지 않습니다."
      ]
    }
  },

  keep: {
    sentence: "믿음은 모든 목적지를 아는 길이 아니라, 말씀하시는 분을 신뢰하여 첫걸음을 떼는 응답입니다.",
    question: "내가 모든 안개가 걷히기를 기다리며 미루고 있는, 오늘의 한 걸음은 무엇인가요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "지금 떠나야 할 것과, 아직 알지 못해도 맡길 수 있는 것을 한 문장씩 적어 보세요.",
    pdfCredit: "그림: 카스파르 다비트 프리드리히, 《안개 바다 위의 방랑자》(함부르크 미술관 소장; Wikimedia Commons Public Domain Mark 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 슈베르트 《방랑자 환상곡》, 클라우디우스 탄스키 직접 제공 YouTube 허용 임베드(음원 파일 미수록)."
  }),

  sources: {
    title: "작품과 자료 출처", checkedOn: "2026-11-15",
    releaseStatus: "READY · Captain 공개 승인(2026-11-15) · 외부 자료 권리 및 공식 임베드 확인",
    groups: [
      { label: "미술작품", lines: [
          "카스파르 다비트 프리드리히, 《Wanderer über dem Nebelmeer》, 약 1817년, 캔버스에 유채, 94.8 × 74.8 cm. 함부르크 미술관 작품번호 HK-5161.",
          "작품 정보는 함부르크 미술관 공식 페이지로 확인했습니다. 수록 이미지는 미술관의 권리 사진이 아니라 Wikimedia Commons가 Public Domain Mark와 PD-Art로 표시한 충실한 복제본입니다."
        ], links: [{ label: "함부르크 미술관 작품 안내", url: "https://hamburger-kunsthalle.com/en/news/wanderer-above-sea-fog-caspar-david-friedrich" }, { label: "Wikimedia Commons 이미지·권리", url: "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg" }, { label: "Public Domain Mark", url: "https://creativecommons.org/publicdomain/mark/1.0/deed.ko" }] },
      { label: "음악", lines: [
          "프란츠 슈베르트, 《Wanderer-Fantasie》 C장조, Op. 15, D. 760. 승인 기획에 지정된 작품의 전곡을 감상합니다.",
          "현대 연주·녹음의 권리는 제공자에게 있습니다. 피아니스트 클라우디우스 탄스키가 직접 제공하고 G. Henle 출판사가 소개한 YouTube 전곡 영상의 허용 임베드만 사용하며, 자동재생·복제·다운로드를 하지 않습니다."
        ], links: [{ label: "클라우디우스 탄스키 제공 전곡 영상", url: "https://www.youtube.com/watch?v=3mU1sMDjIeY" }, { label: "G. Henle 연주·작품 해설", url: "https://blog.henle.de/en/2021/05/24/schuberts-wanderer-fantasy-and-the-challenges-of-an-urtext-edition/" }] },
      { label: "성경·문학", lines: [
          "창세기 12:1–9, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "존 버니언의 《천로역정》 원작(1678)은 Project Gutenberg의 Public Domain 영문판으로 서지와 줄거리를 확인했습니다. 현대 한국어 번역문·표지·삽화는 사용하지 않고 자체 요약만 썼습니다."
        ], links: [{ label: "창세기 12장 · 개역한글", url: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=gen&cVersion=SAE%5E&chap=12&fontSize=0&fontString=10px&fontWeight=bold&sec=1&version=HAN" }, { label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }, { label: "Project Gutenberg · 천로역정", url: "https://www.gutenberg.org/ebooks/131" }] },
      { label: "해설", lines: [
          "승인된 008 상세 편집 기획의 성경·미술·음악·문학 조합과 다섯 장면, 핵심 통찰, 신학 경계를 따라 새로 쓴 자체 원고입니다. 외부 해설 문장을 옮기지 않았습니다.",
          "핵심 경계: 방랑자 그림을 아브람과 동일시하지 않으며, 성경의 출발을 홀로 선 영웅의 모험으로 축소하지 않습니다."
        ], links: [{ label: "007–050 상세 편집 기획 v0.2 · Captain 승인본", url: "https://app.notion.com/p/4193b0124c5281f8a179c508359d19ae" }] }
    ],
    records: {
      art: {
        id: "art-8", artist: "Caspar David Friedrich", title: "Wanderer über dem Nebelmeer", year: "circa 1817", medium: "Oil on canvas",
        usedFiles: ["assets/wanderer-480.jpg", "assets/wanderer-1280.jpg"],
        derivedFrom: "Wikimedia Commons 1280px thumbnail of a faithful reproduction",
        sourceFile: { name: "1280px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg/1280px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg", pixels: "1280x1642", bytes: 590081, sha256: "2CA3B90ED75A991E32050DBC2AD60AD93F70D3EAA4965A829E046AD998543DB8" },
        museum: { name: "Hamburger Kunsthalle", objectNumber: "HK-5161", collectionUrl: "https://online-sammlung.hamburger-kunsthalle.de/de/objekt/HK-5161" },
        processing: "1280px Commons 공개본은 그대로 사용. 480px 파일은 같은 비율로 고품질 축소; 자르기·색 보정 없음.",
        url: "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg",
        license: "Public Domain Mark 1.0 / PD-old-100-expired / PD-Art", rightsHolder: "원작 저작권 소멸; Commons가 알려진 권리 제한 없음으로 표시한 충실한 복제본",
        rightsBasisUrl: "https://commons.wikimedia.org/wiki/File:Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg", useForm: "image", pdfInclude: true, pdfReason: "Commons 파일 설명의 Public Domain Mark와 PD-Art 표시를 확인하고 출처와 함께 수록",
        status: "VERIFIED(작품 식별·소장처·Commons 권리 표시·파일 해시 확인)", open: [], checkedOn: "2026-11-15"
      },
      music: {
        id: "music-8", composer: "Franz Schubert", work: "Wanderer-Fantasie, D. 760", composerStatus: "저작권 소멸(1828 사망)",
        performance: "Claudius Tanski; pianist-uploaded recording, introduced by G. Henle Verlag",
        officialPage: "https://www.youtube.com/watch?v=3mU1sMDjIeY",
        embed: { provider: "YouTube", videoId: "3mU1sMDjIeY", channel: "Claudius Tanski", channelId: "UCeqnqLafWUredKrUu7WCUOQ", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 1295, startSeconds: 0, autoplay: false, loadedOnlyAfterTap: true },
        audioFilesHosted: false, url: "https://www.youtube.com/watch?v=3mU1sMDjIeY",
        license: "저작권 있는 현대 연주·녹음; 연주자가 직접 제공한 YouTube 허용 임베드와 링크만", rightsHolder: "Claudius Tanski / 해당 녹음 권리자",
        rightsBasisUrl: "https://www.youtube.com/watch?v=3mU1sMDjIeY", useForm: "embed, link, original commentary", pdfInclude: false, pdfReason: "PDF에 음원·영상·악보를 복제하지 않음",
        connection: "간접 연결(방랑과 긴장의 정서; 성경 장면을 묘사한 음악은 아님)", status: "VERIFIED(공식 제공·oEmbed·playableInEmbed=true·길이·채널 확인)", open: [], checkedOn: "2026-11-15"
      },
      bible: {
        id: "bible-8", translation: "개역한글판(1961)", range: "창세기 12:1–9",
        copyright: "대한성서공회 안내 표: 개역한글판 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=gen&cVersion=SAE%5E&chap=12&fontSize=0&fontString=10px&fontWeight=bold&sec=1&version=HAN", textSource: "대한성서공회 온라인 성경 개역한글판 본문과 1–9절 전 구절 대조",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1", license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회", rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1", useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 전 구절 대조·보호기간 소멸 확인)", open: [], checkedOn: "2026-11-15"
      },
      literature: {
        id: "literature-8", author: "John Bunyan", work: "The Pilgrim's Progress", year: "1678",
        source: "Project Gutenberg eBook 131", url: "https://www.gutenberg.org/ebooks/131", license: "원작 및 해당 영문 판본 Public Domain 표시; 현대 한국어 번역은 사용하지 않음", rightsHolder: "원작 저작권 소멸; 한국어 자체 요약만 사용", rightsBasisUrl: "https://www.gutenberg.org/ebooks/131", useForm: "title, original summary link, original commentary", pdfInclude: false, pdfReason: "문학 본문·번역문·표지·삽화를 PDF에 복제하지 않음",
        status: "VERIFIED(서지·Public Domain 판본 확인; 외부 문장 복제 없음)", open: [], checkedOn: "2026-11-15"
      },
      commentary: {
        id: "text-8", authorship: "프로젝트 자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null, useForm: "original commentary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED_FOR_RELEASE", open: [], checkedOn: "2026-11-15", approvedBy: "Captain", approvedOn: "2026-11-15"
      }
    }
  }
});
