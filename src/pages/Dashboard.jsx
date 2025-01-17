import React from "react";
import "../styles/Dashboard.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const data = {
    labels: ["10代", "20代", "30代", "40代", "50代", "60代", "70代以上"],
    datasets: [
      {
        label: "男性",
        data: [100, 300, 500, 400, 200, 100, 50],
        backgroundColor: "orange",
      },
      {
        label: "女性",
        data: [50, 200, 400, 300, 150, 80, 40],
        backgroundColor: "yellow",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}人`,
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="metrics">
        <div className="metric-box">
          ユーザー登録数<br />
          <strong>450人</strong>
        </div>
        <div className="metric-box">
          アクティブユーザー<br />
          <strong>50人</strong>
        </div>
        <div className="metric-box">
          定着率<br />
          <strong>10%</strong>
        </div>
        <div className="metric-box">
          平均操作回数<br />
          <strong>4回</strong>
        </div>
        <div className="metric-box">
          抽選利用回数<br />
          <strong>125回</strong>
        </div>
        <div className="metric-box">
          アカウント削除数<br />
          <strong>10人</strong>
        </div>
      </div>
      <div className="chart-section">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Dashboard;
