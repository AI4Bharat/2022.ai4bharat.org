import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import type { TinaTemplate } from "tinacms";

export const PhotoCard = ({ featuresColor, data, tinaField }) => {
  return (
    <div data-tinafield={tinaField} className="w-full md:w-1/2 xl:w-1/3 px-4" >
      <div className="bg-white rounded-lg overflow-hidden mb-10">
        <img className="w-full" src={data.image} alt="" />

        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
          <h3 className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary"
          data-tinafield={`${tinaField}.title`}
          >
            {data.title}
          </h3>
          <p className="text-base text-body-color leading-relaxed mb-7" data-tinafield={`${tinaField}.text`}>
            {data.text}
          </p>
        </div>
      </div>
    </div>

    /*{ {data.image && ( 
          <img className="rounded-t-lg" src={data.image} alt="" />
    )}
    <div className="p-5">
          <h5 data-tinafield={`${tinaField}.title`}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {data.title}
          </h5>

        {data.text && (
          <p 
          className="mb-3 font-normal text-gray-700"
          data-tinafield={`${tinaField}.text`}
          >
            {data.text}
          </p> 
        )}
        </div>
         {data.actions && <Actions actions={data.actions} />}
      </div> }*/
  );
};

export const PhotoCardSingle = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="pb-12">

      <Container
        className="p-10 gap-10 flex justify-center items-center"
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

export const photoCardSingleBlockSchema: TinaTemplate = {
  name: "photoCardSingle",
  label: "Photo Card Single",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultPhotoCard],
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
