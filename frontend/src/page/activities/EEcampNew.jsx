import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EEcampNew.module.css';
import activityIntroShape from './imgae/活動介紹.svg';
import performanceIntroShape from './imgae/共練介紹.svg';
import teamIntroShape from './imgae/各組介紹.svg';

const EEcampNew = () => {
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
                　　　　交大電機營是電機系最重要的活動之一，也是全國規模最大的大學電機營。除了有豐富的活動，如 RPG 和大地遊戲等，很帥又很有成就感的共練表演，還有為高中生設計的入門電機相關課程，包括程式設計、Arduino、邏輯設計和小專題製作，讓大家更認識電機系。
                <br />
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
                <span className={styles.introTitleText}>共練介紹</span>
          </div>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---火球---</h3>
              <p className={styles.text}>
                　　　　繩子兩端綁上燃燒的煤球，超多花招的類型，不只有火球本身才做得到的招式，火棍能轉起來的都能延伸出火球版本，享受表演時火光在身邊圍繞的模樣，經過時間練習，成為全場焦點，適合想挑戰火舞又想學會超多種招式的你。
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
              <h3 className={styles.performanceTitle}>---火棍---</h3>
              <p className={styles.text}>
                　　　　棍子兩端沾上煤油，火棍相對火球能較輕鬆上手，大多招式轉起來游刃有餘，但在觀眾眼中卻是各種爆轉超帥技巧，燃燒的火焰就像流星般耀眼，經過時間練習，成為全場焦點，適合想挑戰火舞又想輕鬆帥的你。
              </p>
            </div>
          </div>
        </section>

        {/* Incense Fan Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>---香扇---</h3>
              <p className={styles.text}>
                　　　　將點燃的線香綁在扇子上，隨著節奏整齊劃一展開的開扇聲足以震撼全場。適合想帥一波、喜歡跟著節奏起舞的你。
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
              <h3 className={styles.performanceTitle}>---小旗---</h3>
              <p className={styles.text}>
                　　　　女生限定的表演，隨著音樂揮舞整齊劃一的小旗，跳著可愛迷人的舞蹈，讓人目不轉睛，適合甜美可愛、喜歡跳舞的你。
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
              <h3 className={styles.performanceTitle}>---蛇舞---</h3>
              <p className={styles.text}>
                　　　　男生限定的表演，融合地蹦、後滾翻、側手翻等超多高強度動作，需要展現極限的體能與爆發力，卻也能讓全場熱血沸騰，適合想練出超帥地板動作的你。
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo15}`} />
              <div className={`${styles.photoFrame} ${styles.photo16}`} />
            </div>
          </div>
        </section>

        {/* Team Introduction Section */}
        <section className={styles.section}>
          <div className={styles.introTitleWrap}>
            <img
              src={teamIntroShape}
              alt=""
              className={styles.introTitleGraphic}
            />
            <span className={styles.introTitleText}>各組介紹</span>
          </div>

          {/* Recruitment */}
          <div className={styles.teamLayout}>
            <div className={styles.teamCard}>
              <div className={styles.teamBadge}>招生</div>
              <p className={styles.teamText}>
                　營期間帶領小隊、活絡氣氛，照顧小隊員的大小事，與隨輔們團隊合作，打造屬於你們小隊的完美回憶，適合充滿活力、喜歡互動交流的你。
              </p>
            </div>
            <div className={styles.teamPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo_17}`} />
              <div className={`${styles.photoFrame} ${styles.photo17}`} />
            </div>
          </div>

          {/* Activity */}
          <div className={styles.activityLayout}>
            <div className={`${styles.photoFrame} ${styles.photo18}`} />
            <div className={styles.teamCard}>
              <div className={styles.teamBadge}>活動</div>
              <p className={styles.teamText}>
                　　　　籌期需要你天馬行空的創意想出超頂、超有趣的活動，在營期間用滿滿活力主持活動，讓氣氛變超HIGH，也讓大家都能開心享受在每個當下，適合創意滿滿的你。
              </p>
            </div>
            <div className={`${styles.photoFrame} ${styles.photo19}`} />
          </div>

          {/* Course */}
          <div className={styles.courseLayout}>
            <div className={styles.teamCard}>
              <div className={styles.teamBadge}>課程</div>
              <p className={styles.teamText}>
                　　　透過C++、Arduino、邏設三門課程，帶領高中生認識電機系。看著高中生對你所講的課程感到發自內心的讚嘆，那是種截然不同的成就感，適合有教學熱忱的你。
              </p>
            </div>
            <div className={styles.coursePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo20}`} />
              <div className={`${styles.photoFrame} ${styles.photo21}`} />
            </div>
          </div>

          {/* Equipment */}
          <div className={styles.equipmentLayout}>
            <div className={styles.equipmentPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo22}`} />
              <div className={`${styles.photoFrame} ${styles.photo23}`} />
              <div className={`${styles.photoFrame} ${styles.photo24}`} />
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamBadge}>場器</div>
              <p className={styles.teamText}>
                　　　電機營的幕後英雄，每個活動的架場、音控和燈光都需要你們在幕後運作，並處理各種場地技術問題，看著大家在自己布置的場地下開心的模樣，真的很爽，適合應變能力強的你。
              </p>
            </div>
          </div>

          {/* Art */}
          <div className={styles.teamLayout}>
            <div className={styles.teamCard}>
              <div className={styles.teamBadge}>美宣</div>
              <p className={styles.teamText}>
                　　　營服、營海報、大字報和各種道具都是美宣組負責，把道具都做的超頂，做完會覺得超爽、自己超厲害的，主要任務在籌期完成，營期可以盡情與小隊員互動，適合手作能力強、有耐心的你。
              </p>
            </div>
            <div className={styles.teamPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo25}`} />
              <div className={`${styles.photoFrame} ${styles.photo26}`} />
            </div>
          </div>

          {/* Logistics */}
          <div className={styles.teamLayout}>
            <div className={styles.teamCard}>
              <div className={styles.teamBadge}>生活</div>
              <p className={styles.teamText}>
                　　　籌期和營期都需要準備好吃的食物，讓大家都能期待每次的吃飯時間，填飽肚子開心享受營隊，適合對食物很了解也善於和店家接洽的你。
              </p>
            </div>
            <div className={styles.teamPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo27}`} />
              <div className={`${styles.photoFrame} ${styles.photo28}`} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EEcampNew;
