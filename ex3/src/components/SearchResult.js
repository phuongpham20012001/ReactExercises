import React from "react";
import styles from "./SearchResult.module.css";

export default function SearchResult(props) {
  return (
    <div className={styles.product}>
      <div>
        <div>
          <img src={`/images/${props.image}`} width="220px" height="250px" />
        </div>
        <div className={styles.name}>{props.name}</div>
        <div>{props.supplier}</div>
        <div>${props.price}</div>
      </div>
    </div>
  );
}
