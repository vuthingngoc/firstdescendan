import React from 'react';
import { arrowLeftBG, Characters } from '../../../../../../constant/homepage.character';
import { ArrowLeft, LeftStick, Mouse, MouseDragWrap } from './styled';

const MouseDrag: React.FC = () => {
  const character = Characters[0];
  return (
    <MouseDragWrap bgColor={character.backgroundImage} boxShadow={character.boxShadow} bgImg={character.lineCenterUrl}>
      <Mouse dragBG={character.dragBackground} style={{ cursor: 'w-resize', userSelect: 'none' }}>
        <ArrowLeft arrowLeft={arrowLeftBG}>
          <LeftStick />
        </ArrowLeft>
      </Mouse>
    </MouseDragWrap>
  );
};

export default MouseDrag;
