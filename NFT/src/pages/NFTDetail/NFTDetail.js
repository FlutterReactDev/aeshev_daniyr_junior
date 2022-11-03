import styles from "./NFTDetail.module.css";
import { gsap, Power3, Elastic } from "gsap";
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchNFTDetail } from "../../redux/actions/nftAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

function NFTDetail() {
  const dispatch = useDispatch();
  const screen = useRef(null);
  const content = useRef(null);
  const user = useRef(null);
  const title = useRef(null);
  const image = useRef(null);
  const { id } = useParams();
  const nft = useSelector((state) => state.NFTDetail.nft);
  console.log(nft);
  useEffect(() => {
    fetchNFTDetail(dispatch, id);
  }, []);
  useEffect(() => {
    let tl = gsap.timeline();

    tl.to(screen.current, {
      duration: 0.5,
      height: "100%",
      top: "0%",
      ease: Power3.easeInOut,
    });

    tl.to(screen.current, {
      duration: 0.5,
      top: "100%",
      ease: Power3.easeInOut,
      delay: 0.3,
    });

    tl.set(screen.current, { top: "-100%" });

    tl.to(title.current, {
      duration: 0.5,
      opacity: 1,
      x: "50%",
    });

    tl.to(image.current, {
      duration: 0.5,
      opacity: 1,
      maxWidth: "100%",
    });

    tl.to("#info-span span>span", {
      duration: 0.75,
      y: 0,
      opacity: 1,
      ease: Power3.out,
    });

    tl.to(user.current, {
      duration: 0.5,
      x: 0,
      ease: Elastic.easeOut,
    });
  });

  if (!nft) {
    return <Loader />;
  }
  return (
    <>
      <div className={styles.LoadContainer}>
        <div id="screen" className={styles.LoadScreen} ref={screen}></div>
      </div>

      <div className={styles.NFTDetail} ref={content}>
        <div ref={title} className={styles.Title}>
          <Link to="/">NFT Pictures</Link>
        </div>

        <div className={styles.Container}>
          <div className={styles.Img}>
            <img ref={image} src={nft && nft.image_preview_url} alt="" />
          </div>

          <div className={styles.Info}>
            <div id="info-span" className={styles.Name}>
              <span>
                <span>{nft && nft.name}</span>
              </span>
            </div>
            <div className={styles.Creator}>
              <div ref={user} className={styles.User}>
                <img
                  className={styles.UserImg}
                  src={nft.creator.profile_img_url}
                  alt=""
                />
                <div className={styles.UserName}>
                  {nft && nft.creator.user.username
                    ? nft.creator.user.username
                    : "User null"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NFTDetail;
