import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./EesaIntro.module.css";

export default function EesaIntro() {
    const navigate = useNavigate();

    // 定義三個狀態：儲存資料、載入狀態、錯誤訊息
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // 當組件載入時，向後端發送請求抓取部門資料
    useEffect(() => {
        // 請確認你的後端伺服器 (5588 port) 有正常運作
        fetch("http://localhost:5588/api/departments")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("網路回應不正常");
                }
                return res.json();
            })
            .then((data) => {
                setDepartments(data); // 將抓到的資料存入 state
                setIsLoading(false);  // 解除載入狀態
            })
            .catch((err) => {
                console.error("抓取部門資料失敗:", err);
                setError("無法載入部門資料，請稍後再試。");
                setIsLoading(false);
            });
    }, []);

    return (
        <div className={styles.eesaIntroPage}>
            {/* ================= EESA Title Banner ================= */}
            <div className={styles.titleBanner}>
                <img
                    // 這裡的橫幅圖你也可以選擇從後端抓，或者維持原樣放在前端 public
                    src="/intro/eesa-intro.jpg" 
                    alt="EESA 系學會介紹"
                    className={styles.titleImage}
                />
            </div>

            <Container className={styles.mainContent}>
                {/* ================= EESA Introduction Section ================= */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>EESA（電機工程學系學會）</h2>
                    <div className={styles.divider}></div>
                    <p className={styles.sectionText}>
                        致力於服務系上同學，舉辦各項活動並促進師生交流。學會組織包含會長與四大部門，分工合作推動各項事務。
                    </p>
                </div>

                {/* ================= Departments Section ================= */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>四大部門</h2>
                    <p className={styles.sectionText}>
                        學會下設四大部門，分工合作推動各項事務。點擊圖片以查看各部門詳細內容。
                    </p>
                </div>

                {/* ====== 動態渲染部門卡片區塊 ====== */}
                {/* 1. 處理載入中狀態 */}
                {isLoading && (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                        <p>正在載入部門資訊...</p>
                    </div>
                )}

                {/* 2. 處理錯誤狀態 */}
                {error && (
                    <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
                        <p>{error}</p>
                    </div>
                )}

                {/* 3. 成功取得資料後，動態渲染卡片 */}
                {!isLoading && !error && (
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
                                    <h4 style={{ marginTop: '15px', fontWeight: 'bold' }}>{dept.name} ({dept.nameEn})</h4>
                                    <p className={styles.departmentDescription}>
                                        {dept.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* ================= President Section ================= */}
                <div className={styles.section}>
                    <div className={styles.divider}></div>
                    <h2 className={styles.sectionTitle}>會長的話</h2>
                    <p className={styles.sectionText}>會長的話</p>
                </div>

                {/* ================= Contact Information Section ================= */}
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