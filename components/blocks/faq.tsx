import React from "react";
import { useState, Fragment } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

export const FAQ = ({ data, parentField = "" }) => {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <Section color={data.color}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

         
    
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
  <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
   Frequently Asked Questions
  </p>
  }
  {data.description &&
  <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
  {data.description}
  </p>
  }
</div>
</div>
      <Container size="small">

     <div className="w-full px-4 mb-16">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-2 ">
        {
        <Disclosure>
          {({ open }) => (
            <>
            {data.title &&
              <Disclosure.Button className="flex w-full justify-between rounded-lg border border-gray-200 bg-blue-800 px-4 py-4 text-left text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>What is AI4Bharat ?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
            }
            {data.content &&
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-gray-200 rounded-lg">
                AI4Bhārat is a non-profit, open-source community of engineers, domain experts, policy makers, and academicians collaborating to build AI solutions to solve India’s problems, today.
              </Disclosure.Panel>
            }
            </>
          )}
        </Disclosure>
        
        }
        {
        <Disclosure>
          {({ open }) => (
            <>
            {data.title &&
              <Disclosure.Button className="flex w-full justify-between rounded-lg border border-gray-200 bg-blue-800 px-4 py-4 text-left text-sm font-medium text-white hover:bg-blue-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                <span>{data.title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-white`}
                />
              </Disclosure.Button>
            }
            {data.content &&
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 border border-gray-200 rounded-lg">
                {data.content}
              </Disclosure.Panel>
            }
            </>
          )}
        </Disclosure>
        
        }
      </div>
      
    </div>
      </Container>
             
    </Section>
  );
};

export const faqBlockSchema: TinaTemplate = {
  name: "faq",
  label: "FAQ",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      title: "How can I support AI4Bharat?",
      content:"You can volunteer to contribute to our projects, propose new projects, or sponsor our works !",
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
        label: "Content",
        ui: {
            component: "textarea",
          },
        name: "content",
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
