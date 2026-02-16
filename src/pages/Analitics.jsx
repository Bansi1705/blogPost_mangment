import Navbar from "../Components/Navbar";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Analytics.css";

function Analitics() {
  const chartData = [
    { name: "Admin", posts: 5 },
    { name: "User", posts: 3 },
    { name: "Test", posts: 4 },
    { name: "demo", posts: 2 },
  ];

  const header = ["ID", "Title", "Auther", "Date"];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="analytics-page">
      <Navbar />
      <main className="analytics-main">
        <header className="analytics-header">
          <h1>Blog Analytics</h1>
          <p>Insights into your blog's performance and activity.</p>
        </header>

        {/* bar-chart */}
        <div className="chart-container">
          <div className="chart-card">
            <h3>Posts per Author</h3>
            <div className="chart-wrapper">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="posts" fill="#8884d8" name="Number of Posts" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          {/* pie-chart */}
          <div className="chart-card">
            <h3>Distributaion</h3>
            <div className="chart-wrraper">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="posts"
                    label
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* static table */}
        <div className="posts-table-section">
          <h3>All Posts</h3>
          <div className="table-wrapper">
            <table className="analytics-table">
              <thead>
                <tr>
                   {header.map((head)=>(
                  <th>{head}</th>
                ))}
                </tr>
               
               
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>React Basic</td>
                  <td>Admin</td>
                  <td>16/02/2026</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Understanding Hooks</td>
                  <td>User</td>
                  <td>15/02/2026</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>JavaScript ES6</td>
                  <td>Test</td>
                  <td>14/02/2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button className="page-btn">Previuos</button>
            <button className="page-btn">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Analitics;
