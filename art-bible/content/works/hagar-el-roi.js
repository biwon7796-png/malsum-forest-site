/* ART-BIBLE-009 · 광야에서 나를 보시는 분 — 페르디난트 볼 · 가스펠 《His Eye Is on the Sparrow》 · 창세기 16:7–13
   승인된 상세 편집 기획 v0.2에 따라 제작한 Captain 공개 승인 대기 후보본. */
ArtBook.register({
  id: "hagar-el-roi",

  meta: {
    status: "candidate",
    summary: "광야의 샘 곁에서 발견된 하갈을 바라보고, 하나님이 그의 고통을 들으시며 그를 보신다는 창세기의 증언에 머뭅니다.",
    themes: ["발견", "들으심", "보심"],
    tags: ["하갈", "이스마엘", "엘 로이", "술 길", "광야", "고통", "페르디난트 볼", "하갈과 천사", "His Eye Is on the Sparrow", "Lynda Randle"],
    bible: { books: ["창세기"], bookAliases: ["창"], ranges: ["창세기 16:7–13"], related: ["창세기 16:1–6", "창세기 16:14–16", "창세기 21:8–21", "출애굽기 3:7–9"] },
    art: { artist: "페르디난트 볼", artistAliases: ["Ferdinand Bol"], title: "술로 가는 길의 우물가에 있는 하갈과 천사", titleAliases: ["Hagar and the Angel at the Well on the Way to Shur"], year: "약 1640" },
    music: { composer: "찰스 H. 가브리엘", composerAliases: ["Charles H. Gabriel"], work: "His Eye Is on the Sparrow", workAliases: ["주의 눈은 참새를 향하시고"], performer: "The Tabernacle Choir at Temple Square" },
    cover: { src: "assets/hagar-480.jpg", alt: "광야의 샘 곁에 앉은 하갈에게 천사가 몸을 기울여 말하는 갈색 잉크 드로잉" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "완성 후보 · Captain 공개 승인 대기",
  title: "광야에서 나를 보시는 분",
  passage: "창세기 16:7–13",
  themes: "발견 · 들으심 · 보심",

  scenes: [
    { id: "s1", name: "바라보다" }, { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" }, { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/hagar-1280.jpg", srcset: "assets/hagar-480.jpg 480w, assets/hagar-1280.jpg 1280w", zoom: "assets/hagar-1280.jpg",
      width: 1280, height: 988,
      alt: "갈색 잉크와 담채로 그린 광야 풍경이다. 화면 왼쪽의 하갈은 샘 곁 땅에 앉아 몸을 뒤로 돌리고, 오른쪽의 천사는 긴 옷자락을 두른 채 몸을 굽혀 하갈에게 말한다. 두 인물 뒤로 낮은 언덕과 성긴 나무가 이어진다."
    },
    caption: {
      artist: "페르디난트 볼 (Ferdinand Bol, 1616–1680)",
      work: "《술로 가는 길의 우물가에 있는 하갈과 천사》",
      meta: "약 1640년 · 종이에 펜과 갈색 잉크, 갈색 담채 · 18.2 × 23.3 cm",
      owner: "암스테르담 국립미술관 소장 · RP-T-1930-27",
      notes: ["작품 파일은 암스테르담 국립미술관 원본을 바탕으로 Wikimedia Commons가 CC0로 공개한 이미지입니다. 비율과 색을 유지한 채 화면 크기만 줄였습니다."]
    },
    prompt: "샘 곁에 낮게 앉은 하갈에서 시작해, 그에게 몸을 기울이는 천사와 두 인물 사이의 빈 공간을 천천히 바라보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "도망친 하갈은 화면 가장자리로 사라지지 않습니다. 천사의 몸과 시선이 낮은 곳의 그를 향합니다.",
    items: [
      { tag: "사실", text: "렘브란트의 제자였던 페르디난트 볼이 약 1640년에 그린 드로잉입니다. 한때 렘브란트 작품으로 여겨졌으나 현재는 볼의 작품으로 분류됩니다." },
      { tag: "관찰", text: "하갈은 땅 가까이 앉아 있고, 천사는 서 있는 권위를 과시하기보다 몸을 굽혀 그에게 다가갑니다. 빠른 선과 옅은 갈색 담채가 메마르고 흔들리는 광야의 감각을 남깁니다." },
      { tag: "해석", text: "화면의 중심은 웅장한 기적보다 ‘발견된 한 사람’에게 놓입니다. 타인의 소유와 도구처럼 취급되던 하갈이 이름으로 불리고 질문을 받는 순간을 생각하게 합니다." },
      { tag: "연결", text: "미술관은 이 그림의 주제를 창세기 16장, 술로 가는 길의 샘 곁에서 천사가 하갈을 만나 돌아가라고 말하는 장면으로 확인합니다." },
      { tag: "구별", text: "이 장면은 창세기 21장의 두 번째 광야 사건이 아닙니다. 여기의 하갈은 아직 이스마엘을 잉태한 상태이며, 학대를 피해 홀로 도망한 창세기 16장의 하갈입니다." }
    ],
    again: "다시 보세요. 누가 높고 누가 낮은지보다, 몸과 시선이 누구를 향해 움직이는지 살펴보세요."
  },

  listen: {
    work: "시빌라 D. 마틴 작사 · 찰스 H. 가브리엘 작곡 · 《His Eye Is on the Sparrow》",
    titleDe: "His Eye Is on the Sparrow",
    titleKo: "그 눈이 참새를 지키시네 — 태버내클 콰이어 실황",
    items: [
      { tag: "사실", text: "시빌라 D. 마틴과 찰스 H. 가브리엘이 1905년에 만든 가스펠 찬송입니다. 이 영상은 The Tabernacle Choir at Temple Square가 공식 제공한 실황입니다." },
      { tag: "관찰", text: "한 목소리로 시작한 선율에 성부가 차례로 포개지고, 조용한 고백이 큰 합창으로 넓어집니다. 서로 다른 목소리가 한 위로를 이루는 흐름을 들어 보세요." },
      { tag: "해석", text: "이 노래는 작은 생명도 하나님의 돌봄 밖에 있지 않다는 믿음을 노래합니다. 보이지 않는 사람처럼 밀려난 하갈을 하나님이 광야에서 발견하신 이야기와 대화합니다." },
      { tag: "구별", text: "이 찬송은 마태복음의 참새 말씀에서 영감을 받은 작품이지, 하갈의 이야기를 음악으로 옮긴 곡은 아닙니다. 창세기 본문과의 연결은 ‘하나님의 돌보시는 시선’이라는 주제의 울림입니다." }
    ],
    duration: "5분 31초",
    channel: "The Tabernacle Choir 공식 제공",
    playLabel: "광야의 노래 감상하기",
    embedTitle: "His Eye Is on the Sparrow — The Tabernacle Choir 실황",
    performance: "노래: The Tabernacle Choir at Temple Square · 합창단 공식 아티스트 채널 제공 실황 영상",
    videoId: "6ha9a9YF3UI",
    externalPlayUrl: "https://www.youtube.com/watch?v=6ha9a9YF3UI",
    links: [
      { label: "합창단 공식 실황 영상", url: "https://www.youtube.com/watch?v=6ha9a9YF3UI" }
    ],
    note: "버튼을 누르기 전에는 영상과 소리가 불러와지지 않습니다. 자동재생하지 않으며 음원 파일을 저장하지 않습니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)", range: "창세기 16:7–13",
      lines: [
        { v: 7, t: "여호와의 사자가 광야의 샘곁 곧 술 길 샘물 곁에서 그를 만나" },
        { v: 8, t: "가로되 사래의 여종 하갈아 네가 어디서 왔으며 어디로 가느냐 그가 가로되 나는 나의 여주인 사래를 피하여 도망하나이다" },
        { v: 9, t: "여호와의 사자가 그에게 이르되 네 여주인에게로 돌아가서 그 수하에 복종하라" },
        { v: 10, t: "여호와의 사자가 또 그에게 이르되 내가 네 자손으로 크게 번성하여 그 수가 많아 셀 수 없게 하리라" },
        { v: 11, t: "여호와의 사자가 또 그에게 이르되 네가 잉태하였은즉 아들을 낳으리니 그 이름을 이스마엘이라 하라 이는 여호와께서 네 고통을 들으셨음이니라" },
        { v: 12, t: "그가 사람 중에 들나귀 같이 되리니 그 손이 모든 사람을 치겠고 모든 사람의 손이 그를 칠찌며 그가 모든 형제의 동방에서 살리라 하니라" },
        { v: 13, t: "하갈이 자기에게 이르신 여호와의 이름을 감찰하시는 하나님이라 하였으니 이는 내가 어떻게 여기서 나를 감찰하시는 하나님을 뵈었는고 함이라" }
      ]
    },
    intro: "본문은 하갈이 왜 광야에 있는지를 숨기지 않습니다. 그는 사래의 학대를 피해 도망했습니다. 그곳에서 하나님은 이름 없이 지나칠 수 있었던 한 여인을 찾아 이름으로 부르시고, 그의 말과 고통을 들으십니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "16:7–8", items: [
        { tag: "본문", text: "여호와의 사자는 광야의 샘 곁에서 하갈을 ‘만나’고, ‘사래의 여종 하갈아’라고 부르며 어디서 와서 어디로 가는지 묻습니다." },
        { tag: "관찰", text: "하갈의 출신과 종의 신분은 지워지지 않지만, 그는 이름으로 불리고 자신의 처지를 말할 자리를 얻습니다. 대답에는 출발지는 있지만 목적지는 없습니다." }
      ]},
      { ref: "16:9–10", items: [
        { tag: "본문", text: "천사는 하갈에게 돌아가 그 수하에 복종하라고 말하고, 이어 셀 수 없이 많은 자손의 약속을 줍니다." },
        { tag: "긴장", text: "돌아가라는 명령은 학대의 현실 때문에 읽기 어려운 말씀입니다. 본문은 권력의 불균형을 해소됐다고 말하지 않으며, 이 구절을 오늘 학대받는 사람에게 위험한 자리로 돌아가라고 강요하는 근거로 사용할 수 없습니다." }
      ]},
      { ref: "16:11–12", items: [
        { tag: "본문", text: "아들의 이름 ‘이스마엘’에는 ‘하나님이 들으심’이라는 뜻이 담깁니다. 여호와께서 하갈의 고통을 들으셨기 때문입니다." },
        { tag: "해석", text: "약속은 아브람과 사래에게만 주어지지 않습니다. 하나님은 하갈의 몸과 미래에 관해 그에게 직접 말씀하시며, 이스마엘의 삶도 하나님의 시야 밖에 두지 않으십니다." }
      ]},
      { ref: "16:13", items: [
        { tag: "본문", text: "하갈은 자기에게 말씀하신 여호와를 ‘감찰하시는 하나님’이라 부릅니다. 보신다는 고백은 추상적 지식이 아니라 광야에서 자신을 만나신 사건에서 나옵니다." },
        { tag: "해석", text: "하나님의 보심은 멀리서 지켜보는 시선만이 아닙니다. 이름을 부르고, 질문하고, 고통을 들으며, 약속으로 응답하는 관계적 행동으로 드러납니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "창세기 16:1–6", tag: "배경", text: "사래는 애굽 사람 여종 하갈을 아브람에게 주고, 갈등 뒤 하갈을 학대합니다. 아브람도 책임을 사래에게 돌립니다. 광야의 만남은 이 권력과 폭력의 배경 뒤에 놓입니다." },
      { ref: "창세기 16:14–16", tag: "이어 읽기", text: "샘은 ‘나를 감찰하시는 생존자의 우물’이라는 이름을 얻고, 하갈은 아들을 낳습니다. 아브람은 그 이름을 이스마엘이라 합니다." },
      { ref: "창세기 21:8–21", tag: "구별", text: "뒤에 하갈과 이스마엘은 다시 광야로 내몰립니다. 두 번째 사건에서도 하나님은 아이의 소리를 들으시지만, 창세기 16장과 같은 장면으로 합치지 않습니다." },
      { ref: "출애굽기 3:7–9", tag: "연결", text: "하나님은 애굽에서 종살이하는 백성의 고통을 ‘보고’ 부르짖음을 ‘듣고’ 내려오십니다. 보심과 들으심은 억눌린 이의 고통을 향한 하나님의 행동으로 이어집니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "하갈의 현실: 하갈은 타인의 계획 속에서 몸과 삶이 결정된 애굽 사람 여종입니다. 그의 고통을 개인적 성장담이나 아름다운 광야 체험으로 낭만화하지 않습니다.",
        "어려운 명령: 9절의 ‘돌아가라’를 학대·폭력 피해자에게 적용해 위험한 관계로 복귀시키는 명령으로 사용하지 않습니다. 안전 확보와 전문적 도움을 구하는 일을 믿음 없음으로 판단하지 않습니다.",
        "본문이 남기는 긴장: 하나님이 하갈을 보시고 들으셨다는 약속은 분명하지만, 불평등한 집의 문제가 본문 안에서 곧바로 해결되지는 않습니다.",
        "예술과 음악의 자리: 볼의 그림은 본문 장면을 묘사하지만 세부는 화가의 해석입니다. 가스펠 찬송은 하갈 이야기를 직접 노래한 작품이 아니라 ‘돌보시는 시선’이라는 주제로 대화합니다."
      ]
    }
  },

  keep: {
    sentence: "하나님은 광야로 밀려난 이를 이름으로 부르시고, 그의 고통을 들으시며 보십니다.",
    question: "내 주변에서 쉽게 보이지 않게 되는 사람을 오늘 어떻게 기억하고 존중할 수 있을까요?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "하나님께서 보시고 들으시기를 바라는 이름과 상황을, 함부로 해결하려 하지 말고 한 문장으로 적어 보세요.",
    pdfCredit: "그림: 페르디난트 볼, 《술로 가는 길의 우물가에 있는 하갈과 천사》(암스테르담 국립미술관 RP-T-1930-27; Wikimedia Commons CC0 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 《His Eye Is on the Sparrow》, The Tabernacle Choir at Temple Square 공식 YouTube 허용 임베드(음원 파일 미수록)."
  }),

  sources: {
    title: "작품과 자료 출처", checkedOn: "2026-11-16",
    releaseStatus: "HOLD · Captain 개별 공개 승인 대기 · 외부 자료 권리 및 공식 임베드 검증 완료",
    groups: [
      { label: "미술작품", lines: [
          "페르디난트 볼, 《Hagar and the Angel at the Well on the Way to Shur》, 약 1640년, 종이에 펜과 갈색 잉크 및 갈색 담채, 18.2 × 23.3 cm. 암스테르담 국립미술관 RP-T-1930-27.",
          "미술관은 작품 주제를 창세기 16장의 술 길 샘 사건으로, 권리를 Public domain으로 명시합니다. 수록 이미지는 Rijksmuseum 원본을 바탕으로 Wikimedia Commons가 CC0로 공개한 파일입니다."
        ], links: [{ label: "암스테르담 국립미술관 작품·권리", url: "https://www.rijksmuseum.nl/en/collection/object/Hagar-and-the-Angel-at-the-Well-on-the-Way-to-Shur--bdcf6b54141cf558648a09f9d50a6358" }, { label: "Wikimedia Commons 이미지·CC0", url: "https://commons.wikimedia.org/wiki/File:Hagar_en_de_engel_bij_de_bron_op_weg_naar_Shur,_RP-T-1930-27.jpg" }, { label: "CC0 1.0", url: "https://creativecommons.org/publicdomain/zero/1.0/deed.ko" }] },
      { label: "음악", lines: [
          "시빌라 D. 마틴 작사, 찰스 H. 가브리엘 작곡, 《His Eye Is on the Sparrow》(1905). The Tabernacle Choir at Temple Square의 공식 실황을 감상합니다.",
          "현대 실연·녹음의 권리는 제공자에게 있습니다. 합창단 공식 아티스트 채널이 제공하고 YouTube가 임베드를 허용한 영상만 클릭 후 불러오며, 자동재생·복제·다운로드를 하지 않습니다."
        ], links: [{ label: "합창단 공식 실황 영상", url: "https://www.youtube.com/watch?v=6ha9a9YF3UI" }] },
      { label: "성경", lines: [
          "창세기 16:7–13, 개역한글판(1961). 대한성서공회 공식 온라인 성경과 전 구절을 대조했습니다.",
          "대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다."
        ], links: [{ label: "창세기 16장 · 개역한글", url: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=gen&cVersion=SAE%5E&chap=16&fontSize=0&fontString=10px&fontWeight=bold&sec=1&version=HAN" }, { label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "승인된 009 상세 편집 기획의 본문, 다섯 장면, 핵심 통찰과 신학 경계를 따라 새로 쓴 자체 원고입니다. 외부 해설 문장을 옮기지 않았습니다.",
          "핵심 경계: 하갈의 고통을 낭만화하거나 권력관계를 지우지 않으며, 9절을 오늘의 학대 피해자에게 위험한 복귀를 강요하는 근거로 사용하지 않습니다."
        ], links: [{ label: "007–050 상세 편집 기획 v0.2 · Captain 승인본", url: "https://app.notion.com/p/4193b0124c5281f8a179c508359d19ae" }] }
    ],
    records: {
      art: {
        id: "art-9", artist: "Ferdinand Bol", title: "Hagar and the Angel at the Well on the Way to Shur", year: "circa 1640", medium: "Pen and brown ink, with brown wash on paper",
        usedFiles: ["assets/hagar-480.jpg", "assets/hagar-1280.jpg"],
        derivedFrom: "Wikimedia Commons 1280px thumbnail of the Rijksmuseum CC0 image",
        sourceFile: { name: "1280px-Hagar_en_de_engel_bij_de_bron_op_weg_naar_Shur,_RP-T-1930-27.jpg", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Hagar_en_de_engel_bij_de_bron_op_weg_naar_Shur%2C_RP-T-1930-27.jpg/1280px-Hagar_en_de_engel_bij_de_bron_op_weg_naar_Shur%2C_RP-T-1930-27.jpg", pixels: "1280x988", bytes: 380734, sha256: "53D6453E50E28376316C958E9E381DF357DD501DB497ED932F93DEE789E34C99" },
        museum: { name: "Rijksmuseum, Amsterdam", objectNumber: "RP-T-1930-27", collectionUrl: "https://id.rijksmuseum.nl/200117905" },
        processing: "1280px Commons 공개본은 그대로 사용. 480px 파일은 같은 비율로 고품질 축소; 자르기·색 보정 없음.",
        url: "https://commons.wikimedia.org/wiki/File:Hagar_en_de_engel_bij_de_bron_op_weg_naar_Shur,_RP-T-1930-27.jpg",
        license: "CC0 1.0 Universal / Public domain", rightsHolder: "Rijksmuseum 원본; Commons가 CC0로 공개",
        rightsBasisUrl: "https://commons.wikimedia.org/wiki/File:Hagar_en_de_engel_bij_de_bron_op_weg_naar_Shur,_RP-T-1930-27.jpg", useForm: "image", pdfInclude: true, pdfReason: "Commons 파일 설명의 CC0 표시와 미술관의 Public domain 표시를 확인하고 출처와 함께 수록",
        status: "VERIFIED(작품 식별·본문 장면·소장처·미술관 Public domain·Commons CC0 확인)", open: [], checkedOn: "2026-11-16"
      },
      music: {
        id: "music-9", composer: "Charles H. Gabriel", work: "His Eye Is on the Sparrow", composerStatus: "원곡 저작권 상태와 별개로 가사·악보·음원을 복제하지 않음",
        performance: "The Tabernacle Choir at Temple Square; official live video",
        officialPage: "https://www.youtube.com/watch?v=6ha9a9YF3UI",
        embed: { provider: "YouTube", videoId: "6ha9a9YF3UI", channel: "The Tabernacle Choir at Temple Square", channelId: "UCiAkukrUIRCwaLaFx_MJq7Q", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 331, startSeconds: 0, autoplay: false, loadedOnlyAfterTap: true },
        audioFilesHosted: false, url: "https://www.youtube.com/watch?v=6ha9a9YF3UI",
        license: "저작권 있는 현대 실연·녹음; 권리자가 공식 제공한 YouTube 허용 임베드와 링크만", rightsHolder: "The Tabernacle Choir at Temple Square 및 해당 녹음 권리자",
        rightsBasisUrl: "https://www.youtube.com/watch?v=6ha9a9YF3UI", useForm: "embed, link, original commentary", pdfInclude: false, pdfReason: "PDF에 음원·영상·가사·악보를 복제하지 않음",
        connection: "간접 연결(하나님의 돌보시는 시선; 하갈 이야기를 직접 노래한 작품은 아님)", status: "VERIFIED(공식 제공·oEmbed·playableInEmbed=true·길이·채널 확인)", open: [], checkedOn: "2026-11-16"
      },
      bible: {
        id: "bible-9", translation: "개역한글판(1961)", range: "창세기 16:7–13",
        copyright: "대한성서공회 안내 표: 개역한글판 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bible/korbibReadpage.php?book=gen&cVersion=SAE%5E&chap=16&fontSize=0&fontString=10px&fontWeight=bold&sec=1&version=HAN", textSource: "대한성서공회 온라인 성경 개역한글판 본문과 7–13절 전 구절 대조",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1", license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회", rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1", useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 전 구절 대조·보호기간 소멸 확인)", open: [], checkedOn: "2026-11-16"
      },
      commentary: {
        id: "text-9", authorship: "프로젝트 자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null, useForm: "original commentary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "CANDIDATE_READY_FOR_CAPTAIN_REVIEW", open: ["Captain 개별 공개 승인"], checkedOn: "2026-11-16"
      }
    }
  }
});
