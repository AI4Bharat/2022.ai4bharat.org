import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

export const PDFEmbed = ({ data, parentField = "" }) => {
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
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-full">



        <div className="md:text-center">
        {data.header &&
        <h2 className={`text-base font-semibold tracking-wide uppercase ${
            data.highlightColor === "cyan"
                ? `text-cyan-600`
                : data.highlightColor === "orange"
                    ? `text-orange-400`
                    : data.highlightColor === "yellow"
                        ? `text-yellow-300`
                        : `text-black`
            }`}>{data.header}</h2>
        }
        {data.title &&
        <p className="mt-2 text-3xl py-2 mb-6 leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {data.title}
        </p>
        }
        {data.description &&
        <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
        {data.description}
        </p>
        }
        </div>
        {/* <object data={data.url}
                width="800" 
                height="500"> 
        </object> */}

        {/* <iframe src={data.url} className="w-full h-96" ></iframe> */}
        <div>
            <iframe id="pdf-js-viewer" src={`/web/viewer.html?file=${data.url}`} className="w-full" title="webviewer" width="500" height="600"></iframe>
        </div>     
</div>
    </Section>
    }
    </>
  )

};

export const pdfEmbedBlockSchema: TinaTemplate = {
  name: "pdfEmbed",
  label: "PDF Embed",
  ui: {
    previewSrc: "/blocks/banner.png",
    defaultItem: {
      header: "Impact",
      title: "Data",
      description: "Curate and create the largest public datasets across tasks and languages",
      color: "default",
      url: "/AI4Bharat Launch.pdf",
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