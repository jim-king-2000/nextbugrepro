import React from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';
import { GlobalItem, GlobalNav } from '@atlaskit/navigation-next';
import CreateIcon from '@atlaskit/icon/glyph/add';
import SearchIcon from '@atlaskit/icon/glyph/search';
import HelpIcon from '@atlaskit/icon/glyph/question-circle';
import { AtlassianIcon } from '@atlaskit/logo';
import Avatar from '@atlaskit/avatar';

const Index = () => (
  <>
    {/* <GlobalNavigation
      productIcon={EmojiAtlassianIcon}
      productTooltip='Test'
      productHref='#'
      profileIconUrl='https://api.adorable.io/avatars/285/abott@adorable.png'
    /> */}
    <GlobalNav
      primaryItems={[
        {
          icon: () => <AtlassianIcon label="Atlassian" size="medium" />,
          id: 'logo',
          tooltip: 'Atlassian',
          onClick: () => console.log('Logo item clicked'),
        },
        {
          icon: SearchIcon,
          id: 'search',
          tooltip: 'Search',
          onClick: () => console.log('Search item clicked'),
        },
        {
          icon: CreateIcon,
          id: 'create',
          tooltip: 'Create',
          onClick: () => console.log('Create item clicked'),
        },
      ]}
      secondaryItems={[
        {
          icon: HelpIcon,
          id: 'help',
          onClick: () => console.log('Help item clicked'),
          tooltip: 'Help',
        },
        {
          component: ({ className, onClick }) => (
            <span className={className}>
              <Avatar
                borderColor="transparent"
                isActive={false}
                isHover={false}
                size="small"
                onClick={onClick}
              />
            </span>
          ),
          icon: null,
          id: 'profile',
          onClick: () => console.log('Profile item clicked'),
          tooltip: 'Profile',
        },
      ]}
    />
  </>
);
export default Index;
