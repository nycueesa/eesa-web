import React, { useState } from "react";
import styles from "./BasketballMen.module.css";
import teamPhoto from "../../assets/team/basketball-women/1.jpg";
import ballIcon from "../../assets/team/basketball-women/ball.png";

const activitiesData = [
  {
    id: "beicup",
    month: "1月或2月\n（寒假期間）",
    name: "北電盃",
    detailTitle: "女籃北電盃介紹",
    description: "北電盃是北部電機相關科系所舉辦的比賽，大約在寒假期間舉辦。",
  },
  {
    id: "xiaomei",
    month: "3月",
    name: "小梅竹",
    detailTitle: "女籃小梅竹介紹",
    description: "與清大電機共同舉辦的友誼賽。",
  },
  {
    id: "dacup",
    month: "4月~5月",
    name: "大電盃",
    detailTitle: "女籃大電盃介紹",
    description: "聚集全台各地電機相關科系進行的籃球比賽。",
  },
  {
    id: "xijicup",
    month: "5月~6月",
    name: "系際盃",
    detailTitle: "女籃系際盃介紹",
    description: "交大各系參與的籃球比賽，會與不同的科系競爭。",
  },
];

export default function BasketballWomen() {
  const [hoveredActivity, setHoveredActivity] = useState(null);

  const activeData = hoveredActivity
    ? activitiesData.find((a) => a.id === hoveredActivity)
    : null;

  return (
    <div className={styles.page}>
      {/* 標題 */}
      <h1 className={styles.pageTitle}>女籃</h1>
      <div className={styles.titleDivider} />

      {/* 隊伍照片 */}
      <div className={styles.photoContainer}>
        <img
          src={teamPhoto}
          alt="女籃隊伍合照"
          className={styles.teamPhoto}
        />
      </div>

      {/* 隊伍介紹 */}
      <section className={styles.introSection}>
        <p className={styles.introText}>
          大家好，我們是 交大電機女籃！成員由大學部和研究所共同組成。
        </p>
        <p className={styles.introText}>
          不論妳是籃球老手，還是剛踏入球場的新手，只要有熱情、喜歡運動，我們都誠摯歡迎妳加入這個充滿活力的大家庭！
        </p>
        <p className={styles.introText}>
          平時的練習內容豐富有趣，除了能精進球技、鍛鍊體能，更能與隊友們培養絕佳默契，收穫滿滿的友情與笑聲。
        </p>
        <p className={styles.introText}>
          每年我們都會參加大電盃、小梅竹、系際盃等賽事，讓大家有機會在球場上盡情發揮、挑戰自我，感受團隊合作的力量。
        </p>
        <p className={styles.introText}>
          加入電機女籃，妳不只會愛上籃球，更會擁有一段熱血又難忘的青春回憶。快來和我們一起流汗、一起成長吧！
        </p>
      </section>

      {/* 練習時間 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>練習時間</h2>
        <div className={styles.scheduleContainer}>
          <div className={styles.scheduleText}>
            <p>
              禮拜一、四晚上9.到11.，在西區籃球場練習。如果沒有要來須事先請假，遲到早退也要說。期中期末週彈性練球。
            </p>
          </div>
          <div className={styles.ballIcon}>
            <img src={ballIcon} alt="籃球" className={styles.ballImg} />
          </div>
        </div>
      </section>

      {/* 活動介紹 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>活動介紹</h2>
        <div className={styles.activityContainer}>
          {/* 左側時間軸 */}
          <div className={styles.timeline}>
            <div className={styles.timelineLine} />
            <div className={styles.timelineArrow} />
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className={`${styles.timelineItem} ${
                  hoveredActivity === activity.id
                    ? styles.timelineItemActive
                    : ""
                }`}
                onMouseEnter={() => setHoveredActivity(activity.id)}
                onMouseLeave={() => setHoveredActivity(null)}
              >
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <span className={styles.timelineMonth}>
                    {activity.month}
                  </span>
                  <span className={styles.timelineName}>{activity.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 右側詳細說明 */}
          <div className={styles.activityDetail}>
            {activeData ? (
              <div className={styles.detailContent} key={activeData.id}>
                <h3 className={styles.detailTitle}>
                  {activeData.detailTitle}
                </h3>
                <div className={styles.detailDescBox}>
                  <p className={styles.detailDesc}>{activeData.description}</p>
                </div>
              </div>
            ) : (
              <div className={styles.detailPlaceholder}>
                將滑鼠移到左側活動上查看詳情
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 聯絡資訊與入隊方法 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>聯絡資訊與入隊方法</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactPerson}>
            <p>隊長：張芝瑜</p>
            <p>FB: 張芝瑜</p>
            <p>Email: chih.chang.ee12@nycu.edu.tw</p>
          </div>
        </div>
      </section>
    </div>
  );
}
