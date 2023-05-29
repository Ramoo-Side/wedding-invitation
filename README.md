# 청첩장 만들기

## Version

- Next.js 13.2

- Styled Components 6.0.0-beta.2

- .env

<br>

## 사용 방법

1. npm module 다운받기

   ```
   npm i
   ```

2. root 경로에 `.env` 파일 생성하고 발급받은 KAKAO API KEY 입력하기

   ```
   NEXT_PUBLIC_KAKAO_MAP_API = kakao developers 에서 받은 app key(JavaScript key)
   NEXT_PUBLIC_NOTION_TOKEN = Notion API 생성 시 나오는 token
   NEXT_PUBLIC_NOTION_DATABASE_ID = Notion API 사용 시 해당 데이터페이스 아이디(전체페이지보기 url 정보)
   ```

3. Kakao developers => 플랫폼 => Web 사이트 도메인 추가하기

   ```
   ex) http://localhost:3000
   ```

4. ~~`page.tsx` 하단에 있는 `dataObj` 를 수정하거나, 직접 DB 연동 후 api 생성하여 사용하기~~ `dataObj` 를 수정하거나, notion api 를 사용해서 연동하기

5. vercel 로 build 할 경우, env 에 들어간 key 값을 setting -> environment-variables 에서 넣어주기

## Comment

- Next.js 최신버전은 13.3.0 이지만 13.3.0 버전 이용 시, `SyntaxError: Unexpected token u in JSON at position 0` 에러가 발생하여 13.2 버전으로 downgrade.
