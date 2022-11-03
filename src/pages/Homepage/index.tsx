import React from 'react';
import Footer from '../../components/Footer';
import NavbarMain from '../../components/Navbar/navbar';
import CharacterIntroduce from './components/CharacterIntroduce';
import VideoHeader from './components/VideoHeader';
import { Container } from './styled';

const Homepage: React.FC = () => {
  return (
    <div id="wrap" className="cbt en">
      <NavbarMain />
      <Container>
        <VideoHeader />
        <CharacterIntroduce />
        <Footer />
      </Container>
    </div>
  );
};

export default Homepage;
