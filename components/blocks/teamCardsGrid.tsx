import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import Link from "next/link";
import Image from "next/image";
import { RightArrowIcon } from "tinacms";
import { FaArrowRight } from "react-icons/fa";

//   style={{ flexBasis: "16rem" }}

export const TeamCard = ({ featuresColor, data, tinaField }) => {
  console.log(data)
  console.log(data.image);
  console.log(data.link)
  return (
<div>
                     
                        <div className="relative mt-16 sm:mb-12">
                            <div className="overflow-hidden shadow-md bg-white pb-5 rounded-lg">
                              {data.personPhoto &&
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src={data.personPhoto} className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                              }
                              {data.icon && (
        <Icon
          tinaField={`${tinaField}.icon`}
          parentColor={featuresColor}
          data={{ size: "small", ...data.icon }}
          className="mb-4"
        />
      )}
                                <div className="px-6 mt-16">
                                  {data.personName &&
                                    <div className="font-bold text-xl text-center p-1">{data.personName}</div>
                                  }
                                  {data.personDesignation &&
                                    <p className="text-gray-800 text-sm text-center p-1">{data.personDesignation}</p>
                                  }
                                    {/* <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                                      <div className="w-full flex justify-center pt-5 pb-5">
                                        <a href="javascript:void(0)" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                </svg>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" className="mx-5">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                    <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                                </svg>
                                            </div>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                     
              
                        

</div>

    
  );
};

export const TeamCardsGrid = ({ data, parentField }) => {
  return (
    <Section color={data.color} className="pb-12">

      <Container
        className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        size="small"
      >
   {/*     <div>
 <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className="w-full bg-gray-100 px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"> */}

        {data.items &&
          data.items.map(function (block, i) {
            return (
            <>
           
              <TeamCard
                tinaField={`${parentField}.items.${i}`}
                featuresColor={data.color}
                key={i}
                data={block}
              />
              
            </>
            );
          })}
                              {/* </div>
                </div>
            </div>

     
  
</div> */}
<div className="flex justify-center items-center">
<a href="/team" className="flex justify-center text-center font-semibold text-md text-blue-600"><p className="inline-block">See full team</p> <FaArrowRight className="inline-block mt-1 ml-1" /></a>
</div> 
      </Container>
    </Section>
  );
};

const defaultTeamCard = {
  personName:"",
  personDesignation:"",
  personPhoto:"",
  
};

export const teamCardsGridBlockSchema: TinaTemplate = {
  name: "teamCardsGrid",
  label: "Team Cards Grid",
  ui: {
    previewSrc: "/blocks/features.png",
    defaultItem: {
      items: [defaultTeamCard, defaultTeamCard, defaultTeamCard, defaultTeamCard],
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
          ...defaultTeamCard,
        },
      },
      fields: [
        iconSchema,
        {
          type: "string",
          label: "Person Name",
          name: "personName",
        },
        {
          type: "string",
          label: "Image",
          name: "personPhoto",
        },
        {
          type: "string",
          label: "Person Designation",
          name: "personDesignation",
        },
        {
          type: "string",
          label: "Person Description",
          name: "personDescription",
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
