# 커스터마이즈 가이드 (CUSTOMIZE)

이 스킨은 **CSS 변수(custom properties)** 기반이라, 대부분의 색·간격·폰트를 `style.css` 상단의 `:root` 한 곳에서 바꿀 수 있습니다.
디자인 컨셉(다크 픽셀아트 우주)을 유지하면서 색감만 조정하는 것을 권장합니다.

> 모든 변수는 `style.css` 파일 맨 위 `:root { ... }` 블록에 정의되어 있습니다.

---

## 1. 색상 (Colors)

### 배경 — 깊이별 레이어

| 변수 | 기본값 | 용도 |
|---|---|---|
| `--bg-void` | `#06080f` | 가장 어두운 배경 |
| `--bg-deep` | `#08101c` | body 배경 |
| `--bg-dark` | `#0c1524` | 모바일 사이드바 배경 |
| `--bg-card` | `#0f1a2e` | 카드 배경 |
| `--bg-card-hv` | `#142035` | 카드 hover |
| `--bg-high` | `#1a2a42` | 강조 배경 |

### 강조색 (Accent)

| 변수 | 기본값 | 용도 |
|---|---|---|
| `--gold` | `#f0c040` | 브랜드 별, 포인트 |
| `--purple` | `#a855f7` | 인용구, 배지 |
| `--blue` | `#60a5fa` | 링크, 활성 상태 |
| `--cyan` | `#22d3ee` | 라벨, 태그, 마스코트 선택 강조 |
| `--pink` | `#f472b6` | 보조 강조 |
| `--green` | `#4ade80` | 상태 표시(SIGNAL OK) |

### 텍스트 (Text)

| 변수 | 기본값 | 용도 |
|---|---|---|
| `--tx` | `#d8e4f8` | 본문 기본 텍스트 |
| `--tx-muted` | `#7a90b8` | 보조 텍스트 |
| `--tx-dim` | `#4a5a7a` | 흐린 텍스트 |
| `--tx-code` | `#a5d8ff` | 코드 텍스트 |

> 테두리(`--bd-dim/sub/glow`)와 글로우(`--glow-s/m/p`)도 같은 `:root` 에 있습니다.
> 톤을 바꾸고 싶다면 `--bg-*` 와 `--blue/--cyan` 를 함께 조정하면 전체 분위기가 자연스럽게 따라옵니다.

---

## 2. 레이아웃 (Layout)

| 변수 | 기본값 | 용도 |
|---|---|---|
| `--hdr-h` | `60px` | 헤더 높이 (640px 이하에서 52px) |
| `--stat-h` | `26px` | 상태 표시줄 높이 |
| `--main-w` | `680px` | 본문 최대 폭 |
| `--sb-w` | `240px` | 사이드바 폭 |
| `--gap` | `2rem` | 본문-사이드바 간격 (640px 이하 1.25rem) |
| `--pad` | `1.25rem` | 좌우 패딩 |

> ⚠️ `--main-w` / `--sb-w` 를 바꾼다면, `index.xml` 의 `<layout><content width>` / `<sidebar width>` 값도 함께 맞춰 주세요.

---

## 3. 폰트 (Fonts)

| 변수 | 값 |
|---|---|
| `--f-pixel` | `'Press Start 2P', monospace` (장식용 라벨) |
| `--f-body` | 시스템 한글 폰트 (Apple SD Gothic Neo / Noto Sans KR / Malgun Gothic) |
| `--f-mono` | 코드용 모노스페이스 |

- 픽셀 폰트는 `.px` 클래스가 붙은 **장식용 라벨에만** 적용됩니다. (성능·가독성 고려)
- Press Start 2P 에는 **한글 글리프가 없어**, 한글 라벨은 모노스페이스로 폴백됩니다. 그래서 라벨 글자 크기를 약간 키워 둔 상태입니다.
- 픽셀 폰트를 쓰고 싶지 않다면 `skin.html` `<head>` 의 Google Fonts `<link>` 를 제거하고, `--f-pixel` 을 `monospace` 로 두면 됩니다.

### 섹션 라벨 크기 (가독성 관련)

한글 구분선 라벨의 크기는 다음 선택자에서 조정합니다:

| 라벨 | 선택자 |
|---|---|
| ◈ 탐사 기록 (목록 구분선) | `.section-label` |
| ✦ 교신 기록 (댓글 제목) | `.comments-title` |
| 탐사 기지 (사이드바 캡션) | `.sb-station` |
| ✦ 다음 탐사지 ✦ (이전/다음) | `.post-nav-label` |

---

## 4. 커스텀 커서 (Cursor)

- 파일: `images/space-cursor.cur`
- `style.css` 에서 `html, body` 및 링크/버튼 요소에 적용됩니다.
- 커서를 끄려면 `style.css` 의 `cursor: url("./images/space-cursor.cur") ...` 선언들을 제거하면 됩니다. (없어도 자동으로 기본 커서로 폴백)

---

## 5. 우주인 마스코트 (Mascot Picker)

사이드바 마스코트는 방문자가 직접 성별/피부톤을 고를 수 있습니다.

- **로직:** `images/script.js` 의 `initMascot()` (별 배경/사이드바 토글과 분리된 독립 함수)
- **조합 방식:** `기본문자(🧑/👩/👨) + 피부톤 수정자 + ZWJ(‍) + 🚀`
- **기본값:** 중립 우주인 `🧑‍🚀`

### 저장 키 (localStorage)

| 키 | 값 |
|---|---|
| `spacelog.gender` | `neutral` / `woman` / `man` |
| `spacelog.tone` | `default` / `light` / `medium-light` / `medium` / `medium-dark` / `dark` |

### 기본 마스코트를 바꾸려면

- `skin.html` 의 `#astronautEmoji` 초기 이모지(`🧑‍🚀`)를 바꾸면 첫 방문/저장값 없을 때의 기본 표시가 바뀝니다.
- 선택지를 줄이거나 늘리려면 `skin.html` 의 `.sb-picker` 버튼(`data-gender` / `data-tone`)과 `images/script.js` 의 `BASE` / `TONE` 매핑을 함께 수정하세요.
- 버튼 스타일은 `style.css` 의 `/* Mascot picker */` 블록(`.sb-pick`, `.sb-tone`, `.is-active`)에서 조정합니다.

---

## 6. 반응형 (Responsive)

- `@media (max-width: 900px)` — 사이드바가 오프캔버스로 전환, ☰ 토글 버튼 노출
- `@media (max-width: 640px)` — 헤더 축소, 헤더 검색폼 숨김, 카드 썸네일 높이 축소 등

> 640px 이하에서는 헤더의 검색폼이 숨겨집니다. 모바일 검색이 필요하면 사이드바에 **검색 모듈**을 추가하세요. (INSTALL.md 4번)

---

## 7. 별 개수 조정 (선택)

`images/script.js` 의 `initStars()` 에서 별 개수를 조정할 수 있습니다.
기본값은 데스크톱 110개 / 모바일 55개입니다. 성능이 부담되면 숫자를 줄이세요.

---

## 권장 사항

- 변수 값만 바꾸는 수준의 커스터마이즈를 권장합니다.
- 구조(치환자/조건 블록)는 건드리지 마세요. 잘못 수정하면 글이 렌더링되지 않을 수 있습니다. ([TROUBLESHOOTING.md](./TROUBLESHOOTING.md) 참고)
