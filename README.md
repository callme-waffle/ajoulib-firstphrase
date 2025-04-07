# AJ Lib Phrase
> 책 속 한문장 추천서비스 개발 프로젝트

(Developped by waffle, 2025)

## 시작하기

### A) 일반 실행 방법

1. 필수 요구사항:
   - Node.js 14.0.0 이상
   - npm 또는 yarn

2. 프로젝트 클론:
```bash
git clone https://github.com/nate2402/AJ_Lib_Phrase.git
cd AJ_Lib_Phrase
```

3. 의존성 설치:
```bash
# npm 사용 시
npm install

# yarn 사용 시
yarn install
```

4. 프로덕션 빌드:
```bash
# npm 사용 시
npm run build
npm start

# yarn 사용 시
yarn build
yarn start
```

### B) Docker를 이용한 실행 방법

1. 필수 요구사항:
   - Docker

2. Docker 이미지 빌드:
```bash
docker build -t aj-lib-phrase .
```

3. Docker 컨테이너 실행:
```bash
docker run -p 3000:3000 aj-lib-phrase
```

## 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 필요한 환경 변수를 설정하세요.

```env
# 예시
NEXT_PUBLIC_API_URL=your_api_url
```

---

## 프로젝트 구조
```
AJ_Lib_Phrase/
├── src/ # 소스 코드
├── public/ # 정적 파일
├── .next/ # Next.js 빌드 출력
├── node_modules/ # 의존성 모듈
└── ...
```

