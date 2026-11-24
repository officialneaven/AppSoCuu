# SowCuu v1.2 · Flow Canvas

Giao diện tiếng Việt được khôi phục từ `SowCuu_v1.2_Symptom_Slider.html`: luồng đánh giá tuần tự, thanh trượt chọn biểu hiện theo vùng cơ thể, tra cứu, nhật ký phiên và Policy.

## Chạy ứng dụng

```sh
npm ci
npm run dev
```

- `npm run lint`: kiểm tra mã nguồn.
- `npm run build`: tạo bản tĩnh trong `dist/`.
- `npm run preview`: xem bản build trên máy.

## Cấu trúc

- `index.html`: khung ứng dụng và thanh điều hướng.
- `src/index.css`: giao diện responsive từ bản tham chiếu.
- `public/sowcuu/app.js`: tương tác, trạng thái phiên và các màn hình. Giữ dạng script cổ điển để các nút do mẫu HTML tạo ra gọi được hàm xử lý; các lớp mở rộng của bản tham chiếu được nạp theo thứ tự.
- `public/sowcuu/situations.js`: dữ liệu tra cứu và bộ biến thể QA tổng hợp. Biến thể QA không được hiển thị trong tra cứu và không phải phác đồ y khoa.

Nhật ký chỉ nằm trong phiên trình duyệt; người dùng có thể chủ động xuất tệp. Ảnh minh họa từ Wikimedia cần kết nối mạng, giọng đọc phụ thuộc thiết bị.

**Bản thử nghiệm, chưa thẩm định y khoa.** Không dùng để chẩn đoán hoặc thay thế cấp cứu. Trong tình huống khẩn cấp tại Việt Nam, gọi **115** và làm theo hướng dẫn của tổng đài.
