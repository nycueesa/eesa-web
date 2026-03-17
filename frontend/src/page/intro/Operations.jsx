import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Operations.module.css";

export default function Operations() {
    const navigate = useNavigate();

    return (
        <div className={styles.operationsPage}>
            {/* Banner */}
            <div className={styles.banner}>
                <img
                    src="/intro/operations-banner.jpg"
                    alt="Operations Banner"
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
                            <div className={`${styles.sidebarLabel} ${styles.active}`}>
                                部門介紹
                            </div>
                            <div
                                className={styles.sidebarLabel}
                                onClick={() => navigate("/intro/operations-activities")}
                                style={{ cursor: "pointer" }}
                            >
                                部門活動
                            </div>
                            <div className={styles.sidebarLabel}>
                                學習能力
                            </div>
                            <div className={styles.sidebarLabel}>
                                體驗談
                            </div>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col md={10} className={styles.mainCol}>
                        {/* 人力部簡介 */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>人力部簡介</h2>
                            <div className={styles.sectionContent}>
                                <p className={styles.contentText}>
                                    歡迎來到人力部，人力部是個快樂吃飯開心聊八卦的地方！除了幾乎每周固定的部聚讓大家可以吃好喝好以外，我們還有一個環境很舒服，設備很齊全的部窩可以讓你休息！
                                </p>
                                <p className={styles.contentText}>
                                    歡迎大家進入人力部裡學習如何當個優秀的領導人，或是增進自己不論是簡報或是發表的能力！
                                </p>
                            </div>
                        </section>

                        {/* 人力部 合照 */}
                        <div className={styles.divider}></div>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>人力部 合照</h2>
                            <div className={styles.photoSection}>
                                <div className={styles.photoPlaceholder}>
                                    <img
                                        src="/intro/operations-group-photo.jpg"
                                        alt="人力部合照"
                                        className={styles.groupPhoto}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* 部員名單 */}
                        <div className={styles.divider}></div>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>部員名單</h2>
                            <div className={styles.sectionContent}>
                                <p className={styles.contentText}>
                                    致力於服務系上同學，舉辦各項活動並促進師生交流。組織包含會長與四大部門
                                </p>
                            </div>
                        </section>

                        <div className={styles.divider}></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
