import React from 'react';
import styles from '../styles/Home.module.css';
import { StyleWrapper } from '../styles/layout.styled';
/*
 TODO https://nextjs.org/blog/next-13
 TODO https://beta.nextjs.org/docs/routing/pages-and-layouts
 TODO https://velog.io/@wmc1415/Nextjs13-1
 */

const Home = () => {
  return (
    <StyleWrapper>
      <main className={styles.main}>
        <div>123</div>
      </main>
      <footer>설정버튼</footer>
    </StyleWrapper>
  );
};

export default Home;
