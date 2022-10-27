import React, { useEffect, useState } from 'react';
import {
  BrandLogo,
  CommingSoonLogo,
  CountDay,
  CountDayLeft,
  CountDayLeftText,
  CountDayTitle,
  DropDownItem,
  DropDownList,
  Header,
  Item,
  LiDropDown,
  LiNav,
  LogoFrame,
  NavButton,
  NavButtonLayout,
  PlayGameButton,
  PlayGameDropDownBox,
  PlayGameText,
  PopTimeButton,
  RightNav,
  Timezone,
  TimezoneSwiper,
  TimezoneText,
  UlDropDown,
} from './styled';

interface SwipperStype {
  transitionDuration: string;
  transform: string;
}

const NavbarMain: React.FC = () => {
  const [swipperStyle, setSwipperStyle] = useState<SwipperStype>({ transitionDuration: '0ms', transform: 'translate3d(0px, -36px, 0px)' });

  const swipperTimeout = React.useCallback((run: boolean) => {
    if (run) {
      setInterval(() => {
        if (swipperStyle.transform === 'translate3d(0px, -54px, 0px)') {
          const newLocate = 'translate3d(0px, -36px, 0px)';
          const newSwipper = { ...swipperStyle };
          swipperStyle.transform = newLocate;
          swipperStyle.transitionDuration = '300ms';
          setSwipperStyle(newSwipper);
        } else {
          const newLocate = 'translate3d(0px, -54px, 0px)';
          const newSwipper = { ...swipperStyle };
          swipperStyle.transform = newLocate;
          swipperStyle.transitionDuration = '300ms';
          setSwipperStyle(newSwipper);
        }
        console.log(swipperStyle);
        setTimeout(() => {
          const newSwipper = { ...swipperStyle };
          swipperStyle.transitionDuration = '0ms';
          setSwipperStyle(newSwipper);
        }, 300);
      }, 4400);
    }
  }, []);

  useEffect(() => {
    swipperTimeout(true);
  }, []);

  return (
    <Header>
      <LogoFrame>
        <a className="block" href="#" onClick={(e) => e.preventDefault()}>
          <img
            className="block max-w-full border-solid"
            src="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/logo.png"
            alt="The first descendant cbt"
          />
        </a>
      </LogoFrame>
      <NavButtonLayout className="nav-header">
        <ul className="flex" style={{ width: '100%' }}>
          <LiNav className="list-item">
            <NavButton href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
              NEWS
            </NavButton>
            <UlDropDown>
              <LiDropDown>
                <Item href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
                  LATEST NEWS
                </Item>
              </LiDropDown>
            </UlDropDown>
          </LiNav>
          <LiNav className="list-item">
            <NavButton href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
              INFO
            </NavButton>
            <UlDropDown>
              <LiDropDown>
                <Item href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
                  STORY
                </Item>
              </LiDropDown>
              <LiDropDown>
                <Item href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
                  CHARACTER
                </Item>
              </LiDropDown>
            </UlDropDown>
          </LiNav>
          <LiNav className="list-item">
            <NavButton href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
              SUPPORT
            </NavButton>
            <UlDropDown>
              <LiDropDown>
                <Item href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
                  FAQ
                </Item>
              </LiDropDown>
              <LiDropDown>
                <Item href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
                  SUPPORT
                </Item>
              </LiDropDown>
              <LiDropDown>
                <Item href="#" onClick={(e: MouseEvent) => e.preventDefault()}>
                  SURVEY
                </Item>
              </LiDropDown>
            </UlDropDown>
          </LiNav>
        </ul>
      </NavButtonLayout>
      <RightNav>
        <CountDay>
          <CountDayTitle>STEAM BETA CLOSE</CountDayTitle>
          <CountDayLeft>
            <CountDayLeftText style={{ top: '1px', color: '#00d0c4', textShadow: '0 4px 4px rgb(0 0 0 / 25%)', filter: 'blur(0.5px)' }}>
              D - 0
            </CountDayLeftText>
            <CountDayLeftText style={{ color: '#e3e3e3', textShadow: '0 0 6px rgb(73 255 244 / 80%)', fontWeight: '700' }}>D - 0</CountDayLeftText>
          </CountDayLeft>
        </CountDay>
        <PopTimeButton>
          <Timezone>
            <TimezoneSwiper style={swipperStyle}>
              <TimezoneText>UTC</TimezoneText>
              <TimezoneText>PDT</TimezoneText>
              <TimezoneText>UTC</TimezoneText>
              <TimezoneText>PDT</TimezoneText>
            </TimezoneSwiper>
          </Timezone>
        </PopTimeButton>
        <PlayGameButton>
          <PlayGameText />
          <PlayGameDropDownBox>
            <DropDownList>
              <DropDownItem>
                <BrandLogo
                  href="https://store.steampowered.com/app/2074920/The_First_Descendant/?utm_source=steamcbt1&utm_campaign=Organic&utm_medium=teaserpage&utm_content=1"
                  target="blank"
                  url="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_goSteam.png"
                >
                  STEAM
                </BrandLogo>
              </DropDownItem>
              <DropDownItem>
                <CommingSoonLogo url="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_goPS5.png">PS5</CommingSoonLogo>
              </DropDownItem>
              <DropDownItem>
                <CommingSoonLogo url="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_goPS4.png">PS4</CommingSoonLogo>
              </DropDownItem>
              <DropDownItem>
                <CommingSoonLogo url="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_goXboxXS.png">XBOX SERIES X|S</CommingSoonLogo>
              </DropDownItem>
              <DropDownItem>
                <CommingSoonLogo url="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/header/btn_goXboxXS.png">XBOX ONE</CommingSoonLogo>
              </DropDownItem>
            </DropDownList>
          </PlayGameDropDownBox>
        </PlayGameButton>
      </RightNav>
    </Header>
  );
};

export default NavbarMain;
