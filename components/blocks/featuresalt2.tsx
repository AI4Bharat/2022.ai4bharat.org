import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import Image from "next/image";
//   style={{ flexBasis: "16rem" }}
export const FeatureAlt2 = ({ featuresColor, data, tinaField }) => {
  console.log(data)
  console.log(data.link)
  return (

  <div className="relative w-48 mb-6 transform rounded overflow-hidden shadow-xl hover:bg-gray-50 transition duration-500 hover:scale-110" data-tinafield={tinaField}>
  <Link
       href={data.link}
       passHref
     >
       <a key={data.id}>

    <div className="px-6 py-4 mb-6">
      
    {data.icon && (
        <Icon
          tinaField={`${tinaField}.icon`}
          parentColor={featuresColor}
          data={{ size: "small", ...data.icon }}
          className="mb-4"
        />
      )}

    <div>
    {data.title && ( 
      <div 
        className="text-xl mb-2 font-semibold" 
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
    </div>
    </div>
    <div className="p-2 bg-orange-200 w-full h-2 rounded-t-md absolute inset-x-0 bottom-0"><p className="px-2 text-white transition transform hover:translate-x-2 motion-reduce:transition-none motion-reduce:hover:transform-none"></p></div>
     {data.actions && <Actions actions={data.actions} />}

   
  
    
    </a>
          </Link> 
        
  </div>

    
  );
};

export const FeaturesAlt2 = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="pb-12">

      <Container
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4"
  
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <FeatureAlt2
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

const defaultFeatureAlt2 = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
  
};

export const featureAltBlockSchema2: TinaTemplate = {
  name: "featuresAlt2",
  label: "FeaturesAlt2",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeatureAlt2, defaultFeatureAlt2, defaultFeatureAlt2],
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
          ...defaultFeatureAlt2,
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
