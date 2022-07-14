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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


//   style={{ flexBasis: "16rem" }}

export const TeamCard = ({ featuresColor, data, tinaField }) => {
  // console.log(data)
  // if(data.personImage){
  // console.log("personImage "+data.personImage.src)
  // }
  // console.log('data.teamGroup '+data.teamGroup)
  return (
<div>
                     
                        <div className="relative mt-16 sm:mb-12">
                            <div className="overflow-hidden shadow-md bg-white pb-5 rounded-lg">
                              {data.personImage &&
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src={data.personImage.src} alt={data.personImage.alt} className="rounded-full object-cover h-full w-full shadow-md" />              
                                        </div>
                                </div>
                              }
    
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
      {/* {console.log('data.tabsEnabled '+data.tabsEnabled)} */}
      {data.tabsEnabled 
      ?
      <Tabs>
          <TabList className="flex flex-row p-6 w-min mx-auto">
            <Tab className="px-4 py-2 border border-white rounded-t-lg bg-orange-200 focus:bg-orange-800 text-white font-semibold tracking-wider uppercase cursor-pointer hover:bg-orange-400">Founders</Tab>
            <Tab className="px-4 py-2 border border-white rounded-t-lg bg-orange-200 focus:bg-orange-800 text-white font-semibold tracking-wider uppercase cursor-pointer hover:bg-orange-400">Operations</Tab>
            <Tab className="px-4 py-2 border border-white rounded-t-lg bg-orange-200 focus:bg-orange-800 text-white font-semibold tracking-wider uppercase cursor-pointer hover:bg-orange-400">Tech</Tab>
            <Tab className="px-4 py-2 border border-white rounded-t-lg bg-orange-200 focus:bg-orange-800 text-white font-semibold tracking-wider uppercase cursor-pointer hover:bg-orange-400">Language</Tab>
          </TabList>

          <TabPanel> 
            <Container
              className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
              size="small"
            >
              {data.items &&
                data.items.map(function (block, i) {
                  return (
                  <>
                  {console.log(block.teamGroup)} 
                  {(block.teamGroup == "founders") && 
                    <TeamCard
                      tinaField={`${parentField}.items.${i}`}
                      featuresColor={data.color}
                      key={i}
                      data={block}
                    />
                  }
                  </>
                  );
                })}
              {data.link &&            
              <div className="flex justify-center items-center">
              <a href={data.link} className="flex justify-center text-center font-semibold text-md text-blue-600"><p className="inline-block">See full team</p> <FaArrowRight className="inline-block mt-1 ml-1" /></a>
              </div>
              }
              </Container>
            </TabPanel>


            <TabPanel> 
              <Container
                className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
                size="small"
              >
                {data.items &&
                  data.items.map(function (block, i) {
                    return (
                    <>
                      {(block.teamGroup == "operations") && 
                      <TeamCard
                        tinaField={`${parentField}.items.${i}`}
                        featuresColor={data.color}
                        key={i}
                        data={block}
                      />
                  }
                    </>
                    );
                  })}
                      
              {data.link &&            
              <div className="flex justify-center items-center">
              <a href={data.link} className="flex justify-center text-center font-semibold text-md text-blue-600"><p className="inline-block">See full team</p> <FaArrowRight className="inline-block mt-1 ml-1" /></a>
              </div>
              }
            </Container>
            </TabPanel>

            <TabPanel> 
              <Container
                className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
                size="small"
              >
                {data.items &&
                  data.items.map(function (block, i) {
                    return (
                    <>
                      {(block.teamGroup == "tech") && 
                      <TeamCard
                        tinaField={`${parentField}.items.${i}`}
                        featuresColor={data.color}
                        key={i}
                        data={block}
                      />
                  }
                    </>
                    );
                  })}
                      
              {data.link &&            
              <div className="flex justify-center items-center">
              <a href={data.link} className="flex justify-center text-center font-semibold text-md text-blue-600"><p className="inline-block">See full team</p> <FaArrowRight className="inline-block mt-1 ml-1" /></a>
              </div>
              } 
            </Container>
            </TabPanel>

            <TabPanel> 
              <Container
                className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
                size="small"
              >
                {data.items &&
                  data.items.map(function (block, i) {
                    return (
                    <>
                      {(block.teamGroup == "language") && 
                      <TeamCard
                        tinaField={`${parentField}.items.${i}`}
                        featuresColor={data.color}
                        key={i}
                        data={block}
                      />
                  }
                    </>
                    );
                  })}
                      
              {data.link &&            
              <div className="flex justify-center items-center">
              <a href={data.link} className="flex justify-center text-center font-semibold text-md text-blue-600"><p className="inline-block">See full team</p> <FaArrowRight className="inline-block mt-1 ml-1" /></a>
              </div>
              }
            </Container>
            </TabPanel>


      </Tabs>
   
   : <Container
        className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        size="small"
      >
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
              
      {data.link &&            
      <div className="flex justify-center items-center">
      <a href={data.link} className="flex justify-center text-center font-semibold text-md text-blue-600"><p className="inline-block">See full team</p> <FaArrowRight className="inline-block mt-1 ml-1" /></a>
      </div>
      }
      </Container>

}
    </Section>
  );
};

const defaultTeamCard = {
  personName:"",
  personDesignation:"",
  
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
        {
          type: "string",
          label: "Team",
          name: "teamGroup",
          options: [
            { label: "Founders", value: "founders" },
            { label: "Operations", value: "operations" },
            { label: "Tech", value: "tech" },
            { label: "Language", value: "language" },
          ],
        },
        {
          type: "string",
          label: "Person Name",
          name: "personName",
        },
        {
          type: "string",
          label: "Person Designation",
          name: "personDesignation",
        },
        {
          type: "object",
          label: "Image",
          name: "personImage",
          fields: [
            {
              name: "src",
              label: "Image Source",
              type: "image",
            },
            {
              name: "alt",
              label: "Alt Text",
              type: "string",
            },
          ],
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
    {
      type:"string",
      label: "Link",
      name: "link",
    },
    {
      type:"boolean",
      label: "Tabs Enabled?",
      name: "tabsEnabled",
    }
  ],
};
