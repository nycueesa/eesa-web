import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./HighSchoolVisit.module.css";

export default function HighSchoolVisit() {
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
                            <h2 className={styles.activityTitle}>高中生參訪</h2>

                            <div className={styles.contentRow}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src="/intro/activities/high-school-visit.jpg"
                                        alt="高中生參訪"
                                        className={styles.activityImage}
                                    />
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>
                                        協助高中生交大電機系參訪活動，由學術部帶領同學，從電路原理認識、電子元件認識到最後焊接我們設計的PCB電路板，透過實際動手實作一份電機微專題，激發來參訪的高中生對電機領域的學習興趣。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className={styles.bottomDivider}></div>

                        {/* Navigation Buttons */}
                        <div className={styles.navButtons}>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/eesa-web")}
                                style={{ cursor: "pointer" }}
                            >
                                上一則
                            </div>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/hardware-course")}
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
