import styled from 'styled-components';

const CharacterTitle = styled.h3<{ active: number }>`
  position: absolute;
  top: 347px;
  left: 50%;
  transform: translateX(330px);
  color: #fff;
  z-index: 3;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 1.6px;
  opacity: 1;
  transition: all 0.3s ease;
  ${(props) =>
    props.active === 3
      ? `top: 164px;
      color: #fff;
      transform: translateX(350px);`
      : ''}
  ${(props) => (props.active === 2 ? `opacity: 0` : '')}
`;

const CharacterInfo = styled.dl<{ active: number }>`
  position: absolute;
  top: 424px;
  left: calc(50% + 345px);
  z-index: 3;
  text-align: center;
  width: 230px;
  opacity: 1;
  transition: all 0.3s ease;
  ${(props) => (props.active === 2 || props.active === 3 ? `opacity: 0;` : '')}
`;

const CharacterNameBold = styled.dt`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 40px;
`;

const Slogan = styled.dd`
  font-size: 20px;
  line-height: 26px;
  padding-bottom: 47px;
`;

const CharImg = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`;

const H4Name = styled.h4<{ active: number }>`
  position: absolute;
  top: 231px;
  left: calc(50% + 300px);
  width: 300px;
  font-size: 32px;
  color: #fff;
  line-height: 38.19px;
  text-align: right;
  z-index: 3;
  opacity: 0;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  ${(props) =>
    props.active === 3
      ? `opacity: 1;
  transition-delay: .2s;`
      : ''}
`;

const RightTextWrap = styled.div<{ active: number }>`
  position: absolute;
  width: 280px;
  top: 293px;
  left: calc(50% + 300px);
  z-index: 1;
  ${(props) =>
    props.active === 3
      ? `z-index: 3;
      left: calc(50% + 320px);`
      : ''}
`;

const IntroText = styled.p<{ active: number; delay: string }>`
  left: calc(50% + 300px);
  top: 276px;
  transition-delay: 0s;
  width: 280px;
  font-size: 17px;
  color: #e6e6e6;
  font-weight: 300;
  line-height: 28px;
  text-align: right;
  padding-bottom: 30px;
  z-index: 3;
  opacity: 0;
  transform: translateX(-80px);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${(props) =>
    props.active === 3
      ? `opacity: 1;
      transform: translateX(0);
      transition-delay: ${props.delay};`
      : ''}
`;

const SeeDetailButton = styled.a<{ active: number }>`
  top: 394px;
  right: 0;
  z-index: 1;
  position: absolute;
  display: inline-block;
  padding: 0 20px;
  min-width: 180px;
  height: 40px;
  color: #fff;
  overflow: hidden;
  border: 1px solid #f4fffe;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  opacity: 0;
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
  color: #fff !important;
  :hover::before {
    opacity: 1;
  }
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    opacity: 0;
    background: hsla(0, 0%, 100%, 0.1);
    transition: opacity 0.3s ease;
  }
  ${(props) =>
    props.active === 3
      ? `z-index: 3;
      position: absolute;
      color: #fff;
      opacity: 1;
      transition-duration: .8s;
      transition-delay: .4s;`
      : ''}
`;

const ActiveSkill = styled.h5<{ active: number }>`
  position: absolute;
  top: 338px;
  left: calc(50% - 593px);
  width: 200px;
  font-size: 18px;
  color: #fff;
  z-index: 3;
  opacity: 0;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  ${(props) =>
    props.active === 3
      ? `transition-delay: .2s;
        opacity: 1;`
      : ''}
`;

const SkillWrap = styled.div<{ active: number }>`
  position: absolute;
  top: 378px;
  left: calc(50% - 599px);
  z-index: 1;
  width: 341px;
  height: 303px;
  opacity: 0;
  transform: translateX(30px);
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  ${(props) =>
    props.active === 3
      ? `z-index: 3;
      opacity: 1;
      transform: translateX(0);`
      : ''}
  ::before {
    content: '';
    display: block;
    position: absolute;
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
  }
`;

const ViewOrderbutton = styled.a<{ active: number }>`
  display: inline-block;
  position: relative;
  padding: 0 20px;
  min-width: 180px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  color: #fff;
  border: 1px solid #f4fffe;
  text-align: center;
  opacity: 0;
  font-size: 18px;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  text-decoration: inherit;
  color: #fff !important;
  :hover::before {
    opacity: 1;
  }
  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: hsla(0, 0%, 100%, 0.1);
    transition: opacity 0.4s ease;
  }
  ${(props) =>
    props.active === 3
      ? `    opacity: 1;
      transition-delay: .4s;`
      : ''}
`;

const SkillLayout = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 102px;
`;

const Skill = styled.span<{
  select: boolean;
  skillBackground: string;
  skillBackgroundDark: string;
  skillSelectArrow: string;
  skillSelectBorder: string;
}>`
  @keyframes SpinBoder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 74px;
  height: 74px;
  box-sizing: border-box;
  cursor: pointer;
  background-image: ${(props) => props.skillBackgroundDark};
  background-position: top;
  ${(props) => (props.select ? `background-image: ${props.skillBackground};` : '')}
  :hover {
    background-image: ${(props) => props.skillBackground};
  }
  ::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
    bottom: -17px;
    height: 11px;
    background-image: ${(props) => props.skillSelectArrow};
    background-position: top;
    background-repeat: no-repeat;
    ${(props) => (props.select ? `opacity: 1;` : '')}
  }
  ::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    z-index: 1;
    width: 100%;
    opacity: 0;
    transition: opacity 0.4s ease;
    top: -2px;
    left: -2px;
    width: 78px;
    height: 78px;
    background-image: ${(props) => props.skillSelectBorder};
    background-position: top;
    animation-name: SpinBoder;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    ${(props) => (props.select ? `opacity: 1;` : '')}
  }
`;

const SkillImg = styled.img<{ select: boolean }>`
  z-index: 1;
  position: relative;
  display: block;
  width: 62px;
  height: 62px;
  border-radius: 100%;
  opacity: 0.7;
  ${(props) => (props.select ? `opacity: 1;` : '')}
`;

const SkillDescriptionLayout = styled.div<{ select: boolean }>`
  margin: 0 auto;
  width: 333px;
  opacity: 0;
  transition: opacity 0.3s ease;
  ${(props) => (props.select ? `opacity: 1;` : '')}
`;

const SkillTitle = styled.strong<{ color: string }>`
  color: ${(props) => props.color};
  display: block;
  height: 38px;
  font-size: 18px;
  text-align: center;
  line-height: 38px;
  background-color: hsla(0, 0%, 90.2%, 0.65);
`;

const SkillDescription = styled.div`
  padding: 10px 0;
  display: flex;
  min-height: 120px;
  align-items: center;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.6);
`;

const SkillDescriptionText = styled.p`
  font-size: 17px;
  color: #e6e6e6;
  font-weight: 300;
  line-height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export {
  CharacterTitle,
  CharacterInfo,
  CharacterNameBold,
  Slogan,
  CharImg,
  H4Name,
  RightTextWrap,
  IntroText,
  SeeDetailButton,
  ActiveSkill,
  SkillWrap,
  ViewOrderbutton,
  SkillLayout,
  Skill,
  SkillImg,
  SkillDescriptionLayout,
  SkillTitle,
  SkillDescription,
  SkillDescriptionText,
};
