import React from "react";
import teamImg from "../../assets/team/team.jpg";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <div className={styles.page}>
      {/* Hero 圖 */}
      <div className={styles.hero}>
        <img
          src={teamImg}
          alt="系隊合照"
          className={styles.heroImg}
        />
      </div>

      {/* 系隊介紹 */}
      <section className={styles.section}>
        <h2 className={styles.title}>系隊介紹</h2>
        <div className={styles.divider} />

        <div className={styles.buttons}>
          <button className={styles.teamBtn}>男籃</button>
          <button className={styles.teamBtn}>女籃</button>
          <button className={styles.teamBtn}>男排</button>
          <button className={styles.teamBtn}>女排</button>
          <button className={styles.teamBtn}>羽球</button>
          <button className={styles.teamBtn}>桌球</button>
          <button className={styles.teamBtn}>棒球</button>
          <button className={styles.teamBtn}>網球</button>
          <button className={styles.teamBtn}>足球</button>
        </div>
      </section>
    </div>
  );
}
