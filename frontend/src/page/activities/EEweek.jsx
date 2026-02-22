import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EEweek.module.css';
import activityIntroShape from './imgae/活動介紹.svg';

const EEweek = () => {
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

        {/* 擺攤 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---擺攤---</h3>
              <p className={styles.text}>
                　　　　將有各式抽獎以及互動項目快揪親朋好友一起來吧！
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo3}`} />
              <div className={`${styles.photoFrame} ${styles.photo4}`} />
              <div className={`${styles.photoFrame} ${styles.photo5}`} />
            </div>
          </div>
        </section>

        {/* 圓桌分享 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo6}`} />
              <div className={`${styles.photoFrame} ${styles.photo7}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--圓桌分享-</h3>
              <p className={styles.text}>
                　　　　我們會邀請類比、數位、EDA、電控及生醫領域等各領域學長姐回來分享大學，研究所，求職以及領域出路等相關內容。每一個領域學長姐將透過 30 分鐘的時間與大家分享相關經驗，希望同學能夠透過這次活動更加了解未來的出路！圓桌會議，一場場有溫度的經驗傳承與對談，等你來參加！
              </p>
            </div>
          </div>
        </section>

        {/* Open Lab Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>-Open Lab-</h3>
              <p className={styles.text}>
                　　　　OpenLab 將會邀請各領域實驗室，分享他們的研究方向以及成果，讓與會的各位利用一個下午的時間自由探索，也能藉此機會與實驗室學長姐互動、Q&A。現場還會機會抽大獎！
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo8}`} />
            </div>
          </div>
        </section>

        {/* 企業參訪 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo9}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>-企業參訪-</h3>
              <p className={styles.text}>
                　　　　企業參訪部會帶大家走進各大企業，了解實務工作與產業樣貌。我們會安排企業行程、聯繫窗口、確認交通與活動流程，並在參訪當天帶隊、協助同學互動。透過這次活動，同學可以實際看到工作環境、了解職涯可能性，也能學到業界的運作方式。希望大家透過企業參訪，不只認識更多公司，也能更清楚自己的未來方向！
              </p>
            </div>
          </div>
        </section>

        {/* 麻將大賽 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>-麻將大賽-</h3>
              <p className={styles.text}>
                　　　　魯迅曾說過：「我為麻將生，也願意為麻將死。」本次比賽完全免費，僅收取保證金並會在賽事結束後歸還。前六名會有豐盛獎品，第一名甚是會有超過3000元的等價獎品。快來報名，電爆你的對手順便拿獎品，一舉兩得！
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo10}`} />
              <div className={`${styles.photoFrame} ${styles.photo11}`} />
            </div>
          </div>
        </section>

        {/* 電競比賽 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo12}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>-電競比賽-</h3>
              <p className={styles.text}>
                大型比賽項目：特戰英豪、英雄聯盟、傳說對決<br/>
                小型比賽項目：荒野亂鬥、皇室戰爭<br/>
                大家一起打電動
              </p>
            </div>
          </div>
        </section>

        {/* 人氣王 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--人氣王--</h3>
              <p className={styles.text}>
                　　　全線上進行，使用的社群媒體包含Instragram和Threads。分為二個主題票選人氣王，分別是《人像類》和《Reels》，兩個主題獲得最高讚數的貼文可以得到最終大獎（每個主題各一個獎），並在電夜進行頒獎！！！
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo13}`} />
            </div>
          </div>
        </section>

        {/* 養樂多大賽 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo14}`} />
              <div className={`${styles.photoFrame} ${styles.photo15}`} />
              <div className={`${styles.photoFrame} ${styles.photo16}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>養樂多大賽</h3>
              <p className={styles.text}>
                養樂多噴泉😏<br/>
                樂多噴泉養😦<br/>
                多噴泉養樂😵‍💫<br/>
                噴泉養樂多🤢<br/>
                泉養樂多噴🤮<br/>
                一起來享受被養樂多灌溉的樂趣~
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EEweek;
