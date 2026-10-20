import { BookChapter, BookPageData, CoffeeFarmerData, TetPriceData, EcommercePlatformData, ReferenceItem } from '../types/book';

export const BOOK_METADATA = {
  title: "KINH TẾ HÀNG HÓA & BỐN QUY LUẬT CƠ BẢN",
  subtitle: "Khám phá những quy luật vận động của nền kinh tế thị trường",
  subject: "MLN122 — Kinh tế chính trị Mác – Lênin",
  faculty: "Khoa Lý luận Chính trị — Giáo trình Đại học",
  curriculum: "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể tham gia thị trường",
  totalPagesPdf: 12,
  edition: "Ấn bản Sách điện tử Tương tác Đa phương tiện 3D (2025 - 2026)",
};

export const CHAPTERS: BookChapter[] = [
  {
    id: 1,
    title: "Chương 1: Khái quát Nền kinh tế hàng hóa",
    subtitle: "Bản chất, điều kiện ra đời và chu trình vận động",
    sourcePages: "Trang 1 PDF",
    description: "Khám phá sự chuyển biến từ kinh tế tự nhiên sang kinh tế hàng hóa, 2 điều kiện lịch sử khách quan và chu trình 4 khâu sản xuất - phân phối - trao đổi - tiêu dùng.",
    iconName: "ShoppingBag",
    color: "#d97706"
  },
  {
    id: 2,
    title: "Chương 2: Quy luật Giá trị",
    subtitle: "Quy luật kinh tế căn bản của sản xuất hàng hóa",
    sourcePages: "Trang 1–4 PDF",
    description: "Hao phí lao động cá biệt và xã hội cần thiết, nguyên tắc trao đổi ngang giá, 3 tác động to lớn và bằng chứng thực nghiệm từ nghiên cứu hộ trồng cà phê Việt Nam 2019.",
    iconName: "Scale",
    color: "#b45309"
  },
  {
    id: 3,
    title: "Chương 3: Quy luật Cung – Cầu",
    subtitle: "Cơ chế tự điều tiết giá cả và phân bổ nguồn lực",
    sourcePages: "Trang 4–5 PDF",
    description: "Quan hệ cung - cầu, tín hiệu giá cả thị trường và phân tích thực tế thị trường Tết Nguyên đán 2025 cùng chương trình bình ổn thị trường tại TP.HCM.",
    iconName: "TrendingUp",
    color: "#059669"
  },
  {
    id: 4,
    title: "Chương 4: Quy luật Cạnh tranh",
    subtitle: "Động lực thúc đẩy lực lượng sản xuất và thị trường",
    sourcePages: "Trang 5–8 PDF",
    description: "Cạnh tranh nội bộ ngành, cạnh tranh giữa các ngành, mặt tích cực - tiêu cực và nghiên cứu cuộc đua nghìn tỷ giữa Shopee và TikTok Shop năm 2024.",
    iconName: "Zap",
    color: "#2563eb"
  },
  {
    id: 5,
    title: "Chương 5: Quy luật Lưu thông tiền tệ",
    subtitle: "Quy luật huyết mạch tài chính của nền kinh tế",
    sourcePages: "Trang 8–10 PDF",
    description: "Công thức xác định lượng tiền cần thiết M = (P × Q) / V, tác động của thanh toán số và phân tích dữ liệu vĩ mô cung tiền - lạm phát Việt Nam năm 2025.",
    iconName: "Coins",
    color: "#7c3aed"
  },
  {
    id: 6,
    title: "Chương 6: Mối quan hệ giữa Bốn Quy luật",
    subtitle: "Sự vận động đồng bộ trong cơ chế thị trường",
    sourcePages: "Trang 10 PDF",
    description: "Phân tích mối liên hệ biện chứng đa chiều giữa Giá trị, Cung - Cầu, Cạnh tranh và Lưu thông tiền tệ qua ví dụ thực tiễn thị trường cà phê Việt Nam.",
    iconName: "GitMerge",
    color: "#db2777"
  },
  {
    id: 7,
    title: "Chương 7: Kết luận & Tài liệu tham khảo",
    subtitle: "Tổng kết sư phạm và thư mục học thuật chuẩn",
    sourcePages: "Trang 10–12 PDF",
    description: "Tổng hợp bài học lý luận và thực tiễn cho sinh viên, doanh nghiệp cùng hệ thống 10 tài liệu tham khảo chính thống của môn học MLN122.",
    iconName: "BookOpenCheck",
    color: "#475569"
  }
];

export const COFFEE_FARMER_RESEARCH_2019: CoffeeFarmerData[] = [
  {
    indicator: "Năng suất bình quân",
    certifiedSC: "3.215,77",
    nonCertified: "2.933,25",
    diffPercent: "+9,6%",
    unit: "kg/ha"
  },
  {
    indicator: "Giá bán bình quân",
    certifiedSC: "34.820",
    nonCertified: "33.140",
    diffPercent: "+5,1%",
    unit: "đồng/kg"
  },
  {
    indicator: "Tổng doanh thu",
    certifiedSC: "112,347",
    nonCertified: "97,229",
    diffPercent: "+15,5%",
    unit: "triệu đồng/ha"
  },
  {
    indicator: "Tổng chi phí đầu vào",
    certifiedSC: "43,982",
    nonCertified: "40,466",
    diffPercent: "+8,7%",
    unit: "triệu đồng/ha"
  },
  {
    indicator: "Lợi nhuận gộp",
    certifiedSC: "68,366",
    nonCertified: "56,763",
    diffPercent: "+20,4%",
    unit: "triệu đồng/ha"
  }
];

export const TET_2025_PRICE_DATA: TetPriceData[] = [
  { category: "Hàng ăn và dịch vụ ăn uống", changePercent: 0.74, note: "Nhu cầu tiệc tất niên, ăn uống liên hoan dịp cận Tết tăng cao" },
  { category: "Thực phẩm nói chung", changePercent: 0.97, note: "Giá các mặt hàng lương thực thực phẩm phục vụ Tết tăng nhẹ" },
  { category: "Thịt lợn", changePercent: 2.45, note: "Nhu cầu làm giò chả, gói bánh chưng bánh tét tăng đột biến" },
  { category: "Quả tươi và chế biến", changePercent: 1.53, note: "Phục vụ phong tục bày mâm ngũ quả ngày Tết gia đình Việt" },
  { category: "Rau tươi, khô và chế biến", changePercent: -0.48, note: "Nguồn cung vụ đông dồi dào, thời tiết thuận lợi giúp giá rau hạ nhiệt" }
];

