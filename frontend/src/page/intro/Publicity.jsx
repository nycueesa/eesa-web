import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Publicity.module.css";

export default function Publicity() {
    const navigate = useNavigate();

    return (
        <div className={styles.publicityPage}>
            {/* Banner */}
            <div className={styles.banner}>
                <img
                    src="/intro/publicity-banner.jpg"
                    alt="Publicity Banner"
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
                                onClick={() => navigate("/intro/publicity-activities")}
                                style={{ cursor: "pointer" }}
                            >
                                部門活動
                            </div>
                            <div className={styles.sidebarLabel}>
                                學習能力
                            </div>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col md={10} className={styles.mainCol}>
                        {/* 行銷部簡介 */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>行銷部簡介</h2>
                            <div className={styles.sectionContent}>
                                <p className={styles.contentText}>
                                    行銷部如同系學會的創意部門，主要負責社群帳號的經營管理、貼文製作、攝影紀錄，系服與尊榮小物也是出自行銷部。
                                </p>
                                <p className={styles.contentText}>
                                    我們透過不同宣傳方式，讓電機系的特色及活動被更多系上同學看見。
                                </p>
                            </div>
                        </section>

                        {/* 行銷部 合照 */}
                        <div className={styles.divider}></div>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>行銷部 合照</h2>
                            <div className={styles.photoSection}>
                                <div className={styles.photoPlaceholder}>
                                    <img
                                        src="/intro/publicity-group-photo.jpg"
                                        alt="行銷部合照"
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
