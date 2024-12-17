import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Settings, Store, CreditCard, Users, ShoppingCart, Truck, 
  Calculator, MapPin, Globe, Boxes, Bell, Shield, Home, CreditCard as BillingIcon,
  FileText
} from 'lucide-react';

const settingsTabs = [
  { 
    name: 'General',
    icon: Home,
    href: '/dashboard/settings'
  },
  {
    name: 'Plan',
    icon: FileText,
    href: '/dashboard/settings/plan'
  },
  {
    name: 'Billing',
    icon: BillingIcon,
    href: '/dashboard/settings/billing'
  },
  {
    name: 'Users and permissions',
    icon: Users,
    href: '/dashboard/settings/users'
  },
  {
    name: 'Payments',
    icon: CreditCard,
    href: '/dashboard/settings/payments'
  },
  {
    name: 'Checkout',
    icon: ShoppingCart,
    href: '/dashboard/settings/checkout'
  },
  {
    name: 'Shipping and delivery',
    icon: Truck,
    href: '/dashboard/settings/shipping'
  },
  {
    name: 'Taxes and duties',
    icon: Calculator,
    href: '/dashboard/settings/taxes'
  },
  {
    name: 'Locations',
    icon: MapPin,
    href: '/dashboard/settings/locations'
  },
  {
    name: 'Markets',
    icon: Globe,
    href: '/dashboard/settings/markets'
  },
  {
    name: 'Apps and sales channels',
    icon: Boxes,
    href: '/dashboard/settings/apps'
  },
  {
    name: 'Notifications',
    icon: Bell,
    href: '/dashboard/settings/notifications'
  },
  {
    name: 'Customer privacy',
    icon: Shield,
    href: '/dashboard/settings/privacy'
  }
];

export const SettingsTabs: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-4">
        <div className="space-y-1">
          {settingsTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = location.pathname === tab.href;
            
            return (
              <Link
                key={tab.name}
                to={tab.href}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-md
                  ${isActive 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}
                `}
              >
                <Icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <span className="truncate">{tab.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};