import React from 'react';
import { Navigation } from '@shopify/polaris';
import {
  HomeMajor,
  OrdersMajor,
  ProductsMajor,
  CustomersMajor,
  AnalyticsMajor,
  MarketingMajor,
  OnlineStoreMajor
  // ContentMajor, // Comentado pois não está disponível
} from '@shopify/polaris-icons';

export const DashboardNavigation: React.FC = () => {
  return (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: '/dashboard',
            label: 'Home',
            icon: HomeMajor,
          },
          {
            url: '/dashboard/orders',
            label: 'Orders',
            icon: OrdersMajor,
          },
          {
            url: '/dashboard/products',
            label: 'Products',
            icon: ProductsMajor,
          },
          {
            url: '/dashboard/customers',
            label: 'Customers',
            icon: CustomersMajor,
          },
        ]}
      />
      
      <Navigation.Section
        title="Sales channels"
        items={[
          {
            url: '/dashboard/online-store',
            label: 'Online Store',
            icon: OnlineStoreMajor,
          },
        ]}
      />
      
      <Navigation.Section
        title="Analytics"
        items={[
          {
            url: '/dashboard/analytics',
            label: 'Analytics',
            icon: AnalyticsMajor,
          },
          {
            url: '/dashboard/marketing',
            label: 'Marketing',
            icon: MarketingMajor,
          },
          // {
          //   url: '/dashboard/content',
          //   label: 'Content',
          //   icon: null, // Alterado para null, pois ContentMajor foi comentado
          // },
        ]}
      />
    </Navigation>
  );
};