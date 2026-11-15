# Elechid 音立｜電視視距與尺寸計算器

[English](README.md) · [試用計算器](https://elechid.github.io/tv-viewing-distance-calculator/?lang=zh) · [Elechid 官網電視尺寸計算器](https://elechid.com/pages/tv-size-calculator)

Elechid 音立提供的免費開源工具。輸入坐低時雙眼到屏幕嘅距離，即可比較三個 16:9 電視尺寸。下載檔案後用瀏覽器開啟 `index.html`，亦可離線計算。所有計算喺瀏覽器完成，毋須帳戶、API 或第三方程式庫。

## 驗算例子

| 坐距 | 30° 較細尺寸 | 35° 中間尺寸 | 40° 較大尺寸 |
| --- | ---: | ---: | ---: |
| 1.5 米 | 40 吋 | 43 吋 | 50 吋 |
| 2 米 | 50 吋 | 55 吋 | 65 吋 |
| 2.5 米 | 65 吋 | 75 吋 | 83 吋 |
| 3 米 | 75 吋 | 85 吋 | 98 吋 |

香港客廳坐距約 2.5 米，可以先比較 65 同 75 吋。65 吋係較細嘅日常觀看參考，75 吋係畫面較大嘅中間參考，83 吋對應更大嘅 40° 參考。再按窗戶反光、座位同片源選擇。

## 計算方法

坐距 `d` 用米，水平視角 `θ` 用度。

- 目標屏幕闊度（cm）＝ `2 × d × 100 × tan(θ × π ÷ 360)`
- 目標 16:9 屏幕對角線（吋）＝ `闊度 × √(16² + 9²) ÷ (16 × 2.54)`
- 由 32、40、43、50、55、65、75、77、83、85、86、98、100 吋揀最接近嘅尺寸。兩個尺寸同樣接近時揀較細嗰個。
- 闊度同高度只計 16:9 屏幕。電視櫃、腳架間距、紙箱同入屋路線要按實際型號另行核對。

30°、35°、40° 同 Elechid 官網計算器用嘅參考視角相同，供比較觀看體驗。

## 買之前再核對

- [比較 65 吋電視](https://elechid.com/collections/65-inch-smart-tv)
- [比較 75 吋電視](https://elechid.com/collections/75-inch-smart-tv)
- [𨋢門、樓梯同轉角量度清單](https://elechid.com/blogs/news/large-tv-lift-staircase-measurement-hong-kong)

原始碼採用 [MIT 授權](LICENSE)。
