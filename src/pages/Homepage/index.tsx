import React from 'react';
import CharacterIntroduce from './components/CharacterIntroduce';
import VideoHeader from './components/VideoHeader';
import { Container } from './styled';

const Homepage: React.FC = () => {
  return (
    <Container>
      <VideoHeader />
      <CharacterIntroduce />
    </Container>
  );
};

export default Homepage;
