import React from "react";
import styles from "./EesaIntro.module.css"

export default function EesaIntro(){

    return (
        
        <div className={styles.eesaIntroPage}>
            <h1>EESA 系學會介紹</h1>
            <h1>Hello World</h1>
            <section className={styles.introSection}>
                <p>
                    EESA（電機工程學系學會）致力於服務系上同學，舉辦各項活動並促進師生交流。學會組織包含會長與四大部門，分工合作推動各項事務。
                </p>
            </section>
            <section className={styles.presidentSection}>
                <h2>會長</h2>
                <p>
                    負責統籌學會運作、協調各部門並代表學會對外聯繫。
                </p>
            </section>
            <section className={styles.departmentsSection}>
                <h2>四大部門</h2>
                <div className={styles.departmentsList}>
                    <div className={styles.departmentCard}>
                        <h3>學術部</h3>
                        {/* 學術部詳細介紹預留 */}
                    </div>
                    <div className={styles.departmentCard}>
                        <h3>活器部</h3>
                        {/* 活器部詳細介紹預留 */}
                    </div>
                    <div className={styles.departmentCard}>
                        <h3>人力部</h3>
                        {/* 人力部詳細介紹預留 */}
                    </div>
                    <div className={styles.departmentCard}>
                        <h3>行銷部</h3>
                        {/* 行銷部詳細介紹預留 */}
                    </div>
                </div>
            </section>
        </div>
    )
}