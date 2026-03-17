import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EEweek_1.module.css';
import activityIntroShape from './imgae/活動介紹.svg';

const EEweek_1 = () => {
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
          <p className={styles.titleBlur}>電機週介紹</p>
          <p className={styles.titleBlur2}>電機週介紹</p>
          <p className={styles.title}>電機週介紹</p>
        </div>
      </div>

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
                  　　　　交大電機週是電機系一年中最盛大的慶典，由系學會精心策劃、全系共同參與。這一週不僅是屬於電機人的節日，更是一場結合學術與創意的盛會。在電機週中，同學們能以輕鬆的方式探索電機的多元面貌，從開放實驗室參觀、企業參訪，到與學長姐近距離交流的圓桌會議，都讓人更深入理解電機領域的廣度與未來發展。並且，近期正致力於光舞研發，以實作展現創新精神，將科技與藝術結合，為活動增添獨特亮點。最終，電機週將以熱鬧精彩的「電機之夜」畫下完美句點，凝聚所有參與者的熱情與回憶。對於想認識電機、體驗系上文化的同學來說，電機週不僅是一場活動，更是一段屬於電機人的共同記憶與驕傲。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className={styles.navSection}>
          <div className={styles.navButtons}>
            <button className={styles.navBtn}>各組介紹</button>
            <button className={styles.navBtn}>細項活動</button>
            <button className={styles.navBtn}>電夜表演</button>
          </div>
        </section>

        {/* 儀隊 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---儀隊---</h3>
              <p className={styles.text}>
                　　　　儀隊表演象徵著紀律、榮耀與團隊精神，每一個動作都源自日復一日的訓練與堅持。整齊劃一的步伐、俐落精準的槍法、毫無誤差的轉向與隊形變化，展現出無與倫比的默契與毅力。他們不僅僅是表演者，更是精神與態度的象徵。透過槍與步伐的節奏，他們傳遞出的是一份對榮譽的堅持與對完美的追求。
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo3}`} />
              <div className={`${styles.photoFrame} ${styles.photo4}`} />
            </div>
          </div>
        </section>

        {/* 光球 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo5}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---光球---</h3>
              <p className={styles.text}>
                　　　　光球表演象徵著創意、協作與視覺震撼。每一次旋轉、拋接與光影變化，都源自反覆練習與精準控制。色彩交錯的光球、流暢的動作軌跡，以及與音樂節奏完美結合的瞬間，展現出團隊的默契與專注。不僅是在玩光球，更是在用光與動作講故事、傳遞能量。透過每一次光影的變化，觀眾感受到的是創意的力量與團隊協作的美感。
              </p>
            </div>
          </div>
        </section>

        {/* 光棍 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---光棍---</h3>
              <p className={styles.text}>
                <br />
                　　　　黑暗中，光棍點亮舞台，成為舞台上唯一的光。<br />
                表演者以流暢的身體律動與光影共舞，將棍技融入音樂節奏與空間走位，交織出力與美的平衡。閃爍的光軌隨節奏起伏，如流星般劃過夜空，帶給觀眾視覺與聽覺的雙重享受。
                <br />
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo6}`} />
            </div>
          </div>
        </section>

        {/* 光舞 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo7}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---光舞---</h3>
              <p className={styles.text}>
                　　　　我們透過LED燈與光纖，並融合精湛的網頁設計和樹莓派控制技術，打造出一場前所未見在黑暗中的視覺與聽覺盛宴。<br />
                在《光舞》中，燈光不僅是舞台的裝飾。我們利用前後端設計技術打造了一個燈光編輯軟體，配合音樂的節拍點，讓表演者身上的控制器使光纖燈光產生顏色或亮度變化，最後再搭配表演者的動作，使其成為一種獨一無二的表演形式。
                <br />
              </p>
            </div>
          </div>
        </section>

        {/* 樂團 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---樂團---</h3>
              <p className={styles.text}>
                　　　　電機系樂團是一群在電流與旋律之間找到平衡的創作者。白天他們在電路中尋找穩定的波形，夜晚則以音符描繪心中的頻譜。今年更特別邀請教授共同登台，讓知識與音樂在舞台上產生共振。從細膩的編曲到真摯的演奏，他們用節奏取代程式，用旋律連結師生的心。這場演出不只是聲音的交會，更像是一段由電與情感交織出的溫柔共鳴。
                <br />
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo8}`} />
              <div className={`${styles.photoFrame} ${styles.photo9}`} />
            </div>
          </div>
        </section>

        {/* 長劇 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo10}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---長劇---</h3>
              <p className={styles.text}>
                　　　　在繁忙的課業之餘，邀約朋友們一起來觀賞一場輕鬆的戲劇表演，享受抽離現實生活的微妙時光吧！長劇成員主要由電機系抓馬盃團隊組成，主題不限於電機系生活，每年都有全新的精采劇情等著大家親自來一探究竟，希望能為參與電機之夜的各位帶來的豐富的體驗！
                <br />
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EEweek_1;
