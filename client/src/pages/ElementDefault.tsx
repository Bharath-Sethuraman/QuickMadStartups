import React from "react";
import { Button } from "@/components/ui/button";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FooterFooterSubsection } from "./sections/FooterFooterSubsection";
import { HeaderHeroSubsection } from "./sections/HeaderHeroSubsection";
import { SectionBentoSubsection } from "./sections/SectionBentoSubsection";
import { SectionCtaSubsection } from "./sections/SectionCtaSubsection";
import { SectionDesktopSubsection } from "./sections/SectionDesktopSubsection";
import { SectionDesktopWrapperSubsection } from "./sections/SectionDesktopWrapperSubsection";
import { SectionFeatureSubsection } from "./sections/SectionFeatureSubsection";
import { SectionFeatureWrapperSubsection } from "./sections/SectionFeatureWrapperSubsection";
import { SectionHowItWorksSubsection } from "./sections/SectionHowItWorksSubsection";
import { SectionIntegrationsSubsection } from "./sections/SectionIntegrationsSubsection";

const navigationItems = [
  { label: "About us", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integration", href: "#integration" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
  { label: "Waitlist", href: "#waitlist" },
];

export const ElementDefault = (): JSX.Element => {
  return (
    <div className="bg-[linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] w-full min-w-[1440px] flex relative">
      <div className="flex-1 relative bg-black">
        <div className="absolute w-full h-[847.69px] bottom-0 left-0 bg-[url(/figmaAssets/background-gradient---bacground-gradient-shape.png)] bg-cover bg-[50%_50%]" />

        <nav className="fixed top-0 left-0 w-full h-[116px] flex justify-center z-[2]">
          <div className="mt-7 w-[1140px] h-[60px] relative bg-[#00000026] rounded-xl overflow-hidden backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
            <div className="absolute w-[calc(100%_-_32px)] top-[calc(50.00%_-_20px)] left-4 h-10 flex gap-[163.9px]">
              <div className="w-[187.38px] h-10 relative">
                <div className="bg-[url(/figmaAssets/circle-image-2.png)] absolute w-[calc(100%_-_147px)] h-full top-0 left-0 bg-cover bg-[50%_50%]" />
                <div className="absolute top-1 left-[52px] w-[136px] h-9 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-white text-[31px] tracking-[0] leading-8 whitespace-nowrap">
                  Fusion Ai
                </div>
              </div>

              <div className="h-[26px] w-[476.87px] self-center relative">
                {navigationItems.map((item, index) => {
                  const leftPositions = [
                    "left-0",
                    "left-[92px]",
                    "left-[170px]",
                    "left-[277px]",
                    "left-[335px]",
                    "left-[420px]",
                  ];
                  const widths = [
                    "w-[calc(100%_-_408px)]",
                    "w-[calc(100%_-_423px)]",
                    "w-[calc(100%_-_394px)]",
                    "w-[calc(100%_-_443px)]",
                    "w-[calc(100%_-_416px)]",
                    "w-[calc(100%_-_420px)]",
                  ];

                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={`${widths[index]} top-0 ${leftPositions[index]} h-[26px] overflow-hidden opacity-70 absolute flex hover:opacity-100 transition-opacity`}
                    >
                      <div className="flex items-center justify-center mt-[3px] h-5 [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                        {item.label}
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="mt-px w-[115.89px] h-[38px] relative rounded-lg">
                <div className="absolute w-[calc(100%_-_18px)] -top-1 left-[9px] h-9 rounded-[66.94px] blur-[1.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_53%,rgba(140,54,2,1)_100%)]" />
                <div className="w-full left-0 rounded-lg bg-[linear-gradient(174deg,rgba(255,137,24,1)_28%,rgba(162,41,4,1)_54%,rgba(0,0,0,1)_68%,rgba(0,152,243,1)_100%)] absolute h-full top-0" />
                <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-black rounded-lg" />
                <Button className="absolute top-[calc(50.00%_-_13px)] left-[calc(50.00%_-_46px)] w-[92px] h-[26px] bg-transparent hover:bg-transparent p-0 h-auto">
                  <div className="flex items-center justify-center w-[92.28px] h-[23px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                    Get Started
                  </div>
                </Button>
                <div className="absolute w-full top-px left-0 h-[7px] bg-[#da4e24] rounded-[61.45px] blur-[5px] opacity-60" />
              </div>
            </div>
            <div className="absolute w-full h-full top-0 left-0 rounded-xl border border-solid border-[#ffffff1a]" />
          </div>
        </nav>

        <Button className="fixed left-[1278px] top-7 w-[142px] h-9 z-[2] bg-white hover:bg-white/90 text-black rounded-lg shadow-[0px_2px_4px_#00000026] h-auto p-0">
          <div className="flex items-center justify-center w-full h-full [font-family:'Inter',Helvetica] font-medium text-[13px] tracking-[0] leading-6 whitespace-nowrap">
            Get Template - $59
          </div>
        </Button>

        <HeaderHeroSubsection />

        <section className="relative w-full flex justify-center pt-[calc(100vh_+_200px)]">
          <div className="w-[1140px] flex flex-col gap-8">
            <div className="flex items-center justify-center ml-[0.6px] h-7 w-[325.67px] self-center [font-family:'Inter',Helvetica] font-medium text-white text-lg text-center tracking-[0] leading-7 whitespace-nowrap">
              Trusted by 150,000+ users worldwide
            </div>
            <img
              className="h-12"
              alt="Variant"
              src="/figmaAssets/variant-1.svg"
            />
          </div>
        </section>

        <SectionBentoSubsection />
        <SectionFeatureSubsection />
        <SectionFeatureWrapperSubsection />
        <DivWrapperSubsection />
        <SectionIntegrationsSubsection />

        <section className="relative w-full flex justify-center py-20">
          <div className="w-[732px] h-[120px] relative">
            <h2 className="absolute -top-2 left-[calc(50.00%_-_305px)] w-[623px] h-[75px] flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-white text-6xl text-center tracking-[0] leading-[60px]">
              Seamlessly Integrate
            </h2>
            <h2 className="absolute top-[52px] left-[calc(50.00%_-_140px)] w-[281px] h-[75px] flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-white text-[57.3px] text-center tracking-[0] leading-[60px]">
              Every App
            </h2>
          </div>
        </section>

        <SectionDesktopSubsection />
        <SectionHowItWorksSubsection />
        <SectionDesktopWrapperSubsection />
        <SectionCtaSubsection />
        <FooterFooterSubsection />
      </div>

      <img
        className="fixed left-0 top-[899px] w-[1440px] h-[78px] z-[2]"
        alt="Container"
        src="/figmaAssets/container.svg"
      />
    </div>
  );
};
