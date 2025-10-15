import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1.",
    title: "Select a trigger",
    description: "Choose an event or schedule that kicks off your workflow.",
    image: "/figmaAssets/feature-card-imagery.png",
    imageType: "background",
  },
  {
    number: "2.",
    title: "Connect your apps",
    description: "Sync Fusion AI with your tools—CRM, email, Slack, and more.",
    image: "/figmaAssets/image-wrapper.svg",
    imageType: "img",
  },
  {
    number: "3.",
    title: "Let AI do the work",
    description: "Lets Fusion AI execute tasks automatically.",
    image: "/figmaAssets/bento-2--1----feature-card-imagery.png",
    imageType: "background",
  },
];

export const SectionHowItWorksSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center py-[100px]">
      <div className="w-full max-w-[1140px] px-4">
        <div className="flex flex-col items-center gap-12 mb-[162px]">
          <div className="flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)] p-[1px]">
            <div className="flex items-center justify-center bg-black rounded-[14px] px-3 py-1.5">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                AI-DRIVEN FEATURES
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-0">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[59.2px] text-center tracking-[0] leading-[60px]">
              Automate workflows in
            </h2>
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[58.6px] text-center tracking-[0] leading-[60px]">
              three simple steps
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="bg-black rounded-2xl border border-solid border-[#191919] overflow-hidden"
            >
              <CardContent className="p-2 flex flex-col">
                {step.imageType === "background" ? (
                  <div
                    className="w-full h-[284px] rounded-xl bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                ) : (
                  <img
                    className="w-full h-[284px] object-cover"
                    alt={step.title}
                    src={step.image}
                  />
                )}

                <div className="flex flex-col gap-[19px] p-5 pt-5">
                  <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-[22.7px] tracking-[0] leading-8 whitespace-nowrap">
                    {step.number}&nbsp;&nbsp;{step.title}
                  </h3>

                  <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
