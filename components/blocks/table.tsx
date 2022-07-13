import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
const ReactMarkdown = require('react-markdown')
const gfm = require('remark-gfm')


const markdown = `| Subset | [as-en <sub>(4.72 MB)</sub>](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/asm.zip) | [bn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ben.zip) <sub>(31.5 MB)</sub> | [brx-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/brx.zip) <sub>(0.933 MB)</sub> | [gu-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/guj.zip) <sub>(29.5 MB)</sub> | [hi-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/hin.zip) <sub>(31.4 MB)</sub> | [kn-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kan.zip) <sub>(83.7 MB)</sub> | [ks-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kas.zip) <sub>(1.1 MB)</sub> | [kok-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/kok.zip) <sub>(16.6 MB)</sub> | [mai-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mai.zip) <sub>(6.74 MB)</sub> | [ml-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mal.zip) <sub>(125 MB)</sub> | [mni-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mni.zip) <sub>(0.313 MB)</sub> | [mr-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/mar.zip) <sub>(39.9 MB)</sub> | [ne-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/nep.zip) <sub>(67 MB)</sub> | [or-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/ori.zip) <sub>(9.09 MB)</sub> | [pa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/pan.zip) <sub>(12.1 MB)</sub> | [sa-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/san.zip) <sub>(56 MB)</sub> | [sd-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/sid.zip) <sub>(1.37 MB)</sub> | [ta-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tam.zip) <sub>(92.7 MB)</sub> | [te-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/tel.zip) <sub>(69.1 MB)</sub> | [ur-en](https://huggingface.co/datasets/ai4bharat/Aksharantar/blob/main/urd.zip) <sub>(17 MB)</sub> |
|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| Training | 179K | 1231K | 36K | 1143K | 1299K | 2907K | 47K | 613K | 283K | 4101K | 10K | 1453K | 2397K | 346K | 515K | 1813K | 60K | 3231K | 2430K | 699K |
| Validation | 4K | 11K | 3K | 12K | 6K | 7K | 4K | 4K | 4K | 8K | 3K | 8K | 3K | 3K | 9K | 3K | 8K | 9K | 8K | 12K |
| Test | 5531 | 5009 | 4136 | 7768 | 5693 | 6396 | 7707 | 5093 | 5512 | 6911 | 4925 | 6573 | 4133 | 4256 | 4316 | 5334 | - | 4682 | 4567 | 4463 |
`

export const Table = ({ data, parentField = "" }) => {
  const [show, setShow] = useState(true);

  const handleShow = () =>
  {
    setShow(false);
    sessionStorage.setItem('isShown', 'false');
  }
   return (
    <>
    {show &&
    <Section color={data.color}>
 
 <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />

    </Section>
    }
    </>
  )

};

export const tableBlockSchema: TinaTemplate = {
  name: "table",
  label: "Table",
  ui: {
    previewSrc: "/blocks/testimonial.png",
    defaultItem: {
      header: "Impact",
      title: "Data",
      description: "Curate and create the largest public datasets across tasks and languages",
      color: "default",
      highlightColor: "cyan",
    },
  },
  fields: [
    {
      type: "string",
      ui: {
        component: "textarea",
      },
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
