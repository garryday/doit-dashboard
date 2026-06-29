const STORAGE_KEY = "doit-dashboard-months-v1";

const seedData = [
  { label: "Сен 2024", totalUsers: 2910, newUsers: 2910, mau: 0, activeSubs: 11, subGrowth: 0, mrr: 32, revenue: 78, cancellations: 1, churnRate: 0, adSpend: 4, impressions: 255000, installs: 1930 },
  { label: "Окт 2024", totalUsers: 5537, newUsers: 2647, mau: 2973, activeSubs: 30, subGrowth: 20, mrr: 81, revenue: 171, cancellations: 6, churnRate: 55, adSpend: 264, impressions: 117000, installs: 750 },
  { label: "Ноя 2024", totalUsers: 6490, newUsers: 1120, mau: 1765, activeSubs: 28, subGrowth: 4, mrr: 67, revenue: 132, cancellations: 11, churnRate: 37, adSpend: 241, impressions: 75800, installs: 124 },
  { label: "Дек 2024", totalUsers: 8851, newUsers: 1734, mau: 2659, activeSubs: 39, subGrowth: 22, mrr: 95, revenue: 213, cancellations: 10, churnRate: 35, adSpend: 0, impressions: 240000, installs: 400 },
  { label: "Янв 2025", totalUsers: 10659, newUsers: 1808, mau: 3867, activeSubs: 54, subGrowth: 25, mrr: 125, revenue: 359, cancellations: 14, churnRate: 36, adSpend: 0, impressions: 208000, installs: 405 },
  { label: "Фев 2025", totalUsers: 12545, newUsers: 1886, mau: 2021, activeSubs: 53, subGrowth: 13, mrr: 120, revenue: 201, cancellations: 11, churnRate: 20, adSpend: 0, impressions: 6300, installs: 84 },
  { label: "Мар 2025", totalUsers: 13463, newUsers: 918, mau: 1378, activeSubs: 57, subGrowth: 15, mrr: 129, revenue: 157, cancellations: 9, churnRate: 17, adSpend: 0, impressions: 32000, installs: 103 },
  { label: "Апр 2025", totalUsers: 14380, newUsers: 917, mau: 1397, activeSubs: 55, subGrowth: 8, mrr: 136, revenue: 125, cancellations: 10, churnRate: 17, adSpend: 0, impressions: 52622, installs: 188 },
  { label: "Май 2025", totalUsers: 15020, newUsers: 640, mau: 1117, activeSubs: 55, subGrowth: 10, mrr: 139, revenue: 175, cancellations: 9, churnRate: 17, adSpend: 0, impressions: 30621, installs: 227 },
  { label: "Июн 2025", totalUsers: 15621, newUsers: 601, mau: 1040, activeSubs: 58, subGrowth: 12, mrr: 137, revenue: 190, cancellations: 8, churnRate: 14, adSpend: 0, impressions: 2620, installs: 68 },
  { label: "Июл 2025", totalUsers: 16125, newUsers: 504, mau: 940, activeSubs: 55, subGrowth: 5, mrr: 135, revenue: 211, cancellations: 6, churnRate: 11, adSpend: 174, impressions: 0, installs: 0 },
  { label: "Авг 2025", totalUsers: 17028, newUsers: 903, mau: 1160, activeSubs: 66, subGrowth: 17, mrr: 175, revenue: 156, cancellations: 8, churnRate: 14, adSpend: 200, impressions: 142000, installs: 0 },
  { label: "Сен 2025", totalUsers: 17865, newUsers: 837, mau: 1237, activeSubs: 71, subGrowth: 5, mrr: 175, revenue: 225, cancellations: 12, churnRate: 18, adSpend: 0, impressions: 0, installs: 0 },
  { label: "Окт 2025", totalUsers: 18820, newUsers: 955, mau: 1251, activeSubs: 69, subGrowth: -2, mrr: 190, revenue: 213, cancellations: 9, churnRate: 13, adSpend: 0, impressions: 4300, installs: 97 },
  { label: "Ноя 2025", totalUsers: 21248, newUsers: 2428, mau: 2885, activeSubs: 63, subGrowth: -6, mrr: 181, revenue: 139, cancellations: 20, churnRate: 29, adSpend: 0, impressions: 700000, installs: 2000 },
  { label: "Дек 2025", totalUsers: 25549, newUsers: 4301, mau: 4741, activeSubs: 88, subGrowth: 25, mrr: 297, revenue: 386, cancellations: 14, churnRate: 22, adSpend: 0, impressions: 400000, installs: 4000 },
  { label: "Янв 2026", totalUsers: 36020, newUsers: 10471, mau: 11100, activeSubs: 163, subGrowth: 75, mrr: 624, revenue: 1256, cancellations: 28, churnRate: 32, adSpend: 20, impressions: 1500000, installs: 8500 },
  { label: "Фев 2026", totalUsers: 41295, newUsers: 5275, mau: 7500, activeSubs: 158, subGrowth: -5, mrr: 604, revenue: 792, cancellations: 48, churnRate: 30, adSpend: 0, impressions: 900000, installs: 5200 },
  { label: "Мар 2026", totalUsers: 45763, newUsers: 4468, mau: 6631, activeSubs: 165, subGrowth: 7, mrr: 653, revenue: 810, cancellations: 38, churnRate: 24, adSpend: 40, impressions: 2500, installs: 22 },
  { label: "Апр 2026", totalUsers: 55224, newUsers: 9461, mau: 11518, activeSubs: 196, subGrowth: 31, mrr: 800, revenue: 1161, cancellations: 56, churnRate: 33, adSpend: 0, impressions: 0, installs: 0 },
  { label: "Май 2026", totalUsers: 67400, newUsers: 12176, mau: 15476, activeSubs: 245, subGrowth: 49, mrr: 1064, revenue: 1710, cancellations: 60, churnRate: 30, adSpend: 0, impressions: 0, installs: 0 }
];

