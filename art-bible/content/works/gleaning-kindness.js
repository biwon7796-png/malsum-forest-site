/* ART-BIBLE-010 · 남겨진 이삭을 줍는 마음 — 장프랑수아 밀레 · 스팅 《Fields of Gold》 · 룻기 2장
   승인된 상세 편집 기획 v0.2에 따라 제작하고 Captain이 2026-11-16 공개를 승인한 기본편. */
ArtBook.register({
  id: "gleaning-kindness",

  meta: {
    status: "candidate",
    summary: "고개 숙여 이삭을 줍는 노동을 바라보고, 공동체가 누군가의 생존과 안전을 위해 의도적으로 몫을 남겨 두는 룻기 2장의 은혜에 머뭅니다.",
    themes: ["노동", "배려", "보호"],
    tags: ["룻", "나오미", "보아스", "이삭줍기", "기업 무를 자", "밀레", "이삭 줍는 여인들", "Fields of Gold", "스팅"],
    bible: { books: ["룻기"], bookAliases: ["룻"], ranges: ["룻기 2장"], related: ["룻기 1:16–22", "레위기 19:9–10", "신명기 24:19–22", "룻기 3–4장"] },
    art: { artist: "장프랑수아 밀레", artistAliases: ["Jean-François Millet"], title: "이삭 줍는 여인들", titleAliases: ["Des glaneuses", "The Gleaners"], year: "1857" },
    music: { composer: "스팅", composerAliases: ["Sting"], work: "Fields of Gold", workAliases: ["필즈 오브 골드"], performer: "Sting" },
    cover: { src: "assets/gleaners-480.jpg", alt: "넓은 수확 들판 앞에서 세 여인이 허리를 굽혀 떨어진 이삭을 줍는 밀레의 그림" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "기본편 · Captain 공개 승인본",
  title: "남겨진 이삭을 줍는 마음",
  passage: "룻기 2장",
  themes: "노동 · 배려 · 보호",

  scenes: [
    { id: "s1", name: "바라보다" }, { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" }, { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/gleaners-1280.jpg", srcset: "assets/gleaners-480.jpg 480w, assets/gleaners-1280.jpg 1280w", zoom: "assets/gleaners-1280.jpg",
      width: 1280, height: 958,
      alt: "황금빛 들판의 전경에서 세 농촌 여성이 땅을 향해 깊이 허리를 굽히거나 몸을 조금 일으킨 채 떨어진 이삭을 줍는다. 멀리에는 풍성한 곡식단과 수레, 일꾼들과 말을 탄 감독자가 보인다."
    },
    caption: {
      artist: "장프랑수아 밀레 (Jean-François Millet, 1814–1875)",
      work: "《이삭 줍는 여인들》",
      meta: "1857년 · 캔버스에 유채 · 83.5 × 110 cm",
      owner: "오르세 미술관 소장 · RF 592",
      notes: ["수록 파일은 Google Art Project 공개본을 바탕으로 Wikimedia Commons가 퍼블릭 도메인으로 표시한 충실한 복제 이미지입니다. 비율과 색을 유지한 채 화면 크기만 줄였습니다."]
    },
    prompt: "땅 가까이 반복해서 움직이는 세 사람의 몸에서 시작해, 멀리 쌓인 풍성한 수확과 그 사이의 거리를 천천히 바라보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "밀레는 수확의 풍요보다 그 뒤에 남은 이삭을 하나씩 줍는 노동을 화면 앞에 크게 놓았습니다.",
    items: [
      { tag: "사실", text: "밀레가 1857년 살롱에 출품한 유화입니다. 오르세 미술관은 세 농촌 노동자가 해질녘에 추수 뒤 놓친 이삭을 줍는 장면으로 설명합니다." },
      { tag: "관찰", text: "세 사람은 줍고, 손을 옮기고, 잠시 몸을 일으키는 서로 다른 순간에 놓입니다. 반복되는 굽은 등과 거친 손이 고된 동작의 연속을 느끼게 합니다." },
      { tag: "해석", text: "전경의 단단하고 큰 몸들과 멀리 쌓인 곡식, 수레와 감독자의 대비는 노동의 존엄을 드러내면서도 풍요를 소유한 이들과 남은 것을 모으는 이들 사이의 사회적 거리를 감추지 않습니다." },
      { tag: "연결", text: "룻도 타인의 밭에서 베는 자를 따라 이삭을 줍습니다. 그림의 낮은 몸짓은 생존을 위해 아침부터 저녁까지 일한 룻의 노동을 오래 바라보게 합니다." },
      { tag: "구별", text: "이 그림은 19세기 프랑스 농촌의 세 여성을 그린 작품이지, 고대 유다의 모압 여인 룻을 묘사한 성화가 아닙니다. 닮은 노동을 통해 본문과 대화할 뿐 두 시대를 같은 장면으로 합치지 않습니다." }
    ],
    again: "다시 보세요. 세 사람의 손 가까이에 남은 양과, 멀리 쌓인 수확의 양을 함께 살펴보세요."
  },

  listen: {
    work: "스팅 · 《Fields of Gold》",
    titleDe: "Fields of Gold",
    titleKo: "황금빛 들판 — Spotify 공식 미리듣기",
    items: [
      { tag: "사실", text: "스팅이 쓰고 노래해 1993년에 발표한 곡입니다. Spotify가 공식 제공하는 동일 곡의 허용 임베드로 미리듣습니다." },
      { tag: "관찰", text: "부드럽게 반복되는 기타와 절제된 목소리가 넓은 들판을 서두르지 않고 걸어가는 듯한 흐름을 만듭니다. 선율이 되돌아올 때마다 기억의 결이 어떻게 달라지는지 들어 보세요." },
      { tag: "해석", text: "노래 속 황금빛 들판은 사랑과 시간이 남긴 기억의 장소입니다. 룻기의 들판을 직접 설명하지는 않지만, 한 장소에서 쌓이는 관계와 돌봄의 기억을 생각하게 합니다." },
      { tag: "구별", text: "이 곡은 룻이나 이삭줍기를 노래한 성가가 아닙니다. ‘황금빛 들판’이라는 이미지와 관계를 기억하는 정서가 본문과 간접적으로 대화합니다." }
    ],
    duration: "30초 미리듣기",
    channel: "Spotify 공식 제공",
    playLabel: "황금빛 들판 감상하기",
    embedTitle: "Sting — Fields of Gold Spotify 공식 플레이어",
    performance: "노래: Sting · Spotify 공식 임베드 플레이어 제공",
    embedProvider: "spotify",
    embedUrl: "https://open.spotify.com/embed/track/1exUmVPVMO5cIKSaup8qpI?utm_source=generator",
    externalPlayUrl: "https://open.spotify.com/track/1exUmVPVMO5cIKSaup8qpI",
    links: [
      { label: "Spotify 공식 곡 페이지", url: "https://open.spotify.com/track/1exUmVPVMO5cIKSaup8qpI" }
    ],
    note: "버튼을 누르기 전에는 플레이어와 소리가 불러와지지 않습니다. 자동재생하지 않으며 음원 파일을 저장하지 않습니다. 미리듣기 길이는 Spotify의 제공 조건에 따릅니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)", range: "룻기 2장",
      lines: [
        { v: 1, t: "나오미의 남편 엘리멜렉의 친족 중 유력한 자가 있으니 이름은 보아스더라" },
        { v: 2, t: "모압 여인 룻이 나오미에게 이르되 나로 밭에 가게 하소서 내가 뉘게 은혜를 입으면 그를 따라서 이삭을 줍겠나이다 나오미가 그에게 이르되 내 딸아 갈찌어다 하매" },
        { v: 3, t: "룻이 가서 베는 자를 따라 밭에서 이삭을 줍는데 우연히 엘리멜렉의 친족 보아스에게 속한 밭에 이르렀더라" },
        { v: 4, t: "마침 보아스가 베들레헴에서부터 와서 베는 자들에게 이르되 여호와께서 너희와 함께 하시기를 원하노라 그들이 대답하되 여호와께서 당신에게 복 주시기를 원하나이다" },
        { v: 5, t: "보아스가 베는 자들을 거느린 사환에게 이르되 이는 뉘 소녀냐" },
        { v: 6, t: "베는 자를 거느린 사환이 대답하여 가로되 이는 나오미와 함께 모압 지방에서 돌아온 모압 소녀인데" },
        { v: 7, t: "그의 말이 나로 베는 자를 따라 단 사이에서 이삭을 줍게 하소서 하였고 아침부터 와서는 잠시 집에서 쉰 외에 지금까지 계속하는 중이니이다" },
        { v: 8, t: "보아스가 룻에게 이르되 내 딸아 들으라 이삭을 주우러 다른 밭으로 가지 말며 여기서 떠나지 말고 나의 소녀들과 함께 있으라" },
        { v: 9, t: "그들의 베는 밭을 보고 그들을 따르라 내가 그 소년들에게 명하여 너를 건드리지 말라 하였느니라 목이 마르거든 그릇에 가서 소년들의 길어 온 것을 마실찌니라" },
        { v: 10, t: "룻이 땅에 엎드려 절하며 그에게 이르되 나는 이방 여인이어늘 당신이 어찌하여 내게 은혜를 베푸시며 나를 돌아보시나이까" },
        { v: 11, t: "보아스가 그에게 대답하여 가로되 네 남편이 죽은 후로 네가 시모에게 행한 모든 것과 네 부모와 고국을 떠나 전에 알지 못하던 백성에게로 온 일이 내게 분명히 들렸느니라" },
        { v: 12, t: "여호와께서 네 행한 일을 보응하시기를 원하며 이스라엘의 하나님 여호와께서 그 날개 아래 보호를 받으러 온 네게 온전한 상 주시기를 원하노라" },
        { v: 13, t: "룻이 가로되 내 주여 내가 당신께 은혜 입기를 원하나이다 나는 당신의 시녀의 하나와 같지 못하오나 당신이 이 시녀를 위로하시고 마음을 기쁘게 하는 말씀을 하셨나이다" },
        { v: 14, t: "식사할 때에 보아스가 룻에게 이르되 이리로 와서 떡을 먹으며 네 떡 조각을 초에 찍으라 룻이 곡식 베는 자 곁에 앉으니 그가 볶은 곡식을 주매 룻이 배불리 먹고 남았더라" },
        { v: 15, t: "룻이 이삭을 주우러 일어날 때에 보아스가 자기 소년들에게 명하여 가로되 그로 곡식 단 사이에서 줍게 하고 책망하지 말며" },
        { v: 16, t: "또 그를 위하여 줌에서 조금씩 뽑아 버려서 그로 줍게 하고 꾸짖지 말라 하니라" },
        { v: 17, t: "룻이 밭에서 저녁까지 줍고 그 주운 것을 떠니 보리가 한 에바쯤 되는지라" },
        { v: 18, t: "그것을 가지고 성읍에 들어가서 시모에게 그 주운 것을 보이고 그 배불리 먹고 남긴 것을 내어 시모에게 드리매" },
        { v: 19, t: "시모가 그에게 이르되 오늘 어디서 주웠느냐 어디서 일을 하였느냐 너를 돌아본 자에게 복이 있기를 원하노라 룻이 누구에게서 일한 것을 시모에게 알게 하여 가로되 오늘 일하게 한 사람의 이름은 보아스니이다" },
        { v: 20, t: "나오미가 자부에게 이르되 여호와의 복이 그에게 있기를 원하노라 그가 생존한 자와 사망한 자에게 은혜 베풀기를 그치지 아니하도다 나오미가 또 그에게 이르되 그 사람은 우리의 근족이니 우리 기업을 무를 자 중 하나이니라" },
        { v: 21, t: "모압 여인 룻이 가로되 그가 내게 또 이르기를 내 추수를 다 마치기까지 너는 내 소년들에게 가까이 있으라 하더이다" },
        { v: 22, t: "나오미가 자부 룻에게 이르되 내 딸아 너는 그 소녀들과 함께 나가고 다른 밭에서 사람을 만나지 아니하는 것이 좋으니라" },
        { v: 23, t: "이에 룻이 보아스의 소녀들에게 가까이 있어서 보리 추수와 밀 추수를 마치기까지 이삭을 주우며 그 시모와 함께 거하니라" }
      ]
    },
    intro: "룻은 남편을 잃은 모압 여인이며 낯선 땅에 온 이주민입니다. 그는 생존을 위해 이삭을 줍겠다고 먼저 나서고 아침부터 저녁까지 일합니다. 보아스의 배려는 이 능동적인 노동을 대신하지 않고, 룻이 안전하게 일하고 먹으며 몫을 가져갈 수 있는 조건을 마련합니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "2:1–3", items: [
        { tag: "본문", text: "룻은 나오미에게 밭에 가서 이삭을 줍게 해 달라고 청하고, 베는 자들을 따라 일하다가 보아스의 밭에 이릅니다." },
        { tag: "관찰", text: "본문은 그 도착을 ‘우연히’라고 말합니다. 룻의 선택과 수고를 지운 채 모든 과정을 손쉬운 기적으로 만들지 않으면서, 독자는 이후에 드러날 만남의 의미를 지켜보게 됩니다." }
      ]},
      { ref: "2:4–7", items: [
        { tag: "본문", text: "보아스는 일꾼들과 인사를 나눈 뒤 룻이 누구인지 묻습니다. 사환은 그를 ‘모압 소녀’로 소개하고 아침부터 계속 일했다고 보고합니다." },
        { tag: "해석", text: "룻은 이름보다 출신과 관계로 먼저 식별되는 이방인입니다. 동시에 본문은 그가 허락을 구하고 오래 노동한 사람임을 구체적으로 기억합니다." }
      ]},
      { ref: "2:8–16", items: [
        { tag: "본문", text: "보아스는 다른 밭으로 가지 말고 소녀들과 함께 있으라 하며, 남자들에게 룻을 건드리지 말라고 명합니다. 물과 식사를 나누고, 단 사이에서 줍게 하며 일부러 곡식을 뽑아 남겨 두게 합니다." },
        { tag: "해석", text: "보호는 좋은 마음에 머물지 않습니다. 접근할 수 있는 자리, 폭력에서의 안전, 물과 음식, 충분히 거둘 몫을 구체적으로 조직하는 행동이 됩니다." }
      ]},
      { ref: "2:17–23", items: [
        { tag: "본문", text: "룻은 저녁까지 일해 보리를 떨고, 곡식과 남은 음식을 나오미에게 가져갑니다. 나오미는 보아스를 기업 무를 자 중 하나로 알아보고, 룻은 보리와 밀 추수가 끝날 때까지 그 밭에서 일합니다." },
        { tag: "해석", text: "이 장의 결말은 곧바로 결혼에 이르는 낭만적 장면이 아니라 두 여인이 먹고 살아갈 양식과 지속해서 일할 안전한 자리가 생긴 사건입니다. 기업 무를 자의 이야기는 뒤 장들에서 더 전개됩니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "룻기 1:16–22", tag: "배경", text: "룻은 나오미와 함께 가겠다고 선택하고 베들레헴에 도착합니다. 그는 남편을 잃은 모압 여인이며, 두 사람은 빈손으로 돌아왔다고 말합니다." },
      { ref: "레위기 19:9–10", tag: "법", text: "밭 모퉁이까지 다 거두거나 떨어진 이삭을 줍지 말고 가난한 사람과 타국인을 위해 남겨 두라고 명합니다. 이삭줍기는 우연한 선심만이 아니라 공동체의 의무입니다." },
      { ref: "신명기 24:19–22", tag: "법", text: "잊은 곡식단을 다시 가져오지 말고 객과 고아와 과부를 위해 두라고 명합니다. 이스라엘도 애굽에서 종이었던 기억이 보호의 이유가 됩니다." },
      { ref: "룻기 3–4장", tag: "이어 읽기", text: "기업 무를 자와 결혼의 이야기는 뒤에서 전개됩니다. 2장을 그 결말만을 위한 로맨스의 도입으로 줄이지 않고, 먼저 노동과 생존과 보호의 장으로 읽습니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "빈곤을 미화하지 않기: 허리를 굽혀 남은 이삭을 모으는 노동은 아름다운 전원 체험이 아니라 두 과부의 생존을 위한 고된 일입니다.",
        "권리와 배려: 이삭을 남기는 일은 토지 소유자의 기분에만 달린 자선이 아니라 율법이 요구한 가난한 사람과 타국인을 위한 몫입니다. 보아스는 안전과 식사와 추가 곡식으로 더 구체화합니다.",
        "권력의 차이: 보아스는 밭과 일꾼을 지휘하는 남성 지주이고 룻은 보호가 필요한 이주 여성 노동자입니다. 그의 선의를 칭찬하면서도 이 불균형과 폭력의 가능성을 지우지 않습니다.",
        "룻의 주체성: 룻은 수동적으로 구제받기만 하지 않습니다. 일하겠다고 선택하고 허락을 구하며 하루 종일 노동한 뒤 나오미와 수확을 나눕니다.",
        "예술과 음악의 자리: 밀레의 그림과 스팅의 노래는 룻기를 직접 재현한 작품이 아닙니다. 서로 다른 시대와 목적을 구별한 채 노동, 들판, 관계의 기억이라는 접점에서 대화합니다."
      ]
    }
  },

  keep: {
    sentence: "은혜는 누군가가 살아갈 몫을 의도적으로 남겨 두고, 안전하게 거둘 수 있게 하는 구체적인 배려입니다.",
    question: "내가 가진 자리와 자원 가운데, 누군가가 존엄하게 살아가도록 남겨 둘 몫은 무엇인가요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "누군가가 안전하게 자기 몫을 거둘 수 있도록 내가 남겨 두거나 바꿀 수 있는 한 가지를 적어 보세요.",
    pdfCredit: "그림: 장프랑수아 밀레, 《이삭 줍는 여인들》(오르세 미술관 RF 592; Wikimedia Commons Public Domain Mark 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: Sting, 《Fields of Gold》 Spotify 공식 허용 임베드(음원 파일 미수록)."
  }),

  sources: {
    title: "작품과 자료 출처", checkedOn: "2026-11-16",
    releaseStatus: "READY · Captain 공개 승인(2026-11-16) · 외부 자료 권리 및 공식 임베드 검증 완료",
    groups: [
      { label: "미술작품", lines: [
          "장프랑수아 밀레, 《Des glaneuses》, 1857년, 캔버스에 유채, 83.5 × 110 cm. 오르세 미술관 RF 592.",
          "오르세 미술관의 작품 식별과 해설을 확인했습니다. 수록 이미지는 Google Art Project 파일을 Wikimedia Commons가 원작과 충실한 복제 모두 퍼블릭 도메인으로 표시한 공개본입니다."
        ], links: [{ label: "오르세 미술관 작품 정보", url: "https://www.musee-orsay.fr/en/artworks/des-glaneuses-342" }, { label: "Wikimedia Commons 이미지·권리", url: "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg" }, { label: "Public Domain Mark 1.0", url: "https://creativecommons.org/publicdomain/mark/1.0/deed.ko" }] },
      { label: "음악", lines: [
          "Sting, 《Fields of Gold》(1993). Spotify가 공식 제공하는 동일 곡의 허용 임베드로 미리듣습니다.",
          "현대 곡·실연·녹음의 권리는 제공자에게 있습니다. Spotify 공식 플레이어만 클릭 후 불러오며, 자동재생·복제·다운로드를 하지 않습니다. 전체 재생 가능 여부와 미리듣기 길이는 Spotify의 계정·지역·제공 조건에 따릅니다."
        ], links: [{ label: "Spotify 공식 곡 페이지", url: "https://open.spotify.com/track/1exUmVPVMO5cIKSaup8qpI" }] },
      { label: "성경", lines: [
          "룻기 2장, 개역한글판(1961). 대한성서공회 공식 온라인 성경과 1–23절 전 구절을 대조했습니다.",
          "대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다."
        ], links: [{ label: "룻기 2장 · 개역한글", url: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=rut&cVersion=SAE%5E&chap=2&fontSize=0&fontString=10px&fontWeight=bold&sec=1&version=HAN" }, { label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "승인된 010 상세 편집 기획의 본문, 다섯 장면, 핵심 통찰과 신학 경계를 따라 새로 쓴 자체 원고입니다. 외부 해설 문장을 옮기지 않았습니다.",
          "핵심 경계: 빈곤을 낭만화하거나 룻의 주체성을 지우지 않고, 이삭줍기를 임의적 자선이 아닌 보호법의 문맥에서 읽으며, 2장을 결혼 이야기로 축소하지 않습니다."
        ], links: [{ label: "007–050 상세 편집 기획 v0.2 · Captain 승인본", url: "https://app.notion.com/p/4193b0124c5281f8a179c508359d19ae" }] }
    ],
    records: {
      art: {
        id: "art-10", artist: "Jean-François Millet", title: "Des glaneuses", year: "1857", medium: "Oil on canvas",
        usedFiles: ["assets/gleaners-480.jpg", "assets/gleaners-1280.jpg"],
        derivedFrom: "Wikimedia Commons 1280px thumbnail of the Google Art Project public-domain image",
        sourceFile: { name: "1280px-Jean-François_Millet_-_Gleaners_-_Google_Art_Project.jpg", url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg/1280px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg", pixels: "1280x958", bytes: 339405, sha256: "C749CE003BE4C70248DF00D354D9E57E0D164751B038F65F68DA2D49C42D5CB8" },
        museum: { name: "Musée d'Orsay, Paris", objectNumber: "RF 592", collectionUrl: "https://www.musee-orsay.fr/en/artworks/des-glaneuses-342" },
        processing: "1280px Commons 공개본은 그대로 사용. 480px 파일은 같은 비율로 고품질 축소; 자르기·색 보정 없음.",
        url: "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg",
        license: "Public Domain Mark 1.0 / faithful reproduction of a public-domain work", rightsHolder: "원작 Public domain; 디지털 복제 Public domain 표시",
        rightsBasisUrl: "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg", useForm: "image", pdfInclude: true, pdfReason: "Commons 파일 설명의 원작·충실한 복제 Public domain 표시를 확인하고 출처와 함께 수록",
        status: "VERIFIED(작품 식별·소장처·원작 및 충실한 복제 Public domain 확인)", open: [], checkedOn: "2026-11-16"
      },
      music: {
        id: "music-10", composer: "Sting", work: "Fields of Gold", composerStatus: "저작권 있는 현대 곡; 가사·악보·음원을 복제하지 않음",
        performance: "Sting; Spotify official embedded preview",
        officialPage: "https://open.spotify.com/track/1exUmVPVMO5cIKSaup8qpI",
        embed: { provider: "Spotify", trackId: "1exUmVPVMO5cIKSaup8qpI", embedUrl: "https://open.spotify.com/embed/track/1exUmVPVMO5cIKSaup8qpI?utm_source=generator", previewAvailable: true, autoplay: false, loadedOnlyAfterTap: true },
        audioFilesHosted: false, url: "https://open.spotify.com/track/1exUmVPVMO5cIKSaup8qpI",
        license: "저작권 있는 현대 곡·실연·녹음; Spotify가 공식 제공한 허용 임베드와 링크만", rightsHolder: "Sting 및 해당 녹음 권리자; 플레이어 제공 Spotify",
        rightsBasisUrl: "https://open.spotify.com/track/1exUmVPVMO5cIKSaup8qpI", useForm: "embed, link, original commentary", pdfInclude: false, pdfReason: "PDF에 음원·영상·가사·악보를 복제하지 않음",
        connection: "간접 연결(황금빛 들판과 관계의 기억; 룻 이야기를 직접 노래한 작품은 아님)", status: "VERIFIED(Spotify 공식 임베드·페이지 내부 재생·일시정지 확인)", open: [], checkedOn: "2026-11-16"
      },
      bible: {
        id: "bible-10", translation: "개역한글판(1961)", range: "룻기 2장",
        copyright: "대한성서공회 안내 표: 개역한글판 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=rut&cVersion=SAE%5E&chap=2&fontSize=0&fontString=10px&fontWeight=bold&sec=1&version=HAN", textSource: "대한성서공회 온라인 성경 개역한글판 본문과 1–23절 전 구절 대조",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1", license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회", rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1", useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 전 구절 대조·보호기간 소멸 확인)", open: [], checkedOn: "2026-11-16"
      },
      commentary: {
        id: "text-10", authorship: "프로젝트 자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null, useForm: "original commentary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED_FOR_RELEASE", open: [], checkedOn: "2026-11-16", approvedBy: "Captain", approvedOn: "2026-11-16"
      }
    }
  }
});
