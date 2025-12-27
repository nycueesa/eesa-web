import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./HardwareCourse.module.css";

export default function HardwareCourse() {
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
                            <h2 className={styles.activityTitle}>一日營硬體課程</h2>

                            <div className={styles.contentRow}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src="/intro/activities/hardware-course.jpg"
                                        alt="一日營硬體課程"
                                        className={styles.activityImage}
                                    />
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>
                                        在寒假的時候會在北中南的學校舉行一日營，而硬體組負責硬體電路相關的課程。
                                    </p>
                                    <p className={styles.description}>
                                        從接麵包板設計電路再到pcb實作，做出一個有趣的小電路給高中生實作並且到他們學校教他們電路實作。
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
                                上一則
                            </div>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/software-course")}
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
