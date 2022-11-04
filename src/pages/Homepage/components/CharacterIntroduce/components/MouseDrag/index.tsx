import React, { useEffect, useState } from 'react';
import { arrowLeftBG, arrowRightBG, Characters } from '../../../../../../constant/homepage.character';
import { Arrow, Mouse, MouseDragWrap, Stick } from './styled';

interface propsType {
  setSide: (value: number) => void;
  sideShow: number;
}

const MouseDrag: React.FC<propsType> = ({ setSide, sideShow }) => {
  const [width, setWidth] = useState('50%');
  const character = Characters[0];

  const dragMouse = (ele: HTMLElement | null) => {
    if (ele) {
      ele.onmousedown = dragMouseDown;
    }
  };

  const dragMouseDown = (event: MouseEvent) => {
    const e = event || window.event;
    e.preventDefault();
    document.onmouseup = dragMouseUp;
    document.onmousemove = setWidthElement;
  };

  const setWidthElement = (event: MouseEvent) => {
    const e = event || window.event;
    e.preventDefault();
    const changePos = e.clientX;
    const newWidth = window.innerWidth - changePos;

    if (newWidth <= window.innerWidth) setWidth(newWidth + 'px');
    if (newWidth < window.innerWidth / 3) {
      if (sideShow !== 2) setSide(2);
    } else if (newWidth > (window.innerWidth * 2) / 3) {
      if (sideShow !== 3) setSide(3);
    } else {
      if (sideShow !== 4) setSide(4);
    }
  };

  const dragMouseUp = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  useEffect(() => {
    if (document.getElementById?.('bar')) dragMouse(document.getElementById('bar'));
  }, []);

  return (
    <MouseDragWrap
      id="dragWrap"
      bgColor={character.backgroundImage}
      boxShadow={character.boxShadow}
      bgImg={character.lineCenterUrl}
      style={{ width: width }}
    >
      <Mouse id="bar" dragBG={character.dragBackground} style={{ cursor: 'w-resize', userSelect: 'none' }}>
        <Arrow arrowBG={arrowLeftBG} style={{ right: '150px', backgroundPosition: '0 0' }}>
          <Stick style={{ right: '2px' }} />
        </Arrow>
        <Arrow arrowBG={arrowRightBG} style={{ left: '143px', backgroundPosition: '100% 0' }}>
          <Stick style={{ left: '2px' }} />
        </Arrow>
      </Mouse>
    </MouseDragWrap>
  );
};

export default MouseDrag;
