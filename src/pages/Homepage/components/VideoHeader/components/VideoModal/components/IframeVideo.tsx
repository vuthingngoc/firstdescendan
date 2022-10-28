import React from 'react';
import { youtubeVideo } from '../../../../../../../constant/homepage.videosection';
import { Iframe } from '../styled';

const IframeVideo: React.FC = () => {
  return <Iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" src={youtubeVideo}></Iframe>;
};

export default IframeVideo;
