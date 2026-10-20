import React, { useState } from 'react';
import { ECOMMERCE_DATA_2024 } from '../../data/mln122BookData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Zap, ShoppingBag, Video, Truck, Award, ShieldAlert, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const COLORS = ['#ea580c', '#000000', '#64748b'];

export const EcommerceMarketAndGame: React.FC = () => {
  // Game state
  const [strategy, setStrategy] = useState<'price' | 'quality' | 'shoppertainment' | 'logistics' | null>(null);

  const pieData = ECOMMERCE_DATA_2024.map(p => ({
    name: p.platform,
    value: p.marketSharePercent,
    gmv: p.gmvBillionUSD,
    growth: p.growthPercent
  }));

  const growthData = [
    { name: 'Shopee', growth: 41, gmv: 9.3 },
    { name: 'TikTok Shop', growth: 99, gmv: 3.8 },
  ];

  return (
    <div className="my-6 space-y-6">
      {/* 2024 Data Cards and Charts */}
      <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 sm:p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blue-500/20 pb-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h4 className="font-bold text-base sm:text-lg text-blue-950 dark:text-blue-300 tracking-tight">
                Thương chiến E-Commerce Việt Nam 2024: Shopee vs TikTok Shop
              </h4>
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Nguồn: Báo cáo Metric.vn (2025) — Khảo sát 4 nền tảng lớn (Shopee, TikTok Shop, Lazada, Tiki)
            </p>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
            Tổng GMV 2 sàn &gt; 13,1 tỷ USD
          </span>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pie Chart: Market Share */}
          <div className="p-4 rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800">
            <h5 className="text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-2 text-center">
              Thị phần Doanh thu GMV 2024 (%)
            </h5>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val) => [`${val}% thị phần`, 'Tỷ trọng']}
                    contentStyle={{
                      backgroundColor: 'rgba(23, 23, 23, 0.95)',
                      borderColor: 'rgba(37, 99, 235, 0.3)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-3 text-[11px] text-neutral-500 mt-1">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span> Shopee (66,7%)</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-neutral-900 dark:bg-white"></span> TikTok Shop (26,9%)</span>
            </div>
          </div>

          {/* Bar Chart: Growth Speed */}
          <div className="p-4 rounded-xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800">
            <h5 className="text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-2 text-center">
              Tốc độ Tăng trưởng GMV năm 2024 (%)
            </h5>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={growthData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'currentColor' }} />
                  <YAxis unit="%" tick={{ fontSize: 11, fill: 'currentColor' }} />
                  <Tooltip
                    formatter={(val) => [`+${val}%`, 'Tăng trưởng GMV']}
                    contentStyle={{
                      backgroundColor: 'rgba(23, 23, 23, 0.95)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                  <Bar dataKey="growth" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-center text-neutral-500 mt-1">
              TikTok Shop tăng tốc thần kỳ <strong>+99%</strong> nhờ livestream, trong khi Shopee duy trì <strong>+41%</strong> trên nền quy mô lớn.
            </p>
          </div>
        </div>

        {/* Infographic Strategy Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4 text-xs">
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-950 dark:text-orange-200 flex items-start gap-2.5">
            <Truck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <strong>Shopee (GMV 9,3 tỷ USD):</strong> Vận dụng quy luật cạnh tranh bằng tối ưu hóa chuỗi cung ứng logistics (SPX Express), giao hàng hỏa tốc trong ngày và bảo chứng an tâm hoàn tiền cho người mua.
            </div>
          </div>
          <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-950 dark:text-purple-200 flex items-start gap-2.5">
            <Video className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
            <div>
              <strong>TikTok Shop (GMV 3,8 tỷ USD):</strong> Khai phá thị trường ngách với <em>Shoppertainment</em> — biến việc giải trí trên mạng xã hội thành giỏ hàng mua sắm tức thời với mức tăng trưởng 99%.
            </div>
          </div>
        </div>

        {/* Academic scope note */}
        <p className="text-[11px] text-neutral-500 italic mt-3">
          * Lưu ý học thuật: Thị phần trên thuộc phạm vi 4 nền tảng lớn được khảo sát, không mặc nhiên là toàn bộ thị trường thương mại bán lẻ Việt Nam.
        </p>
      </div>

      {/* Interactive Learning Activity: You are the E-Commerce Manager */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-6 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          <h4 className="font-bold text-base sm:text-lg text-amber-950 dark:text-amber-300 tracking-tight">
            Hoạt động Học tập: "Bạn là Người Quản lý Sàn Thương mại Điện tử"
          </h4>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-4">
          Trong bối cảnh cạnh tranh gay gắt, hãy chọn 1 chiến lược trọng tâm cho sàn của bạn để quan sát sự phân tích dưới góc nhìn Quy luật Cạnh tranh:
        </p>

        {/* Strategy Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          <button
            onClick={() => setStrategy('price')}
            className={`p-3 rounded-xl text-left text-xs border transition-all ${
              strategy === 'price'
                ? 'bg-blue-600 text-white border-blue-600 shadow-md font-semibold'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-blue-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>1. Cạnh tranh bằng Giá (Trợ giá & Voucher)</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </div>
          </button>

          <button
            onClick={() => setStrategy('logistics')}
            className={`p-3 rounded-xl text-left text-xs border transition-all ${
              strategy === 'logistics'
                ? 'bg-orange-600 text-white border-orange-600 shadow-md font-semibold'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-orange-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>2. Cải tiến Dịch vụ & Giao vận Logistics</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </div>
          </button>

          <button
            onClick={() => setStrategy('shoppertainment')}
            className={`p-3 rounded-xl text-left text-xs border transition-all ${
              strategy === 'shoppertainment'
                ? 'bg-purple-600 text-white border-purple-600 shadow-md font-semibold'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-purple-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>3. Mô hình Mua sắm Giải trí (Livestream)</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </div>
          </button>

          <button
            onClick={() => setStrategy('quality')}
            className={`p-3 rounded-xl text-left text-xs border transition-all ${
              strategy === 'quality'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md font-semibold'
                : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700 hover:border-emerald-500'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>4. Chuẩn hóa Chất lượng & Chống Hàng giả</span>
              <ArrowRight className="w-4 h-4 opacity-70" />
            </div>
          </button>
        </div>

        {/* Feedback Explanation based on economic competition law */}
        {strategy && (
          <div className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-amber-500/30 text-xs animate-fadeIn">
            {strategy === 'price' && (
              <div>
                <h5 className="font-bold text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Phân tích Chiến lược Giá:
                </h5>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Trợ giá là công cụ cạnh tranh ngắn hạn rất mạnh để kích cầu và hút người dùng mới. Tuy nhiên, nếu lạm dụng "bán phá giá" dưới giá thành, doanh nghiệp sẽ cạn kiệt dòng tiền, vi phạm <strong>Luật Cạnh tranh</strong> và dễ bị đào thải khi các đối thủ tiềm lực vốn lớn hơn phản công. Cạnh tranh bền vững phải bắt nguồn từ việc hạ hao phí lao động cá biệt nhờ công nghệ quản trị chứ không đơn thuần đốt tiền trợ cấp.
                </p>
              </div>
            )}
            {strategy === 'logistics' && (
              <div>
                <h5 className="font-bold text-orange-600 dark:text-orange-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Phân tích Cải tiến Logistics:
                </h5>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Đây là chiến lược củng cố hạ tầng then chốt theo đúng quy luật cạnh tranh nội bộ ngành. Đầu tư kho bãi tự động và đội ngũ giao vận riêng (như SPX Express của Shopee) giúp rút ngắn thời gian lưu thông hàng hóa ($T - H - T'$), giảm chi phí giao nhận bình quân và tạo rào cản gia nhập thị trường vững chắc trước các đối thủ mới.
                </p>
              </div>
            )}
            {strategy === 'shoppertainment' && (
              <div>
                <h5 className="font-bold text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Phân tích Shoppertainment & Livestream:
                </h5>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Tận dụng tối đa sự chuyển biến của công nghệ truyền thông để tạo ra "cầu phái sinh". Người tiêu dùng vốn không có kế hoạch mua trước, nhưng thông qua cảm xúc và tương tác trực tiếp với người bán trong livestream đã nảy sinh nhu cầu chi trả. Đây là hình thức cạnh tranh sáng tạo bằng mô hình trải nghiệm khách hàng, mang lại mức tăng trưởng đột phá 99% cho TikTok Shop.
                </p>
              </div>
            )}
            {strategy === 'quality' && (
              <div>
                <h5 className="font-bold text-emerald-600 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" /> Phân tích Chuẩn hóa Chất lượng:
                </h5>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  Giải quyết trực tiếp vấn đề nhức nhối nhất của thương mại điện tử: nguy cơ cạnh tranh không lành mạnh qua hàng giả, hàng nhái. Việc siết chặt kiểm duyệt và cam kết đền bù bảo vệ người tiêu dùng giúp xây dựng thương hiệu uy tín dài hạn, giảm thiểu chi phí khiếu nại và giữ chân phân khúc khách hàng trung lưu có sức mua cao.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
