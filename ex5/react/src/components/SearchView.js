import React from "react";
import styles from "./SearchView.module.css";

import SearchResult from "./SearchResult";

export default function SearchView(props) {
  const computeSomethings = (ID) => {
    props.clickedItem(ID);
  };
  return (
    <div>
      <div className={styles.presentationModeGrid}>
        {props.items.map((item) => (
          <SearchResult
            key={item.id}
            {...item}
            computeSomethings={computeSomethings}
          />
        ))}
      </div>
    </div>
  );
}
