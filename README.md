# CV Online Cá Nhân - Nguyễn Nông Thu

Dự án Website CV / Portfolio cá nhân trực tuyến dành cho **Nguyễn Nông Thu** (Sinh viên năm 3 ngành Công nghệ Thông tin - Đại học Công nghệ Thông tin và Truyền thông Thái Nguyên - ICTU), định hướng ứng tuyển **IT Intern / Software Engineer Intern**.

Trang web được xây dựng với phong cách chuyên nghiệp, hiện đại, tối giản, hiển thị tối ưu trên mọi kích thước màn hình (Responsive), tích hợp chế độ Sáng/Tối (Light/Dark Mode) và sẵn sàng để triển khai (deploy) miễn phí lên **Cloudflare Pages**.

---

## 1. Cấu trúc thư mục & Ý nghĩa từng file

```text
Demo/
├── index.html        # File HTML chính chứa toàn bộ cấu trúc semantic và nội dung CV
├── style.css         # Bảng định kiểu CSS: quản lý màu sắc (Light/Dark), responsive, animation
├── script.js         # JavaScript thuần: xử lý đổi theme, mobile menu, scrollspy, form
├── assets/
│   ├── avatar.jpg    # Ảnh đại diện cá nhân
│   └── cv.pdf        # File PDF của CV để nhà tuyển dụng tải về trực tiếp
└── README.md         # Tài liệu hướng dẫn sử dụng, chỉnh sửa và deploy dự án
```

### Ý nghĩa chi tiết:
- **`index.html`**: Chứa toàn bộ nội dung hiển thị của CV:
  - Header & Sticky Navbar: Logo `Thu.Dev`, các liên kết điều hướng và nút đổi giao diện.
  - Section 1 - **Home / Hero**: Lời chào, chức danh ứng tuyển, tóm tắt nhanh và các nút hành động (Tải CV, Liên hệ, Xem dự án).
  - Section 2 - **About Me**: Mục tiêu nghề nghiệp 4 câu thực tế, khiêm tốn; 4 phẩm chất then chốt (Tự học, Kỷ luật, Tập trung nền tảng, Tinh thần trách nhiệm).
  - Section 3 - **Education**: Quá trình đào tạo tại ICTU, danh sách các môn học nền tảng.
  - Section 4 - **Skills**: 4 nhóm kỹ năng (Ngôn ngữ lập trình, Công cụ & Môi trường, Phân tích & Thiết kế, Kiến thức nền tảng).
  - Section 5 - **Experience**: Kinh nghiệm thực tập tại nhà máy ở vị trí QA/IPQC được trình bày chân thực và làm nổi bật tư duy quy trình hỗ trợ cho IT.
  - Section 6 - **Projects**: Dự án *Online Quiz Tool* (Python), *Personal Android App* (Kotlin) và khối placeholder cho đồ án tiếp theo.
  - Section 7 - **Contact**: Thẻ liên hệ trực tiếp (Email, SĐT, Địa điểm, GitHub, LinkedIn) và form gửi tin nhắn nhanh.
  - Footer & Nút Back to Top nổi.
- **`style.css`**: Được thiết kế hệ thống CSS Variables (`:root` và `[data-theme="dark"]`), font chữ `Inter` thanh lịch, độ tương phản chuẩn WCAG, bố cục Grid/Flexbox tự co giãn theo mọi thiết bị.
- **`script.js`**: Sử dụng JavaScript thuần (Vanilla JS), không có thư viện bên thứ ba, tự động ghi nhớ tùy chọn Dark/Light mode qua `localStorage`, đồng bộ với cấu hình hệ điều hành và cuộn trang mượt mà.
- **`assets/avatar.jpg`**: Ảnh đại diện tỷ lệ 1:1. Bạn có thể thay bằng ảnh chân dung thực tế của mình.
- **`assets/cv.pdf`**: Tệp CV bản PDF. Bạn có thể xuất file PDF từ Canva/Word/Overleaf và ghi đè vào tệp này.

---

## 2. Hướng dẫn chạy thử nghiệm trên máy tính (Local)

Dự án sử dụng HTML/CSS/JS thuần nên bạn **không cần cài đặt Node.js hay npm**.

### Cách 1: Mở trực tiếp bằng trình duyệt (Nhanh nhất)
1. Mở thư mục `Demo` trên máy tính.
2. Nhấp đúp (Double-click) vào tệp `index.html`.
3. Trình duyệt (Chrome, Edge, Firefox, Cốc Cốc) sẽ mở website CV ngay lập tức.

