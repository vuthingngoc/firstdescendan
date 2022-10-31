import { Modal } from '@mantine/core';
import React, { useState } from 'react';
import { annoucement, gameTitle, videoButton, videoSource } from '../../../../constant/homepage.videosection';
import { InfoCategoryAfter, InfoCategoryBefore, InfoCategoryLine } from './components/CategoryLine';
import VideoModal from './components/VideoModal';
import {
  Article,
  BackVideoLayout,
  GameText,
  GameTitle,
  Info,
  InfoCatefory,
  InfoCategoryText,
  InfoTitle,
  LineAfter,
  LineBefore,
  NoticeList,
  Section,
  Thumbnail,
  TopCover,
  Video,
  VideoButton,
  VideoCover,
} from './styled';

const VideoHeader: React.FC = () => {
  const [videoModal, setVideoModal] = useState(false);

  const handleCloseModal = () => {
    setVideoModal(false);
  };

  return (
    <Section>
      <BackVideoLayout>
        <Video autoPlay muted loop>
          <source src={videoSource} type="video/mp4" />
        </Video>
        <VideoCover />
        <TopCover>
          <VideoButton onClick={() => setVideoModal(true)}>{videoButton}</VideoButton>
          <GameTitle>
            <GameText>{gameTitle}</GameText>
          </GameTitle>
        </TopCover>
        <NoticeList>
          <div className="flex justify-content-center">
            {annoucement.map((e, value) => {
              return (
                <Article key={`article-${value}`}>
                  <a href="/en/cbt/news/1912429" style={{ display: 'flex', position: 'relative', height: '100%', overflow: 'hidden' }}>
                    <Info>
                      <InfoCatefory>
                        <InfoCategoryLine />
                        <InfoCategoryText>{e.category}</InfoCategoryText>
                      </InfoCatefory>
                      <InfoTitle>{e.title}</InfoTitle>
                    </Info>
                    <Thumbnail>
                      <img src={e.thumbnail} style={{ height: '100%', objectFit: 'cover' }} />
                    </Thumbnail>
                    <LineBefore>
                      <InfoCategoryBefore />
                    </LineBefore>
                    <LineAfter className="line-after">
                      <InfoCategoryAfter />
                    </LineAfter>
                  </a>
                </Article>
              );
            })}
          </div>
        </NoticeList>
      </BackVideoLayout>
      <Modal
        closeOnEscape={false}
        closeOnClickOutside={false}
        padding={0}
        size="90%"
        withCloseButton={false}
        centered
        opened={videoModal}
        onClose={() => setVideoModal(false)}
      >
        <VideoModal handleCloseModal={handleCloseModal} />
      </Modal>
    </Section>
  );
};

export default VideoHeader;
