/* ART-BIBLE-007 · 별빛 아래 세상이 시작되다 — 반 고흐 · 하이든 《천지창조》 · 창세기 1:1–5
   승인된 상세 편집 기획 v0.2에 따라 제작하고 Captain이 2026-11-15 공개를 승인한 기본편. */
ArtBook.register({
  id: "starry-night-creation",

  meta: {
    status: "candidate",
    summary: "소용돌이치는 밤하늘을 바라보고, 하이든의 ‘혼돈’에서 ‘빛’으로 건너가며, 창세기 첫 다섯 절이 증언하는 시작의 빛에 머뭅니다.",
    themes: ["창조", "빛", "경이"],
    tags: ["태초", "혼돈", "공허", "흑암", "빛이 있으라", "첫째 날", "밤하늘", "별", "반 고흐", "하이든", "천지창조"],
    bible: {
      books: ["창세기"], bookAliases: ["창"],
      ranges: ["창세기 1:1–5"],
      related: ["창세기 1:14–19", "시편 33:6–9", "요한복음 1:1–5", "고린도후서 4:6"]
    },
    art: { artist: "빈센트 반 고흐", artistAliases: ["반 고흐", "Vincent van Gogh", "Van Gogh"], title: "별이 빛나는 밤", titleAliases: ["The Starry Night", "별밤"], year: "1889" },
    music: { composer: "요제프 하이든", composerAliases: ["하이든", "Joseph Haydn", "Haydn"], work: "오라토리오 《천지창조》", workAliases: ["Die Schöpfung", "The Creation", "Hob. XXI:2"] },
    cover: { src: "assets/starry-night-480.jpg", alt: "푸른 밤하늘의 별과 달, 소용돌이치는 구름, 사이프러스와 마을이 보이는 반 고흐의 그림" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "기본편 · Captain 공개 승인본",
  title: "별빛 아래 세상이 시작되다",
  passage: "창세기 1:1–5",
  themes: "창조 · 빛 · 경이",

  scenes: [
    { id: "s1", name: "바라보다" },
    { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/starry-night-1280.jpg",
      srcset: "assets/starry-night-480.jpg 480w, assets/starry-night-1280.jpg 1280w",
      zoom: "assets/starry-night-1280.jpg",
      width: 1280, height: 1014,
      alt: "화면의 대부분을 푸른 밤하늘이 채운다. 노란 별과 달 둘레로 빛이 번지고, 굽이치는 띠 모양의 구름이 하늘을 가로지른다. 왼쪽의 검은 사이프러스는 하늘 높이 솟아 있으며, 아래에는 집과 뾰족한 교회 첨탑이 모인 마을과 산등성이가 놓여 있다."
    },
    caption: {
      artist: "빈센트 반 고흐 (Vincent van Gogh, 1853–1890)",
      work: "《별이 빛나는 밤》 (The Starry Night)",
      meta: "1889년 6월 · 캔버스에 유채 · 73.7 × 92.1 cm",
      owner: "뉴욕 현대미술관(MoMA) 소장 · 작품번호 472.1941",
      notes: ["그림 파일은 Wikimedia Commons가 Public Domain Mark로 제공하는 Google Arts & Culture 복제본입니다. 비율과 색을 유지하고 화면 크기만 줄였습니다."]
    },
    prompt: "하늘의 가장 큰 소용돌이에서 시작해 별과 달, 사이프러스, 잠든 마을 순서로 천천히 바라보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "고요한 마을 위에서 밤하늘은 멈추지 않고 흐르는 듯합니다.",
    items: [
      { tag: "사실", text: "반 고흐는 1889년 6월 생레미의 생폴 요양원에 머무는 동안 이 그림을 그렸습니다. MoMA는 창밖 풍경에서 영감을 받았지만, 마을과 가까이 당겨진 사이프러스 등은 관찰 그대로가 아니라 기억과 상상으로 다시 구성되었다고 설명합니다." },
      { tag: "관찰", text: "푸른 하늘이 화면의 대부분을 차지합니다. 별과 달 둘레에는 노란빛의 원이 겹치고, 굽이치는 흰빛과 푸른빛이 수평으로 흐릅니다. 아래의 집들은 낮고 어둡지만, 교회 첨탑과 사이프러스는 위로 길게 솟아 있습니다." },
      { tag: "해석", text: "짧고 두터운 붓질은 하늘을 정지된 배경보다 살아 움직이는 공간처럼 느끼게 합니다. 눈앞의 밤을 정확히 베껴 놓았다기보다, 관찰한 풍경에 기억과 감정을 더해 밤의 힘을 새로 보여 준 그림으로 읽을 수 있습니다." },
      { tag: "연결", text: "이 그림이 불러오는 경이는 창세기의 ‘태초’를 상상하게 합니다. 그러나 그림은 창조 사건의 삽화가 아니고, 반 고흐가 창세기 1장을 그렸다고 단정할 근거도 없습니다. 그림과 본문은 서로 다른 언어로 세계를 바라보게 합니다." },
      { tag: "구별", text: "그림 속 별과 달은 창세기 1장 14–19절의 넷째 날 광명체와 가깝습니다. 창세기 1장 3절의 첫째 날 빛과 같은 것으로 합치지 않습니다. 이 작품에서는 별빛을 바라보되, 말씀에서는 하나님이 빛을 부르시고 나누시는 첫 장면에 머뭅니다." }
    ],
    again: "다시 보세요. 실제 풍경처럼 보이는 부분과, 기억과 감정이 더해진 듯한 부분을 하나씩 찾아보세요."
  },

  listen: {
    work: "요제프 하이든 · 오라토리오 《천지창조》 Hob. XXI:2",
    titleDe: "Die Schöpfung — Die Vorstellung des Chaos / Und es ward Licht",
    titleKo: "혼돈의 묘사 / 그리고 빛이 생겼다",
    items: [
      { tag: "사실", text: "하이든의 오라토리오 《천지창조》는 창세기 1–2장과 시편, 밀턴의 《실낙원》을 엮은 대본으로 창조를 노래합니다. 이 연주의 서주는 ‘혼돈의 묘사’로 시작하고, 7분 57초 무렵 ‘빛’이라는 말과 함께 합창과 관현악이 크게 밝아집니다." },
      { tag: "관찰", text: "서주의 화음은 익숙한 종착점에 곧장 닿지 않고 머뭇거리며 이동합니다. 낮은 현과 관악기가 어두운 공간을 만들다가, 조용한 낭송 뒤 ‘빛’에서 온 합창과 관현악이 한꺼번에 울립니다." },
      { tag: "해석", text: "혼돈에서 빛으로 바뀌는 순간은 소리의 크기만 커지는 장면이 아닙니다. 방향을 찾기 어려웠던 음악이 환한 중심을 얻는 듯 들립니다. 하이든은 본문의 짧은 선언을 시간 속에서 기다리고 맞이하게 합니다." },
      { tag: "감상", text: "반 고흐의 밤하늘은 빛이 이미 수많은 별로 번지는 세계를 보여 줍니다. 하이든의 음악은 그보다 앞선 ‘빛이 있으라’의 급격한 전환을 들려줍니다. 그림과 음악을 같은 장면으로 만들지 말고, 이미 빛나는 밤과 빛이 시작되는 순간의 차이를 들어 보세요." }
    ],
    duration: "빛의 등장 7분 57초부터 · 전체 1시간 41분 40초",
    channel: "DW Classical Music",
    playLabel: "‘그리고 빛이 생겼다’부터 감상하기",
    embedTitle: "하이든 오라토리오 천지창조 — Nederlands Kamerkoor, Concerto d'Amsterdam, Klaas Stok",
    performance: "연주: Nederlands Kamerkoor · Concerto d’Amsterdam · Klaas Stok 지휘 · 2009년 녹화 · DW Classical Music 공식 제공",
    videoId: "EuIs7R2BpvQ",
    startSeconds: 477,
    externalPlayUrl: "https://www.youtube.com/watch?v=EuIs7R2BpvQ&t=477s",
    links: [
      { label: "공식 영상 전체 보기", url: "https://www.youtube.com/watch?v=EuIs7R2BpvQ" },
      { label: "DW Classical Music 채널", url: "https://www.youtube.com/@DWClassicalMusic" }
    ],
    note: "버튼을 누르기 전에는 영상과 소리가 불러와지지 않습니다. 자동재생하지 않으며 음원 파일을 저장하지 않습니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "창세기 1:1–5",
      lines: [
        { v: 1, t: "태초에 하나님이 천지를 창조하시니라" },
        { v: 2, t: "땅이 혼돈하고 공허하며 흑암이 깊음 위에 있고 하나님의 신은 수면에 운행하시니라" },
        { v: 3, t: "하나님이 가라사대 빛이 있으라 하시매 빛이 있었고" },
        { v: 4, t: "그 빛이 하나님의 보시기에 좋았더라 하나님이 빛과 어두움을 나누사" },
        { v: 5, t: "빛을 낮이라 칭하시고 어두움을 밤이라 칭하시니라 저녁이 되며 아침이 되니 이는 첫째 날이니라" }
      ]
    },
    intro: "본문은 세계가 어떻게 보이는지를 설명하기 전에, 누가 시작하셨는지를 선포합니다. 다섯 절은 창조, 혼돈과 흑암, 하나님의 말씀, 빛과 어둠의 구별, 첫째 날의 순서로 움직입니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "1:1", items: [
        { tag: "본문", text: "‘태초에 하나님이’라는 말로 성경의 첫 문장이 시작됩니다. 하늘과 땅은 스스로 생긴 주체가 아니라 하나님이 창조하신 세계로 증언됩니다." },
        { tag: "관찰", text: "본문은 하나님의 기원이나 창조 이전의 과정을 설명하지 않습니다. 하나님을 세계의 한 부분에 두지 않고, 천지의 창조주로 선포합니다." }
      ]},
      { ref: "1:2", items: [
        { tag: "본문", text: "땅은 혼돈하고 공허하며 흑암이 깊음 위에 있습니다. 그 가운데 하나님의 신이 수면에 운행하십니다." },
        { tag: "해석", text: "혼돈과 흑암이 하나님과 맞서는 또 하나의 창조주로 제시되지는 않습니다. 아직 구별되고 채워지지 않은 세계에도 하나님의 임재와 활동이 먼저 놓입니다." }
      ]},
      { ref: "1:3–4", items: [
        { tag: "본문", text: "하나님이 말씀하시자 빛이 생깁니다. 하나님은 그 빛을 좋게 보시고 빛과 어두움을 나누십니다." },
        { tag: "관찰", text: "말씀, 생김, 보심, 나누심이 차례로 이어집니다. 빛은 우연히 나타난 것이 아니라 하나님의 말씀에 응답하고, 창조는 하나님의 ‘좋다’는 판단 아래 놓입니다." }
      ]},
      { ref: "1:5", items: [
        { tag: "본문", text: "하나님은 빛을 낮, 어두움을 밤이라 부르십니다. 저녁과 아침으로 첫째 날이 닫힙니다." },
        { tag: "해석", text: "이름 붙임과 구별은 혼란을 지우는 일이 아니라 질서를 세우는 창조 행위로 나타납니다. 밤도 창조 세계 밖으로 버려지지 않고 하루의 리듬 안에 놓입니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "창세기 1:14–19", tag: "구별", text: "해와 달과 별에 해당하는 광명체는 넷째 날에 등장합니다. 첫째 날의 빛과 그림 속 별빛을 동일한 대상으로 설명하지 않습니다." },
      { ref: "시편 33:6–9", tag: "연결", text: "여호와의 말씀으로 하늘이 지어지고, 그가 말씀하시자 이루어졌다고 노래합니다. 창세기의 말씀-창조를 찬양의 언어로 되받습니다." },
      { ref: "요한복음 1:1–5", tag: "연결", text: "요한복음은 ‘태초’와 ‘빛’의 언어로 말씀 안의 생명과 어둠이 이기지 못하는 빛을 증언합니다. 창세기 본문을 지우지 않고 정경 안에서 확장해 읽게 합니다." },
      { ref: "고린도후서 4:6", tag: "연결", text: "바울은 어두운 데서 빛이 비취라고 하신 하나님이 마음에 빛을 비추셨다고 말합니다. 창조의 빛을 그리스도를 아는 빛과 연결합니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "본문이 말하는 것: 창세기 1:1–5는 하나님이 창조하시고 말씀으로 빛을 부르며 빛과 어둠을 나누셨다고 증언합니다.",
        "시간의 구별: 첫째 날의 빛은 넷째 날의 해·달·별과 구별됩니다. 반 고흐의 별빛을 창세기 1장 3절의 빛이라고 설명하지 않습니다.",
        "예술의 자리: 《별이 빛나는 밤》은 창조 사건의 역사화가 아니고, 《천지창조》는 성경 본문 자체가 아니라 하이든과 대본가가 음악과 시로 해석한 오라토리오입니다."
      ]
    }
  },

  keep: {
    sentence: "어둠이 끝난 뒤에만 시작되는 것이 아니라, 하나님은 어둠 속에 빛을 부르시며 하루의 첫 경계를 세우십니다.",
    question: "내가 지금 혼돈이나 어둠으로만 부르는 자리에서, 하나님께서 새로 구별하고 이름 붙이실 빛은 무엇일까요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "오늘 나의 밤하늘을 한 문장으로 적고, 그 안에서 기다리는 빛을 기록해 보세요.",
    pdfCredit: "그림: 빈센트 반 고흐, 《별이 빛나는 밤》(MoMA 소장; Wikimedia Commons Public Domain Mark 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 하이든 《천지창조》, DW Classical Music 공식 YouTube 허용 임베드(음원 파일 미수록)."
  }),

  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-15",
    releaseStatus: "READY · Captain 공개 승인(2026-11-15) · 외부 자료 권리 및 공식 임베드 확인",
    groups: [
      { label: "미술작품", lines: [
          "빈센트 반 고흐, 《The Starry Night》, 1889년 6월, 캔버스에 유채, 73.7 × 92.1 cm. 뉴욕 현대미술관(MoMA) 작품번호 472.1941.",
          "작품 정보와 해설은 MoMA 공식 작품 페이지에서 확인했습니다. 실제 수록 이미지는 MoMA 제공 파일이 아니라 Wikimedia Commons가 Public Domain Mark로 표시한 Google Arts & Culture의 충실한 복제본입니다."
        ], links: [{ label: "MoMA 작품 페이지", url: "https://www.moma.org/collection/works/79802" }, { label: "Wikimedia Commons 이미지·권리", url: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" }, { label: "Public Domain Mark", url: "https://creativecommons.org/publicdomain/mark/1.0/deed.ko" }] },
      { label: "음악", lines: [
          "요제프 하이든, 오라토리오 《Die Schöpfung(The Creation)》 Hob. XXI:2. 승인 기획에 지정된 ‘혼돈의 묘사’와 ‘빛’ 대목을 사용합니다.",
          "현대 연주·영상의 권리는 제공자에게 있습니다. DW Classical Music 공식 YouTube 영상의 허용 임베드만 사용하고, 7분 57초부터 불러오며, 자동재생·음원 복제·다운로드를 하지 않습니다."
        ], links: [{ label: "DW Classical Music 공식 영상", url: "https://www.youtube.com/watch?v=EuIs7R2BpvQ&t=477s" }, { label: "DW Classical Music 채널", url: "https://www.youtube.com/@DWClassicalMusic" }] },
      { label: "성경", lines: [
          "창세기 1:1–5, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문은 대한성서공회 온라인 성경의 개역한글판 1–5절과 대조했습니다. 첫째 날 빛과 넷째 날 광명체를 구별해 해설했습니다."
        ], links: [{ label: "창세기 1장 · 개역한글", url: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=gen&cVersion=SAE%5E&chap=1&fontSize=0&fontString=10px&fontWeight=bold&sec=16&version=HAN" }, { label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "승인된 007 상세 편집 기획의 성경·미술·음악 조합과 다섯 장면, 핵심 통찰, 신학 경계를 따라 새로 쓴 자체 원고입니다. 외부 해설 문장을 옮기지 않았습니다.",
          "핵심 경계: 반 고흐의 그림은 창조 사건 묘사가 아니며, 창세기 첫째 날의 빛과 그림 속 별빛을 동일시하지 않습니다."
        ], links: [{ label: "007–050 상세 편집 기획 v0.2 · Captain 승인본", url: "https://app.notion.com/p/4193b0124c5281f8a179c508359d19ae" }] }
    ],
    records: {
      art: {
        id: "art-7", artist: "Vincent van Gogh", title: "The Starry Night", year: "June 1889", medium: "Oil on canvas",
        usedFiles: ["assets/starry-night-480.jpg", "assets/starry-night-1280.jpg"],
        derivedFrom: "Wikimedia Commons 1280px thumbnail of the Google Arts & Culture faithful reproduction",
        sourceFile: { name: "1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", pixels: "1280x1014", bytes: 618432, sha256: "A2759458DBC9CF1150DDC8B5D16453ABA4790ED6FE826C29F4CF59471D07E629" },
        museum: { name: "The Museum of Modern Art", objectNumber: "472.1941", collectionUrl: "https://www.moma.org/collection/works/79802" },
        processing: "1280px Commons 공개본은 그대로 사용. 480px 파일은 같은 비율로 고품질 축소; 자르기·색 보정 없음.",
        url: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        license: "Public Domain Mark 1.0 / PD-old-100-expired / PD-Art", rightsHolder: "원작 저작권 소멸; Commons가 알려진 권리 제한 없음으로 표시한 충실한 복제본",
        rightsBasisUrl: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        useForm: "image", pdfInclude: true, pdfReason: "Commons 파일 설명의 Public Domain Mark와 PD-Art 표시를 확인하고 출처와 함께 수록",
        status: "VERIFIED(작품 식별·소장처·Commons 권리 표시·파일 해시 확인)", open: [], checkedOn: "2026-11-15"
      },
      music: {
        id: "music-7", composer: "Joseph Haydn", work: "Die Schöpfung, Hob. XXI:2", composerStatus: "저작권 소멸(1809 사망)",
        performance: "Nederlands Kamerkoor, Concerto d’Amsterdam, Klaas Stok, recorded 2009; published by DW Classical Music",
        officialPage: "https://www.youtube.com/watch?v=EuIs7R2BpvQ",
        embed: { provider: "YouTube", videoId: "EuIs7R2BpvQ", channel: "DW Classical Music", channelId: "UC_kqgIRwOD3XCZXXr4B6bPQ", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 6100, startSeconds: 477, autoplay: false, loadedOnlyAfterTap: true },
        audioFilesHosted: false,
        url: "https://www.youtube.com/watch?v=EuIs7R2BpvQ&t=477s",
        license: "저작권 있는 현대 연주·녹화; 공식 YouTube 허용 임베드와 링크만", rightsHolder: "DW Classical Music / 해당 연주·영상 권리자",
        rightsBasisUrl: "https://www.youtube.com/watch?v=EuIs7R2BpvQ",
        useForm: "embed, link, original commentary", pdfInclude: false, pdfReason: "PDF에 음원·영상·악보·가사를 복제하지 않음",
        connection: "직접 연결(오라토리오의 혼돈 서주와 창세기 1:3의 빛 대목)",
        status: "VERIFIED(공식 채널·oEmbed·playableInEmbed=true·길이·시작 시각 확인)", open: [], checkedOn: "2026-11-15"
      },
      bible: {
        id: "bible-7", translation: "개역한글판(1961)", range: "창세기 1:1–5",
        copyright: "대한성서공회 안내 표: 개역한글판 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=gen&cVersion=SAE%5E&chap=1&fontSize=0&fontString=10px&fontWeight=bold&sec=16&version=HAN",
        textSource: "대한성서공회 온라인 성경 개역한글판 본문과 1–5절 전 구절 대조",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회",
        rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 전 구절 대조·보호기간 소멸 확인)", open: [], checkedOn: "2026-11-15"
      },
      commentary: {
        id: "text-7", authorship: "프로젝트 자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "original commentary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED_FOR_RELEASE", open: [], checkedOn: "2026-11-15", approvedBy: "Captain", approvedOn: "2026-11-15"
      }
    }
  }
});
