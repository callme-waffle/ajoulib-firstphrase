# 노드 이미지를 기반으로 Dockerfile 작성
FROM node:14-alpine

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# package.json 및 package-lock.json을 복사하여 종속성 설치를 위해 추가
COPY package*.json ./

# 종속성 설치
RUN npm install

# 앱 소스 코드 복사
COPY . .

# 앱 빌드
RUN npm run build

# 앱 실행을 위한 명령어 정의
CMD ["npm", "start"]
