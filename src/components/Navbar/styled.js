import styled from 'styled-components';

const Header = styled.div`
  width: 100%;
  min-width: 1280px;
  display: flex;
  min-height: 80px;
  background: rgba(0, 0, 0, 0.8);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 80px, rgba(0, 0, 0, 0.76) 171.5px, rgba(0, 0, 0, 0.57));
`;

const LogoFrame = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 20px 0 0 34px;
  min-width: 173px;
`;

const NavButtonLayout = styled.nav`
  position: relative;
  margin-left: 115px;
  width: 100%;
  height: 80px;
`;

const NavButton = styled.a`
  position: relative;
  display: block;
  height: 80px;
  color: #fff;
  font-size: 17px;
  line-height: 80px;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  text-decoration: inherit;
  &:before {
    position: absolute;
    left: 50%;
    display: block;
    content: '';
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 3s ease;
  }
  &:hover:before {
    top: 76px;
    width: 91px;
    height: 8px;
    background-color: rgba(73, 255, 244, 0.8);
    border-radius: 50%;
    filter: blur(12px);
  }
  &:after {
    position: absolute;
    left: 50%;
    display: block;
    content: '';
    opacity: 0;
    transform: translateX(-50%);
    transition: opacity 3s ease;
  }
  &:hover:after {
    top: 78px;
    width: 114px;
    height: 3px;
    background-color: rgba(73, 255, 244, 0.8);
  }
`;

export { Header, LogoFrame, NavButtonLayout, NavButton };
