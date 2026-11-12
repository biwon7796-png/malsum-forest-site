/* ART-BIBLE-004 · 다시 품에 안기는 날 — 렘브란트(판화) · 바흐 BWV 199 · 누가복음 15:11–32
   한 작품 = 한 파일. 구조 설명은 storm-in-galilee.js 맨 위 주석 참고. */
ArtBook.register({
  id: "return-of-prodigal-son",

  meta: {
    status: "approved",
    summary: "멀리서 먼저 알아본 아버지와, 그 품에 얼굴을 묻는 아들. 집 안과 집 밖을 오가는 두 아들의 이야기를 렘브란트의 작은 판화와 바흐의 칸타타, 누가복음 15장으로 읽습니다.",
    themes: ["귀향", "용서", "은혜"],
    tags: ["탕자", "돌아온 탕자", "되찾은 아들", "아버지", "맏아들", "둘째 아들", "돼지", "잃은 것", "잔치", "판화", "에칭", "비유"],
    bible: {
      books: ["누가복음"], bookAliases: ["누가", "눅"],
      ranges: ["누가복음 15:11–32"],
      related: ["누가복음 15:1–10", "누가복음 10:33", "시편 103:13", "호세아 11:8", "예레미야 31:20", "레위기 11:7"]
    },
    art: { artist: "렘브란트 판 레인", artistAliases: ["렘브란트", "Rembrandt", "Rembrandt van Rijn"], title: "돌아온 탕자", titleAliases: ["탕자의 귀향", "탕자의 귀환", "Return of the Prodigal Son"], year: 1636 },
    music: { composer: "요한 제바스티안 바흐", composerAliases: ["바흐", "Bach", "J.S. Bach"], work: "칸타타 BWV 199", workAliases: ["BWV 199", "Mein Herze schwimmt im Blut"] },
    cover: { src: "assets/prodigal_480.jpg", alt: "계단 위에 무릎 꿇은 아들이 서 있는 늙은 아버지의 품에 얼굴을 묻는 판화" }
  },
  series: "내 손안의 예술성경",
  seriesSub: "그림 한 점, 음악 한 곡, 말씀 한 자락",
  status: "첫 공개판 · Captain 신학·내용 검토 승인",
  title: "다시 품에 안기는 날",
  passage: "누가복음 15:11–32",
  themes: "귀향 · 용서 · 은혜",

  scenes: [
    { id: "s1", name: "바라보다" },
    { id: "s2", name: "발견하다" },
    { id: "s3", name: "귀 기울이다" },
    { id: "s4", name: "말씀에 머물다" },
    { id: "s5", name: "간직하다" }
  ],

  look: {
    image: {
      src: "assets/prodigal_1200.jpg",
      srcset: "assets/prodigal_1200.jpg 1200w, assets/prodigal_2400.jpg 2400w",
      zoom: "assets/prodigal_2400.jpg",
      width: 1200, height: 1355,
      alt: "돌계단 위에서 해진 옷의 젊은 사람이 무릎을 꿇고 얼굴을 늙은 남자의 가슴에 묻고 있다. 모자를 쓰고 넉넉한 망토를 두른 노인은 허리를 굽혀 두 손으로 그의 등을 감싼다. 오른쪽 문간에는 옷가지를 팔에 건 사람과 높은 모자를 쓴 사람이 서 있고, 위쪽 문틈으로 한 사람이 내다본다. 화면 왼쪽은 거의 비어 있고 아주 멀리 작은 인물이 보인다."
    },
    caption: {
      artist: "렘브란트 판 레인 (Rembrandt van Rijn, 1606–1669)",
      work: "《돌아온 탕자》",
      meta: "에칭(동판화) · 판 15.6 × 13.8 cm · 화면 속 서명에서 읽히는 연도 1636",
      owner: "메트로폴리탄 미술관(미국 뉴욕) 소장 · 소장번호 33.79.12",
      notes: ["이 그림은 유화가 아니라 동판에 새겨 찍은 판화입니다. 렘브란트가 말년에 그린 큰 유화(에르미타주 미술관 소장)와는 다른 작품입니다. 미술관 기록의 연도는 ‘1620–69’로 폭넓게 적혀 있고, 1636은 판화 속 서명에서 읽은 연도입니다."]
    },
    prompt: "누가 누구를 안고 있는지, 그리고 두 사람의 얼굴이 어디를 향하는지 보세요.",
    zoomHint: "그림을 누르면 크게 볼 수 있습니다"
  },

  discover: {
    lead: "아들은 말보다 먼저 아버지의 품에 닿았습니다.",
    items: [
      { tag: "사실", text: "이 판화는 손바닥보다 조금 큰 동판에서 찍었습니다. 에칭은 동판 위에 바늘로 그린 선을 산으로 부식시켜 새기고 잉크를 묻혀 찍어 내는 기법입니다. 계단 가운데 아래쪽에 ‘Rembrandt f.’와 함께 1636으로 읽히는 연도가 보입니다." },
      { tag: "관찰", text: "아들은 계단 위에 무릎을 꿇고 아버지의 가슴에 얼굴을 묻었습니다. 옷은 해지고 짧습니다. 늙은 아버지는 허리를 굽혀 넉넉한 망토로 아들을 덮듯 두 손으로 등을 안고 있습니다. 오른쪽 문간에는 옷가지를 팔에 건 사람과 그를 내려다보는 사람이 서 있고, 위쪽 문틈으로 또 한 사람이 내다봅니다." },
      { tag: "해석", text: "선이 빽빽하게 모인 곳은 두 사람이 있는 자리입니다. 그림의 왼쪽 절반은 거의 비어 있습니다. 아들이 걸어온 길이 있을 자리입니다. 렘브란트는 그 길을 그리는 대신 비워 두고, 도착한 순간에만 선을 모았습니다." },
      { tag: "추정", text: "옷가지를 든 사람은 누가복음 15:22에서 아버지가 ‘제일 좋은 옷’을 내어오라고 한 종들 가운데 한 사람으로 읽을 수 있습니다. 그러나 그림만으로 정해지지는 않으며, 문간의 다른 사람들이 누구인지도 정해져 있지 않습니다." }
    ],
    again: "다시 보세요. 이번에는 아버지의 손이 닿은 자리를."
  },

  listen: {
    work: "요한 제바스티안 바흐 · 칸타타 BWV 199",
    titleDe: "Mein Herze schwimmt im Blut",
    titleKo: "내 마음이 피 속에서 헤엄치네 (제목 번역)",
    items: [
      { tag: "사실", text: "먼저 알려 드릴 것이 있습니다. 이 곡은 누가복음 15장을 노래한 작품이 아닙니다. 삼위일체 후 열한 번째 주일을 위한 소프라노 독창 칸타타이고(1714년 바이마르 초연), 제가 확인한 협회 해설에는 탕자 이야기가 나오지 않습니다. 본문과 곧바로 이어지는 음악이 아니라, 주제와 분위기로 고른 음악입니다." },
      { tag: "사실", text: "협회 설명에 따르면 이 곡은 죄책과 비탄에서 시작해 참회를 지나 하나님의 용서와 기쁨에 이릅니다. 연주 시간 약 24분 사이에 분위기가 가장 깊은 비참에서 가장 큰 기쁨으로 바뀝니다. 마지막 아리아는 하나님이 죄인과 화해하셨다는 기쁨을 노래하며, 들뜬 오보에가 함께합니다." },
      { tag: "감상", text: "아들의 귀향과 겹치는 것은 이 흐름, 곧 밑바닥에서 시작해 용서받은 기쁨에 이르는 길입니다. 이야기의 장면이 겹치는 것은 아닙니다. 이 연결은 느슨합니다. 탕자 이야기를 직접 다룬 음악(브리튼의 교회 오페라 〈탕자〉, 프로코피예프의 발레, 드뷔시의 칸타타 등)도 있지만 여기서는 싣지 않았습니다. 시간이 없다면 처음 몇 분과 마지막 아리아만 들어도 좋습니다." }
    ],
    duration: "23분 54초",
    channel: "네덜란드 바흐 협회",
    playLabel: "BWV 199 감상하기",
    embedTitle: "바흐 칸타타 BWV 199 — 네덜란드 바흐 협회",
    performance: "연주: 네덜란드 바흐 협회(Netherlands Bach Society) · Alfredo Bernardini 지휘 · 소프라노 Julia Doyle · 2014년 6월 8일 암스테르담 왈롱 교회 녹화",
    videoId: "v9ow2SGHI94",
    links: [
      { label: "네덜란드 바흐 협회 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-199" },
      { label: "YouTube에서 열기", url: "https://www.youtube.com/watch?v=v9ow2SGHI94" }
    ],
    note: "소리는 자동으로 재생되지 않습니다. 재생이 어려운 곳이라면 다음 장면으로 그냥 넘어가셔도 됩니다."
  },

  word: {
    scripture: {
      version: "개역한글판(1961)",
      range: "누가복음 15:11–32",
      lines: [
        { v: 11, t: "또 가라사대 어떤 사람이 두 아들이 있는데" },
        { v: 12, t: "그 둘째가 아비에게 말하되 아버지여 재산 중에서 내게 돌아올 분깃을 내게 주소서 하는지라 아비가 그 살림을 각각 나눠 주었더니" },
        { v: 13, t: "그 후 며칠이 못되어 둘째 아들이 재물을 다 모아가지고 먼 나라에 가 거기서 허랑방탕하여 그 재산을 허비하더니" },
        { v: 14, t: "다 없이한 후 그 나라에 크게 흉년이 들어 저가 비로소 궁핍한지라" },
        { v: 15, t: "가서 그 나라 백성 중 하나에게 붙여 사니 그가 저를 들로 보내어 돼지를 치게 하였는데" },
        { v: 16, t: "저가 돼지 먹는 쥐엄 열매로 배를 채우고자 하되 주는 자가 없는지라" },
        { v: 17, t: "이에 스스로 돌이켜 가로되 내 아버지에게는 양식이 풍족한 품군이 얼마나 많은고 나는 여기서 주려 죽는구나" },
        { v: 18, t: "내가 일어나 아버지께 가서 이르기를 아버지여 내가 하늘과 아버지께 죄를 얻었사오니" },
        { v: 19, t: "지금부터는 아버지의 아들이라 일컬음을 감당치 못하겠나이다 나를 품군의 하나로 보소서 하리라 하고" },
        { v: 20, t: "이에 일어나서 아버지께로 돌아가니라 아직도 상거가 먼데 아버지가 저를 보고 측은히 여겨 달려가 목을 안고 입을 맞추니" },
        { v: 21, t: "아들이 가로되 아버지여 내가 하늘과 아버지께 죄를 얻었사오니 지금부터는 아버지의 아들이라 일컬음을 감당치 못하겠나이다 하나" },
        { v: 22, t: "아버지는 종들에게 이르되 제일 좋은 옷을 내어다가 입히고 손에 가락지를 끼우고 발에 신을 신기라" },
        { v: 23, t: "그리고 살진 송아지를 끌어다가 잡으라 우리가 먹고 즐기자" },
        { v: 24, t: "이 내 아들은 죽었다가 다시 살아났으며 내가 잃었다가 다시 얻었노라 하니 저희가 즐거워하더라" },
        { v: 25, t: "맏아들은 밭에 있다가 돌아와 집에 가까왔을 때에 풍류와 춤추는 소리를 듣고" },
        { v: 26, t: "한 종을 불러 이 무슨 일인가 물은대" },
        { v: 27, t: "대답하되 당신의 동생이 돌아왔으매 당신의 아버지가 그의 건강한 몸을 다시 맞아 들이게 됨을 인하여 살진 송아지를 잡았나이다 하니" },
        { v: 28, t: "저가 노하여 들어가기를 즐겨 아니하거늘 아버지가 나와서 권한대" },
        { v: 29, t: "아버지께 대답하여 가로되 내가 여러 해 아버지를 섬겨 명을 어김이 없거늘 내게는 염소 새끼라도 주어 나와 내 벗으로 즐기게 하신 일이 없더니" },
        { v: 30, t: "아버지의 살림을 창기와 함께 먹어버린 이 아들이 돌아오매 이를 위하여 살진 송아지를 잡으셨나이다" },
        { v: 31, t: "아버지가 이르되 얘 너는 항상 나와 함께 있으니 내 것이 다 네 것이로되" },
        { v: 32, t: "이 네 동생은 죽었다가 살았으며 내가 잃었다가 얻었기로 우리가 즐거워하고 기뻐하는 것이 마땅하다 하니라" }
      ]
    },
    intro: "이 이야기는 두 아들의 이야기입니다. 그림은 첫째 장면만 보여 주지만, 비유는 그 뒤에 한 장면이 더 있습니다.",
    flowTitle: "본문의 흐름",
    beats: [
      { ref: "15:1–3", items: [
        { tag: "연결", text: "읽기 시작하는 11절 앞에는 자리가 있습니다. 세리와 죄인들이 말씀을 들으려고 가까이 오고, 바리새인과 서기관들은 “이 사람이 죄인을 영접하고 음식을 같이 먹는다”며 수군거립니다. 이 비유는 거기서 하신 세 비유(잃은 양, 잃은 은전, 두 아들)의 마지막입니다." }
      ]},
      { ref: "15:11–16", items: [
        { tag: "본문", text: "둘째 아들이 아버지에게 자기 몫의 재산을 달라고 합니다. 아버지는 살림을 나누어 줍니다. 아들은 며칠 뒤 모두 모아 먼 나라로 가서 허랑방탕하게 허비합니다. 흉년이 들자 돼지를 치게 되고, 돼지가 먹는 열매로라도 배를 채우려 하지만 주는 사람이 없습니다." },
        { tag: "관찰", text: "12절은 아버지가 “그 살림을 각각 나눠 주었다”고 적습니다. 둘째에게만이 아니라 두 아들 모두에게 몫이 갔다는 말로 읽을 수 있습니다. 뒤에 나오는 맏아들의 모습을 이해하는 실마리가 됩니다." },
        { tag: "연결", text: "돼지는 유대 율법에서 부정한 짐승입니다(레위기 11:7). 이 아들이 이를 만큼 내려갔다는 것을 듣는 사람들은 바로 알아들었을 것입니다." }
      ]},
      { ref: "15:17–19", items: [
        { tag: "본문", text: "“스스로 돌이켜” 그는 아버지 집의 품꾼들도 양식이 넉넉한데 자기는 굶어 죽게 되었다고 생각합니다. 일어나 아버지께 가서 ‘하늘과 아버지께 죄를 얻었으니 나를 품꾼의 하나로 보소서’ 하겠다고 말을 준비합니다." },
        { tag: "관찰", text: "그의 결심은 아버지의 사랑에 대한 확신에서 나오지 않고 배고픔에서 나옵니다. 본문은 그의 마음을 더 고상하게 꾸미지 않습니다." },
        { tag: "해석", text: "그렇다면 이 이야기에서 놀라운 것은 아들의 회개의 순도가 아니라, 그 서툰 결심을 맞이하는 아버지의 모습이라고 읽을 수 있습니다." }
      ]},
      { ref: "15:20–24", items: [
        { tag: "본문", text: "아들이 일어나 아버지께 돌아갑니다. 아직 멀리 있는데 아버지가 보고 측은히 여겨 달려가 목을 안고 입을 맞춥니다. 아들이 말을 시작하자 아버지는 종들에게 제일 좋은 옷을 입히고 손에 가락지를, 발에 신을 신기라고 하고, 살진 송아지를 잡아 함께 즐기자고 합니다. 이 아들은 죽었다가 살아났고 잃었다가 얻었다고 말합니다." },
        { tag: "관찰", text: "순서를 보세요. 보고, 측은히 여기고, 달려가고, 안고, 입 맞춘 다음에야 아들의 말이 나옵니다. 아들이 준비한 말은 그 뒤에 나오고, 이 번역본의 21절은 그중 ‘품꾼으로 보소서’를 싣지 않습니다. 난외 주는 어떤 사본에는 그 말이 있다고 밝힙니다." },
        { tag: "연결", text: "‘측은히 여기다’는 누가복음 10:33에서 사마리아 사람이 쓰러진 사람을 보고 ‘불쌍히 여긴’ 것과 같은 계열의 동사입니다. 앞 작품과 이어서 읽어 볼 만한 자리입니다." }
      ]},
      { ref: "15:25–32", items: [
        { tag: "본문", text: "밭에서 돌아오던 맏아들이 풍류와 춤 소리를 듣고 종에게 까닭을 묻습니다. 동생이 돌아와 송아지를 잡았다는 말에 그는 화가 나 들어가려 하지 않습니다. 아버지가 나와 권하자 맏아들은 여러 해 섬겼어도 염소 새끼 한 마리 받지 못했는데 창기와 재산을 먹어 버린 “이 아들”에게는 송아지를 잡았다고 항변합니다. 아버지는 “너는 항상 나와 함께 있으니 내 것이 다 네 것이다. 그러나 이 네 동생은 죽었다가 살았으니 즐거워함이 마땅하다”고 답합니다." },
        { tag: "관찰", text: "아버지는 두 번 집 밖으로 나옵니다. 한 번은 멀리서 오는 둘째에게 달려갈 때(20절), 또 한 번은 문 앞에 서 있는 맏아들에게 나올 때(28절)입니다." },
        { tag: "관찰", text: "맏아들은 동생을 ‘동생’이라 부르지 않고 “이 아들”이라 부릅니다(30절). 아버지는 같은 사람을 “이 네 동생”이라 바로잡습니다(32절)." },
        { tag: "해석", text: "비유는 맏아들이 안으로 들어갔는지 알려 주지 않고 끝납니다. 15:1–2의 수군거림을 떠올리면, 그 열린 끝은 비유를 듣고 있던 사람들에게 건네는 물음이라고 읽을 수 있습니다." }
      ]}
    ],
    echoesTitle: "함께 읽으면 좋은 본문",
    echoes: [
      { ref: "누가복음 15:3–10", tag: "연결", text: "같은 장의 잃은 양과 잃은 은전 비유입니다. 잃은 것을 찾고 함께 기뻐하자고 이웃을 부르는 구조가 두 아들의 이야기의 잔치와 이어집니다." },
      { ref: "누가복음 10:33", tag: "연결", text: "같은 계열의 ‘불쌍히 여기다’ 동사를 쓰는 선한 사마리아인 이야기입니다. ‘길에서 멈춘 사람’이 다루는 본문입니다." },
      { ref: "시편 103:13", tag: "연결", text: "아비가 자식을 불쌍히 여김같이 여호와께서 자기를 경외하는 자를 불쌍히 여기신다고 노래합니다." },
      { ref: "호세아 11:8", tag: "연결", text: "돌아서려는 에브라임을 어찌 놓겠느냐는, 하나님의 마음이 끓어오르는 말씀입니다." },
      { ref: "예레미야 31:20", tag: "연결", text: "에브라임을 사랑하는 아들로 부르며, 그를 말할 때마다 더욱 생각하고 긍휼히 여기겠다고 하십니다." }
    ],
    care: {
      title: "여기서 구별해 두면 좋은 것",
      lines: [
        "비유의 이름: 흔히 ‘탕자의 비유’라고 부르지만 본문에는 아들이 둘입니다. 대한성서공회 개역한글판 온라인 본문은 이 단락의 소제목을 ‘되찾은 아들의 비유’라고 붙였습니다.",
        "본문이 말하는 것: 아버지의 행동이 아들의 말보다 앞섭니다. 그리고 ‘집 밖’에 서 있는 사람은 둘입니다. 먼 나라의 둘째 아들, 그리고 잔치가 열린 집 문 앞에서 들어가기를 즐겨 하지 않는 맏아들(28절)입니다.",
        "묵상적 적용: 아래의 질문, ‘나는 돌아가고 있는가, 아직 집 밖에 있는가’는 본문의 해설이 아니라 독자에게 건네는 물음입니다. 본문에 비추면 이 물음은 둘째와 맏이 모두에게 해당합니다."
      ]
    }
  },

  keep: {
    sentence: "그림에서 아들을 감싸는 것은 아버지의 굽은 등과 넓은 망토입니다. 아들이 하려던 말은 그림에 보이지 않습니다.",
    question: "나는 아버지의 품으로 돌아가고 있습니까, 아니면 아직도 집 밖에 머물러 있습니까?",
    save: "이 자리를 책갈피로 간직하기",
    saved: "간직했습니다. 이 기기의 이 브라우저에서 다시 열면 이 자리에서 이어 읽을 수 있습니다.",
    unavailable: "이 브라우저에서는 책갈피를 저장할 수 없습니다(사생활 보호 모드일 수 있습니다)."
  },

  note: ArtBook.makeNote({
    reflectionHint: "누가복음 15:11–32를 읽으며 떠오른 장면이나 생각, 기도를 적어 보세요.",
    pdfCredit: "그림: 렘브란트, 《돌아온 탕자》 에칭(메트로폴리탄 미술관 소장, 공개 도메인 표시 이미지). 성경: 개역한글판(1961), 대한성서공회 안내에 따라 저작재산권 보호기간 소멸. 음악: 바흐 BWV 199(링크로만 연결)."
  }),

  sources: {
    title: "작품과 자료 출처",
    checkedOn: "2026-11-12",
    releaseStatus: "READY · Captain 신학·내용 검토 승인(2026-11-12) · 첫 공개판 수록 승인",
    groups: [
      { label: "미술작품", lines: [
          "렘브란트 판 레인, 《돌아온 탕자》, 에칭(미술관 기록: Etching, pen and ink), 판 15.6 × 13.8 cm. 메트로폴리탄 미술관 소장번호 33.79.12, Bequest of Ida Kammerer, in memory of her husband, Frederic Kammerer, M.D., 1933. 이 책의 그림은 에르미타주의 유화가 아니라 이 판화입니다.",
          "연도: 미술관 기록은 ‘1620–69’로 폭넓게 적고 있습니다. 1636은 판화 속 서명 옆에서 필자가 읽은 연도이며 별도 문헌으로 확인하지는 않았습니다.",
          "이미지: 메트로폴리탄 미술관 작품 페이지가 Public Domain으로 표시하고, 오픈 액세스 정책은 해당 이미지를 CC0로 자유 이용할 수 있다고 안내합니다(2026-11-12 확인). 색과 비율은 바꾸지 않고 크기만 줄였습니다."
        ], links: [{ label: "메트로폴리탄 작품 페이지", url: "https://www.metmuseum.org/art/collection/search/395882" }, { label: "컬렉션 API 기록", url: "https://collectionapi.metmuseum.org/public/collection/v1/objects/395882" }, { label: "오픈 액세스 안내", url: "https://www.metmuseum.org/policies/open-access" }] },
      { label: "음악", lines: [
          "요한 제바스티안 바흐, 칸타타 BWV 199 〈Mein Herze schwimmt im Blut〉(바이마르 시기, 저작권 소멸). 누가복음 15장을 직접 다루는 곡은 아니며 주제·분위기로 고른 음악입니다.",
          "연주·녹화: 네덜란드 바흐 협회, Alfredo Bernardini, Julia Doyle, 2014. 이 녹음의 권리는 협회에 있으며 음원을 복제하지 않고 협회의 감상 페이지와 공식 YouTube 영상으로만 연결합니다."
        ], links: [{ label: "협회 감상 페이지", url: "https://www.bachvereniging.nl/en/bwv/bwv-199" }, { label: "공식 YouTube 영상", url: "https://www.youtube.com/watch?v=v9ow2SGHI94" }] },
      { label: "성경", lines: [
          "누가복음 15:11–32, 개역한글판(1961). 대한성서공회의 안내에 따르면 개역한글판의 저작재산권 보호기간은 2011년 12월 31일에 소멸했습니다.",
          "본문은 대한성서공회 온라인 성경(개역한글판)과 전 구절 대조해 확인했습니다. 난외 주와 각주 표시는 뺐습니다(21절의 사본 주는 해설에서 언급)."
        ], links: [{ label: "대한성서공회 저작권 안내", url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1" }] },
      { label: "해설", lines: [
          "이 책의 해설과 묵상글은 필자가 새로 쓴 원고이며 기존 출판물의 문장을 옮기지 않았습니다. Captain이 신학·내용 검토와 첫 공개판 수록을 승인했습니다.",
          "참고한 성경 자료: 누가복음 15:1–32, 누가복음 10:33, 레위기 11:7, 시편 103:13, 호세아 11:8, 예레미야 31:20. 곡 설명은 네덜란드 바흐 협회 페이지를 바탕으로 했습니다."
        ], links: [] }
    ],
    records: {
      art: {
        id: "art-4", artist: "Rembrandt van Rijn", title: "Return of the Prodigal Son", year: "(Met record: 1620–69; signed date read as 1636 by editor)", medium: "Etching, pen and ink",
        usedFiles: ["assets/prodigal_480.jpg", "assets/prodigal_1200.jpg", "assets/prodigal_2400.jpg"],
        derivedFrom: "Met Open Access 공개 원본(배포본에는 리사이즈 이미지와 출처 링크만 포함)",
        sourceFile: { name: "DP814535.jpg", url: "https://images.metmuseum.org/CRDImages/dp/original/DP814535.jpg", pixels: "2932x3310", bytes: 2786631, sha1: "5ae8daa2318b087b5e0f4683aca09699a9834253" },
        museum: { name: "The Metropolitan Museum of Art", objectId: 395882, accession: "33.79.12", creditLine: "Bequest of Ida Kammerer, in memory of her husband, Frederic Kammerer, M.D., 1933", apiIsPublicDomain: true, rightsAndReproduction: "(빈 값)", url: "https://www.metmuseum.org/art/collection/search/395882" },
        processing: "리사이즈(LANCZOS)만 적용, 색 보정·자르기 없음.",
        url: "https://www.metmuseum.org/art/collection/search/395882",
        license: "CC0 / Public Domain (Met Open Access)", rightsHolder: "원작 저작권 소멸; 소장처 The Metropolitan Museum of Art",
        rightsBasisUrl: "https://www.metmuseum.org/hubs/open-access",
        useForm: "image", pdfInclude: true, pdfReason: "Met Collection API의 공개 도메인 표시 이미지; 출처와 함께 수록",
        status: "VERIFIED(권리) · PARTIAL(서지 세부)",
        open: ["1636 연도는 화면 속 서명을 육안으로 읽은 것 — 별도 문헌 대조 안 함", "미술관 기록 'pen and ink'의 의미(판화 위 손질 여부)와 인쇄 상태 미확인"],
        checkedOn: "2026-11-12"
      },
      music: {
        id: "music-4", composer: "J. S. Bach", work: "BWV 199", composerStatus: "저작권 소멸(1750 사망)",
        performance: "Netherlands Bach Society, Alfredo Bernardini, Julia Doyle, recorded 2014-06-08, Walloon Church Amsterdam (협회 페이지 기재)",
        officialPage: "https://www.bachvereniging.nl/en/bwv/bwv-199", officialPageChecked: "열람 확인(2026-11-12)",
        embed: { provider: "YouTube", videoId: "v9ow2SGHI94", channel: "Netherlands Bach Society", oembed: "200 OK", playableInEmbed: true, lengthSeconds: 1434, autoplay: false, loadedOnlyAfterTap: true, idSource: "협회 페이지 HTML의 data-youtube-id" },
        audioFilesHosted: false,
        url: "https://www.bachvereniging.nl/en/bwv/bwv-199",
        license: "저작권 있는 현대 연주·녹화; 공식 링크/허용 임베드만", rightsHolder: "Netherlands Bach Society",
        rightsBasisUrl: "https://www.youtube.com/watch?v=v9ow2SGHI94",
        useForm: "embed, link, summary", pdfInclude: false, pdfReason: "PDF에 음원·영상·가사·포스터를 복제하지 않음",
        connection: "주제·분위기 연결(약함): 참회→용서의 기쁨. 가사에 탕자 이야기 없음(협회 해설 기준)",
        directAlternativesNotUsed: ["Britten, The Prodigal Son (1968)", "Prokofiev, The Prodigal Son (ballet)", "Debussy, L'enfant prodigue — 공식·적법 감상 경로 미확인으로 제외"],
        status: "VERIFIED(페이지·영상 ID·임베드 가능 확인) · 본문 직접 연결 아님",
        open: ["곡 가사 전문과 누가복음 15장의 관계는 직접 대조하지 않음 — 협회 해설 요약에 의존", "더 직접적인 곡이 필요하면 Captain 선택 필요"],
        checkedOn: "2026-11-12"
      },
      bible: {
        id: "bible-4", translation: "개역한글판(1961)", range: "누가복음 15:11–32",
        copyright: "대한성서공회 안내 표: 성경전서 개역한글판 최초 발행 1961-07-10, 저작재산권 보호기간 2011-12-31 소멸",
        officialUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        textSource: "대한성서공회 온라인 성경 개역한글판(version=HAN) 본문과 전 구절 대조 후 표기(난외 주 제외)",
        crossCheck: "한글 위키문헌 전사와 대조해 오기(‘훙년’→흉년, ‘배을’→배를) 등을 바로잡음",
        url: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        license: "저작재산권 보호기간 소멸(2011-12-31)", rightsHolder: "개역한글판 발행: 대한성서공회",
        rightsBasisUrl: "https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1",
        useForm: "text", pdfInclude: true, pdfReason: "보호기간이 소멸한 개역한글판 본문; 출처·번역본 표시와 함께 수록",
        status: "VERIFIED(본문 대조·개역한글판 보호기간 소멸 확인)",
        open: ["15:1–3 요약은 본문 대조 범위 밖(해설)"],
        notUsed: ["개역개정판", "새번역", "표준새번역", "공동번역"],
        checkedOn: "2026-11-12"
      },
      commentary: { id: "text-4", authorship: "자체 집필", externalTextCopied: false, url: null,
        license: "프로젝트 자체 원고; 외부 이용 허락 없음", rightsHolder: "필자(프로젝트 내부 원고)", rightsBasisUrl: null,
        useForm: "summary", pdfInclude: false, pdfReason: "현재 PDF는 작품 해설을 복제하지 않음",
        status: "APPROVED", open: [], checkedOn: "2026-11-12", approvedBy: "Captain", approvedOn: "2026-11-12" }
    }
  }
});
