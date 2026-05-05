import ReactECharts from "echarts-for-react";

const DrivingScore = () => {
  const gauge = (value: number, color: string) => ({
    series: [
      {
        type: "gauge",
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 100,
        splitNumber: 10,
        axisLine: {
          lineStyle: {
            width: 14,
            color: [
              [value / 100, color],
              [1, "#EDEDED"],
            ],
          },
        },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          color: "#111827",
          fontSize: 48,
          offsetCenter: [0, "10%"],
        },
        data: [{ value }],
      },
    ],
  });

  const pieOption = {
    tooltip: { trigger: "item" },
    legend: { bottom: 0, textStyle: { color: "#4B5563" } },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        label: { show: false },
        data: [
          { value: 35, name: "Peak" },
          { value: 45, name: "Off Peak" },
          { value: 20, name: "Night" },
        ],
      },
    ],
    color: ["#6C63FF", "#9AA4FF", "#E5E7EB"],
  };

  const barOption = {
    grid: { left: 40, right: 10, top: 20, bottom: 30 },
    xAxis: {
      type: "category",
      data: Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, "0")),
      axisLabel: { color: "#6B7280", fontSize: 10 },
    },
    yAxis: { type: "value", axisLabel: { color: "#6B7280" } },
    series: [
      {
        type: "bar",
        data: Array.from({ length: 24 }, () => +(Math.random() * 2).toFixed(2)),
        itemStyle: { color: "#6C63FF" },
        barWidth: "60%",
      },
    ],
  };

  const lineOption = {
    grid: { left: 40, right: 10, top: 20, bottom: 30 },
    xAxis: {
      type: "category",
      data: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
      axisLabel: { color: "#6B7280" },
    },
    yAxis: { type: "value", axisLabel: { color: "#6B7280" } },
    series: [
      {
        type: "line",
        smooth: true,
        data: [2, 12, 30, 45, 52, 40, 28, 18, 8],
        lineStyle: { color: "#6C63FF", width: 3 },
        areaStyle: { color: "rgba(108,99,255,0.1)" },
      },
    ],
  };

  return (
    <div className="">
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm ring-1 ring-black/5">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900">
          Driving Score
        </h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl ring-1 ring-black/10 p-4">
            <p className="text-xs text-gray-500 mb-2">7 DAYS</p>
            <ReactECharts
              option={gauge(60, "#22C55E")}
              style={{ height: 220 }}
            />
          </div>
          <div className="rounded-2xl ring-1 ring-black/10 p-4">
            <p className="text-xs text-gray-500 mb-2">30 DAYS</p>
            <ReactECharts
              option={gauge(40, "#F59E0B")}
              style={{ height: 220 }}
            />
          </div>
          <div className="rounded-2xl ring-1 ring-black/10 p-4">
            <p className="text-xs text-gray-500 mb-2">365 DAYS</p>
            <ReactECharts
              option={gauge(20, "#EF4444")}
              style={{ height: 220 }}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 rounded-2xl ring-1 ring-black/10 p-5">
            <p className="text-xs font-semibold tracking-wide text-gray-500 mb-3">
              YOUR DRIVE TIME
            </p>
            <ReactECharts option={pieOption} style={{ height: 260 }} />
            <div className="mt-4 text-xs text-gray-600 flex gap-4">
              <span className="inline-flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#6C63FF]" /> Peak
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#9AA4FF]" /> Off Peak
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#E5E7EB]" /> Night
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl ring-1 ring-black/10 p-5">
              <p className="text-xs font-semibold tracking-wide text-gray-500 mb-3">
                DISTANCE
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl ring-1 ring-black/10 p-4">
                  <p className="text-xs text-gray-500">TOTAL DRIVEN DISTANCE</p>
                  <p className="text-3xl font-bold text-gray-900">357.22</p>
                </div>
                <div className="rounded-xl ring-1 ring-black/10 p-4">
                  <p className="text-xs text-gray-500">AVERAGE DRIVEN DIST</p>
                  <p className="text-3xl font-bold text-gray-900">51.03</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl ring-1 ring-black/10 p-3">
                <ReactECharts option={lineOption} style={{ height: 220 }} />
              </div>
            </div>

            <div className="rounded-2xl ring-1 ring-black/10 p-5">
              <p className="text-xs font-semibold tracking-wide text-gray-500 mb-3">
                HOURLY DISTRIBUTION
              </p>
              <ReactECharts option={barOption} style={{ height: 300 }} />
              <div className="mt-3 text-xs text-gray-600 flex gap-4">
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-[#6C63FF]" />
                  Peak Time
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-[#9AA4FF]" />
                  Off Peak Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrivingScore;
