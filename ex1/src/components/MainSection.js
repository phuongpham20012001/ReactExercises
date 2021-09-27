import React from "react";
import styles from "./MainSection.module.css";

export default function MainSection(props) {
  return (
    <div class={styles.container}>
      <div class={styles.body1}>
        <div class={styles.border}>
          <span class={styles.header}>{props.data.title}:</span>
          <div>
            <img src={props.data.image} alt="cac" width="500" height="300" />;
          </div>
          {props.data.article}
        </div>
      </div>
    </div>
  );
}
