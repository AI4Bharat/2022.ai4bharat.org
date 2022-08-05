import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import Image from "next/image";
//   style={{ flexBasis: "16rem" }}
export const PhotoCard = ({ featuresColor, data, tinaField }) => {
  // console.log(data)
  // console.log(data.image);
  // console.log(data.link)
  return (
    <div data-tinafield={tinaField} className="rounded text-center overflow-hidden shadow-lg hover:bg-gray-100 overflow-hidden flex flex-col lg:flex-row" >

    {data.image && ( 
          <Image src={data.image} width={500} height={150} />
    )}
    <div>
          <div className="p-4 justify-between leading-normal w-full">
          {data.title && (
                <div data-tinafield={`${tinaField}.title`} className="font-bold text-xl mb-2 leading-tight"> {data.title}</div>
           
                )}
          </div>
    
        {data.text && (
          <p 
          className="text-gray-700 text-base mb-4 px-6"
          data-tinafield={`${tinaField}.text`}
          >
            {data.text}
          </p> 
        )}
        </div>

         {data.actions && <Actions actions={data.actions} />}
    
    
    
    
      </div>
    
      
     
         
     
    
  
    
  );
};

export const PhotoCardsGrid2 = ({ data, parentField }) => {
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
        

  
              <PhotoCard
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

const defaultPhotoCard = {
  title: "Here's Another Feature",
  text: "This is where you might talk about the feature, if this wasn't just filler text.",
  image: "/mountain.png"
  
};

export const photoCardsGrid2BlockSchema: TinaTemplate = {
  name: "photoCardsGrid2",
  label: "Photo Cards Grid",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultPhotoCard, defaultPhotoCard, defaultPhotoCard],
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
          ...defaultPhotoCard,
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
