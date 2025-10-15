import React from "react";
import { Button } from "@/components/ui/button";

const actionButtons = [
  { label: "Chat" },
  { label: "Launch Workflow" },
  { label: "Data Analysis" },
];

export const HeaderHeroSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black">
      <img
        className="absolute top-0 right-[-17px] w-[1437px] h-[958px]"
        alt="Hero video mask"
        src="/figmaAssets/hero-video-mask-group.svg"
      />

      <img
        className="absolute w-[calc(100%_+_300px)] top-[651px] left-[-150px] h-[567px]"
        alt="Shape"
      />

      <div className="absolute right-[-634px] bottom-[287px] w-[954px] h-[342px] bg-[#1f77f6] rounded-[648px] blur-[41px]" />

      <img
        className="absolute w-[calc(100%_+_300px)] top-[943px] left-[-150px] h-[389px]"
        alt="Shape"
      />

      <div className="relative mx-auto w-full max-w-[1140px] px-4 py-[210px] flex flex-col gap-[140px]">
        <div className="flex-1 max-h-[440px] relative">
          <div className="w-full flex flex-col gap-[27px]">
            <div className="flex flex-col gap-0.5">
              <div className="w-[287.64px] h-[30px] flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)]">
                <div className="h-7 w-[285.64px] flex bg-black rounded-[14px]">
                  <div className="flex items-center justify-center mt-1.5 w-[261.94px] h-4 ml-3 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                    SUPERCHARGE YOUR AI WORKFLOWS
                  </div>
                </div>
              </div>

              <h1 className="w-[542.48px] h-[247px] text-white text-[76px] leading-[76px] flex items-center justify-center [font-family:'Inter',Helvetica] font-medium tracking-[0]">
                Automate Your <br />
                AI Workflows <br />
                with AI Agent
              </h1>
            </div>

            <p className="w-[555.18px] h-[49px] text-lg leading-7 flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white tracking-[0]">
              Connect your favorite apps, set triggers and watch AI handle the{" "}
              <br />
              rest - no coding required. Get up and running in minutes.
            </p>
          </div>

          <div className="absolute w-full top-[calc(50.00%_+_170px)] left-0 h-[50px] flex gap-4">
            <div className="w-[177.25px] h-[50px] relative rounded-xl">
              <div className="absolute w-[calc(100%_-_18px)] -top-1 left-[9px] h-[47px] rounded-[103.13px] blur-[1.5px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,1)_53%,rgba(140,54,2,1)_100%)]" />

              <div className="absolute w-full h-full top-0 left-0 rounded-xl bg-[linear-gradient(175deg,rgba(255,137,24,1)_28%,rgba(162,41,4,1)_54%,rgba(0,0,0,1)_68%,rgba(0,152,243,1)_100%)]" />

              <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-black rounded-xl" />

              <Button className="absolute top-[calc(50.00%_-_13px)] left-[calc(50.00%_-_69px)] w-[137px] h-[26px] bg-transparent hover:bg-transparent p-0 h-auto">
                <div className="flex items-center justify-center w-[138.62px] h-[26px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                  Get Started - Free
                </div>
              </Button>

              <div className="absolute w-full top-px left-0 h-3 bg-[#da4e24] rounded-[94.63px] blur-[5px] opacity-60" />
            </div>

            <Button className="w-[179.53px] h-[50px] flex items-center justify-center rounded-xl border border-solid border-[#ffffff33] bg-transparent hover:bg-transparent h-auto">
              <div className="w-[95.53px] flex overflow-hidden">
                <div className="flex items-center justify-center w-[95.88px] h-[26px] [font-family:'Inter',Helvetica] font-medium text-white text-base tracking-[0] leading-[26px] whitespace-nowrap">
                  View Pricing
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div className="flex-1 max-h-[647.92px] relative">
          <img
            className="absolute w-full top-[calc(50.00%_-_224px)] left-0 h-[548px]"
            alt="Image wrapper"
            src="/figmaAssets/image-wrapper-1.svg"
          />

          <div className="absolute top-0 left-[179px] w-[782px] h-[186px] rounded-[20px] overflow-hidden">
            <div className="absolute w-[calc(100%_+_328px)] h-[calc(100%_+_690px)] top-[-345px] left-[-164px] rotate-[-14.04deg] bg-[linear-gradient(270deg,rgba(159,78,0,1)_0%,rgba(162,41,4,1)_33%,rgba(0,0,0,1)_51%,rgba(0,152,243,1)_93%)]" />

            <div className="absolute w-[calc(100%_-_12px)] top-[calc(50.00%_-_87px)] left-1.5 h-[174px] bg-black rounded-2xl overflow-hidden">
              <div className="absolute top-4 left-4 w-52 h-[37px] flex gap-[8.1px]">
                <div className="w-[163px] h-[37px] relative rounded-lg backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)]">
                  <img
                    className="absolute w-[calc(100%_-_143px)] top-2 left-3 h-5"
                    alt="Svg"
                    src="/figmaAssets/svg-5.svg"
                  />

                  <div className="absolute top-2 left-[42px] w-[53px] h-[19px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                    GPT 4.5
                  </div>

                  <img
                    className="absolute w-[calc(100%_-_145px)] h-[calc(100%_-_20px)] top-2.5 left-[133px]"
                    alt="Svg"
                    src="/figmaAssets/svg-2.svg"
                  />

                  <div className="absolute w-full h-full top-0 left-0 rounded-lg border border-solid border-[#ffffff14]" />
                </div>

                <img
                  className="w-[37px] h-[37px]"
                  alt="Button"
                  src="/figmaAssets/button.svg"
                />
              </div>

              <div className="absolute top-[77px] left-4 w-[388px] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                Schedule meetings and send invites automatica
              </div>

              <div className="absolute top-[77px] left-[406px] w-1.5 h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[#ffffffbf] text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                |
              </div>

              <div className="absolute w-[calc(100%_-_32px)] top-[121px] left-4 h-[37px] rounded-[8.14px]">
                <div className="absolute w-[calc(100%_-_101px)] top-[calc(50.00%_-_18px)] left-0 h-[37px] flex items-center gap-[8.1px]">
                  {actionButtons.map((button, index) => (
                    <Button
                      key={index}
                      className="h-[37px] relative rounded-lg backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)] bg-transparent hover:bg-transparent border border-solid border-[#ffffff14] h-auto"
                    >
                      <div className="px-3 py-2 flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                        {button.label}
                      </div>
                    </Button>
                  ))}
                </div>

                <div className="absolute top-px left-[652px] w-[86px] h-9 rounded-lg overflow-hidden bg-[linear-gradient(173deg,rgba(255,137,24,1)_28%,rgba(162,41,4,1)_54%,rgba(0,0,0,1)_68%,rgba(0,152,243,1)_100%)]">
                  <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-black rounded-lg" />

                  <Button className="absolute top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_43px)] w-[86px] h-9 bg-transparent hover:bg-transparent p-0 h-auto">
                    <div className="absolute w-[calc(100%_-_62px)] h-[calc(100%_-_12px)] top-1.5 left-3 bg-[url(/figmaAssets/icon---feature-card-icon.png)] bg-cover bg-[50%_50%]" />

                    <div className="absolute top-2 left-10 w-[34px] h-[19px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                      Send
                    </div>
                  </Button>

                  <div className="absolute w-full top-px left-0 h-[13px] bg-[#da4e24] rounded-[49.5px] blur-[5px] opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
