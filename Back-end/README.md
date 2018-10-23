# Project-QuanLyNhaSach

API
1. Lấy thông tin tất cả sách
Method: GET
URL: http://localhost:1234/book

2. Tạo thông tin sách
Method: POST
URL: http://localhost:1234/book
Require: name, price, bookImage,...
Ví dụ request: http://localhost:1234/book
	{
	"name": "Hạt giống tâm hồn",
	"price": 25000,
	"description": "Cuộc sống chúng ta ra sao, luôn ngập tràn sợ hãi và oán hờn hay chấp nhận và vui sống để vươn lên sẽ tùy thuộc vào cách ta đối mặt với những khó khăn thử thách ta gặp trên con đường như thế nào.. Hai tập “ Hạt giống tâm hồn cho lòng dũng cảm và tình yêu cuộc sống” do First News thực hiện trong bộ sách Hạt giống tâm hồn này sẽ là người bạn đồng hành cùng độc giả vượt qua những khó khăn thử thách trong cuộc sống thường ngày như nỗi mất mát, nỗi đau tổn thương tinh thần, tình cảm, niềm tin, bệnh tật, những thăng trầm trên bước đường theo đuổi ước mơ của cuộc đời hay vươn lên cho cuộc sống tốt đẹp hơn. Qua những sự kiện bất hạnh, những câu chuyện bình thường, những người bình dị, các câu chuyện đều nhấn mạnh đến tinh thần vượt lên, chiến thắng chứ không phải những điều lạ thường. bạn có thể bắt gặp câu chuyện của chính mình, của những người xung quanh hay của những người hoàn toàn xa lạ... để suy gẫm, chiêm nghiệm, khám phá và tìm thấy câu châm ngôn cuộc sống của mình!",
	"format": "160 trang cứng",
	"author": "Nhiều tác giả",
	"dimensions": "13 x 20.5 cm",
	"publisher": "Nhà Xuất Bản Tổng hợp TP.HCM",
	"publicationDate": "04-2016",
	"language": "Tiếng Việt"
	}

3. Lấy thông tin sách theo id
Method: GET
URL: http://localhost:1234/book/:id
Ví dụ request: http://localhost:1234/book/5bc05fbc151b4933fc8984fd

4. Cập nhật thông tin sách theo id
Method: PUT
URL: http://localhost:1234/book/:id
Require: name, price, bookImage,...
Ví dụ request: http://localhost:1234/book/5bc063fe11672928fcf9c12e
	{
	"name": "Hạt giống tâm hồn"
	}

5. Xóa sách theo id
Method: DELETE
URL: http://localhost:1234/book/:id
Ví dụ request: http://localhost:1234/book/5bc063fe11672928fcf9c12e

6. Tạo tài khoản admin
Method: POST
URL: http://localhost:1234/admin/signup
Require: username, password
Ví dụ request: http://localhost:1234/admin/signup
	{
		"username":"admin",
		"password":"admin"
	}
	
7. Đăng nhập tài khoản admin
Method: POST
URL: http://localhost:1234/admin/login
Require: username, password
Ví dụ request: http://localhost:1234/admin/login
	{
		"username":"admin",
		"password":"admin"
	}
	
