import React from "react";
import type { Page } from "../.tina/__generated__/types";
import { Content } from "./blocks/content";
import { Features } from "./blocks/features";
import { FeaturesAlt } from "./blocks/featuresalt";
import { FeaturesAlt2 } from "./blocks/featuresalt2";
import { Hero } from "./blocks/hero";
import { Testimonial } from "./blocks/testimonial";
import { VideoCarousel } from "./blocks/videoCarousel";
import { FlatCardsGrid } from "./blocks/flatCardsGrid";
import { Banner } from "./blocks/banner";
import { FAQ } from "./blocks/faq";
import { Quote } from "./blocks/quote";
import { PhotoCardsGrid2 } from "./blocks/photoCards2";
import { PhotoCardSingle } from "./blocks/photoCardSingle";
import { TeamCardsGrid } from "./blocks/teamCardsGrid";
import { JobCardsGrid } from "./blocks/jobCards";
import { PDFEmbed } from "./blocks/pdfEmbed";

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
                case "PageBlocksVideoCarousel":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <VideoCarousel data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                  case "PageBlocksPdfEmbed":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <PDFEmbed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksBanner":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Banner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PageBlocksTestimonial":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Testimonial data={block} parentField={`blocks.${i}`} />
                  </div>
                );
                case "PageBlocksFaq":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <FAQ data={block} parentField={`blocks.${i}`} />
                  </div>
                );

                case "PageBlocksQuote":
                return (
                  <div
                    data-tinafield={`blocks.${i}`}
                    key={i + block.__typename}
                  >
                    <Quote data={block} parentField={`blocks.${i}`} />
                  </div>
                );
            
                case "PageBlocksFlatCardsGrid":
                  return (
                    <div
                      data-tinafield={`blocks.${i}`}
                      key={i + block.__typename}
                    >
                      <FlatCardsGrid data={block} parentField={`blocks.${i}`} />
                    </div>
                  );
                  case "PageBlocksPhotoCardsGrid2":
                    return (
                      <div
                        data-tinafield={`blocks.${i}`}
                        key={i + block.__typename}
                      >
                        <PhotoCardsGrid2 data={block} parentField={`blocks.${i}`} />
                      </div>
                    );
                    case "PageBlocksPhotoCardSingle":
                      return (
                        <div
                          data-tinafield={`blocks.${i}`}
                          key={i + block.__typename}
                        >
                          <PhotoCardSingle data={block} parentField={`blocks.${i}`} />
                        </div>
                      );
                    case "PageBlocksTeamCardsGrid":
                      return (
                        <div
                          data-tinafield={`blocks.${i}`}
                          key={i + block.__typename}
                        >
                          <TeamCardsGrid data={block} parentField={`blocks.${i}`} />
                        </div>
                      );
                    case "PageBlocksJobCardsGrid":
                      return (
                        <div
                          data-tinafield={`blocks.${i}`}
                          key={i + block.__typename}
                        >
                          <JobCardsGrid data={block} parentField={`blocks.${i}`} />
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
