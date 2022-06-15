import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
//   style={{ flexBasis: "16rem" }}
export const FeatureAlt = ({ featuresColor, data, tinaField }) => {
  console.log(data)
  console.log(data.link)
  return (
    
    <div
      data-tinafield={tinaField}
      className="columns-2 p-6 text-center items-center lg:items-start lg:text-left max-w-xl mx-auto hover:bg-gray-100"
   
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
          data={{ size: "large", ...data.icon }}
        />
      )}
      {data.title && (
      
        
        <h3
          data-tinafield={`${tinaField}.title`}
          className="text-2xl font-semibold title-font"
        >
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

export const FeaturesAlt = ({ data, parentField }) => {
  return (
    <Section color={data.color}>

      <Container
        className={`flex flex-wrap gap-x-20 gap-y-10 `}
        size="large"
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
