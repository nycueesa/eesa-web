import React from "react";
import styles from "./President.module.css";
import presidentImg from "../../assets/President.jpeg"; // 你要放的圖片

export default function President() {
  return (
    <div className={styles.presidentPage}>
      <h1>會長的話</h1>
      <div className={styles.content}>
        <img src={presidentImg} alt="EESA會長" className={styles.presidentImg} />
        <div className={styles.message}>
          <p>
            親愛的同學們，大家好！<br />
            我是本屆 EESA 的會長，非常榮幸能帶領大家一起推動更多精彩的活動與學習機會。
          </p>
          <p>
            我們的目標不只是專業的成長，也希望營造一個溫暖、有凝聚力的系學會環境。
          </p>
          <p>
            期待在未來的日子裡和大家一起努力，共同創造屬於我們的回憶！
          </p>
          <p className={styles.signature}>—— EESA 會長</p>
        </div>
      </div>
    </div>
  );
}
