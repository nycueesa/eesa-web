import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./EesaIntro.module.css";

export default function EesaIntro() {
    const navigate = useNavigate();

    const departments = [
        {
            name: "活企部",
            nameEn: "ACTIVITIES",
            description: "主辦聯誼、娛樂等活動，促進同學間交流。",
            image: "/intro/activities.jpg",
            link: "/intro/activities"
        },
        {
            name: "學術部",
            nameEn: "TECHNICAL",
            description: "負責規劃並推動學術活動，協助同學學習與成長。",
            image: "/intro/technical.jpg",
            link: "/intro/technical"
        },
        {
            name: "行銷部",
            nameEn: "PUBLICITY",
            description: "負責宣傳、設計與社群經營，提升學會能見度。",
            image: "/intro/publicity.jpg",
            link: "/intro/publicity"
        },
        {
            name: "人力部",
            nameEn: "OPERATION",
            description: "協助活動人力安排，負責志工招募與管理。",
            image: "/intro/operation.jpg",
            link: "/intro/operation"
        }
    ];

    return (
        <div className={styles.eesaIntroPage}>
            {/* EESA Title Banner */}
            <div className={styles.titleBanner}>
                <img
                    src="/intro/eesa-intro.jpg"
                    alt="EESA 系學會介紹"
                    className={styles.titleImage}
                />
            </div>

            <Container className={styles.mainContent}>
                {/* EESA Introduction Section */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>EESA（電機工程學系學會）</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.sectionText}>
                        致力於服務系上同學，舉辦各項活動並促進師生交流。學會組織包含會長與四大部門，分工合作推動各項事務。
                    </p>
                </div>

                {/* Departments Section */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>四大部門</h2>
                    <p className={styles.sectionText}>
                        學會下設四大部門，分工合作推動各項事務。點擊圖片以查看各部門詳細內容。
                    </p>
                </div>

                {/* Department Cards */}
                <div className={styles.departmentsGrid}>
                    {departments.map((dept, idx) => (
                        <div
                            key={idx}
                            className={styles.departmentCard}
                            onClick={() => dept.link && navigate(dept.link)}
                            style={{ cursor: dept.link ? "pointer" : "default" }}
                        >
                            <div className={styles.cardInner}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={dept.image}
                                        alt={dept.name}
                                        className={styles.departmentImage}
                                    />
                                </div>
                                <p className={styles.departmentDescription}>
                                    {dept.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* President Section */}
                <div className={styles.section}>
                    <div className={styles.divider}></div>
                    <h2 className={styles.sectionTitle}>會長的話</h2>
                    <p className={styles.sectionText}>會長的話</p>
                </div>

                {/* Contact Information Section */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>聯絡資訊</h2>
                    <ul className={styles.contactList}>
                        <li>電子信箱：eesa@nycu.edu.tw</li>
                        <li>Facebook：NYCU電機系學會</li>
                        <li>Instagram：@nycu_eesa</li>
                        <li>辦公室：工程五館 222 室</li>
                    </ul>
                </div>
            </Container>
        </div>
    );
}
