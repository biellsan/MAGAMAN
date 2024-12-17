import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  FileText,
  BarChart2,
  Megaphone,
  Settings,
  Store,
  Plus,
  Percent,
  Monitor,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const mainNavItems = [
  { to: '/dashboard', icon: Home, label: 'Home' },
  { to: '/dashboard/orders', icon: ShoppingCart, label: 'Orders' },
  { to: '/dashboard/products', icon: Package, label: 'Products' },
  { to: '/dashboard/customers', icon: Users, label: 'Customers' },
  { to: '/dashboard/content', icon: FileText, label: 'Content' },
  { to: '/dashboard/analytics', icon: BarChart2, label: 'Analytics' },
  { to: '/dashboard/marketing', icon: Megaphone, label: 'Marketing' },
  { to: '/dashboard/discounts', icon: Percent, label: 'Discounts' },
];

const salesChannels = [
  { to: '/dashboard/online-store', icon: Store, label: 'Online Store' },
  { to: '/dashboard/pos', icon: Monitor, label: 'Point of Sale' },
];

const apps = [
  { to: '/dashboard/apps', icon: Plus, label: 'Add apps' },
];

const settings = [
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative">
      <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-[#1a1a1a] text-white min-h-screen transition-all duration-300`}>
        <nav className="p-4 space-y-6">
          {/* Main Navigation */}
          <div className="space-y-1">
            {mainNavItems.map(({ to, icon: Icon, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                {!isCollapsed && <span className="ml-3">{label}</span>}
              </NavLink>
            ))}
          </div>

          {/* Sales Channels */}
          <div>
            <h2 className={`px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider ${isCollapsed ? 'text-center' : ''}`}>
              {!isCollapsed && 'SALES CHANNELS'}
            </h2>
            <div className="mt-2 space-y-1">
              {salesChannels.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3">{label}</span>}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Apps */}
          <div>
            <h2 className={`px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider ${isCollapsed ? 'text-center' : ''}`}>
              {!isCollapsed && 'APPS'}
            </h2>
            <div className="mt-2 space-y-1">
              {apps.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3">{label}</span>}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div>
            <h2 className={`px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider ${isCollapsed ? 'text-center' : ''}`}>
              {!isCollapsed && 'SETTINGS'}
            </h2>
            <div className="mt-2 space-y-1">
              {settings.map(({ to, icon: Icon, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`
                  }
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  {!isCollapsed && <span className="ml-3">{label}</span>}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </aside>

      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-[#1a1a1a] text-white p-1 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronLeft className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};