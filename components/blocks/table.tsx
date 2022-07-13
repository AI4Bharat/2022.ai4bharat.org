/* eslint @typescript-eslint/no-var-requires: "off" */
import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
const ReactMarkdown = require('react-markdown');
const gfm = require('remark-gfm');
const rehypeRaw = require('rehype-raw');


const input = `<table class="tg"> <thead> <tr> <th class="tg-9wq8"></th> <th class="tg-9wq8" colspan="10">WAT2021</th> <th class="tg-9wq8" colspan="7">WAT2020</th> <th class="tg-9wq8" colspan="3">WMT</th> <th class="tg-9wq8">UFAL</th> <th class="tg-9wq8">PMI</th> <th class="tg-9wq8" colspan="11">FLORES-101</th> </tr> </thead> <tbody> <tr> <td class="tg-9wq8"></td> <td class="tg-9wq8">bn</td> <td class="tg-9wq8">gu</td> <td class="tg-9wq8">hi</td> <td class="tg-9wq8">kn</td> <td class="tg-9wq8">ml</td> <td class="tg-9wq8">mr</td> <td class="tg-9wq8">or</td> <td class="tg-9wq8">pa</td> <td class="tg-9wq8">ta</td> <td class="tg-9wq8">te</td> <td class="tg-9wq8">bn</td> <td class="tg-9wq8">gu</td> <td class="tg-9wq8">hi</td> <td class="tg-9wq8">ml</td> <td class="tg-9wq8">mr</td> <td class="tg-9wq8">ta</td> <td class="tg-9wq8">te</td> <td class="tg-9wq8">hi</td> <td class="tg-9wq8">gu</td> <td class="tg-9wq8">ta</td> <td class="tg-9wq8">ta</td> <td class="tg-9wq8">as</td> <td class="tg-9wq8">as</td> <td class="tg-9wq8">bn</td> <td class="tg-9wq8">gu</td> <td class="tg-9wq8">hi</td> <td class="tg-9wq8">kn</td> <td class="tg-9wq8">ml</td> <td class="tg-9wq8">mr</td> <td class="tg-9wq8">or</td> <td class="tg-9wq8">pa</td> <td class="tg-9wq8">ta</td> <td class="tg-9wq8">te</td> </tr> <tr> <td class="tg-9wq8">IN-EN</td> <td class="tg-9wq8">29.6</td> <td class="tg-9wq8">40.3</td> <td class="tg-9wq8">43.9</td> <td class="tg-9wq8">36.4</td> <td class="tg-9wq8">34.6</td> <td class="tg-9wq8">33.5</td> <td class="tg-9wq8">34.4</td> <td class="tg-9wq8">43.2</td> <td class="tg-9wq8">33.2</td> <td class="tg-9wq8">36.2</td> <td class="tg-9wq8">20.0</td> <td class="tg-9wq8">24.1</td> <td class="tg-9wq8">23.6</td> <td class="tg-9wq8">20.4</td> <td class="tg-9wq8">20.4</td> <td class="tg-9wq8">18.3</td> <td class="tg-9wq8">18.5</td> <td class="tg-9wq8">29.7</td> <td class="tg-9wq8">25.1</td> <td class="tg-9wq8">24.1</td> <td class="tg-9wq8">30.2</td> <td class="tg-9wq8">29.9</td> <td class="tg-9wq8">23.3</td> <td class="tg-9wq8">32.2</td> <td class="tg-9wq8">34.3</td> <td class="tg-9wq8">37.9</td> <td class="tg-9wq8">28.8</td> <td class="tg-9wq8">31.7</td> <td class="tg-9wq8">30.8</td> <td class="tg-9wq8">30.1</td> <td class="tg-9wq8">35.8</td> <td class="tg-9wq8">28.6</td> <td class="tg-9wq8">33.5</td> </tr> <tr> <td class="tg-9wq8">EN-IN</td> <td class="tg-9wq8">15.3</td> <td class="tg-9wq8">25.6</td> <td class="tg-9wq8">38.6</td> <td class="tg-9wq8">19.1</td> <td class="tg-9wq8">14.7</td> <td class="tg-9wq8">20.1</td> <td class="tg-9wq8">18.9</td> <td class="tg-9wq8">33.1</td> <td class="tg-9wq8">13.5</td> <td class="tg-9wq8">14.1</td> <td class="tg-9wq8">11.4</td> <td class="tg-9wq8">15.3</td> <td class="tg-9wq8">20.0</td> <td class="tg-9wq8">7.2</td> <td class="tg-9wq8">12.7</td> <td class="tg-9wq8">6.2</td> <td class="tg-9wq8">7.6</td> <td class="tg-9wq8">25.5</td> <td class="tg-9wq8">17.2</td> <td class="tg-9wq8">9.9</td> <td class="tg-9wq8">10.9</td> <td class="tg-9wq8">11.6</td> <td class="tg-9wq8">6.9</td> <td class="tg-9wq8">20.3</td> <td class="tg-9wq8">22.6</td> <td class="tg-9wq8">34.5</td> <td class="tg-9wq8">18.9</td> <td class="tg-9wq8">16.3</td> <td class="tg-9wq8">16.1</td> <td class="tg-9wq8">13.9</td> <td class="tg-9wq8">26.9</td> <td class="tg-9wq8">16.3</td> <td class="tg-9wq8">22.0</td> </tr> </tbody> </table>`


