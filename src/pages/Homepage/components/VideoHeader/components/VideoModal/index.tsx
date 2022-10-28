import React from 'react';
import Close from './components/Close';
import IframeVideo from './components/IframeVideo';
import { ModalBody, ModalClose, Video } from './styled';

interface HandleClose {
  handleCloseModal: () => void;
}

const VideoModal: React.FC<HandleClose> = ({ handleCloseModal }) => {
  return (
    <ModalBody>
      <Video>
        <IframeVideo />
      </Video>
      <ModalClose>
        <a
          href="#"
          style={{ display: 'block', width: '100%', height: '100%', textIndent: '-9999px' }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseModal();
          }}
        >
          <Close />
        </a>
      </ModalClose>
    </ModalBody>
  );
};

export default VideoModal;
