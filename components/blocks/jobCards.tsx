import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import Image from "next/image";
import { Fragment } from 'react'
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
//   style={{ flexBasis: "16rem" }}
export const JobCard = ({ featuresColor, data, tinaField }) => {
  console.log(data)
  console.log(data.link)
  return (

    <div className="lg:items-center border border-gray-200 bg-white rounded-lg p-6 shadow-lg">
    <div className="">
        {data.title &&
      <h2 className="text-2xl font-bold leading-7 text-gray-900 p-2">{data.title}</h2>
        }
       
      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 mb-4">
        {data.duration &&
        <div className="mt-2 flex items-center text-sm text-gray-500 p-2">
          <BriefcaseIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          {data.duration}
        </div>
        }
        {data.jobType &&
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          {data.jobType}
        </div>
        }
        {/* <div className="mt-2 flex items-center text-sm text-gray-500">
          <CurrencyDollarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          $120k &ndash; $140k
        </div> */}
        {/* <div className="mt-2 flex items-center text-sm text-gray-500">
          <CalendarIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          Closing on January 9, 2020
        </div> */}
      </div>
      {data.description &&
      <p className="text-md leading-7 text-gray-900 p-2 mb-2">{data.description}</p>
        }
    </div>
    <div className="mt-5 flex lg:mt-0 lg:ml-4">
      

      <span>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Apply
        </button>
      </span>

      
    </div>
    
    </div>
    
  );
};

export const JobCardsGrid = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="pb-12">

      <Container
      className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10"
  
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <JobCard
                tinaField={`${parentField}.items.${i}`}
                featuresColor={data.color}
                key={i}
                data={block}
              />
            </>
            );
          })}
      </Container>
    </Section>
  );
};

const defaultJobCard = {
  title: "Here's Another Feature",
  description: "This is where you might talk about the feature, if this wasn't just filler text.",
  jobType:"",
  duration:"",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
  
};

export const jobCardsGridBlockSchema: TinaTemplate = {
  name: "jobCardsGrid",
  label: "Job Cards Grid",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultJobCard, defaultJobCard, defaultJobCard],
    },
  },
  fields: [
    {
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultJobCard,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Title",
          name: "title",
        },
        {
          type: "string",
          label: "Link",
          name: "link",
        },
        {
            type: "string",
            label: "Duration",
            name: "duration",
        },
        {
            type: "string",
            label: "Job Type",
            name: "jobType",
        },
        {
          type: "string",
          label: "Description",
          name: "description",
          ui: {
            component: "textarea",
          },
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
