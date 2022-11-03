import React, { useState } from 'react';
import { Characters } from '../../../../constant/homepage.character';
import Character from './components/Character';
import MouseDrag from './components/MouseDrag';
import WorldView from './components/WorldView';
import { Section, SwipperWrap } from './styled';

const CharacterIntroduce: React.FC = () => {
  const [sideShow, setSideShow] = useState(1);
  const character = Characters[0];
  const setSide = (value: number) => {
    setSideShow(value);
  };
  return (
    <Section bgURL={character.background}>
      <SwipperWrap overlay={character.overlay} nameImg={character.nameImg} active={sideShow}>
        <WorldView active={sideShow} />
        <Character active={sideShow} />
        <MouseDrag sideShow={sideShow} setSide={setSide} />
      </SwipperWrap>
    </Section>
  );
};

export default CharacterIntroduce;
