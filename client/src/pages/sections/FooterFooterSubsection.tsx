import React from "react";
import { Separator } from "@/components/ui/separator";

const mainPageLinks = [
  { label: "Home" },
  { label: "About" },
  { label: "Pricing" },
  { label: "Blogs" },
  { label: "Contact" },
];

const quickLinks = [
  { label: "Integration" },
  { label: "Teams" },
  { label: "Career" },
  { label: "FAQ" },
  { label: "404" },
];

const otherLinks = [
  { label: "Privacy Policy" },
  { label: "Terms & Condition" },
  { label: "Waitlist" },
  { label: "Changelog" },
];

export const FooterFooterSubsection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black rounded-[20px] overflow-hidden">
      <div className="px-[30px] py-[30px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          <div className="flex flex-col gap-[19px] max-w-[272px]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[url(/figmaAssets/circle-image-1.png)] bg-cover bg-center rounded-full" />
              <div className="[font-family:'Inter',Helvetica] font-medium text-white text-[31px] tracking-[0] leading-8">
                Fusion Ai
              </div>
            </div>
            <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
              Fusion AI and let AI handle your <br />
              routine tasks.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 lg:gap-[98.6px]">
            <nav className="flex flex-col gap-4">
              <h3 className="opacity-50 [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7">
                Main Page
              </h3>
              <ul className="flex flex-col gap-3">
                {mainPageLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="opacity-70 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4">
              <h3 className="opacity-50 [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="opacity-70 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col gap-4">
              <h3 className="opacity-50 [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7">
                Others
              </h3>
              <ul className="flex flex-col gap-3">
                {otherLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="opacity-70 [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px] hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <Separator className="bg-[#ffffff26]" />

      <div className="px-[30px] py-[30px]">
        <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
          © 2025&nbsp;&nbsp;Design & Developed by Amani Design
        </p>
      </div>
    </footer>
  );
};
