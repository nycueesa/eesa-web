import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EEweek_2.module.css';
import activityIntroShape from './imgae/活動介紹.svg';

const EEweek_2 = () => {
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

        {/* 公關部 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--公關部--</h3>
              <p className={styles.text}>
                　　　　「公關部」是把好禮變成現實的地方。從折價券、小周邊，到大螢幕、音響，都有機會透過我們的努力出現在比賽、抽獎和擺攤活動中。<br />
                <br />
                日常工作很實際，先想清楚想要爭取的禮物與品牌，接著主動聯繫廠商、寄出有誠意又專業的合作信件，並用一些 Gmail 的小技巧提升寄信與追蹤效率；必要時也會一同討論簡單的合作提案，讓彼此的資源與需求對得上。<br />
                <br />
                在這裡，你會練到與企業溝通的能力，知道怎麼把價值說清楚、把需求講明白，也會養成寫出清楚、有份量的公關信件的習慣。若你對拉贊助有興趣、擅長說服他人，或單純想把喜歡的品牌帶進電機週，那麼公關部非常適合你！歡迎加入公關部，一起來幫自己也幫大家爭取想要的禮物！
                <br />
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo3}`} />
            </div>
          </div>
        </section>

        {/* 宣傳部 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo4}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--宣傳部--</h3>
              <p className={styles.text}>
                　　　　「宣傳部」是把活動變成大家眼中亮點的地方。從主視覺、海報、貼文，到短影音、文案與周邊風格，所有讓電機週被看見、被記住的元素，都由我們親手打造。<br />
                日常工作不浮誇卻很有成就感：討論活動調性、發想視覺方向、寫貼文文案、排版素材，必要時也會一起拍攝、剪影，讓每個畫面都能準確傳達想講的故事。<br />
                在這裡，你會練到視覺統整與企劃能力，知道怎麼把資訊變得好懂、把內容變得好看，也會習慣用更有效率的方式與部門協作。如果你喜歡創意、熱愛畫面、擅長寫字，或單純想讓電機週更酷更亮，那麼宣傳部會是非常適合你的地方。歡迎加入宣傳部，一起把想法變成真正會被看見的作品！
              </p>
            </div>
          </div>
        </section>

        {/* 課學部 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--課學部--</h3>
              <p className={styles.text}>
                <br />
                　　　　日常工作很踏實也很有挑戰性：先思考大家會想學什麼，接著規劃主題、安排講者、寫活動介紹，並與場地、器材或其他部門協調流程。必要時還要把複雜的技術內容整理成簡單易懂的講義或呈現方式，讓參加者不會有壓力、又能確實帶走新知識。<br />
                在這裡，你會練到活動企劃能力，也會知道怎麼把一個主題拆解、重組成有邏輯、能吸引人的內容。同時也能接觸到業界講師、研究領域和各種新技術。如果你喜歡分享、願意把知識講清楚，或單純想讓電機週不只好玩、也能變得更有內容，那麼課學部非常適合你！歡迎加入課學部，一起把學習變得有趣、也把活動變得更有深度！
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo5}`} />
            </div>
          </div>
        </section>

        {/* 活動部 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo6}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--活動部--</h3>
              <p className={styles.text}>
                　　　　「活動部」是把所有點子變成真正會發生的事情的地方。從大型舞台活動、趣味比賽，到攤位互動、流程安排，所有讓電機週熱鬧起來的橋段，都是活動部親手打造的成果。<br />
                日常工作很實在：先構想好活動形式與流程，接著思考規則、時間安排、人力配置，並與其他部門協調場地、設備與宣傳需求。活動前要確保物資齊全、所有細節都準備到位；活動當天更是我們最忙也最有成就感的時刻——控場、串流程、解突發狀況，把一切運作得順順的。<br />
                在這裡，你會學到活動企劃、流程控管與臨場反應的技巧，也會知道如何把一個腦中的想法一步步落地成真正的活動。只要你喜歡帶氣氛、享受規劃事情的樂趣，或想在舞台背後讓大家玩得更開心，那麼活動部就很適合你！歡迎加入活動部，一起把最熱鬧、最好玩的電機週呈現給大家！
              </p>
            </div>
          </div>
        </section>

        {/* 場器部 Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>--場器部--</h3>
              <p className={styles.text}>
                　　　　「場器部」是確保所有活動都能順利發生的幕後工程師。從桌椅、帳篷、電線、延長線，到音響、麥克風、燈光與各式器材，只要和場地佈置或設備運作有關，幾乎都由場器部負責處理。<br />
                日常工作很扎實：先了解每個活動需要什麼器材、場地長什麼樣，再決定如何擺、怎麼接、哪裡需要備案。活動前要搬器材、測試設備、確認電源；活動中則要隨時注意麥克風有沒有雜音、音響有沒有跳針，遇到突發狀況也要迅速修到好。雖然很忙，但看著自己準備的場地被大家使用、整個活動順順跑，就是場器部最爽的時刻。<br />
                在這裡，你會練到解決問題的能力，也會熟悉各種活動器材的使用方式，甚至能更快看懂活動應該怎麼運作。只要你不怕動手、喜歡把東西弄得完美，或單純想打造最穩最安全的活動環境，那麼場器部非常適合你！歡迎加入場器部，一起把電機週的每個場地、每件器材都照顧得穩穩當當！
              </p>
            </div>
            <div className={styles.performancePhotos}>
              <div className={`${styles.photoFrame} ${styles.photo7}`} />
            </div>
          </div>
        </section>

        {/* Open Lab Section */}
        <section className={styles.section}>
          <div className={styles.performanceLayout}>
            <div className={styles.introPhotos}>
              <div className={`${styles.photoFrame} ${styles.photo8}`} />
              <div className={`${styles.photoFrame} ${styles.photo9}`} />
            </div>
            <div className={styles.textBox}>
              <h3 className={styles.performanceTitle}>-Open Lab-</h3>
              <p className={styles.text}>
                　　　　「Open Lab 」是讓大家真正走進電機、看見技術在做什麼的地方。從系上的實驗室參訪、教授或研究生分享，到讓學生親手操作的小型展示，我們負責把實驗室裡那些平常很神祕的研究，用最有趣、最貼近生活的方式呈現給大家。<br />
                日常工作很需要細心：先與實驗室聯繫、確認願意開放的時間與內容，接著安排動線、規劃導覽方式，並整理能讓大一也聽得懂的簡單介紹。活動前需要再三確認安全性、設備可否展示；活動中則要協助導覽、控人流，確保參加者能看得懂、實驗室也能安心開放。<br />
                在這裡，你會練到跨單位協作與溝通能力，也會接觸到系內各種領域的研究，知道「電機在做什麼」不再只是概念，而是變成具體可見的技術展示。如果你對研究好奇、喜歡把知識講清楚，或想讓更多人接觸到電機的多樣面貌，那麼 Open Lab 部會非常適合你！歡迎加入 Open Lab，一起把實驗室裡的世界帶給大家！
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EEweek_2;
