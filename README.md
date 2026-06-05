# space-log — 티스토리 스킨

우주 탐사 일지(space exploration log) 컨셉의 **다크 픽셀아트(dark pixel-art)** 티스토리 블로그 스킨입니다.
별이 빛나는 배경, 미션 로그 스타일의 글 목록 카드, 우주인 마스코트가 있는 사이드바를 갖춘 읽기 편한 개인 블로그 스킨을 목표로 합니다.

> 디자인 컨셉을 그대로 유지하면서, 안정성과 가독성을 우선으로 만든 스킨입니다.

---

## 미리보기 (Preview)

미리보기 이미지는 저장소에 **포함되어 있지 않습니다.** 직접 만들어 추가해 주세요.

- 권장 파일: `images/preview.jpg`
- `index.xml` 의 `<preview>` 가 이 경로(`./images/preview.jpg`)를 참조하도록 이미 설정되어 있습니다.
- 파일이 없으면 스킨 편집기 썸네일만 비어 보일 뿐, 블로그 자체 렌더링에는 영향이 없습니다.
- 자세한 추가 방법은 [INSTALL.md](./INSTALL.md) 참고.

---

## 주요 기능 (Features)

- ✦ **별 배경(star field)** — JS로 데스크톱 110개 / 모바일 55개의 별을 생성, CSS로 반짝임 애니메이션
- ◈ **미션 로그 카드** — 홈/카테고리/검색 목록을 카드 형태로 표시 (썸네일은 있을 때만 렌더)
- 🧑‍🚀 **우주인 마스코트 선택** — 사이드바에서 성별/피부톤을 고를 수 있고, 선택값은 `localStorage` 에 저장
- 📱 **반응형 레이아웃** — 900px에서 사이드바가 오프캔버스(off-canvas)로 전환, 640px에서 모바일 최적화
- 🎨 **CSS 변수 기반 테마** — 색/레이아웃을 변수 한 곳에서 조정 (자세한 내용은 [CUSTOMIZE.md](./CUSTOMIZE.md))

---

## 파일 구조 (File Structure)

```
tstory_skin/
├── skin.html              # 스킨 HTML (티스토리 치환자/조건 블록 포함)
├── style.css              # 전체 스타일 (다크 코스믹 테마, CSS 변수)
├── index.xml              # 스킨 메타데이터 + 미리보기 설정
├── images/
│   ├── script.js          # 별 배경 + 사이드바 토글 + 마스코트 피커
│   ├── space-cursor.cur   # 커스텀 커서
│   └── preview.jpg        # ⚠ 직접 추가 필요 (미리보기 이미지)
├── README.md              # 이 문서
├── INSTALL.md             # 설치 / 적용 가이드
├── CUSTOMIZE.md           # 커스터마이즈 가이드
└── TROUBLESHOOTING.md     # 문제 해결 / 수동 확인 항목
```

---

## 빠른 시작 (Quick Start)

1. 티스토리 관리자에서 스킨을 등록/편집합니다. → [INSTALL.md](./INSTALL.md)
2. 사이드바 모듈(카테고리·검색·최근 글 등)을 설정합니다.
3. `images/preview.jpg` 미리보기 이미지를 추가합니다.
4. 색이나 폰트를 바꾸고 싶다면 [CUSTOMIZE.md](./CUSTOMIZE.md) 를 참고하세요.

---

## 문서 (Documentation)

| 문서 | 내용 |
|---|---|
| [INSTALL.md](./INSTALL.md) | 티스토리 설치·적용, 사이드바 모듈, 미리보기 이미지 추가 |
| [CUSTOMIZE.md](./CUSTOMIZE.md) | CSS 변수, 색/폰트/커서, 마스코트 피커, 반응형 |
| [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) | 수동 확인 항목, 알려진 이슈, 증상별 해결 |

---

## 메타데이터 (Metadata)

- **이름:** space-log
- **버전:** 1.0.0
- **제작자(author):** YoungSeo
- **홈페이지:** https://github.com/YoungSeo-coder/tstory_skin *(placeholder — 실제 저장소 주소로 교체 예정)*
- **이메일:** (미정 / TBD)
- **라이선스(license):** TBD — 배포 전 결정 필요

---

## 크레딧 (Credits)

- 픽셀 폰트: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (Google Fonts)
- 본문 폰트: 시스템 한글 폰트 (Apple SD Gothic Neo / Noto Sans KR / Malgun Gothic)
- 프레임워크 없음 — 순수 HTML / CSS / Vanilla JavaScript

---

## 상태 (Status)

현재 P0(배포 준비) 및 문서화 작업까지 완료된 상태입니다.
검색·방명록·빈 상태(empty state)·태그·광고 영역 등 **티스토리에서 직접 테스트가 필요한 구조 항목(P1)은 아직 반영되지 않았습니다.**
해당 항목은 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) 의 "수동 확인 필요" 목록을 참고하세요.
