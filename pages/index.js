import React from 'react';
import GlobalNavigation from '@atlaskit/global-navigation';
import EmojiAtlassianIcon from '@atlaskit/icon/glyph/emoji/atlassian';

const Index = () => (
  <>
    <GlobalNavigation
      productIcon={EmojiAtlassianIcon}
      productTooltip='Test'
      productHref='#'
      profileIconUrl='https://api.adorable.io/avatars/285/abott@adorable.png'
    />
  </>
);
export default Index;
