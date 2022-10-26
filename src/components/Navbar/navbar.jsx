import React from 'react';
import { Header, LogoFrame, NavButton, NavButtonLayout } from './styled';
import { Menu, Navbar } from '@mantine/core';

export default function NavbarMain() {
  return (
    <Navbar fixed={true} position={{ top: 0, left: 0 }} height={80}>
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
                textAlign: '-webkit-match-parent',
                marginRight: '19px',
                padding: '0 24px',
                width: 'fit-content',
                boxSizing: 'content-box',
              }}
            >
              <Menu trigger="hover">
                <NavButton href="#">NEWS</NavButton>
              </Menu>
            </li>
          </ul>
        </NavButtonLayout>
      </Header>
    </Navbar>
  );
}