let months = loadMonths();
let activePeriod = "all";

const formatNumber = new Intl.NumberFormat("ru-RU");
const formatCurrency = new Intl.NumberFormat("ru-RU", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const formatPercent = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 1 });

function loadMonths() {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : seedData;
}

function saveMonths() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(months));
}

function visibleMonths() {
  if (activePeriod === "all") return months;
  return months.slice(-Number(activePeriod));
}

function visibleRows() {
  const startIndex = activePeriod === "all" ? 0 : Math.max(months.length - Number(activePeriod), 0);
  return months.slice(startIndex).map((row, offset) => ({
    ...row,
    monthIndex: startIndex + offset
  }));
}

function periodLabel() {
  if (activePeriod === "all") return "за весь период";
  if (activePeriod === "1") return "за прошлый месяц";
  return `за ${activePeriod} мес.`;
}

function pct(value, total) {
  return total > 0 ? (value / total) * 100 : 0;
}

function delta(current, previous) {
  if (!previous) return 0;
  return pct(current - previous, previous);
}

function latest() {
  return months[months.length - 1];
}

function previous() {
  return months[months.length - 2];
}

function derived(row, index, list = months) {
  const prior = list[index - 1];
  const churnRate = row.churnRate ?? pct(row.cancellations, prior?.activeSubs || row.activeSubs);
  const cpi = row.installs > 0 ? row.adSpend / row.installs : 0;
  const cpa = row.activeSubs > 0 && row.adSpend > 0 ? row.adSpend / Math.max(row.subGrowth, 1) : 0;
  const activation = pct(row.mau, row.totalUsers);
  const paidConversion = pct(row.activeSubs, row.mau);
  const arpu = row.mau > 0 ? row.revenue / row.mau : 0;
  const arppu = row.activeSubs > 0 ? row.revenue / row.activeSubs : 0;
  const ltvProxy = churnRate > 0 ? arppu / (churnRate / 100) : 0;
  const roas = row.adSpend > 0 ? row.revenue / row.adSpend : 0;
  return { churnRate, cpi, cpa, activation, paidConversion, arpu, arppu, ltvProxy, roas, prior };
}

