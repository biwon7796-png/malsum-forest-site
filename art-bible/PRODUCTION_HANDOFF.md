# 예술성경 제작·배포 인수인계 (운영 참고 문서)
작성·검증 기준일: 2026-11-24 (KST)
상태: 운영 참고 / HANDOFF GUIDE ONLY. **전문 Registry·ACTIVE 승격·공통 정책을 대체하지 않음.**
소유권: 시각물/예술의 전문 내용·신학 검수는 rightful specialist project, 웹사이트 구현·배포는 GitHub 운영, 관제/라우팅은 00 CONTROL_TOWER. Captain의 승인 경계 유지.

## 목적
다른 ChatGPT 채팅/프로젝트에서 “예술성경 다음 페이지 제작·깃허브 배포”라고 요청하면, 이 문서와 현행 GitHub 소스·Notion 검증 DB를 열어 기존 성공 패턴을 재사용하고 **작품 한 편을 완성→검증→사이트 반영**할 수 있게 한다. 이 문서는 지침을 새로 승인하거나 전문 권위를 생성하지 않는다.

## 운영 실체 및 현재 배포 상태
- 운영 URL: https://www.malsumforest.com/art-bible/
- 웹북 진입 패턴: `https://www.malsumforest.com/art-bible/#/w/<id>`
- GitHub repo: https://github.com/biwon7796-png/malsum-forest-site (main)
- 작품 인덱스: `art-bible/content/library.js` 의 `window.ArtBookManifest.works` 배열. 순서대로 서재 노출.
- 작품 원고: `art-bible/content/works/<id>.js` (한 작품 한 파일, `ArtBook.register({...})`).
- 기존 표준 모델: `art-bible/content/works/the-sower.js`, `storm-in-galilee.js`; 보다 짧은 현행 사례 `giotto-kiss-of-judas.js`.
- 표시 코드: `art-bible/index.html`, `art-bible/js/main.js`, `art-bible/js/library.js` 등.
- 기존 작품 ID는 브라우저 메모/사진/책갈피와 연결됨. **기존 ID 삭제·교체·재사용 금지**.
- 2026-11-23 커밋 `d64b42abdad47419a9bcb99e6b73c62cd2a72dde` 작품 011 조토 원고, `697b97357576e0ba83ac3a60c9c50aa111067ce8` 11편 인덱스 등록.
- 2026-11-23 GitHub Pages `pages build and deployment` workflow run #154 성공(head_sha 697b973...).
- 2026-11-23 운영 브라우저(Chrome Puppeteer) 점검: 11편 표시, `#/w/giotto-kiss-of-judas` 상세 열림, 이미지 naturalWidth 980, pageerror 0. 단, **전 장면·모바일·영상·백업 전수 QA는 미실시**.

## 데이터/기존 소스 (반드시 원본 재열람)
- Notion 시범 후보 인덱스: https://app.notion.com/p/4073b0124c52812e95accc2e701d86be
- Notion 작품별 레퍼런스 DB: https://app.notion.com/p/2b40b5c0eb5545c88daaf88225babfa7
- Notion data source: `collection://15139e39-49e0-4e18-bd0c-033ef930f72f`.
- DB는 원래 **100선 후보 색인**이며 상태가 작품마다 다름. '이미지확인'과 'VERIFIED'는 **신학 원고/배포 승인 아님**. 2026-11-23 조사 때 101행(정리 대상 불일치 1) 기록되었으며, 단일 VERIFIED #010 조토 입맞춤이 11번째 웹북으로 재사용됨.
- 각 작품의 미술품 저자·정확한 판본·연대·소장처·Commons 이미지 파일과 라이선스를 **해당 File 페이지**에서 검증. 외부 음원·영상은 공식 링크/임베드만. 저작권이 불분명한 파일은 배포에 싣지 않음.

