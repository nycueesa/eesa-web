import React, { useState } from "react";
import styles from "./VolleyballWomen.module.css";
import teamPhoto from "../../assets/team/volleyball-women/1.jpg";
import ballIcon from "../../assets/team/volleyball-women/ball.png";
import beicupImg from "../../assets/team/volleyball-women/2.jpg";
import dacupImg from "../../assets/team/volleyball-women/1.jpg";

const activitiesData = [
  {
    id: "beicup",
    month: "12月~1月",
    name: "北電盃",
    description:
      "北電盃是會聚集北部電機相關科系所舉辦的比賽，大約會在寒假舉辦，場地每年皆不相同。",
    image: beicupImg,
  },
  {
    id: "dacup",
    month: "3月",
    name: "大電盃",
    description:
      "大電盃是聚集全台各地電機相關科系進行的排球比賽，會到各個縣市比賽，每年舉辦地皆不相同。",
    image: dacupImg,
  },
  {
    id: "xijicup",
    month: "4月~5月",
    name: "系際盃",
    description:
      "系際盃是交大各系參與的排球比賽，會與不同的科系競爭，是一個認識其他系的機會。",
    image: null,
  },
  {
    id: "xiaomei",
    month: "4月~5月",
    name: "小梅竹",
    description:
      "小梅竹是與清大電機共同舉辦的友誼賽，通常會選在梅竹賽後的某個假日或平日晚上。",
    image: null,
  },
];

export default function VolleyballWomen() {
  const [hoveredActivity, setHoveredActivity] = useState(null);

  return (
    <div className={styles.page}>
      {/* 標題 */}
      <h1 className={styles.pageTitle}>女排</h1>
      <div className={styles.titleDivider} />

      {/* 隊伍照片 */}
      <div className={styles.photoContainer}>
        <img
          src={teamPhoto}
          alt="女排隊伍合照"
          className={styles.teamPhoto}
        />
      </div>

      {/* 隊伍介紹 */}
      <section className={styles.introSection}>
        <p className={styles.introText}>
          大家好，我們是交大電機系女排！系女排是一個友善的大家庭，成員包括很多大學部以及研究所的學姊妹們。還有厲害的教練（學長），大家不用擔心自己可能會把球接噴或是跟不上，跟我們一起練球就可以變厲害變的很帥！
        </p>
        <p className={styles.introText}>
          練球的內容包括一點點體能，各種基本動作，還有場上會用到的觀念與技巧，會一步一步帶大家，最後就可以快樂打play。
        </p>
        <p className={styles.introText}>
          一年之中也會有大大小小的比賽可以參加，像是北電盃、大電盃、小梅竹、系際盃、還有超多場的聯賽，可以享受排球比賽的熱血沸騰並展現自己的練習成果！
        </p>
      </section>

      {/* 練習時間 */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>練習時間</h2>
        <div className={styles.scheduleContainer}>
          <div className={styles.scheduleText}>
            <p>
              每個禮拜會有兩天下午在室外球場與一天中午在室內球場練習，在每個學期的一開始會投票選擇最多人有空的時間。
            </p>
            <p>這學期的練習時間：</p>
            <ul className={styles.scheduleList}>
              <li>星期三中午 室內球場</li>
              <li>星期四下午 17:30~20:00 室外球場</li>
              <li>星期三與五隔週下午 17:30~20:00 室外球場</li>
            </ul>
          </div>
          <div className={styles.volleyballIcon}>
            <img src={ballIcon} alt="排球" className={styles.ballImg} />
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
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className={`${styles.timelineItem} ${
                  hoveredActivity === activity.id ? styles.timelineItemActive : ""
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
            {hoveredActivity ? (
              (() => {
                const activity = activitiesData.find(
                  (a) => a.id === hoveredActivity
                );
                return (
                  <div className={styles.detailContent} key={activity.id}>
                    <h3 className={styles.detailTitle}>
                      女排{activity.name}介紹
                    </h3>
                    <div className={styles.detailDescBox}>
                      <p className={styles.detailDesc}>{activity.description}</p>
                    </div>
                    {activity.image && (
                      <img
                        src={activity.image}
                        alt={`女排${activity.name}`}
                        className={styles.detailImage}
                      />
                    )}
                  </div>
                );
              })()
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
            <p>
              <strong>隊長：洪子耘</strong>
            </p>
            <p>instagram: @__.htyunn.__</p>
            <p>facebook: 洪子耘</p>
          </div>
          <div className={styles.contactPerson}>
            <p>
              <strong>副隊長：張婷媚</strong>
            </p>
            <p>instagram:</p>
            <p>facebook:</p>
          </div>
          <p className={styles.contactNote}>
            請私訊隊長或副隊長，會將妳拉入臉書社團！請注意若只有申請臉書社團沒有事先告知將不會通過申請～
          </p>
        </div>
      </section>
    </div>
  );
}
