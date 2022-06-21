import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import Image from "next/image";
//   style={{ flexBasis: "16rem" }}
export const CardGrid2 = ({ featuresColor, data, tinaField }) => {
  console.log(data)
  console.log(data.image);
  console.log(data.link)
  return (
<div>
  <div data-tinafield={tinaField} className="rounded text-center overflow-hidden shadow-lg hover:bg-gray-100 flex flex-col lg:flex-row overflow-hidden" >
 
    

{data.image && ( 
      <Image src={data.image} width={200} height={150} />
)}
      <div className="p-4 flex flex-col justify-between leading-normal w-full">
      {data.title && (
            <div data-tinafield={`${tinaField}.title`} className="text-black font-bold text-2xl mb-2 leading-tight"> {data.title}</div>
       
            )}
      </div>

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

  
 
     
  
</div>


    
  );
};

export const CardsGrid2 = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="pb-12">

      <Container
        className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10"
        size="small"
      >
        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <CardGrid2
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

const defaultCardGrid2 = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  image: "/mountain.png"
  
};

export const CardGrid2BlockSchema: TinaTemplate = {
  name: "cardGrid2",
  label: "CardGrid2",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultCardGrid2, defaultCardGrid2, defaultCardGrid2],
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
          ...defaultCardGrid2,
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
          label: "Image",
          name: "image",
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
