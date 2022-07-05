import  React, { CSSProperties }from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { TinaTemplate } from "tinacms";
import YouTube, { YouTubeProps } from 'react-youtube';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { RightArrowIcon, LeftArrowIcon } from "tinacms";


function VideoPlayer({embedCode}) {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '500',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={embedCode} opts={opts} onReady={onPlayerReady}/>;
}

export const Video = ({ data, parentField = "" }) => {
  const arrowStyles: CSSProperties = {
    position: 'absolute',
    zIndex: 2,
    top: '35%',
    width: 30,
    height: '20%',
    cursor: 'pointer',
    backgroundColor: 'orange',
    color: 'white',
    borderRadius: '10px',
};
  return (
    <Section color={data.color}>
      <Container
        className={`${
          data.color === "primary" ? `prose-primary` : `dark:prose-dark`
        }`}
        data-tinafield={`${parentField}.body`}
        size="medium"
      >
      {console.log(data)}
        {/* <VideoPlayer embedCode={data.embedCode}/> */}

        
        <Carousel 
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
              <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0}}>
                  <LeftArrowIcon />
              </button>
          )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
              <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0 }}>
                  <RightArrowIcon />
              </button>
          )
      }
        dynamicHeight={true} width="300" showStatus={false} showThumbs={false} showIndicators={false}>
                <div>
                <VideoPlayer embedCode={data.embedCode}/>
                </div>
                <div>
                <VideoPlayer embedCode={data.embedCode}/>
             
                </div>
                <div>
                <VideoPlayer embedCode={data.embedCode}/>
                 
                </div>
            </Carousel>
     
      </Container>
    </Section>
  );
};

export const videoBlockSchema: TinaTemplate = {
  name: "video",
  label: "Video",
  ui: {
    previewSrc: "/blocks/content.png",
    defaultItem: {
      embedCode: "2g811Eo7K8U",
    },
  },
  fields: [
    {
      type: "string",
      label: "Youtube Embed Code",
      name: "embedCode",
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
