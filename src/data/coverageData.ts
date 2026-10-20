export interface CoverageItem {
  pdfPage: number;
  chapter: string;
  topic: string;
  keyElements: string[];
  tablesAndData: string[];
  formulasAndModels: string[];
  interactiveTools: string[];
  status: 'Full Coverage 100%' | 'Verified';
}

export const CONTENT_COVERAGE_MATRIX: CoverageItem[] = [
  {
    pdfPage: 1,
    chapter: "Chương 1 & Chương 2",
    topic: "Khái quát kinh tế hàng hóa, 2 điều kiện ra đời, chu trình 4 khâu & Khái niệm Quy luật Giá trị",
    keyElements: [
      "Khái niệm kinh tế hàng hóa vs kinh tế tự nhiên",
      "Điều kiện 1: Phân công lao động xã hội",
      "Điều kiện 2: Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể",
      "Chu trình 4 khâu: Sản xuất -> Phân phối -> Trao đổi -> Tiêu dùng",
      "Giới thiệu 4 quy luật kinh tế cơ bản"
    ],
    tablesAndData: ["Sơ đồ dòng chu chuyển 4 khâu"],
    formulasAndModels: ["Mô hình chu chuyển hàng - tiền"],
    interactiveTools: ["Infographic chu trình kinh tế", "Mục lục tương tác 3D"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 2,
    chapter: "Chương 2",
    topic: "Bản chất Quy luật Giá trị, Hao phí LĐ cá biệt & LĐ xã hội cần thiết, Trao đổi ngang giá",
    keyElements: [
      "Định nghĩa chuẩn quy luật giá trị",
      "Hao phí lao động cá biệt vs Hao phí lao động xã hội cần thiết",
      "Nguyên tắc trao đổi ngang giá",
      "Tổng giá cả = Tổng giá trị"
    ],
    tablesAndData: ["Điều kiện sản xuất bình thường & năng suất trung bình"],
    formulasAndModels: ["Bất đẳng thức: LĐ cá biệt ≤ LĐ xã hội cần thiết"],
    interactiveTools: ["So sánh tương tác mức hao phí lao động"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 3,
    chapter: "Chương 2",
    topic: "Ba tác động của Quy luật Giá trị & Nghiên cứu Hộ trồng Cà phê Việt Nam năm 2019",
    keyElements: [
      "Tác động 1: Điều tiết sản xuất và lưu thông",
      "Tác động 2: Kích thích cải tiến kỹ thuật, tăng năng suất",
      "Tác động 3: Phân hóa giàu - nghèo",
      "Khảo sát hộ cà phê có chứng nhận SC vs không chứng nhận"
    ],
    tablesAndData: [
      "Bảng số liệu 5 chỉ tiêu: Năng suất (3.215,77 vs 2.933,25 kg/ha)",
      "Giá bán (34.820 vs 33.140 đồng/kg)",
      "Doanh thu (112,347 vs 97,229 triệu đồng/ha)",
      "Chi phí (43,982 vs 40,466 triệu đồng/ha)",
      "Lợi nhuận gộp (68,366 vs 56,763 triệu đồng/ha)"
    ],
    formulasAndModels: [
      "Chỉ số tăng trưởng: Năng suất +9,6%, Giá +5,1%, Lợi nhuận gộp +20,4%"
    ],
    interactiveTools: ["Biểu đồ Recharts so sánh 5 chỉ tiêu hộ cà phê", "Bảng dữ liệu tương tác"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 4,
    chapter: "Chương 2 & Chương 3",
    topic: "Lưu ý học thuật hộ cà phê & Khái niệm Quy luật Cung – Cầu, Tín hiệu giá cả",
    keyElements: [
      "Lưu ý học thuật: Không quy nguyên nhân duy nhất cho quy luật giá trị",
      "Khái niệm Cung (khối lượng sẵn sàng bán)",
      "Khái niệm Cầu (nhu cầu có khả năng thanh toán)",
      "Cơ chế tín hiệu giá cả điều tiết thị trường"
    ],
    tablesAndData: ["Các yếu tố ảnh hưởng: Thổ nhưỡng, khuyến nông, biến động thời tiết"],
    formulasAndModels: ["Quan hệ Cung - Cầu và Giá cả (Cung > Cầu, Cung < Cầu, Cung = Cầu)"],
    interactiveTools: ["Thẻ ghi chú học thuật", "Trực quan hóa ngọn hải đăng tín hiệu giá"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 5,
    chapter: "Chương 3",
    topic: "Số liệu thị trường Tết Nguyên đán 2025 & Bình ổn thị trường TP.HCM",
    keyElements: [
      "Biến động CPI tháng 01/2025 các nhóm hàng tiêu dùng Tết",
      "Chương trình bình ổn giá hàng thiết yếu dịp Tết của TP. Hồ Chí Minh"
    ],
    tablesAndData: [
      "CPI: Hàng ăn +0,74%, Thực phẩm +0,97%, Thịt lợn +2,45%, Quả tươi +1,53%, Rau -0,48%",
      "TP.HCM: Hơn 8.000 tỷ đồng, 8.000 tấn gạo, 5.000 tấn thịt gia súc, 5.500 tấn thịt gia cầm, 10.000 tấn rau"
    ],
    formulasAndModels: ["Mô hình điểm cân bằng thị trường P* và Q*"],
    interactiveTools: [
      "Biểu đồ biến động giá Tết 2025",
      "Interactive Supply & Demand Simulator với thanh trượt"
    ],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 6,
    chapter: "Chương 4",
    topic: "Quy luật Cạnh tranh: Khái niệm, Hai hình thức & Tác động hai mặt",
    keyElements: [
      "Định nghĩa quy luật cạnh tranh",
      "Cạnh tranh trong nội bộ ngành -> Giá trị thị trường",
      "Cạnh tranh giữa các ngành -> Tỷ suất lợi nhuận bình quân",
      "Tác động tích cực và mặt trái tiêu cực (hành vi phi pháp, độc quyền)"
    ],
    tablesAndData: ["Phân loại cạnh tranh hoàn hảo vs không hoàn hảo"],
    formulasAndModels: ["Cơ chế bình quân hóa tỷ suất lợi nhuận"],
    interactiveTools: ["Ma trận so sánh hình thức cạnh tranh"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 7,
    chapter: "Chương 4",
    topic: "Số liệu Cạnh tranh Thương mại điện tử Việt Nam 2024: Shopee vs TikTok Shop",
    keyElements: [
      "Thực trạng cuộc đua sàn TMĐT tại Việt Nam năm 2024",
      "Chiến lược logistics SPX Express của Shopee",
      "Chiến lược Shoppertainment và Livestream của TikTok Shop"
    ],
    tablesAndData: [
      "Shopee: GMV 9,3 tỷ USD, Thị phần 66,7%, Tăng trưởng 41%",
      "TikTok Shop: GMV 3,8 tỷ USD, Thị phần 26,9%, Tăng trưởng 99%",
      "Ghi chú phạm vi 4 sàn khảo sát"
    ],
    formulasAndModels: ["Công thức tính GMV và Tỷ lệ chiếm lĩnh thị phần"],
    interactiveTools: [
      "Biểu đồ thị phần và GMV TMĐT 2024",
      "Game tương tác: Bạn là Quản lý Sàn Thương mại điện tử"
    ],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 8,
    chapter: "Chương 5",
    topic: "Quy luật Lưu thông Tiền tệ & Công thức Karl Marx",
    keyElements: [
      "Định nghĩa quy luật lưu thông tiền tệ",
      "Bản chất tiền tệ là thước đo giá trị và phương tiện lưu thông",
      "Ý nghĩa quản lý tiền tệ vĩ mô (chống lạm phát, thiểu phát)"
    ],
    tablesAndData: ["Mối quan hệ tỷ lệ giữa M, P, Q, V"],
    formulasAndModels: [
      "Công thức KaTeX: M = (P × Q) / V",
      "Công thức mở rộng: M = [(P × Q) - Gc + Gd - Gk] / V"
    ],
    interactiveTools: ["Trình hiển thị KaTeX sắc nét"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 9,
    chapter: "Chương 5",
    topic: "Dữ liệu Kinh tế Việt Nam 2025 & Tác động của Thanh toán số",
    keyElements: [
      "Chuyển đổi số ngân hàng, QR Code làm tăng vòng quay tiền tệ V",
      "Tăng trưởng tổng phương tiện thanh toán M2 và tín dụng năm 2025",
      "Lưu ý học thuật: Không suy diễn cung tiền tự động gây lạm phát"
    ],
    tablesAndData: [
      "M2 tăng: 14,98%",
      "Tín dụng tăng: 17,65%",
      "CPI 2025 tăng: 3,31% (so với CPI 2024 tăng 3,63%)",
      "GDP 2025 tăng trưởng: 8,02%"
    ],
    formulasAndModels: ["Mô hình kiểm định tương quan Cung tiền - Tăng trưởng thực chất"],
    interactiveTools: [
      "Máy tính lưu thông tiền tệ Money Circulation Calculator",
      "Biểu đồ chỉ số vĩ mô Việt Nam 2025"
    ],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 10,
    chapter: "Chương 6 & Chương 7",
    topic: "Mối quan hệ Biện chứng giữa Bốn Quy luật & Ví dụ Cà phê xuyên suốt",
    keyElements: [
      "Giá trị: Nền tảng chiều sâu",
      "Cung - Cầu: Cơ chế bề mặt",
      "Cạnh tranh: Động lực cơ chế",
      "Lưu thông tiền tệ: Huyết mạch thanh khoản",
      "Minh họa chuỗi giá trị cà phê Tây Nguyên xuyên suốt 4 quy luật"
    ],
    tablesAndData: ["Ma trận liên kết 4 quy luật"],
    formulasAndModels: ["Mô hình hệ thống tự cân bằng thị trường"],
    interactiveTools: ["Interactive SVG/Canvas Mindmap liên kết 4 quy luật"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 11,
    chapter: "Chương 7",
    topic: "Kết luận Sư phạm & Bài học cho Doanh nghiệp, Sinh viên trong Kinh tế thị trường định hướng XHCN",
    keyElements: [
      "Khẳng định vai trò khách quan của 4 quy luật",
      "Mô hình kinh tế thị trường định hướng XHCN tại Việt Nam",
      "Bốn bài học hành động cho sinh viên và giới khởi nghiệp",
      "Lời kết sư phạm từ Khoa Lý luận Chính trị"
    ],
    tablesAndData: ["Khung hành động 4 bước vận dụng thực tiễn"],
    formulasAndModels: ["Mô hình Bàn tay vô hình + Bàn tay hữu hình"],
    interactiveTools: ["Trắc nghiệm kết luận học tập"],
    status: 'Full Coverage 100%'
  },
  {
    pdfPage: 12,
    chapter: "Chương 7",
    topic: "Danh mục 10 Tài liệu Tham khảo Chính thức",
    keyElements: [
      "Đầy đủ 10 tài liệu tham khảo chính thức",
      "Tác giả, cơ quan ban hành, năm xuất bản, liên kết truy cập hợp lệ",
      "Ghi chú sư phạm định hướng tra cứu cho sinh viên"
    ],
    tablesAndData: ["10/10 nguồn trích dẫn đầy đủ"],
    formulasAndModels: ["Chuẩn trích dẫn học thuật APA/ISO"],
    interactiveTools: ["Bảng tra cứu thư mục tham khảo tương tác có link"],
    status: 'Full Coverage 100%'
  }
];
