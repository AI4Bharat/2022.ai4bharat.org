import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import Image from "next/image";
//   style={{ flexBasis: "16rem" }}
export const FeatureAlt = ({ featuresColor, data, tinaField }) => {
  console.log(data)
  console.log(data.link)
  return (

  <div className="relative transform rounded overflow-hidden shadow-lg mb-6 hover:bg-gray-50 transition duration-500 hover:scale-110" data-tinafield={tinaField}>

    
    <div className="px-6 py-4 mb-6">
    {data.icon && (
        <Icon
          tinaField={`${tinaField}.icon`}
          parentColor={featuresColor}
          data={{ size: "small", ...data.icon }}
          className="mb-4"
        />
      )}
    {data.title && ( 
      <div 
        className="font-bold text-2xl mb-2" 
        data-tinafield={`${tinaField}.title`}>
          {data.title}
      </div> 
    )}

    {data.text && (
      <p 
      className="text-gray-700 text-base mb-4"
      data-tinafield={`${tinaField}.text`}
      >
        {data.text}
      </p> 
    )}
    
     {data.actions && <Actions actions={data.actions} />}

    </div>
    <Link
       href={data.link}
       passHref
     >
       <a key={data.id}>
    <div className="p-2 bg-orange-200 w-full h-10 absolute inset-x-0 bottom-0 mt-12"><p className="px-2 text-white transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none">Know More →</p></div>
    </a>
          </Link> 
  </div>

    
  );
};

export const FeaturesAlt = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="pb-12">

      <Container
        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10"
        size="small"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <FeatureAlt
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

const defaultFeatureAlt = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
  
};

export const featureAltBlockSchema: TinaTemplate = {
  name: "featuresAlt",
  label: "FeaturesAlt",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeatureAlt, defaultFeatureAlt, defaultFeatureAlt],
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
          ...defaultFeatureAlt,
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
          label: "Text",
          name: "text",
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
