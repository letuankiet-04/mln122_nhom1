import React, { useState } from 'react';
import { Sliders, RefreshCw, AlertCircle, ArrowUpRight, ArrowDownRight, Sparkles } from 'lucide-react';

export const SupplyDemandSimulator: React.FC = () => {
  // Demand shift: -50 to +50 (default 0)
  const [demandShift, setDemandShift] = useState<number>(10);
  // Supply shift: -50 to +50 (default 0)
  const [supplyShift, setSupplyShift] = useState<number>(0);

  // Theoretical linear equations:
  // Base Demand: P = 100 - Q + demandShift
  // Base Supply: P = 20 + Q - supplyShift
  // Equilibrium: 100 - Q + demandShift = 20 + Q - supplyShift
  // 2Q = 80 + demandShift + supplyShift => Q* = 40 + (demandShift + supplyShift)/2
  // P* = 20 + Q* - supplyShift

  const qEquilibrium = Math.max(10, Math.min(80, 40 + (demandShift + supplyShift) / 2));
  const pEquilibrium = Math.max(10, Math.min(95, 20 + qEquilibrium - supplyShift));

  const handleReset = () => {
    setDemandShift(0);
    setSupplyShift(0);
  };

  const handleScenario = (scenario: 'tet' | 'crop_loss' | 'bumper_crop') => {
    if (scenario === 'tet') {
      setDemandShift(35);
      setSupplyShift(-5);
    } else if (scenario === 'crop_loss') {
      setDemandShift(5);
      setSupplyShift(-35);
    } else if (scenario === 'bumper_crop') {
      setDemandShift(0);
      setSupplyShift(35);
    }
  };

  // Status explanation
  let statusText = 'Thị trường đang ở trạng thái cân bằng bình thường.';
  let badgeColor = 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';

  if (pEquilibrium > 60) {
    statusText = 'Giá cả thị trường đang cao hơn giá trị thông thường do Cầu tăng mạnh hoặc Cung khan hiếm. Kích thích các nhà sản xuất gia tăng công suất mở rộng cung.';
    badgeColor = 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
  } else if (pEquilibrium < 55) {
    statusText = 'Giá cả thị trường hạ thấp do nguồn Cung vượt trội hoặc Cầu suy giảm. Nhà sản xuất đối mặt áp lực giảm giá, tinh gọn chi phí hoặc thu hẹp sản lượng.';
    badgeColor = 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
  }

  // Coordinate mapping for SVG (Width: 320, Height: 240)
  // X: Q (0 to 100) -> 40 to 300
  // Y: P (0 to 120) -> 200 to 20
  const mapX = (q: number) => 40 + (q / 100) * 250;
  const mapY = (p: number) => 210 - (p / 120) * 180;

  // Demand line: P = 100 - Q + demandShift
  const dQ1 = 5;
  const dP1 = Math.max(5, Math.min(115, 100 - dQ1 + demandShift));
  const dQ2 = 85;
  const dP2 = Math.max(5, Math.min(115, 100 - dQ2 + demandShift));

  // Supply line: P = 20 + Q - supplyShift
  const sQ1 = 5;
  const sP1 = Math.max(5, Math.min(115, 20 + sQ1 - supplyShift));
  const sQ2 = 85;
  const sP2 = Math.max(5, Math.min(115, 20 + sQ2 - supplyShift));

  const eqX = mapX(qEquilibrium);
  const eqY = mapY(pEquilibrium);

  return (
    <div className="my-6 rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-neutral-900/10 to-teal-500/5 p-4 sm:p-6 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-500/20 pb-4 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h4 className="font-bold text-base sm:text-lg text-emerald-950 dark:text-emerald-300 tracking-tight">
              Công cụ Mô phỏng Cung – Cầu (Supply & Demand Simulator)
            </h4>
          </div>
          <span className="inline-block mt-1 text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/20">
            Dữ liệu giả định mô phỏng sư phạm — Minh họa cơ chế dịch chuyển
          </span>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          Đặt lại gốc
        </button>
      </div>

      {/* Preset scenario buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className="text-xs text-neutral-500 font-medium">Tình huống thực tế:</span>
        <button
          onClick={() => handleScenario('tet')}
          className="text-xs px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-300 border border-red-500/30 hover:bg-red-500/20 transition-colors flex items-center gap-1"
        >
          <Sparkles className="w-3 h-3" />
          Tết Nguyên Đán (Cầu tăng vọt)
        </button>
        <button
          onClick={() => handleScenario('crop_loss')}
          className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
        >
          Mất mùa / Hạn hán (Cung giảm mạnh)
        </button>
        <button
          onClick={() => handleScenario('bumper_crop')}
          className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
        >
          Trúng mùa bội thu (Cung dồi dào)
        </button>
      </div>

      {/* Interactive Controls & Diagram Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Sliders Column */}
        <div className="md:col-span-5 space-y-4 text-xs">
          {/* Demand Slider */}
          <div className="p-3.5 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                Đường Cầu (Demand - D)
              </span>
              <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300">
                {demandShift > 0 ? `+${demandShift}` : demandShift}
              </span>
            </div>
            <input
              type="range"
              min="-40"
              max="40"
              value={demandShift}
              onChange={(e) => setDemandShift(parseInt(e.target.value, 10))}
              className="w-full accent-blue-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
              <span>Cầu thu hẹp (kinh tế giảm sút)</span>
              <span>Cầu mở rộng (lễ hội, Tết)</span>
            </div>
          </div>

          {/* Supply Slider */}
          <div className="p-3.5 rounded-xl bg-white/60 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700">
            <div className="flex justify-between items-center mb-1.5">
              <span className="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                Đường Cung (Supply - S)
              </span>
              <span className="font-mono font-bold text-neutral-700 dark:text-neutral-300">
                {supplyShift > 0 ? `+${supplyShift}` : supplyShift}
              </span>
            </div>
            <input
              type="range"
              min="-40"
              max="40"
              value={supplyShift}
              onChange={(e) => setSupplyShift(parseInt(e.target.value, 10))}
              className="w-full accent-emerald-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
              <span>Cung khan hiếm (đứt gãy chuỗi)</span>
              <span>Cung dư thừa (bơm hàng bình ổn)</span>
            </div>
          </div>

          {/* Metric Outputs */}
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <div className="text-[11px] text-neutral-500">Giá cân bằng P*</div>
              <div className="text-base font-bold font-mono text-amber-600 dark:text-amber-400">
                {pEquilibrium.toFixed(1)} <span className="text-[10px] font-sans">đơn vị</span>
              </div>
            </div>
            <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <div className="text-[11px] text-neutral-500">Lượng cân bằng Q*</div>
              <div className="text-base font-bold font-mono text-teal-600 dark:text-teal-400">
                {qEquilibrium.toFixed(1)} <span className="text-[10px] font-sans">đơn vị</span>
              </div>
            </div>
          </div>
        </div>

        {/* SVG Curve Canvas */}
        <div className="md:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-[340px] bg-white dark:bg-neutral-950 p-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-inner">
            <svg viewBox="0 0 320 240" className="w-full h-auto">
              {/* Axes */}
              <line x1="40" y1="210" x2="300" y2="210" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400" />
              <line x1="40" y1="210" x2="40" y2="20" stroke="currentColor" strokeWidth="1.5" className="text-neutral-400" />
              
              {/* Labels */}
              <text x="305" y="214" fontSize="11" fill="currentColor" className="text-neutral-500 font-serif">Q (Lượng)</text>
              <text x="35" y="15" fontSize="11" fill="currentColor" className="text-neutral-500 font-serif" textAnchor="end">P (Giá)</text>

              {/* Demand curve line (D) */}
              <line
                x1={mapX(dQ1)}
                y1={mapY(dP1)}
                x2={mapX(dQ2)}
                y2={mapY(dP2)}
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <text x={mapX(dQ2) + 4} y={mapY(dP2) + 4} fill="#3b82f6" fontSize="12" fontWeight="bold">D</text>

              {/* Supply curve line (S) */}
              <line
                x1={mapX(sQ1)}
                y1={mapY(sP1)}
                x2={mapX(sQ2)}
                y2={mapY(sP2)}
                stroke="#10b981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <text x={mapX(sQ2) + 4} y={mapY(sP2) - 2} fill="#10b981" fontSize="12" fontWeight="bold">S</text>

              {/* Equilibrium lines */}
              <line x1="40" y1={eqY} x2={eqX} y2={eqY} stroke="#f59e0b" strokeDasharray="3 3" strokeWidth="1" />
              <line x1={eqX} y1="210" x2={eqX} y2={eqY} stroke="#f59e0b" strokeDasharray="3 3" strokeWidth="1" />

              {/* Equilibrium point */}
              <circle cx={eqX} cy={eqY} r="6" fill="#f59e0b" className="animate-pulse" />
              <circle cx={eqX} cy={eqY} r="3" fill="#ffffff" />
              <text x={eqX + 8} y={eqY - 8} fill="#f59e0b" fontSize="11" fontWeight="bold">
                E ({pEquilibrium.toFixed(0)}, {qEquilibrium.toFixed(0)})
              </text>
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 text-[11px] mt-2">
            <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium">
              <span className="w-2.5 h-0.5 bg-blue-500 rounded"></span> Đường Cầu D (Nghịch biến)
            </span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2.5 h-0.5 bg-emerald-500 rounded"></span> Đường Cung S (Đồng biến)
            </span>
          </div>
        </div>
      </div>

      {/* Dynamic Explanation Box */}
      <div className={`mt-4 p-3 rounded-xl border text-xs flex items-start gap-2.5 ${badgeColor}`}>
        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold">Phân tích kinh tế: </span>
          {statusText}
        </div>
      </div>
    </div>
  );
};
