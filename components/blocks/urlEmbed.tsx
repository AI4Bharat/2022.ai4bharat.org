import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

export const URLEmbed = ({ data, parentField = "" }) => {
  const [show, setShow] = useState(true);

  const handleShow = () =>
  {
    setShow(false);
    sessionStorage.setItem('isShown', 'false');
  }
   return (
    <>
    {show &&
    <Section color={data.color}>
         {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-full"> */}
         <div className="py-5 flex justify-center items-center">
            <iframe 
                width='100%'
                height="1000"

                src={data.url}
                title='youtube player'
                allow="accelerometer; autoplay; clipboard-write; encripted-media; gyroscope;"
                >
                </iframe>
            </div>
             
        {/* </div> */}
    </Section>
    }
    </>
  )

};

export const urlEmbedBlockSchema: TinaTemplate = {
  name: "urlEmbed",
  label: "URL Embed",
  ui: {
    previewSrc: "/blocks/banner.png",
    defaultItem: {
      header: "Impact",
      title: "Data",
      description: "Curate and create the largest public datasets across tasks and languages",
      color: "default",
      url: "https://tools.ai4bharat.org/",
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
        label: "Header",
        name: "header",
      },
      {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: "textarea",
          },
      },
    {
      type: "string",
      label: "URL",
      name: "url",
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