## 한 편을 제작하는 최소 실행 순서
1. `library.js` 및 해당 작품 JS를 GitHub에서 **현재 HEAD 기준으로 읽고**, 기존 작품 중복(미술품/성경 본문/제목) 여부 확인. 다음 번호·영구 id 결정.
2. Notion 후보 DB에서 원본 카드를 읽고 정확한 화가·작품·본문을 확인. 본문 연결은 직접 서술/평행 본문/묵상적 연결로 구분.
3. 원본 미술 이미지 **정확한 파일 URL**, 공개 도메인/라이선스 및 복제 가능 범위 확인. Commons 페이지와 실제 이미지 HTTP/브라우저 로드. 사진 자체의 권리가 남는 경우 별도 확인. 영상은 공식 채널 URL, 정확한 `videoId`, 적법한 임베드 가능 여부 확인.
4. 기존 작품 JS 구조 재사용: `meta`, `series`, `seriesSub`, `status`, `title`, `passage`, `themes`, `scenes` (s1~s5), `look` (image/caption), `discover` (tagged items), `listen`, `word` (scripture/beats/echoes/care), `keep`, `note` (`ArtBook.makeNote()`), `sources` (rights, dates, records).
5. **성경 본문에는 개역한글판(1961) 해당 범위를 절별로 빠짐없이 그대로 수록합니다.** 기존 예술성경의 기본 기준이며 절별 요약문으로 대체하지 않습니다. 반드시 대한성서공회 개역한글판 온라인 본문과 대조합니다. 해설/관찰/적용은 본문과 별도 영역으로 분리합니다. 개역한글판 저작재산권 보호기간은 2011-12-31 소멸(대한성서공회)입니다. 불명확한 절은 임의로 재작성하지 않고 HOLD/VERIFY. 미술사 사실·눈으로 확인한 관찰·신학 해석·추정을 분리. 캡틴 승인 기록을 **실제 있었던 것 이상으로 확대하거나 전문 Registry 상태로 오인하지 않음**.
6. 권위/권리/실제 배포 허가 범위를 확인. 권위 불명확하면 전문 대표본을 승격하지 않고 HOLD/VERIFY. 외부 공개는 Captain Gate(명시적 일회 또는 위임) 준수.
7. 새 `content/works/<id>.js` 파일을 GitHub에 생성한 뒤 **Node 문법 검사**. `library.js` 기존 전체 ID 배열 유지하면서 마지막에 새 id 추가(기존 마지막 요소 뒤 쉼표 주의). 동일 경로 동시쓰기 금지.
8. GitHub Pages Actions `pages build and deployment` 성공과 commit SHA 일치 확인. 운영 사이트 경로 HTTP 200 / 배포된 인덱스 포함을 확인. CDN cache 문제일 수 있으므로 비교 시 cache-busting query 사용.
9. 실제 Chrome 브라우저 QA: 서재 총편수·새 검색·상세 열림·그림 naturalWidth>0·JS 오류·5개 장면 이동·영상 링크 및 임베드·모바일 레이아웃·개인 기록 유지/백업; 실패는 해당 분기만 복구.
10. URL과 검증 범위를 정확히 보고. GitHub 성공만으로 브라우저 전체 QA 완료라고 말하지 않음. 기존 프로젝트의 원본/승인/Registry/대표본을 임의 변경하지 않음.

## 실무 주의
- `ArtBook.register` 파일의 `meta.status`는 사이트 표시용이지 OS 승인 권위가 아님.
- GitHub 기본 브랜치(main) 변경은 사이트 자동 배포를 일으킬 수 있으므로 **명시적 외부 공개 지시 없이 커밋하지 않음**.
- 이미지는 `cover.src`, `look.image.src`에서 로드하며 외부 핫링크 시 네트워크/트래픽/가용성 위험 존재. 호스팅은 실제 파일 권리를 확인해야 함.
- SEO나 웹북 UI를 바꾸기 전에 기존 구조 재사용 우선. 신규 Registry, Runtime, Gate 생성 금지.
- 다른 채팅에서 이 파일만으로 미술사·신학·저작권을 재검증한 것으로 간주하면 안 됨. 해당 파일·공식 소스를 다시 열 것.
- 공통 정책: Jude Lee OS 승인 지침과 00 CONTROL_TOWER 원칙이 우선하며 이 문서는 실행 절차 참고본일 뿐임.

## 다음 요청을 위한 1문장 인수인계
“GitHub `biwon7796-png/malsum-forest-site/art-bible/PRODUCTION_HANDOFF.md`와 현행 `art-bible/content/library.js`, Notion 예술과 신학 작품별 레퍼런스 DB를 먼저 읽고, 기존 완성작과 중복되지 않는 작품 한 편을 선정하여 원본/라이선스/음악/성경을 확인한 후 동일한 5장면 예술성경 웹북 JS로 제작, Captain의 공개 허가 범위 내에서 GitHub Pages 배포와 운영 브라우저 QA까지 진행하십시오.”

