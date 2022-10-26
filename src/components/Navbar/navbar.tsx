import React from 'react';
import { Header, LogoFrame, NavButton, NavButtonLayout } from './styled';
import { Menu } from '@mantine/core';

const NavbarMain: React.FC = () => {
  return (
    <Header>
      <LogoFrame>
        <a className="block" href="#">
          <img
            className="block max-w-full border-solid"
            src="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/logo.png"
            alt="The first descendant cbt"
          />
        </a>
      </LogoFrame>
      <NavButtonLayout>
        <ul className="flex w-auto">
          <li
            className="list-item"
            style={{
              marginRight: '19px',
              padding: '0 24px',
              width: 'fit-content',
              boxSizing: 'content-box',
            }}
          >
            <Menu trigger="hover">
              <NavButton href="#">
                <span>NEWS</span>
              </NavButton>
            </Menu>
          </li>
        </ul>
      </NavButtonLayout>
    </Header>
  );
};

export default NavbarMain;
