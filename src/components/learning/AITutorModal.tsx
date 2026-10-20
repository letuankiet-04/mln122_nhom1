import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { Bot, Send, Sparkles, X, BookOpen, Quote, HelpCircle, AlertCircle } from 'lucide-react';
import { BOOK_PAGES } from '../../data/mln122BookData';
import { MarkdownRenderer } from '../ui/MarkdownRenderer';

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  sourceCitations?: { page: number; topic: string }[];
}

export const AITutorModal: React.FC = () => {
  const { isAITutorOpen, setIsAITutorOpen, setCurrentBookPage } = useLearning();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: 'Chào bạn! Tôi là Trợ giảng Học thuật MLN122. Tôi hỗ trợ giải đáp mọi thắc mắc lý luận và thực tiễn về Kinh tế hàng hóa và 4 quy luật cơ bản dựa trên tài liệu 12 trang giáo trình chính thức.',
      sourceCitations: [{ page: 1, topic: 'Khái quát học phần MLN122' }]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isAITutorOpen) return null;

  // Pre-engineered academic questions grounded strictly in the 12 PDF pages
  const suggestedQuestions = [
    'Tại sao hộ cà phê có chứng nhận SC lại đạt lợi nhuận cao hơn 20,4%?',
    'Giải thích công thức M = (P × Q) / V và dữ liệu Việt Nam 2025?',
    'TikTok Shop và Shopee vận dụng quy luật cạnh tranh như thế nào năm 2024?',
    'Mối quan hệ biện chứng giữa 4 quy luật kinh tế được thể hiện ra sao?'
  ];

  const handleAsk = async (question: string) => {
    if (!question.trim()) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      text: question
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Grounded academic response matching 12-page PDF
      let answer = '';
      let citations: { page: number; topic: string }[] = [];

      const qLower = question.toLowerCase();

      if (qLower.includes('cà phê') || qLower.includes('coffee') || qLower.includes('lợi nhuận') || qLower.includes('20,4%')) {
        answer = `Theo nghiên cứu thực nghiệm năm 2019 tại Tây Nguyên (trang 3-4 PDF):\n\n1. Hộ có chứng nhận SC đầu tư chi phí cao hơn (43,982 triệu so với 40,466 triệu đ/ha), nhưng đạt năng suất cao hơn 9,6% (3.215,77 kg/ha) và giá bán cao hơn 5,1% (34.820 đ/kg).\n2. Nhờ đó, lợi nhuận gộp bứt phá cao hơn 20,4% (68,366 triệu so với 56,763 triệu đ/ha).\n\n*Lưu ý học thuật quan trọng:* Không kết luận quy luật giá trị là nguyên nhân duy nhất, mà còn do quy mô, thổ nhưỡng, vốn và khuyến nông.`;
        citations = [{ page: 3, topic: 'Nghiên cứu hộ trồng cà phê 2019' }, { page: 4, topic: 'Lưu ý học thuật hộ cà phê' }];
      } else if (qLower.includes('m =') || qLower.includes('lưu thông') || qLower.includes('tiền tệ') || qLower.includes('2025')) {
        answer = `Theo Karl Marx (trang 8-10 PDF), lượng tiền cần thiết xác định bằng công thức M = (P × Q) / V.\n\nTrong đó:\n- P × Q: Tổng giá cả hàng hóa lưu thông trong kỳ.\n- V: Tốc độ lưu thông bình quân của đồng tiền.\n\nTại Việt Nam năm 2025, M2 tăng 14,98%, tín dụng tăng 17,65%, nhưng CPI chỉ tăng 3,31% (thấp hơn mức 3,63% của năm 2024) và GDP tăng 8,02%. Điều này chứng minh cung tiền được hấp thụ hiệu quả vào sản xuất thực, không gây lạm phát tương ứng.`;
        citations = [{ page: 8, topic: 'Công thức Karl Marx' }, { page: 9, topic: 'Dữ liệu vĩ mô Việt Nam 2025' }];
      } else if (qLower.includes('shopee') || qLower.includes('tiktok') || qLower.includes('cạnh tranh')) {
        answer = `Theo báo cáo năm 2024 trong tài liệu (trang 7-8 PDF):\n\n- **Shopee:** GMV đạt 9,3 tỷ USD, chiếm 66,7% thị phần (trong 4 sàn khảo sát), tăng trưởng 41% nhờ hạ tầng logistics SPX Express và hệ thống voucher trung thành.\n- **TikTok Shop:** GMV đạt 3,8 tỷ USD, chiếm 26,9% thị phần, bứt phá 99% nhờ mô hình Shoppertainment kết hợp video ngắn và livestream.\n\nCả hai minh họa cho 2 chiến lược cạnh tranh: tối ưu hóa chi phí lưu thông (Shopee) và tạo ra trải nghiệm mua sắm mới (TikTok Shop).`;
        citations = [{ page: 6, topic: 'Quy luật cạnh tranh' }, { page: 7, topic: 'E-commerce Việt Nam 2024' }];
      } else if (qLower.includes('4 quy luật') || qLower.includes('bốn quy luật') || qLower.includes('mối quan hệ') || qLower.includes('biện chứng')) {
        answer = `Bốn quy luật kinh tế tác động đan xen tạo nên chỉnh thể tự điều tiết của kinh tế thị trường (trang 10 PDF):\n\n1. **Quy luật giá trị:** Là CƠ SỞ NỀN TẢNG, định hình trục giá trị nội tại.\n2. **Quy luật cung – cầu:** Là CƠ CHẾ BỀ MẶT, điều chỉnh giá cả thị trường lên xuống quanh trục giá trị.\n3. **Quy luật cạnh tranh:** Là ĐỘNG LỰC CƠ CHẾ, thúc đẩy đổi mới công nghệ và phân bổ nguồn lực.\n4. **Quy luật lưu thông tiền tệ:** Là HUYẾT MẠCH THANH KHOẢN, bảo đảm phương tiện thanh toán thông suốt.`;
        citations = [{ page: 10, topic: 'Mối quan hệ biện chứng giữa 4 quy luật' }];
      } else {
        answer = `Dựa trên giáo trình MLN122 Chương 2:\n\nKinh tế hàng hóa vận động dựa trên sự thống nhất của 4 quy luật cơ bản: Quy luật Giá trị (xác định hao phí lao động xã hội cần thiết), Quy luật Cung - Cầu (tín hiệu giá cả), Quy luật Cạnh tranh (động lực đổi mới), và Quy luật Lưu thông tiền tệ M = (P × Q) / V.\n\nBạn có thể tra cứu chi tiết hơn tại từng trang tài liệu hoặc chọn các câu hỏi gợi ý bên dưới để tìm hiểu sâu hơn!`;
        citations = [{ page: 1, topic: 'Nền kinh tế hàng hóa' }, { page: 11, topic: 'Kết luận lý luận' }];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: 'tutor-' + Date.now(),
          sender: 'tutor',
          text: answer,
          sourceCitations: citations
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col h-[650px] max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-purple-500/15 text-purple-600 dark:text-purple-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 flex items-center gap-1.5 tracking-tight">
                Trợ Giảng AI MLN122 (Academic Tutor)
                <Sparkles className="w-4 h-4 text-amber-500" />
              </h3>
              <p className="text-[11px] text-neutral-400">
                Grounded 100% theo nội dung 12 trang giáo trình MLN122
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAITutorOpen(false)}
            className="p-1 rounded-full text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat History */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4 text-xs sm:text-sm">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-4 rounded-2xl leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-amber-600 text-white rounded-br-none shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-100 rounded-bl-none border border-neutral-200 dark:border-neutral-700/60'
                }`}
              >
                {msg.sender === 'user' ? (
                  <p className="whitespace-pre-line">{msg.text}</p>
                ) : (
                  <MarkdownRenderer content={msg.text} className="text-sm" />
                )}

                {/* Source Citations Pill */}
                {msg.sourceCitations && msg.sourceCitations.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-neutral-200 dark:border-neutral-700 flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-amber-500" /> Nguồn trích dẫn:
                    </span>
                    {msg.sourceCitations.map((cite, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          const target = BOOK_PAGES.find((p) => p.sourcePdfPage === cite.page);
                          if (target) {
                            setCurrentBookPage(target.pageNumber);
                            setIsAITutorOpen(false);
                          }
                        }}
                        className="px-2 py-0.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 font-mono text-[10px] transition-colors"
                      >
                        PDF Trang {cite.page}: {cite.topic} →
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-xs text-neutral-400 animate-pulse">
              <Bot className="w-4 h-4 text-purple-500" />
              Đang tra cứu cơ sở lý luận từ 12 trang giáo trình...
            </div>
          )}
        </div>

        {/* Suggested Quick Questions */}
        <div className="px-6 py-2 border-t border-neutral-100 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-950/50 overflow-x-auto flex items-center gap-1.5 scrollbar-none">
          <span className="text-[10px] text-neutral-400 shrink-0 font-medium">Gợi ý ôn tập:</span>
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(q)}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-amber-500 text-neutral-600 dark:text-neutral-300 hover:text-amber-600 whitespace-nowrap transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAsk(inputText)}
            placeholder="Hỏi về quy luật giá trị, cung cầu, cạnh tranh, lưu thông tiền tệ..."
            className="flex-1 px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-500 text-neutral-900 dark:text-neutral-100"
          />
          <button
            onClick={() => handleAsk(inputText)}
            disabled={!inputText.trim() || isLoading}
            className="p-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
