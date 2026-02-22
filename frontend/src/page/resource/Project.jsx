import { useState } from "react";
import styles from "./Project.module.css";

/* ===== 匯入 icon 圖片 ===== */
import courseIcon from "../../assets/project/course.png";
import scholarshipIcon from "../../assets/project/scholarship.png";
import exchangeIcon from "../../assets/project/exchange.png";
import researchIcon from "../../assets/project/research.png";

/* ===== Tabs 設定 ===== */
const TABS = [
  {
    key: "course",
    label: "關於修課",
    title: "課程資訊",
    icon: courseIcon,
    items: [
        {
            label: "課程特色",
            href: "https://iece.dee.nycu.edu.tw/pages.php?pa=feature&locale=tw",
        },
        {
            label: "完整修課規定",
            href: "https://dee.nycu.edu.tw/pages.php?pa=stu_college_elective&locale=tw",
        },
        {
            label: "歐趴糖",
            href: "https://www.1111opt.com.tw/",
        },
        {
            label: "課程系統連結",
            href: "https://dee.nycu.edu.tw/pages.php?pa=stu_college_links&locale=tw",
        },
    ],
  },
  {
    key: "scholarship",
    label: "獎助學金",
    title: "獎學金",
    icon: scholarshipIcon,
    items: [
        {
            label: "獎學金",
            href: "https://dee.nycu.edu.tw/pages.php?pa=stu_college_scholarship&locale=tw",
        },
    ],
  },
  {
    key: "exchange",
    label: "交換資訊",
    title: "出國交換",
    icon: exchangeIcon,
    items: [
        {
            label: "出國交換",
            href: "https://oia.nycu.edu.tw/oia/ch/app/folder/275",
        },
    ],
  },
  {
    key: "research",
    label: "研究所",
    title: "專題資訊",
    icon: researchIcon,
    items: [
      {
        label: "專題資訊",
        href: "#",
      }
    ],
  },
];

export default function Project() {
  const [activeKey, setActiveKey] = useState("course");
  const currentTab = TABS.find(tab => tab.key === activeKey);

  return (
    <div className={styles.page}>
      {/* ===== 標題 ===== */}
      <h1 className={styles.title}>學習資料</h1>

      {/* ===== Tabs ===== */}
      <div className={styles.tabs}>
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`${styles.tab} ${
              activeKey === tab.key ? styles.active : ""
            }`}
            onClick={() => setActiveKey(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ===== 卡片內容 ===== */}
      <div className={styles.card}>
        {/* 左側 */}
        <div className={styles.left}>


        <ul className={styles.list}>
            {currentTab.items.map(item => (
                <li key={item.label}>
                <a
                    href={item.href}
                    className={styles.listLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                    src={currentTab.icon}
                    alt=""
                    className={styles.listIcon}
                    />
                    <span>{item.label}</span>
                </a>
                </li>
            ))}
        </ul>

        </div>

        {/* 中間分隔線 */}
        <div className={styles.divider} />

        {/* 右側（之後擴充用） */}
        <div className={styles.right}>
          {/* 之後可放詳細說明、連結、圖片 */}
        </div>
      </div>
    </div>
  );
}
