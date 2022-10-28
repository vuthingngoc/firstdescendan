import styled from 'styled-components';

const WorldviewTitle = styled.h3`
  position: absolute;
  top: 347px;
  left: calc(50% - 571px);
  z-index: 3;
  color: #fff;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 1.6px;
  transition: all 0.3s ease;
`;

const TextDefault = styled.p`
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
`;

export { WorldviewTitle, TextDefault };
