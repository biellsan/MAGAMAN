import React from 'react';
import { TopBar, ActionList, Icon } from '@shopify/polaris';
import {
  SearchMajor,
  NotificationMajor,
  ProfileMajor
} from '@shopify/polaris-icons';
import { useAuth } from '../../contexts/AuthContext';

export const DashboardTopBar: React.FC = () => {
  const { user, logout } = useAuth();
  const [searchActive, setSearchActive] = React.useState(false);
  const [userMenuActive, setUserMenuActive] = React.useState(false);

  const userMenuActions = [
    {
      items: [
        { content: 'Profile', icon: ProfileMajor },
        { content: 'Sign out', onAction: logout },
      ],
    },
  ];

  const searchResultsMarkup = (
    <ActionList
      items={[{ content: 'Search results' }]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={(value) => console.log(value)}
      value=""
      placeholder="Search"
      showFocusBorder
    />
  );

  return (
    <TopBar
      showNavigationToggle
      userMenu={
        <TopBar.UserMenu
          actions={userMenuActions}
          name={user?.name || ''}
          detail={user?.email}
          initials={user?.name?.[0] || 'U'}
          open={userMenuActive}
          onToggle={() => setUserMenuActive(!userMenuActive)}
        />
      }
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={() => setSearchActive(false)}
      secondaryMenu={
        <TopBar.Menu
          activatorContent={
            <Icon source={NotificationMajor} />
          }
        />
      }
    />
  );
};