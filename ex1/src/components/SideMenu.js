import React from "react";
import styles from "./SideMenu.module.css";

export default function SideMenu(props) {
  return (
    <div className={styles.body1}>
      <span className={styles.header}>{props.data.title}</span>
      <div class={styles.border}>{props.data.content}</div>
    </div>
  );
}
