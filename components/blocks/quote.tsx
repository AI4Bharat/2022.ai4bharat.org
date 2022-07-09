import React from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import YouTube, { YouTubeProps } from 'react-youtube';

export const VideoPlayer = ({embedCode})=> {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {
    height: '470',
    width: '800',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return <YouTube videoId={embedCode} opts={opts} onReady={onPlayerReady}/>;
}

export const Quote = ({ data, parentField = "" }) => {
  return (
    <Section color={data.color}>
      
      <Container size="small">
        <span className="inline-block hidden lg:block absolute right-0 w-max video-player"><VideoPlayer embedCode="Zqhb1AcJ2tw"/></span>
      <span className="component inline-block max-w-lg rounded-lg bg-gradient-to-r from-cyan-600 via-cyan-400 to-cyan-600 p-10 mx-1 md:mx-10 lg:-ml-12">
      <span
              className={`block text-8xl transform translate-y-6 text-white	-left-4 leading-4 -z-1`}
            >
              &ldquo;
            </span>
        <blockquote className="text-white text-center p-10 w-full m-1 font-lato text-2xl font-semibold">
            {data.quoteContent}
            <br/>
			<cite className="p-2 font-normal"> - {data.author}</cite>
		</blockquote>
        {/* <span
              className={`block text-8xl transform translate-y-6 translate-x-96 text-white leading-4 -z-1`}
            >
              &rdquo;
            </span> */}
    
	</span>
      </Container>
      <style jsx>
	{`.component {
		font-family: "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif;
	}

	blockquote {
		background:
			linear-gradient(to right, white 6px, transparent 4px) 0 100%,
			linear-gradient(to left, white 6px, transparent 4px) 100% 0,
			linear-gradient(to bottom, white 6px, transparent 4px) 100% 0,
			linear-gradient(to top, white 6px, transparent 4px) 0 100%;
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}


  .video-player{
    object-fit: cover;
    -webkit-clip-path: ellipse(100% 54% at 100% 45%);
clip-path: ellipse(100% 80% at 100% 50%);


    
    

  }

    `}
    </style>
    </Section>
  
  );
};

export const quoteBlockSchema: TinaTemplate = {
  name: "quote",
  label: "Quote",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      quoteContent:
        "There are only two hard things in Computer Science: cache invalidation and naming things.",
      author: "Phil Karlton",
      color: "default",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
      label: "Quote Content",
      name: "quoteContent",
    },
    {
      type: "string",
      label: "Author",
      name: "author",
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
