import { Actions } from "../util/actions";
import { Section } from "../util/section";
import { Container } from "../util/container";
import { Icon } from "../util/icon";
import type { TinaTemplate } from "tinacms";
import { iconSchema } from "../util/icon";
import { Chip } from "../util/chip";
import { chipSchema } from "../util/chip";
import Link from "next/link";
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
//   style={{ flexBasis: "16rem" }}
//import ReactMarkdown from 'react-markdown';
//import remarkGfm from 'remark-gfm';
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')


const markdown = `| Subset | [as-en <sub>(4.72 MB)</sub>](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/asm.zip) | [bn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ben.zip) <sub>(31.5 MB)</sub> | [brx-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/brx.zip) <sub>(0.933 MB)</sub> | [gu-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/guj.zip) <sub>(29.5 MB)</sub> | [hi-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/hin.zip) <sub>(31.4 MB)</sub> | [kn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kan.zip) <sub>(83.7 MB)</sub> | [ks-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kas.zip) <sub>(1.1 MB)</sub> | [kok-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kok.zip) <sub>(16.6 MB)</sub> | [mai-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mai.zip) <sub>(6.74 MB)</sub> | [ml-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mal.zip) <sub>(125 MB)</sub> | [mni-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mni.zip) <sub>(0.313 MB)</sub> | [mr-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mar.zip) <sub>(39.9 MB)</sub> | [ne-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/nep.zip) <sub>(67 MB)</sub> | [or-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ori.zip) <sub>(9.09 MB)</sub> | [pa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/pan.zip) <sub>(12.1 MB)</sub> | [sa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/san.zip) <sub>(56 MB)</sub> | [sd-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/sid.zip) <sub>(1.37 MB)</sub> | [ta-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tam.zip) <sub>(92.7 MB)</sub> | [te-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tel.zip) <sub>(69.1 MB)</sub> | [ur-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/urd.zip) <sub>(17 MB)</sub> |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| Training | 179K | 1231K | 36K | 1143K | 1299K | 2907K | 47K | 613K | 283K | 4101K | 10K | 1453K | 2397K | 346K | 515K | 1813K | 60K | 3231K | 2430K | 699K |
| Validation | 4K | 11K | 3K | 12K | 6K | 7K | 4K | 4K | 4K | 8K | 3K | 8K | 3K | 3K | 9K | 3K | 8K | 9K | 8K | 12K |
| Test | 5531 | 5009 | 4136 | 7768 | 5693 | 6396 | 7707 | 5093 | 5512 | 6911 | 4925 | 6573 | 4133 | 4256 | 4316 | 5334 | - | 4682 | 4567 | 4463 |
`

export const FlatCard = ({ featuresColor, data, tinaField }) => {
  //  console.log('flat card icon'+data.iconShown)
  // console.log(data.link)
  // console.log(typeof(data.comingSoon))
  return (

  

   <>

       <div key={data.title} className="relative">

       {/* {console.log(data.chip)} */}
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
                {data.iconShown && data.icon &&
                  <div className={`absolute flex items-center justify-center h-12 w-12 rounded-md text-white ${
        data.iconColor === "cyan"
          ? `bg-cyan-500`
          : data.iconColor === "orange"
                ? `bg-orange-400`
                : data.iconColor === "yellow"
                    ? `bg-yellow-400`
                    : null
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
                {data.link 
                ?<Link href={data.link} passHref>
                    <a key={data.id}>
                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{data.title}</p>
                    </a>        
                  </Link>
                : <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{data.title}</p>
                }
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{data.text}</dd>
              </div>
         
              </>

    
  );
};

export const FlatCardsGrid = ({ data, parentField }) => {
    // {console.log('data.highlightColor '+data)}
  return (
    <Section color={data.color} className="pb-12  bg-white">
    {  /* remarkPlugins={[remarkGfm]} */ }
    {/* <ReactMarkdown remarkPlugins={[gfm]} children={markdown} /> */}
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
  iconShown: true,
  link: ""
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
        {
          type: "boolean",
          label: "Show Icon ?",
          name: "iconShown",
        },
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
