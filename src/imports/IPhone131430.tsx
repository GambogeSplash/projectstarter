import svgPaths from "./svg-c8t3bnhz4h";
import clsx from "clsx";
import imgImage39 from "figma:asset/68bd749242869a05c3a5ccf51a1d695b17213a31.png";
import imgImage592 from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(33, 33, 39) 0%, rgb(33, 33, 39) 100%)" }} className="h-[60px] relative rounded-[10px] shrink-0 w-full">
      {children}
    </div>
  );
}
type LevelsBackgroundImageProps = {
  additionalClassNames?: string;
};

function LevelsBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<LevelsBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        {children}
      </div>
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
type ButtonBackgroundImageAndTextProps = {
  text: string;
};

function ButtonBackgroundImageAndText({ text }: ButtonBackgroundImageAndTextProps) {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(21,21,21,0.8)] content-stretch flex items-center justify-center px-0 py-[9px] relative rounded-[24px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Compact:Light',sans-serif] font-[350.524] justify-center leading-[0] relative shrink-0 size-[24px] text-[23px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
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

export default function IPhone() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="iPhone 13 & 14 - 30">
      <div className="absolute content-stretch flex flex-col gap-[18px] items-center left-1/2 overflow-clip top-[calc(50%-52.83px)] translate-x-[-50%] translate-y-[-50%] w-[350px]">
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
          <div className="content-stretch flex flex-col gap-[8px] h-[196px] items-start relative shrink-0 w-full">
            <div className="h-[60px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(96, 96, 248, 0.04) 0%, rgba(96, 96, 248, 0.04) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(33, 33, 39) 0%, rgb(33, 33, 39) 100%)" }}>
              <div aria-hidden="true" className="absolute border-[#4a4ba8] border-[1.043px] border-solid inset-0 pointer-events-none rounded-[10px]" />
              <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[11px] top-1/2 translate-y-[-50%] w-[224px]">
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
                  <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[11px] tracking-[0.22px]">Connect with customers via...</p>
                </div>
              </div>
              <div className="absolute content-stretch flex items-center justify-center left-[268px] overflow-clip px-[6px] py-[4px] rounded-[6px] top-1/2 translate-y-[-50%]" style={{ backgroundImage: "linear-gradient(90deg, rgb(96, 96, 248) 0%, rgb(96, 96, 248) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(44, 44, 53) 0%, rgb(44, 44, 53) 100%)" }}>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[10.6px] text-nowrap text-white tracking-[0.106px]">Connected</p>
              </div>
            </div>
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
          <div className="bg-[#24242a] h-[44px] overflow-clip relative rounded-[8px] shrink-0 w-full">
            <div className="absolute bg-[#6060f8] h-[44px] left-0 rounded-[8px] top-1/2 translate-y-[-50%] w-[404px]" />
            <div className="absolute content-stretch flex gap-[5.164px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12.807px] text-nowrap text-white">Confirm</p>
              <div className="relative shrink-0 size-[13.435px]" data-name="Frame">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g id="Frame">
                    <path d={svgPaths.p2bc41d00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.191925" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[36px] content-stretch flex gap-[10px] items-center left-[calc(50%+6px)] translate-x-[-50%]" data-name="Tabs Mode Compact">
        <ButtonBackgroundImageAndText text="􀯶" />
        <div className="backdrop-blur-md backdrop-filter bg-[rgba(21,21,21,0.8)] h-[48px] relative rounded-[24px] shrink-0 w-[218px]" data-name="Search Bar">
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.1)]" />
          <div className="absolute h-[17.982px] right-[13.24px] top-[calc(50%-0.31px)] translate-y-[-50%] w-[14.757px]" data-name="reload">
            <div className="absolute inset-[-0.56%_-0.68%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
                <path d={svgPaths.p35cf2300} fill="var(--fill-0, white)" id="reload" stroke="var(--stroke-0, white)" strokeWidth="0.2" />
              </svg>
            </div>
          </div>
          <div className="absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-1/2 not-italic text-[15px] text-center text-nowrap text-white top-1/2 tracking-[0.15px] translate-x-[-50%] translate-y-[-50%]">
            <p className="leading-[normal]">chat.chidi.app</p>
          </div>
          <div className="absolute h-[18px] left-[15px] top-1/2 translate-y-[-50%] w-[15px]" data-name="site settings">
            <div className="absolute inset-[-0.56%_-0.67%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
                <path clipRule="evenodd" d={svgPaths.p1e0de700} fill="var(--fill-0, white)" fillRule="evenodd" id="site settings" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" />
              </svg>
            </div>
          </div>
        </div>
        <ButtonBackgroundImageAndText text="􀍠" />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] top-0 w-[390px]" data-name="Status Bar">
        <div className="basis-0 content-stretch flex grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0" data-name="Time">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
        <div className="basis-0 content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="Levels">
          <LevelsBackgroundImage additionalClassNames="h-[12.226px] w-[19.2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </LevelsBackgroundImage>
          <LevelsBackgroundImage additionalClassNames="h-[12.328px] w-[17.142px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </LevelsBackgroundImage>
          <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
              <g id="Battery">
                <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, white)" width="24" x="0.5" y="0.5" />
                <path d={svgPaths.p3bbd9700} fill="var(--fill-0, white)" id="Cap" opacity="0.4" />
                <rect fill="var(--fill-0, white)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}