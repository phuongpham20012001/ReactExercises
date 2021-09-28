import React from "react";
import styles from "./SearchResult.module.css";

export default function SearchResult(props) {
  const onclickedItem = (ID) => {
    props.computeSomethings(ID);
  };

  return (
    <div className={styles.product}>
      <div>
        <div>
          <img
            src={`/images/${props.image}`}
            width="220px"
            height="250px"
            alt="concac"
          />
        </div>
        <div className={styles.name}>{props.name}</div>
        <div>{props.manufacturer}</div>
        <div className={styles.category}>{props.category}</div>
        <div className={styles.rating}>{props.rating} ★★★★★</div>
        <div>{props.promos}</div>
        <div>${props.price}</div>

        <button
          className={styles.button}
          onClick={() => onclickedItem(props.id)}
        >
          View Detail
        </button>
      </div>
      <div></div>
    </div>
  );
}
