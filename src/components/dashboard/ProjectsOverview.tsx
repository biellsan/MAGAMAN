import { Briefcase, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    status: 'In Progress',
    deadline: '2 days left',
    progress: 75,
  },
  {
    id: 2,
    name: 'Mobile App Development',
    status: 'Planning',
    deadline: '1 week left',
    progress: 25,
  },
  {
    id: 3,
    name: 'Marketing Campaign',
    status: 'Completed',
    deadline: 'Delivered',
    progress: 100,
  },
];

export function ProjectsOverview() {
  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="border-b p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-gray-400" />
            <h2 className="font-semibold text-gray-900">Active Projects</h2>
          </div>
          <Button variant="outline" size="sm">View All</Button>
        </div>
      </div>
      <div className="divide-y">
        {projects.map((project) => (
          <div key={project.id} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{project.name}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{project.deadline}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-20 rounded-full bg-gray-200">
                    <div
                      className="h-2.5 rounded-full bg-blue-600"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500">{project.progress}%</span>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}