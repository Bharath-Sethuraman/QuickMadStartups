import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    title: "Seamless Integrations",
    description:
      "Integrate Slack, HubSpot, Zendesk & more—\nautomate data flow instantly.",
    image: "/figmaAssets/fluence-ai-chart.png",
    gridClass: "col-span-1",
  },
  {
    title: "Conversational Actions",
    description:
      "Create records, assign tasks & queue emails with a simple\nprompt in seconds flat.",
    image: "/figmaAssets/fluence-ai-chart-1.png",
    gridClass: "col-span-2",
  },
  {
    title: "Visual Workflow Designer",
    description:
      "Drag & drop AI actions to build workflows visually— no\ncoding required.",
    image: "/figmaAssets/fluence-ai-chart-2.png",
    gridClass: "col-span-2",
  },
  {
    title: "Multi‑Channel Automation",
    description:
      "Trigger email, SMS & chat messages\nautomatically on schedule.",
    image: "/figmaAssets/man-using-laptop.png",
    gridClass: "col-span-1",
  },
];

export const SectionBentoSubsection = (): JSX.Element => {
  return (
    <section className="flex justify-center w-full py-[100px]">
      <div className="w-full max-w-[1140px] px-4">
        <div className="flex flex-col gap-6 mb-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)] p-[1px]">
                <Badge className="h-7 bg-black rounded-[14px] px-3 hover:bg-black">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                    AI-DRIVEN FEATURES
                  </span>
                </Badge>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[58.5px] text-center tracking-[0] leading-[60px]">
                Build, scale and manage
              </h2>
              <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[58.2px] text-center tracking-[0] leading-[60px]">
                entire AI workforce
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[7px]">
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
              Fusion AI helps you tackle data bottlenecks, streamline analysis,
              and make
            </p>
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
              smarter decisions with ease.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-6">
            {featureCards.slice(0, 2).map((card, index) => (
              <Card
                key={index}
                className={`${card.gridClass} bg-[#191919] border-none rounded-2xl overflow-hidden`}
              >
                <CardContent className="p-px">
                  <div className="bg-black rounded-2xl p-2 h-full flex flex-col">
                    <div
                      className="rounded-xl bg-cover bg-center bg-no-repeat flex-1 min-h-[322px]"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="flex flex-col gap-[19px] p-[22px] pt-6">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-[23.4px] tracking-[0] leading-8">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-pre-line">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6">
            {featureCards.slice(2, 4).map((card, index) => (
              <Card
                key={index + 2}
                className={`${card.gridClass} bg-[#191919] border-none rounded-2xl overflow-hidden`}
              >
                <CardContent className="p-px">
                  <div className="bg-black rounded-2xl p-2 h-full flex flex-col">
                    <div
                      className="rounded-xl bg-cover bg-center bg-no-repeat flex-1 min-h-[322px]"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                    <div className="flex flex-col gap-[19px] p-[22px] pt-6">
                      <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-[23.4px] tracking-[0] leading-8">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] whitespace-pre-line">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
