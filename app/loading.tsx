import styles from '../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingWrapper}>
      <div>
        <div className={styles.loadingHeart}>
          <div></div>
        </div>
        <div className={styles.loadingText}>잠시만 기다려 주세요 💌</div>
      </div>
    </div>
  );
}
