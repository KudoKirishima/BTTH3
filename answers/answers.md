# Bài 0.1 

## 1. File .jsx khác gì file .js?

Trả lời:
- File .js là file JavaScript thông thường
- File .jsx cũng là file JavaScript nhưng hay dùng để viết JSX ở trong React, đồng thời JSX là cú pháp trông giống HTML

## 2. Tại sao phải export default App?

Trả lời: 
- Vì component App cần được file khác import vào để sử dụng
- Trong React + Vite, file main.jsx thường import App từ App.jsx
- Nếu mà không import thì file sẽ không lấy được component của App

## 3. Thử xóa export default → chuyện gì xảy ra?

Trả lời:
- Khi xóa export default App; file main.jsx sẽ không import được vào App
- Do đó kết quả sẽ báo lỗi hoặc trang web sẽ không hiển thị đúng
