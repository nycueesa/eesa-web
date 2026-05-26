import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Timeline.module.css";
import majorIcon from "../activities/imgae/timeline/大活動.svg";
import minorIcon from "../activities/imgae/timeline/小活動.svg";
import arrowIcon from "../activities/imgae/sideIntro/arrow-right-circle.svg";
import xuanke1 from "../activities/imgae/sideIntro/選課大會_1.png";
import xuanke2 from "../activities/imgae/sideIntro/選課大會_2.png";
import pobing1 from "../activities/imgae/sideIntro/破冰大會_1.jpg";
import pobing2 from "../activities/imgae/sideIntro/破冰大會_2.jpg";
import pobing3 from "../activities/imgae/sideIntro/破冰大會_3.jpg";
import pobing4 from "../activities/imgae/sideIntro/破冰大會_4.jpg";
import fenjia1 from "../activities/imgae/sideIntro/分家大會_1.jpg";
import fenjia2 from "../activities/imgae/sideIntro/分家大會_2.jpg";
import fenjia3 from "../activities/imgae/sideIntro/分家大會_3.jpg";
import fenjia4 from "../activities/imgae/sideIntro/分家大會_4.jpg";
import xinsheng1 from "../activities/imgae/sideIntro/新生晚會_1.jpg";
import xinsheng2 from "../activities/imgae/sideIntro/新生晚會_2.jpg";
import xinsheng3 from "../activities/imgae/sideIntro/新生晚會_3.jpg";
import xinsheng4 from "../activities/imgae/sideIntro/新生晚會_4.jpg";
import biji1 from "../activities/imgae/sideIntro/小畢典_1.jpg";
import biji2 from "../activities/imgae/sideIntro/小畢典_2.jpg";
import biji3 from "../activities/imgae/sideIntro/小畢典_3.jpg";
import biji4 from "../activities/imgae/sideIntro/小畢典_4.jpg";
import xikao1 from "../activities/imgae/sideIntro/系烤_1.jpg";
import xikao2 from "../activities/imgae/sideIntro/系烤_2.jpg";

const timelineData = [
  {
    month: "08", year: "2024",
    events: [
      { date: "08.27", title: "選課大會", type: "major", intro: { photos: [xuanke1, xuanke2], description: "學長姐將分享下半學期各必選修課程的教學內容與教授風格，幫助同學在選課時更了解課程特色、找到最適合自己的課。" } },
      { date: "08.28", title: "破冰大會", type: "major", intro: { photos: [pobing1, pobing2, pobing3, pobing4], description: "破冰大會是給電機大一新生參加的第一個活動，玩一些團康遊戲、大家一起闖關，是一個能夠認識其他系上同學的好機會" } },
    ],
  },
  {
    month: "09",
    events: [
      { date: "09.05", title: "分家大會", type: "minor", intro: { photos: [fenjia1, fenjia2, fenjia3, fenjia4], description: "剛上大學對選課系統不了解嗎？不知道自己適合選哪個教授嗎？想在期中期末考吃到歐趴糖嗎？有好多問題想問不知道問誰嗎？那就來參加電機分家大會吧！抽完直屬後就能滿足大一新鮮人大部分的疑問！當天還會有免費宵夜跟飲料哦！" } },
    ],
  },
  {
    month: "10",
    events: [
      { date: "10.13", title: "新生晚會", type: "major", intro: { photos: [xinsheng1, xinsheng2, xinsheng3, xinsheng4], description: "新生晚會顧名思義就是一個辦給新生的晚會，給你一個舞台讓大家可以在台上發光發熱，給大家有一個發揮想像力的空間，讓心中潛藏的戲精魂發掘出來的好時機" } },
      { date: "10.15 – 10.16", title: "抓馬徵才", type: "minor" },
      { date: "10.18 – 10.20", title: "宿營營期", type: "major", path: "/activities/soocamp" },
      { date: "10.30", title: "系露營徵才", type: "minor" },
    ],
  },
  {
    month: "11",
    events: [
      { date: "11.21 – 11.22", title: "電機營徵才", type: "minor" },
      { date: "11.23", title: "系烤", type: "minor", intro: { photos: [xikao1, xikao2], description: "系烤是電機系每年最熱鬧的活動之一，大家一起準備烤肉、玩遊戲、聊天交朋友。透過輕鬆的氣氛與美食，不同年級的同學都能互相認識、交流，留下歡笑與回憶，是系上最有人情味的傳統活動之一。" } },
      { date: "11.24", title: "抓馬比賽", type: "major", path: "/activities/drama" },
      { date: "11.29", title: "耶舞", type: "minor" },
    ],
  },
  { isSeason: true, label: "寒假" },
  {
    month: "02", year: "2025",
    events: [
      { date: "02.26", title: "電機週徵才", type: "minor" },
    ],
  },
  {
    month: "03",
    events: [
      { date: "03.15 – 03.16", title: "系露營期", type: "minor" },
      { date: "03.19 – 03.20", title: "宿營徵才", type: "minor" },
    ],
  },
  {
    month: "05",
    events: [
      { date: "05.19 – 05.25", title: "電機週", type: "major"},
      { date: "05.25", title: "光舞表演", type: "major", path: "/activities/lightdance" },
    ],
  },
  {
    month: "06",
    events: [
      { date: "06.09", title: "小畢典", type: "minor", intro: { photos: [biji1, biji2, biji3, biji4], description: "小畢典是由辦給電機系大四畢業生的溫馨活動。在正式畢業典禮後，我們以更貼近系上的方式，一同回顧四年來的點點滴滴。活動中將舉行頒獎、撥穗儀式，並安排精彩的回顧影片，讓每位畢業生都能留下屬於電機人的最後回憶。讓我們一起，在小畢典畫下青春最亮眼的句點！" } },
    ],
  },
  { isSeason: true, label: "暑假" },
  {
    month: "07",
    events: [
      { date: "07.06 – 07.12", title: "電機營營期", type: "major", path: "/activities/eecamp" },
    ],
  },
];

