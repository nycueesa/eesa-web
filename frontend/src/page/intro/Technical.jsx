import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Technical.module.css";

export default function Technical() {
    const navigate = useNavigate();

    return (
        <div className={styles.technicalPage}>
            {/* Banner */}
            <div className={styles.banner}>
                <img
                    src="/intro/technical-banner.jpg"
                    alt="Technical Banner"
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
                                onClick={() => navigate("/intro/technical-activities")}
                                style={{ cursor: "pointer" }}
                            >
                                部門活動
                            </div>
                        </div>
                    </Col>

                    {/* Main Content */}
                    <Col md={10} className={styles.mainCol}>
                        {/* 學術部簡介 */}
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>學術部簡介</h2>
                            <div className={styles.sectionContent}>
                                <p className={styles.contentText}>
                                    大家好，我們是系學會的學術部，主要由大三以及大二的同學組成，平常主要會協助系學會偏學術性質的活動。
                                </p>
                                <p className={styles.contentText}>
                                    我們很希望可以透過自己幫助到系上的同學們，如果有你認為我們可以協助的內容，歡迎到下方的email與我們聯繫，最後祝大家考試順利杜絕爆卷從你我做起
                                </p>
                            </div>
                        </section>

                        {/* 學術部 合照 */}
                        <div className={styles.divider}></div>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>學術部 合照</h2>
                            <div className={styles.photoSection}>
                                <div className={styles.photoPlaceholder}>
                                    <img
                                        src="/intro/technical-group-photo.jpg"
                                        alt="學術部合照"
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
