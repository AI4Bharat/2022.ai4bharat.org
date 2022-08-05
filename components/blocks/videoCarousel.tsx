import  React, { CSSProperties }from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import YouTube, { YouTubeProps } from 'react-youtube';
//import 'react-responsive-carousel/lib/styles/carousel.css'; // requires a loader
//import 'public/blocks/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import { RightArrowIcon, LeftArrowIcon } from "tinacms";

export const VideoPlayer = ({embedCode})=> {
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

const MultipleVideos = ({videoData}) =>{
    return(
        <>
    {videoData.videoDetails && (
        videoData.videoDetails.map((videoDetail)=>{ 
         
            <div>
                <VideoPlayer embedCode="vIhX37VNtZo"/>

            </div>
          
           
        })
    )} 
    </>
    )
}

export const VideoCarousel = ({ data, parentField = "" }) => {
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
       {/* {console.log('videoCarousel')}
      {console.log(data)}
      {console.log(data.videoDetails?'true':'false')} */}
      {data.videoDetails.map((videoDetail)=>{
        console.log(videoDetail.embedCode)
      })}
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
                {/* <div>
                <VideoPlayer embedCode={data.embedCode}/>
                </div>
                <div>
                <VideoPlayer embedCode={data.embedCode}/>
             
                </div>
                <div>
                <VideoPlayer embedCode={data.embedCode}/>
                 
                </div> */}
                 {/* {data.videoDetails && (
                    data.videoDetails.map((videoDetail)=>{  */}
                     
                 
                            {/* <VideoPlayer embedCode="vIhX37VNtZo"/> */}
                            <MultipleVideos videoData={data} />
                        
                        <div>

                        </div>
                      
{/*                        
                    })
                )}  */}
            </Carousel>
     
      </Container>


    </Section>
  );
};

const defaultVideoCarousel = {
    title: "Here's Another Feature",
    embedCode: "vIhX37VNtZo"
    
  };

export const videoCarouselBlockSchema: TinaTemplate = {
    name: "videoCarousel",
    label: "Video Carousel",
    ui: {
      previewSrc: "/blocks/content.png",
      defaultItem: {
        items: [defaultVideoCarousel, defaultVideoCarousel],
      },
    },
    fields: [
      {
        type: "object",
        label: "Video Details",
        name: "videoDetails",
        list: true,
        ui: {
          defaultItem: {
            ...defaultVideoCarousel,
          },
        },
        fields: [
          {
            type: "string",
            label: "Title",
            name: "title",
          },
          {
            type: "string",
            label: "Video Embed Code",
            name: "embedCode",
          },
        ],
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
