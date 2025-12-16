import svgPaths from "./svg-97zq7wwcor";
import imgImage39 from "figma:asset/68bd749242869a05c3a5ccf51a1d695b17213a31.png";
import imgImage592 from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(33, 33, 39) 0%, rgb(33, 33, 39) 100%)" }} className="h-[54px] relative rounded-[10px] shrink-0 w-full">
      {children}
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#2d2d34] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start leading-[1.4] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[12px] text-white tracking-[0.24px]">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[11px] tracking-[0.22px]">{text1}</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="3">
      <div className="absolute h-[420px] left-1/2 overflow-clip rounded-[16px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[440px]">
        <div className="absolute content-stretch flex flex-col gap-[18px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[404px]">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-[326px]">
              <div className="bg-[#6060f8] h-[39.344px] relative rounded-[13.096px] shrink-0 w-[40px]">
                <div className="overflow-clip relative rounded-[inherit] size-full">
                  <div className="absolute left-1/2 size-[29.338px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                      <g id="Frame">
                        <path d={svgPaths.p36ca0500} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-[#6e6eff] border-[0.935px] border-solid inset-0 pointer-events-none rounded-[13.096px]" />
              </div>
              <div className="content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic relative shrink-0 text-center w-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[20px] text-white tracking-[0.2px] w-full">Connect your Storefronts</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5e5e66] text-[13px] tracking-[0.13px] w-full">This helps CHIDI understand your products better.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[8px] h-[178px] items-start relative shrink-0 w-full">
              <BackgroundImage2>
                <div aria-hidden="true" className="absolute border border-[#292b31] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[11px] top-[calc(50%-0.65px)] translate-y-[-50%] w-[224px]">
                  <BackgroundImage1>
                    <div className="absolute bg-[#25d366] left-1/2 overflow-clip rounded-[5.461px] size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <div className="absolute h-[11.539px] left-[calc(50%-0.03px)] top-[calc(50%-0.03px)] translate-x-[-50%] translate-y-[-50%] w-[11.475px]" data-name="Digital_Glyph_Green 1">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                          <g clipPath="url(#clip0_1_172)" id="Digital_Glyph_Green 1">
                            <path clipRule="evenodd" d={svgPaths.p1bbbd480} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1_172">
                              <rect fill="white" height="11.5391" width="11.4754" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </BackgroundImage1>
                  <div className="content-stretch flex flex-col gap-px items-start leading-[1.4] not-italic relative shrink-0 text-nowrap">
                    <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[12.2px] text-white tracking-[0.244px]">Whatsapp Business</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[11px] tracking-[0.22px]">Connect with customers via WhatsApp</p>
                  </div>
                </div>
                <div className="absolute left-[336px] rounded-[6px] top-[calc(50%-0.65px)] translate-y-[-50%]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(44, 44, 53) 0%, rgb(44, 44, 53) 100%)" }}>
                  <div className="content-stretch flex items-center justify-end overflow-clip px-[6px] py-[4px] relative rounded-[inherit]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[10.6px] text-nowrap text-right text-white tracking-[0.106px]">Connect</p>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#32323b] border-solid inset-0 pointer-events-none rounded-[6px]" />
                </div>
              </BackgroundImage2>
              <BackgroundImage2>
                <div aria-hidden="true" className="absolute border border-[#292b31] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[11px] top-[calc(50%-0.65px)] translate-y-[-50%] w-[224px]">
                  <BackgroundImage1>
                    <div className="absolute left-1/2 rounded-[6px] size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image 39">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgImage39} />
                    </div>
                  </BackgroundImage1>
                  <BackgroundImage text="Instagram" text1="React application with TypeScript" />
                </div>
              </BackgroundImage2>
              <BackgroundImage2>
                <div aria-hidden="true" className="absolute border border-[#292b31] border-solid inset-0 pointer-events-none rounded-[10px]" />
                <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[11px] top-[calc(50%-0.65px)] translate-y-[-50%] w-[224px]">
                  <BackgroundImage1>
                    <div className="absolute bg-[#e2eee7] left-1/2 overflow-clip rounded-[5.472px] size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                      <div className="absolute h-[14.075px] left-[calc(50%-0.06px)] top-[calc(50%-0.96px)] translate-x-[-50%] translate-y-[-50%] w-[12.341px]" data-name="image 592">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage592} />
                      </div>
                    </div>
                  </BackgroundImage1>
                  <BackgroundImage text="Shopify" text1="React application with TypeScript" />
                </div>
              </BackgroundImage2>
            </div>
            <div className="bg-[#24242a] h-px rounded-[8px] shrink-0 w-[404px]" />
            <div className="bg-[#24242a] h-[36px] opacity-80 overflow-clip relative rounded-[8px] shrink-0 w-full">
              <div className="absolute content-stretch flex gap-[5px] items-center left-1/2 opacity-60 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12.4px] text-nowrap text-white">Confirm</p>
                <div className="relative shrink-0 size-[13.008px]" data-name="Frame">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                    <g id="Frame">
                      <path d={svgPaths.p4366300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.185826" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}