function renderKpis() {
  const rows = visibleRows();
  const current = rows[rows.length - 1];
  const prior = months[current.monthIndex - 1] || current;
  const d = derived(current, current.monthIndex);
  const totalNewUsers = rows.reduce((sum, row) => sum + row.newUsers, 0);
  const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0);
  const avgChurn = rows.reduce((sum, row) => sum + derived(row, row.monthIndex).churnRate, 0) / rows.length;
  const label = periodLabel();

  const kpis = [
    ["Пользователи", formatNumber.format(current.totalUsers), `На конец периода, ${label}`, false],
    ["Новые", formatNumber.format(totalNewUsers), `Суммарный прирост ${label}`, false],
    ["MAU", formatNumber.format(current.mau), `${formatPercent.format(d.activation)}% от базы`, false],
    ["Активные подписки", formatNumber.format(current.activeSubs), `${signed(delta(current.activeSubs, prior.activeSubs))} к предыдущему месяцу`, current.activeSubs < prior.activeSubs],
    ["MRR", formatCurrency.format(current.mrr), `${formatCurrency.format(current.mrr / Math.max(current.activeSubs, 1))} на подписку`, false],
    ["Revenue", formatCurrency.format(totalRevenue), `Суммарный доход ${label}`, false],
    ["Churn", `${formatPercent.format(d.churnRate)}%`, `Среднее ${label}: ${formatPercent.format(avgChurn)}%`, d.churnRate > avgChurn]
  ];

  document.querySelector("#kpiGrid").innerHTML = kpis.map(([label, value, note, isNegative]) => `
    <article class="kpi-card">
      <small>${label}</small>
      <div class="kpi-value">${value}</div>
      <span class="trend ${isNegative ? "negative" : ""}">${note}</span>
    </article>
  `).join("");
}

function signed(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatPercent.format(value)}%`;
}

function renderInsights() {
  const rows = visibleRows();
  const current = rows[rows.length - 1];
  const first = rows[0];
  const d = derived(current, current.monthIndex);
  const prior = months[current.monthIndex - 1] || current;
  const userGrowth = delta(current.totalUsers, prior.totalUsers);
  const periodGrowth = current.totalUsers - first.totalUsers + first.newUsers;
  const totalRevenue = rows.reduce((sum, row) => sum + row.revenue, 0);

  const insights = [
    ["Activation", `${formatPercent.format(d.activation)}% пользователей активны. Это главный early-warning для качества продукта и ретеншна.`],
    ["Paid conversion", `${formatPercent.format(d.paidConversion)}% MAU платят. Хороший показатель для контроля упаковки тарифа и ценности подписки.`],
    ["Revenue", `${formatCurrency.format(totalRevenue)} ${periodLabel()}. Полезно сравнивать с бюджетом и темпом роста подписок.`],
    ["Growth quality", `${signed(userGrowth)} к предыдущему месяцу, ${formatNumber.format(periodGrowth)} новых пользователей внутри выбранного периода.`]
  ];

  document.querySelector("#insightsGrid").innerHTML = insights.map(([title, text]) => `
    <article class="insight">
      <strong>${title}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function drawLineChart(canvas, series, options = {}) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.floor((options.height || canvas.height || 320) * ratio);
  ctx.scale(ratio, ratio);

  const width = rect.width;
  const height = options.height || 320;
  const pad = { top: 18, right: 22, bottom: 42, left: 48 };
  const data = visibleMonths();
  const labels = data.map(row => row.label);
  const preparedSeries = series.map(item => {
    const rawValues = data.map(row => item.value(row));
    const seriesMax = Math.max(...rawValues, 1);
    return {
      ...item,
      values: options.normalize ? rawValues.map(value => (value / seriesMax) * 100) : rawValues
    };
  });
  const values = preparedSeries.flatMap(item => item.values);
  const max = Math.max(...values, 1) * 1.12;
  const min = Math.min(0, ...values);
  const x = index => pad.left + (index * (width - pad.left - pad.right)) / Math.max(labels.length - 1, 1);
  const y = value => height - pad.bottom - ((value - min) / (max - min)) * (height - pad.top - pad.bottom);

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#dce4df";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#66736d";
  ctx.font = "12px Inter, system-ui, sans-serif";

  for (let i = 0; i <= 4; i += 1) {
    const yy = pad.top + i * ((height - pad.top - pad.bottom) / 4);
    ctx.beginPath();
    ctx.moveTo(pad.left, yy);
    ctx.lineTo(width - pad.right, yy);
    ctx.stroke();
    const labelValue = max - i * ((max - min) / 4);
    ctx.fillText(options.normalize ? `${Math.round(labelValue)}%` : shortNumber(labelValue), 8, yy + 4);
  }

  labels.forEach((label, index) => {
    if (index % Math.ceil(labels.length / 7) === 0 || index === labels.length - 1) {
      ctx.fillText(label.split(" ")[0], x(index) - 16, height - 14);
    }
  });

  preparedSeries.forEach(item => {
    ctx.beginPath();
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2.5;
    item.values.forEach((value, index) => {
      const pointX = x(index);
      const pointY = y(value);
      if (index === 0) ctx.moveTo(pointX, pointY);
      else ctx.lineTo(pointX, pointY);
    });
    ctx.stroke();

    item.values.forEach((value, index) => {
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(x(index), y(value), 3, 0, Math.PI * 2);
      ctx.fill();
    });
  });
}

