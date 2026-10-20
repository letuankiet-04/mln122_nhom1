import { QuizQuestion } from '../types/book';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    sourcePdfPage: 1,
    chapterId: 1,
    type: 'multiple_choice',
    question: 'Điều kiện nào sau đây là tiền đề tất yếu trực tiếp dẫn đến việc mỗi người chỉ sản xuất một vài sản phẩm nhưng có nhu cầu nhiều sản phẩm khác nhau?',
    options: [
      'Sự phân công lao động xã hội',
      'Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể',
      'Sự ra đời của tiền tệ kim loại',
      'Chế độ sở hữu tư nhân về tư liệu sản xuất'
    ],
    correctAnswerIndex: 0,
    explanation: 'Phân công lao động xã hội dẫn đến chuyên môn hóa sản xuất: mỗi cá nhân hoặc đơn vị chỉ làm ra một hoặc một số loại sản phẩm, trong khi nhu cầu tiêu dùng lại đa dạng, buộc họ phải liên hệ và trao đổi với nhau thông qua thị trường.',
    practicalContext: 'Ví dụ: Người nông dân trồng trọt chỉ có lúa gạo nhưng cần quần áo, thuốc men, xe cộ do thợ may, thầy thuốc, kỹ sư sản xuất.'
  },
  {
    id: 'q2',
    sourcePdfPage: 2,
    chapterId: 2,
    type: 'multiple_choice',
    question: 'Theo Quy luật Giá trị, thước đo khách quan để định giá và thực hiện trao đổi hàng hóa trên thị trường là gì?',
    options: [
      'Hao phí lao động cá biệt của doanh nghiệp dẫn đầu',
      'Hao phí lao động xã hội cần thiết',
      'Chi phí khấu hao máy móc công nghệ cao',
      'Mức giá do người mua tự ý áp đặt'
    ],
    correctAnswerIndex: 1,
    explanation: 'Quy luật giá trị quy định rằng sản xuất và trao đổi hàng hóa phải căn cứ vào hao phí lao động xã hội cần thiết, tức thời gian lao động cần thiết trong điều kiện sản xuất bình thường, trình độ kỹ năng trung bình và cường độ lao động trung bình của xã hội.',
    practicalContext: 'Nếu một hộ cá biệt làm mất 10 giờ để dệt một tấm vải trong khi mức trung bình xã hội chỉ là 4 giờ, thị trường chỉ trả tiền theo giá trị 4 giờ lao động.'
  },
  {
    id: 'q3',
    sourcePdfPage: 3,
    chapterId: 2,
    type: 'case_study',
    question: 'Trong nghiên cứu hộ trồng cà phê năm 2019 tại Tây Nguyên, nhóm hộ có chứng nhận SC đạt lợi nhuận gộp cao hơn nhóm không chứng nhận bao nhiêu phần trăm?',
    options: [
      '+9,6%',
      '+5,1%',
      '+20,4%',
      '+15,5%'
    ],
    correctAnswerIndex: 2,
    explanation: 'Theo bảng số liệu trong tài liệu: Lợi nhuận gộp của nhóm có chứng nhận SC đạt 68,366 triệu đồng/ha so với 56,763 triệu đồng/ha của nhóm không chứng nhận, cao hơn 20,4% (năng suất cao hơn 9,6%, giá bán cao hơn 5,1%).',
    practicalContext: 'Nghiên cứu chứng minh việc ứng dụng tiêu chuẩn kỹ thuật bền vững (SC) giúp hộ nông dân tối ưu hóa giá trị thu về vượt trội so với chi phí đầu vào tăng thêm.'
  },
  {
    id: 'q4',
    sourcePdfPage: 4,
    chapterId: 2,
    type: 'true_false',
    question: 'Quy luật giá trị là nguyên nhân duy nhất và tuyệt đối tạo ra sự chênh lệch về năng suất và lợi nhuận giữa hai nhóm hộ trồng cà phê năm 2019.',
    options: [
      'Đúng (Quy luật giá trị chi phối hoàn toàn)',
      'Sai (Còn chịu ảnh hưởng của thổ nhưỡng, vốn liếng, khuyến nông, biến động thời tiết)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Lưu ý học thuật trong tài liệu nhấn mạnh: "Không kết luận quy luật giá trị là nguyên nhân duy nhất tạo ra chênh lệch giữa hai nhóm hộ", vì kết quả thực nghiệm còn chịu sự tác động đồng thời của điều kiện đất đai, quy mô vốn, trình độ học vấn nông hộ và chính sách khuyến nông.',
    practicalContext: 'Cần có tư duy biện chứng, đa chiều khi phân tích các hiện tượng kinh tế thực tế.'
  },
  {
    id: 'q5',
    sourcePdfPage: 5,
    chapterId: 3,
    type: 'multiple_choice',
    question: 'Trong tháng 01/2025 phục vụ Tết, mặt hàng nào ghi nhận mức tăng giá cao nhất (+2,45%) do nhu cầu làm cỗ truyền thống tăng vọt?',
    options: [
      'Quả tươi và chế biến',
      'Thịt lợn',
      'Dịch vụ vận tải hành khách',
      'Rau tươi, khô và chế biến'
    ],
    correctAnswerIndex: 1,
    explanation: 'Theo dữ liệu CPI tháng 01/2025 trong tài liệu: Thịt lợn tăng mạnh nhất (+2,45%), tiếp theo là quả tươi (+1,53%), trong khi rau xanh lại giảm -0,48% do nguồn cung vụ đông dồi dào.',
    practicalContext: 'Thịt lợn là nguyên liệu cốt lõi cho bánh chưng, giò lụa, nem rán và các món ăn cúng Tết cổ truyền của người Việt.'
  },
  {
    id: 'q6',
    sourcePdfPage: 7,
    chapterId: 4,
    type: 'multiple_choice',
    question: 'Năm 2024, nền tảng thương mại điện tử nào đạt mức tăng trưởng GMV ấn tượng nhất (99%) nhờ mô hình Shoppertainment và livestream?',
    options: [
      'Shopee',
      'TikTok Shop',
      'Lazada',
      'Tiki'
    ],
    correctAnswerIndex: 1,
    explanation: 'Theo báo cáo Metric 2024 trong tài liệu: TikTok Shop đạt GMV 3,8 tỷ USD, thị phần 26,9% với mức tăng trưởng vượt bậc 99%, trong khi Shopee dẫn đầu về quy mô với GMV 9,3 tỷ USD (thị phần 66,7%, tăng trưởng 41%).',
    practicalContext: 'Chiến lược kết hợp giải trí trực quan và mua sắm tức thì là ví dụ điển hình cho cạnh tranh bằng mô hình kinh doanh đổi mới.'
  },
  {
    id: 'q7',
    sourcePdfPage: 8,
    chapterId: 5,
    type: 'multiple_choice',
    question: 'Trong công thức lưu thông tiền tệ của Karl Marx M = (P × Q) / V, biến số V đại diện cho đại lượng nào?',
    options: [
      'Tổng khối lượng hàng hóa lưu thông',
      'Mức giá cả trung bình của giỏ hàng',
      'Tốc độ lưu thông bình quân của một đơn vị tiền tệ',
      'Khối lượng tiền mặt in ấn trong kho bạc'
    ],
    correctAnswerIndex: 2,
    explanation: 'Trong công thức: M là khối lượng tiền cần thiết, P là mức giá cả, Q là khối lượng hàng hóa (P × Q là tổng giá cả hàng hóa), và V là tốc độ lưu thông bình quân của một đơn vị tiền tệ (số lần đồng tiền chuyển tay trong kỳ).',
    practicalContext: 'Khi người dân thanh toán nhanh qua quét mã QR hoặc thẻ tín dụng, V tăng lên, giúp nền kinh tế cần ít tiền mặt giấy hơn.'
  },
  {
    id: 'q8',
    sourcePdfPage: 9,
    chapterId: 5,
    type: 'true_false',
    question: 'Việc tổng phương tiện thanh toán (M2) tăng 14,98% và tín dụng tăng 17,65% trong năm 2025 tại Việt Nam chắc chắn sẽ tự động gây ra lạm phát tương ứng.',
    options: [
      'Đúng (Cung tiền tăng ắt dẫn tới lạm phát tương ứng theo thuyết tiền tệ giản đơn)',
      'Sai (Tiền được hấp thụ hiệu quả vào sản xuất kinh doanh thực chất, CPI thực tế chỉ tăng 3,31%)'
    ],
    correctAnswerIndex: 1,
    explanation: 'Tài liệu nêu rõ: "Không suy diễn máy móc rằng việc tăng trưởng cung tiền hay tín dụng tự động gây ra lạm phát tương ứng". Năm 2025, GDP tăng trưởng cao 8,02% đã hấp thụ lượng tiền đưa vào lưu thông, cùng với công tác điều hành vĩ mô linh hoạt giúp CPI được kiềm chế ở mức 3,31% (thấp hơn 2024).',
    practicalContext: 'Tín dụng chảy vào các dự án hạ tầng, công nghệ cao và sản xuất hàng xuất khẩu tạo ra của cải thực tế cân đối với dòng tiền.'
  },
  {
    id: 'q9',
    sourcePdfPage: 10,
    chapterId: 6,
    type: 'multiple_choice',
    question: 'Trong mối quan hệ giữa bốn quy luật cơ bản, quy luật nào giữ vai trò "CƠ SỞ NỀN TẢNG" chi phối chiều sâu giá trị của hàng hóa?',
    options: [
      'Quy luật Cung – Cầu',
      'Quy luật Cạnh tranh',
      'Quy luật Giá trị',
      'Quy luật Lưu thông tiền tệ'
    ],
    correctAnswerIndex: 2,
    explanation: 'Quy luật giá trị là quy luật kinh tế căn bản của sản xuất hàng hóa, đóng vai trò nền tảng xác định giá trị xã hội. Quy luật cung - cầu là cơ chế bề mặt điều chỉnh giá cả xoay quanh giá trị, quy luật cạnh tranh là động lực thúc đẩy, và quy luật lưu thông tiền tệ là huyết mạch thanh khoản.',
    practicalContext: 'Mọi biến động giá cả trên sàn thương mại điện tử hay chợ truyền thống suy cho cùng đều bị neo giữ bởi hao phí lao động xã hội cần thiết.'
  },
  {
    id: 'q10',
    sourcePdfPage: 11,
    chapterId: 7,
    type: 'multiple_choice',
    question: 'Trong mô hình kinh tế thị trường định hướng xã hội chủ nghĩa tại Việt Nam, sự kết hợp nào là đúng đắn nhất?',
    options: [
      'Chỉ dựa vào sự tự điều tiết hoàn toàn tự do của thị trường, xóa bỏ can thiệp nhà nước',
      'Tôn trọng các quy luật khách quan của thị trường kết hợp với sự quản lý, điều tiết vĩ mô của Nhà nước pháp quyền',
      'Duy trì cơ chế kế hoạch hóa tập trung, bao cấp tuyệt đối mọi giá cả',
      'Cấm mọi hình thức cạnh tranh nhằm tránh phân hóa giàu nghèo'
    ],
    correctAnswerIndex: 1,
    explanation: 'Kinh tế thị trường định hướng XHCN phát huy tối đa sức mạnh của các quy luật khách quan (giá trị, cung cầu, cạnh tranh, lưu thông tiền tệ) nhằm giải phóng sức sản xuất, đồng thời giữ vững vai trò điều tiết của Nhà nước để bảo đảm công bằng, an sinh xã hội và phát triển bền vững.',
    practicalContext: 'Ví dụ: Nhà nước triển khai gói bình ổn giá Tết 8.000 tỷ đồng tại TP.HCM vừa tôn trọng cung cầu thị trường vừa bảo vệ đời sống nhân dân lao động.'
  }
];
