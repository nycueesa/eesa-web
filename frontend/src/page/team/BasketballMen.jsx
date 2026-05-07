import React, { useState } from "react";
import styles from "./BasketballMen.module.css";
import teamPhoto from "../../assets/team/basketball-men/1.jpg";
import ballIcon from "../../assets/team/basketball-men/ball.png";
import aboutImg from "../../assets/team/basketball-men/about.jpg";

const activitiesData = [
  {
    id: "xiaolian",
    month: "整年",
    name: "小聯賽",
    detailTitle: "男籃小聯賽介紹",
    description: "每個禮拜都有比賽，打球打到爽",
  },
  {
    id: "beicup",
    month: "寒假前後",
    name: "北電盃",
    detailTitle: "男籃北電盃介紹",
    description: "跟北台灣系籃比看誰比較電",
  },
  {
    id: "dalian",
    month: "下學期",
    name: "大聯賽",
    detailTitle: "男籃大聯賽介紹",
    description: "跟全校菁英單挑",
  },
  {
    id: "dacup",
    month: "3月",
    name: "大電盃",
    detailTitle: "男籃大電盃介紹",
    description: "跟全台灣電類科系發起挑戰",
  },
  {
    id: "xiaomei",
    month: "3月",
    name: "小梅竹",
    detailTitle: "男籃小梅竹介紹",
    description: "跟清大電機進行的兩系之間激烈戰爭",
  },
  {
    id: "xijicup",
    month: "4月",
    name: "系際盃",
    detailTitle: "男籃系際盃介紹",
    description: "交大校內最激烈、最熱的盃賽",
  },
];

export default function BasketballMen() {
  const [hoveredActivity, setHoveredActivity] = useState(null);

  const activeData = hoveredActivity
    ? activitiesData.find((a) => a.id === hoveredActivity)
    : null;

  return (
    <div className={styles.page}>
      {/* 標題 */}
      <h1 className={styles.pageTitle}>男籃</h1>
      <div className={styles.titleDivider} />

      {/* 隊伍照片 */}
      <div className={styles.photoContainer}>
        <img
          src={teamPhoto}
          alt="男籃隊伍合照"
          className={styles.teamPhoto}
        />
      </div>

      {/* 隊伍介紹 */}
      <section className={styles.introSection}>
        <p className={styles.introText}>提供以下服務</p>
        <p className={styles.introText}>
          1. 假裝暗戀你去班上給你送吃的或是喝的（食物需自費）200/次
        </p>
        <p className={styles.introText}>
          2. 假裝搭訕要哀居並被你毫不留情拒絕400/次
        </p>
        <p className={styles.introText}>
          3. 在學校裡大喊你長得很像彭于晏/郭雪芙（名字可自己想）200/次
        </p>
        <p className={styles.introText}>
          4. 假裝你的前任在走廊大喊我還愛你
          被你霸氣轉頭離開400/次，打巴掌叫我離開800/次
        </p>
        <p className={styles.introText}>
          5. 假裝你是超級富二代 在你朋友旁邊大喊 公子今天要開保時捷還是法拉利 200/次
        </p>
        <p className={styles.introText}>
          6. 在操場高舉紅布條 大喊我愛XXX（含激烈歡呼500/次 紅布條需自備
        </p>
        <p className={styles.introText}>
          7. 假裝你就是傳說校園人物 在你吃飯的時候小聲對同桌說對.就是那個人180/次（附一次神秘表情
        </p>
        <p className={styles.introText}>
          8. 加入電機系籃，保你一生榮華富貴，開心打球打比賽，交到一群可以一起打球的好朋友 666666/次
        </p>
      </section>

      {/* 練習時間 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>練習時間</h2>
        <div className={styles.scheduleContainer}>
          <div className={styles.scheduleText}>
            <p>主要禮拜三下午1600</p>
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
          <p>衷居私訊正副隊長獲取更多資訊</p>
          <div className={styles.contactPerson}>
            <p>李俊燁：ya.yehyehee.05</p>
            <p>陳庭毅：ty0726_00</p>
            <p>吉祥物：bemature_777</p>
          </div>
          <p className={styles.contactNote}>
            歡迎私訊正副隊長了解更多，若想直接加入也可以加入群組，並在練球時出現
          </p>
          <div className={styles.aboutImgContainer}>
            <img
              src={aboutImg}
              alt="交大電機系籃"
              className={styles.aboutImg}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
