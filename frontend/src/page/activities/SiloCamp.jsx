import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SiloCamp.module.css';
import activityIntroShape from './imgae/活動介紹.svg';
import performanceIntroShape from './imgae/共練介紹.svg';
import teamIntroShape from './imgae/各組介紹.svg';

const SiloCamp = () => {
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
          <p className={styles.titleBlur}>系露營介紹</p>
          <p className={styles.titleBlur2}>系露營介紹</p>
          <p className={styles.title}>系露營介紹</p>
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
				系露營是電機系每年一次的大型系出遊。對大一新生而言，這是第一次成為營隊工人，體驗與朋友籌辦活動的樂趣；對學長姐來說，則是與大家團聚、認識新生、盡情玩樂的好時光。在籌會中，新生不僅能學習跑流程，更能藉此交流、發掘潛能，透過團隊合作結識夥伴，找到志同道合的朋友，一起瘋、努力、互相扶持。營期間帶領學長姐遊戲互動，也能了解未來方向，找到自己的路。簡而言之，系露營是電機新生的第一個營隊，讓大家一起籌辦、成長，創造屬於大一的難忘回憶。
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
              <h3 className={styles.performanceTitle}>--活動組--</h3>
              <p className={styles.text}>
                　　　　負責營隊中所有活動，擔任關主的角色，身為活動組的每個人各各身懷絕技，總是可以想出有趣好玩的活動，讓大家玩得開心。
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
              <h3 className={styles.performanceTitle}>--場美組--</h3>
              <p className={styles.text}>
                　　　　負責活動中以及劇的道具製作，身為場美組的人，總是很有創意，能夠化紙板為藝術，做出令人嘆為觀止的精美道具。
              </p>
            </div>
          </div>
        </section>

        {/* Incense Fan Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--美公組--</h3>
              <p className={styles.text}>
                　　　　負責擔任各個小隊員的再生父母親，替小隊員們服務，身為美麗公關組的人，總是特別出眾，可以掌控大家的食衣住行育樂，是讓人感到安心的存在。
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo9}`} />
              <div className={`${styles.photoFrame} ${styles.photo10}`} />
              <div className={`${styles.photoFrame} ${styles.photo11}`} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiloCamp;
