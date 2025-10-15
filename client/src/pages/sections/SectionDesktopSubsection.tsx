import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "Seamless Slack and Salesforce integrations keep our team in sync. Fusion AI ensures everyone's on the",
    author: "Mat Mursmark",
    role: "Chief Growth Officer",
    image: "/figmaAssets/testimonial-author-headshot.png",
    quoteIcon: "/figmaAssets/svg-4.svg"
  },
  {
    quote: "Fusion AI cut our onboarding time by 50%—setup was effortless, and our AI agents are now core to daily ops.":
    role: "Performance Marketer",
    image: "/figmaAssets/testimonial-author-headshot-1.png",
    quoteIcon: "/figmaAssets/svg.svg"
  },
  {
    quote: "Automating lead follow‑ups boosted our conversion rate by 30% without adding headcount. Fusion AI is a game‑changer.":
    role: "Chief Growth Officer",
    image: "/figmaAssets/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-l.png",
    quoteIcon: "/figmaAssets/svg-1.svg"
  },
  {
    quote: "Real‑time insights from AI agents help us spot trends before they emerge—our decisions are smarter and faster.":
    role: "Head of Analytics",
    image: "/figmaAssets/testimonial-author-headshot-2.png",
    quoteIcon: "/figmaAssets/svg-3.svg"
  }
];

const additionalCards = [
  "/figmaAssets/item---item.svg",
  "/figmaAssets/item---item-2.svg",
  "/figmaAssets/item---item-6.svg",
  "/figmaAssets/item---item-1.svg",
  "/figmaAssets/item---item-10.svg",
  "/figmaAssets/item---item-9.svg",
  "/figmaAssets/item---item-4.svg",
  "/figmaAssets/item---item-3.svg",
  "/figmaAssets/item---item-8.svg",
  "/figmaAssets/item---item-7.svg",
  "/figmaAssets/item---item-5.svg"
];

export const SectionDesktopSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
<div className="absolute inset-0 mx-auto max-w-[1140px] bg-[url(/figmaAssets/background-shape---bacground-gradient-shape.png)] bg-cover bg-center opacity-50" />
<div className="relative mx-auto max-w-[1140px] px-4">
<div className="flex flex-col gap-2 mb-16">
<div className="w-fit rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)] p-[1px]">
<div className="bg-black rounded-[14px] px-3 py-1.5">
<span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4">
SUCCESS STORIES
              </span>
</div>
</div>
<h2 className="[font-family:'Inter',Helvetica] font-medium text-white text-[59.6px] tracking-[0] leading-[60px]">
Hear from our customers <br />
&amp; their success stories
          </h2>
</div>
<div className="relative">
<div className="overflow-hidden">
<div className="flex gap-2.5 ml-[-163.3px] mr-[163.3px]">
{testimonials.map((testimonial, index) => (
                <Card 
                  key={`testimonial-${index}`}
                  className={`flex-shrink-0 w-[364px] ${index === 3 ? 'h-[423px]' : 'h-[424px]'} ${index === 3 ? 'mt-[0.5px]' : ''} bg-[#ffffff05] rounded-2xl backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)] border border-solid border-[#ffffff26]`}
                >
<CardContent className="p-10 flex flex-col justify-between h-full">
<div className="flex flex-col gap-[33px]">
<img
                        className="w-10 h-10"
                        alt="Quote icon"
                        src={testimonial.quoteIcon}
                      />
<p className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px]">
&quot;{testimonial.quote}
                      </p>
</div>
<div className="flex items-center gap-4">
<div className="h-[60px] w-[60px] flex-shrink-0 bg-black rounded-lg overflow-hidden">
<img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
</div>
<div className="flex flex-col gap-[7px]">
<div className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px]">
{testimonial.author}
                        </div>
<div className="[font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px]">
{testimonial.role}
                        </div>
</div>
</div>
</CardContent>
</Card>
))}

              {additionalCards.map((src, index) => (
                <img
                  key={`additional-${index}`}
                  className={`flex-shrink-0 w-[364px] ${[4, 8, 13].includes(index) ? 'h-[423px] mt-[0.5px]' : 'h-[424px]'}`}
                  alt="Item item"
                  src={src}
                />
))}
            </div>
</div>
<div className="absolute left-0 top-0 h-full w-[100px] bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
<div className="absolute right-0 top-0 h-full w-[100px] bg-[linear-gradient(270deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
</div>
</div>
</section>
);
};