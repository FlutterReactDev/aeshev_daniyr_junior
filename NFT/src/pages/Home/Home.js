import { useEffect } from "react";
import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Loader from "../../components/Loader/Loader";
import {fetchNFT} from '../../redux/actions/nftAction'

function Home() {
  const dispatch = useDispatch();
  const nftItems = useSelector((state) => state.nft.nftItems);
  const nftPerPage = useSelector((state) => state.nft.nftPerPage);
  const pageCount = useSelector((state) => state.pagination.pageCount);
  const currentPage = useSelector((state) => state.nft.currentPage);

  useEffect(() => {
    fetchNFT(dispatch);
  }, []);

  if (nftItems.length === 0) {
    return <Loader />;
  }

  return (
    <div className={styles.Home}>
      <div className={styles.Container}>
        <div className={styles.Top}>
          <div className={styles.Title}>NFT Pictures</div>
          <Pagination currentPage={currentPage} pageCount={pageCount} />
        </div>

        <div className={styles.nft}>
          {nftItems &&
            nftItems
              .slice(
                currentPage * nftPerPage - nftPerPage,
                currentPage * nftPerPage
              )
              .map((nft) => {
                if (nft.name !== null) {
                  return <Card key={nft.id} {...nft} />;
                }
              })}
        </div>
      </div>
    </div>
  );
}

export default Home;
