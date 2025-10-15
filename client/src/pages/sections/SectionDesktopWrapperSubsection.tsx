import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    id: "item-1",
    question: "What is Fusion AI and how does it work?",
    answer: "",
  },
  {
    id: "item-2",
    question: "Which apps can I integrate?",
    answer:
      "Fusion AI supports 50+ integrations, including Slack, HubSpot, Zendesk, Salesforce, Google Workspace, WhatsApp, Zapier, and more.",
  },
  {
    id: "item-3",
    question: "How does Fluence AI automate tasks?",
    answer: "",
  },
  {
    id: "item-4",
    question: "Is my data secure with Fluence AI?",
    answer: "",
  },
  {
    id: "item-5",
    question: "What kind of support do you offer?",
    answer: "",
  },
];

export const SectionDesktopWrapperSubsection = (): JSX.Element => {
  return (
    <section className="w-full flex gap-[60px] rounded-2xl">
      <div className="w-[441px] flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="w-[53.16px] h-[30px] flex items-center justify-center rounded-[99px] bg-[linear-gradient(90deg,rgba(105,51,0,1)_0%,rgba(128,30,0,1)_33%,rgba(0,0,0,1)_54%,rgba(0,105,166,1)_100%)]">
            <div className="h-7 w-[51.16px] flex bg-black rounded-[14px]">
              <div className="flex items-center justify-center mt-1.5 w-[27.52px] h-4 ml-3 [font-family:'Inter',Helvetica] font-medium text-white text-sm tracking-[0] leading-4 whitespace-nowrap">
                FAQ
              </div>
            </div>
          </div>

          <h2 className="flex items-center justify-center w-[309.7px] h-[195px] [font-family:'Inter',Helvetica] font-medium text-white text-6xl tracking-[0] leading-[60px]">
            Frequently <br />
            asked <br />
            questions
          </h2>
        </div>

        <div className="flex flex-col gap-[50px]">
          <div className="flex flex-col gap-[3px]">
            <div className="flex items-center justify-center w-[168.89px] h-7 [font-family:'Inter',Helvetica] font-medium text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
              Got any Questions?
            </div>

            <p className="flex items-center justify-center w-[314.47px] h-[46px] [font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
              Let us know! Reach out and our team will <br />
              get right back to you.
            </p>
          </div>

          <Button
            variant="outline"
            className="w-[167px] h-[50px] items-center justify-center rounded-xl border border-solid border-[#ffffff33] bg-transparent text-white hover:bg-white/10"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-base tracking-[0] leading-[26px]">
              Contact us
            </span>
          </Button>
        </div>
      </div>

      <div className="w-[639px] flex flex-col gap-3">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-2"
          className="flex flex-col gap-3"
        >
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="rounded-2xl border border-solid border-[#ffffff1a] overflow-hidden data-[state=open]:h-auto data-[state=closed]:h-16"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline [&[data-state=open]]:opacity-100 [&[data-state=closed]]:opacity-70">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[22.9px] tracking-[0] leading-8 text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="px-4 pb-4">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[26px]">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
