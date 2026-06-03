# Bài 0.1

## 1. File `.jsx` khác gì file `.js`?

Trả lời:

- File `.js` là file JavaScript thông thường
- File `.jsx` cũng là file JavaScript nhưng hay dùng để viết JSX trong React
- JSX là cú pháp trông giống HTML

## 2. Tại sao phải `export default App`?

Trả lời:

- Vì component `App` cần được file khác import vào để sử dụng
- Trong React + Vite, file `main.jsx` thường import `App` từ `App.jsx`
- Nếu không export thì file khác sẽ không lấy được component `App`

## 3. Thử xóa `export default` → chuyện gì xảy ra?

Trả lời:

- Khi xóa `export default App`, file `main.jsx` sẽ không import được `App`
- Do đó ứng dụng sẽ báo lỗi hoặc trang web không hiển thị đúng

# Bài 1.1

## 1. Tại sao component chỉ render 1 lần?

Trả lời:

- Vì khi trang được tải lần đầu, React gọi component để tạo giao diện ban đầu
- Nếu chưa có dữ liệu thay đổi hoặc chưa có tương tác nào thì component chưa render lại
- Trong môi trường dev có `StrictMode`, log có thể xuất hiện 2 lần

## 2. Khi nào nó sẽ render lại?

Trả lời:

- Khi state thay đổi
- Khi props thay đổi
- Khi component cha render lại