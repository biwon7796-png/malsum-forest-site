/* ART-BIBLE-002 · 씨를 뿌리는 사람 — 밀레(석판화) · 바흐 BWV 18 · 마태복음 13:1–23
   한 작품 = 한 파일. 구조 설명은 storm-in-galilee.js 맨 위 주석 참고. */
ArtBook.register({
  id: "the-sower",

  meta: {
    status: "approved",
    summary: "밭을 가로질러 씨를 뿌리는 한 사람. 서두르지 않고 자라는 것을 기다린다는 말을, 밀레의 석판화와 바흐의 칸타타, 마태복음 13장으로 묻습니다.",
    themes: ["씨앗", "기다림", "열매"],
    tags: ["씨 뿌리는 자", "비유", "밭", "땅", "농부", "말씀", "결실", "새", "가시떨기", "석판화", "천국 비유"],
    bible: {
      books: ["마태복음"], bookAliases: ["마태"],
      ranges: ["마태복음 13:1–23"],
      related: ["마가복음 4:1–20", "마가복음 4:26–29", "누가복음 8:4–15", "이사야 55:10–11", "이사야 6:9–10", "시편 126:5–6", "야고보서 5:7"]
    },
    art: { artist: "장프랑수아 밀레", artistAliases: ["밀레", "Jean-François Millet", "Millet"], title: "씨 뿌리는 사람", titleAliases: ["씨뿌리는 사람", "The Sower"], year: 1851 },
    music: { composer: "요한 제바스티안 바흐", composerAliases: ["바흐", "Bach", "J.S. Bach"], work: "칸타타 BWV 18", workAliases: ["BWV 18", "Gleichwie der Regen und Schnee vom Himmel fällt"] },
    cover: { src: "assets/sower_480.jpg", alt: "어두운 윤곽의 한 사람이 밭을 가로질러 걸으며 씨를 뿌리는 석판화" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "첫 공개판 · Captain 신학·내용 검토 승인",
  title: "씨를 뿌리는 사람",
  passage: "마태복음 13:1–23",
  themes: "씨앗 · 기다림 · 열매",

  scenes: [
    { id: "s1", name: "바라보다" },
    { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/sower_1200.jpg",
      srcset: "assets/sower_1200.jpg 1200w, assets/sower_2400.jpg 2400w",
      zoom: "assets/sower_2400.jpg",
      width: 1200, height: 1437,
      alt: "어두운 윤곽의 한 사람이 챙 있는 모자를 쓰고 밭을 가로질러 크게 발을 내딛는다. 앞으로 뻗은 오른팔 끝에서 씨앗이 흩어지고, 왼쪽 하늘에는 새 떼가 모여 있다. 멀리 오른쪽 능선에서는 흰 소 두 마리를 몰고 밭을 가는 사람이 아주 작게 보인다."
    },
    caption: {
      artist: "장프랑수아 밀레 (Jean-François Millet, 1814–1875)",
      work: "《씨 뿌리는 사람》",
      meta: "메트로폴리탄 미술관 기록 연도 1851 · 석판화(제2상태·최종) · 화면 약 19.4 × 13.3 cm",
      owner: "메트로폴리탄 미술관(미국 뉴욕) 소장 · 소장번호 23.65.11",
      notes: ["이 그림은 유화가 아니라 종이에 찍은 석판화입니다. 미술관 기록에 따르면 1879년 이후, 작가가 세상을 떠난 뒤에 찍은 인쇄본입니다."]
    },
    prompt: "그림 속 사람이 걸어온 길과, 아직 가야 할 길을 눈으로 따라가 보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "한 사람이 밭을 가로질러 걷습니다. 손은 앞으로 뻗었고, 씨앗은 이미 손을 떠났습니다.",
    items: [
      { tag: "사실", text: "이 그림은 석판화입니다. 돌 위에 기름기 있는 크레용으로 그린 그림을 종이에 찍어 내는 판화입니다. 메트로폴리탄 미술관은 이 인쇄본을 1879년 이후, 밀레 사후의 것으로 적어 두었습니다." },
      { tag: "관찰", text: "씨 뿌리는 사람은 어두운 윤곽 하나로 서 있습니다. 얼굴은 모자 그늘에 가려 거의 보이지 않습니다. 왼쪽 하늘에는 새 떼가 모여 있고, 오른쪽 먼 능선에서는 소 두 마리를 몰아 밭을 가는 사람이 아주 작게 보입니다." },
      { tag: "해석", text: "눈에 먼저 들어오는 것은 씨앗이 아니라 걸음입니다. 발은 크게 내딛고 팔은 힘껏 뻗었습니다. 그런데 이 그림은 싹이 돋는 장면을 보여 주지 않습니다. 보이는 것은 뿌리는 순간뿐입니다. 열매는 그림 밖, 아직 오지 않은 시간에 있습니다." },
      { tag: "추정", text: "마태복음 13:4에서 길가에 떨어진 씨를 먹는 것은 새들입니다. 하늘의 새 떼가 그 구절을 떠올리게 하지만, 밀레가 이 그림으로 마태복음을 그리려 했다는 기록은 확인하지 못했습니다. 둘을 잇는 것은 보는 사람의 읽기입니다." }
    ],
    again: "다시 보세요. 이번에는 씨앗이 떨어지는 땅을, 한 줄씩."
  },

  listen: {
    work: "요한 제바스티안 바흐 · 칸타타 BWV 18",
    titleDe: "Gleichwie der Regen und Schnee vom Himmel fällt",
    titleKo: "마치 비와 눈이 하늘에서 내려오듯 (제목 번역)",
    items: [
      { tag: "사실", text: "이 곡은 본문과 직접 이어지는 음악입니다. 네덜란드 바흐 협회의 설명에 따르면 재의 수요일 두 주 전 주일을 위한 곡이고, 그날의 복음서 본문이 씨 뿌리는 비유(누가복음 8장)였습니다. 셋째 악장이 그 본문을 풀어 노래합니다. 마태복음이 아니라 같은 비유를 전하는 누가복음의 판본입니다." },
      { tag: "사실", text: "곡의 제목은 이사야 55:10–11의 말씀에서 왔습니다. 비와 눈이 땅을 적셔 싹을 틔우듯, 하나님의 말씀도 보내신 일을 이루고 돌아온다는 구절입니다." },
      { tag: "사실", text: "편성이 특이합니다. 바이올린 없이 비올라 네 대가 낮고 어두운 소리를 이끕니다(협회 연주에서는 지휘자 Shunske Sato가 그중 한 대를 직접 켭니다). 바이마르 시절의 초기 작품이며 초연 시기는 자료마다 1713~1715년으로 엇갈립니다." },
      { tag: "감상", text: "밀레와 바흐 사이에는 백수십 년의 간격이 있고, 두 사람이 서로의 작품을 알고 만든 것이 아닙니다. 둘을 이어 주는 것은 ‘씨 뿌리는 이야기’ 하나입니다. 어두운 비올라 소리에 밀레의 검은 윤곽을 겹쳐 보는 것은 하나의 감상일 뿐, 역사적 연결은 아닙니다. 전부 듣지 않아도 좋습니다. 몇 분만 들어 보세요." }
    ],
    duration: "14분 20초",
    channel: "네덜란드 바흐 협회",
    playLabel: "BWV 18 감상하기",
    embedTitle: "바흐 칸타타 BWV 18 — 네덜란드 바흐 협회",
    performance: "연주: 네덜란드 바흐 협회(Netherlands Bach Society) · Shunske Sato 지휘·비올라 · 2019년 9월 21일 마스슬라위스 흐로테 교회 녹화",
    videoId: "MFftxZNUiew",
    links: [
      { label: "네덜란드 바흐 협회 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-18" },
      { label: "YouTube에서 열기", url: "https://www.youtube.com/watch?v=MFftxZNUiew" }
    ],
    note: "소리는 자동으로 재생되지 않습니다. 재생이 어려운 곳이라면 다음 장면으로 그냥 넘어가셔도 됩니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "마태복음 13:1–23",
      lines: [
        { v: 1, t: "그 날에 예수께서 집에서 나가사 바닷가에 앉으시매" },
        { v: 2, t: "큰 무리가 그에게로 모여 들거늘 예수께서 배에 올라가 앉으시고 온 무리는 해변에 섰더니" },
        { v: 3, t: "예수께서 비유로 여러가지를 저희에게 말씀하여 가라사대 씨를 뿌리는 자가 뿌리러 나가서" },
        { v: 4, t: "뿌릴쌔 더러는 길 가에 떨어지매 새들이 와서 먹어버렸고" },
        { v: 5, t: "더러는 흙이 얇은 돌밭에 떨어지매 흙이 깊지 아니하므로 곧 싹이 나오나" },
        { v: 6, t: "해가 돋은 후에 타져서 뿌리가 없으므로 말랐고" },
        { v: 7, t: "더러는 가시떨기 위에 떨어지매 가시가 자라서 기운을 막았고" },
        { v: 8, t: "더러는 좋은 땅에 떨어지매 혹 백배, 혹 육십배, 혹 삼십배의 결실을 하였느니라" },
        { v: 9, t: "귀 있는 자는 들으라 하시니라" },
        { v: 10, t: "제자들이 예수께 나아와 가로되 어찌하여 저희에게 비유로 말씀하시나이까" },
        { v: 11, t: "대답하여 가라사대 천국의 비밀을 아는 것이 너희에게는 허락되었으나 저희에게는 아니되었나니" },
        { v: 12, t: "무릇 있는 자는 받아 넉넉하게 되되 무릇 없는 자는 그 있는 것도 빼앗기리라" },
        { v: 13, t: "그러므로 내가 저희에게 비유로 말하기는 저희가 보아도 보지 못하며 들어도 듣지 못하며 깨닫지 못함이니라" },
        { v: 14, t: "이사야의 예언이 저희에게 이루었으니 일렀으되 너희가 듣기는 들어도 깨닫지 못할 것이요 보기는 보아도 알지 못하리라" },
        { v: 15, t: "이 백성들의 마음이 완악하여져서 그 귀는 듣기에 둔하고 눈은 감았으니 이는 눈으로 보고 귀로 듣고 마음으로 깨달아 돌이켜 내게 고침을 받을까 두려워함이라 하였느니라" },
        { v: 16, t: "그러나 너희 눈은 봄으로, 너희 귀는 들음으로 복이 있도다" },
        { v: 17, t: "내가 진실로 너희에게 이르노니 많은 선지자와 의인이 너희 보는 것들을 보고자 하여도 보지 못하였고 너희 듣는 것들을 듣고자 하여도 듣지 못하였느니라" },
        { v: 18, t: "그런즉 씨 뿌리는 비유를 들으라" },
        { v: 19, t: "아무나 천국 말씀을 듣고 깨닫지 못할 때는 악한 자가 와서 그 마음에 뿌리운 것을 빼앗나니 이는 곧 길 가에 뿌리운 자요" },
        { v: 20, t: "돌밭에 뿌리웠다는 것은 말씀을 듣고 즉시 기쁨으로 받되" },
        { v: 21, t: "그 속에 뿌리가 없어 잠시 견디다가 말씀을 인하여 환난이나 핍박이 일어나는 때에는 곧 넘어지는 자요" },
        { v: 22, t: "가시떨기에 뿌리웠다는 것은 말씀을 들으나 세상의 염려와 재리의 유혹에 말씀이 막혀 결실치 못하는 자요" },
        { v: 23, t: "좋은 땅에 뿌리웠다는 것은 말씀을 듣고 깨닫는 자니 결실하여 혹 백배, 혹 육십배, 혹 삼십배가 되느니라 하시더라" }
      ]
    },
    intro: "이 비유는 깁니다. 세 덩어리로 나누어 읽습니다. 비유(3–9절), 왜 비유인가(10–17절), 예수님의 풀이(18–23절).",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "13:1–2", items: [
        { tag: "본문", text: "그날 예수님이 집에서 나와 바닷가에 앉으십니다. 큰 무리가 모여들자 배에 올라 앉으시고, 무리는 해변에 섭니다." },
        { tag: "관찰", text: "가르치시는 분은 물 위의 배에, 듣는 사람들은 땅 위에 서 있습니다. 땅에 관한 이야기를 땅 위의 사람들에게 들려주는 자리입니다." }
      ]},
      { ref: "13:3–9", items: [
        { tag: "본문", text: "씨를 뿌리는 사람이 나가서 뿌립니다. 더러는 길가에 떨어져 새가 먹고, 더러는 흙이 얇은 돌밭에 떨어져 해가 뜨자 말랐고, 더러는 가시떨기 위에 떨어져 막혔고, 더러는 좋은 땅에 떨어져 삼십 배, 육십 배, 백 배의 열매를 맺습니다. 마지막은 “귀 있는 자는 들으라”입니다." },
        { tag: "관찰", text: "땅은 네 곳인데 뿌리는 사람은 한 사람이고, 씨앗의 종류도 하나입니다. 이 사람은 땅을 가려서 뿌리는 것처럼 보이지 않습니다." },
        { tag: "해석", text: "뿌리는 사람의 넉넉한 손길을 읽어 내는 해석이 있습니다. 다만 본문이 그 점을 설명하지는 않습니다." }
      ]},
      { ref: "13:10–17", items: [
        { tag: "본문", text: "제자들이 왜 비유로 말씀하시느냐고 묻습니다. 예수님은 천국의 비밀이 제자들에게는 허락되었고 다른 이들에게는 아니라고 하시며, 보아도 보지 못하고 들어도 깨닫지 못한다는 이사야의 말씀을 가져오십니다." },
        { tag: "관찰", text: "14–15절은 이사야 6:9–10을 이어 옮긴 것으로, 개역한글판 성경의 난외 주도 그렇게 표시합니다." },
        { tag: "해석", text: "이 대목은 어렵습니다. 비유가 듣는 이를 가려내려는 것인지 깨우려는 것인지는 학자들 사이에서도 읽는 방식이 갈립니다." }
      ]},
      { ref: "13:18–23", items: [
        { tag: "본문", text: "예수님이 직접 풀어 주십니다. 길가는 말씀을 듣고 깨닫지 못해 악한 자가 빼앗아 가는 사람, 돌밭은 기쁨으로 받으나 뿌리가 없어 환난이나 핍박에 넘어지는 사람, 가시떨기는 세상의 염려와 재물의 유혹에 말씀이 막히는 사람, 좋은 땅은 말씀을 듣고 깨닫는 사람입니다." },
        { tag: "관찰", text: "앞의 세 곳은 열매가 없는 이유를, 마지막 한 곳은 열매가 맺히는 모습을 말합니다. 좋은 땅의 설명은 “듣고 깨닫는 자” 한 가지입니다(23절)." },
        { tag: "연결", text: "풀이의 눈이 뿌리는 사람보다 땅, 곧 듣는 사람에게 있어서 이 비유를 ‘네 가지 땅의 비유’라고 부르기도 합니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "이사야 55:10–11", tag: "연결", text: "비와 눈이 하늘에서 내려 땅을 적셔 싹을 나게 하듯, 하나님의 말씀도 헛되이 돌아오지 않고 보내신 일을 이룬다고 말합니다. 바흐 칸타타의 제목이 된 구절입니다." },
      { ref: "마가복음 4:26–29", tag: "연결", text: "같은 장의 다른 비유입니다. 사람이 씨를 뿌려 두면 자고 깨는 사이에 땅이 스스로 열매를 맺습니다. 세 복음서 가운데 마가복음에만 실려 있는 것으로 알려져 있습니다. ‘기다림’이라는 주제는 이 구절과 가장 가깝습니다." },
      { ref: "누가복음 8:15", tag: "대조", text: "같은 비유를 전하는 누가는 좋은 땅의 사람을 “인내로 결실하는” 사람이라고 적습니다. 마태복음 13:23에는 없는 표현입니다." },
      { ref: "야고보서 5:7", tag: "연결", text: "농부가 귀한 열매를 얻으려고 이른 비와 늦은 비를 기다리는 모습을 들어, 참고 기다리라고 권합니다." },
      { ref: "시편 126:5–6", tag: "연결", text: "눈물을 흘리며 씨를 뿌린 사람이 기쁨으로 단을 거두어 돌아오리라는 노래입니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "본문이 말하는 것: 풀이(18–23절)는 씨를 말씀에, 땅을 듣는 사람에게 잇고, 열매는 ‘듣고 깨닫는 것’에서 난다고 말합니다.",
        "이 책의 읽기: ‘기다림’이라는 주제는 마태복음 13:1–23이 직접 강조하는 말이 아닙니다. 마가복음 4:26–29, 누가복음 8:15, 야고보서 5:7을 함께 읽으며 이어 낸 주제입니다.",
        "묵상적 적용: 아래의 질문, ‘나는 무엇을 서둘러 거두려 하는가’는 본문의 해설이 아니라 독자에게 건네는 물음입니다. 본문이 먼저 요구하는 것은 듣고 깨닫는 일입니다."
      ]
    }
  },

  keep: {
    sentence: "그림은 뿌리는 순간에서 멈춰 있습니다. 싹이 돋고 자라는 시간은 그림 밖에 있습니다.",
    question: "나는 무엇을 서둘러 거두려고 하면서, 정작 씨앗이 자랄 시간을 주지 않고 있을까요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "마태복음 13:1–23을 읽으며 떠오른 생각이나 기도를 적어 보세요.",
    pdfCredit: "그림: 장프랑수아 밀레, 《씨 뿌리는 사람》 석판화(메트로폴리탄 미술관 소장, 공개 도메인 표시 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 바흐 BWV 18(링크로만 연결)."
  }),

  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-12",
    releaseStatus: "READY · Captain 신학·내용 검토 승인(2026-11-12) · 첫 공개판 수록 승인",
    groups: [
      { label: "미술작품", lines: [
          "장프랑수아 밀레, 《씨 뿌리는 사람》, 석판화(제2상태·최종), 메트로폴리탄 미술관 기록 연도 1851, 1879년 이후 작가 사후 인쇄본. 소장번호 23.65.11, Gift of Theodore De Witt, 1923. 이 책의 그림은 유화가 아니라 이 판화입니다.",
          "이미지: 메트로폴리탄 미술관 작품 페이지가 Public Domain으로 표시하고, 오픈 액세스 정책은 해당 이미지를 CC0로 자유 이용할 수 있다고 안내합니다(2026-11-12 확인). 색과 비율은 바꾸지 않고 크기만 줄였습니다."
        ], links: [{ label: "메트로폴리탄 작품 페이지", url: "https://www.metmuseum.org/art/collection/search/363029" }, { label: "컬렉션 API 기록", url: "https://collectionapi.metmuseum.org/public/collection/v1/objects/363029" }, { label: "오픈 액세스 안내", url: "https://www.metmuseum.org/policies/open-access" }] },
      { label: "음악", lines: [
          "요한 제바스티안 바흐, 칸타타 BWV 18 〈Gleichwie der Regen und Schnee vom Himmel fällt〉(작곡 바이마르 시기, 저작권 소멸).",
          "연주·녹화: 네덜란드 바흐 협회, Shunske Sato, 2019. 이 녹음의 권리는 협회에 있으며 음원을 복제하지 않고 협회의 감상 페이지와 공식 YouTube 영상으로만 연결합니다."
        ], links: [{ label: "협회 감상 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-18" }, { label: "공식 YouTube 영상", url: "https://www.youtube.com/watch?v=MFftxZNUiew" }] },
      { label: "성경", lines: [
          "마태복음 13:1–23, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문은 대한성서공회 온라인 성경(개역한글판)과 전 구절을 대조해 확인했습니다. 난외 주와 각주 표시는 뺐습니다."
        ], links: [{ label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "이 책의 해설과 묵상글은 필자가 새로 쓴 원고이며 기존 출판물의 문장을 옮기지 않았습니다. Captain이 신학·내용 검토와 첫 공개판 수록을 승인했습니다.",
          "참고한 성경 자료: 마태복음 13:1–23, 마가복음 4:26–29, 누가복음 8:4–15, 이사야 6:9–10, 이사야 55:10–11, 시편 126:5–6, 야고보서 5:7. 바흐 칸타타 설명은 네덜란드 바흐 협회 페이지를 바탕으로 했습니다."
        ], links: [] }
    ],
    records: {
      art: {
        id: "art-2", artist: "Jean-François Millet", title: "The Sower", year: "1851 (Met record); posthumous impression 1879 or later", medium: "Lithograph; second (final) state",
        usedFiles: ["assets/sower_480.jpg", "assets/sower_1200.jpg", "assets/sower_2400.jpg"],
        derivedFrom: "Met Open Access 공개 원본(배포본에는 리사이즈 이미지와 출처 링크만 포함)",
        sourceFile: { name: "DP827628.jpg", url: "https://images.metmuseum.org/CRDImages/dp/original/DP827628.jpg", pixels: "2892x3464", bytes: 4503248, sha1: "37e0c1e7d16194b620c8dd405befaa693469cc1e" },
        museum: { name: "The Metropolitan Museum of Art", objectId: 363029, accession: "23.65.11", creditLine: "Gift of Theodore De Witt, 1923", apiIsPublicDomain: true, rightsAndReproduction: "(빈 값)", url: "https://www.metmuseum.org/art/collection/search/363029" },
        processing: "리사이즈(LANCZOS)만 적용, 색 보정·자르기 없음.",
        url: "https://www.metmuseum.org/art/collection/search/363029",
        license: "CC0 / Public Domain (Met Open Access)", rightsHolder: "원작 저작권 소멸; 소장처 The Metropolitan Museum of Art",
        rightsBasisUrl: "https://www.metmuseum.org/hubs/open-access",
        useForm: "image", pdfInclude: true, pdfReason: "Met Collection API의 공개 도메인 표시 이미지; 출처와 함께 수록",
        status: "VERIFIED(작품 페이지 Public Domain 표시·Met CC0 정책 확인)",
        open: [],
        checkedOn: "2026-11-12"
      },
      music: {
        id: "music-2", composer: "J. S. Bach", work: "BWV 18", composerStatus: "저작권 소멸(1750 사망)",
        performance: "Netherlands Bach Society, Shunske Sato, recorded 2019-09-21, Groote Kerk Maassluis (협회 페이지 기재)",
        officialPage: "https://www.bachvereniging.nl/en/bwv/bwv-18", officialPageChecked: "열람 확인(2026-11-12)",
        embed: { provider: "YouTube", videoId: "MFftxZNUiew", channel: "Netherlands Bach Society", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 860, autoplay: false, loadedOnlyAfterTap: true, idSource: "협회 페이지 HTML의 data-youtube-id" },
        audioFilesHosted: false,
        url: "https://www.bachvereniging.nl/en/bwv/bwv-18",
        license: "저작권 있는 현대 연주·녹화; 공식 링크/허용 임베드만", rightsHolder: "Netherlands Bach Society",
        rightsBasisUrl: "https://www.youtube.com/watch?v=MFftxZNUiew",
        useForm: "embed, link, summary", pdfInclude: false, pdfReason: "PDF에 음원·영상·가사·포스터를 복제하지 않음",
        connection: "직접 연결(그날 복음서 본문 = 씨 뿌리는 비유, 누가복음 판본)",
        status: "VERIFIED(페이지·영상 ID·임베드 가능 확인)",
        open: ["협회 설명 외 독립 문헌으로 칸타타–복음서 대응(셋째 악장)을 대조하지는 않음", "초연 연도는 자료마다 달라 단정하지 않음"],
        checkedOn: "2026-11-12"
      },
      bible: {
        id: "bible-2", translation: "개역한글판(1961)", range: "마태복음 13:1–23",
        copyright: "대한성서공회 안내 표: 성경전서 개역한글판 최초 발행 1961-07-10, 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        textSource: "대한성서공회 온라인 성경 개역한글판(version=HAN) 본문과 전 구절 대조 후 표기(난외 주 제외)",
        crossCheck: "한글 위키문헌 전사와 대조해 띄어쓰기 차이만 확인",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회",
        rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 대조·개역한글판 보호기간 소멸 확인)",
        open: [],
        notUsed: ["개역개정판", "새번역", "표준새번역", "공동번역"],
        checkedOn: "2026-11-12"
      },
      commentary: { id: "text-2", authorship: "자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "summary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED", open: [], checkedOn: "2026-11-12", approvedBy: "Captain", approvedOn: "2026-11-12" }
    }
  }
});
