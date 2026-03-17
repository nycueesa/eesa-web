import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./TechnicalActivities.module.css";

export default function TechnicalActivities() {
    const navigate = useNavigate();

    const activities = [
        {
            name: "系學會網頁",
            image: "/intro/activities/department-website.jpg",
            link: "/intro/technical-activities/eesa-web"
        },
        {
            name: "高中生參訪",
            image: "/intro/activities/high-school-visit.jpg",
            link: "/intro/technical-activities/high-school-visit"
        },
        {
            name: "一日營硬體課程",
            image: "/intro/activities/hardware-course.jpg",
            link: "/intro/technical-activities/hardware-course"
        },
        {
            name: "一日營軟體課程",
            image: "/intro/activities/software-course.jpg",
            link: "/intro/technical-activities/software-course"
        },
        {
            name: "光棍",
            image: "/intro/activities/singles-day.jpg",
            link: "/intro/technical-activities/singles-day"
        },
        {
            name: "選課大會",
            image: "/intro/activities/course-selection.jpg",
            link: "/intro/technical-activities/course-selection"
        }
    ];

    return (
        <div className={styles.technicalActivitiesPage}>
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
                                回上一頁
                            </div>
                            <div
                                className={styles.sidebarLabel}
                                onClick={() => navigate("/intro/technical")}
                                style={{ cursor: "pointer" }}
                            >
                                部門介紹
                            </div>
                            <div className={`${styles.sidebarLabel} ${styles.active}`}>
                                部門活動
                            </div>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col md={10} className={styles.mainCol}>
                        {/* 學術部 活動介紹 */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>學術部 活動介紹＆工作成果</h2>
                            <p className={styles.sectionDescription}>
                                點擊活動名稱以了解更多關於該項活動的資訊
                            </p>
                            <div className={styles.divider}></div>
                        </section>

                        {/* Activities Grid */}
                        <div className={styles.activitiesGrid}>
                            {activities.map((activity, idx) => (
                                <div
                                    key={idx}
                                    className={styles.activityCard}
                                    onClick={() => activity.link && navigate(activity.link)}
                                    style={{ cursor: activity.link ? "pointer" : "default" }}
                                >
                                    <h3 className={styles.activityTitle}>{activity.name}</h3>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={activity.image}
                                            alt={activity.name}
                                            className={styles.activityImage}
                                        />
                                    </div>
                                    <div className={styles.cardDivider}></div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.bottomDivider}></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
