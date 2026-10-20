import { Flashcard } from '../types/book';

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    term: 'Kinh tế hàng hóa',
    termEn: 'Commodity Economy',
    chapterId: 1,
    sourcePdfPage: 1,
    definition: 'Mô hình kinh tế trong đó sản phẩm được sản xuất ra nhằm mục đích trao đổi, mua bán trên thị trường, trái ngược với kinh tế tự nhiên tự cấp tự túc.',
    keyRule: 'Chỉ xuất hiện khi có: (1) Phân công lao động xã hội và (2) Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất.',
    example: 'Nông dân trồng lúa đem bán lấy tiền mua xe máy của thợ cơ khí và dịch vụ viễn thông.'
  },
  {
    id: 'fc-2',
    term: 'Hao phí lao động xã hội cần thiết',
    termEn: 'Socially Necessary Labour Time (SNLT)',
    chapterId: 2,
    sourcePdfPage: 2,
    definition: 'Thời gian lao động cần thiết để sản xuất ra một đơn vị hàng hóa trong điều kiện sản xuất bình thường, trình độ kỹ năng trung bình và cường độ lao động trung bình của xã hội.',
    keyRule: 'Là thước đo khách quan quyết định lượng giá trị hàng hóa mà thị trường chấp nhận trao đổi.',
    example: 'Xã hội trung bình làm ra 1 chiếc áo trong 3 giờ. Người may mất 5 giờ chỉ được trả giá tương đương 3 giờ.'
  },
  {
    id: 'fc-3',
    term: 'Trao đổi ngang giá',
    termEn: 'Equivalent Exchange',
    chapterId: 2,
    sourcePdfPage: 2,
    definition: 'Nguyên tắc trao đổi mà theo đó hai hàng hóa trao đổi được với nhau khi chúng có lượng hao phí lao động xã hội cần thiết bằng nhau.',
    keyRule: 'Giá cả từng món hàng có thể lên xuống do cung cầu, nhưng trên phạm vi toàn xã hội: Tổng Giá cả = Tổng Giá trị.',
    example: '1 tạ thóc = 2 chiếc áo sơ mi vì cùng kết tinh 10 giờ hao phí lao động xã hội cần thiết.'
  },
  {
    id: 'fc-4',
    term: 'Ba tác động của Quy luật Giá trị',
    termEn: 'Three Impacts of Law of Value',
    chapterId: 2,
    sourcePdfPage: 3,
    definition: 'Bộ ba chức năng tự điều chỉnh nền kinh tế của quy luật giá trị do Karl Marx khái quát.',
    keyRule: '1. Điều tiết sản xuất và lưu thông hàng hóa; 2. Kích thích cải tiến kỹ thuật, tăng năng suất; 3. Phân hóa giàu nghèo.',
    example: 'Hộ cà phê đạt chứng nhận SC đầu tư kỹ thuật tăng năng suất 9,6% và lợi nhuận gộp vượt trội 20,4%.'
  },
  {
    id: 'fc-5',
    term: 'Tín hiệu Giá cả',
    termEn: 'Price Signals',
    chapterId: 3,
    sourcePdfPage: 4,
    definition: 'Sự biến động giá cả trên thị trường phản ánh trực tiếp quan hệ cung - cầu, đóng vai trò như ngọn hải đăng chỉ dẫn hành vi kinh tế.',
    keyRule: 'Giá tăng báo hiệu khan hiếm (kích thích tăng cung, giảm cầu); Giá giảm báo hiệu dư thừa (giảm cung, tăng cầu).',
    example: 'Giá thịt lợn Tết 2025 tăng +2,45% khuyến khích thương lái gom hàng từ các trang trại về thành phố phục vụ người dân.'
  },
  {
    id: 'fc-6',
    term: 'Cạnh tranh nội bộ ngành',
    termEn: 'Intra-industry Competition',
    chapterId: 4,
    sourcePdfPage: 6,
    definition: 'Sự ganh đua giữa các doanh nghiệp trong cùng một ngành nghề nhằm giành thị phần và người tiêu dùng.',
    keyRule: 'Thúc đẩy đổi mới công nghệ, hạ giá thành cá biệt và hình thành nên giá trị thị trường của hàng hóa.',
    example: 'Shopee và TikTok Shop ganh đua hạ phí vận chuyển và tăng voucher mua hàng để thu hút khách hàng trực tuyến.'
  },
  {
    id: 'fc-7',
    term: 'Cạnh tranh giữa các ngành',
    termEn: 'Inter-industry Competition',
    chapterId: 4,
    sourcePdfPage: 6,
    definition: 'Sự ganh đua giữa các nhà tư bản thuộc các ngành sản xuất khác nhau nhằm tìm nơi đầu tư có tỷ suất lợi nhuận cao nhất.',
    keyRule: 'Dẫn tới sự di chuyển tự do của dòng vốn giữa các ngành, hình thành tỷ suất lợi nhuận bình quân.',
    example: 'Dòng vốn chuyển dịch từ sản xuất may mặc truyền thống sang thương mại điện tử và logistics công nghệ cao.'
  },
  {
    id: 'fc-8',
    term: 'Công thức Lưu thông Tiền tệ Karl Marx',
    termEn: 'Marxian Currency Circulation Law',
    chapterId: 5,
    sourcePdfPage: 8,
    definition: 'Quy luật xác định khối lượng tiền tệ cần thiết cho việc lưu thông hàng hóa trong một thời kỳ xác định.',
    keyRule: 'M = (P × Q) / V. Tỷ lệ thuận với tổng giá cả hàng hóa (P × Q) và tỷ lệ nghịch với tốc độ vòng quay tiền tệ (V).',
    example: 'Thanh toán quét mã QR giúp tăng tốc độ V, giúp nền kinh tế cần ít tiền giấy lưu hành hơn.'
  },
  {
    id: 'fc-9',
    term: 'Mối liên hệ biện chứng 4 quy luật',
    termEn: 'Interconnection of the Four Laws',
    chapterId: 6,
    sourcePdfPage: 10,
    definition: 'Bản giao hưởng đồng bộ điều khiển nền kinh tế thị trường hiện đại.',
    keyRule: 'Giá trị là NỀN TẢNG; Cung - Cầu là BỀ MẶT; Cạnh tranh là ĐỘNG LỰC; Lưu thông tiền tệ là HUYẾT MẠCH THANH KHOẢN.',
    example: 'Chuỗi cung ứng cà phê Tây Nguyên vận hành hài hòa theo cả 4 quy luật từ vườn trồng đến sàn xuất khẩu quốc tế.'
  },
  {
    id: 'fc-10',
    term: 'Bình ổn thị trường Tết',
    termEn: 'Market Stabilization Program',
    chapterId: 3,
    sourcePdfPage: 5,
    definition: 'Chính sách can thiệp của Nhà nước và chính quyền địa phương thông qua việc cam kết dự trữ nguồn cung hàng thiết yếu.',
    keyRule: 'Dùng lượng cung dự trữ dồi dào để khắc phục hiện tượng sốt giá do cầu tăng đột biến trong các dịp lễ tết.',
    example: 'TP.HCM chuẩn bị hơn 8.000 tỷ đồng hàng hóa, 8.000 tấn gạo, 5.000 tấn thịt gia súc để giữ giá Tết ổn định.'
  }
];
