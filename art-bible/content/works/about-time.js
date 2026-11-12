/* ART-BIBLE-005 · 사랑이라는 작은 기적 — 영화 《어바웃 타임》(2013) · 엘리 굴딩 〈How Long Will I Love You〉 · 전도서 3:12–13
   첫 영화·대중음악 연결 특별판. 구조 설명은 storm-in-galilee.js 맨 위 주석 참고. */
ArtBook.register({
  id: "about-time",
  editorialId: "ART-BIBLE-005",

  meta: {
    status: "approved",
    preview: false,
    summary: "시간을 되돌릴 수 있는 영화 속 청년과, 시간을 마음대로 할 수 없다고 말하는 전도서. 평범한 하루를 어떻게 바라볼지 묻는 짧은 특별편입니다.",
    themes: ["사랑", "평범한 하루", "시간", "감사", "일상의 선물", "함께 살아가는 기쁨"],
    tags: ["영화", "어바웃 타임", "About Time", "리처드 커티스", "로맨스", "시간여행", "전도서", "때", "일상", "먹고 마시는 기쁨", "선물", "대중음악", "엘리 굴딩"],
    bible: {
      books: ["전도서"], bookAliases: ["전도"],
      ranges: ["전도서 3:12–13"],
      related: ["전도서 3:1–15", "전도서 2:24", "전도서 5:18–20", "전도서 8:15", "전도서 9:7–9", "시편 90:12"]
    },
    art: { artist: "영화 《어바웃 타임》", artistAliases: ["영화 《어바웃 타임》", "어바웃 타임", "About Time", "리처드 커티스", "Richard Curtis"], title: "함께 걷는 저녁", titleAliases: ["연인 일러스트"], year: 2026 },
    music: { composer: "마이크 스콧(작곡·작사) · 엘리 굴딩(연주)", composerAliases: ["엘리 굴딩", "Ellie Goulding", "Mike Scott", "워터보이스"], work: "How Long Will I Love You", workAliases: ["How Long Will I Love You?", "어바웃 타임 OST"] },
    cover: { src: "assets/about-time_480.jpg", alt: "노을 속에서 손을 잡고 걸으며 서로를 바라보고 웃는 두 사람" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "특별판 · 영화 연결 · Captain 공개 수록 승인",
  title: "사랑이라는 작은 기적",
  passage: "전도서 3:12–13",
  themes: "영화 《어바웃 타임》 · 사랑 · 평범한 하루",

  scenes: [
    { id: "s1", name: "사랑스러운 하루" },
    { id: "s2", name: "영화 속에서 발견하다" },
    { id: "s3", name: "음악에 귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "나의 하루를 간직하다" }
  ],

  look: {
    image: {
      src: "assets/about-time_941.jpg",
      srcset: "assets/about-time_480.jpg 480w, assets/about-time_941.jpg 941w",
      zoom: "assets/about-time_941.jpg",
      width: 941, height: 1671,
      alt: "노을이 번지는 저녁, 곱슬한 갈색 머리의 남자와 머리를 올려 묶은 여자가 손을 맞잡고 걸으며 서로를 바라보고 웃는다. 여자는 꽃무늬 원피스에 붉은 숄을 두르고 들꽃이 담긴 바구니를 멨고, 뒤로는 분홍 꽃과 흐릿한 가로등이 보인다."
    },
    caption: {
      artist: "AI 생성 이미지",
      work: "《함께 걷는 저녁》",
      meta: "디지털 이미지 · AI 생성",
      owner: "사랑과 일상의 소중함을 표현한 독창적인 일러스트입니다.",
      notes: ["영화의 정서를 떠올리게 하려는 그림이며, 영화의 장면이나 공식 홍보 이미지가 아니고 영화의 인물을 그린 것도 아닙니다."]
    },
    prompt: "두 사람이 맞잡은 손과, 서로를 바라보는 표정을 천천히 따라가 보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "시간을 되돌릴 수 있다면, 사람은 무엇을 바꾸고 싶어 할까요. 영화는 그런 능력을 얻은 청년을 따라가며, 큰일보다 하루하루에 눈길을 두게 합니다.",
    items: [
      { tag: "사실", text: "《어바웃 타임》(About Time)은 리처드 커티스가 쓰고 감독한 2013년 영국 영화입니다. 상영 시간은 123분이고, 영국에서는 2013년 9월 4일, 미국에서는 11월 1일에 제한 개봉했습니다. 팀은 도널 글리슨, 메리는 레이철 맥애덤스, 팀의 아버지는 빌 나이가 연기했습니다." },
      { tag: "사실", text: "청년 팀은 어느 날 아버지에게서, 집안의 남자들은 이미 지나온 순간으로 돌아갈 수 있다는 말을 듣습니다." },
      { tag: "사실", text: "팀은 곧 이 능력에 한계가 있다는 것을 겪습니다. 과거를 고치면 지금이 달라지고, 되돌아가도 다른 사람의 마음까지 바꿀 수는 없습니다." },
      { tag: "관찰", text: "아버지는 이 능력으로 돈이나 명성을 얻으려 하지 말라고 조언하고, 하루를 두 번 살아 보라고 권합니다. 첫 번째는 평소처럼 걱정과 긴장 속에서 살고, 두 번째는 같은 하루를 다시 지나며 세상이 얼마나 다정할 수 있는지 살펴보는 것입니다." },
      { tag: "해석", text: "아버지의 조언을 따라가 보면, 이 영화의 시간여행은 큰일을 이루는 도구라기보다 하루를 다시 바라보는 방법에 가까워 보입니다." },
      { tag: "추정", text: "시간을 되돌리지 않아도, 처음 사는 하루를 두 번째처럼 바라볼 수는 없을까요." },
      { tag: "사실", text: "영화에 대한 평가는 엇갈렸습니다. 일부 비평가는 시간여행의 규칙이 일관되지 않다고 지적했습니다." }
    ],
    again: "어제 하루 가운데, 한 번 더 천천히 지나가 보고 싶은 순간이 있었나요."
  },

  listen: {
    work: "엘리 굴딩 · How Long Will I Love You",
    titleDe: "(원곡: 워터보이스, 1990 · 작곡·작사 마이크 스콧)",
    titleKo: "나는 얼마나 오래 당신을 사랑할까요 (제목 번역)",
    items: [
      { tag: "사실", text: "이 곡은 마이크 스콧이 쓴 노래입니다. 스콧의 밴드 워터보이스가 1990년 앨범 《Room to Roam》에 먼저 실었고, 엘리 굴딩의 녹음은 2013년 《어바웃 타임》 사운드트랙에 실렸고, 그해 11월 정식 싱글로 발매되었습니다." },
      { tag: "사실", text: "사운드트랙 앨범에는 같은 곡이 두 번 나옵니다. 하나는 존 보든·샘 스위니·벤 콜먼의 편곡이고, 다른 하나가 엘리 굴딩의 노래입니다. 이 곡은 사운드트랙에 실린 노래이며, 영화 본편에서 어느 버전이 쓰였는지는 확인하지 못했습니다." },
      { tag: "감상", text: "제목이 그대로 질문입니다. 사랑이 얼마나 오래갈지, 시간의 길이를 묻습니다. ‘때’를 말하는 전도서와 이어 들어도 좋지만, 두 작품이 서로를 염두에 두고 만들어진 것은 아닙니다. 가사는 공식 감상처에서 직접 확인해 보세요." },
      { tag: "사실", text: "공식 영상은 엘리 굴딩의 공식 채널이 2013년 9월 8일에 올린 것으로(약 2분 43초), 제목에 ‘from the About Time OST’가 붙어 있습니다. 영상에는 영화 장면이 섞여 있을 수 있습니다." }
    ],
    duration: "2분 43초",
    channel: "엘리 굴딩 공식 채널",
    playLabel: "How Long Will I Love You 감상하기",
    embedTitle: "Ellie Goulding — How Long Will I Love You (from the About Time OST) · 공식 영상",
    performance: "연주: 엘리 굴딩(Ellie Goulding) · 작곡·작사: 마이크 스콧(Mike Scott) · 공식 영상은 YouTube에서 불러옵니다.",
    videoId: "B2KKcjSOBmk",
    links: [
      { label: "YouTube에서 열기(공식 영상)", url: "https://www.youtube.com/watch?v=B2KKcjSOBmk" },
      { label: "곡 소개(위키백과)", url: "https://en.wikipedia.org/wiki/How_Long_Will_I_Love_You%3F" }
    ],
    note: "소리는 자동으로 재생되지 않습니다. 재생이 어려운 곳이라면 다음 장면으로 그냥 넘어가셔도 됩니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "전도서 3:1–15",
      lines: [
        { v: 1, t: "천하에 범사가 기한이 있고 모든 목적이 이룰 때가 있나니" },
        { v: 2, t: "날 때가 있고 죽을 때가 있으며 심을 때가 있고 심은 것을 뽑을 때가 있으며" },
        { v: 3, t: "죽일 때가 있고 치료 시킬 때가 있으며 헐 때가 있고 세울 때가 있으며" },
        { v: 4, t: "울 때가 있고 웃을 때가 있으며 슬퍼할 때가 있고 춤출 때가 있으며" },
        { v: 5, t: "돌을 던져 버릴 때가 있고 돌을 거둘 때가 있으며 안을 때가 있고 안는 일을 멀리 할 때가 있으며" },
        { v: 6, t: "찾을 때가 있고 잃을 때가 있으며 지킬 때가 있고 버릴 때가 있으며" },
        { v: 7, t: "찢을 때가 있고 꿰맬 때가 있으며 잠잠할 때가 있고 말할 때가 있으며" },
        { v: 8, t: "사랑할 때가 있고 미워할 때가 있으며 전쟁할 때가 있고 평화할 때가 있느니라" },
        { v: 9, t: "일하는 자가 그 수고로 말미암아 무슨 이익이 있으랴" },
        { v: 10, t: "하나님이 인생들에게 노고를 주사 애쓰게 하신 것을 내가 보았노라" },
        { v: 11, t: "하나님이 모든 것을 지으시되 때를 따라 아름답게 하셨고 또 사람에게 영원을 사모하는 마음을 주셨느니라 그러나 하나님의 하시는 일의 시종을 사람으로 측량할 수 없게 하셨도다" },
        { v: 12, t: "사람이 사는 동안에 기뻐하며 선을 행하는 것보다 나은 것이 없는 줄을 내가 알았고" },
        { v: 13, t: "사람마다 먹고 마시는 것과 수고함으로 낙을 누리는 것이 하나님의 선물인 줄을 또한 알았도다" },
        { v: 14, t: "무릇 하나님의 행하시는 것은 영원히 있을 것이라 더 할 수도 없고 덜 할 수도 없나니 하나님이 이같이 행하심은 사람으로 그 앞에서 경외하게 하려 하심인 줄을 내가 알았도다" },
        { v: 15, t: "이제 있는 것이 옛적에 있었고 장래에 있을 것도 옛적에 있었나니 하나님은 이미 지난 것을 다시 찾으시느니라" }
      ]
    },
    intro: "중심은 12–13절이지만, 이 두 절은 앞뒤 문맥과 함께 읽어야 뜻이 어긋나지 않습니다. 그래서 1–15절을 함께 싣고 네 덩어리로 나누어 읽습니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "3:1–8", items: [
        { tag: "본문", text: "모든 일에 때가 있다고 말하며, 날 때와 죽을 때, 울 때와 웃을 때, 안을 때와 멀리 할 때 같은 짝을 늘어놓습니다. 8절에는 ‘사랑할 때’와 ‘미워할 때’가 나란히 나옵니다." },
        { tag: "관찰", text: "열네 쌍의 때가 이어지지만, 사람이 그 때를 고른다고는 하지 않습니다. 사람은 때를 정하는 쪽이 아니라 때 안에서 사는 쪽에 서 있습니다." }
      ]},
      { ref: "3:9–11", items: [
        { tag: "본문", text: "일하는 사람에게 무슨 이익이 있느냐고 묻고, 하나님이 사람에게 애쓸 일을 주셨다고 말합니다. 하나님은 모든 것을 때에 맞게 아름답게 하셨고 사람에게 영원을 사모하는 마음도 주셨지만, 하나님이 하시는 일을 처음부터 끝까지 사람이 헤아릴 수는 없다고 합니다(11절)." },
        { tag: "관찰", text: "이 대목은 위로만 건네지 않습니다. 수고는 고되고, 일의 전체는 사람에게 다 보이지 않는다고 말합니다." },
        { tag: "해석", text: "‘영원’으로 옮긴 히브리어 낱말의 뜻은 번역과 연구자에 따라 갈립니다. 개역한글판은 이를 ‘영원’이라고 옮겼습니다." }
      ]},
      { ref: "3:12–13", items: [
        { tag: "본문", text: "그런 가운데서도 화자는, 사는 동안 기뻐하며 선을 행하는 것보다 나은 것이 없다고 말합니다. 먹고 마시는 일, 수고하면서 누리는 낙도 하나님의 선물이라고 합니다." },
        { tag: "관찰", text: "여기서 기쁨은 수고를 건너뛴 자리에서 오지 않습니다. 수고하는 가운데 누리는 낙이며, 사람이 이룬 성취가 아니라 선물이라고 불립니다." },
        { tag: "해석", text: "12절의 ‘선을 행하다’는 번역에 따라 ‘즐겁게 지내다’처럼 옮기기도 합니다. 어느 쪽으로 읽어도 두 절이 가리키는 것은 거창한 일이 아니라 먹고 마시고 일하는 날들입니다." }
      ]},
      { ref: "3:14–15", items: [
        { tag: "본문", text: "하나님이 행하시는 일은 영원히 있고, 더 할 수도 덜 할 수도 없다고 합니다. 하나님이 그렇게 하시는 것은 사람이 그분 앞에서 경외하게 하려는 것이라고 말합니다." },
        { tag: "해석", text: "15절 끝 문장은 번역과 해석이 갈리는 곳입니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "전도서 2:24", tag: "연결", text: "먹고 마시며 수고하는 가운데 낙을 누리는 것보다 나은 것이 없다고 하면서, 그것이 하나님의 손에서 난다고 말합니다. 3:12–13과 같은 생각이 앞서 한 번 나옵니다." },
      { ref: "전도서 5:18", tag: "연결", text: "하나님이 주신 일평생 동안 수고 가운데서 낙을 누리는 것을 ‘분복’이라고 부릅니다." },
      { ref: "전도서 8:15", tag: "연결", text: "기쁨(‘희락’)을 칭찬하며, 사람이 수고하는 날들 동안 그 기쁨이 함께 있을 것이라고 말합니다." },
      { ref: "전도서 9:7–9", tag: "연결", text: "이 기쁨을 가까운 사람과 나누라는 말로 이어집니다. 9절은 하나님이 주신 ‘헛된’ 날들 동안 사랑하는 아내와 함께 즐겁게 살라고 권합니다. 이 편의 ‘사랑’이라는 주제와 가장 가까운 본문입니다." },
      { ref: "시편 90:12", tag: "대조", text: "‘우리 날 계수함을 가르치사 지혜의 마음을 얻게 하소서’라는 기도입니다. 시간을 다룰 수 있는 사람이 아니라 시간을 세는 법을 배우는 사람의 자리에서 말합니다." }
    ],
    care: {
      title: "영화와 말씀, 어디서 만나고 어디서 다른가",
      lines: [
        "만나는 곳: 영화 속 아버지의 조언과 전도서 3:12–13은 모두, 큰일보다 평범한 하루에 눈을 돌리게 합니다.",
        "다른 곳: 영화에서 시간은 사람이 다룰 수 있는 능력입니다. 전도서에서 때는 사람이 정하지 못하는 것이고, 하나님이 하시는 일의 처음과 끝도 사람이 헤아릴 수 없습니다(3:11). 그래서 전도서의 기쁨은 하루를 다시 살아서가 아니라, 주어진 오늘을 선물로 받는 데서 나온다고 읽을 수 있습니다.",
        "전도서 3장은 ‘매 순간 행복하자’는 낙관주의가 아닙니다. 같은 장이 수고와 죽음, 사람이 다 헤아릴 수 없음도 말합니다(3:9–11, 19–20). 일상의 기쁨은 그 한계를 지우는 것이 아니라, 그 안에서 받는 선물입니다.",
        "묵상: 다음 장면의 질문은 본문의 뜻풀이가 아니라 독자에게 건네는 물음입니다. 영화의 이야기와 성경의 말씀은 같은 말을 하지 않습니다."
      ]
    }
  },

  keep: {
    sentence: "오늘 하루는 한 번뿐입니다. 곁에 있는 사람에게 건네는 말이, 오늘은 조금 더 다정해도 좋겠습니다.",
    question: "오늘이 다시 돌아오지 않는 하루라면, 나는 사랑하는 사람에게 무엇을 더 다정하게 말하고 싶을까요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "전도서 3:12–13을 읽으며 떠오른 오늘의 하루, 고마운 사람, 기도를 적어 보세요.",
    pdfCredit: "영화 《어바웃 타임》(2013, 리처드 커티스)과 노래 〈How Long Will I Love You〉(마이크 스콧 작곡·작사)는 링크로만 소개하며 이 문서에 복제하지 않았습니다. 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸."
  }),

  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-12",
    releaseStatus: "READY · Captain 특별판 공개 수록 승인(2026-11-12) · 같은 웹북 수록",
    groups: [
      { label: "영화", lines: [
          "《어바웃 타임》(About Time, 2013). 각본·감독 리처드 커티스, 제작사 워킹 타이틀 필름스·렐러티비티 미디어, 배급 유니버설 픽처스. 영화의 포스터·스틸컷·예고편은 이 책에 싣지 않았습니다.",
          "영화 정보와 줄거리는 제작사 워킹 타이틀 필름스의 공식 작품 페이지와 대조했습니다. 영화 대사는 인용하지 않았으며 해설은 필자가 새로 쓴 글입니다."
        ], links: [{ label: "워킹 타이틀 공식 작품 페이지", url: "https://www.workingtitlefilms.com/film/about-time/" }] },
      { label: "이미지", lines: [
          "이미지: AI 생성 이미지",
          "영화의 포스터나 실제 장면이 아니며 영화의 인물을 그린 것도 아닙니다. Captain이 ChatGPT에서 생성한 이미지이며, OpenAI 이용약관의 출력물 권리 조항을 근거로 수록합니다."
        ], links: [{ label: "OpenAI 이용약관", url: "https://openai.com/policies/terms-of-use/" }] },
      { label: "음악", lines: [
          "〈How Long Will I Love You〉: 작곡·작사 마이크 스콧. 워터보이스 1990 원곡, 엘리 굴딩 2013 연주. 작곡·작사의 권리와 녹음·연주의 권리가 따로 있으며, 모두 저작권이 살아 있는 곡으로 보고 다룹니다.",
          "이 책은 음원 파일과 가사를 담지 않고 엘리 굴딩 공식 채널의 YouTube 공식 영상을 누를 때만 불러옵니다."
        ], links: [{ label: "공식 영상(YouTube)", url: "https://www.youtube.com/watch?v=B2KKcjSOBmk" }, { label: "곡 항목(위키백과)", url: "https://en.wikipedia.org/wiki/How_Long_Will_I_Love_You%3F" }, { label: "사운드트랙 항목(위키백과)", url: "https://en.wikipedia.org/wiki/About_Time_(soundtrack)" }] },
      { label: "성경", lines: [
          "전도서 3:1–15, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문은 대한성서공회 온라인 성경(개역한글판)과 대조해 확인했습니다. 난외 주는 뺐습니다. 관련 본문 2:24, 5:18, 8:15, 9:7–9, 시편 90:12는 같은 곳에서 내용을 확인했으나 본문을 싣지는 않았습니다."
        ], links: [{ label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "이 책의 해설과 묵상글은 필자가 새로 쓴 원고이며 기존 출판물의 문장을 옮기지 않았습니다. Captain이 특별판의 같은 웹북 공개 수록을 승인했습니다."
        ], links: [] }
    ],
    records: {
      film: {
        id: "film-5", title: "About Time", year: 2013, director: "Richard Curtis", distributor: "Universal Pictures", production: "Working Title Films; Relativity Media",
        url: "https://www.workingtitlefilms.com/film/about-time/", checkedOn: "2026-11-12",
        license: "저작권 있는 영화(권리자: 제작·배급사); 이 책은 영화의 이미지·영상·대사를 복제하지 않음", rightsHolder: "Working Title Films / Universal Pictures 등 영화 권리자",
        rightsBasisUrl: "https://www.workingtitlefilms.com/film/about-time/",
        useForm: "summary",  pdfInclude: false, pdfReason: "영화 이미지·대사를 PDF에 복제하지 않음",
        status: "VERIFIED(제작사 공식 작품 페이지로 작품 정보·줄거리 대조; 이미지·영상·대사 미복제)",
        open: []
      },
      art: {
        id: "art-5", artist: "Captain(GPT 이미지 생성으로 제작)", title: "함께 걷는 저녁", year: 2026, medium: "디지털 이미지(AI 생성)",
        workId: "about-time", creator: "Captain", method: "GPT 이미지 생성(사용한 프롬프트·모델 버전은 기록 없음)",
        madeOn: "확인 불가 — 작업 환경에 첨부된 파일 시각 2026-11-12(실제 제작일 아님)",
        originalFileHosted: false,
        originalNote: "원본 파일은 공개 배포본에 포함하지 않고 웹용 리사이즈 이미지 두 장만 수록합니다.",
        usedFiles: ["assets/about-time_480.jpg", "assets/about-time_941.jpg"],
        processing: "PNG 원본을 JPEG(품질 90)로 변환하고 480px 폭 축소본을 추가했습니다. 확대·보정·자르기는 하지 않았습니다.",
        license: "OpenAI 이용약관상 사용자가 출력물을 소유(적용 법률이 허용하는 범위)", rightsHolder: "Captain",
        url: "https://openai.com/policies/terms-of-use/", rightsBasisUrl: "https://openai.com/policies/terms-of-use/",
        useForm: "image", pdfInclude: true, pdfReason: "Captain 생성 출력물이며 OpenAI 이용약관의 출력물 권리 조항을 확인; 출처와 함께 PDF 수록",
        status: "VERIFIED(제작자 확인·OpenAI 출력물 권리 조항 확인·영화 포스터/스틸 미사용·시각 검토상 특정 배우 재현 아님)",
        open: [],
        checkedOn: "2026-11-12"
      },
      music: {
        id: "music-5", composer: "Mike Scott", work: "How Long Will I Love You (The Waterboys 1990; Ellie Goulding 2013)",
        composerStatus: "저작권 있음(작곡·작사 마이크 스콧)",
        performance: "Ellie Goulding, 2013 (공식 YouTube 영상 업로드 2013-09-08, 채널 EllieGouldingVEVO)",
        embed: { provider: "YouTube", videoId: "B2KKcjSOBmk", channel: "EllieGouldingVEVO", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 163, autoplay: false, loadedOnlyAfterTap: true, idSource: "위키백과 곡 항목의 공식 영상 링크 + oEmbed 제목·채널 확인" },
        audioFilesHosted: false, lyricsIncluded: false,
        url: "https://www.youtube.com/watch?v=B2KKcjSOBmk",
        license: "저작권 있는 곡·녹음; 공식 채널의 허용 임베드와 링크만 사용", rightsHolder: "곡: 마이크 스콧 및 음악출판 권리자 / 녹음: 엘리 굴딩 음반사(확인 안 함)",
        rightsBasisUrl: "https://www.youtube.com/watch?v=B2KKcjSOBmk",
        useForm: "embed, link, summary", pdfInclude: false, pdfReason: "음원·영상·가사를 PDF에 복제하지 않음",
        connection: "사운드트랙 앨범 수록(영화 본편 사용 버전은 미확인)",
        status: "VERIFIED(공식 채널 영상·임베드 가능 확인; 음원·가사·영상 파일 미복제)",
        open: [],
        checkedOn: "2026-11-12"
      },
      bible: {
        id: "bible-5", translation: "개역한글판(1961)", range: "전도서 3:1–15",
        copyright: "대한성서공회 안내 표: 성경전서 개역한글판 최초 발행 1961-07-10, 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        textSource: "대한성서공회 온라인 성경 개역한글판(version=HAN) 전도서 3장 1–15절을 내려받아 전 구절 대조(난외 주 제외)",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회",
        rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 대조·보호기간 소멸 확인)",
        open: [], notUsed: ["개역개정판", "새번역", "표준새번역", "공동번역"],
        checkedOn: "2026-11-12"
      },
      commentary: { id: "text-5", authorship: "자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "summary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED", open: [], checkedOn: "2026-11-12", approvedBy: "Captain", approvedOn: "2026-11-12", approvalBasis: "같은 웹북의 특별판 공개 수록 지시" }
    }
  }
});
