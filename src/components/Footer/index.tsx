import { Select } from '@mantine/core';
import React from 'react';
import { Discord, Facebook, Languages, SelectIcon, Twitter, Youtube, PrivacyPolicy, TempOfService, AddressText } from '../../constant/footer';
import { Address, FooterBottom, FooterLayout, FooterSocial, FooterTop, InfoLayout, Logo, LogoLayout, Policy, PolicyText, SocialIcon } from './styled';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#000', borderTop: '1px solid #000', display: 'flex', justifyContent: 'center', width: '100%' }}>
      <FooterLayout>
        <FooterTop>
          <FooterSocial>
            <SocialIcon iconBG={Discord.img} href={Discord.href}>
              {Discord.text}
            </SocialIcon>
            <SocialIcon iconBG={Twitter.img} href={Twitter.href}>
              {Twitter.text}
            </SocialIcon>
            <SocialIcon iconBG={Facebook.img} href={Facebook.href}>
              {Facebook.text}
            </SocialIcon>
            <SocialIcon iconBG={Youtube.img} href={Youtube.href}>
              {Youtube.text}
            </SocialIcon>
          </FooterSocial>
          <Select
            data={Languages}
            defaultValue="en"
            dropdownPosition="bottom"
            radius="xs"
            styles={(theme) => ({
              rightSection: {
                display: 'none',
              },
              input: {
                padding: '0 15px',
                backgroundColor: theme.colors.dark[9],
                color: theme.colors.gray[5],
                border: `1px solid ${theme.colors.gray[5]} !important`,
              },
              root: {
                height: '38px',
                fontSize: '16px',
                position: 'absolute',
                right: '100px',
                top: '46px',
                width: '200px',
                '::after': {
                  backgroundImage: `url(${SelectIcon})`,
                  position: 'absolute',
                  top: '14px',
                  right: '13px',
                  width: '17px',
                  height: '10px',
                  content: '""',
                },
              },
              dropdown: {
                backgroundColor: theme.colors.dark[9],
                borderColor: theme.colors.gray[5],
                top: '35px !important',
                borderRadius: '0',
              },
              item: {
                backgroundColor: theme.colors.dark[9],
                color: theme.colors.gray[5],
                borderRadius: '0',
                '&[data-selected]': {
                  backgroundColor: theme.fn.rgba(theme.colors.blue[5], 0),
                  color: theme.colors.gray[5],
                },
                '&[data-hovered]': {
                  backgroundColor: theme.colors.blue[5],
                  color: theme.colors.gray[0],
                },
              },
            })}
          />
        </FooterTop>
        <FooterBottom>
          <InfoLayout>
            <Policy>
              <li style={{ position: 'relative' }}>
                <PolicyText href="https://m.nexon.com/terms/304">
                  <strong style={{ fontWeight: '600' }}>{TempOfService}</strong>
                </PolicyText>
              </li>
              <li style={{ position: 'relative' }}>
                <PolicyText href="https://m.nexon.com/terms/305">
                  <strong style={{ fontWeight: '600' }}>{PrivacyPolicy}</strong>
                </PolicyText>
              </li>
            </Policy>
            <Address>
              <p>{AddressText}</p>
            </Address>
          </InfoLayout>
          <LogoLayout>
            <Logo imgBG="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/footer/nexon--main.png" />
            <Logo imgBG="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/footer/nexonGames--main.png" />
          </LogoLayout>
        </FooterBottom>
      </FooterLayout>
    </footer>
  );
};

export default Footer;