### Cách 2: Sử dụng Live Server trong Visual Studio Code (Khuyên dùng khi chỉnh sửa)
1. Mở thư mục `Demo` bằng Visual Studio Code.
2. Cài đặt tiện ích mở rộng **Live Server** (của tác giả *Ritwick Dey*) trong tab Extensions (`Ctrl + Shift + X`).
3. Nhấp chuột phải vào file `index.html` &rarr; Chọn **Open with Live Server** (hoặc bấm nút "Go Live" ở góc dưới bên phải).
4. Mỗi khi bạn sửa code và lưu (`Ctrl + S`), trình duyệt sẽ tự động cập nhật thay đổi.

---

## 3. Hướng dẫn tùy biến thông tin cá nhân

Trước khi chia sẻ CV cho nhà tuyển dụng, bạn mở file `index.html` bằng trình soạn thảo (như VS Code, Notepad) và thay đổi các mục sau:

1. **Email & Số điện thoại**:
   - Tìm đoạn `[ĐỂ TRỐNG ĐỂ TÔI ĐIỀN]` tại phần Contact và thay bằng email, số điện thoại của bạn.
   - Ví dụ: `mailto:thunguyen@example.com` và `tel:0987654321`.
2. **GitHub & LinkedIn**:
   - Thay các link placeholder `[ĐỂ TRỐNG ĐỂ TÔI ĐIỀN]` bằng đường dẫn tài khoản GitHub và LinkedIn cá nhân của bạn (ví dụ: `https://github.com/nguyennongthu`).
3. **Ảnh đại diện (`avatar.jpg`)**:
   - Đặt ảnh chân dung của bạn vào thư mục `assets/` và đặt tên là `avatar.jpg` (kích thước đề xuất: hình vuông từ 400x400px đến 800x800px).
4. **File CV PDF (`cv.pdf`)**:
   - Khi bạn đã chuẩn bị xong bản CV giấy/PDF chính thức, hãy đổi tên file thành `cv.pdf` và sao chép đè vào thư mục `assets/`.

---

## 4. Hướng dẫn đưa dự án lên GitHub

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Nhấn vào biểu tượng dấu **+** ở góc trên cùng bên phải &rarr; Chọn **New repository**.
3. Đặt tên Repository (ví dụ: `online-cv` hoặc `portfolio`).
4. Chọn chế độ **Public** &rarr; Bỏ chọn dấu tích "Add a README file" (vì dự án đã có sẵn README) &rarr; Nhấn **Create repository**.

### Bước 2: Đẩy mã nguồn từ máy lên GitHub
Mở terminal (PowerShell hoặc Git Bash) tại thư mục `Demo` và chạy lần lượt các lệnh sau:

```bash
# 1. Kiểm tra trạng thái Git
git status

# 2. Thêm tất cả các file vào Git stage
git add .

# 3. Tạo commit đầu tiên
git commit -m "feat: Khoi tao website CV Online ca nhan"

# 4. Đổi tên nhánh mặc định thành main (nếu chưa phải)
git branch -M main

# 5. Liên kết tới repository GitHub của bạn (thay username và repo-name bằng của bạn)
git remote add origin https://github.com/<USERNAME-CUA-BAN>/<TEN-REPO-CUA-BAN>.git

# 6. Đẩy code lên GitHub
git push -u origin main
```

---

## 5. Hướng dẫn Deploy lên Cloudflare Pages (Miễn phí & Tốc độ cao)

Cloudflare Pages là nền tảng lưu trữ web tĩnh miễn phí, không giới hạn băng thông, có chứng chỉ bảo mật SSL (HTTPS) và CDN phủ khắp Việt Nam.

### Các bước thực hiện:
1. Truy cập [https://dash.cloudflare.com/](https://dash.cloudflare.com/) và đăng nhập (hoặc đăng ký tài khoản miễn phí nếu chưa có).
2. Tại thanh điều hướng bên trái, chọn **Workers & Pages**.
3. Nhấn vào nút **Create application** &rarr; Chọn thẻ **Pages** &rarr; Chọn **Connect to Git**.
4. Chọn tài khoản GitHub của bạn và chọn repository bạn vừa tạo ở Bước 4 (ví dụ: `online-cv`).
5. Bấm **Begin setup**.
6. Tại trang cấu hình bản build (**Build configuration**):
   - **Project name**: Đặt tên dự án (tên này sẽ là subdomain, ví dụ: `nguyennongthu.pages.dev`).
   - **Production branch**: Giữ nguyên là `main`.
   - **Framework preset**: Chọn `None`.
   - **Build command**: Để trống (vì dự án là HTML tĩnh).
   - **Build output directory**: Để trống (hoặc điền `.`).
7. Nhấn **Save and Deploy**.
8. Chờ khoảng 15 - 30 giây, Cloudflare Pages sẽ hoàn tất và cung cấp cho bạn một đường dẫn công khai có dạng:
   👉 `https://nguyennongthu.pages.dev`

> **Mẹo:** Mỗi lần sau này khi bạn cập nhật code trên máy và chạy `git push`, Cloudflare Pages sẽ tự động nhận biết và cập nhật website trực tuyến chỉ trong vài chục giây!