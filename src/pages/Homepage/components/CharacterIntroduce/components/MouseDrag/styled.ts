import styled from 'styled-components';

const MouseDragWrap = styled.div<{
  bgColor: string;
  boxShadow: string;
  bgImg: string;
}>`
  background-image: ${(props) => props.bgColor};
  box-shadow: ${(props) => props.boxShadow};
  position: absolute;
  display: block;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  ::before {
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background-color: hsla(0, 0%, 100%, 0.3);
    content: '';
    display: block;
    position: absolute;
    z-index: 3;
  }
  ::after {
    top: 232px;
    left: -15px;
    width: 32px;
    height: 546px;
    background-image: url(${(props) => props.bgImg});
    content: '';
    display: block;
    position: absolute;
    z-index: 3;
  }
`;

const Mouse = styled.div<{
  dragBG: string;
}>`
  background-image: url(${(props) => props.dragBG});
  top: 350px;
  left: -122px;
  z-index: 4;
  width: 253px !important;
  height: 195px !important;
  background-size: 100% auto;
  background-color: transparent;
  border: none !important;
  box-shadow: none !important;
  position: absolute;
`;

const Arrow = styled.div<{
  arrowBG: string;
}>`
  @keyframes ArrowAnimation {
    0% {
      width: 43px;
    }
    100% {
      width: 30px;
    }
  }
  background-image: ${(props) => props.arrowBG};
  position: absolute;
  top: 87px;
  width: 43px;
  height: 33px;
  background-size: 25px 33px;
  background-repeat: no-repeat;
  animation-name: ArrowAnimation;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
const Stick = styled.span`
  position: absolute;
  top: 16px;
  display: block;
  width: 41%;
  height: 1px;
  background-color: #fff;
`;

export { MouseDragWrap, Mouse, Arrow, Stick };
