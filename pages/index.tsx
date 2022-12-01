import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wedding-Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          2022년 4월 9일 오후 6시
        </h1>
        <br />
        <h1 className={styles.title}>
          결혼합니다👰🤵
        </h1>
      </main>

      {/* <footer className={styles.footer}>
        청첩장 만들기 project
      </footer> */}
    </div>
  )
}
