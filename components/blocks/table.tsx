import React, { useState } from "react";
import { Container } from "../util/container";
import { Section } from "../util/section";
import type { TinaTemplate } from "tinacms";
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

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
 
      
 <table className="table-auto">
  <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

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
