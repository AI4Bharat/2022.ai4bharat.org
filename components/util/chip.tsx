import * as React from "react";
import {
  BiCodeBlock,
  BiLike,
  BiMapAlt,
  BiPalette,
  BiPieChartAlt2,
  BiPin,
  BiShield,
  BiSlider,
  BiStore,
  BiTennisBall,
  BiTestTube,
  BiTrophy,
  BiUserCircle,
  BiBeer,
  BiChat,
  BiCloud,
  BiCoffeeTogo,
  BiWorld,
} from "react-icons/bi";
import { ImTrophy } from "react-icons/im";
import {
  HiAdjustments,
  HiBeaker,
  HiChartBar,
  HiChatAlt2,
  HiCloud,
  HiColorSwatch,
  HiLocationMarker,
  HiMap,
  HiShieldCheck,
  HiShoppingCart,
  HiTerminal,
  HiThumbUp,
  HiUser,
} from "react-icons/hi";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { FiAperture } from "react-icons/fi";
import { useTheme } from "../layout";
import { FaBeer, FaCoffee } from "react-icons/fa";
import TinaIconSvg from "../../public/tina.svg";
import AI4BharatIcon from "../../public/logo 1.svg";
import type { TinaField } from "tinacms";

const chipOptions = {
  comingSoon: { bi: BiCodeBlock, hi: HiTerminal },
  updated: { bi: BiLike, hi: HiThumbUp },
};

const chipColorClass: { [name: string]: { outline: string; filled: string } } =
  {
    blue: {
      outline: "text-blue-400",
      filled: "bg-blue-400 dark:bg-blue-500 text-blue-50",
    },
    green: {
      outline: "text-green-400",
      filled: "bg-green-400 dark:bg-green-500",
    },
    red: {
      outline: "text-red-400",
      filled: "bg-red-400 dark:bg-red-500",
    },
    pink: {
      outline: "text-pink-400",
      filled: "bg-pink-400 dark:bg-pink-500",
    },
    purple: {
      outline: "text-purple-400",
      filled: "bg-purple-400 dark:bg-purple-500",
    },
    orange: {
      outline: "text-orange-400",
      filled: "bg-orange-400 dark:bg-orange-500",
    },
    yellow: {
      outline: "text-yellow-400",
      filled: "bg-yellow-400 dark:bg-yellow-500",
    },
    white: {
      outline: "text-white opacity-80",
      filled: "bg-white-400 dark:bg-white-500",
    },
  };

const chipSizeClass = {
  xs: "w-6 h-6",
  small: "w-8 h-8",
  medium: "w-12 h-12",
  large: "w-14 h-14",
};

export const Chip = ({
  data,
  parentColor = "",
  className = "",
  tinaField = "",
}) => {
  const theme = useTheme();

   const chipName = data.name || Object.keys(chipOptions)[0];
  //  console.log('chipName '+ chipName);
  // const ChipSVG = chipOptions[chipName][theme.icon === "boxicon" ? "bi" : "hi"];

  const chipSizeClasses = data.size && chipSizeClass[data.size];

  /* Full class strings are required for Tailwind's just-in-time mode,
     I would love a better solution that doesn't require so much repetition */

  const chipColor = data.color
    ? data.color === "primary"
      ? theme.color
      : data.color
    : theme.color;

    // console.log('data.color '+data.color)
    // console.log(chipColorClass)

  if (data.style == "outline") {
    return (
      <div
        data-tinafield={tinaField}
        className={`relative z-10 inline-flex items-center justify-center flex-shrink-0 ${chipSizeClasses} rounded-full ${chipColorClass[chipColor].outline} ${className}`}
      >
        <div>{data.text}</div>
        {/* <ChipSVG className="w-2/3 h-2/3" /> */}
      </div>
    );
  } else {
    const chipColorClasses =
    chipColorClass[
   // parentColor === "primary" &&
    // (chipColor === theme.color || chipColor === "primary")
    //   ? "white"
    //   :
       chipColor
      ].filled;
      // {console.log(chipColorClasses)}
    return (
      
      <div>
  <span className="space-x-6 ml-16">
      <div className={`text-white ${chipColorClasses} uppercase w-min inline-block rounded mb-4 py-1 px-4 rounded-full text-xs font-semibold tracking-wider`}>{data.text}</div>
      
   </span>
      </div>
    );
  }
  // const chipColorClasses =
  // chipColorClass[
  //   parentColor === "primary" &&
  //   (chipColor === theme.color || chipColor === "primary")
  //     ? "white"
  //     : chipColor
  // ].filled;

  // {console.log('data.text '+data.text)}
  //   return(
  //    <span className="space-x-6 ml-16">
  //     <div className={`text-white ${chipColorClasses} uppercase w-min inline-block rounded mb-4 py-1 px-4 rounded-full text-xs font-semibold tracking-wider`}>{data.text}</div>
  //     <div className="bg-orange-200 text-white w-min inline-block rounded mb-4 py-1 px-4 rounded-full text-xs font-semibold">hello</div>
  //  </span>
  //   );
};

const formatFieldLabel = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const chipSchema: TinaField = {
  type: "object",
  label: "Chip",
  name: "chip",
  fields: [
    {
      type: "string",
      label: "Color",
      name: "color",
      options: Object.keys(chipColorClass).map((color) => ({
        label: formatFieldLabel(color),
        value: color,
      })),
    },
    {
      name: "style",
      label: "Style",
      type: "string",
      options: [
        {
          label: "Filled",
          value: "filled",
        },
        {
          label: "Outline",
          value: "outline",
        },
      ],
    },
    {
      type: "string",
      label: "Chip Text",
      name: "text",
    },
  ],
};