function drawBarChart(canvas) {
  const ctx = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const height = 260;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = height * ratio;
  ctx.scale(ratio, ratio);
  const data = visibleMonths();
  const pad = { top: 20, right: 18, bottom: 42, left: 48 };
  const width = rect.width;
  const max = Math.max(...data.map(row => row.impressions), 1);
  const barWidth = (width - pad.left - pad.right) / data.length * 0.62;

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#dce4df";
  ctx.fillStyle = "#66736d";
  ctx.font = "12px Inter, system-ui, sans-serif";

  for (let i = 0; i <= 4; i += 1) {
    const yy = pad.top + i * ((height - pad.top - pad.bottom) / 4);
    ctx.beginPath();
    ctx.moveTo(pad.left, yy);
    ctx.lineTo(width - pad.right, yy);
    ctx.stroke();
    ctx.fillText(shortNumber(max - i * (max / 4)), 8, yy + 4);
  }

  data.forEach((row, index) => {
    const x = pad.left + index * ((width - pad.left - pad.right) / data.length) + barWidth * 0.3;
    const h = (row.impressions / max) * (height - pad.top - pad.bottom);
    ctx.fillStyle = "#2f6fbd";
    ctx.fillRect(x, height - pad.bottom - h, barWidth, h);
    if (index % Math.ceil(data.length / 7) === 0 || index === data.length - 1) {
      ctx.fillStyle = "#66736d";
      ctx.fillText(row.label.split(" ")[0], x - 6, height - 14);
    }
  });
}

