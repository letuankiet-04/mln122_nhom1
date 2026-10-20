import React, { useState } from 'react';
import { MathFormula } from '../ui/MathFormula';
import { VIETNAM_MACRO_2025 } from '../../data/mln122BookData';
import { Calculator, AlertCircle, CheckCircle2, TrendingUp, CreditCard, QrCode, Coins, Landmark } from 'lucide-react';

export const MoneyCirculationCalculator: React.FC = () => {
  // P * Q (Tổng giá cả hàng hóa, tỷ đồng)
  const [totalPricePQ, setTotalPricePQ] = useState<string>('1200000');
  // V (Tốc độ vòng quay của đồng tiền trong năm)
  const [velocityV, setVelocityV] = useState<string>('4.5');
  // Optional extension fields
  const [creditSalesGc, setCreditSalesGc] = useState<string>('0');
  const [duePaymentsGd, setDuePaymentsGd] = useState<string>('0');
  const [clearingGk, setClearingGk] = useState<string>('0');
  const [useExtended, setUseExtended] = useState<boolean>(false);

  // Parse values
  const pq = parseFloat(totalPricePQ);
  const v = parseFloat(velocityV);
  const gc = parseFloat(creditSalesGc) || 0;
  const gd = parseFloat(duePaymentsGd) || 0;
  const gk = parseFloat(clearingGk) || 0;

  let isValid = true;
  let errorMessage = '';

  if (isNaN(pq) || pq <= 0) {
    isValid = false;
    errorMessage = 'Tổng giá cả hàng hóa (P × Q) phải là số dương lớn hơn 0.';
  } else if (isNaN(v) || v <= 0) {
    isValid = false;
    errorMessage = 'Tốc độ lưu thông bình quân (V) phải lớn hơn 0.';
  }

  // Calculate M
  let mResult = 0;
  let numerator = pq;
  if (useExtended) {
    numerator = pq - gc + gd - gk;
    if (numerator < 0) {
      isValid = false;
      errorMessage = 'Tử số [(P × Q) - Gc + Gd - Gk] không thể âm.';
    }
  }

  if (isValid && v > 0) {
    mResult = numerator / v;
  }

  return (
    <div className="my-6 space-y-6">
      {/* Calculator Card */}
      <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 p-4 sm:p-6 backdrop-blur-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <h4 className="font-bold text-base sm:text-lg text-purple-950 dark:text-purple-300 tracking-tight">
              Công cụ Tính Lượng Tiền Cần Thiết (Karl Marx Calculator)
            </h4>
          </div>
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-500/15 text-purple-700 dark:text-purple-300">
            M = (P × Q) / V
          </span>
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-4">
          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Tổng giá cả hàng hóa lưu thông trong kỳ <span className="text-purple-600 font-mono">(P × Q)</span> (Tỷ VNĐ)
            </label>
            <input
              type="number"
              value={totalPricePQ}
              onChange={(e) => setTotalPricePQ(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="VD: 1200000"
            />
            <span className="text-[10px] text-neutral-400 mt-0.5 block">
              Tương đương: {Number(totalPricePQ || 0).toLocaleString('vi-VN')} tỷ VNĐ
            </span>
          </div>

          <div>
            <label className="block font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Tốc độ lưu thông bình quân của đồng tiền <span className="text-purple-600 font-mono">(V)</span> (vòng/kỳ)
            </label>
            <input
              type="number"
              step="0.1"
              value={velocityV}
              onChange={(e) => setVelocityV(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-mono focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="VD: 4.5"
            />
            <span className="text-[10px] text-neutral-400 mt-0.5 block">
              Thanh toán điện tử, QR code giúp V tăng lên đáng kể
            </span>
          </div>
        </div>

        {/* Toggle Extended Mode */}
        <div className="mb-4">
          <button
            onClick={() => setUseExtended(!useExtended)}
            className="text-xs text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 font-medium"
          >
            {useExtended ? '[-] Ẩn công thức mở rộng (bán chịu, khấu trừ)' : '[+] Mở rộng: Xét đến bán chịu (Gc), đến kỳ (Gd), bù trừ (Gk)'}
          </button>

          {useExtended && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3 p-3 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs">
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1">Hàng bán chịu (Gc)</label>
                <input
                  type="number"
                  value={creditSalesGc}
                  onChange={(e) => setCreditSalesGc(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 font-mono bg-white dark:bg-neutral-800"
                />
              </div>
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1">Đến kỳ thanh toán (Gd)</label>
                <input
                  type="number"
                  value={duePaymentsGd}
                  onChange={(e) => setDuePaymentsGd(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 font-mono bg-white dark:bg-neutral-800"
                />
              </div>
              <div>
                <label className="block text-neutral-600 dark:text-neutral-400 mb-1">Thanh toán bù trừ (Gk)</label>
                <input
                  type="number"
                  value={clearingGk}
                  onChange={(e) => setClearingGk(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 font-mono bg-white dark:bg-neutral-800"
                />
              </div>
            </div>
          )}
        </div>

        {/* Output Result Box */}
        {isValid ? (
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-neutral-900 dark:text-neutral-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-2 mb-2">
              <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Kết quả Tính toán Lượng Tiền Cần Thiết (M)
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-purple-900 dark:text-purple-200">
                {mResult.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} <span className="text-xs font-sans">Tỷ VNĐ</span>
              </span>
            </div>

            {/* Step-by-step derivation */}
            <div className="text-xs space-y-1 font-mono text-neutral-600 dark:text-neutral-300">
              <div>
                <strong>Bước 1:</strong> Xác định tổng giá cả ròng cần tiền mặt ={' '}
                {numerator.toLocaleString('vi-VN')} tỷ VNĐ
              </div>
              <div>
                <strong>Bước 2:</strong> Chia cho tốc độ chu chuyển V ({v} vòng) ={' '}
                {numerator.toLocaleString('vi-VN')} / {v} ={' '}
                <span className="text-purple-600 dark:text-purple-400 font-bold">
                  {mResult.toLocaleString('vi-VN', { maximumFractionDigits: 2 })} tỷ VNĐ
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-700 dark:text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      {/* Vietnam Macro 2025 Data Card */}
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Landmark className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h4 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 tracking-tight">
            Dữ liệu Thực tiễn Kinh tế Vĩ mô Việt Nam Năm 2025
          </h4>
        </div>

        {/* 4 Key Macro Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500">Cung tiền M2</div>
            <div className="text-lg font-bold font-mono text-indigo-600 dark:text-indigo-400 mt-1">
              +{VIETNAM_MACRO_2025.m2GrowthPercent}%
            </div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500">Tăng trưởng Tín dụng</div>
            <div className="text-lg font-bold font-mono text-blue-600 dark:text-blue-400 mt-1">
              +{VIETNAM_MACRO_2025.creditGrowthPercent}%
            </div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500">Lạm phát CPI 2025</div>
            <div className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
              +{VIETNAM_MACRO_2025.cpi2025Percent}%
            </div>
            <span className="text-[10px] text-neutral-400">(2024: +3,63%)</span>
          </div>
          <div className="p-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="text-xs text-neutral-500">Tăng trưởng GDP 2025</div>
            <div className="text-lg font-bold font-mono text-amber-600 dark:text-amber-400 mt-1">
              +{VIETNAM_MACRO_2025.gdp2025Percent}%
            </div>
          </div>
        </div>

        {/* Academic analysis text */}
        <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-950 dark:text-indigo-200/90 leading-relaxed">
          <strong className="text-indigo-900 dark:text-indigo-300">Ý nghĩa phân tích: </strong>
          {VIETNAM_MACRO_2025.analysis}
        </div>
      </div>
    </div>
  );
};
