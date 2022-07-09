import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

export const Banner = ({ data, parentField = "" }) => {
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
 
          <div className="bg-cyan-600">
      <div className="max-w-7xl mx-auto py-1 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate">
              <span className="md:hidden">AI4Bhārat Launch at IIT Madras  28th July 2022</span>
              <span className="hidden md:inline">AI4Bhārat Launch at IIT Madras  28th July 2022 !</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a href="#" className="flex items-center justify-center px-4 py-2 text-white mr-16 font-semibold underline">Learn more</a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-5 flex p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              onClick={handleShow}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

    </Section>
    }
    </>
  )

};

export const bannerBlockSchema: TinaTemplate = {
  name: "banner",
  label: "Banner",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      header: "Impact",
      title: "Data",
      description: "Curate and create the largest public datasets across tasks and languages",
      color: "default",
      highlightColor: "cyan",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
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
    },
    {
        type: "string",
        label: "Highlight Color",
        name: "highlightColor",
        options: [
          { label: "Cyan", value: "cyan" },
          { label: "Black", value: "black" },
          { label: "Yellow", value: "yellow" },
          { label: "Orange", value: "orange" },
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
