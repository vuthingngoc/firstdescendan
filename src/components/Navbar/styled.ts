import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1280px;
  display: flex;
  min-height: 80px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 2;
  ::before {
    position: absolute;
    top: 79px;
    width: 100%;
    height: 1px;
    background-color: hsla(0, 0%, 70.2%, 0.25);
    content: '';
  }
  :has(.nav-header:hover) {
    height: 280px;
  }
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
  &:hover ul > li > ul {
    height: 200px;
  }
`;

const NavButton = styled.a.attrs(() => ({ onClick: MouseEvent }))`
  position: relative;
  display: block;
  height: 80px;
  color: #fff !important;
  font-size: 17px;
  line-height: 80px;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  text-decoration: inherit;
  ::before {
    top: 76px;
    width: 91px;
    height: 8px;
    background-color: rgba(73, 255, 244, 0.8);
    border-radius: 50%;
    filter: blur(12px);
    position: absolute;
    left: 50%;
    display: block;
    content: '';
    opacity: 0;
    height: 8;
    transform: translateX(-50%);
    transition: opacity 0.3s ease;
  }
  ::after {
    top: 78px;
    width: 114px;
    height: 3px;
    background-color: rgba(73, 255, 244, 0.8);
    font-size: 50;
    position: absolute;
    left: 50%;
    display: block;
    content: '';
    opacity: 0;
    height: 3;
    transform: translateX(-50%);
    transition: opacity 0.3s ease;
  }
`;

const LiNav = styled.li`
  margin-right: 19px;
  min-width: 124px;
  padding: 0 24px;
  width: fit-content;
  box-sizing: content-box;
  display: list-item;
  &:hover a::before {
    opacity: 1;
  }
  &:hover a::after {
    opacity: 1;
  }
`;

const RightNav = styled.aside`
  z-index: 0;
  margin-left: auto;
  display: flex;
  height: 79px;
`;

const CountDay = styled.div`
  position: relative;
  width: 140px;
  border-left: 1px solid hsla(0, 0%, 70.2%, 0.25);
  background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/bg_d-day2.png);
  background-repeat: no-repeat;
  background-position: 50%;
  text-align: center;
`;

const CountDayTitle = styled.div`
  margin-top: 18px;
  color: #4fa6a0;
  font-family: 'Pretendard', sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const CountDayLeft = styled.div`
  position: relative;
  top: 2px;
`;

const CountDayLeftText = styled.p`
  position: absolute;
  width: 100%;
  font-size: 18px;
  line-height: 26px;
  font-family: 'Elice Digital Baeum';
`;

const PopTimeButton = styled.button`
  position: relative;
  width: 80px;
  height: 80px;
  border-left: 1px solid #2d2d2d;
  background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/icon_utc.png);
  transition: background 0.3s ease;
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 72px;
    height: 71px;
    background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/round.png);
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/round_on.png);
    background-position: -2px -2px;
    opacity: 0;
    transform: scale(0.5);
    transition: all 0.3s ease;
  }
  &:hover::after {
    opacity: 1;
    transform: scale(1);
  }
`;

const Timezone = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  width: 100%;
  height: 100%;
  height: 18px;
  overflow: hidden;
  touch-action: pan-x;
  touch-action: pan-y;
`;

const TimezoneSwiper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  transform: translateZ(0);
  flex-direction: column;
`;

const TimezoneText = styled.span`
  height: 18px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  color: #d5d6d8;
  text-align: center;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  height: 18px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  position: relative;
  transition-property: transform;
`;

const PlayGameButton = styled.div`
  position: relative;
  width: 252px;
  height: 80px;
  ::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_playGame_on.jpg);
    content: '';
    opacity: 0;
    transition: opacity 0.1s;
    cursor: pointer;
  }
  &:hover::after {
    opacity: 1;
  }
  :hover div {
    height: 354px;
  }
`;

const PlayGameText = styled.p`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-indent: -9999px;
  background-image: url(https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_playGame.jpg);
`;

const PlayGameDropDownBox = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 252px;
  height: 0;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #1d1e1f;
  transition: height 0.3s ease;
`;

const DropDownList = styled.ul`
  width: 220px;
  height: 354px;
  padding: 17px 0 16px;
  margin: auto;
`;

const DropDownItem = styled.li`
  content: '';
  position: relative;
  width: 220px;
  height: 56px;
  margin: 0 auto 10px;
  border: 1px solid #424242;
  box-sizing: border-box;
  display: list-item;
  :first-child::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(352.4deg, #3b4043 17.49%, #4b5459 64.53%);
    opacity: 0;
    transition: opacity 0.1s;
    content: '';
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover a {
    opacity: 1;
  }
  :not(:first-child)::after {
    font-family: 'Elice Digital Baeum';
    content: 'COMING SOON';
    color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 54px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(352.4deg, #3b4043 17.49%, #4b5459 64.53%);
    opacity: 0;
    transition: opacity 0.1s;
  }
  &:hover::after {
    opacity: 1;
  }
`;

const BrandLogo = styled.a<{
  url: string;
}>`
  position: relative;
  margin: -1px 0 0 -1px;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  text-indent: -9999px;
  transition: opacity 0.1s;
  background-image: url(${(props) => props.url});
`;

const CommingSoonLogo = styled.span<{
  url: string;
}>`
  position: relative;
  margin: -1px 0 0 -1px;
  display: block;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  text-indent: -9999px;
  transition: opacity 0.1s;
  background-image: url(${(props) => props.url});
`;

const UlDropDown = styled.ul`
  width: 100%;
  height: 0;
  overflow: hidden;
  transition: all 0.2s;
  padding: 0 16px;
`;

const LiDropDown = styled.li`
  padding: 0;
  :first-child {
    padding-top: 10px;
  }
  :last-child {
    padding-bottom: 10px;
  }
`;

const Item = styled.a.attrs(() => ({ onClick: MouseEvent }))`
  padding: 0;
  display: block;
  width: 100%;
  font-size: 16px;
  color: #757575;
  text-align: center;
  line-height: 30px;
  transition: color 0.1s ease;
  &:hover {
    color: #f6f6f6;
  }
`;

export {
  Header,
  LogoFrame,
  NavButtonLayout,
  NavButton,
  LiNav,
  RightNav,
  CountDay,
  CountDayTitle,
  CountDayLeft,
  CountDayLeftText,
  PopTimeButton,
  Timezone,
  TimezoneSwiper,
  TimezoneText,
  PlayGameButton,
  PlayGameText,
  PlayGameDropDownBox,
  DropDownList,
  DropDownItem,
  BrandLogo,
  CommingSoonLogo,
  UlDropDown,
  LiDropDown,
  Item,
};
