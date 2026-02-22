import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./SoftwareCourse.module.css";

export default function SoftwareCourse() {
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
                            <h2 className={styles.activityTitle}>一日營軟體課程</h2>

                            <div className={styles.contentRow}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src="/intro/activities/software-course.jpg"
                                        alt="一日營軟體課程"
                                        className={styles.activityImage}
                                    />
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>
                                        在寒假的時候會在北中南的學校舉行一日營，而軟體組負責有關程式的課程，並且擔任講師。
                                    </p>
                                    <p className={styles.description}>
                                        上課內容主要是從頭教導程式的語法並設計一個小實作給高中生們實作。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className={styles.bottomDivider}></div>

                        {/* Navigation Buttons */}
                        <div className={styles.navButtons}>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/hardware-course")}
                                style={{ cursor: "pointer" }}
                            >
                                上一則
                            </div>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/singles-day")}
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
