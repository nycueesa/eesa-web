import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Drama.module.css';
import activityIntroShape from './imgae/活動介紹.svg';
import performanceIntroShape from './imgae/共練介紹.svg';
import teamIntroShape from './imgae/各組介紹.svg';

const Drama = () => {
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
          <p className={styles.titleBlur}>電機營介紹</p>
          <p className={styles.titleBlur2}>電機營介紹</p>
          <p className={styles.title}>電機營介紹</p>
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
                　　　　       抓馬盃是交大一年一度、專屬大一新生的戲劇競賽活動，也是許多人第一次主辦或登上舞台的契機。活動由各系自由報名，而電機系將由學長姐協助學弟妹進行準備，參賽者可從劇本創作、舞台演出、燈光音效設計到美術宣傳全面參與。這不只是比賽，更是一場合作、創意與勇氣的洗禮。透過抓馬盃，你能結識同屆夥伴、跨系交流、發現表演與舞台設計的熱情，從緊張的排練到閃耀的演出，感受「上台那一刻的光」。無論你是內向的觀眾、還是渴望成為焦點的主角，抓馬盃都會給你一個綻放的舞台。
                <br/>
                　　　　營隊籌備的過程，會認識許多志同道合的朋友，大家一起努力，一起認真往同個目標邁進，從無到有一同打造出屬於我們的營隊。在這裡收穫的不只是友誼，更多的是辛苦過後滿滿的成就感。
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
              <h3 className={styles.performanceTitle}>--演員組--</h3>
              <p className={styles.text}>
                　　　　負責舞台表演、角色詮釋與台詞練習，展現戲劇張力與舞台魅力。
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
              <h3 className={styles.performanceTitle}>--美宣組--</h3>
              <p className={styles.text}>
                　　　　設計主視覺、宣傳文案、道具與妝造，打造舞台整體風格。
              </p>
            </div>
          </div>
        </section>

        {/* Incense Fan Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--編劇組--</h3>
              <p className={styles.text}>
                       構思劇情、撰寫劇本、協調導向，掌握全劇節奏與主題精神。
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
              <h3 className={styles.performanceTitle}>--場控組--</h3>
              <p className={styles.text}>
                       負責燈光、音效與後台運作，確保演出流程流暢無誤。
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

export default Drama;
