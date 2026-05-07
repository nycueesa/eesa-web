const express = require('express');
const cors = require('cors'); // 引入 cors 解決跨域問題
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5588
; // 配合 docker-compose 設定好的 3000

// 1. 啟用 CORS，允許前端 (Vite) 來抓資料
app.use(cors());

// 2. 設定靜態資源目錄 (讓前端可以透過網址讀取 public 裡的圖片)
app.use('/images', express.static(path.join(__dirname, 'public')));

// --- 以下為輔助函數與 API ---

// 遞迴讀取資料夾內所有檔案的輔助函數
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(path.join(dirPath, file), arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

// 3. 爬取所有圖片的 API (提供給前端動態圖片庫使用)
app.get('/api/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'public');

  try {
    const allFiles = getAllFiles(directoryPath);
    const imageUrls = allFiles
      .filter(file => file.endsWith('.webp') || file.endsWith('.svg'))
      .map(file => {
        const relativePath = file.replace(directoryPath, '').replace(/\\/g, '/');
        return `http://localhost:${port}/images${relativePath}`;
      });

    res.json(imageUrls);
  } catch (err) {
    res.status(500).json({ error: '無法讀取圖片目錄' });
  }
});

// 4. 【新增】系學會部門資料的 API (提供給 EesaIntro 頁面使用)
app.get('/api/departments', (req, res) => {
  const departments = [
      {
          name: "活企部",
          nameEn: "ACTIVITIES",
          description: "主辦聯誼、娛樂等活動，促進同學間交流。",
          image: `http://localhost:${port}/images/intro/activities.webp`, // 使用動態 port 變數更安全
          link: "/intro/activities"
      },
      {
          name: "學術部",
          nameEn: "TECHNICAL",
          description: "負責規劃並推動學術活動，協助同學學習與成長。",
          image: `http://localhost:${port}/images/intro/technical.webp`,
          link: "/intro/technical"
      },
      {
          name: "行銷部",
          nameEn: "PUBLICITY",
          description: "負責宣傳、設計與社群經營，提升學會能見度。",
          image: `http://localhost:${port}/images/intro/publicity.webp`,
          link: "/intro/publicity"
      },
      {
          name: "人力部",
          nameEn: "OPERATION",
          description: "協助活動人力安排，負責志工招募與管理。",
          image: `http://localhost:${port}/images/intro/operation.webp`,
          link: "/intro/operation"
      }
  ];
  // 回傳 JSON 格式的資料給前端
  res.json(departments);
});

// 5. 根目錄測試路由
app.get('/', (req, res) => {
  res.send('Hello World! 後端伺服器正常運作中！');
});

// --- 啟動伺服器 ---
app.listen(port, () => {
  console.log(`🚀 伺服器已經成功啟動在 http://localhost:${port}`);
  console.log(`🖼️  測試圖片 API 請前往 http://localhost:${port}/api/images`);
  console.log(`📁  測試部門 API 請前往 http://localhost:${port}/api/departments`);
});