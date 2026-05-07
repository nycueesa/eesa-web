const express = require('express');
const app = express();
const port = 5588; // 這是你要使用的 Port (通訊埠)

// 設定一個路由，當有人訪問根目錄 '/' 時，回傳訊息
app.get('/', (req, res) => {
  res.send('Hello World! 這是我的第一個 Node.js 後端！');
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器已經成功啟動在 http://localhost:${port}`);
});