function shortNumber(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}k`;
  return `${Math.round(value)}`;
}

function renderCharts() {
  drawLineChart(document.querySelector("#growthChart"), [
    { color: "#f3b321", value: row => row.totalUsers },
    { color: "#2f6fbd", value: row => row.mau },
    { color: "#c84f44", value: row => row.activeSubs }
  ], { height: 320, normalize: true });

  drawLineChart(document.querySelector("#moneyChart"), [
    { color: "#f3b321", value: row => row.revenue },
    { color: "#2f6fbd", value: row => row.mrr },
    { color: "#c84f44", value: row => row.churnRate ?? 0 }
  ], { height: 320, normalize: true });

  drawBarChart(document.querySelector("#marketingChart"));
}

function renderTables() {
  const rows = months.map((row, index) => ({ ...row, d: derived(row, index) }));
  const dataHeaders = ["Месяц", "Пользователи", "Новые", "MAU", "Activation", "Подписки", "Churn", "MRR", "Доход", "ARPPU", "LTV proxy"];
  document.querySelector("#dataTable").innerHTML = `
    <thead><tr>${dataHeaders.map(header => `<th>${header}</th>`).join("")}</tr></thead>
    <tbody>
      ${[...rows].reverse().map(row => `
        <tr>
          <td>${row.label}</td>
          <td>${formatNumber.format(row.totalUsers)}</td>
          <td>${formatNumber.format(row.newUsers)}</td>
          <td>${formatNumber.format(row.mau)}</td>
          <td>${formatPercent.format(row.d.activation)}%</td>
          <td>${formatNumber.format(row.activeSubs)}</td>
          <td>${formatPercent.format(row.d.churnRate)}%</td>
          <td>${formatCurrency.format(row.mrr)}</td>
          <td>${formatCurrency.format(row.revenue)}</td>
          <td>${formatCurrency.format(row.d.arppu)}</td>
          <td>${formatCurrency.format(row.d.ltvProxy)}</td>
        </tr>
      `).join("")}
    </tbody>
  `;

  const recent = visibleRows().map(row => ({ ...row, d: derived(row, row.monthIndex) })).reverse();
  document.querySelector("#marketingTable").innerHTML = `
    <thead><tr><th>Месяц</th><th>Показы</th><th>Установки</th><th>CPI</th><th>ROAS</th></tr></thead>
    <tbody>
      ${recent.map(row => `
        <tr>
          <td>${row.label}</td>
          <td>${formatNumber.format(row.impressions)}</td>
          <td>${formatNumber.format(row.installs)}</td>
          <td>${formatCurrency.format(row.d.cpi)}</td>
          <td>${row.d.roas ? `${formatPercent.format(row.d.roas)}x` : "нет бюджета"}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
}

function renderAll() {
  renderKpis();
  renderInsights();
  renderCharts();
  renderTables();
}

document.querySelectorAll("[data-period]").forEach(button => {
  button.addEventListener("click", () => {
    activePeriod = button.dataset.period;
    document.querySelectorAll("[data-period]").forEach(item => item.classList.toggle("is-active", item === button));
    renderAll();
  });
});

const dataDialog = document.querySelector("#dataDialog");

document.querySelector("#openDataDialog").addEventListener("click", () => {
  dataDialog.showModal();
});

document.querySelector("#closeDataDialog").addEventListener("click", () => {
  dataDialog.close();
});

dataDialog.addEventListener("click", event => {
  if (event.target === dataDialog) dataDialog.close();
});

document.querySelector("#monthForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const row = {
    label: form.get("label").trim(),
    totalUsers: Number(form.get("totalUsers")),
    newUsers: Number(form.get("newUsers")),
    mau: Number(form.get("mau")),
    activeSubs: Number(form.get("activeSubs")),
    cancellations: Number(form.get("cancellations")),
    mrr: Number(form.get("mrr")),
    revenue: Number(form.get("revenue")),
    adSpend: Number(form.get("adSpend")),
    impressions: Number(form.get("impressions")),
    installs: Number(form.get("installs"))
  };
  const prior = latest();
  row.subGrowth = row.activeSubs - prior.activeSubs;
  row.churnRate = pct(row.cancellations, Math.max(prior.activeSubs, 1));
  months = [...months, row];
  saveMonths();
  event.currentTarget.reset();
  activePeriod = "all";
  document.querySelectorAll("[data-period]").forEach(item => item.classList.toggle("is-active", item.dataset.period === "all"));
  renderAll();
  dataDialog.close();
});

document.querySelector("#resetData").addEventListener("click", () => {
  months = seedData;
  saveMonths();
  renderAll();
});

window.addEventListener("resize", () => {
  window.clearTimeout(window.__doitResizeTimer);
  window.__doitResizeTimer = window.setTimeout(renderCharts, 120);
});

renderAll();
