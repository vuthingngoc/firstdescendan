import styled from 'styled-components';

const MouseDragWrap = styled.div`
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

const Mouse = styled.div`
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

const ArrowLeft = styled.div`
  @keyframes leftStickAnimation {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(15px);
    }
  }
  right: 150px;
  background-image: ${(props) => props.arrowLeft};
  background-position: 0 0;
  position: absolute;
  top: 87px;
  width: 43px;
  height: 33px;
  background-size: 25px 33px;
  background-repeat: no-repeat;
  animation-name: leftStickAnimation;
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
const LeftStick = styled.span`
  right: 2px;
  position: absolute;
  top: 16px;
  display: block;
  width: 41%;
  height: 1px;
  background-color: #fff;
`;

export { MouseDragWrap, Mouse, ArrowLeft, LeftStick };
