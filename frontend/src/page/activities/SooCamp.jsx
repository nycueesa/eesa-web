import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SooCamp.module.css';
import activityIntroShape from './imgae/活動介紹.svg';
import performanceIntroShape from './imgae/共練介紹.svg';
import teamIntroShape from './imgae/各組介紹.svg';

const SooCamp = () => {
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
          <p className={styles.titleBlur}>宿營介紹</p>
          <p className={styles.titleBlur2}>宿營介紹</p>
          <p className={styles.title}>宿營介紹</p>
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
				　　　　交大電機系宿營是一場屬於新鮮人的盛大冒險！在這三天兩夜中，你將與未來的同學們一同挑戰團康、闖關任務、晚會表演與夜間活動，從陌生到熟悉、從拘謹到瘋狂，體驗滿滿的歡笑與感動。學長姐們精心設計每個環節，讓你在遊戲中認識系上文化，感受EE人特有的熱血與創意。無論你是內向還是外向，都能在這裡找到屬於你的夥伴。宿營不只是迎新，更是你大學生活的第一道火花——一起啟程，創造只屬於交大電機的青春回憶！
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
                　　　　負責營隊中所有活動，擔任關主的角色，並設計各種活動的故事，展現演技和創造力。
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
                　　　　負責活動中以及劇的道具製作，身為美宣組的人，能夠把活動組開出的任何神奇道具都實現，是活動中的魔法師。
              </p>
            </div>
          </div>
        </section>

        {/* Incense Fan Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--公關組--</h3>
              <p className={styles.text}>
                　　　　負責擔任各個小隊員的再生父母，幫他們把屎把尿，協助活動進程帶隊，並和小隊員成為很好的朋友。
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
                　　　　負責活動的架場、音控以及燈光等幕後工作，並處理各種場地技術問題。
              </p>
            </div>
            <div className={`${styles.photoFrame} ${styles.photo13}`} />
            <div className={`${styles.photoFrame} ${styles.photo14}`} />
          </div>
        </section>

        {/* Snake Dance Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--生活組--</h3>
              <p className={styles.text}>
                　　　　負責訂餐和幫大家準備好食物，以及餐後收拾。
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo15}`} />
              <div className={`${styles.photoFrame} ${styles.photo16}`} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SooCamp;
