/* ART-BIBLE-003 · 길에서 멈춘 사람 — 다비트 테니르스 2세 · 바흐 BWV 164 · 누가복음 10:25–37
   한 작품 = 한 파일. 구조 설명은 storm-in-galilee.js 맨 위 주석 참고. */
ArtBook.register({
  id: "good-samaritan",

  meta: {
    status: "approved",
    summary: "길 위에 쓰러진 사람과, 걸음을 멈춘 한 사람. ‘내 이웃이 누구인가’라는 물음이 ‘누가 이웃이 되었는가’로 뒤집히는 이야기를 테니르스의 작은 그림과 바흐의 칸타타로 만납니다.",
    themes: ["이웃", "자비", "돌봄"],
    tags: ["선한 사마리아인", "사마리아 사람", "강도", "제사장", "레위인", "여리고", "나귀", "여관", "연민", "비유", "영생", "율법사"],
    bible: {
      books: ["누가복음"], bookAliases: ["누가", "눅"],
      ranges: ["누가복음 10:25–37"],
      related: ["레위기 19:18", "신명기 6:5", "역대하 28:8–15", "누가복음 15:20", "요한복음 4:9"]
    },
    art: { artist: "다비트 테니르스 2세", artistAliases: ["테니르스", "다비드 테니르스", "David Teniers the Younger", "Teniers"], title: "선한 사마리아인", titleAliases: ["The Good Samaritan"] },
    music: { composer: "요한 제바스티안 바흐", composerAliases: ["바흐", "Bach", "J.S. Bach"], work: "칸타타 BWV 164", workAliases: ["BWV 164", "Ihr, die ihr euch von Christo nennet"] },
    cover: { src: "assets/samaritan_680.jpg", alt: "쓰러진 사람 곁에 무릎 꿇고 상처를 돌보는 한 남자를 그린 작은 유화" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "첫 공개판 · Captain 신학·내용 검토 승인",
  title: "길에서 멈춘 사람",
  passage: "누가복음 10:25–37",
  themes: "이웃 · 자비 · 돌봄",

  scenes: [
    { id: "s1", name: "바라보다" },
    { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/samaritan_680.jpg",
      zoom: "assets/samaritan_680.jpg",
      width: 680, height: 518,
      alt: "숲 가장자리의 길 위에 상체를 드러낸 한 사람이 머리에 흰 천을 두른 채 누워 있다. 붉은 윗옷의 남자가 그 곁에 무릎을 꿇고 한 손에 흰 천을 높이 들었다. 오른쪽에는 당나귀와 등을 보이고 선 사람, 작은 개가 있고, 아래쪽에 작은 단지와 그릇이 놓여 있다. 먼 길과 바위 곁에 작은 인물들이 보인다."
    },
    caption: {
      artist: "다비트 테니르스 2세 (David Teniers the Younger, 1610–1690)",
      work: "《선한 사마리아인》",
      meta: "나무판에 유채 · 17.1 × 22.9 cm",
      owner: "메트로폴리탄 미술관(미국 뉴욕) 소장 · 소장번호 89.15.25",
      notes: ["아주 작은 그림입니다. A5 용지보다 조금 큰 나무판에 그렸습니다. 미술관 기록에는 제작 연도가 적혀 있지 않습니다. 공개된 이미지가 작아서 크게 확대하면 흐려 보입니다."]
    },
    prompt: "누가 누구에게 몸을 기울이고 있는지, 먼저 찾아보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "길 위에 사람이 쓰러져 있습니다. 그리고 누군가 걸음을 멈췄습니다.",
    items: [
      { tag: "사실", text: "테니르스는 안트베르펜에서 태어나 브뤼셀에서 세상을 떠난 플랑드르 화가입니다(메트로폴리탄 미술관 기록). 이 그림은 손에 들 만한 크기의 나무판에 유채로 그렸고, 제작 연도는 기록에 없습니다. 작가의 생몰 연대로 보아 17세기의 그림입니다." },
      { tag: "관찰", text: "왼쪽에 상체를 드러낸 사람이 머리에 흰 천을 두르고 누워 있습니다. 그 곁에 붉은 윗옷의 남자가 무릎을 꿇고, 한 손에 흰 천을 높이 들고 다른 손으로 누운 사람을 받치듯 하고 있습니다. 오른쪽에는 당나귀와, 등을 보이고 선 사람, 작은 개가 있습니다. 화면 아래 가운데에는 작은 단지와 그릇이 놓여 있습니다." },
      { tag: "해석", text: "단지와 그릇은 누가복음 10:34의 기름과 포도주를 떠올리게 합니다. 사람들의 옷차림은 예수님 시대가 아니라 화가가 살던 시대의 것으로 보입니다. 비유를 그린 옛 그림은 이야기를 그 시대의 길 위로 옮겨 놓는 일이 흔했습니다. 그래서 이 장면은 먼 옛날 이야기가 아니라 ‘지금 여기의 길’처럼 보입니다." },
      { tag: "추정", text: "왼쪽 위 바위 곁과 오른쪽 먼 길에도 작은 인물이 보입니다. 그들이 비유 속 제사장과 레위인인지는 그림만으로는 알 수 없습니다. 여러분의 눈으로 보고 판단해 보세요." }
    ],
    again: "다시 보세요. 이번에는 얼굴이 아니라 손을."
  },

  listen: {
    work: "요한 제바스티안 바흐 · 칸타타 BWV 164",
    titleDe: "Ihr, die ihr euch von Christo nennet",
    titleKo: "그리스도의 이름으로 불리는 너희여 (제목 번역)",
    items: [
      { tag: "사실", text: "이 곡은 본문과 직접 이어지는 음악입니다. 삼위일체 후 열세 번째 주일을 위해 쓰였고(1725년 8월 26일 초연), 그날 주일의 복음서 본문은 선한 사마리아인의 비유가 실린 누가복음 10:23–37입니다." },
      { tag: "사실", text: "이 곡은 비유를 이야기로 들려주지 않습니다. 비유를 우리에게 되비춥니다. 첫 아리아에서는 그리스도의 이름으로 불리는 사람들의 마음이 돌보다 굳었다고 나무랍니다. 이어지는 낭송에서는 제사장과 레위인처럼 이웃의 탄식을 듣고도 마음을 닫는 모습을 말하고, 셋째 곡에서는 사마리아 사람 같은 마음, 곧 이웃의 아픔을 함께 나누는 마음을 구합니다." },
      { tag: "감상", text: "그림은 조용한 돌봄을 보여 주고, 음악은 돌보지 못하는 마음을 나무라며 시작합니다. 분위기는 다릅니다. 테니르스와 바흐도 서로 알고 만든 사이가 아닙니다. 이 차이가 오히려 질문을 또렷하게 합니다. 전부 듣지 않아도 좋으니 첫 아리아만이라도 들어 보세요." }
    ],
    duration: "16분 24초",
    channel: "네덜란드 바흐 협회",
    playLabel: "BWV 164 감상하기",
    embedTitle: "바흐 칸타타 BWV 164 — 네덜란드 바흐 협회",
    performance: "연주: 네덜란드 바흐 협회(Netherlands Bach Society) · John Butt 지휘·하프시코드 · 2024년 9월 18일 암스테르담 왈롱 교회 녹화",
    videoId: "EjzvkC0FuMY",
    links: [
      { label: "네덜란드 바흐 협회 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-164" },
      { label: "YouTube에서 열기", url: "https://www.youtube.com/watch?v=EjzvkC0FuMY" }
    ],
    note: "소리는 자동으로 재생되지 않습니다. 재생이 어려운 곳이라면 다음 장면으로 그냥 넘어가셔도 됩니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "누가복음 10:25–37",
      lines: [
        { v: 25, t: "어떤 율법사가 일어나 예수를 시험하여 가로되 선생님 내가 무엇을 하여야 영생을 얻으리이까" },
        { v: 26, t: "예수께서 이르시되 율법에 무엇이라 기록되었으며 네가 어떻게 읽느냐" },
        { v: 27, t: "대답하여 가로되 네 마음을 다하며 목숨을 다하며 힘을 다하며 뜻을 다하여 주 너의 하나님을 사랑하고 또한 네 이웃을 네 몸과 같이 사랑하라 하였나이다" },
        { v: 28, t: "예수께서 이르시되 네 대답이 옳도다 이를 행하라 그러면 살리라 하시니" },
        { v: 29, t: "이 사람이 자기를 옳게 보이려고 예수께 여짜오되 그러면 내 이웃이 누구오니이까" },
        { v: 30, t: "예수께서 대답하여 가라사대 어떤 사람이 예루살렘에서 여리고로 내려가다가 강도를 만나매 강도들이 그 옷을 벗기고 때려 거반 죽은 것을 버리고 갔더라" },
        { v: 31, t: "마침 한 제사장이 그 길로 내려가다가 그를 보고 피하여 지나가고" },
        { v: 32, t: "또 이와 같이 한 레위인도 그곳에 이르러 그를 보고 피하여 지나가되" },
        { v: 33, t: "어떤 사마리아인은 여행하는 중 거기 이르러 그를 보고 불쌍히 여겨" },
        { v: 34, t: "가까이 가서 기름과 포도주를 그 상처에 붓고 싸매고 자기 짐승에 태워 주막으로 데리고 가서 돌보아 주고" },
        { v: 35, t: "이튿날에 데나리온 둘을 내어 주막 주인에게 주며 가로되 이 사람을 돌보아 주라 부비가 더 들면 내가 돌아 올 때에 갚으리라 하였으니" },
        { v: 36, t: "네 의견에는 이 세 사람 중에 누가 강도 만난 자의 이웃이 되겠느냐" },
        { v: 37, t: "가로되 자비를 베푼 자니이다 예수께서 이르시되 가서 너도 이와 같이 하라 하시니라" }
      ]
    },
    intro: "이 이야기는 질문 하나에서 시작해 질문 하나로 끝납니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "10:25–28", items: [
        { tag: "본문", text: "한 율법사가 일어나 예수님을 시험하며 영생을 얻으려면 무엇을 해야 하는지 묻습니다. 예수님은 답을 주시지 않고 율법에 무엇이라 쓰여 있는지 되물으십니다. 율법사는 하나님을 사랑하고 이웃을 사랑하라는 말씀으로 답하고, 예수님은 “네 대답이 옳도다. 이를 행하라”고 하십니다." },
        { tag: "관찰", text: "답을 이미 알고 있는 사람이 묻고 있습니다. 개역한글판의 난외 주는 27절의 대답이 신명기 6:5과 레위기 19:18을 이은 것임을 표시합니다." }
      ]},
      { ref: "10:29", items: [
        { tag: "본문", text: "율법사가 “자기를 옳게 보이려고” 다시 묻습니다. “내 이웃이 누구오니이까.”" },
        { tag: "해석", text: "이 물음은 이웃의 범위를 정하려는 물음으로 읽을 수 있습니다. 어디까지가 이웃이고 어디부터가 아닌지 선을 그어 달라는 질문입니다." }
      ]},
      { ref: "10:30–32", items: [
        { tag: "본문", text: "한 사람이 예루살렘에서 여리고로 내려가다 강도를 만나, 옷이 벗겨지고 맞아 반쯤 죽은 채 버려집니다. 제사장이 그 길로 내려가다 그를 보고 피하여 지나갑니다. 레위인도 그곳에 이르러 그를 보고 피하여 지나갑니다." },
        { tag: "관찰", text: "두 사람 모두 ‘보고’ 지나갑니다. 못 본 것이 아닙니다. 본문은 그들이 왜 그랬는지 적지 않습니다. 이유를 짐작하는 설명은 많지만, 본문에 없는 이야기입니다." },
        { tag: "사실", text: "예루살렘은 높은 곳에 있어서 여리고로 가는 길은 실제로 내리막입니다. ‘내려가다’는 말이 그대로 길의 모양을 가리킵니다." }
      ]},
      { ref: "10:33–35", items: [
        { tag: "본문", text: "어떤 사마리아 사람은 여행하다 그곳에 이르러 그를 보고 불쌍히 여깁니다. 가까이 가서 상처에 기름과 포도주를 붓고 싸매 주고, 자기 짐승에 태워 주막으로 데려가 돌봅니다. 이튿날에는 데나리온 둘을 주막 주인에게 주며 더 드는 비용은 돌아올 때 갚겠다고 합니다." },
        { tag: "관찰", text: "이 사람도 ‘본’ 사람입니다. 앞의 두 사람과 다른 것은 보고 난 뒤입니다. ‘불쌍히 여기다’로 옮겨진 동사는 마음 깊은 곳이 움직인다는 뜻의 말에서 온 것으로, 누가복음 15:20에서 돌아오는 아들을 본 아버지에게도 같은 계열의 동사가 쓰입니다." },
        { tag: "관찰", text: "그의 행동은 순서대로 이어집니다. 다가가고, 치료하고, 태우고, 데려가고, 밤새 돌보고, 비용을 맡기고, 다시 오겠다고 약속합니다. 데나리온 하나는 하루 품삯 정도였습니다(마태복음 20:2)." },
        { tag: "연결", text: "당시 유대인과 사마리아인은 서로 가까이 지내지 않았습니다(요한복음 4:9). 청중에게 이 구조는 낯선 방향이었을 것입니다." }
      ]},
      { ref: "10:36–37", items: [
        { tag: "본문", text: "예수님이 묻으십니다. 이 세 사람 가운데 누가 강도 만난 사람의 이웃이 되었다고 생각하느냐고. 율법사가 “자비를 베푼 자니이다”라고 답하자, 예수님은 “가서 너도 이와 같이 하라”고 하십니다." },
        { tag: "관찰", text: "질문의 방향이 바뀝니다. ‘내 이웃이 누구인가’에서 ‘누가 이웃이 되었는가’로. 또 율법사는 끝까지 ‘사마리아 사람’이라는 말을 입에 올리지 않고 “자비를 베푼 자”라고만 답합니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "레위기 19:18", tag: "연결", text: "네 이웃을 네 몸과 같이 사랑하라는 말씀입니다. 율법사의 대답(27절)에 그대로 들어 있습니다." },
      { ref: "신명기 6:5", tag: "연결", text: "마음을 다하고 뜻을 다하고 힘을 다하여 주 너의 하나님을 사랑하라는 말씀입니다. 27절의 앞부분입니다." },
      { ref: "역대하 28:8–15", tag: "연결", text: "사마리아 사람들이 포로로 끌려온 유다 사람들에게 옷과 신발을 주고, 먹이고, 기름을 바르고, 약한 사람은 나귀에 태워 여리고까지 데려다주는 장면이 있습니다. 누가가 이 이야기를 염두에 두었다고 본문이 말하지는 않지만, 장면이 닮았다고 보는 학자들이 있습니다." },
      { ref: "누가복음 15:20", tag: "연결", text: "멀리서 아들을 알아본 아버지가 ‘측은히 여겨’ 달려갑니다. 10:33의 ‘불쌍히 여겨’와 같은 계열의 동사입니다. ‘다시 품에 안기는 날’이 다루는 본문입니다." },
      { ref: "요한복음 4:9", tag: "연결", text: "유대인이 사마리아인과 상종하지 않는다는 설명이 붙어 있습니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "본문이 말하는 것: 이 이야기는 ‘내 이웃이 누구인가’라는 물음에 이웃의 명단으로 답하지 않고 ‘이웃이 되는 일’로 답합니다. 마지막 말씀은 “가서 너도 이와 같이 하라”입니다.",
        "해석의 전통: 교회 역사에는 사마리아 사람을 그리스도로, 여관을 교회로 읽는 비유적 해석이 오래 이어졌다고 알려져 있습니다(오리게네스, 아우구스티누스 등). 여기서는 그 읽기를 따르지 않고, 본문이 직접 하는 말에 머뭅니다.",
        "묵상적 적용: 아래의 질문은 본문의 해설이 아니라 독자에게 건네는 물음입니다. 본문에서 ‘멈춤’에 가장 가까운 장면은 사마리아 사람이 ‘가까이 가서’(34절) 돌보는 대목입니다."
      ]
    }
  },

  keep: {
    sentence: "이웃은 미리 정해 둔 사람이 아니었습니다. 길 위에서 마주친 사람에게 다가간 한 사람이 있었을 뿐입니다.",
    question: "오늘 나의 걸음을 멈추게 하는 사람은 누구입니까?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "누가복음 10:25–37을 읽으며 떠오른 사람이나 생각, 기도를 적어 보세요.",
    pdfCredit: "그림: 다비트 테니르스 2세, 《선한 사마리아인》(메트로폴리탄 미술관 소장, 공개 도메인 표시 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 바흐 BWV 164(링크로만 연결)."
  }),

  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-12",
    releaseStatus: "READY · Captain 신학·내용 검토 승인(2026-11-12) · 첫 공개판 수록 승인",
    groups: [
      { label: "미술작품", lines: [
          "다비트 테니르스 2세, 《선한 사마리아인》, 나무판에 유채, 17.1 × 22.9 cm. 메트로폴리탄 미술관 소장번호 89.15.25, Marquand Collection, Gift of Henry G. Marquand, 1889. 제작 연도는 미술관 기록에 없습니다.",
          "이미지: 메트로폴리탄 미술관 작품 페이지가 Public Domain으로 표시하고, 오픈 액세스 정책은 해당 이미지를 CC0로 자유 이용할 수 있다고 안내합니다(2026-11-12 확인). 미술관이 제공하는 가장 큰 이미지가 680 × 518 픽셀이어서 그대로 썼고 가공하지 않았습니다."
        ], links: [{ label: "메트로폴리탄 작품 페이지", url: "https://www.metmuseum.org/art/collection/search/437776" }, { label: "컬렉션 API 기록", url: "https://collectionapi.metmuseum.org/public/collection/v1/objects/437776" }, { label: "오픈 액세스 안내", url: "https://www.metmuseum.org/policies/open-access" }] },
      { label: "음악", lines: [
          "요한 제바스티안 바흐, 칸타타 BWV 164 〈Ihr, die ihr euch von Christo nennet〉(1725년, 저작권 소멸).",
          "연주·녹화: 네덜란드 바흐 협회, John Butt, 2024. 이 녹음의 권리는 협회에 있으며 음원을 복제하지 않고 협회의 감상 페이지와 공식 YouTube 영상으로만 연결합니다."
        ], links: [{ label: "협회 감상 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-164" }, { label: "공식 YouTube 영상", url: "https://www.youtube.com/watch?v=EjzvkC0FuMY" }] },
      { label: "성경", lines: [
          "누가복음 10:25–37, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문은 대한성서공회 온라인 성경(개역한글판)과 전 구절을 대조해 확인했습니다. 난외 주와 각주 표시는 뺐습니다."
        ], links: [{ label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "이 책의 해설과 묵상글은 필자가 새로 쓴 원고이며 기존 출판물의 문장을 옮기지 않았습니다. Captain이 신학·내용 검토와 첫 공개판 수록을 승인했습니다.",
          "참고한 성경 자료: 누가복음 10:25–37, 레위기 19:18, 신명기 6:5, 역대하 28:8–15, 누가복음 15:20, 요한복음 4:9, 마태복음 20:2. 곡 해설은 네덜란드 바흐 협회 페이지와 bach-cantatas.com의 곡 해설·가사 요약을 바탕으로 했습니다."
        ], links: [{ label: "bach-cantatas.com BWV 164", url: "https://www.bach-cantatas.com/Texts/BWV164-Eng3.htm" }] }
    ],
    records: {
      art: {
        id: "art-3", artist: "David Teniers the Younger", title: "The Good Samaritan", year: "(Met record: none)", medium: "Oil on wood",
        usedFiles: ["assets/samaritan_680.jpg"],
        derivedFrom: "Met Open Access 공개 원본(배포본에는 리사이즈 이미지와 출처 링크만 포함)",
        sourceFile: { name: "EP151.jpg", url: "https://images.metmuseum.org/CRDImages/ep/original/EP151.jpg", pixels: "680x518", bytes: 135889, sha1: "ee82f1bce5be82e65c3c6d30800677a69b85f485", identicalToUsedFile: true },
        museum: { name: "The Metropolitan Museum of Art", objectId: 437776, accession: "89.15.25", creditLine: "Marquand Collection, Gift of Henry G. Marquand, 1889", apiIsPublicDomain: true, rightsAndReproduction: "(빈 값)", url: "https://www.metmuseum.org/art/collection/search/437776" },
        processing: "가공 없음(원본 파일 복사).",
        url: "https://www.metmuseum.org/art/collection/search/437776",
        license: "CC0 / Public Domain (Met Open Access)", rightsHolder: "원작 저작권 소멸; 소장처 The Metropolitan Museum of Art",
        rightsBasisUrl: "https://www.metmuseum.org/hubs/open-access",
        useForm: "image", pdfInclude: true, pdfReason: "Met Collection API의 공개 도메인 표시 이미지; 출처와 함께 수록",
        status: "VERIFIED(권리) · PARTIAL(서지·해상도)",
        open: ["제작 연도 미기재 — 단정하지 않음", "이미지 해상도 낮음(680px) — 확대 시 흐림"],
        checkedOn: "2026-11-12"
      },
      music: {
        id: "music-3", composer: "J. S. Bach", work: "BWV 164", composerStatus: "저작권 소멸(1750 사망)",
        performance: "Netherlands Bach Society, John Butt, recorded 2024-09-18, Walloon Church Amsterdam (협회 페이지 기재)",
        officialPage: "https://www.bachvereniging.nl/en/bwv/bwv-164", officialPageChecked: "열람 확인(2026-11-12)",
        embed: { provider: "YouTube", videoId: "EjzvkC0FuMY", channel: "Netherlands Bach Society", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 984, autoplay: false, loadedOnlyAfterTap: true, idSource: "협회 페이지 HTML의 data-youtube-id" },
        audioFilesHosted: false,
        url: "https://www.bachvereniging.nl/en/bwv/bwv-164",
        license: "저작권 있는 현대 연주·녹화; 공식 링크/허용 임베드만", rightsHolder: "Netherlands Bach Society",
        rightsBasisUrl: "https://www.youtube.com/watch?v=EjzvkC0FuMY",
        useForm: "embed, link, summary", pdfInclude: false, pdfReason: "PDF에 음원·영상·가사·포스터를 복제하지 않음",
        connection: "직접 연결(같은 주일 · 가사가 사마리아 사람·제사장·레위인을 언급)",
        status: "VERIFIED(페이지·영상 ID·임베드 가능 확인) · PARTIAL(복음서 본문 대응은 협회 페이지가 아닌 bach-cantatas.com 해설 기준)",
        open: ["주일 복음서 본문(누가복음 10:23–37)은 bach-cantatas.com 해설에 의존 — 협회 페이지는 복음서 본문을 적지 않음"],
        checkedOn: "2026-11-12"
      },
      bible: {
        id: "bible-3", translation: "개역한글판(1961)", range: "누가복음 10:25–37",
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
      commentary: { id: "text-3", authorship: "자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "summary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED", open: [], checkedOn: "2026-11-12", approvedBy: "Captain", approvedOn: "2026-11-12" }
    }
  }
});
