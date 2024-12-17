import { Button } from '../ui/Button';

interface Activity {
  id: number;
  message: string;
  time: string;
}

const recentActivities: Activity[] = [
  { id: 1, message: 'New user registered', time: '2 hours ago' },
  { id: 2, message: 'Project status updated', time: '4 hours ago' },
  { id: 3, message: 'Payment received', time: '6 hours ago' },
];

export function ActivityFeed() {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Recent Activity</h3>
        <Button variant="secondary" size="sm">View all</Button>
      </div>
      <div className="mt-6 divide-y">
        {recentActivities.map((activity) => (
          <div key={activity.id} className="py-4">
            <div className="flex items-center gap-4">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <div>
                <p className="text-sm font-medium">{activity.message}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}