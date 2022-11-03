import styled from 'styled-components';

const WorldviewTitle = styled.h3<{ active: number }>`
  position: absolute;
  top: 347px;
  left: calc(50% - 571px);
  z-index: 3;
  color: #fff;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 1.6px;
  transition: all 0.3s ease;
  ${(props) =>
    props.active === 2
      ? `top: 164px;
    left: calc(50% - 595px);`
      : ''}
  ${(props) => (props.active === 3 ? `opacity: 0;` : '')}
`;

const TextDefault = styled.p<{ active: number }>`
  z-index: 3;
  position: absolute;
  left: calc(50% - 571px);
  top: 424px;
  width: 264px;
  line-height: 26px;
  opacity: 1;
  transition: all 0.3s ease;
  font-size: 20px;
  color: #e6e6e6;
  text-align: center;
  line-height: 28px;
  word-break: break-all;
  padding-bottom: 30px;
  text-shadow: 0 0 10px rgb(0 0 0 / 80%);
  ${(props) => (props.active === 2 || props.active === 3 ? `opacity: 0;` : '')}
`;

const TextLeft = styled.div<{ active: number }>`
  z-index: 3;
  position: absolute;
  left: calc(50% - 575px);
  top: 245px;
  ${(props) => (props.active === 2 ? `left: calc(50% - 595px);` : '')}
`;

const LeftParagraph = styled.div<{ active: number; delay: string }>`
  width: 270px;
  opacity: 0;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transform: translateX(80px);
  transition-delay: 0s;
  text-align: left;
  font-size: 20px;
  color: #e6e6e6;
  line-height: 28px;
  word-break: break-all;
  padding-bottom: 30px;
  text-shadow: 0 0 10px rgb(0 0 0 / 80%);
  ${(props) =>
    props.active === 2
      ? `opacity: 1;
      transform: translateX(0);
      transition-delay: ${props.delay};`
      : ''}
`;

const TextRight = styled.div<{ active: number }>`
  z-index: 1;
  position: absolute;
  left: calc(50% + 320px);
  top: 256px;
  ${(props) =>
    props.active === 2
      ? `z-index: 3;
    left: calc(50% + 330px);`
      : ''}
`;

const RightParagraph = styled.div<{ active: number; delay: string }>`
  transform: translateX(-80px);
  transition-delay: 0s;
  width: 270px;
  opacity: 0;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  text-align: right;
  font-size: 20px;
  color: #e6e6e6;
  line-height: 28px;
  word-break: break-all;
  padding-bottom: 30px;
  text-shadow: 0 0 10px rgb(0 0 0 / 80%);
  ${(props) =>
    props.active === 2
      ? `opacity: 1;
      transform: translateX(0);
      transition-delay: ${props.delay};`
      : ''}
`;

const SeeDetailButton = styled.a<{ active: number }>`
  bottom: 176px;
  right: calc(50% - 600px);
  z-index: 1;
  position: absolute;
  display: inline-block;
  padding: 0 20px;
  min-width: 180px;
  height: 40px;
  color: #fff !important;
  overflow: hidden;
  border: 1px solid #f4fffe;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  opacity: 0;
  transition-property: all;
  transition-timing-function: ease;
  transition-duration: 0.3s;
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
    props.active === 2
      ? `z-index: 10;
    position: absolute;
    opacity: 1;
    transition-duration: .8s;
    transition-delay: .8s;`
      : ''}
`;

export { WorldviewTitle, TextDefault, TextLeft, LeftParagraph, TextRight, RightParagraph, SeeDetailButton };
