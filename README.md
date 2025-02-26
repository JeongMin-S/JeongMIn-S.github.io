# #dev blog

[내 블로그](https://jeongmin-s.github.io)

---

git hub pages를 이용한 배포 방법

1. npm create vite@latest my-app
   cd my-app
   npm install
2. vite.config.js 설정

   export default defineConfig({
   base: '/',
   plugins: [react()]
   });

3. git repositoryies 생성, 연결
4. npm install --save-dev gh-pages 실행
5. package.json scripts에 추가
   "scripts": {
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   }
6. npm run build, npm run deploy
7. repositories - setting - pages - build and deployment에 branch를 gh-pages로 설정

---

수정 시 아래의 동작 실행
git add .
git commit -m ""
git push -u origin main

npm run build
npm run deploy
