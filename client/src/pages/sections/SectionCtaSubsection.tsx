import React from "react";
import { Button } from "@/components/ui/button";

const headingWords = [
  {
    text: "Start",
    left: "left-[calc(50.00%_-_347px)]",
    width: "w-36",
    fontSize: "text-6xl",
  },
  {
    text: "Your",
    left: "left-[calc(50.00%_-_191px)]",
    width: "w-[125px]",
    fontSize: "text-[57.5px]",
  },
  {
    text: "AI",
    left: "left-[calc(50.00%_-_53px)]",
    width: "w-[59px]",
    fontSize: "text-6xl",
  },
  {
    text: "Automation",
    left: "left-[calc(50.00%_+_18px)]",
    width: "w-[329px]",
    fontSize: "text-[59.4px]",
  },
  {
    text: "Journey",
    left: "left-[calc(50.00%_-_203px)]",
    width: "w-[226px]",
    fontSize: "text-[58.5px]",
    top: "top-[60px]",
  },
  {
    text: "Today",
    left: "left-[calc(50.00%_+_36px)]",
    width: "w-[166px]",
    fontSize: "text-[57.1px]",
    top: "top-[60px]",
  },
];

export const SectionCtaSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24">
      <div className="absolute w-[calc(100%_-_645px)] h-[80px] top-px left-[323px] rotate-[119.99deg] bg-[url(/figmaAssets/circle-image.png)] bg-cover bg-[50%_50%]" />

      <div className="relative w-full">
        <div className="flex flex-col gap-6 mb-20">
          <div className="relative h-[120px]">
            {headingWords.map((word, index) => (
              <div
                key={index}
                className={`absolute ${word.top || "top-0"} ${word.left} ${word.width} h-[60px] flex justify-center`}
              >
                <div
                  className={`-mt-2 h-[75px] ml-[0.2px] font-medium ${word.fontSize} text-center leading-[60px] flex items-center justify-center [font-family:'Inter',Helvetica] text-white tracking-[0]`}
                >
                  {word.text}
                </div>
              </div>
            ))}
          </div>

          <p className="ml-[4.8px] h-[26px] w-[612.87px] self-center text-base text-center leading-[26px] whitespace-nowrap flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white tracking-[0]">
            Sign up for Fusion AI and let AI handle your routine tasks—no credit
            card needed.
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button className="w-[177.25px] h-[50px] relative rounded-xl p-0 overflow-visible h-auto">
            <div className="absolute w-[calc(100%_-_18px)] -top-1 left-[9px] h-[47px] rounded-[103.13px] blur-[1.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_53%,rgba(140,54,2,1)_100%)]" />

            <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-[linear-gradient(175deg,rgba(255,137,24,1)_28%,rgba(162,41,4,1)_54%,rgba(0,0,0,1)_68%,rgba(0,152,243,1)_100%)]" />

            <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-black rounded-xl" />

            <span className="relative z-10 w-[137px] h-[26px] flex overflow-hidden">
              <span className="flex items-center justify-center w-[138.62px] h-[26px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                Get Started - Free
              </span>
            </span>

            <div className="absolute w-full top-px left-0 h-3 bg-[#da4e24] rounded-[94.63px] blur-[5px] opacity-60" />
          </Button>

          <Button
            variant="outline"
            className="w-[179.53px] h-[50px] rounded-xl border border-solid border-[#ffffff33] bg-transparent hover:bg-transparent h-auto"
          >
            <span className="w-[95.53px] flex overflow-hidden">
              <span className="flex items-center justify-center w-[95.88px] h-[26px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                View Pricing
              </span>
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
