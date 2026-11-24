/* ART-BIBLE-006 · 나를 아시는 목자 — 밀레 · 존 루터 시편 23편 · 개역한글판 시편 23편
   Captain 제작·배포 지시에 따라 만든 기본편. 미술·음악·성경·문학의 고유성을 구별해 연결한다. */
ArtBook.register({
  id: "the-lord-is-my-shepherd",

  meta: {
    status: "candidate",
    summary: "그늘 아래 양 떼를 지키는 한 사람. 밀레의 파스텔과 시편 23편, 존 루터의 합창곡을 따라 ‘나를 아는 목자’의 돌봄과 동행을 천천히 바라봅니다.",
    themes: ["돌봄", "동행", "쉼"],
    tags: ["목자", "양", "푸른 초장", "쉴만한 물가", "사망의 음침한 골짜기", "지팡이", "선하심", "인자하심", "시편", "하이디", "파스텔"],
    bible: {
      books: ["시편", "요한복음"], bookAliases: ["시", "요"],
      ranges: ["시편 23:1–6"],
      related: ["요한복음 10:11–15", "에스겔 34:11–16", "누가복음 15:3–7", "요한계시록 7:17"]
    },
    art: { artist: "장프랑수아 밀레", artistAliases: ["밀레", "Jean-François Millet", "Millet"], title: "나무 그늘의 양 떼와 목동 소녀", titleAliases: ["A Shepherdess and Her Flock in the Shade of Trees", "목동 소녀와 양 떼"], year: "1854–55" },
    music: { composer: "존 루터", composerAliases: ["John Rutter", "Rutter", "루터"], work: "The Lord Is My Shepherd", workAliases: ["시편 23편", "Psalm 23", "Requiem"] },
    literature: { author: "요한나 슈피리", title: "하이디", aliases: ["Johanna Spyri", "Heidi"] },
    cover: { src: "assets/shepherd-480.jpg", alt: "나무 그늘에서 목동 소녀가 양 떼와 개를 지키는 밀레의 파스텔" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "기본편 · Captain 제작·배포 지시본",
  title: "나를 아시는 목자",
  passage: "시편 23:1–6",
  themes: "돌봄 · 동행 · 쉼",

  scenes: [
    { id: "s1", name: "바라보다" },
    { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/shepherd-1200.jpg",
      srcset: "assets/shepherd-480.jpg 362w, assets/shepherd-1200.jpg 905w",
      zoom: "assets/shepherd-1200.jpg",
      width: 905, height: 1200,
      alt: "키 큰 나무들이 만든 그늘 속에 망토를 두른 목동 소녀가 서 있다. 한 손은 나무에 기대고 다른 손은 지팡이를 잡았다. 개 한 마리가 왼쪽에서 양 떼를 바라보고, 앞쪽의 양들은 풀을 뜯거나 나무 아래 누워 쉰다. 나무 사이와 먼 들판에는 옅은 푸른빛이 번진다."
    },
    caption: {
      artist: "장프랑수아 밀레 (Jean-François Millet, 1814–1875)",
      work: "《나무 그늘의 양 떼와 목동 소녀》",
      meta: "1854–55 · 콩테 크레용과 파스텔, 종이 · 37.4 × 27.3 cm",
      owner: "메트로폴리탄 미술관(미국 뉴욕) 소장 · 소장번호 29.100.559",
      notes: ["메트로폴리탄 미술관이 작품과 디지털 이미지를 Public Domain으로 표시합니다. 원본 비율과 색을 유지하고 화면 크기만 줄였습니다."]
    },
    prompt: "목동 소녀의 손과 지팡이, 개의 시선, 쉬고 있는 양들을 차례로 바라보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "그늘이 깊은 나무 아래, 한 사람이 양 떼 곁을 떠나지 않고 서 있습니다.",
    items: [
      { tag: "사실", text: "밀레는 1854–55년 무렵 콩테 크레용과 파스텔로 이 작품을 그렸습니다. 메트로폴리탄 미술관은 밀레가 농촌 생활을 그리며 목동 소녀와 양 떼를 반복해서 다루었다고 설명합니다." },
      { tag: "관찰", text: "목동 소녀는 화면 한가운데 있지만 얼굴은 또렷하지 않습니다. 한 손은 나무에 기대고 다른 손은 지팡이를 잡습니다. 개는 양 떼를 향해 서 있고, 앞의 양은 풀을 뜯으며, 뒤의 양들은 나무 아래 몸을 낮추고 쉽니다." },
      { tag: "해석", text: "이 그림의 돌봄은 큰 동작보다 ‘곁을 지키는 시간’으로 보입니다. 목자는 양을 안고 있지 않습니다. 그늘과 길, 무리의 가장자리를 살피며 같은 자리에 머뭅니다." },
      { tag: "연결", text: "요한나 슈피리의 《하이디》에도 산과 목초지, 염소 떼와 함께 지내는 시간이 나옵니다. 그 자연은 사람의 몸과 마음이 회복되는 자리로 그려집니다. 그러나 《하이디》의 산이 시편의 하나님과 같은 것은 아닙니다. 두 작품은 ‘돌봄을 받으며 다시 살아나는 경험’에서 잠시 만납니다." },
      { tag: "대조", text: "밀레가 시편 23편을 그리려 했다는 기록은 확인하지 못했습니다. 그림 속 목동 소녀도 하나님을 상징한다고 단정할 수 없습니다. 이 책은 한 사람의 실제 노동을 존중하면서, 그 곁 지킴이 시편의 목자 이미지를 어떻게 새롭게 보게 하는지 묻습니다." }
    ],
    again: "다시 보세요. 이번에는 그림에서 가장 편안해 보이는 자리와 가장 경계하는 존재를 찾아보세요."
  },

  listen: {
    work: "존 루터 · 《The Lord Is My Shepherd》",
    titleDe: "The Lord Is My Shepherd (Psalm 23)",
    titleKo: "여호와는 나의 목자시니 (시편 23편)",
    items: [
      { tag: "사실", text: "영국 작곡가 존 루터(John Rutter)가 시편 23편을 영어 성경의 노랫말로 만든 합창곡입니다. 작곡가 공식 소개에 따르면 이 곡은 《레퀴엠》의 여섯 번째 악장에도 수록됩니다. 기존 바흐 칸타타와 달리 시편 23편의 말씀을 직접 노래한다는 점에서 이 페이지와 더욱 가깝습니다." },
      { tag: "관찰", text: "공식 녹음에서는 오보에 선율과 합창이 시편의 고백을 함께 이어 갑니다. 소리의 크기를 높이기보다 숨을 고르는 듯한 선율 속에 목자의 돌봄을 담는 방식으로 들어 보세요." },
      { tag: "연결", text: "시편은 푸른 초장뿐 아니라 사망의 음침한 골짜기도 말합니다. 그림의 양 떼와 목동 소녀는 실제 농촌의 장면이며, 합창곡은 성경 시편을 노래합니다. 둘을 동일한 장면으로 보지 않고 ‘돌봄과 동행’이라는 주제로 나란히 감상합니다." },
      { tag: "감상", text: "그림 속 그늘진 자리에 잠시 시선을 머물게 하고 음악이 시편의 문장을 어떻게 흘려보내는지 들어 보세요. 미술작품과 곡 사이에 역사적 직접 연결이 있다는 주장은 아닙니다." }
    ],
    duration: "약 5분",
    channel: "John Rutter & The Cambridge Singers",
    playLabel: "존 루터 《The Lord Is My Shepherd》 감상",
    embedTitle: "John Rutter · The Lord Is My Shepherd — The Cambridge Singers",
    performance: "John Rutter 지휘 · The Cambridge Singers · City of London Sinfonia · Quentin Poole(오보에). 작곡가·연주단체의 공식 채널 게시 음원 영상.",
    videoId: "wqGJ_Gh6Fnk",
    links: [
      { label: "존 루터 공식 작품 설명", url: "https://johnrutter.com/music/printed-music/catalogue/the-lord-is-my-shepherd" },
      { label: "John Rutter & The Cambridge Singers 공식 영상", url: "https://www.youtube.com/watch?v=wqGJ_Gh6Fnk" }
    ],
    note: "연주·녹음의 권리는 연주자와 권리자에게 있습니다. 사이트에는 음원을 저장하지 않고 공식 게시 영상만 연결합니다. 소리는 자동 재생되지 않습니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "시편 23:1–6",
      lines: [
        { v: 1, t: "여호와는 나의 목자시니 내가 부족함이 없으리로다" },
        { v: 2, t: "그가 나를 푸른 초장에 누이시며 쉴만한 물 가으로 인도하시는도다" },
        { v: 3, t: "내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다" },
        { v: 4, t: "내가 사망의 음침한 골짜기로 다닐찌라도 해를 두려워하지 않을 것은 주께서 나와 함께 하심이라 주의 지팡이와 막대기가 나를 안위하시나이다" },
        { v: 5, t: "주께서 내 원수의 목전에서 내게 상을 베푸시고 기름으로 내 머리에 바르셨으니 내 잔이 넘치나이다" },
        { v: 6, t: "나의 평생에 선하심과 인자하심이 정녕 나를 따르리니 내가 여호와의 집에 영원히 거하리로다" }
      ]
    },
    intro: "여섯 절의 짧은 시는 들판에서 골짜기로, 골짜기에서 식탁으로, 다시 여호와의 집으로 움직입니다. 아래의 풀이는 본문의 흐름을 따라가되, 제목의 ‘아시는’이라는 말은 요한복음 10장과 연결한 것임을 구별합니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "23:1–3", items: [
        { tag: "본문", text: "여호와가 ‘나의 목자’이기에 부족함이 없다고 고백합니다. 목자는 푸른 초장에 눕게 하고 물가로 이끌며, 영혼을 소생시키고 의의 길로 인도합니다." },
        { tag: "관찰", text: "이 세 절에서 시인은 하나님을 ‘그’라고 부르며 하나님이 하시는 일을 이야기합니다. 누임, 인도, 소생은 멈춤과 움직임이 번갈아 오는 돌봄입니다." },
        { tag: "해석", text: "‘부족함이 없다’는 말은 원하는 모든 것을 가진다는 약속이라기보다, 목자의 돌봄 안에서 삶에 필요한 것을 맡긴다는 신뢰의 언어로 읽을 수 있습니다." }
      ]},
      { ref: "23:4", items: [
        { tag: "본문", text: "길은 사망의 음침한 골짜기를 지나갑니다. 시인은 해를 두려워하지 않는 까닭을 ‘주께서 나와 함께 하심’이라고 말합니다. 지팡이와 막대기는 위로의 표지가 됩니다." },
        { tag: "관찰", text: "여기서 말투가 바뀝니다. 앞에서는 하나님을 ‘그’라고 말했지만, 골짜기에서는 ‘주께서’라고 하나님께 직접 말을 겁니다. 설명이 기도가 되는 순간입니다." },
        { tag: "해석", text: "시편은 골짜기가 사라진다고 말하지 않습니다. 두려움 속에서 혼자가 아니라는 고백이 골짜기를 지나는 힘이 됩니다." }
      ]},
      { ref: "23:5", items: [
        { tag: "본문", text: "장면이 식탁으로 바뀝니다. 원수들이 보는 앞에서 상이 베풀어지고, 머리에 기름을 바르며, 잔이 넘칩니다." },
        { tag: "관찰", text: "목자의 들판과 지팡이에서 손님을 맞는 집과 식탁으로 이미지가 넓어집니다. 위험이 완전히 지워진 뒤가 아니라 원수의 목전에서 환대가 시작됩니다." },
        { tag: "해석", text: "하나님의 돌봄은 겨우 살아남게 하는 데서 멈추지 않고, 존귀한 손님으로 맞아 잔이 넘치게 하는 환대로 묘사됩니다." }
      ]},
      { ref: "23:6", items: [
        { tag: "본문", text: "시인은 선하심과 인자하심이 평생 자신을 따르고, 여호와의 집에 영원히 거하리라고 고백합니다." },
        { tag: "관찰", text: "처음에는 목자를 따라가던 사람이 마지막에는 선하심과 인자하심이 자신을 따라온다고 말합니다. 길의 끝은 버려짐이 아니라 집입니다." },
        { tag: "해석", text: "이 마지막 절은 지금까지의 길을 한 문장으로 묶습니다. 들판과 골짜기와 식탁 어느 곳에서도 하나님의 돌봄이 먼저 떠나지 않았다는 고백입니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "요한복음 10:11–15", tag: "연결", text: "예수님은 자신을 선한 목자라고 부르며 ‘나는 내 양을 알고 양도 나를 안다’고 말씀합니다. 이 작품 제목 ‘나를 아시는 목자’는 시편 23편의 직접 표현이 아니라 이 말씀과 연결해 붙인 제목입니다." },
      { ref: "에스겔 34:11–16", tag: "연결", text: "하나님이 흩어진 양을 찾고, 좋은 꼴을 먹이며, 상한 것을 싸매겠다고 말씀합니다. 목자 이미지는 통치자의 책임을 묻는 예언의 맥락에도 놓여 있습니다." },
      { ref: "누가복음 15:3–7", tag: "연결", text: "한 마리를 잃은 목자가 아흔아홉을 두고 찾아 나섭니다. 무리를 돌보는 일과 한 생명을 잊지 않는 일이 함께 놓입니다." },
      { ref: "요한계시록 7:17", tag: "연결", text: "어린양이 목자가 되어 생명수 샘으로 인도하고 모든 눈물을 닦아 주실 것이라는 역설적인 소망의 장면입니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "본문이 말하는 것: 시편 23편은 평탄한 삶만을 약속하지 않습니다. 골짜기와 원수가 등장하지만, 그 자리에서 함께하심과 환대를 고백합니다.",
        "이 책의 연결: ‘나를 아시는’이라는 제목은 요한복음 10:14–15에서 가져온 연결입니다. 시편 23편 자체에는 같은 문장이 나오지 않습니다.",
        "예술과 문학의 자리: 밀레의 목동 소녀는 하나님을 그린 인물이 아니며, 《하이디》의 자연 치유도 시편의 구원과 동일하지 않습니다. 둘은 돌봄과 회복을 생각하게 하는 이웃 작품으로만 읽습니다."
      ]
    }
  },

  keep: {
    sentence: "길이 밝아서 두렵지 않은 것이 아니라, 어두운 길에도 함께 계시기에 걸음을 멈추지 않습니다.",
    question: "나는 지금 어떤 골짜기를 혼자 지나고 있다고 느끼나요? 그 자리에서 ‘주께서 나와 함께 하심이라’를 나의 말로 어떻게 다시 말할 수 있을까요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "시편 23편을 읽으며 지금 나에게 가장 필요한 돌봄과 동행을 적어 보세요.",
    pdfCredit: "그림: 장프랑수아 밀레, 《나무 그늘의 양 떼와 목동 소녀》(메트로폴리탄 미술관 소장, Public Domain 표시 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 존 루터 《The Lord Is My Shepherd》, John Rutter & The Cambridge Singers 공식 게시 영상(링크로만 연결)."
  }),

  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-13",
    releaseStatus: "READY · Captain 제작·배포 지시(2026-11-13) · 외부 자료 권리 및 공식 링크 확인",
    groups: [
      { label: "미술작품", lines: [
          "장프랑수아 밀레, 《A Shepherdess and Her Flock in the Shade of Trees》, 1854–55, 콩테 크레용과 파스텔, 종이, 37.4 × 27.3 cm. 메트로폴리탄 미술관 소장번호 29.100.559.",
          "메트로폴리탄 미술관이 작품 페이지에서 Public Domain으로 표시하고 다운로드 원본을 제공합니다. 이미지의 색과 비율은 바꾸지 않고 크기만 줄였습니다."
        ], links: [{ label: "메트로폴리탄 작품 페이지", url: "https://www.metmuseum.org/art/collection/search/337797" }, { label: "이미지 원본", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/337797/761740/main-image" }, { label: "오픈 액세스 안내", url: "https://www.metmuseum.org/hubs/open-access" }] },
      { label: "음악", lines: [
          "존 루터(John Rutter), 《The Lord Is My Shepherd》(시편 23편). 작곡가 공식 설명에 따르면 이 곡은 《레퀴엠》 제6악장에 수록되었습니다. 본문 가사는 시편 23편을 직접 다룹니다.",
          "공식 게시 음원 영상: John Rutter 지휘, The Cambridge Singers, City of London Sinfonia, Quentin Poole(오보에). 저작권 있는 현대 연주·녹음은 복제하지 않고 연주자 공식 유튜브 영상으로 연결합니다.",
          "2026-11-24 Captain 요청에 따른 음악 편집 변경. 바흐 BWV 112를 대체했으며 성경·그림·개인 기록의 id는 변경하지 않았습니다."
        ], links: [{ label: "존 루터 공식 작품 설명", url: "https://johnrutter.com/music/printed-music/catalogue/the-lord-is-my-shepherd" }, { label: "공식 게시 음악 영상", url: "https://www.youtube.com/watch?v=wqGJ_Gh6Fnk" }] },
      { label: "성경", lines: [
          "시편 23:1–6, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문은 대한성서공회 온라인 성경의 개역한글판 전 구절과 대조했습니다. 제목의 ‘아시는’은 요한복음 10:14–15와 연결한 편집 제목입니다."
        ], links: [{ label: "시편 23편 · 개역한글", url: "https://www.bskorea.or.kr/bible/korbibReadpage.php?linkBible=BHANpsa023003" }, { label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "문학", lines: [
          "요한나 슈피리, 《하이디》(1880–1881). 산과 목초지에서의 삶과 회복이라는 주제만 자체 문장으로 소개했으며, 현대 한국어 번역문·표지·삽화를 복제하지 않았습니다.",
          "Project Gutenberg 판본은 미국에서 Public Domain으로 표시됩니다. 이 웹북은 작품명과 자체 요약, 원문 감상 링크만 사용합니다."
        ], links: [{ label: "Project Gutenberg · Heidi", url: "https://www.gutenberg.org/ebooks/20781" }, { label: "미국 의회도서관 판본", url: "https://www.loc.gov/item/13021709/" }] },
      { label: "해설", lines: [
          "미술·음악·성경·문학 자료를 바탕으로 새로 쓴 편집 원고입니다. 외부 해설 문장을 옮기지 않았으며, 사실·관찰·해석·연결을 구분했습니다.",
          "핵심 연결: 시편 23편의 목자와 동행, 요한복음 10장의 ‘내 양을 안다’, 루터의 시편 23편 합창곡, 밀레가 그린 실제 목동 노동. 서로를 동일시하지 않고 만나는 지점만 설명합니다."
        ], links: [] }
    ],
    records: {
      art: {
        id: "art-6", artist: "Jean-François Millet", title: "A Shepherdess and Her Flock in the Shade of Trees", year: "1854–55", medium: "Conté crayon and pastel on laid paper",
        usedFiles: ["assets/shepherd-480.jpg", "assets/shepherd-1200.jpg"],
        derivedFrom: "assets/source/millet-shepherdess-met-337797.jpg",
        sourceFile: { name: "main-image.jpeg", url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/337797/761740/main-image", pixels: "905x1200", bytes: 356970, sha256: "3DCF0D3EC23034B7F06CF40E6383349FB1E8D69567BC59F20D40637A06ADFAD1" },
        museum: { name: "The Metropolitan Museum of Art", objectId: 337797, accession: "29.100.559", creditLine: "H. O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929", publicDomain: true, url: "https://www.metmuseum.org/art/collection/search/337797" },
        processing: "고품질 리사이즈만 적용, 색 보정·자르기 없음.",
        url: "https://www.metmuseum.org/art/collection/search/337797",
        license: "Public Domain / Met Open Access", rightsHolder: "원작 저작권 소멸; 소장처 The Metropolitan Museum of Art",
        rightsBasisUrl: "https://www.metmuseum.org/hubs/open-access",
        useForm: "image", pdfInclude: true, pdfReason: "Met 작품 페이지의 Public Domain 표시 이미지; 출처와 함께 수록",
        status: "VERIFIED(작품 페이지 Public Domain 표시·원본 다운로드 확인)", open: [], checkedOn: "2026-11-13"
      },
      music: {
        id: "music-6-rutter", composer: "John Rutter", work: "The Lord Is My Shepherd (Psalm 23)", composerStatus: "현대 작곡가, 저작권 보호",
        performance: "John Rutter / The Cambridge Singers / City of London Sinfonia / Quentin Poole (oboe)",
        officialPage: "https://johnrutter.com/music/printed-music/catalogue/the-lord-is-my-shepherd",
        embed: { provider: "YouTube", videoId: "wqGJ_Gh6Fnk", channel: "John Rutter & The Cambridge Singers", autoplay: false },
        audioFilesHosted: false, url: "https://www.youtube.com/watch?v=wqGJ_Gh6Fnk",
        license: "저작권 있는 현대 연주·녹음, 공식 링크 및 YouTube 제공 임베드만", rightsHolder: "음반/연주 권리자",
        rightsBasisUrl: "https://www.youtube.com/watch?v=wqGJ_Gh6Fnk",
        useForm: "embed/link, original commentary", pdfInclude: false, pdfReason: "음원·악보·가사 복제하지 않음",
        connection: "직접 연결: 시편 23편을 영어로 노래한 합창곡",
        status: "OFFICIAL_CHANNEL_AND_COMPOSER_PAGE_VERIFIED; browser embed QA pending", open: ["운영 브라우저에서 실제 임베드 재생 추가 확인 필요"], checkedOn: "2026-11-24"
      },
      bible: {
        id: "bible-6", translation: "개역한글판(1961)", range: "시편 23:1–6",
        copyright: "대한성서공회 안내 표: 개역한글판 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bible/korbibReadpage.php?linkBible=BHANpsa023003",
        textSource: "대한성서공회 온라인 성경 개역한글판 본문과 전 구절 대조",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회",
        rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 대조·개역한글판 보호기간 소멸 확인)", open: [], checkedOn: "2026-11-13"
      },
      literature: {
        id: "literature-6", author: "Johanna Spyri", work: "Heidi", year: "1880–1881",
        source: "Project Gutenberg eBook 20781; Library of Congress 1913 edition",
        url: "https://www.gutenberg.org/ebooks/20781",
        license: "원작 및 해당 영문 판본 Public Domain 표시; 현대 한국어 번역은 사용하지 않음",
        rightsHolder: "원작 저작권 소멸; 한국어 자체 요약만 사용",
        rightsBasisUrl: "https://www.loc.gov/item/13021709/",
        useForm: "title, original summary link, original commentary", pdfInclude: false, pdfReason: "문학 본문·표지·삽화를 PDF에 복제하지 않음",
        status: "VERIFIED(서지·Public Domain 판본 확인; 외부 문장 복제 없음)", open: [], checkedOn: "2026-11-13"
      },
      commentary: {
        id: "text-6", authorship: "프로젝트 자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "summary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED_FOR_RELEASE", open: ["전문 신학 자문은 후속 개선 가능"], checkedOn: "2026-11-13", approvedBy: "Captain", approvedOn: "2026-11-13"
      }
    }
  }
});
