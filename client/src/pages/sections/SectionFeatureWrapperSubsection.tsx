import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const featureCards = [
  {
    title: "Instant, One-Command Actions",
    description:
      "Type an action once—Fusion AI executes it across Slack, WhatsApp, HubSpot, Calendar, and more.",
    imagePosition: "right",
    imageSrc: "/figmaAssets/image---image-of-dashbaord.png",
    features: [
      {
        icon: "/figmaAssets/icon---feature-card-icon-2.png",
        text: "Draft & send multi-channel messages",
      },
      {
        icon: "/figmaAssets/icon---feature-card-icon-3.png",
        text: "Create CRM contacts on the fly",
      },
      {
        icon: "/figmaAssets/icon---feature-card-icon-4.png",
        text: "Cancel meetings or raise issues instantly",
      },
    ],
  },
  {
    title: "No-Code Workflow Builder",
    description:
      "Design complex, multi-step automations with drag-and-drop ease—no coding required.",
    imagePosition: "left",
    imageSrc: "/figmaAssets/image---image-of-dashbaord-1.png",
    features: [
      {
        icon: "/figmaAssets/icon---feature-card-icon-5.png",
        text: "Visual workflow canvas",
      },
      {
        icon: "/figmaAssets/icon---feature-card-icon-6.png",
        text: "Pre-built action blocks",
      },
      {
        icon: "/figmaAssets/icon---feature-card-icon-7.png",
        text: "Conditional logic & branching",
      },
    ],
  },
  {
    title: "Natural-Language Interaction",
    description:
      "Chat with your AI agents to run tasks, query data, or generate content—just type what you need.",
    imagePosition: "right",
    imageSrc: "/figmaAssets/image---image-of-dashbaord-2.png",
    features: [
      {
        icon: "/figmaAssets/icon---feature-card-icon-8.png",
        text: "Context-aware Q&A",
      },
      {
        icon: "/figmaAssets/icon---feature-card-icon-9.png",
        text: "Instant task execution",
      },
      {
        icon: "/figmaAssets/icon---feature-card-icon-10.png",
        text: "Follow-up action chaining",
      },
    ],
  },
];

export const SectionFeatureWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1140px] mx-auto">
        <header className="flex flex-col gap-6 mb-[100px]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)] p-[1px]">
                <div className="flex items-center justify-center bg-black rounded-[14px] px-3 py-1.5">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                    AI-DRIVEN FEATURES
                  </span>
                </div>
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
              Fluence AI helps you tackle data bottlenecks, streamline analysis,
              and make
            </p>
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-7">
              smarter decisions with ease.
            </p>
          </div>
        </header>

        <div className="flex flex-col gap-[100px]">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="bg-black rounded-2xl border border-[#191919] overflow-hidden"
            >
              <CardContent className="p-0">
                <div
                  className={`flex ${card.imagePosition === "left" ? "flex-row-reverse" : "flex-row"} min-h-[526px]`}
                >
                  <div className="flex-1 flex items-center p-6">
                    <div className="flex flex-col gap-8 max-w-[516px] ml-11">
                      <div className="flex flex-col gap-[26.8px]">
                        <h3 className="[font-family:'Inter',Helvetica] font-medium text-white text-[43.5px] tracking-[0] leading-[52.8px]">
                          {card.title.split(" ").slice(0, 2).join(" ")}
                          <br />
                          {card.title.split(" ").slice(2).join(" ")}
                        </h3>
                        <p className="opacity-80 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
                          {card.description.split("—")[0]}—
                          <br />
                          {card.description.split("—")[1]}
                        </p>
                      </div>

                      <div className="flex flex-col gap-4">
                        {card.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <div className="w-8 h-8 rounded overflow-hidden border border-[#191919] flex-shrink-0">
                              <img
                                src={feature.icon}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7">
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="w-[46.65%] flex-shrink-0">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
