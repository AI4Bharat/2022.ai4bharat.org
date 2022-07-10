import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import { Chip } from "../util/chip";
import { chipSchema } from "../util/chip";
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
//   style={{ flexBasis: "16rem" }}
export const FlatCard = ({ featuresColor, data, tinaField }) => {
   console.log(data)
  // console.log(data.link)
  // console.log(typeof(data.comingSoon))
  return (

  

   <>

       <div key={data.title} className="relative">

       {console.log(data.chip)}
    {data.chip &&
      <Chip 
        data={{
          text: data.chip.text,
          size: "large", ...data.chip
        }}
        tinaField={`${tinaField}.chip`}
          parentColor={featuresColor}
      />
    }        
       
                <dt>
                {data.icon &&
                  <div className={`absolute flex items-center justify-center h-12 w-12 rounded-md text-white ${
        data.iconColor === "cyan"
          ? `bg-cyan-500`
          : data.iconColor === "orange"
                ? `bg-orange-400`
                : data.iconColor === "yellow"
                    ? `bg-yellow-400`
                    : `bg-gray-200`
      }`}>
     
                     {/* <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />  */}
       
                     <Icon
                        tinaField={`${tinaField}.icon`}
                        parentColor={featuresColor}
                        data={{ size: "small", ...data.icon }}
                        className="h-6 w-6 text-white"
                        />
                  </div>
                }   
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{data.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{data.text}</dd>
              </div>
         
              </>

    
  );
};

export const FlatCardsGrid = ({ data, parentField }) => {
    {console.log('data.highlightColor '+data)}
  return (
    <Section color={data.color} className="pb-12  bg-white">
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
      {data.title}
    </p>
    }
    {data.description &&
    <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
    {data.description}
    </p>
    }
  </div>
 
      <Container
       
        size="small"
      >
          <div className="">
          <dl className="space-y-10 content-evenly md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10">
          
        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <FlatCard
                tinaField={`${parentField}.items.${i}`}
                featuresColor={data.color}
                key={i}
                data={block}
              />
            </>
            );
          })}

        </dl>
            </div>
      </Container>
      </div>
    </Section>
  );
};

const defaultFlatCard = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
};

export const flatCardsGridBlockSchema: TinaTemplate = {
  name: "flatCardsGrid",
  label: "Flat Cards Grid",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFlatCard, defaultFlatCard, defaultFlatCard],
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
      type: "object",
      label: "Feature Items",
      name: "items",
      list: true,
      ui: {
        defaultItem: {
          ...defaultFlatCard,
        },
      },
      fields: [
        iconSchema,
        chipSchema,
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
          label: "Text",
          name: "text",
          ui: {
            component: "textarea",
          },
        },
        {
            type: "string",
            label: "Icon Color",
            name: "iconColor",
            options: [
              { label: "Cyan", value: "cyan" },
              { label: "Black", value: "black" },
              { label: "Yellow", value: "yellow" },
              { label: "Orange", value: "orange" },
            ],
        },
      ],
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
