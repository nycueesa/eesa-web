import React from "react";
import styles from "./Activities.module.css";

const timelineEvents = [
    {
        title: "電機週徵才",
        period: "02.26",
        type: "major",
        tags: ["校園招募", "春季"]
    },
    {
        title: "光舞表演",
        period: "03.15 - 03.16",
        type: "major",
        tags: ["晚會", "舞台"]
    },
    {
        title: "宿營徵才",
        period: "03.19 - 03.20",
        type: "major",
        tags: ["招募", "社團"]
    },
    {
        title: "電機週",
        period: "05.19 - 05.25",
        type: "major",
        tags: ["攤位", "系上品牌"]
    },
    {
        title: "大活動",
        period: "05.25",
        type: "major",
        tags: ["年度亮點"]
    },
    {
        title: "小畢典",
        period: "06.09",
        type: "minor",
        tags: ["典禮", "學生活動"]
    },
    {
        title: "暑假",
        period: "07.06 - 07.12",
        type: "minor",
        tags: ["夏季", "系隊訓練"]
    }
];

function Activities() {
    const majorCount = timelineEvents.filter((item) => item.type === "major").length;
    const minorCount = timelineEvents.length - majorCount;

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <p className={styles.kicker}>Activity Timeline</p>
                    <h1 className={styles.title}>系上活動一覽</h1>
                    <p className={styles.subtitle}>
                        依照時間軸整理的學期重點活動與系上特色活動，快速掌握每個月的重點。
                    </p>
                    <div className={styles.heroBadges}>
                        <span className={styles.badgeMain}>大活動 {majorCount} 件</span>
                        <span className={styles.badgeSub}>小活動 {minorCount} 件</span>
                    </div>
                </div>
                <div className={styles.heroCard}>
                    <p className={styles.heroCardTitle}>提示</p>
                    <p className={styles.heroCardText}>橘色圓點代表大活動，杏色圓點代表小活動。</p>
                    <p className={styles.heroCardText}>日曆期間為參考範例，可依實際檔期更新。</p>
                </div>
            </section>

            <section className={styles.timelineSection}>
                <div className={styles.timelineHeader}>
                    <h2 className={styles.sectionTitle}>時間軸</h2>
                    <p className={styles.sectionHint}>滑動檢視學期主要活動與檔期安排</p>
                </div>

                <div className={styles.timeline}>
                    {timelineEvents.map((item, idx) => (
                        <div className={styles.timelineRow} key={`${item.title}-${idx}`}>
                            <div className={styles.timeBlock}>
                                <span className={styles.period}>{item.period}</span>
                            </div>

                            <div className={styles.dotColumn}>
                                <span
                                    className={`${styles.dot} ${
                                        item.type === "major" ? styles.dotMajor : styles.dotMinor
                                    }`}
                                />
                                {idx !== timelineEvents.length - 1 && <span className={styles.connector} />}
                            </div>

                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <span
                                        className={`${styles.chip} ${
                                            item.type === "major" ? styles.chipMajor : styles.chipMinor
                                        }`}
                                    >
                                        {item.type === "major" ? "大活動" : "小活動"}
                                    </span>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                </div>
                                <p className={styles.cardDesc}>
                                    依據 Figma 節點內容抽取的示意文案，後續可替換為最新活動說明、報名連結或地點資訊。
                                </p>
                                <div className={styles.tagRow}>
                                    {item.tags?.map((tag) => (
                                        <span className={styles.tag} key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Activities;