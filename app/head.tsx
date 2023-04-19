import KaKaoScript from '#/components/scripts/KaKaoScript';
declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function Head() {
  return (
    <>
      <title>초대합니다 ❤</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/married.png" />
      <KaKaoScript />
    </>
  );
}
