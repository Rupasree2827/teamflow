import { Clock } from "lucide-react";

const activities = [
  "Created Team 'Development'",
  "Added Project 'TeamFlow'",
  "Created Task 'Login Module'",
  "Updated Task Status",
];

function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Clock className="text-blue-600" />
        Recent Activity
      </h2>

      <ul className="space-y-4">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="border-l-4 border-blue-500 pl-4 text-gray-700"
          >
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentActivity;