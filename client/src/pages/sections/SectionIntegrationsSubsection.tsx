import React from "react";
import { Button } from "@/components/ui/button";

export const SectionIntegrationsSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full py-16">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[477px] h-[477px] rotate-[-105.80deg] bg-[url(/figmaAssets/globe-image---gradient-circle-image-1.png)] bg-cover bg-[50%_50%]" />

      <div className="relative flex flex-col items-center gap-8">
        <div className="flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)] p-[1px]">
          <div className="flex items-center justify-center px-6 py-1.5 bg-black rounded-[14px]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
              POWERFUL INTEGRATIONS
            </span>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <img
            className="w-full max-w-[1140px] h-[196px]"
            alt="Ticker wrapper"
            src="/figmaAssets/ticker-wrapper.svg"
          />
        </div>

        <Button
          variant="outline"
          className="h-[50px] w-[165px] rounded-xl border-[#ffffff33] bg-transparent hover:bg-transparent"
        >
          <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px]">
            Explore All
          </span>
        </Button>
      </div>
    </section>
  );
};
