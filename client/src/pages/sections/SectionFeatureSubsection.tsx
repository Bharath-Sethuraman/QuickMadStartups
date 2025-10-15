import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const useCaseCards = [
  {
    icon: "/figmaAssets/icon---srmojdrit8cqbjx3nklowpofjgg-png.png",
    label: "Customer Support",
    left: "left-0",
  },
  {
    icon: "/figmaAssets/icon---r3urm08plivw27cshslkjiskqq-png.png",
    label: "Healthcare",
    left: "left-[231px]",
  },
  {
    icon: "/figmaAssets/icon---vbjzq68zihpwjjuxxlu5qajvfo-png.png",
    label: "Marketing",
    left: "left-[462px]",
  },
  {
    icon: "/figmaAssets/icon---acqyqyiqgiacgjj2ssdtbj7mxwi-png.png",
    label: "Education",
    left: "left-[694px]",
  },
  {
    icon: "/figmaAssets/icon---6tkstol08sqrk7thk9i5tv6r9e-png.png",
    label: "Finance",
    left: "left-[925px]",
  },
];

export const SectionFeatureSubsection = (): JSX.Element => {
  return (
    <section className="flex items-center justify-center py-24 w-full">
      <div className="h-[1280.58px] w-[1140px] relative">
        <header className="absolute w-full top-[calc(50.00%_-_640px)] left-0 h-[140px]">
          <div className="absolute top-[calc(50.00%_-_70px)] left-[calc(50.00%_-_442px)] w-[267px] h-[140px]">
            <div className="absolute w-[calc(100%_-_147px)] h-[calc(100%_-_20px)] top-2.5 -left-0.5 rotate-[-142.60deg] bg-[url(/figmaAssets/globe-image---gradient-circle-image.png)] bg-cover bg-[50%_50%]" />

            <div className="absolute top-0 left-[calc(50.00%_-_3px)] w-[137px] h-[140px] text-white text-[140px] text-center leading-[140px] whitespace-nowrap flex items-center justify-center [font-family:'Inter',Helvetica] font-medium tracking-[0]">
              AI
            </div>
          </div>

          <h2 className="absolute top-[-18px] left-[calc(50.00%_-_126px)] w-[568px] h-[175px] bg-[linear-gradient(90deg,rgba(0,152,243,1)_0%,rgba(0,191,251,1)_38%,rgba(255,82,29,1)_70%,rgba(159,78,0,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent text-[135.5px] text-center leading-[140px] flex items-center justify-center [font-family:'Inter',Helvetica] font-medium tracking-[0]">
            Powered
          </h2>
        </header>

        <div className="absolute w-full top-[calc(50.00%_-_420px)] left-0 h-[1061px]">
          <div className="absolute w-full top-0 left-0 h-[805px] rounded-[20px] overflow-hidden">
            <div className="absolute w-[calc(100%_-_2px)] top-[calc(50.00%_-_401px)] left-px h-[803px] flex rounded-[20px] overflow-hidden bg-[url(/figmaAssets/dashboard-desktop---dashboard-imagery.png)] bg-cover bg-[50%_50%]">
              <div className="flex-1 w-[1138px] rounded-[20px] border border-solid border-[#ffffff30]" />
            </div>

            <div className="absolute right-[94px] bottom-[29px] w-[700px] h-64 flex flex-col gap-[30px]">
              <div className="flex-1 max-h-[46px] relative">
                <Card className="absolute w-[calc(100%_-_336px)] top-[calc(50.00%_-_20px)] left-[274px] h-[41px] bg-[#ffffff05] rounded-2xl backdrop-blur-[1.25px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1.25px)_brightness(100%)] border-[#ffffff14]">
                  <CardContent className="p-0 h-full relative">
                    <p className="absolute top-2.5 right-5 w-[317px] h-[21px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm text-right tracking-[0] leading-[21px] whitespace-nowrap">
                      Hey, can you generate a customer follow-up list
                    </p>
                  </CardContent>
                </Card>

                <Avatar className="absolute w-[calc(100%_-_654px)] h-full top-0 left-[654px] rounded-none">
                  <AvatarImage
                    src="/figmaAssets/user-avatar---gug9zz2tfzzojieftsbrtqzghz4-png.png"
                    className="object-cover"
                  />
                </Avatar>
              </div>

              <Card className="flex-1 max-h-[180.41px] relative rounded-[20px] overflow-hidden border-0">
                <div className="absolute w-[calc(100%_+_328px)] h-[calc(100%_+_690px)] top-[-345px] left-[-164px] bg-[linear-gradient(270deg,rgba(159,78,0,1)_0%,rgba(162,41,4,1)_33%,rgba(0,0,0,1)_51%,rgba(0,152,243,1)_93%)]" />

                <CardContent className="absolute w-[calc(100%_-_6px)] top-[calc(50.00%_-_87px)] left-[3px] h-[174px] bg-black rounded-2xl overflow-hidden p-0">
                  <div className="absolute top-4 left-4 w-52 h-[37px] flex gap-[8.1px]">
                    <Card className="w-[163px] h-[37px] relative rounded-lg backdrop-blur-[1px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(1px)_brightness(100%)] bg-transparent border-[#ffffff14]">
                      <CardContent className="p-0 h-full relative">
                        <img
                          className="absolute w-[calc(100%_-_143px)] top-2 left-3 h-5"
                          alt="Svg"
                          src="/figmaAssets/svg-7.svg"
                        />

                        <span className="absolute top-2 left-[42px] w-[53px] h-[21px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                          GPT 4.5
                        </span>

                        <img
                          className="absolute w-[calc(100%_-_145px)] h-[calc(100%_-_20px)] top-2.5 left-[133px]"
                          alt="Svg"
                          src="/figmaAssets/svg-2.svg"
                        />
                      </CardContent>
                    </Card>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="w-[37px] h-[37px] p-0 bg-transparent hover:bg-transparent"
                    >
                      <img
                        className="w-[37px] h-[37px]"
                        alt="Button"
                        src="/figmaAssets/button-1.svg"
                      />
                    </Button>
                  </div>

                  <p className="absolute top-[77px] left-4 w-[349px] h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[#ffffffcc] text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                    Schedule meetings and send invites autom
                  </p>

                  <span className="absolute top-[77px] left-[367px] w-1.5 h-5 flex items-center justify-center [font-family:'Inter',Helvetica] font-medium text-[#ffffffbf] text-[17px] tracking-[0] leading-[20.4px] whitespace-nowrap">
                    |
                  </span>

                  <div className="absolute w-[calc(100%_-_32px)] top-[121px] left-4 h-[37px] rounded-[8.14px]">
                    <div className="absolute w-[calc(100%_-_101px)] top-[calc(50.00%_-_18px)] left-0 h-[37px] flex items-center gap-[8.1px]">
                      <Button
                        variant="ghost"
                        className="h-[37px] w-[54.95px] rounded-lg backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)] bg-transparent hover:bg-transparent border border-[#ffffff14] p-0"
                      >
                        <span className="w-8 h-[21px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                          Chat
                        </span>
                      </Button>

                      <Button
                        variant="ghost"
                        className="h-[37px] w-[139.38px] rounded-lg backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)] bg-transparent hover:bg-transparent border border-[#ffffff14] p-0"
                      >
                        <span className="w-[116px] h-[21px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                          Launch Workflow
                        </span>
                      </Button>

                      <Button
                        variant="ghost"
                        className="h-[37px] w-[113.7px] rounded-lg backdrop-blur-[3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(3px)_brightness(100%)] bg-transparent hover:bg-transparent border border-[#ffffff14] p-0"
                      >
                        <span className="w-[90px] h-[21px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                          Data Analysis
                        </span>
                      </Button>
                    </div>

                    <Button className="absolute top-px left-[576px] w-[86px] h-9 rounded-lg overflow-hidden bg-[linear-gradient(173deg,rgba(255,137,24,1)_28%,rgba(162,41,4,1)_54%,rgba(0,0,0,1)_68%,rgba(0,152,243,1)_100%)] hover:opacity-90 p-0 h-auto border-0">
                      <div className="absolute w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] top-px left-px bg-black rounded-lg" />

                      <div className="absolute top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_43px)] w-[86px] h-9 z-10">
                        <div className="w-[calc(100%_-_62px)] h-[calc(100%_-_12px)] top-1.5 left-3 bg-[url(/figmaAssets/icon---feature-card-icon-1.png)] absolute bg-cover bg-[50%_50%]" />

                        <span className="absolute top-2 left-10 w-[34px] h-[21px] font-normal text-sm leading-[21px] whitespace-nowrap flex items-center justify-center [font-family:'Inter',Helvetica] text-white tracking-[0]">
                          Send
                        </span>
                      </div>

                      <div className="absolute w-full top-px left-0 h-[13px] bg-[#da4e24] rounded-[49.5px] blur-[5px] opacity-60" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="absolute w-full top-[calc(50.00%_+_314px)] left-0 h-[216px]">
            {useCaseCards.map((card, index) => (
              <Card
                key={index}
                className={`absolute w-[calc(100%_-_925px)] top-0 ${card.left} h-[216px] bg-black rounded-2xl overflow-hidden border-[#ffffff1a] cursor-pointer hover:border-[#ffffff40] transition-colors`}
              >
                <CardContent className="absolute w-[calc(100%_-_60px)] top-[calc(50.00%_-_51px)] left-[30px] h-[102px] p-0">
                  <div
                    className="absolute w-[calc(100%_-_95px)] h-[calc(100%_-_42px)] top-0 left-12 bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${card.icon})` }}
                  />

                  <p className="absolute top-[76px] left-1/2 -translate-x-1/2 h-[26px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-white text-base text-center tracking-[0] leading-[26px] whitespace-nowrap">
                    {card.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
