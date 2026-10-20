import React from 'react';
import { TET_2025_PRICE_DATA, HCMC_TET_RESERVES } from '../../data/mln122BookData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { ShoppingBasket, PackageCheck, TrendingUp, TrendingDown, Store } from 'lucide-react';

export const TetMarketChart: React.FC = () => {
  return (
    <div className="my-6 space-y-6">
      {/* CPI Chart Card */}
      <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 sm:p-6 text-neutral-800 dark:text-neutral-100 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-2">
          <ShoppingBasket className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h4 className="font-bold text-base sm:text-lg text-emerald-950 dark:text-emerald-300 tracking-tight">
            Biến động Giá cả Tháng 01/2025 (Dịp Tết Nguyên đán)
          </h4>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
          Nguồn: Tổng cục Thống kê (GSO) — Minh chứng thực tiễn Quy luật Cung – Cầu
        </p>

        {/* CPI Bar Chart */}
        <div className="h-60 sm:h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={TET_2025_PRICE_DATA} 
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis type="number" unit="%" tick={{ fontSize: 11, fill: 'currentColor' }} domain={[-1, 3]} />
              <YAxis 
                type="category" 
                dataKey="category" 
                tick={{ fontSize: 11, fill: 'currentColor' }} 
                width={120}
              />
              <Tooltip 
                formatter={(val) => [`${val}%`, 'Mức tăng / giảm']}
                contentStyle={{
                  backgroundColor: 'rgba(23, 23, 23, 0.95)',
                  borderColor: 'rgba(16, 185, 129, 0.3)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '12px'
                }}
              />
              <Bar dataKey="changePercent" radius={[0, 4, 4, 0]}>
                {TET_2025_PRICE_DATA.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.changePercent >= 0 ? (entry.changePercent > 2 ? '#ef4444' : '#10b981') : '#3b82f6'} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Price Notes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-xs">
          <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-950 dark:text-red-200 flex items-start gap-2">
            <TrendingUp className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <strong>Thịt lợn (+2,45%):</strong> Nhu cầu gói bánh chưng, giò lụa, cỗ tiệc Tết tăng đột biến kéo giá tăng nhanh nhất.
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-950 dark:text-blue-200 flex items-start gap-2">
            <TrendingDown className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            <div>
              <strong>Rau củ (-0,48%):</strong> Cung vụ đông trúng mùa, thời tiết thuận lợi giúp giá rau hạ nhiệt ngược dòng.
            </div>
          </div>
        </div>
      </div>

      {/* HCMC Reserves Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
              Chương trình Hàng hóa Bình ổn Tết tại TP. Hồ Chí Minh
            </h4>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
            {HCMC_TET_RESERVES.totalValueVND}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Gạo dự trữ</div>
            <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">~8.000 tấn</div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Thịt gia súc</div>
            <div className="text-lg font-bold font-mono text-red-600 dark:text-red-400 mt-1">5.000 tấn</div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Thịt gia cầm</div>
            <div className="text-lg font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">5.500 tấn</div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500 dark:text-neutral-400">Rau củ quả</div>
            <div className="text-lg font-bold font-mono text-blue-600 dark:text-blue-400 mt-1">10.000 tấn</div>
          </div>
        </div>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 italic">
          Bằng cách can thiệp bơm nguồn cung dự trữ vào thời điểm cầu tăng mạnh, Nhà nước chủ động giữ cho giá cả thị trường không bị sốt nóng quá mức giá trị hàng hóa.
        </p>
      </div>
    </div>
  );
};
