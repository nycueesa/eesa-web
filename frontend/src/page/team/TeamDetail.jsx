import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./TeamDetail.module.css";
import teamsData from "../../data/teams.json";
import { getTeamImage } from "./teamImages.js";

const teamKeys = Object.keys(teamsData);

function ScheduleBlock({ block }) {
  if (block.type === "paragraph") {
    return <p>{block.text}</p>;
  }
  if (block.type === "subheader") {
    return (
      <p>
        <strong>{block.text}</strong>
      </p>
    );
  }
  if (block.type === "list") {
    return (
      <ul className={styles.scheduleList}>
        {block.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }
  return null;
}

export default function TeamDetail() {
  const { teamKey } = useParams();
  const team = teamsData[teamKey];
  const [hoveredActivity, setHoveredActivity] = useState(null);

  if (!team) {
    return (
      <div className={styles.page}>
        <h1 className={styles.notFound}>找不到此系隊</h1>
      </div>
    );
  }

  const activeData = hoveredActivity
    ? team.activities.find((a) => a.id === hoveredActivity)
    : null;

  const photoSrc = getTeamImage(team.photo);
  const ballSrc = getTeamImage(team.ballIcon);
  const aboutSrc = getTeamImage(team.aboutImg);

  const currentIndex = teamKeys.indexOf(teamKey);
  const prevKey = currentIndex > 0 ? teamKeys[currentIndex - 1] : null;
  const nextKey =
    currentIndex >= 0 && currentIndex < teamKeys.length - 1
      ? teamKeys[currentIndex + 1]
      : null;
  const prevTeam = prevKey ? teamsData[prevKey] : null;
  const nextTeam = nextKey ? teamsData[nextKey] : null;

  return (
    <div className={styles.page}>
      {/* 返回系隊介紹 */}
      <Link to="/team" className={styles.backLink}>
        ← 系隊介紹
      </Link>

      {/* 標題 */}
      <h1 className={styles.pageTitle}>{team.name}</h1>
      <div className={styles.titleDivider} />

      {/* 隊伍照片 */}
      {photoSrc && (
        <div className={styles.photoContainer}>
          <img
            src={photoSrc}
            alt={`${team.name}隊伍合照`}
            className={styles.teamPhoto}
          />
        </div>
      )}

      {/* 隊伍介紹 */}
      {team.intro?.length > 0 && (
        <section className={styles.introSection}>
          {team.intro.map((paragraph, i) => (
            <p key={i} className={styles.introText}>
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {/* 練習時間 */}
      {team.schedule?.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>練習時間</h2>
          <div className={styles.scheduleContainer}>
            <div className={styles.scheduleText}>
              {team.schedule.map((block, i) => (
                <ScheduleBlock key={i} block={block} />
              ))}
            </div>
            {ballSrc && (
              <div className={styles.ballIcon}>
                <img src={ballSrc} alt="球" className={styles.ballImg} />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 活動介紹 */}
      {team.activities?.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>活動介紹</h2>
          <div className={styles.activityContainer}>
            <div className={styles.timeline}>
              <div className={styles.timelineLine} />
              <div className={styles.timelineArrow} />
              {team.activities.map((activity) => (
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

            <div className={styles.activityDetail}>
              {activeData ? (
                <div className={styles.detailContent} key={activeData.id}>
                  <h3 className={styles.detailTitle}>
                    {team.name}
                    {activeData.name}介紹
                  </h3>
                  <div className={styles.detailDescBox}>
                    <p className={styles.detailDesc}>{activeData.description}</p>
                  </div>
                  {activeData.image && getTeamImage(activeData.image) && (
                    <img
                      src={getTeamImage(activeData.image)}
                      alt={`${team.name}${activeData.name}`}
                      className={styles.detailImage}
                    />
                  )}
                </div>
              ) : (
                <div className={styles.detailPlaceholder}>
                  將滑鼠移到左側活動上查看詳情
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 聯絡資訊與入隊方法 */}
      {team.contact && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>聯絡資訊與入隊方法</h2>
          <div className={styles.contactInfo}>
            {team.contact.intro && <p>{team.contact.intro}</p>}
            {team.contact.people?.map((person, i) => (
              <div key={i} className={styles.contactPerson}>
                {person.header && (
                  <p>
                    <strong>{person.header}</strong>
                  </p>
                )}
                {person.lines?.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            ))}
            {team.contact.note && (
              <p className={styles.contactNote}>{team.contact.note}</p>
            )}
            {aboutSrc && (
              <div className={styles.aboutImgContainer}>
                <img
                  src={aboutSrc}
                  alt={team.name}
                  className={styles.aboutImg}
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* 上一支／下一支 */}
      <nav className={styles.bottomNav}>
        {prevTeam ? (
          <Link to={`/team/${prevKey}`} className={styles.navBtn}>
            <span className={styles.navArrow}>←</span>
            <span className={styles.navName}>{prevTeam.name}</span>
          </Link>
        ) : (
          <span className={styles.navSpacer} />
        )}
        {nextTeam ? (
          <Link
            to={`/team/${nextKey}`}
            className={`${styles.navBtn} ${styles.navBtnNext}`}
          >
            <span className={styles.navName}>{nextTeam.name}</span>
            <span className={styles.navArrow}>→</span>
          </Link>
        ) : (
          <span className={styles.navSpacer} />
        )}
      </nav>
    </div>
  );
}
