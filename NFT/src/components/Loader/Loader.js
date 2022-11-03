import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.Loader}>
      <div className={styles.Card}></div>
      <div className={styles.Card}></div>
      <div className={styles.Card}></div>
    </div>
  );
}

export default Loader
