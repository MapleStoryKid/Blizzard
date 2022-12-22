import React from 'react';
import styled from "styled-components";


type YouTubeEmbedProps = {
  videoId: string;
};

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => {
  return (
    <MainVideo
      title={videoId}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></MainVideo>
  );
};


export const MainVideo = styled.iframe`
margin-top: 300px;
margin-left: 200px;
height: 400px;
width: 600px;


justify-content: center;

`;


export default YouTubeEmbed;