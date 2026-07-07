import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Teams", value: 2 },
  { name: "Projects", value: 1 },
  { name: "Tasks", value: 1 },
];

function ProjectChart() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-6">
        Project Overview
      </h2>

      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="value" radius={8} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ProjectChart;