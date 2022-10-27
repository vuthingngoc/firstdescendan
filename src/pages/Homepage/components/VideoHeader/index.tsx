import React from 'react';
import InfoCategoryLine from './components/InfoCategoryLine';
import {
  Article,
  BackVideoLayout,
  GameText,
  GameTitle,
  Info,
  InfoCatefory,
  InfoCategoryText,
  InfoTitle,
  NoticeList,
  Thumbnail,
  TopCover,
  Video,
  VideoButton,
  VideoCover,
} from './styled';

const VideoHeader: React.FC = () => {
  return (
    <section style={{ height: '1018px', position: 'relative' }}>
      <BackVideoLayout>
        <Video preload autoPlay muted loop="loop" playsinline>
          <source src="https://tfdvod.dn.nexoncdn.co.kr/img/cbt/main/main_video.mp4" type="video/mp4" />
        </Video>
        <VideoCover />
        <TopCover>
          <VideoButton>VOD PLAY</VideoButton>
          <GameTitle>
            <GameText>THE FIRST DESCENDANT</GameText>
          </GameTitle>
        </TopCover>
        <NoticeList>
          <div className="flex justify-content-center">
            <Article>
              <a href="/en/cbt/news/1912429" style={{ display: 'flex', position: 'relative', height: '100%', overflow: 'hidden' }}>
                <Info>
                  <InfoCatefory>
                    <InfoCategoryLine />
                    <InfoCategoryText>NOTICE</InfoCategoryText>
                  </InfoCatefory>
                  <InfoTitle />
                </Info>
                <Thumbnail>
                  <img
                    src="https://dszw1qtcnsa5e.cloudfront.net/community/20221027/829e8578-b698-47cb-8a33-8dd0f73596c3/TFDENDofCBT800x450.png"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </Thumbnail>
              </a>
            </Article>
          </div>
        </NoticeList>
      </BackVideoLayout>
    </section>
  );
};

export default VideoHeader;
