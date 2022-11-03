import styles from "./Card.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
function Card({ image_thumbnail_url, name, id }) {
  return (
    <div className={cn(styles.Card, "card")}>
      <div className={styles.CardThumbnail}>
        <img src={image_thumbnail_url} alt="" />
      </div>

      <div className={styles.Footer}>
        <div className={styles.Name}>{name} </div>

        <Link to={'nft/' + id}>
          <button className={styles.Button}>Подробнее</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
