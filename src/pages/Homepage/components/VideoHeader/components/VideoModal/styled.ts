import styled from 'styled-components';

const ModalBody = styled.div`
  z-index: 5;
  position: relative;
  margin: auto;
  transition: top 0.6s ease;
`;

const Video = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-bottom: 56.25%;
  overflow: hidden;
  background: #000;
`;

const ModalClose = styled.div`
  z-index: 10;
  position: absolute;
  top: -70px;
  left: 50%;
  margin-left: -25px;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 50px;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export { ModalBody, Video, ModalClose, Iframe };
