const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputBaseDir = path.join(__dirname, 'raw_images');
const outputBaseDir = path.join(__dirname, 'public');

// 遞迴處理資料夾的函數
function processDirectory(currentInputDir, currentOutputDir) {
  // 如果輸出資料夾不存在，就建立它 (包含子資料夾)
  if (!fs.existsSync(currentOutputDir)) {
    fs.mkdirSync(currentOutputDir, { recursive: true });
  }

  // 讀取目前資料夾內的所有內容
  const items = fs.readdirSync(currentInputDir, { withFileTypes: true });

  items.forEach(item => {
    const inputPath = path.join(currentInputDir, item.name);
    
    if (item.isDirectory()) {
      // 如果是資料夾，就往下繼續遞迴執行
      const newOutputDir = path.join(currentOutputDir, item.name);
      processDirectory(inputPath, newOutputDir);
    } else {
      // 如果是檔案，根據副檔名處理
      const ext = path.extname(item.name).toLowerCase();
      const fileName = path.parse(item.name).name;

      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        // PNG / JPG 轉 WebP
        const outputPath = path.join(currentOutputDir, `${fileName}.webp`);
        sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath)
          .then(() => console.log(`✅ 轉換成功：${item.name} -> ${fileName}.webp`))
          .catch(err => console.error(`❌ 轉換失敗 ${item.name}:`, err));
          
      } else if (ext === '.svg') {
        // SVG 直接複製過去
        const outputPath = path.join(currentOutputDir, item.name);
        fs.copyFileSync(inputPath, outputPath);
        console.log(`✅ 複製成功：${item.name} (SVG 不需轉換)`);
      }
    }
  });
}

// 開始執行
console.log('開始處理圖片...');
processDirectory(inputBaseDir, outputBaseDir);