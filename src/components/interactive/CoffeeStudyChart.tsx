import React, { useState } from 'react';
import { COFFEE_FARMER_RESEARCH_2019 } from '../../data/mln122BookData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { Info, Award, AlertTriangle, TrendingUp } from 'lucide-react';

export const CoffeeStudyChart: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'all' | 'profit' | 'yield' | 'price'>('all');

  const chartData = [
    {
      name: 'Năng suất (kg/ha)',
      'Có chứng nhận SC': 3215.77,
      'Không chứng nhận': 2933.25,
      diff: '+9,6%',
    },
    {
      name: 'Giá bán (đồng/10 kg)', // scaled for visual harmony
      'Có chứng nhận SC': 3482,
      'Không chứng nhận': 3314,
      diff: '+5,1%',
    },
    {
      name: 'Doanh thu (triệu/ha)',
      'Có chứng nhận SC': 112.35,
      'Không chứng nhận': 97.23,
      diff: '+15,5%',
    },
    {
      name: 'Chi phí (triệu/ha)',
      'Có chứng nhận SC': 43.98,
      'Không chứng nhận': 40.47,
      diff: '+8,7%',
    },
    {
      name: 'Lợi nhuận gộp (triệu/ha)',
      'Có chứng nhận SC': 68.37,
      'Không chứng nhận': 56.76,
      diff: '+20,4%',
    },
  ];

  return (
    <div className="my-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-6 text-neutral-800 dark:text-neutral-100 shadow-sm backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h4 className="font-bold text-base sm:text-lg text-amber-900 dark:text-amber-300 tracking-tight">
              Bảng Số liệu Nghiên cứu Hộ trồng Cà phê Việt Nam (2019)
            </h4>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
            Nguồn: Viện KHNN Việt Nam (VAAS) & Viện Nghiên cứu Cà phê Tây Nguyên
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs bg-amber-500/10 dark:bg-neutral-800 p-1 rounded-lg">
          <button
            onClick={() => setSelectedMetric('all')}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedMetric === 'all'
                ? 'bg-amber-600 text-white font-medium shadow-sm'
                : 'text-neutral-600 dark:text-neutral-300 hover:bg-amber-500/10'
            }`}
          >
            Tất cả
          </button>
          <button
            onClick={() => setSelectedMetric('profit')}
            className={`px-2.5 py-1 rounded transition-colors ${
              selectedMetric === 'profit'
                ? 'bg-amber-600 text-white font-medium shadow-sm'
                : 'text-neutral-600 dark:text-neutral-300 hover:bg-amber-500/10'
            }`}
          >
            Lợi nhuận (+20,4%)
          </button>
        </div>
      </div>

      {/* Table view with accurate numbers */}
      <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800 mb-6 bg-white/70 dark:bg-neutral-900/70">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-amber-50 dark:bg-neutral-800/60 border-b border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300">
              <th className="py-2.5 px-3 font-semibold">Chỉ tiêu kinh tế</th>
              <th className="py-2.5 px-3 font-semibold text-emerald-600 dark:text-emerald-400">Có chứng nhận SC</th>
              <th className="py-2.5 px-3 font-semibold text-neutral-500 dark:text-neutral-400">Không chứng nhận</th>
              <th className="py-2.5 px-3 font-semibold text-amber-600 dark:text-amber-400">Chênh lệch</th>
              <th className="py-2.5 px-3 font-semibold text-neutral-500">Đơn vị</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800/60 font-mono text-xs sm:text-sm">
            {COFFEE_FARMER_RESEARCH_2019.map((row, idx) => (
              <tr 
                key={idx} 
                className={`hover:bg-amber-500/5 transition-colors ${
                  row.indicator.includes('Lợi nhuận') ? 'bg-amber-500/10 font-bold' : ''
                }`}
              >
                <td className="py-2 px-3 font-sans font-medium text-neutral-900 dark:text-neutral-100">{row.indicator}</td>
                <td className="py-2 px-3 text-emerald-700 dark:text-emerald-300 font-semibold">{row.certifiedSC}</td>
                <td className="py-2 px-3 text-neutral-600 dark:text-neutral-400">{row.nonCertified}</td>
                <td className="py-2 px-3 text-amber-600 dark:text-amber-400 font-semibold">
                  <span className="inline-flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    {row.diffPercent}
                  </span>
                </td>
                <td className="py-2 px-3 text-neutral-500 text-xs">{row.unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart visualization */}
      <div className="h-64 sm:h-72 w-full pt-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: 'currentColor' }} interval={0} angle={-15} textAnchor="end" />
            <YAxis tick={{ fontSize: 11, fill: 'currentColor' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(23, 23, 23, 0.95)',
                borderColor: 'rgba(217, 119, 6, 0.3)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px'
              }}
            />
            <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
            <Bar dataKey="Có chứng nhận SC" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Không chứng nhận" fill="#94a3b8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Mandatory academic disclaimer callout */}
      <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-amber-500/10 p-3.5 text-xs text-amber-900 dark:text-amber-200/90 border border-amber-500/20">
        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-amber-950 dark:text-amber-300">Lưu ý học thuật bắt buộc: </span>
          Không kết luận quy luật giá trị là nguyên nhân duy nhất tạo ra chênh lệch giữa hai nhóm hộ. Sự khác biệt còn chịu ảnh hưởng của các yếu tố tổ hợp như quy mô diện tích, thổ nhưỡng, vốn đầu tư ban đầu, sự hỗ trợ khuyến nông và trình độ canh tác của nông hộ.
        </div>
      </div>
    </div>
  );
};
