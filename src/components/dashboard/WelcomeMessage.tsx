import { useAuth } from '../../hooks/useAuth';

export function WelcomeMessage() {
  const { user } = useAuth();
  const hours = new Date().getHours();
  
  const greeting = hours < 12 ? 'Good morning' : hours < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">
        {greeting}, {user?.name || 'Welcome back'}! 👋
      </h1>
      <p className="mt-1 text-gray-500">
        Here's what's happening with your projects today.
      </p>
    </div>
  );
}