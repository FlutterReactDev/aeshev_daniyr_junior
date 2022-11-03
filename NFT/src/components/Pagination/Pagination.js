import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPage } from "../../redux/nftReducer";
import styles from "./Pagination.module.css";
import { gsap, Elastic } from "gsap";
import cn from "classnames";
import { setActiveElement } from "../../redux/paginationReducer";
function Pagination({ pageCount,currentPage }) {
  const pageNumbers = [...Array(pageCount + 1).keys()].slice(1);
  const active = useSelector((state) => state.pagination.activeElement);
  const dispatch = useDispatch();
  const select = useRef(null);

  useEffect(() => {
    gsap.to(select.current, {
      duration: 1,
      x: 50 * (currentPage - 1),
      ease: Elastic.easeOut.config(1.1, 0.4),
    });
  });

  return (
    <nav className={styles.Pagination}>
      <ul className={styles.PaginationList}>
        {pageNumbers.map((pageNum) => {
          return (
            <li
              className={cn(styles.PaginationItem, {
                [styles.PaginationSelectActive]: active === pageNum,
              })}
              onClick={(e) => {
                dispatch(changeCurrentPage(pageNum));
                dispatch(setActiveElement(pageNum));
                gsap.to(select.current, {
                  duration: 1,
                  x: 50 * (pageNum - 1),
                  ease: Elastic.easeOut.config(1.1, 0.4),
                });
              }}
            >
              {pageNum}
            </li>
          );
        })}
        <div ref={select} className={styles.PaginationSelect}></div>
      </ul>
    </nav>
  );
}

export default Pagination;