const markdown = `| Subset | [as-en <sub>(4.72 MB)</sub>](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/asm.zip) | [bn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ben.zip) <sub>(31.5 MB)</sub> | [brx-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/brx.zip) <sub>(0.933 MB)</sub> | [gu-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/guj.zip) <sub>(29.5 MB)</sub> | [hi-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/hin.zip) <sub>(31.4 MB)</sub> | [kn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kan.zip) <sub>(83.7 MB)</sub> | [ks-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kas.zip) <sub>(1.1 MB)</sub> | [kok-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kok.zip) <sub>(16.6 MB)</sub> | [mai-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mai.zip) <sub>(6.74 MB)</sub> | [ml-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mal.zip) <sub>(125 MB)</sub> | [mni-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mni.zip) <sub>(0.313 MB)</sub> | [mr-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mar.zip) <sub>(39.9 MB)</sub> | [ne-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/nep.zip) <sub>(67 MB)</sub> | [or-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ori.zip) <sub>(9.09 MB)</sub> | [pa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/pan.zip) <sub>(12.1 MB)</sub> | [sa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/san.zip) <sub>(56 MB)</sub> | [sd-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/sid.zip) <sub>(1.37 MB)</sub> | [ta-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tam.zip) <sub>(92.7 MB)</sub> | [te-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tel.zip) <sub>(69.1 MB)</sub> | [ur-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/urd.zip) <sub>(17 MB)</sub> |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| Training | 179K | 1231K | 36K | 1143K | 1299K | 2907K | 47K | 613K | 283K | 4101K | 10K | 1453K | 2397K | 346K | 515K | 1813K | 60K | 3231K | 2430K | 699K |
| Validation | 4K | 11K | 3K | 12K | 6K | 7K | 4K | 4K | 4K | 8K | 3K | 8K | 3K | 3K | 9K | 3K | 8K | 9K | 8K | 12K |
| Test | 5531 | 5009 | 4136 | 7768 | 5693 | 6396 | 7707 | 5093 | 5512 | 6911 | 4925 | 6573 | 4133 | 4256 | 4316 | 5334 | - | 4682 | 4567 | 4463 |
`

export const Table = ({ data, parentField = "" }) => {

   return (
    <>
   
    <Section color={data.color}>
 <div className="text-center overflow-auto px-2 mx-auto">
  {data.markdownTable &&
 <ReactMarkdown remarkPlugins={[gfm]} children={data.markdownTable} />
  }
  {data.markupTable &&
  <ReactMarkdown rehypePlugins={[rehypeRaw]} children={data.markupTable} /> 
  }
 </div>
    </Section>

    </>
  )

};

export const tableBlockSchema: TinaTemplate = {
  name: "table",
  label: "Table",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      color: "default",
    },
  },
  fields: [

    {
        type: "string",
        label: "Markdown Table",
        name: "markdownTable",
        ui: {
            component: "textarea",
        },
    },
    {
      type: "string",
      label: "Markup Table",
      name: "markupTable",
      ui: {
          component: "textarea",
      },
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
