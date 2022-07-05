import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { FeaturesAlt } from "./blocks/featuresalt";
import { FeaturesAlt2 } from "./blocks/featuresalt2";
import { FeaturesAlt3 } from "./blocks/featuresalt3";
import { Video } from "./blocks/video";
import { FlatCardGrid } from "./blocks/flatCardGrid";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";

export const Blocks = (props: Omit<Page, "id" | "_sys" | "_values">) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PageBlocksContent":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Content data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                // case "PageBlocksVideo":
                // return (
                //   <div
                //     data-tinafield={`blocks.${i}`}
                //     key={i + block.__typename}
                //   >
                //     <Video data={block} parentField={`blocks.${i}`} />
                //   </div>
                // );
              case "PageBlocksHero":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksFeatures":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Features data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksFeaturesAlt":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <FeaturesAlt data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksFeaturesAlt2":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <FeaturesAlt2 data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                  // case "PageBlocksFeaturesAlt3":
                  //   return (
                  //     <div
                  //       data-tinafield={`blocks.${i}`}
                  //       key={i + block.__typename}
                  //     >
                  //       <FeaturesAlt3 data={block} parentField={`blocks.${i}`} />
                  //     </div>
                  //   );
                    // case "PageBlocksFlatCardGrid":
                    // return (
                    //   <div
                    //     data-tinafield={`blocks.${i}`}
                    //     key={i + block.__typename}
                    //   >
                    //     <FlatCardGrid data={block} parentField={`blocks.${i}`} />
                    //   </div>
                    // );
                    case "PageBlocksTestimonial":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Testimonial data={block} parentField={`blocks.${i}`} />
                  </div>
                );
             
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
