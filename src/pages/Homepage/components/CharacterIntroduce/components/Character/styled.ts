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
  ${(props) => (props.active === 2 ? `opacity: 0` : '')}
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

export { CharacterTitle, CharacterInfo, CharacterNameBold, Slogan, CharImg };