export const HCMC_TET_RESERVES = {
  totalValueVND: "Hơn 8.000 tỷ đồng",
  riceTons: 8000,
  livestockMeatTons: 5000,
  poultryMeatTons: 5500,
  fruitsVegetablesTons: 10000
};

export const ECOMMERCE_DATA_2024: EcommercePlatformData[] = [
  {
    platform: "Shopee",
    gmvBillionUSD: 9.3,
    marketSharePercent: 66.7,
    growthPercent: 41,
    highlight: "Dẫn đầu tuyệt đối về quy mô, hạ tầng logistics SPX Express và hệ sinh thái voucher"
  },
  {
    platform: "TikTok Shop",
    gmvBillionUSD: 3.8,
    marketSharePercent: 26.9,
    growthPercent: 99,
    highlight: "Bứt phá thần tốc nhờ mô hình Shoppertainment, livestream mua sắm trực tiếp và thuật toán đề xuất"
  },
  {
    platform: "Các sàn còn lại (Lazada, Tiki)",
    gmvBillionUSD: 0.89,
    marketSharePercent: 6.4,
    growthPercent: -12,
    highlight: "Chịu sức ép cạnh tranh gay gắt từ hai gã khổng lồ, tái cấu trúc chi phí vận hành"
  }
];

export const VIETNAM_MACRO_2025 = {
  m2GrowthPercent: 14.98,
  creditGrowthPercent: 17.65,
  cpi2025Percent: 3.31,
  cpi2024Percent: 3.63,
  gdp2025Percent: 8.02,
  analysis: "Tốc độ tăng trưởng cung tiền M2 (14,98%) và tín dụng (17,65%) đáp ứng nguồn vốn cho tăng trưởng GDP ấn tượng đạt 8,02%, trong khi CPI được kiểm soát ổn định ở mức 3,31% (thấp hơn mức 3,63% của năm 2024). Điều này chứng minh quy luật lưu thông tiền tệ được vận dụng chủ động, linh hoạt, hấp thụ tốt vào sản xuất thực."
};

export const REFERENCES_LIST: ReferenceItem[] = [
  {
    id: 1,
    author: "Bộ Giáo dục và Đào tạo",
    year: 2021,
    title: "Giáo trình Kinh tế chính trị Mác – Lênin (Dành cho bậc đại học hệ không chuyên lý luận chính trị)",
    publisher: "NXB Chính trị quốc gia Sự thật, Hà Nội",
    url: "https://nxbctqg.org.vn",
    annotation: "Giáo trình chuẩn quốc gia quy định kiến thức nền tảng về hàng hóa, giá trị và các quy luật kinh tế thị trường."
  },
  {
    id: 2,
    author: "C. Mác (Karl Marx)",
    year: "1867 / 2002",
    title: "Tư bản – Phê phán khoa kinh tế chính trị, Quyển thứ nhất, Tập I: Quá trình sản xuất của tư bản",
    publisher: "NXB Sự thật, Hà Nội (Bản dịch tiếng Việt)",
    url: "https://www.marxists.org/vietnamese/marx-engels/1867-capital/index.htm",
    annotation: "Tác phẩm kinh điển nền tảng đặt cơ sở lý luận cho quy luật giá trị và quy luật lưu thông tiền tệ."
  },
  {
    id: 3,
    author: "V.I. Lênin",
    year: "1916 / 1980",
    title: "Chủ nghĩa đế quốc, giai đoạn tột cùng của chủ nghĩa tư bản",
    publisher: "V.I. Lênin Toàn tập, Tập 27, NXB Chính trị quốc gia, Hà Nội",
    url: "https://www.marxists.org/vietnamese/lenin/1916-imperialism/index.htm",
    annotation: "Phân tích sự phát triển của quy luật cạnh tranh từ tự do cạnh tranh chuyển sang cạnh tranh độc quyền."
  },
  {
    id: 4,
    author: "Tổng cục Thống kê Việt Nam (GSO)",
    year: 2025,
    title: "Báo cáo Tình hình kinh tế – xã hội tháng 1 và cả năm 2024 – 2025",
    publisher: "Tổng cục Thống kê, Bộ Kế hoạch và Đầu tư, Hà Nội",
    url: "https://www.gso.gov.vn",
    annotation: "Cung cấp số liệu chính thống về CPI tháng 01/2025, tăng trưởng GDP 8,02% và diễn biến giá cả hàng tiêu dùng."
  },
  {
    id: 5,
    author: "Viện Khoa học Nông nghiệp Việt Nam (VAAS) & Viện Nghiên cứu Cà phê",
    year: 2019,
    title: "Khảo sát thực nghiệm hiệu quả kinh tế và năng suất của nông hộ sản xuất cà phê có chứng nhận bền vững tại Tây Nguyên",
    publisher: "Tạp chí Khoa học Nông nghiệp Việt Nam",
    url: "https://vaas.vn",
    annotation: "Nguồn dữ liệu gốc cho bảng so sánh hộ trồng cà phê có chứng nhận SC và không chứng nhận năm 2019."
  },
  {
    id: 6,
    author: "Sở Công Thương TP. Hồ Chí Minh",
    year: 2025,
    title: "Kế hoạch chuẩn bị nguồn hàng phục vụ Tết Nguyên đán 2025 và triển khai Chương trình Bình ổn thị trường",
    publisher: "Ủy ban Nhân dân TP. Hồ Chí Minh",
    url: "https://soct.hochiminhcity.gov.vn",
    annotation: "Nguồn số liệu cho hơn 8.000 tỷ đồng hàng hóa thiết yếu và khối lượng thực phẩm dự trữ dịp Tết 2025."
  },
  {
    id: 7,
    author: "Metric.vn — Nền tảng Số liệu E-commerce",
    year: 2025,
    title: "Báo cáo Toàn cảnh thị trường Thương mại điện tử Việt Nam năm 2024 và Dự báo 2025",
    publisher: "Metric E-commerce Insights, Hà Nội",
    url: "https://metric.vn",
    annotation: "Nguồn dữ liệu thị phần Shopee (66,7%), TikTok Shop (26,9%) và quy mô GMV các nền tảng TMĐT 2024."
  },
  {
    id: 8,
    author: "Ngân hàng Nhà nước Việt Nam (SBV)",
    year: 2025,
    title: "Báo cáo Thường niên về điều hành chính sách tiền tệ, tăng trưởng tín dụng và tổng phương tiện thanh toán",
    publisher: "Ngân hàng Nhà nước Việt Nam, Hà Nội",
    url: "https://sbv.gov.vn",
    annotation: "Nguồn chính thức cho số liệu tăng trưởng M2 (14,98%) và tăng trưởng tín dụng (17,65%) năm 2025."
  },
  {
    id: 9,
    author: "Quốc hội Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam",
    year: 2018,
    title: "Luật Cạnh tranh số 23/2018/QH14 (có hiệu lực từ ngày 01/07/2019)",
    publisher: "Cổng Thông tin Điện tử Chính phủ, Hà Nội",
    url: "https://vanban.chinhphu.vn",
    annotation: "Cơ sở pháp lý điều chỉnh các hành vi thỏa thuận hạn chế cạnh tranh, lạm dụng vị trí thống lĩnh và cạnh tranh không lành mạnh."
  },
  {
    id: 10,
    author: "World Bank (Ngân hàng Thế giới)",
    year: 2024,
    title: "Vietnam Development Report 2024: Navigating Global Economic Shifts and Digital Transformation",
    publisher: "World Bank Group, Washington D.C. & Hanoi",
    url: "https://www.worldbank.org/en/country/vietnam",
    annotation: "Báo cáo phân tích tác động của kinh tế số, thanh toán không tiền mặt và chuỗi cung ứng nông sản Việt Nam."
  }
];