export default function Timeline() {
  const navigate = useNavigate();
  const [activeIntro, setActiveIntro] = useState(null);
  const [photoPage, setPhotoPage] = useState(0);

  useEffect(() => {
    setPhotoPage(0);
  }, [activeIntro]);

  const handleEventClick = (event) => {
    if (event.path) {
      window.scrollTo(0, 0);
      navigate(event.path);
      return;
    }
    if (!event.intro) return;
    setActiveIntro((prev) => (prev?.title === event.title ? null : event));
  };

  const handleArrowClick = (e, totalPhotos) => {
    e.stopPropagation();
    const maxPage = Math.ceil(totalPhotos / 2) - 1;
    setPhotoPage((p) => (p >= maxPage ? 0 : p + 1));
  };

  return (
    <div className={styles.page}>
      <div className={styles.layout}>
        <div className={styles.timelineCol}>
          <div className={styles.timeline}>
            {timelineData.map((group, i) =>
              group.isSeason ? (
                <div key={i} className={styles.monthGroup}>
                  <div className={styles.monthPin}>
                    <div className={styles.seasonBubble}>{group.label}</div>
                  </div>
                </div>
              ) : (
                <div key={i} className={styles.monthGroup}>
                  <div className={styles.monthPin}>
                    {group.year && <span className={styles.yearBadge}>{group.year}</span>}
                    <div className={styles.monthBubble}>{group.month}</div>
                  </div>
                  <div className={styles.eventList}>
                    {group.events.map((event, j) => (
                      <div
                        key={j}
                        className={`${styles.eventRow} ${event.type === "major" ? styles.eventRowMajor : styles.eventRowMinor}${(event.intro || event.path) ? ` ${styles.eventRowClickable}` : ""}`}
                        onClick={() => handleEventClick(event)}
                      >
                        <img
                          src={event.type === "major" ? majorIcon : minorIcon}
                          alt={event.type === "major" ? "大活動" : "小活動"}
                          className={styles.eventDot}
                        />
                        <div className={styles.eventInfo}>
                          <span className={styles.eventDate}>{event.date}</span>
                          <span className={styles.eventTitle}>{event.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {activeIntro && (
          <div className={styles.introSide}>
            <div className={styles.introCard}>
              <button
                className={styles.introClose}
                onClick={() => setActiveIntro(null)}
                aria-label="關閉"
              >
                ✕
              </button>
              <h3 className={styles.introTitle}>{activeIntro.title}</h3>
              <div className={styles.introPhotoRow}>
                {activeIntro.intro.photos
                  .slice(photoPage * 2, photoPage * 2 + 2)
                  .map((src, idx) => (
                    <div key={idx} className={styles.introPhotoFrame}>
                      <img src={src} alt="" className={styles.introPhoto} />
                    </div>
                  ))}
                {activeIntro.intro.photos.length > 2 && (
                  <button
                    className={styles.introArrow}
                    onClick={(e) => handleArrowClick(e, activeIntro.intro.photos.length)}
                  >
                    <img src={arrowIcon} alt="下一頁" />
                  </button>
                )}
              </div>
              <p className={styles.introDesc}>{activeIntro.intro.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
