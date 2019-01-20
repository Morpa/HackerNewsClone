import React from 'react';
import { themes } from 'store/app/utils';

import { Header, Title, Spacer, NavSection, Content, Icon } from './styles';

const Nav = ({ layout, theme, setLayout, setTheme }) => (
  <div>
    <Header>
      <Content>
        <Title>Hacker News Clone</Title>
        <NavSection>
          {theme === themes.light ? (
            <Icon onClick={() => setTheme(themes.dark)}>
              <i className="fas fa-moon" />
            </Icon>
          ) : (
            <Icon onClick={() => setTheme(themes.light)}>
              <i className="fas fa-sun" />
            </Icon>
          )}
        </NavSection>
      </Content>
    </Header>
    <Spacer />
  </div>
);

export default Nav;
