import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

export default function Main() {
    const navigate = useNavigate();

    return (
        <div className={styles.mainPage}>
            {/* Decorations */}
            <img src="/main/moon.png" alt="" className={`${styles.decor} ${styles.decorMoon}`} />
            <img src="/main/lightning.png" alt="" className={`${styles.decor} ${styles.decorLightning}`} />
            <img src="/main/bubbles.png" alt="" className={`${styles.decor} ${styles.decorBubbles}`} />

            {/* Main Hero Illustration */}
            <div className={styles.heroContainer}>
                <div className={styles.heroIllustration}>
                    <img
                        src="/main/hero-illustration.png"
                        alt="系學會導覽"
                        className={styles.heroImage}
                    />

                    {/* Clickable areas for navigation */}
                    <div className={styles.heroLinks}>
                        <button
                            className={`${styles.heroLink} ${styles.linkEesa}`}
                            onClick={() => navigate('/intro/eesa-intro')}
                            aria-label="系學會"
                        />
                        <button
                            className={`${styles.heroLink} ${styles.linkActivities}`}
                            onClick={() => navigate('/event/event-intro')}
                            aria-label="系上活動"
                        />
                        <button
                            className={`${styles.heroLink} ${styles.linkResources}`}
                            onClick={() => navigate('/resource/prevexam')}
                            aria-label="學習資料"
                        />
                        <button
                            className={`${styles.heroLink} ${styles.linkTeam}`}
                            onClick={() => navigate('/team')}
                            aria-label="系隊"
                        />
                        <button
                            className={`${styles.heroLink} ${styles.linkContact}`}
                            onClick={() => navigate('/file/calendar')}
                            aria-label="聯絡我們"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