## 2026-11-24 추가 기록 (후속 채팅이 먼저 확인할 사항)
- 운영 서재는 **총 13개 ID**를 로드합니다(2026-11-24 실제 Chrome QA).
- **ART-BIBLE-012**: `sea-becomes-way` (출애굽기 14장, 도레/헨델): 별도 작업에서 `main`에 추가된 파일이며 현재 manifest 주석은 **candidate pending specialist QA** 입니다. 이 인수인계 문서는 이 후보를 전문 승인하거나 ACTIVE 승격하지 않습니다. 이 항목의 신학/내용·공개 상태는 rightful owner를 통해 별도 확인해야 합니다.
- **ART-BIBLE-013**: `fra-angelico-annunciation` · 〈말씀 앞에 선 마리아〉 (누가복음 1:26–38, 프라 안젤리코 《수태고지》 / 바흐 《마니피카트》 BWV 243). 실제 공개 주소: https://www.malsumforest.com/art-bible/#/w/fra-angelico-annunciation
- 013 신규 JS: `art-bible/content/works/fra-angelico-annunciation.js`. 2026-11-24 `main`에 게시. 원본 사진 `Prof. Mortel`, Commons 파일의 **CC BY 2.0** 조건에 따른 사진가/원본/라이선스 출처를 작품에 표시. 음악은 네덜란드 바흐 협회 공식 연주 링크/임베드만 사용. 성경은 개역한글판(1961) 전체 본문으로 교체(2026-11-24). 바흐 가사(눅 1:46–55)와 수태고지(눅 1:26–38)를 분리.
- 실서버 QA: 013 JS HTTP 200; Node `--check` PASS; Chrome Puppeteer E2E에서 서재 `count=13`, 013 카드 표시, 상세/이미지 `naturalWidth=960`, 다섯 장면 `1/5→5/5`, 390px 모바일 `scrollWidth=390`, pageerrors 0. 영상 플레이어 재생 및 개인 기록·백업은 이 실행에서 직접 시험하지 않았으므로 미검증.
- 미래 작업 시 **GitHub 저장소의 현행 HEAD**를 다시 읽으십시오. 012가 동시에 추가되어 013 번호로 진행해야 했던 사례처럼, 이 문서의 편수와 HEAD가 달라질 수 있습니다. 기존 후보 상태·ID·메모 연결을 침범하지 말고 최신 manifest 끝에 새 id를 추가하십시오.

## 2026-11-24 본문 수록 오류 수정 기록
- 캡틴 지적: 예술성경 신규 011, 013의 Scripture 영역에 원문이 아니라 [요약]을 넣은 것이 기존 편집 원칙 위반.
- 수정 대상: `giotto-kiss-of-judas.js` = **마태복음 26:47–56 개역한글판 10절**, `fra-angelico-annunciation.js` = **누가복음 1:26–38 개역한글판 13절**. `word.scripture.version`은 `개역한글판(1961)`; `lines`에는 각 절의 정식 본문을 넣고 기존 해설은 별도 유지.
- **이후 예술성경 작품 제작 시 요약본을 Scripture 본문으로 대신하지 말 것.** 원문과 해설을 명확히 구분. 본문 입력 이후 대한성서공회 대조 및 운영 페이지 실제 표시 E2E 필수.
- 대한성서공회 개역한글 본문: https://www.bskorea.or.kr/bible/korbibReadpage.php?linkBible=BHANmat026047 및 https://www.bskorea.or.kr/bible/korbibReadpage.php?linkBible=BHANluk001027
- 대한성서공회 저작권 안내: https://www.bskorea.or.kr/bbs/content.php?co_id=subpage2_3_4_1 (1961 개역한글판의 저작재산권 보호기간 2011-12-31 소멸).
- 이 사항은 **기존 예술성경 편집 패턴을 복구하기 위한 후속 QA 기록**이며 OS 공통 정책/전문 Registry의 권한을 새로 만들거나 변경하지 않습니다.
