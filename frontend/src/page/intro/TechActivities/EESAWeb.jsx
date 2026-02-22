import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./EESAWeb.module.css";

export default function EESAWeb() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            {/* Banner */}
            <div className={styles.banner}>
                <img
                    src="/intro/technical-banner.jpg"
                    alt="學術部 TECHNICAL"
                    className={styles.bannerImage}
                />
            </div>

            <Container fluid className={styles.contentContainer}>
                <Row>
                    {/* Left Sidebar Navigation */}
                    <Col md={2} className={styles.sidebarCol}>
                        <div className={styles.sidebar}>
                            <div className={styles.sidebarIcon}>
                                <img src="/intro/all_inbox.svg" alt="inbox icon" />
                            </div>
                            <div
                                className={styles.sidebarLabel}
                                onClick={() => navigate("/intro/eesa-intro")}
                                style={{ cursor: "pointer" }}
                            >
                                首頁
                            </div>
                            <div
                                className={styles.sidebarLabel}
                                onClick={() => navigate("/intro/technical")}
                                style={{ cursor: "pointer" }}
                            >
                                部門介紹
                            </div>
                            <div
                                className={styles.sidebarLabel}
                                onClick={() => navigate("/intro/technical-activities")}
                                style={{ cursor: "pointer" }}
                            >
                                部門活動
                            </div>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col md={10} className={styles.mainCol}>
                        {/* Activity Detail */}
                        <section className={styles.activityDetail}>
                            <h2 className={styles.activityTitle}>系學會網頁</h2>

                            <div className={styles.contentRow}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src="/intro/activities/department-website.jpg"
                                        alt="系學會網頁"
                                        className={styles.activityImage}
                                    />
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>
                                        負責系學會各類網站的前後端開發與維護，致力於運用軟體技術，清楚呈現系上資源與活動，作為學生、教授與各界間的資訊橋樑。另外也整合歷屆學術部的整理的實驗室資料，提供同學們專題教授的資訊。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className={styles.bottomDivider}></div>

                        {/* Navigation Buttons */}
                        <div className={styles.navButtons}>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/high-school-visit")}
                                style={{ cursor: "pointer" }}
                            >
                                下一則
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