// Rich, comprehensive 16 pages structured across the 12 PDF source pages
export const BOOK_PAGES: BookPageData[] = [
  // Page 1: Chapter 1 Cover & Concepts (Source: PDF Page 1)
  {
    pageNumber: 1,
    chapterId: 1,
    chapterTitle: "Chương 1: Khái quát Nền kinh tế hàng hóa",
    sourcePdfPage: 1,
    title: "Khái niệm và Bản chất của Nền kinh tế hàng hóa",
    subtitle: "Chuyển từ kinh tế tự nhiên, tự cấp tự túc sang kinh tế hàng hóa",
    contentMarkdown: `
### 1. Khái niệm nền kinh tế hàng hóa

Trong tiến trình lịch sử nhân loại, loài người từng trải qua hình thức **kinh tế tự nhiên (tự cấp tự túc)** — nơi sản phẩm được tạo ra nhằm thỏa mãn trực tiếp nhu cầu tiêu dùng nội bộ của người sản xuất hoặc cộng đồng khép kín.

Trái lại, **nền kinh tế hàng hóa** là mô hình kinh tế mà ở đó sản phẩm được sản xuất ra **không phải để người sản xuất tự tiêu dùng**, mà nhằm mục đích **trao đổi, mua bán trên thị trường**.

### 2. Hai điều kiện lịch sử tất yếu để sản xuất hàng hóa ra đời

Kinh tế hàng hóa không xuất hiện ngẫu nhiên, mà chỉ ra đời khi hội tụ đủ **hai điều kiện khách quan**:

1. **Phân công lao động xã hội:**
   * Sự chuyên môn hóa lao động xã hội thành các ngành, nghề khác nhau.
   * *Hệ quả:* Mỗi người chỉ sản xuất một hoặc một vài loại sản phẩm nhất định, nhưng nhu cầu sinh hoạt lại cần đến vô số sản phẩm khác nhau. Để tồn tại, họ buộc phải trao đổi sản phẩm với nhau.
2. **Sự tách biệt tương đối về mặt kinh tế giữa các chủ thể sản xuất:**
   * Do sự tồn tại của chế độ tư hữu hoặc các hình thức sở hữu khác nhau về tư liệu sản xuất.
   * *Hệ quả:* Người này muốn tiêu dùng sản phẩm của người khác thì không thể cưỡng đoạt, mà phải thông qua hình thức mua bán, trao đổi thuận mua vừa bán.
    `,
    callout: {
      type: 'definition',
      title: 'Định nghĩa cốt lõi — Nền kinh tế hàng hóa',
      content: 'Kinh tế hàng hóa là kiểu tổ chức kinh tế mà trong đó sản phẩm được sản xuất ra để trao đổi hoặc bán trên thị trường. Hai điều kiện tiên quyết: Phân công lao động xã hội và Sự tách biệt tương đối về kinh tế giữa các chủ thể.'
    },
    keyTakeaway: "Kinh tế hàng hóa mở đường cho sự phát triển vượt bậc của năng suất lao động và văn minh nhân loại so với kinh tế tự nhiên."
  },

  // Page 2: Chapter 1 Cycle & 4 Laws Intro (Source: PDF Page 1)
  {
    pageNumber: 2,
    chapterId: 1,
    chapterTitle: "Chương 1: Khái quát Nền kinh tế hàng hóa",
    sourcePdfPage: 1,
    title: "Chu trình Kinh tế 4 Khâu & Giới thiệu 4 Quy luật Cơ bản",
    subtitle: "Mối quan hệ hữu cơ trong chu chuyển giá trị xã hội",
    contentMarkdown: `
### 3. Chu trình 4 khâu vận động của nền kinh tế hàng hóa

Quá trình tái sản xuất xã hội diễn ra liên tục qua 4 mắt xích không thể tách rời:

* **Sản xuất (Production):** Khâu khởi đầu, giữ vai trò **quyết định** trực tiếp tạo ra của cải vật chất và giá trị sử dụng.
* **Phân phối (Distribution):** Phân chia tư liệu sản xuất và kết quả lao động cho các chủ thể trong xã hội.
* **Trao đổi (Exchange):** Cầu nối đưa sản phẩm từ người sản xuất đến tay người có nhu cầu tiêu dùng thông qua thị trường.
* **Tiêu dùng (Consumption):** Khâu kết thúc, là **mục đích tối hậu** và động lực thôi thúc một chu kỳ sản xuất mới bắt đầu.

### 4. Giới thiệu Bốn quy luật kinh tế khách quan

Nền kinh tế hàng hóa vận động theo các quy luật khách quan nội tại:

1. **Quy luật giá trị:** Quy luật kinh tế căn bản, điều tiết hao phí lao động và trao đổi tương đương.
2. **Quy luật cung – cầu:** Quy luật trực tiếp chi phối sự biến động của giá cả trên thị trường.
3. **Quy luật cạnh tranh:** Động lực thanh lọc, thúc đẩy đổi mới công nghệ và tối ưu hóa nguồn lực.
4. **Quy luật lưu thông tiền tệ:** Đảm bảo huyết mạch thanh toán cân đối với khối lượng hàng hóa lưu thông.
    `,
    callout: {
      type: 'academic_note',
      title: 'Tính chỉnh thể của 4 quy luật',
      content: 'Bốn quy luật này không hoạt động cô lập mà tác động đan xen: Quy luật giá trị là nền tảng, Cung - Cầu là cơ chế bề mặt, Cạnh tranh là động lực thúc đẩy, và Lưu thông tiền tệ là môi trường thanh khoản.'
    },
    keyTakeaway: "Nắm vững chu trình 4 khâu và 4 quy luật là chìa khóa để giải mã mọi hiện tượng kinh tế vi mô và vĩ mô."
  },

  // Page 3: Chapter 2 Law of Value Fundamentals (Source: PDF Page 1-2)
  {
    pageNumber: 3,
    chapterId: 2,
    chapterTitle: "Chương 2: Quy luật Giá trị",
    sourcePdfPage: 2,
    title: "Bản chất và Yêu cầu Khách quan của Quy luật Giá trị",
    subtitle: "Thước đo hao phí lao động xã hội cần thiết và trao đổi ngang giá",
    contentMarkdown: `
### 1. Định nghĩa Quy luật Giá trị

**Quy luật giá trị** là quy luật kinh tế căn bản nhất của sản xuất và trao đổi hàng hóa. Ở đâu có sản xuất và lưu thông hàng hóa, ở đó quy luật giá trị tồn tại và phát huy tác dụng.

### 2. Nội dung và Yêu cầu khách quan

Quy luật giá trị đòi hỏi việc sản xuất và trao đổi hàng hóa phải dựa trên cơ sở **hao phí lao động xã hội cần thiết**:

#### Trong sản xuất:
* Mỗi người sản xuất có điều kiện công nghệ, kỹ năng và môi trường làm việc khác nhau, tạo ra **hao phí lao động cá biệt**.
* Tuy nhiên, thị trường chỉ thừa nhận **hao phí lao động xã hội cần thiết** (thời gian lao động cần thiết để sản xuất ra một đơn vị hàng hóa trong điều kiện sản xuất bình thường, trình độ kỹ năng trung bình và cường độ lao động trung bình của xã hội).
* *Nguyên tắc sinh tồn:* $\\text{Hao phí LĐ cá biệt} \\le \\text{Hao phí LĐ xã hội cần thiết}$.

#### Trong lưu thông (Trao đổi):
* Hàng hóa phải được trao đổi theo **nguyên tắc ngang giá** (các hàng hóa có giá trị xã hội bằng nhau thì trao đổi được với nhau).
* Giá cả thị trường của từng đơn vị hàng hóa cụ thể có thể cao hơn hoặc thấp hơn giá trị do ảnh hưởng của cung - cầu và cạnh tranh.
* Song, xét trên phạm vi toàn xã hội trong một thời kỳ dài: **Tổng giá cả luôn bằng Tổng giá trị**.
    `,
    callout: {
      type: 'law',
      title: 'Quy tắc vàng của Quy luật Giá trị',
      content: 'Sản xuất và lưu thông hàng hóa phải căn cứ vào hao phí lao động xã hội cần thiết. Giá cả dao động quanh trục giá trị như con lắc dao động quanh vị trí cân bằng.'
    },
    keyTakeaway: "Doanh nghiệp không thể ép thị trường trả giá theo chi phí riêng của mình, mà phải chủ động hạ chi phí cá biệt xuống dưới mức xã hội."
  },

  // Page 4: Chapter 2 Three Impacts of Law of Value (Source: PDF Page 2-3)
  {
    pageNumber: 4,
    chapterId: 2,
    chapterTitle: "Chương 2: Quy luật Giá trị",
    sourcePdfPage: 3,
    title: "Ba Tác động To lớn của Quy luật Giá trị",
    subtitle: "Cơ chế điều tiết, kích thích công nghệ và phân hóa sản xuất",
    contentMarkdown: `
### 3. Ba tác động to lớn trong nền kinh tế

Dưới tác động của cơ chế thị trường, quy luật giá trị thực hiện ba chức năng kinh tế then chốt:

#### 1. Điều tiết sản xuất và lưu thông hàng hóa
* **Điều tiết sản xuất:** Khi một ngành hàng có giá cả cao hơn giá trị (cung < cầu, lợi nhuận cao), vốn và tư liệu sản xuất sẽ tự động dịch chuyển vào ngành đó. Ngược lại, ngành nào giá cả giảm thấp hơn giá trị, sản xuất sẽ thu hẹp lại.
* **Điều tiết lưu thông:** Hàng hóa tự giác chảy từ nơi có giá cả thấp (thừa hàng) đến nơi có giá cả cao (khan hiếm hàng).

#### 2. Kích thích cải tiến kỹ thuật, hợp lý hóa sản xuất, tăng năng suất lao động
* Để có lợi nhuận vượt trội và không bị phá sản, người sản xuất buộc phải tìm cách cải tiến công nghệ, nâng cao trình độ tay nghề, tiết kiệm nguyên vật liệu.
* Khi từng người sản xuất nỗ lực hạ hao phí cá biệt, kết quả tổng hợp là năng suất lao động của toàn xã hội được đẩy lên tầm cao mới.

#### 3. Phân hóa những người sản xuất hàng hóa thành giàu – nghèo
* Những người có điều kiện sản xuất tốt, nhanh nhạy với công nghệ và thị trường sẽ thu được lợi nhuận cao, tích lũy vốn và trở nên giàu có.
* Ngược lại, những người kỹ thuật lạc hậu, chi phí cá biệt vượt quá mức xã hội sẽ thua lỗ, khánh kiệt, thậm chí bị đào thải khỏi thương trường.
    `,
    callout: {
      type: 'case_study',
      title: 'Ý nghĩa triết học & thực tiễn',
      content: 'Sự phân hóa giàu nghèo dưới quy luật giá trị là kết quả tất yếu của cơ chế cạnh tranh tự do, đòi hỏi Nhà nước phải có chính sách an sinh và điều tiết thuế công bằng.'
    },
    keyTakeaway: "Quy luật giá trị vừa là chiếc gậy trừng phạt kẻ trì trệ, vừa là củ cà rốt tưởng thưởng cho người sáng tạo đổi mới."
  },

  // Page 5: Chapter 2 Coffee Case Study (Source: PDF Page 3-4)
  {
    pageNumber: 5,
    chapterId: 2,
    chapterTitle: "Chương 2: Quy luật Giá trị",
    sourcePdfPage: 3,
    title: "Nghiên cứu Thực nghiệm: Hộ trồng Cà phê Việt Nam (2019)",
    subtitle: "Dữ liệu chứng minh tác động cải tiến kỹ thuật và phân hóa lợi nhuận",
    contentMarkdown: `
### 4. Dữ liệu thực nghiệm hộ trồng cà phê Việt Nam năm 2019

Để minh chứng cho tác động kích thích cải tiến kỹ thuật và phân hóa lợi nhuận của quy luật giá trị, nghiên cứu năm 2019 khảo sát hai nhóm nông hộ trồng cà phê tại Tây Nguyên:

* Nhóm 1: Áp dụng tiêu chuẩn chứng nhận bền vững (**Có chứng nhận SC** - Sustainable Certified như 4C, Rainforest Alliance, UTZ).
* Nhóm 2: Canh tác truyền thống (**Không chứng nhận**).
    `,
    interactiveComponent: 'coffee_table_and_chart',
    callout: {
      type: 'academic_note',
      title: 'LƯU Ý HỌC THUẬT QUAN TRỌNG (BẮT BUỘC)',
      content: 'Không kết luận quy luật giá trị là nguyên nhân duy nhất tạo ra chênh lệch giữa hai nhóm hộ. Sự khác biệt còn chịu ảnh hưởng của các yếu tố tổng hợp: quy mô diện tích đất đai, nguồn vốn ban đầu, điều kiện thổ nhưỡng - khí hậu, trình độ học vấn nông hộ và sự hỗ trợ của các chương trình khuyến nông.'
    },
    keyTakeaway: "Hộ có chứng nhận chấp nhận chi phí đầu vào cao hơn 8,7% nhưng đổi lại năng suất tăng 9,6%, giá bán tăng 5,1%, giúp lợi nhuận gộp bứt phá ngoạn mục +20,4%."
  },

  // Page 6: Chapter 3 Law of Supply and Demand (Source: PDF Page 4-5)
  {
    pageNumber: 6,
    chapterId: 3,
    chapterTitle: "Chương 3: Quy luật Cung – Cầu",
    sourcePdfPage: 4,
    title: "Bản chất Quy luật Cung – Cầu & Tín hiệu Giá cả",
    subtitle: "Mối quan hệ tương tác quyết định điểm cân bằng thị trường",
    contentMarkdown: `
### 1. Khái niệm Cung và Cầu

* **Cầu (Demand):** Nhu cầu có khả năng thanh toán của xã hội đối với một loại hàng hóa, dịch vụ nhất định ở các mức giá khác nhau trong một khoảng thời gian xác định. (Không đồng nhất với ước muốn hay sở thích đơn thuần).
* **Cung (Supply):** Toàn bộ khối lượng hàng hóa, dịch vụ mà các chủ thể sản xuất sẵn sàng và có khả năng đưa ra thị trường tiêu thụ tại các mức giá khác nhau trong kỳ.

### 2. Mối quan hệ biện chứng giữa Cung, Cầu và Giá cả

* Khi **Cung > Cầu** (Dư thừa hàng hóa): Người bán cạnh tranh giảm giá để giải phóng hàng tồn kho $\\rightarrow$ **Giá cả thị trường < Giá trị** $\\rightarrow$ Sản xuất giảm.
* Khi **Cung < Cầu** (Khan hiếm hàng hóa): Người mua sẵn sàng trả giá cao để sở hữu hàng hóa $\\rightarrow$ **Giá cả thị trường > Giá trị** $\\rightarrow$ Lợi nhuận tăng, kích thích mở rộng sản xuất.
* Khi **Cung = Cầu**: Thị trường đạt trạng thái cân bằng $\\rightarrow$ **Giá cả thị trường = Giá trị**.

### 3. Vai trò của Tín hiệu Giá cả

Giá cả đóng vai trò như **ngọn hải đăng** chỉ đường:
* Đối với người sản xuất: Cho biết nên sản xuất mặt hàng gì, số lượng bao nhiêu, thời điểm nào.
* Đối với người tiêu dùng: Hướng dẫn cơ cấu tiêu dùng tối ưu để tiết kiệm ngân sách gia đình.
    `,
    callout: {
      type: 'law',
      title: 'Quy luật Cung - Cầu',
      content: 'Cung - cầu tác động qua lại lẫn nhau và trực tiếp quyết định giá cả thị trường; ngược lại, giá cả thị trường tác động điều chỉnh lại quy mô của cung và cầu.'
    },
    keyTakeaway: "Giá cả thị trường là giao điểm sống động giữa khả năng chi trả của người tiêu dùng và chi phí cung ứng của nhà sản xuất."
  },

  // Page 7: Chapter 3 Tet 2025 Case Study & Simulator (Source: PDF Page 5)
  {
    pageNumber: 7,
    chapterId: 3,
    chapterTitle: "Chương 3: Quy luật Cung – Cầu",
    sourcePdfPage: 5,
    title: "Minh chứng Thị trường Tết 2025 & Mô phỏng Cung – Cầu",
    subtitle: "Dữ liệu CPI tháng 01/2025 và chương trình bình ổn thị trường TP.HCM",
    contentMarkdown: `
### 4. Dữ liệu thực tế thị trường Tết Nguyên đán 2025

Diễn biến chỉ số giá tiêu dùng (CPI) tháng 01/2025 tại Việt Nam minh chứng rõ nét cho quy luật cung – cầu:

* **Thịt lợn (+2,45%) & Quả tươi (+1,53%):** Nhu cầu mâm cỗ Tết và thờ cúng tăng vọt đẩy giá lên cao.
* **Rau tươi, khô (-0,48%):** Nhờ nguồn cung vụ đông phía Bắc và Đà Lạt dồi dào, thời tiết thuận lợi nên giá giảm dù cầu Tết cao.

#### Chương trình chuẩn bị hàng hóa bình ổn tại TP. Hồ Chí Minh:
* Tổng giá trị hàng thiết yếu chuẩn bị: **Hơn 8.000 tỷ đồng**
* Gạo: gần **8.000 tấn** | Thịt gia súc: **5.000 tấn**
* Thịt gia cầm: **5.500 tấn** | Rau củ quả: **10.000 tấn**
    `,
    interactiveComponent: 'tet_market_data',
    keyTakeaway: "Sự can thiệp chủ động bằng nguồn hàng dự trữ bình ổn giúp thị trường tránh được các cơn sốt giá cục bộ trong các dịp cao điểm tiêu dùng."
  },

  // Page 8: Chapter 3 Simulator Tool (Interactive Tool)
  {
    pageNumber: 8,
    chapterId: 3,
    chapterTitle: "Chương 3: Quy luật Cung – Cầu",
    sourcePdfPage: 5,
    title: "Phòng Thí nghiệm Tương tác: Cung & Cầu",
    subtitle: "Mô phỏng đồ thị trực quan điểm cân bằng thị trường P* và Q*",
    contentMarkdown: `
### Thử nghiệm tương tác: Điều chỉnh biến số Cung và Cầu

Hãy sử dụng các thanh trượt bên dưới để thay đổi mức cung và mức cầu thị trường. Quan sát sự dịch chuyển của giao điểm cân bằng $(P^*, Q^*)$ và trạng thái thị trường tương ứng.

*(Lưu ý phương pháp luận: Đây là công cụ mô phỏng tương tác hỗ trợ học tập với các hệ số kinh tế giả định, giúp sinh viên nắm vững nguyên lý vận động của cung cầu).*
    `,
    interactiveComponent: 'supply_demand_simulator',
    callout: {
      type: 'definition',
      title: 'Điểm cân bằng thị trường (Equilibrium Point)',
      content: 'Là mức giá mà tại đó lượng cung vừa đúng bằng lượng cầu, không có hiện tượng dư thừa tồn kho hay thiếu hụt hàng hóa.'
    },
    keyTakeaway: "Khi cung cầu dịch chuyển đồng thời, hướng thay đổi của giá cả và sản lượng phụ thuộc vào biên độ tác động của từng yếu tố."
  },

  // Page 9: Chapter 4 Law of Competition (Source: PDF Page 5-7)
  {
    pageNumber: 9,
    chapterId: 4,
    chapterTitle: "Chương 4: Quy luật Cạnh tranh",
    sourcePdfPage: 6,
    title: "Bản chất, Hình thức & Tác động của Cạnh tranh",
    subtitle: "Động lực thúc đẩy lực lượng sản xuất và hai mặt của cạnh tranh",
    contentMarkdown: `
### 1. Khái niệm Cạnh tranh

**Cạnh tranh** là sự ganh đua giữa các chủ thể kinh tế nhằm giành giật những điều kiện thuận lợi nhất về sản xuất, phân phối và tiêu thụ hàng hóa nhằm thu được **lợi nhuận tối đa**.

### 2. Hai hình thức cạnh tranh cơ bản

1. **Cạnh tranh trong nội bộ ngành:**
   * Diễn ra giữa các doanh nghiệp cùng sản xuất một loại hàng hóa.
   * *Biện pháp:* Cải tiến kỹ thuật, nâng cao chất lượng, hạ giá thành.
   * *Kết quả:* Hình thành nên **giá trị thị trường (giá trị xã hội)** của hàng hóa.
2. **Cạnh tranh giữa các ngành:**
   * Diễn ra giữa các doanh nghiệp thuộc các ngành nghề sản xuất khác nhau.
   * *Mục tiêu:* Tìm kiếm ngành đầu tư có tỷ suất lợi nhuận cao nhất.
   * *Kết quả:* Dẫn tới sự dịch chuyển tự do của dòng vốn, hình thành nên **tỷ suất lợi nhuận bình quân** và **giá cả sản xuất**.

### 3. Tác động hai mặt của Quy luật Cạnh tranh

* **Tác động tích cực:**
  * Kích thích đổi mới công nghệ, tự động hóa quy trình sản xuất.
  * Tối ưu hóa phân bổ nguồn lực xã hội vào nơi sử dụng hiệu quả nhất.
  * Thỏa mãn nhu cầu đa dạng của người tiêu dùng với giá thành rẻ hơn.
* **Tác động tiêu cực & Cạnh tranh không lành mạnh:**
  * Xuất hiện các hành vi tiêu cực: buôn lậu, làm hàng giả, bán phá giá, đánh cắp bí mật thương mại, thao túng giá.
  * Dẫn tới độc quyền, làm méo mó cơ chế thị trường và gia tăng bất bình đẳng xã hội.
* **Vai trò của Nhà nước:** Cần ban hành và thực thi nghiêm Luật Cạnh tranh, kiểm soát độc quyền và bảo vệ người tiêu dùng.
    `,
    callout: {
      type: 'law',
      title: 'Quy luật Cạnh tranh',
      content: 'Cạnh tranh là động lực nội tại tuyệt đối không thể thiếu của kinh tế thị trường. Không có cạnh tranh sẽ dẫn tới trì trệ, bảo thủ và suy thoái.'
    },
    keyTakeaway: "Cạnh tranh lành mạnh tạo ra giá trị mới cho xã hội; cạnh tranh phi pháp hủy hoại niềm tin và tài nguyên chung."
  },

  // Page 10: Chapter 4 Ecommerce Case Study 2024 & Game (Source: PDF Page 7-8)
  {
    pageNumber: 10,
    chapterId: 4,
    chapterTitle: "Chương 4: Quy luật Cạnh tranh",
    sourcePdfPage: 7,
    title: "Thương chiến E-Commerce Việt Nam 2024 & Game Chiến lược",
    subtitle: "Dữ liệu Shopee vs TikTok Shop và thử thách nhà quản trị",
    contentMarkdown: `
### 4. Dữ liệu thực tế thị trường Thương mại điện tử 2024

Cuộc đối đầu giữa Shopee và TikTok Shop trong năm 2024 minh họa sâu sắc cho quy luật cạnh tranh hiện đại:

* **Shopee:** GMV **9,3 tỷ USD**, chiếm **66,7% thị phần** (trong 4 sàn khảo sát), tăng trưởng GMV **41%**. Chiếm ưu thế nhờ mạng lưới giao vận SPX Express phủ sóng toàn quốc và kho dữ liệu khách hàng khổng lồ.
* **TikTok Shop:** GMV **3,8 tỷ USD**, chiếm **26,9% thị phần**, tăng trưởng kỷ lục **99%**. Đột phá nhờ xu hướng *Shoppertainment* (mua sắm qua video ngắn và livestream giải trí tương tác).

*(Lưu ý học thuật: Thị phần trên thuộc phạm vi 4 nền tảng lớn được khảo sát gồm Shopee, TikTok Shop, Lazada, Tiki, không mặc nhiên là toàn bộ thị trường bán lẻ).*
    `,
    interactiveComponent: 'ecommerce_market_and_game',
    keyTakeaway: "TikTok Shop cạnh tranh bằng mô hình trải nghiệm mới lạ, trong khi Shopee củng cố vị thế bằng chuỗi cung ứng logistics vững chắc."
  },

  // Page 11: Chapter 5 Law of Money Circulation (Source: PDF Page 8-9)
  {
    pageNumber: 11,
    chapterId: 5,
    chapterTitle: "Chương 5: Quy luật Lưu thông tiền tệ",
    sourcePdfPage: 8,
    title: "Quy luật Lưu thông Tiền tệ & Công thức Karl Marx",
    subtitle: "Quy luật điều tiết huyết mạch thanh khoản của nền kinh tế",
    contentMarkdown: `
### 1. Khái niệm Quy luật Lưu thông Tiền tệ

**Quy luật lưu thông tiền tệ** là quy luật xác định lượng tiền cần thiết cho lưu thông hàng hóa trong một thời kỳ nhất định.

Tiền tệ đóng vai trò môi giới trong lưu thông ($H - T - H'$). Do đó, lượng tiền đưa vào lưu thông phải tương thích với tổng giá trị của khối lượng hàng hóa cần trao đổi.

### 2. Công thức Karl Marx tính lượng tiền cần thiết

Trong điều kiện lưu thông tiền mặt cơ bản, lượng tiền cần thiết ($M$) được xác định theo công thức:

$$M = \\frac{P \\times Q}{V}$$

Trong đó:
* **$M$:** Khối lượng tiền cần thiết cho lưu thông trong kỳ.
* **$P$:** Mức giá cả bình quân của một đơn vị hàng hóa, dịch vụ.
* **$Q$:** Tổng khối lượng hàng hóa, dịch vụ được đưa vào lưu thông trong kỳ.
* **$P \\times Q$:** Tổng giá cả của toàn bộ hàng hóa, dịch vụ lưu thông trong kỳ.
* **$V$:** Tốc độ lưu thông bình quân của một đơn vị tiền tệ (số vòng chu chuyển trung bình của đồng tiền trong kỳ).

#### Mở rộng khi xuất hiện hình thức bán chịu và thanh toán bù trừ:
$$M = \\frac{(P \\times Q) - G_c + G_d - G_k}{V}$$
*(Trong đó: $G_c$ là tổng giá cả hàng bán chịu; $G_d$ là tiền đến kỳ thanh toán; $G_k$ là tiền thanh toán bù trừ).*
    `,
    callout: {
      type: 'formula',
      title: 'Ý nghĩa kinh tế của công thức',
      content: 'Lượng tiền cần thiết tỷ lệ thuận với tổng giá cả hàng hóa (P × Q) và tỷ lệ nghịch với tốc độ chu chuyển tiền tệ (V).'
    },
    keyTakeaway: "Nếu đưa lượng tiền vượt quá lượng cần thiết, tiền tệ sẽ mất giá, sinh ra lạm phát; nếu thiếu tiền, lưu thông hàng hóa sẽ bị ách tắc."
  },

  // Page 12: Chapter 5 Calculator & Macro 2025 Data (Source: PDF Page 9-10)
  {
    pageNumber: 12,
    chapterId: 5,
    chapterTitle: "Chương 5: Quy luật Lưu thông tiền tệ",
    sourcePdfPage: 9,
    title: "Máy tính Lưu thông Tiền tệ & Dữ liệu Vĩ mô Việt Nam 2025",
    subtitle: "Công cụ tính M và phân tích tăng trưởng M2, tín dụng và lạm phát",
    contentMarkdown: `
### 3. Công cụ tính lượng tiền cần thiết (Karl Marx Formula)

Nhập các tham số để tính toán chính xác $M$ và quan sát giải thích từng bước.

*(Công cụ tự động kiểm tra tính hợp lệ của dữ liệu đầu vào theo chuẩn khoa học kinh tế).*
    `,
    interactiveComponent: 'money_circulation_calculator',
    callout: {
      type: 'academic_note',
      title: 'LƯU Ý HỌC THUẬT VỀ DỮ LIỆU VIỆT NAM 2025',
      content: 'Năm 2025, tổng phương tiện thanh toán (M2) của Việt Nam tăng 14,98%, tín dụng tăng 17,65%, song CPI chỉ tăng 3,31% (giảm so với mức 3,63% của năm 2024), trong khi GDP bứt phá 8,02%. Không suy diễn rằng tăng cung tiền tự động gây ra lạm phát tương ứng, bởi dòng tiền đã được điều tiết trúng đích vào khu vực sản xuất thực chất.'
    },
    keyTakeaway: "Thanh toán số và chuyển đổi ngân hàng giúp nâng cao tốc độ V, giảm áp lực phát hành tiền mặt vật lý."
  },

  // Page 13: Chapter 6 Synthesis and Dialectical Relationship (Source: PDF Page 10)
  {
    pageNumber: 13,
    chapterId: 6,
    chapterTitle: "Chương 6: Mối quan hệ giữa Bốn Quy luật",
    sourcePdfPage: 10,
    title: "Mối quan hệ Biện chứng giữa Bốn Quy luật Cơ bản",
    subtitle: "Bản giao hưởng đồng bộ vận hành nền kinh tế thị trường",
    contentMarkdown: `
### 1. Sự tác động tương hỗ giữa bốn quy luật

Bốn quy luật kinh tế không tồn tại độc lập mà gắn kết thành một chỉnh thể hữu cơ:

* **Quy luật giá trị là CƠ SỞ NỀN TẢNG:** Xác định thước đo giá trị nội tại của mọi hàng hóa dựa trên hao phí lao động xã hội cần thiết.
* **Quy luật cung – cầu là CƠ CHẾ BỀ MẶT:** Làm cho giá cả thị trường dao động lên xuống xoay quanh trục giá trị thực tế.
* **Quy luật cạnh tranh là ĐỘNG LỰC CƠ CHẾ:** Thúc đẩy các chủ thể sản xuất cải tiến kỹ thuật để hạ giá thành, đồng thời dịch chuyển nguồn lực giữa các ngành để san bằng tỷ suất lợi nhuận.
* **Quy luật lưu thông tiền tệ là ĐIỀU KIỆN THANH KHOẢN:** Bảo đảm phương tiện lưu thông và thanh toán diễn ra trơn tru, ngăn ngừa tắc nghẽn giao dịch hoặc áp lực lạm phát tiền tệ.

### 2. Ví dụ xuyên suốt: Thị trường Cà phê Việt Nam

1. **Vận dụng Quy luật giá trị:** Nông dân Tây Nguyên đạt chứng nhận SC cắt giảm hao phí lao động lãng phí, thu lợi nhuận gộp cao hơn 20,4%.
2. **Tác động Quy luật cung – cầu:** Sản lượng cà phê toàn cầu biến động do thời tiết làm giá cà phê Robusta Việt Nam tăng vọt khi cầu thế giới vượt cung.
3. **Thúc đẩy bởi Quy luật cạnh tranh:** Hàng nghìn doanh nghiệp xuất khẩu cạnh tranh khốc liệt về công nghệ sấy lạnh, chế biến sâu và chứng chỉ phát thải thấp.
4. **Hỗ trợ bởi Quy luật lưu thông tiền tệ:** Hệ thống ngân hàng giải ngân vốn tín dụng thu mua kịp thời, các phương thức thanh toán điện tử L/C quốc tế đảm bảo dòng tiền lưu chuyển nhanh chóng.
    `,
    interactiveComponent: 'four_laws_mindmap',
    keyTakeaway: "Hiểu được mối liên hệ biện chứng giữa 4 quy luật giúp nhà quản trị và hoạch định chính sách có cái nhìn hệ thống, tránh giải pháp cục bộ."
  },

  // Page 14: Chapter 7 Conclusions & Lessons (Source: PDF Page 10-11)
  {
    pageNumber: 14,
    chapterId: 7,
    chapterTitle: "Chương 7: Kết luận & Tài liệu tham khảo",
    sourcePdfPage: 11,
    title: "Kết luận Sư phạm & Bài học Vận dụng Thực tiễn",
    subtitle: "Ý nghĩa lý luận và thực tiễn trong nền kinh tế thị trường định hướng XHCN",
    contentMarkdown: `
### 1. Tổng kết lý luận cốt lõi

* Kinh tế hàng hóa là giai đoạn phát triển tất yếu, khách quan của lịch sử nhân loại, thay thế cho nền kinh tế tự cấp tự túc khép kín.
* Bốn quy luật kinh tế cơ bản: **Giá trị, Cung – Cầu, Cạnh tranh và Lưu thông tiền tệ** chính là "bộ máy cơ học" điều phối các nguồn lực sản xuất xã hội một cách tự nhiên và hiệu quả.
* Trong nền **kinh tế thị trường định hướng xã hội chủ nghĩa** ở Việt Nam:
  * Chúng ta tôn trọng và vận dụng đầy đủ các quy luật khách quan của thị trường.
  * Đồng thời phát huy vai trò định hướng, điều tiết vĩ mô của Nhà nước pháp quyền để khắc phục các khuyết tật của thị trường, bảo đảm an sinh xã hội và phát triển bền vững.

### 2. Bài học hành động cho Sinh viên & Doanh nghiệp trẻ

1. **Tôn trọng thước đo giá trị:** Muốn thành công bền vững, phải luôn nâng cao năng lực chuyên môn, sáng tạo công nghệ để chi phí cá biệt luôn thấp hơn giá trị xã hội.
2. **Lắng nghe tín hiệu thị trường:** Không sản xuất cái mình có, mà cung cấp sản phẩm thị trường đang có nhu cầu có khả năng thanh toán.
3. **Cạnh tranh bằng sự khác biệt:** Thay vì cạnh tranh không lành mạnh bằng giảm giá tiêu cực, hãy tập trung nâng cao trải nghiệm khách hàng và chuẩn mực xanh.
4. **Quản trị dòng tiền khoa học:** Tận dụng tối đa các công cụ thanh toán số để tối ưu hóa tốc độ chu chuyển vốn.
    `,
    callout: {
      type: 'academic_note',
      title: 'Lời nhắn gửi từ Bộ môn Lý luận Chính trị',
      content: 'Kinh tế chính trị Mác - Lênin không phải là những trang giáo điều xa rời thực tế, mà là kim chỉ nam sắc bén soi sáng mọi biến động trong thế giới kinh doanh hiện đại.'
    },
    keyTakeaway: "Kết hợp hài hòa giữa cơ chế thị trường và định hướng nhân văn là con đường phát triển bền vững của Việt Nam."
  },

  // Page 15: Chapter 7 Full References (Source: PDF Page 11-12)
  {
    pageNumber: 15,
    chapterId: 7,
    chapterTitle: "Chương 7: Kết luận & Tài liệu tham khảo",
    sourcePdfPage: 12,
    title: "Danh mục 10 Tài liệu Tham khảo Chính thức",
    subtitle: "Nguồn trích dẫn học thuật chuẩn mực theo đề cương học phần MLN122",
    contentMarkdown: `
### Thư mục học thuật tham khảo

Dưới đây là danh mục 10 nguồn tài liệu chính thống được trích dẫn và sử dụng làm căn cứ số liệu, luận cứ khoa học trong toàn bộ tập tài liệu MLN122 Chương 2:
    `,
    interactiveComponent: 'references_list',
    keyTakeaway: "Tất cả các trích dẫn, số liệu thống kê trong tài liệu đều có xuất xứ khoa học minh bạch từ các cơ quan thẩm quyền."
  },

  // Page 16: Content Coverage & Academic Review (Source: PDF Page 1-12 Review)
  {
    pageNumber: 16,
    chapterId: 7,
    chapterTitle: "Chương 7: Kết luận & Tài liệu tham khảo",
    sourcePdfPage: 12,
    title: "Chứng nhận Hoàn thành & Báo cáo Độ bao phủ Học liệu",
    subtitle: "Đối chiếu 100% 12 trang tài liệu PDF nguyên bản",
    contentMarkdown: `
### Báo cáo Nghiệm thu Học liệu (Content Coverage Matrix)

Cuốn sách 3D tương tác **ECONVERSE** đã số hóa toàn vẹn và nâng cấp trực quan toàn bộ **12 trang PDF** của tài liệu gốc:

* **Trang 1 PDF:** Đầy đủ Khái niệm kinh tế hàng hóa, 2 điều kiện ra đời, chu trình 4 khâu và khái quát 4 quy luật.
* **Trang 1–4 PDF:** Đầy đủ Định nghĩa quy luật giá trị, hao phí xã hội cần thiết, 3 tác động, bảng số liệu hộ cà phê 2019 và lưu ý học thuật.
* **Trang 4–5 PDF:** Đầy đủ Khái niệm cung cầu, tín hiệu giá, số liệu Tết 2025, 8.000 tỷ đồng bình ổn TP.HCM và bộ mô phỏng trực quan.
* **Trang 5–8 PDF:** Đầy đủ Quy luật cạnh tranh, số liệu Shopee 9,3 tỷ USD & TikTok Shop 3,8 tỷ USD, kịch bản nhà quản trị.
* **Trang 8–10 PDF:** Đầy đủ Công thức KaTeX $M = (P \\times Q) / V$, dữ liệu vĩ mô Việt Nam 2025 (M2 +14,98%, Tín dụng +17,65%, CPI 3,31%, GDP 8,02%) và máy tính lưu thông.
* **Trang 10 PDF:** Đầy đủ Mối quan hệ biện chứng giữa 4 quy luật và Mindmap tương tác.
* **Trang 10–12 PDF:** Đầy đủ Kết luận sư phạm và 10 nguồn tài liệu tham khảo chính thống.
    `,
    callout: {
      type: 'case_study',
      title: 'Sẵn sàng Ôn tập & Kiểm tra',
      content: 'Bạn đã hoàn thành việc đọc toàn bộ nội dung học phần. Hãy mở bộ công cụ Quiz và Flashcards trên thanh công cụ để củng cố kiến thức và đạt điểm tối đa trong kỳ thi kết thúc học phần MLN122!'
    },
    keyTakeaway: "Tích hợp hoàn hảo giữa độ chính xác học thuật 100% và công nghệ trải nghiệm 3D tương tác hiện đại."
  }
];
