import React from "react";
import { Badge } from "@/components/ui/badge";

const featureDescriptions = [
  {
    title: "Workflow:",
    description:
      "Drag-and-drop multi-step automations with triggers, AI actions, and rules—built visually in minutes.",
    opacity: "opacity-100",
  },
  {
    title: "Analytics:",
    description:
      "Real-time dashboards surface trends, bottlenecks, and ROI at a glance—for faster decisions.",
    opacity: "opacity-50",
  },
  {
    title: "Integration:",
    description:
      "One-click connectors and an open API sync CRM, chat, calendar, and more—everything stays in sync.",
    opacity: "opacity-50",
  },
];

const carouselDots = [{ active: true }, { active: false }, { active: false }];

export const DivWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col gap-[60px] py-16">
      <header className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)] p-[1px]">
            <Badge
              variant="secondary"
              className="h-7 px-3 bg-black rounded-[14px] border-0 hover:bg-black"
            >
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                PRODUCT FEATURES
              </span>
            </Badge>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-0 px-[112.5px]">
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[58.6px] text-center tracking-[0] leading-[60px]">
            Build Workflows, Track Insights,
          </h2>
          <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[58.6px] text-center tracking-[0] leading-[60px]">
            Connect Tools
          </h2>
        </div>
      </header>

      <div className="w-full flex flex-col items-center gap-8">
        <div className="w-full h-[655px] relative overflow-hidden">
          <img
            className="w-full h-full object-contain"
            alt="Images wrapper"
            src="/figmaAssets/images-wrapper.svg"
          />
        </div>

        <div className="flex gap-1">
          {carouselDots.map((dot, index) => (
            <div
              key={`dot-${index}`}
              className={`w-[60px] h-[3px] rounded-full ${dot.active ? "bg-[#da4e24]" : "bg-[#da4e2433]"}`}
            />
          ))}
        </div>

        <div className="w-full flex gap-[20px] justify-between">
          {featureDescriptions.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className={`flex-1 flex items-start justify-center ${feature.opacity} [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]`}
            >
              <p>
                <span className="font-bold">{feature.title}</span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
                  {" "}
                  {feature.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
