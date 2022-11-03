import styled from 'styled-components';

const Section = styled.section<{
  bgURL: string;
}>`
  background-image: url(${(props) => props.bgURL});
  position: relative;
  height: 900px;
  overflow: hidden;
  background-position: top;
`;

const SwipperWrap = styled.div<{ overlay: string; nameImg: string; active: number }>`
  ::before {
    background-image: url(${(props) => props.overlay});
    background-position: calc(50% - 280px) top;
    z-index: 2;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    ${(props) => (props.active === 3 ? `opacity: 1;` : '')}
  }
  ::after {
    background-image: url(${(props) => props.nameImg});
    background-position: calc(50% - 350px) 136px;
    background-repeat: no-repeat;
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s ease;
    ${(props) => (props.active === 3 ? `opacity: 1;` : '')}
  }
`;

export { Section, SwipperWrap };
