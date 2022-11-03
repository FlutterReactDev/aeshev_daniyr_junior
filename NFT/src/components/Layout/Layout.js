import styles from "./Layout.module.css";
import GithubIcon from "./github.svg";
function Layout({ children }) {
  return (
    <>
      <header className={styles.Header}>
        <div className={styles.Logo}>NFT</div>
        <div className={styles.Github}>
          <img src={GithubIcon} alt="" />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Layout;
