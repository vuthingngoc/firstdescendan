import styled from 'styled-components';

const FooterLayout = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  color: #aaa;
  padding: 34px 0 0;
  position: relative;
`;

const FooterSocial = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
`;

const SocialIcon = styled.a<{ iconBG: string }>`
  margin: 0 10px;
  width: 64px;
  height: 65px;
  background-size: contain;
  background-repeat: no-repeat;
  text-indent: -9999px;
  background-image: url(${(props) => props.iconBG});
`;

const FooterBottom = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #aaa;
  position: relative;
`;

const InfoLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const Policy = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PolicyText = styled.a`
  color: #aaa;
  display: block;
  vertical-align: top;
  padding: 0 14px;
  font-size: 15px;
  transition: color 0.3s ease;
  :hover {
    color: #fff;
  }
  :first-child::after {
    content: '';
    display: block;
    position: absolute;
    top: calc(50% - 5px);
    right: 0;
    width: 1px;
    height: 10px;
    background-color: #aaa;
  }
`;

const Address = styled.address`
  margin-top: 16px;
  font-style: normal;
  font-size: 12px;
  color: #aaa;
  line-height: 18px;
  text-align: center;
  font-weight: 300;
`;

const LogoLayout = styled.div`
  margin: 25px 0 38px;
  display: flex;
  flex-shrink: 0;
`;

const Logo = styled.p<{ imgBG: string }>`
  margin: 0 20px;
  display: flex;
  width: 90px;
  height: 29px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgBG});
`;

export { FooterLayout, FooterTop, FooterSocial, SocialIcon, FooterBottom, InfoLayout, Policy, PolicyText, Address, LogoLayout, Logo };
