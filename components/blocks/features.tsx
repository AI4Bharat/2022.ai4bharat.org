import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";

export const Feature = ({ featuresColor, data, tinaField }) => {
  return (
    
    <div
      data-tinafield={tinaField}
      className="flex-4 flex flex-col p-12 gap-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto hover:bg-gray-100 "
      style={{ flexBasis: "12rem" }}
    ><Link
       
    href={data.link}
    passHref
  >
    <a   
      key={data.id}
    
    >

      {data.icon && (
        <Icon
          tinaField={`${tinaField}.icon`}
          parentColor={featuresColor}
          data={{ size: "medium", ...data.icon }}
        />
      )}
      {data.title && (
      
        
        <h3
          data-tinafield={`${tinaField}.title`}
          className="text-lg title-font"
        >
          {/*changed from 2xl to lg*/}
          {data.title}
        </h3>
      
      )}
      {data.text && (
        <p
          data-tinafield={`${tinaField}.text`}
          className="text-base opacity-80 leading-relaxed"
        >
          {data.text}
        </p>
      )}
      {data.actions && <Actions actions={data.actions} />}
      </a>
          </Link>
    </div>
  );
};

export const Features = ({ data, parentField }) => {
  return (
    <Section color={data.color}>

      <Container
        className={`flex flex-wrap gap-x-20 gap-y-10 `}
        size="small"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <Feature
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

const defaultFeature = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  icon: {
    color: "",
    style: "float",
    name: "",
  },
  
};

export const featureBlockSchema: TinaTemplate = {
  name: "features",
  label: "Features",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultFeature, defaultFeature, defaultFeature],
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
          ...defaultFeature,
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
