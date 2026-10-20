import React, { useState } from 'react';
import { useLearning } from '../../context/LearningContext';
import { GitMerge, Scale, TrendingUp, Zap, Coins, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface LawNode {
  id: 'value' | 'supply_demand' | 'competition' | 'money';
  name: string;
  role: string;
  pageNumber: number;
  chapterId: 2 | 3 | 4 | 5;
  color: string;
  borderColor: string;
  bgColor: string;
  icon: React.ReactNode;
  summary: string;
  coffeeExample: string;
  connections: {
    target: 'value' | 'supply_demand' | 'competition' | 'money';
    relation: string;
  }[];
}

export const FourLawsMindmap: React.FC = () => {
  const { setCurrentBookPage } = useLearning();
  const [selectedLaw, setSelectedLaw] = useState<'value' | 'supply_demand' | 'competition' | 'money'>('value');

  const nodes: Record<string, LawNode> = {
    value: {
      id: 'value',
      name: 'Quy luật Giá trị',
      role: 'CƠ SỞ NỀN TẢNG',
      pageNumber: 3,
      chapterId: 2,
      color: '#d97706',
      borderColor: 'border-amber-500',
      bgColor: 'bg-amber-500/10',
      icon: <Scale className="w-5 h-5 text-amber-500" />,
      summary: 'Quy định việc sản xuất và lưu thông hàng hóa phải căn cứ trên hao phí lao động xã hội cần thiết, định hình trục giá trị khách quan.',
      coffeeExample: 'Hộ nông dân Tây Nguyên áp dụng chứng nhận SC để hạ hao phí cá biệt, đạt năng suất 3.215 kg/ha và tăng lợi nhuận gộp lên 20,4%.',
      connections: [
        { target: 'supply_demand', relation: 'Giá trị là trục tâm; Cung - cầu làm giá cả dao động xoay quanh trục giá trị.' },
        { target: 'competition', relation: 'Quy luật giá trị buộc người sản xuất phải cải tiến kỹ thuật trong cuộc đua cạnh tranh sinh tồn.' },
        { target: 'money', relation: 'Tổng giá trị hàng hóa được biểu hiện bằng tiền, xác định lượng tiền cần phát hành.' }
      ]
    },
    supply_demand: {
      id: 'supply_demand',
      name: 'Quy luật Cung – Cầu',
      role: 'CƠ CHẾ BỀ MẶT',
      pageNumber: 6,
      chapterId: 3,
      color: '#059669',
      borderColor: 'border-emerald-500',
      bgColor: 'bg-emerald-500/10',
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
      summary: 'Trực tiếp chi phối sự biến động của giá cả thị trường thông qua quan hệ giữa lượng người bán sẵn sàng cung ứng và lượng người mua có khả năng chi trả.',
      coffeeExample: 'Nhu cầu tiêu thụ cà phê Robusta thế giới tăng vọt đẩy giá cà phê Tây Nguyên liên tục lập đỉnh mới trên sàn giao dịch.',
      connections: [
        { target: 'value', relation: 'Tác động kéo giá cả lệch khỏi giá trị khi cung cầu mất cân đối.' },
        { target: 'competition', relation: 'Sự chênh lệch cung cầu giữa các ngành kích thích các nhà sản xuất cạnh tranh chuyển vốn.' },
        { target: 'money', relation: 'Quyết định tổng giá cả hàng hóa thực tế cần được thanh toán bằng tiền tệ trong kỳ.' }
      ]
    },
    competition: {
      id: 'competition',
      name: 'Quy luật Cạnh tranh',
      role: 'ĐỘNG LỰC CƠ CHẾ',
      pageNumber: 9,
      chapterId: 4,
      color: '#2563eb',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500/10',
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      summary: 'Động lực ganh đua thúc đẩy cải tiến công nghệ, thanh lọc doanh nghiệp yếu kém và san bằng tỷ suất lợi nhuận xã hội.',
      coffeeExample: 'Các nhà xuất khẩu cạnh tranh khốc liệt về truy xuất nguồn gốc nông sản, chứng chỉ carbon thấp để giành thị trường EU và Mỹ.',
      connections: [
        { target: 'value', relation: 'Cạnh tranh nội bộ ngành hình thành nên giá trị xã hội trung bình của sản phẩm.' },
        { target: 'supply_demand', relation: 'Cạnh tranh làm thay đổi cơ cấu cung ứng của thị trường theo thị hiếu người tiêu dùng.' },
        { target: 'money', relation: 'Thúc đẩy áp dụng thanh toán số, tối ưu hóa vòng quay dòng vốn kinh doanh.' }
      ]
    },
    money: {
      id: 'money',
      name: 'Quy luật Lưu thông Tiền tệ',
      role: 'HUYẾT MẠCH THANH KHOẢN',
      pageNumber: 11,
      chapterId: 5,
      color: '#7c3aed',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-500/10',
      icon: <Coins className="w-5 h-5 text-purple-500" />,
      summary: 'Xác định khối lượng tiền tệ cần thiết cho lưu thông M = (P × Q) / V, bảo đảm nền kinh tế không rơi vào khủng hoảng thanh khoản hay lạm phát.',
      coffeeExample: 'Dòng vốn tín dụng ngân hàng nông nghiệp giải ngân kịp thời trong vụ thu hoạch và hệ thống thanh toán quốc tế đảm bảo xuất khẩu thông suốt.',
      connections: [
        { target: 'value', relation: 'Tiền tệ là hình thái biểu hiện giá trị hoàn hảo nhất của thế giới hàng hóa.' },
        { target: 'supply_demand', relation: 'Quy mô phương tiện thanh toán ảnh hưởng trực tiếp đến sức mua thực tế của cầu.' },
        { target: 'competition', relation: 'Tiền tệ và tín dụng là đòn bẩy tài chính quyết định vị thế cạnh tranh của các doanh nghiệp.' }
      ]
    }
  };

  const activeNode = nodes[selectedLaw];

  return (
    <div className="my-6 rounded-2xl border border-pink-500/30 bg-pink-500/5 p-4 sm:p-6 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-pink-500/20 pb-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <GitMerge className="w-5 h-5 text-pink-600 dark:text-pink-400" />
            <h4 className="font-bold text-base sm:text-lg text-pink-950 dark:text-pink-300 tracking-tight">
              Sơ đồ Tương tác Mối Quan Hệ Biện Chứng giữa Bốn Quy Luật
            </h4>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
            Chọn một quy luật để khám phá liên kết hữu cơ và ví dụ chuỗi giá trị cà phê
          </p>
        </div>
      </div>

      {/* 4 Interactive Nodes Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {Object.values(nodes).map((node) => {
          const isSelected = selectedLaw === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedLaw(node.id)}
              className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? `${node.borderColor} ${node.bgColor} ring-2 ring-offset-2 ring-offset-white dark:ring-offset-neutral-900 shadow-md`
                  : 'border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:border-neutral-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  {node.icon}
                  <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                    Trang {node.pageNumber}
                  </span>
                </div>
                <div className="text-xs font-bold text-neutral-900 dark:text-neutral-100">{node.name}</div>
                <div className="text-[10px] font-medium text-neutral-500 mt-0.5">{node.role}</div>
              </div>

              {isSelected && (
                <div className="mt-2 flex items-center text-[10px] font-semibold text-pink-600 dark:text-pink-400 gap-1">
                  <Sparkles className="w-3 h-3" /> Đang chọn
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Node Detail Card */}
      <div className={`p-4 sm:p-5 rounded-2xl border ${activeNode.borderColor} ${activeNode.bgColor} text-neutral-800 dark:text-neutral-100`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-300 dark:border-neutral-700/60 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white dark:bg-neutral-800 shadow-sm">{activeNode.icon}</div>
            <div>
              <h5 className="font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-50">{activeNode.name}</h5>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Vai trò: {activeNode.role}</span>
            </div>
          </div>

          {/* Jump to page button */}
          <button
            onClick={() => setCurrentBookPage(activeNode.pageNumber, true)}
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 font-medium shadow-sm transition-colors text-pink-700 dark:text-pink-300"
          >
            <BookOpen className="w-3.5 h-3.5" />
            Xem nội dung chi tiết (Trang {activeNode.pageNumber})
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">
          {activeNode.summary}
        </p>

        {/* Coffee Lifecycle Example */}
        <div className="p-3 rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 text-xs mb-3">
          <span className="font-bold text-amber-700 dark:text-amber-400">Minh họa chuỗi giá trị Cà phê Tây Nguyên: </span>
          <span className="text-neutral-600 dark:text-neutral-300">{activeNode.coffeeExample}</span>
        </div>

        {/* Dynamic Connections List */}
        <div>
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 block mb-2">
            Liên kết biện chứng với các quy luật còn lại:
          </span>
          <div className="space-y-1.5">
            {activeNode.connections.map((conn, idx) => {
              const targetNode = nodes[conn.target];
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedLaw(conn.target)}
                  className="p-2.5 rounded-lg bg-white/80 dark:bg-neutral-900/80 hover:bg-white dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 text-xs flex items-center justify-between cursor-pointer transition-colors group"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-pink-600 dark:text-pink-400 group-hover:underline">
                      → {targetNode.name}:
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-300">{conn.relation}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-pink-500 shrink-0 ml-2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
