# ***Sparkle-Note***

### GitHub: [🎨 Front-End](https://github.com/rolling-paper-toy/front-end) / [📄 Wiki](https://github.com/rolling-paper-toy/wiki)

> **초등학생 대상 학급 전용 롤링페이퍼 웹 서비스**
> 
- **배포 이후 초등학생 1개 학급 대상 실사용 및 피드백 반영**
- **참여 인원: Front-end 2명, Back-end 2명**
- **2024. 09. - 2024. 11.**

## **🛠 기술 스택**

- **Language:** **`JavaScript`**
- **Library:** **`React`**, **`Zustand`**, **`Axios`**, **`MUI(Material-UI)`, `Emotion`**
- **Infra:** **`AWS EC2`**
- **CI / CD:** **`GitHub Actions`**
- **협업:** **`Git`**, **`GitHub`**, **`Figma`**, **`Notion`**, **`Slack`**

## 📌 주요 구현 기능

- 교사/학생 역할 기반 라우팅 분리 및 인증 콜백 → 토큰 저장 → 접근 제어 흐름 구성
- 작성/수정/상세를 모달 중심으로 구성해 입력 흐름 단순화

## 🔧 구현 상세

- 인증 토큰·학급 데이터 로컬 저장으로 새로고침 후 세션 복원 흐름 구성
- 상태 준비 완료 이후에만 인증 헤더를 주입하도록 요청 처리 조건화(초기 401 방지)
- 초기 로딩 안내 UI와 데이터 렌더링 분리로 깜빡임/오동작 최소화

## 🐞 프로젝트 이슈 & 해결 과정

- Zustand는 메모리 기반 상태관리라 새로고침 시 userStore가 초기화되어 로그인 상태 유지 불가
- persist(localStorage/sessionStorage)로 유지는 가능하지만 Access Token 노출로 XSS 위험 존재
- 백엔드의 httpOnly 쿠키 미지원 환경에서 js-cookie로 Access Token을 쿠키 저장
- 쿠키에 Secure/SameSite를 적용하고, 요청 시 Authorization Bearer 헤더로 전달하며 Zustand는 사용자 상태만 관리
- 새로고침 후 로그인 정상적으로 유지, 인증정보 분리로 보안성, 안정성 개선
