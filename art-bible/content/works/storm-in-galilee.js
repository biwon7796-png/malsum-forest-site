/* 《내 손안의 예술성경》 작품 데이터 — 한 작품 = 한 파일 (content/works/<id>.js).
   화면 코드(index.html / css / js)는 수정하지 않고, 이 구조의 파일을 추가한 뒤 content/library.js에 id를 한 줄 더하면 서재에 나타납니다.
   id는 개인 기록(메모·사진·책갈피)의 연결 열쇠이므로 한 번 정하면 바꾸지 않습니다. 태그 종류: 사실 · 관찰 · 해석 · 추정 · 본문 · 연결 · 대조 · 감상
   이 데이터는 웹북 표시·검색용 콘텐츠 메타데이터이며 Jude Lee OS Registry나 승인 상태를 대신하지 않습니다. */
ArtBook.register({
  id: "storm-in-galilee",

  /* 서재 목록과 검색에 쓰는 정보 */
  meta: {
    status: "approved",
    summary: "폭풍 한가운데서 잠드신 예수. 두려움과 침묵 앞에서 믿음이 무엇인지 묻는 그림 한 점, 음악 한 곡, 말씀 한 자락.",
    themes: ["두려움", "침묵", "믿음", "예수님의 권위"],
    tags: ["폭풍", "풍랑", "바다", "갈릴리", "잠", "제자", "구원", "순종", "잔잔함"],
    bible: {
      books: ["마태복음"], bookAliases: ["마태"],
      ranges: ["마태복음 8:23–27"],
      related: ["마가복음 4:35–41", "시편 89:9", "시편 107:23–30", "욥기 38:8–11", "요나 1장"]
    },
    art: { artist: "찰스 엑쇼", artistAliases: ["Charles Exshaw", "렘브란트", "Rembrandt"], title: "갈릴리 바다의 폭풍 속 그리스도", titleAliases: ["Christ in the Storm on the Sea of Galilee", "Christus in de storm op het Meer van Galilea"], year: 1760 },
    music: { composer: "요한 제바스티안 바흐", composerAliases: ["바흐", "Bach", "J.S. Bach"], work: "칸타타 BWV 81", workAliases: ["BWV 81", "Jesus schläft, was soll ich hoffen?"] },
    cover: { src: "assets/storm_1200.jpg", alt: "폭풍 속에서 큰 파도에 치솟은 작은 배와 사람들" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "첫 공개판 · Captain 신학·내용 검토 승인",
  title: "폭풍 한가운데, 잠드신 예수",
  passage: "마태복음 8:23–27",
  themes: "두려움 · 침묵 · 믿음 · 예수님의 권위",

  scenes: [
    { id: "s1", name: "바라보다" },
    { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/storm_1200.jpg",
      srcset: "assets/storm_1200.jpg 1200w, assets/storm_2400.jpg 2400w",
      zoom: "assets/storm_2400.jpg",
      width: 1200, height: 1504,
      alt: "에칭으로 묘사한 거센 폭풍 속 작은 배. 비스듬히 기운 돛대와 찢긴 돛에 매달린 사람들이 보이고, 배 뒤편 아래쪽에는 제자들이 잠든 예수님 곁으로 몰려 있다. 오른쪽에서는 높은 파도가 배를 덮치고, 구름 사이로 밝은 빛이 스며든다."
    },
    caption: {
      artist: "찰스 엑쇼 (Charles Exshaw) · 렘브란트 원작을 바탕으로 제작",
      work: "《갈릴리 바다의 폭풍 속 그리스도》",
      meta: "1760년 · 에칭과 드라이포인트 · 종이 · 64.4 × 50.9 cm",
      owner: "Rijksmuseum 소장 · RP-P-OB-19.225",
      notes: ["렘브란트의 1633년 회화를 바탕으로 만든 판화입니다. Rijksmuseum이 이 판화와 이미지를 Public Domain으로 공개합니다."]
    },
    prompt: "먼저 1분만, 눈이 어디에 머무는지 지켜보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "파도는 거세고, 제자들은 두려움에 사로잡혔습니다. 그런데 같은 배 안에, 예수님은 잠들어 계십니다.",
    items: [
      { tag: "사실", text: "찰스 엑쇼가 1760년에 만든 에칭과 드라이포인트 판화입니다. 렘브란트의 1633년 회화를 바탕으로 제작했으며, Rijksmuseum은 이 판화의 저작권 상태를 Public Domain으로 표시합니다." },
      { tag: "관찰", text: "비스듬히 솟은 돛대를 따라 올라가면 찢긴 돛과 부서지는 파도, 돛에 매달려 버티는 사람들이 보입니다. 시선을 내려 배 뒤편으로 오면, 몇몇 사람이 한 분 곁으로 몰려 있는 자리가 있습니다. 그곳이 예수님이 계신 곳입니다." },
      { tag: "해석", text: "판화는 폭풍이 잦아든 뒤가 아니라 아직 폭풍인 순간을 붙잡습니다. 구름 사이로 빛이 스며들지만, 파도는 여전히 배를 들어 올립니다. 제자들은 싸우다가, 마침내 예수님께 달려갑니다. 마태복음이 전하는 “주여, 구원하소서”의 순간으로 읽을 수 있는 장면입니다." },
      { tag: "관찰", text: "검은 선이 빽빽한 하늘과 파도 사이에서 배 안의 얼굴들은 작은 원을 이룹니다. 그림 아래에는 영어와 프랑스어로 마태복음 8장의 장면을 설명한 문장이 새겨져 있습니다." }
    ],
    again: "다시 한 번 보세요. 이번에는 예수님이 아니라, 제자들의 얼굴을 한 사람씩."
  },

  listen: {
    work: "요한 제바스티안 바흐 · 칸타타 BWV 81",
    titleDe: "Jesus schläft, was soll ich hoffen?",
    titleKo: "예수께서 주무시는데, 내가 무엇을 바랄 수 있겠는가? (제목 번역)",
    items: [
      { tag: "사실", text: "바흐는 이 칸타타를 1724년 1월 30일 라이프치히에서 처음 연주한 것으로 전해집니다. 그 주일 예배에 정해진 복음서 본문이 바로 마태복음 8:23–27, 폭풍을 잠잠케 하신 이야기였습니다." },
      { tag: "사실", text: "곡의 제목은 질문입니다. 일곱 악장으로 이루어져 있고, 네 번째 악장에서는 베이스가 마태복음 8:26의 예수님 말씀을 직접 노래하며, 마지막은 찬송 〈Jesu, meine Freude〉의 한 절 “Unter deinen Schirmen(당신의 보호 아래)”로 마칩니다." },
      { tag: "감상", text: "17분 남짓한 곡에서 첫 아리아가 전체의 3분의 1 가까이를 차지합니다. 전부 듣지 않아도 좋습니다. 처음 몇 분 동안, 질문이 풀리지 않은 채 머무는 느낌을 판화 속 ‘아직 폭풍인 순간’과 나란히 놓아 보세요." }
    ],
    duration: "16분 53초",
    channel: "네덜란드 바흐 협회",
    playLabel: "BWV 81 감상하기",
    embedTitle: "바흐 칸타타 BWV 81 — 네덜란드 바흐 협회",
    performance: "연주: 네덜란드 바흐 협회(Netherlands Bach Society) · Shunske Sato 지휘·바이올린 · 2017년 1월 21일 암스테르담 왈롱 교회 녹화",
    videoId: "n5QJIGTCgIs",
    links: [
      { label: "네덜란드 바흐 협회 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-81" },
      { label: "YouTube에서 열기", url: "https://www.youtube.com/watch?v=n5QJIGTCgIs" }
    ],
    note: "소리는 자동으로 재생되지 않습니다. 재생이 어려운 곳이라면 다음 장면으로 그냥 넘어가셔도 됩니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "마태복음 8:23–27",
      lines: [
        { v: 23, t: "배에 오르시매 제자들이 좇았더니" },
        { v: 24, t: "바다에 큰 놀이 일어나 물결이 배에 덮이게 되었으되 예수는 주무시는지라" },
        { v: 25, t: "그 제자들이 나아와 깨우며 가로되 주여 구원하소서 우리가 죽겠나이다" },
        { v: 26, t: "예수께서 이르시되 어찌하여 무서워하느냐 믿음이 적은 자들아 하시고 곧 일어나사 바람과 바다를 꾸짖으신대 아주 잔잔하게 되거늘" },
        { v: 27, t: "그 사람들이 기이히 여겨 가로되 이 어떠한 사람이기에 바람과 바다도 순종하는고 하더라" }
      ]
    },
    intro: "먼저 본문을 천천히 한 번 읽습니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "8:23", items: [
        { tag: "본문", text: "예수님이 배에 오르시고, 제자들이 뒤따릅니다." },
        { tag: "연결", text: "바로 앞(8:18–22)은 “따르겠다”는 사람들 이야기입니다. 제자들은 따라서 배에 올랐고, 그 배 위에서 폭풍을 만납니다." }
      ]},
      { ref: "8:24", items: [
        { tag: "본문", text: "바다에 큰 요동이 일어나 배가 파도에 덮이는데, 예수님은 주무십니다." },
        { tag: "관찰", text: "‘요동’으로 옮겨지는 그리스어 세이스모스는 마태복음에서 지진을 가리킬 때도 쓰입니다(24:7; 27:54; 28:2). 이 장면에 하늘과 땅이 흔들리는 울림이 있다고 보는 주석가들이 있으나, 본문이 그렇게 말하는 것은 아닙니다." }
      ]},
      { ref: "8:25", items: [
        { tag: "본문", text: "제자들이 예수님을 깨우며 “주여, 구원하소서, 우리가 죽게 되었습니다”라는 뜻의 말을 합니다." },
        { tag: "관찰", text: "마가복음 4:38에서는 “우리가 죽게 된 것을 돌보지 않으십니까”라는 원망 섞인 물음입니다. 마태복음의 말은 기도에 훨씬 가깝습니다." }
      ]},
      { ref: "8:26", items: [
        { tag: "본문", text: "예수님은 먼저 제자들에게 왜 두려워하느냐고 물으시고, 그 뒤에 일어나 바람과 바다를 꾸짖으십니다. 그러자 아주 잔잔해집니다." },
        { tag: "관찰", text: "마가복음 4:39–40은 순서가 반대입니다. 바람을 먼저 꾸짖고 그다음에 제자들에게 말씀하십니다. 또 “믿음 없는 자들”이 아니라 “믿음이 적은 자들”이라 부르시는데, 마태복음은 이 호칭을 제자들에게 되풀이합니다(6:30; 14:31; 16:8)." },
        { tag: "해석", text: "마태복음이 두려움을 먼저 다루는 이 순서에서, 이야기의 무게가 폭풍보다 제자들의 마음에 놓여 있다고 읽을 수 있습니다." }
      ]},
      { ref: "8:27", items: [
        { tag: "본문", text: "사람들이 놀라 묻습니다. 이분은 어떤 분이기에 바람과 바다까지 순종하는가." },
        { tag: "관찰", text: "본문은 이 물음에 답하지 않고 열어 둡니다. 곧이어 8:29에서 귀신들이 예수님을 “하나님의 아들”이라 부르는 장면이 이어집니다. 묻는 것은 제자들인데, 먼저 알아보는 것은 귀신들입니다." }
      ]}
    ],
    echoesTitle: "구약의 메아리",
    echoes: [
      { ref: "시편 89:9", tag: "연결", text: "솟구치는 바다를 다스리고, 파도가 일 때 가라앉히시는 분이 주님이라고 노래합니다." },
      { ref: "시편 107:23–30", tag: "연결", text: "바다에서 두려워 주께 부르짖는 사람들을 폭풍에서 건져 내십니다. 위기 중의 부르짖음과 폭풍의 그침이라는 흐름이 마태복음 8:25–26과 닮았습니다." },
      { ref: "욥기 38:8–11", tag: "연결", text: "바다의 경계를 정하시는 분은 하나님이십니다." },
      { ref: "요나 1장", tag: "대조", text: "폭풍 속 배 안에서 잠든 사람이 또 있습니다. 그러나 요나는 폭풍의 원인이었고, 예수님은 그렇지 않습니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "직접 인용: 마태복음 8:23–27은 위의 구약 본문을 인용하지 않습니다.",
        "본문이 보여 주는 것: 구약에서 바다를 다스리고 잠잠케 하는 일은 하나님의 일로 그려집니다. 그리고 이 이야기에서 예수님의 말씀에 바람과 바다가 순종합니다.",
        "해석: 그래서 이 장면이 예수님의 권위를 하나님의 권위와 잇는다고 읽는 것이 기독교 전통의 읽기입니다. 마태복음은 이것을 설명하지 않고 8:27의 질문으로 독자에게 건넵니다."
      ]
    }
  },

  keep: {
    sentence: "폭풍이 지난 뒤 남은 것은 잔잔한 바다보다 하나의 질문이었습니다. 이분은 누구신가.",
    question: "지금 내가 두려워하는 것은 폭풍 자체입니까, 아니면 그 한가운데서 느껴지는 주님의 침묵입니까?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  /* 나의 작은 묵상 노트 — 이 기기의 브라우저에만 저장(서버·계정 없음). 문구는 작품마다 바꿀 수 있습니다. */
  note: {
    title: "나의 작은 묵상 노트",
    intro: "책을 덮기 전에, 오늘의 나를 잠시 적어 두고 싶다면 이 수첩을 펼쳐 보세요. 감상만 하셨다면 그냥 지나가셔도 좋습니다.",
    open: "수첩 펼치기",
    close: "수첩 접기",
    skip: "자료 출처로 건너뛰기",
    feelingLabel: "오늘 마음에 남은 감상",
    feelingHint: "그림이나 음악에서 눈과 귀에 남은 것을 적어 보세요.",
    reflectionLabel: "말씀과 연결된 나의 묵상",
    reflectionHint: "마태복음 8:23–27을 읽으며 떠오른 생각이나 기도를 적어 보세요.",
    photosLabel: "오늘의 사진 (최대 3장)",
    photosHint: "휴대전화 갤러리에서 일상의 사진을 골라 곁에 둘 수 있습니다. 사진을 누르면 크게 보입니다.",
    addPhoto: "사진 고르기",
    keepTitle: "기록 간직하기",
    pdf: {
      title: "나의 묵상책",
      desc: "오늘의 감상·묵상·사진을 한 권의 읽기 좋은 문서(PDF)로 만듭니다. 간직하거나 인쇄하기 좋은 파일이며, 다시 불러오는 용도는 아닙니다.",
      button: "묵상책 PDF로 저장",
      hint: "저장 창이 열리면 ‘PDF로 저장’을 고르세요. iPhone은 공유 단추에서 ‘파일에 저장’을 고릅니다.",
      series: "내 손안의 예술성경",
      savedOn: "저장일",
      photosTitle: "오늘의 사진",
      credit: "그림: 찰스 엑쇼, 《갈릴리 바다의 폭풍 속 그리스도》(1760), Rijksmuseum 소장·Public Domain. 렘브란트 원작을 바탕으로 한 판화. 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 바흐 BWV 81(링크로만 연결).",
      local: "이 문서는 이 기기에서 만들어졌으며 어디에도 전송되지 않았습니다. 글과 사진의 권리는 작성한 분께 있습니다."
    },
    backup: {
      title: "내 기록 백업",
      desc: "글과 사진을 그대로 담아 두는 보관용 파일입니다. 열어서 읽는 파일이 아니라, 기기를 바꾸거나 기록이 지워졌을 때 ‘백업 불러오기’로 되돌리는 용도입니다.",
      save: "백업 파일 저장",
      load: "백업 불러오기",
      readme: "이 파일은 ‘내 손안의 예술성경’의 내 기록 백업 파일입니다. 읽는 용도가 아니라, 책의 ‘백업 불러오기’로 글과 사진을 되돌리는 용도입니다. 내용을 고치지 마세요."
    },
    clearLabel: "노트 비우기",
    privacy: [
      "이 노트의 글과 사진은 이 기기의 이 브라우저에만 저장됩니다. 서버로 보내지 않으며 어디에도 공유되지 않습니다.",
      "브라우저의 사이트 데이터를 지우거나 사생활 보호 모드를 쓰거나 저장 공간이 부족하면 기록이 사라질 수 있습니다. 소중한 기록은 ‘백업 파일 저장’으로 보관해 두세요.",
      "사진은 저장 전에 가로세로 1600픽셀 이내로 줄여서 보관합니다. 사진의 권리는 올린 분께 있으며, 이 책의 그림·음악·글을 이용할 수 있는 권한과는 별개입니다."
    ],
    msg: {
      typing: "적는 중…",
      saved: "이 기기에 저장됨",
      textOnly: "(글만 저장됩니다)",
      restored: "지난번에 적은 노트를 불러왔습니다.",
      processing: "사진을 줄여서 저장하는 중…",
      maxPhotos: "사진은 최대 3장까지 담을 수 있습니다. 담을 수 없는 사진은 넣지 않았습니다.",
      badImage: "읽을 수 없는 사진은 넣지 않았습니다.",
      quota: "저장 공간이 부족해 저장하지 못했습니다. 지금 화면의 내용은 사라질 수 있으니 ‘백업 파일 저장’으로 먼저 보관하고, 사진을 지우거나 기기 공간을 확보해 주세요.",
      failed: "저장하지 못했습니다. 지금 화면의 내용은 페이지를 닫으면 사라질 수 있으니 ‘백업 파일 저장’으로 보관해 주세요.",
      photoNotSaved: "사진을 저장하지 못했습니다.",
      fallbackLs: "이 브라우저에서는 사진 저장을 쓸 수 없어 글만 저장합니다. 사진 기능은 꺼져 있습니다.",
      noStorage: "이 브라우저에서는 저장할 수 없습니다(사생활 보호 모드일 수 있습니다). 적은 내용은 페이지를 닫으면 사라지니 ‘백업 파일 저장’이나 PDF로 보관해 주세요.",
      photosOff: "이 브라우저에서는 사진을 담을 수 없습니다.",
      confirmPhoto: "이 사진을 노트에서 지울까요? 되돌릴 수 없습니다.",
      confirmClear: "노트의 글과 사진을 모두 지울까요? 이 기기에서 완전히 삭제되며 되돌릴 수 없습니다.",
      confirmImport: "지금 노트의 내용을 백업 파일의 내용으로 바꿉니다. 계속할까요?",
      cleared: "노트를 비웠습니다.",
      nothingToKeep: "아직 적은 기록이 없습니다. 감상이나 사진을 남긴 뒤 저장해 주세요.",
      working: "파일을 만드는 중…",
      pdfOpened: "저장 창을 열었습니다. ‘PDF로 저장’을 골라 주세요. 창이 열리지 않으면 Safari나 Chrome 같은 기본 브라우저에서 열어 주세요.",
      pdfFailed: "묵상책을 만들지 못했습니다.",
      backupShared: "백업 파일을 보관했습니다. 안전한 곳에 두었는지 파일 앱에서 한 번 확인해 주세요.",
      backupDownloaded: "백업 파일을 내려받았습니다. ‘다운로드’ 폴더(또는 파일 앱)에서 확인해 주세요.",
      backupCancelled: "백업 저장을 취소했습니다.",
      backupFailed: "백업 파일을 만들지 못했습니다.",
      imported: "기록을 가져왔습니다.",
      importWrong: "이 책의 백업 파일이 아닙니다.",
      importBad: "파일을 읽을 수 없습니다. 이 책에서 저장한 백업 파일인지 확인해 주세요."
    }
  },

  /* 화면에 보이는 '작품과 자료 출처'(groups)와, 다음 작품에도 그대로 쓸 수 있는 확인 기록(records).
     status 값: VERIFIED(직접 확인) · PARTIAL(일부만 확인) · UNVERIFIED(미확인). 추정값은 적지 않는다. */
  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-12",
    releaseStatus: "READY · Captain 신학·내용 검토 승인(2026-11-12) · 첫 공개판 수록 승인",
    groups: [
      { label: "미술작품", lines: [
          "찰스 엑쇼, 《갈릴리 바다의 폭풍 속 그리스도》, 1760, 에칭과 드라이포인트, 종이, 64.4 × 50.9 cm. 렘브란트의 1633년 회화를 바탕으로 제작한 판화입니다.",
          "이미지: Rijksmuseum 객체 RP-P-OB-19.225. 공식 객체 페이지가 작품과 이미지를 Public Domain으로 표시합니다. IIIF 원본에서 비율과 색을 바꾸지 않고 크기만 줄였습니다."
        ], links: [{ label: "Rijksmuseum 작품 페이지", url: "https://www.rijksmuseum.nl/en/collection/object/Christus-in-de-storm-op-het-Meer-van-Galilea--5955d48128238b47f5beb530419ea90c" }, { label: "영구 식별자", url: "https://id.rijksmuseum.nl/200188609" }, { label: "Public Domain Mark", url: "https://creativecommons.org/publicdomain/mark/1.0/deed.en" }] },
      { label: "음악", lines: [
          "요한 제바스티안 바흐, 칸타타 BWV 81 〈Jesus schläft, was soll ich hoffen?〉(작곡 1724년경, 저작권 소멸).",
          "연주·녹화: 네덜란드 바흐 협회, Shunske Sato, 2017. 이 녹음의 권리는 협회에 있으며 음원을 복제하지 않고 협회의 감상 페이지와 공식 YouTube 영상으로만 연결합니다."
        ], links: [{ label: "협회 감상 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-81" }, { label: "공식 YouTube 영상", url: "https://www.youtube.com/watch?v=n5QJIGTCgIs" }] },
      { label: "성경", lines: [
          "마태복음 8:23–27, 개역한글판(1961) 본문. 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문 전사는 한글 위키문헌 ‘개역한글판’에서 가져왔고, 대한성서공회 원본과의 대조는 아직 마치지 못했습니다."
        ], links: [{ label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "이 책의 해설과 묵상글은 필자가 새로 쓴 원고이며, 기존 출판물의 문장을 옮기지 않았습니다. Captain이 신학·내용을 직접 검토하고 첫 공개판 수록을 승인했습니다.",
          "참고한 성경 자료: 마태복음 8:18–34, 마가복음 4:35–41, 시편 89:9, 시편 107:23–30, 욥기 38:8–11, 요나 1장. 주석서는 인용하지 않았습니다."
        ], links: [] }
    ],
    records: {
      art: {
        id: "art-1", artist: "Charles Exshaw (after Rembrandt van Rijn)", title: "Christ in the Storm on the Sea of Galilee", year: 1760,
        usedFiles: ["assets/storm_1200.jpg", "assets/storm_2400.jpg"],
        derivedFrom: "Rijksmuseum IIIF 공개 원본(배포본에는 리사이즈 이미지와 출처 링크만 포함)",
        sourceFile: { name: "storm_rijksmuseum_exshaw_original.jpg", url: "https://iiif.micr.io/Eughd/full/^2400,/0/default.jpg",
          pixels: "2400x3009", bytes: 2238188, sha256: "2419914e514129717d4b0a3b82e8e2e01f1f4240cde76b9cd0ac11989866e43a" },
        museum: { name: "Rijksmuseum", objectNumber: "RP-P-OB-19.225", persistentId: "https://id.rijksmuseum.nl/200188609", copyright: "Public domain" },
        processing: "IIIF JPEG 원본을 LANCZOS로 리사이즈. 색 보정·자르기 없음. 비율 2400:3009 유지.",
        url: "https://www.rijksmuseum.nl/en/collection/object/Christus-in-de-storm-op-het-Meer-van-Galilea--5955d48128238b47f5beb530419ea90c",
        license: "Public Domain Mark 1.0 (Rijksmuseum 객체 페이지 표시)", rightsHolder: "저작권 제한 없음으로 표시된 Rijksmuseum 공개 이미지",
        rightsBasisUrl: "https://creativecommons.org/publicdomain/mark/1.0/deed.en",
        useForm: "image", pdfInclude: true, pdfReason: "Rijksmuseum이 객체와 이미지를 Public Domain으로 표시; 출처와 함께 PDF 수록",
        status: "VERIFIED(공식 객체 페이지 Public Domain 표시·IIIF 원본 확인)",
        open: [],
        checkedOn: "2026-11-12"
      },
      music: {
        id: "music-1", composer: "J. S. Bach", work: "BWV 81", composerStatus: "저작권 소멸(1750 사망)",
        performance: "Netherlands Bach Society, Shunske Sato, recorded 2017-01-21 (협회 페이지 기재)",
        officialPage: "https://www.bachvereniging.nl/en/bwv/bwv-81", officialPageChecked: "열람 확인(2026-11-12, WebFetch)",
        embed: { provider: "YouTube", videoId: "n5QJIGTCgIs", channel: "Netherlands Bach Society", oembed: "200 OK(공유·임베드 허용 응답)", playableInEmbed: true, lengthSeconds: 1013, autoplay: false, loadedOnlyAfterTap: true },
        audioFilesHosted: false,
        url: "https://www.bachvereniging.nl/en/bwv/bwv-81",
        license: "저작권 있는 현대 연주·녹화; 공식 링크/허용 임베드만", rightsHolder: "Netherlands Bach Society",
        rightsBasisUrl: "https://www.youtube.com/watch?v=n5QJIGTCgIs",
        useForm: "embed, link, summary", pdfInclude: false, pdfReason: "PDF에 음원·영상·가사·포스터를 복제하지 않음",
        status: "PARTIAL",
        open: ["협회 감상 페이지에서 전체 연주가 재생되는지는 브라우저 렌더링으로 확인하지 못함", "영상이 협회 페이지의 연주와 동일 녹음인지는 제목·채널 근거만 확인"],
        checkedOn: "2026-11-12"
      },
      bible: {
        id: "bible-1", translation: "개역한글판(1961)", range: "마태복음 8:23–27",
        copyright: "대한성서공회 안내 표: 성경전서 개역한글판 최초 발행 1961-07-10, 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        textSource: "ko.wikisource.org 개역한글판/마태복음 (리비전 2025-09-17)",
        crossCheck: "대한성서공회 개역한글 본문과 8:23–27 전 구절 대조 완료(2026-11-12)",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회",
        rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(대한성서공회 본문 전 구절 대조·개역한글판 보호기간 소멸 확인)",
        open: [],
        notUsed: ["개역개정판", "새번역", "표준새번역", "공동번역"],
        checkedOn: "2026-11-12"
      },
      commentary: { id: "text-1", authorship: "자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "summary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED", open: [], checkedOn: "2026-11-12", approvedBy: "Captain", approvedOn: "2026-11-12" }
    }
  }
});
