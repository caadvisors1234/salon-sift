import React, { useState, useEffect, useMemo } from 'react';
import SEOHead from '../components/SEOHead';

const SimulationPage: React.FC = () => {
  const [sales, setSales] = useState<number | ''>('');
  const [average, setAverage] = useState<number | ''>('');
  const [salary, setSalary] = useState<number | ''>('');
  const [hours, setHours] = useState<number | ''>('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const result = useMemo(() => {
    if (!sales || !average || !salary || !hours) return null;
    const salesNum = Number(sales);
    const averageNum = Number(average);
    const salaryNum = Number(salary);
    const hoursNum = Number(hours);

    // 収益シミュレーション
    const reward = Math.floor(salesNum * 0.8); // 報酬: 売上の80%
    const supplyCost = Math.floor(salesNum * 0.05); // 仕入れ費: 売上の5%
    const baseFee = 50000; // 基本使用料(税抜)
    const takeHome = reward - supplyCost - baseFee; // 手取り
    const incomeChangePct = salaryNum > 0
      ? Math.round(((takeHome - salaryNum) / salaryNum) * 100)
      : 0;

    // 勤務時間シミュレーション
    const customers = averageNum > 0 ? Math.round(salesNum / averageNum) : 0; // 客数
    const serviceTimePerCustomer = 1.5; // 接客時間/人
    const estimatedHours = Math.round(customers * serviceTimePerCustomer); // 想定勤務時間
    const hoursChangePct = hoursNum > 0
      ? Math.round(((hoursNum - estimatedHours) / hoursNum) * 100)
      : 0;

    return {
      currentSalary: salaryNum,
      takeHome,
      reward,
      supplyCost,
      baseFee,
      incomeChangePct,
      currentHours: hoursNum,
      estimatedHours,
      hoursChangePct,
      sales: salesNum,
      average: averageNum,
      customers,
      serviceTimePerCustomer,
    };
  }, [sales, average, salary, hours]);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sales || !average || !salary || !hours) {
      alert('すべての項目を入力してください。');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      const el = document.getElementById('simulation-result');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  // バーの高さ計算（最大値を基準に比率を出す）
  const incomeMax = result ? Math.max(result.currentSalary, result.takeHome) : 1;
  const currentSalaryBarHeight = result ? Math.max((result.currentSalary / incomeMax) * 160, 20) : 0;
  const takeHomeBarHeight = result ? Math.max((result.takeHome / incomeMax) * 160, 20) : 0;

  const hoursMax = result ? Math.max(result.currentHours, result.estimatedHours) : 1;
  const currentHoursBarHeight = result ? Math.max((result.currentHours / hoursMax) * 160, 20) : 0;
  const estimatedHoursBarHeight = result ? Math.max((result.estimatedHours / hoursMax) * 160, 20) : 0;

  const incomeUp = result ? result.incomeChangePct >= 0 : true;
  const hoursDown = result ? result.hoursChangePct >= 0 : true;

  return (
    <>
      <SEOHead
        title="収益シミュレーション｜群馬の美容師求人"
        description="SALON SIFTでの収益を試算。売上・客単価・現給与・勤務時間を入力するだけで、手取りと勤務時間の変化をシミュレーションできます。"
        canonical="/simulation"
      />
    <div className="min-h-screen bg-[#f0eeea] font-noto text-[#333]">
      <main className="pt-32 pb-20">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[12px] font-bold tracking-[0.4em] text-[#3a533d] mb-4 uppercase">Simulation</p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-widest text-gray-900 mb-6">収益シミュレーション<span className="block text-base md:text-lg mt-4 tracking-wider">群馬の美容師求人｜高崎・前橋の美容室 SALON SIFT</span></h1>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              SALON SIFTでの収益を試算できます。<br className="hidden md:block"/>
              実際の収益は、ご利用状況などによって異なりますので、目安としてご利用ください。
            </p>
          </div>

          {/* 入力フォーム */}
          <div className="bg-[#e8e6e0] p-6 md:p-12 rounded-sm">
            <form onSubmit={handleCalculate}>
              <div className="space-y-5 max-w-[640px] mx-auto">
                {[
                  { label: '指名売上', value: sales, set: setSales, unit: '円/月', placeholder: '400,000' },
                  { label: '平均客単価', value: average, set: setAverage, unit: '円/月', placeholder: '8,000' },
                  { label: '現在の給料', value: salary, set: setSalary, unit: '円/月', placeholder: '200,000' },
                  { label: '現在の勤務時間', value: hours, set: setHours, unit: '時間/月', placeholder: '200' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 md:gap-5">
                    <label className="text-xs md:text-sm font-bold text-gray-700 w-24 md:w-32 shrink-0">
                      {item.label}
                    </label>
                    <input
                      type="number"
                      value={item.value}
                      onChange={e => (item.set as any)(e.target.value ? Number(e.target.value) : '')}
                      className="flex-1 bg-[#d8d5cd] border-0 px-4 py-3 text-right text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-[#3a533d]/40 transition-all placeholder-gray-500/60"
                      placeholder={item.placeholder}
                    />
                    <span className="text-xs md:text-sm text-gray-700 w-12 md:w-14 shrink-0">{item.unit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#1a1a1a] text-white px-16 md:px-24 py-4 font-bold tracking-[0.3em] hover:bg-[#333] transition-colors text-sm md:text-base"
                >
                  シミュレーション結果を見る
                </button>
              </div>
            </form>
          </div>

          {/* 結果表示 */}
          {submitted && result && (
            <div
              id="simulation-result"
              className="mt-10 bg-[#e8e6e0] p-6 md:p-12 rounded-sm animate-fade-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-gray-400/40">
                {/* 左: 収益シミュレーション結果 */}
                <div className="md:pr-8">
                  <h3 className="text-center text-sm md:text-base font-bold tracking-widest text-gray-800 mb-6">
                    収益シミュレーション結果
                  </h3>

                  {/* バッジ */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-wider">
                      {Math.abs(result.incomeChangePct)}%{incomeUp ? 'UP!' : 'DOWN!'}
                    </div>
                  </div>

                  {/* バーチャート */}
                  <div className="relative h-[200px] flex items-end justify-center gap-8 md:gap-12 mb-3">
                    {/* 点線 (バー間を結ぶ) */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <line
                        x1="32"
                        y1={100 - (currentSalaryBarHeight / 200) * 100}
                        x2="68"
                        y2={100 - (takeHomeBarHeight / 200) * 100}
                        stroke="#888"
                        strokeWidth="0.3"
                        strokeDasharray="1,1"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 md:w-20 bg-[#c9c5bd]"
                        style={{ height: `${currentSalaryBarHeight}px` }}
                      />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 md:w-20 bg-[#f08a3e]"
                        style={{ height: `${takeHomeBarHeight}px` }}
                      />
                    </div>
                  </div>

                  {/* バーラベル */}
                  <div className="flex justify-center gap-8 md:gap-12 mb-4">
                    <div className="w-16 md:w-20 text-center">
                      <p className="text-[10px] md:text-xs text-gray-600 mb-1">現在の給与</p>
                      <p className="text-xs md:text-sm font-bold text-gray-800">
                        {result.currentSalary.toLocaleString()}円
                      </p>
                    </div>
                    <div className="w-16 md:w-20 text-center">
                      <p className="text-[10px] md:text-xs text-gray-600 mb-1">想定収入</p>
                      <p className="text-xs md:text-sm font-bold text-gray-800">
                        {result.takeHome.toLocaleString()}円
                      </p>
                    </div>
                  </div>

                  <p className="text-center text-[10px] md:text-[11px] text-gray-500 mb-8">
                    ※想定収入＝売上-基本使用料-仕入費(5%)
                  </p>

                  {/* 手取り */}
                  <div className="flex items-end justify-between border-t border-gray-400/40 pt-6 mb-4">
                    <span className="text-xs md:text-sm text-gray-700 pb-1">手取り</span>
                    <div className="flex items-end">
                      <span className="text-3xl md:text-5xl font-bold text-[#f08a3e] leading-none">
                        {result.takeHome.toLocaleString()}
                      </span>
                      <span className="text-sm md:text-base text-gray-700 ml-1 pb-1">円</span>
                    </div>
                  </div>

                  {/* 内訳 */}
                  <div className="space-y-2 border-t border-gray-400/40 pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs md:text-sm text-gray-700">報酬</span>
                      <span className="text-base md:text-xl font-bold text-gray-800">
                        {result.reward.toLocaleString()}<span className="text-xs ml-0.5">円</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs md:text-sm text-gray-600">- 仕入れ費（売上5%）</span>
                      <span className="text-sm md:text-lg text-gray-700">
                        {result.supplyCost.toLocaleString()}<span className="text-xs ml-0.5">円</span>
                      </span>
                    </div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs md:text-sm text-gray-600">- 基本使用料（税抜）</span>
                      <span className="text-sm md:text-lg text-gray-700">
                        {result.baseFee.toLocaleString()}<span className="text-xs ml-0.5">円</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* 右: 勤務時間シミュレーション結果 */}
                <div className="md:pl-8 mt-12 md:mt-0 pt-12 md:pt-0 border-t md:border-t-0 border-gray-400/40">
                  <h3 className="text-center text-sm md:text-base font-bold tracking-widest text-gray-800 mb-6">
                    勤務時間シミュレーション結果
                  </h3>

                  {/* バッジ */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full text-sm md:text-base font-bold tracking-wider">
                      {Math.abs(result.hoursChangePct)}%{hoursDown ? 'DOWN!' : 'UP!'}
                    </div>
                  </div>

                  {/* バーチャート */}
                  <div className="relative h-[200px] flex items-end justify-center gap-8 md:gap-12 mb-3">
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      preserveAspectRatio="none"
                      viewBox="0 0 100 100"
                    >
                      <line
                        x1="32"
                        y1={100 - (currentHoursBarHeight / 200) * 100}
                        x2="68"
                        y2={100 - (estimatedHoursBarHeight / 200) * 100}
                        stroke="#888"
                        strokeWidth="0.3"
                        strokeDasharray="1,1"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 md:w-20 bg-[#c9c5bd]"
                        style={{ height: `${currentHoursBarHeight}px` }}
                      />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                      <div
                        className="w-16 md:w-20 bg-[#4ba3d4]"
                        style={{ height: `${estimatedHoursBarHeight}px` }}
                      />
                    </div>
                  </div>

                  {/* バーラベル */}
                  <div className="flex justify-center gap-8 md:gap-12 mb-8">
                    <div className="w-16 md:w-20 text-center">
                      <p className="text-[10px] md:text-xs text-gray-600 mb-1">現在の勤務時間</p>
                      <p className="text-xs md:text-sm font-bold text-gray-800">
                        {result.currentHours}時間
                      </p>
                    </div>
                    <div className="w-16 md:w-20 text-center">
                      <p className="text-[10px] md:text-xs text-gray-600 mb-1">想定勤務時間</p>
                      <p className="text-xs md:text-sm font-bold text-gray-800">
                        {result.estimatedHours}時間
                      </p>
                    </div>
                  </div>

                  {/* 一か月あたり */}
                  <div className="flex items-end justify-between border-t border-gray-400/40 pt-6 mb-6">
                    <span className="text-xs md:text-sm text-gray-700 pb-1">一か月あたり</span>
                    <div className="flex items-end">
                      <span className="text-3xl md:text-5xl font-bold text-[#4ba3d4] leading-none">
                        {result.estimatedHours}
                      </span>
                      <span className="text-sm md:text-base text-gray-700 ml-1 pb-1">時間</span>
                    </div>
                  </div>

                  {/* 計算式 */}
                  <div className="border-t border-gray-400/40 pt-6">
                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs text-gray-600 mb-1">指名売上</p>
                        <p className="text-sm md:text-base font-bold text-gray-800">
                          {result.sales.toLocaleString()}<span className="text-[10px] ml-0.5">円</span>
                        </p>
                      </div>
                      <div className="text-xl md:text-2xl text-gray-700 font-bold">÷</div>
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs text-gray-600 mb-1">客単価</p>
                        <p className="text-sm md:text-base font-bold text-gray-800">
                          {result.average.toLocaleString()}<span className="text-[10px] ml-0.5">円</span>
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-4">
                      <div></div>
                      <div className="text-xl md:text-2xl text-gray-700 font-bold">＝</div>
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs text-gray-600 mb-1">客数</p>
                        <p className="text-sm md:text-base font-bold text-gray-800">
                          {result.customers}<span className="text-[10px] ml-0.5">人</span>
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs text-gray-600 mb-1">客数</p>
                        <p className="text-sm md:text-base font-bold text-gray-800">
                          {result.customers}<span className="text-[10px] ml-0.5">人</span>
                        </p>
                      </div>
                      <div className="text-xl md:text-2xl text-gray-700 font-bold">×</div>
                      <div className="text-center">
                        <p className="text-[10px] md:text-xs text-gray-600 mb-1">接客時間/人</p>
                        <p className="text-sm md:text-base font-bold text-gray-800">
                          {result.serviceTimePerCustomer}<span className="text-[10px] ml-0.5">時間</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
    </>
  );
};

export default SimulationPage;
