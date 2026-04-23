import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LightDance.module.css';
import activityIntroShape from './imgae/活動介紹.svg';
import performanceIntroShape from './imgae/共練介紹.svg';
import teamIntroShape from './imgae/各組介紹.svg';

const LightDance = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <button 
          className={styles.closeBtn} 
          onClick={() => navigate('/activities')}
          aria-label="關閉"
        >
          ✕
        </button>
        <div className={styles.titleGroup}>
          <p className={styles.titleBlur}>光舞介紹</p>
          <p className={styles.titleBlur2}>光舞介紹</p>
          <p className={styles.title}>光舞介紹</p>
        </div>
      </div>

      {/* Background Images */}
      {/* <div className={styles.bgGroup}>
        <div className={`${styles.bgImage} ${styles.bg1}`} />
        <div className={`${styles.bgImage} ${styles.bg2}`} />
        <div className={`${styles.bgImage} ${styles.bg3}`} />
        <div className={`${styles.bgImage} ${styles.bg4}`} />
      </div> */}

      {/* Main Content */}
      <div className={styles.content}>
        {/* Activity Introduction Section */}
        <section className={styles.section}>
          <div className={styles.introLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo1}`} />
              <div className={`${styles.photoFrame} ${styles.photo2}`} />
            </div>

            <div className={styles.introTextSection}>
              <div className={styles.introTitleWrap}>
                <img
                  src={activityIntroShape}
                  alt=""
                  className={styles.introTitleGraphic}
                />
                <span className={styles.introTitleText}>活動介紹</span>
              </div>
              
              <div className={`${styles.textBox} ${styles.introTextBox}`}>
              <p className={styles.text}>
				　　　　我們透過LED燈與光纖，並融合精湛的網頁設計和樹莓派控制技術，打造出一場前所未見在黑暗中的視覺與聽覺盛宴。在《光舞》中，燈光不僅是舞台的裝飾。我們利用前後端設計技術打造了一個燈光編輯軟體，配合音樂的節拍點，讓表演者身上的控制器使光纖燈光產生顏色或亮度變化，最後再搭配表演者的動作，使其成為一種獨一無二的表演形式。
              </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fire Ball Section */}
        <section className={styles.section}>
          <div className={styles.introTitleWrap}>
                <img
                  src={performanceIntroShape}
                  alt=""
                  className={styles.introTitleGraphic}
                />
                <span className={styles.introTitleText}>各組介紹</span>
          </div>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--系統組--</h3>
              <p className={styles.text}>
                　　　　負責硬體電路設計、韌體程式開發。
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo3}`} />
              <div className={`${styles.photoFrame} ${styles.photo4}`} />
              <div className={`${styles.photoFrame} ${styles.photo5}`} />
              <div className={`${styles.photoFrame} ${styles.photo6}`} />
            </div>
          </div>
        </section>

        {/* Fire Stick Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo7}`} />
              <div className={`${styles.photoFrame} ${styles.photo8}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--軟體組--</h3>
              <p className={styles.text}>
                　　　　負責光表網頁 UI 開發、API、資料庫維護。
              </p>
            </div>
          </div>
        </section>

        {/* Incense Fan Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--服裝&表演組--</h3>
              <p className={styles.text}>
                負責服裝設計製作、動作編排、舞者、舞台設計。
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo9}`} />
              <div className={`${styles.photoFrame} ${styles.photo10}`} />
              <div className={`${styles.photoFrame} ${styles.photo11}`} />
            </div>
          </div>
        </section>

        {/* Flag Section */}
        <section className={styles.section}>
          <div className={styles.flagLayout}>
            <div className={`${styles.photoFrame} ${styles.photo12}`} />
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--宣傳組--</h3>
              <p className={styles.text}>
                　　　　負責拍攝、剪輯宣傳影片、IG帳號推廣。
              </p>
            </div>
            <div className={`${styles.photoFrame} ${styles.photo13}`} />
            <div className={`${styles.photoFrame} ${styles.photo14}`} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LightDance;
