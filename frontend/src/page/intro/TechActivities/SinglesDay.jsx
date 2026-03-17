import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./SinglesDay.module.css";

export default function SinglesDay() {
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
                            <h2 className={styles.activityTitle}>光棍</h2>

                            <div className={styles.contentRow}>
                                <div className={styles.imageContainer}>
                                    <img
                                        src="/intro/activities/singles-day.jpg"
                                        alt="光棍"
                                        className={styles.activityImage}
                                    />
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>
                                        自行研發並製作光棍，滿足電機系內迎新、宿營、高中生營隊等活動的表演要求。
                                    </p>
                                    <p className={styles.description}>
                                        不僅節省活動器材租借開銷，未來還可租借給外系，為系學會創造收入，將創意轉化為資源。
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className={styles.bottomDivider}></div>

                        {/* Navigation Buttons */}
                        <div className={styles.navButtons}>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/software-course")}
                                style={{ cursor: "pointer" }}
                            >
                                上一則
                            </div>
                            <div
                                className={styles.navButton}
                                onClick={() => navigate("/intro/technical-activities/course-selection")}
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
