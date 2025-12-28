import React from "react";
import styles from "./Timeline.module.css";

const timelineEvents = [
  {
    title: "電機週徵才",
    period: "02.26",
    type: "major",
    tags: ["校園招募", "春季"],
  },
  {
    title: "光舞表演",
    period: "03.15 - 03.16",
    type: "major",
    tags: ["晚會", "舞台"],
  },
  {
    title: "宿營徵才",
    period: "03.19 - 03.20",
    type: "major",
    tags: ["招募", "社團"],
  },
  {
    title: "電機週",
    period: "05.19 - 05.25",
    type: "major",
    tags: ["攤位", "系上品牌"],
  },
  {
    title: "大活動",
    period: "05.25",
    type: "major",
    tags: ["年度亮點"],
  },
  {
    title: "小畢典",
    period: "06.09",
    type: "minor",
    tags: ["典禮", "學生活動"],
  },
  {
    title: "暑假",
    period: "07.06 - 07.12",
    type: "minor",
    tags: ["夏季", "系隊訓練"],
  },
];

export default function Timeline() {
  const majorCount = timelineEvents.filter((item) => item.type === "major").length;
  const minorCount = timelineEvents.length - majorCount;

  return (
    <div className={styles.page}>
      {/* 直接嵌入 Figma 匯出的整頁 PNG，達到一模一樣的視覺 */}
      <section>
        <img src="/figma-timeline.png" alt="Figma 時間軸視覺" className={styles.figmaImage} />
      </section>
    </div>
  );
}
