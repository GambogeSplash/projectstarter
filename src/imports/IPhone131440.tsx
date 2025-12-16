import svgPaths from "./svg-wufnwfb2l1";
import clsx from "clsx";
import imgImage39 from "figma:asset/68bd749242869a05c3a5ccf51a1d695b17213a31.png";
import imgImage592 from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";
import imgBananaMint1 from "figma:asset/2c2da8ff7a3e794c4bb7607f236b58c53dcc301c.png";
import { imgBananaMint } from "./svg-t7cnl";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(36, 38, 44) 0%, rgb(36, 38, 44) 100%)" }} className="h-[61.873px] relative rounded-[11.458px] shrink-0 w-full">
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
    <div className="relative rounded-[11.458px] shrink-0 size-[38.957px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[1.146px] border-solid inset-0 pointer-events-none rounded-[11.458px]" />
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
    <div className="content-stretch flex flex-col gap-[1.146px] items-start leading-[1.4] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[13.749px] text-white tracking-[0.275px]">{text}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[12.604px] tracking-[0.2521px]">{text1}</p>
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="iPhone 13 & 14 - 40">
      <div className="absolute bg-[#131316] content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] top-0 w-[390px]" data-name="Status Bar">
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
      <div className="absolute bg-[#131316] border-[#191919] border-[0px_0px_1px] border-solid bottom-[84.73%] left-[calc(50%+0.5px)] top-[7.63%] translate-x-[-50%] w-[389px]" data-name="Header">
        <div className="absolute content-stretch flex gap-[259px] items-center left-1/2 top-[17px] translate-x-[-50%] w-[349px]">
          <div className="content-stretch flex items-center relative shrink-0">
            <div className="relative shrink-0 size-[19.936px]" data-name="Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <g id="Frame">
                  <path d={svgPaths.pd14c000} fill="var(--fill-0, #696972)" id="Vector" stroke="var(--stroke-0, #696972)" strokeWidth="0.351804" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Search Container">
            <div className="h-[25.97px] relative shrink-0 w-[25px]" data-name="Notifications Container">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 26">
                <g id="Notifications Container">
                  <g clipPath="url(#clip0_5_2491)" id="bell">
                    <g id="Vector"></g>
                    <path d={svgPaths.p2f33b080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24362" />
                    <path d={svgPaths.p6f71300} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.24362" />
                  </g>
                  <path d={svgPaths.p6dad140} fill="var(--fill-0, #CD0404)" id="Ellipse 1940" stroke="var(--stroke-0, #0D0F0F)" strokeWidth="2.29523" />
                </g>
                <defs>
                  <clipPath id="clip0_5_2491">
                    <rect fill="white" height="22.2516" transform="translate(0 3.71875)" width="22.2516" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="relative shrink-0 size-[26.006px]" data-name="Identicon">
              <div className="absolute contents inset-0" data-name="Banana Mint">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Mask"></g>
                </svg>
                <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[26.006px_26.006px]" data-name="Banana Mint" style={{ maskImage: `url('${imgBananaMint}')` }}>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBananaMint1} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-1/2 top-[127px] translate-x-[-50%] w-[358px]">
        <div className="h-[40px] overflow-clip relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full">
          <div className="absolute content-stretch flex gap-[6px] items-center left-0 top-1/2 translate-y-[-50%]">
            <div className="relative shrink-0 size-[16px]" data-name="Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Frame">
                  <path d={svgPaths.p24661100} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.3" />
                </g>
              </svg>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-nowrap text-white">Add Product</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[17.329px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[358px]">
            <div className="content-stretch flex flex-col gap-[11.458px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[6.71px] h-[34.374px] items-center relative shrink-0 w-[300.197px]">
                <div className="bg-[#24242a] h-[38px] relative rounded-[9.166px] shrink-0 w-[146.661px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.4] left-[calc(50%-60.73px)] not-italic text-[13.062px] text-nowrap text-white top-[calc(50%-9.13px)] tracking-[0.1306px]">Connect Storefront</p>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#2b2c32] border-[1.057px] border-solid inset-0 pointer-events-none rounded-[9.166px]" />
                </div>
                <div className="bg-[rgba(24,26,30,0.3)] h-[38px] relative rounded-[8.456px] shrink-0 w-[151.244px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.4] left-[calc(50%-63.68px)] not-italic text-[#65696f] text-[12.833px] text-nowrap top-[calc(50%-9.13px)] tracking-[0.2567px]">Upload Spreadsheet</p>
                  </div>
                  <div aria-hidden="true" className="absolute border-[#1f1f24] border-[1.057px] border-solid inset-0 pointer-events-none rounded-[8.456px]" />
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[9.166px] h-[203.951px] items-start relative shrink-0 w-full">
                <div className="h-[61.873px] relative rounded-[11.458px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(96, 96, 248, 0.04) 0%, rgba(96, 96, 248, 0.04) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(36, 38, 44) 0%, rgb(36, 38, 44) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[#4546a3] border-[1.195px] border-solid inset-0 pointer-events-none rounded-[11.458px]" />
                  <div className="absolute content-stretch flex gap-[9.166px] h-[45.832px] items-center left-[12.6px] top-1/2 translate-y-[-50%] w-[256.657px]">
                    <BackgroundImage1>
                      <div className="absolute bg-[#25d366] left-1/2 overflow-clip rounded-[6.257px] size-[22.916px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <div className="absolute h-[13.221px] left-[calc(50%-0.04px)] top-[calc(50%-0.04px)] translate-x-[-50%] translate-y-[-50%] w-[13.148px]" data-name="Digital_Glyph_Green 1">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                            <g clipPath="url(#clip0_5_3836)" id="Digital_Glyph_Green 1">
                              <path clipRule="evenodd" d={svgPaths.p20274080} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                            </g>
                            <defs>
                              <clipPath id="clip0_5_3836">
                                <rect fill="white" height="13.2214" width="13.1484" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </BackgroundImage1>
                    <div className="content-stretch flex flex-col gap-[1.146px] items-start leading-[1.4] not-italic relative shrink-0 text-nowrap">
                      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[13.979px] text-white tracking-[0.2796px]">Whatsapp Business</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[12.604px] tracking-[0.2521px]">Connect with customers via...</p>
                    </div>
                  </div>
                  <div className="absolute border-[#32323b] border-[0.986px] border-solid h-[29.791px] left-[284px] overflow-clip rounded-[7.889px] top-[calc(50%+0.98px)] translate-y-[-50%] w-[62.075px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(44, 44, 53) 0%, rgb(44, 44, 53) 100%)" }}>
                    <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[1.4] left-[calc(50%-21.04px)] text-[12.415px] text-nowrap text-white top-[calc(50%-9.99px)] tracking-[0.1242px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                      Import
                    </p>
                  </div>
                </div>
                <BackgroundImage2>
                  <div aria-hidden="true" className="absolute border-[#1d1e23] border-[1.195px] border-solid inset-0 pointer-events-none rounded-[11.458px]" />
                  <div className="absolute content-stretch flex gap-[9.166px] h-[45.832px] items-center left-[12.6px] top-1/2 translate-y-[-50%] w-[256.657px]">
                    <BackgroundImage1>
                      <div className="absolute left-1/2 rounded-[6.875px] size-[22.916px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="image 39">
                        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6.875px] size-full" src={imgImage39} />
                      </div>
                    </BackgroundImage1>
                    <BackgroundImage text="Instagram" text1="React application with TypeScript" />
                  </div>
                </BackgroundImage2>
                <BackgroundImage2>
                  <div aria-hidden="true" className="absolute border-[#1d1e23] border-[1.195px] border-solid inset-0 pointer-events-none rounded-[11.458px]" />
                  <div className="absolute content-stretch flex gap-[9.166px] h-[45.832px] items-center left-[12.6px] top-1/2 translate-y-[-50%] w-[256.657px]">
                    <BackgroundImage1>
                      <div className="absolute bg-[#e2eee7] left-1/2 overflow-clip rounded-[6.27px] size-[22.916px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                        <div className="absolute h-[16.127px] left-[calc(50%-0.07px)] top-[calc(50%-1.11px)] translate-x-[-50%] translate-y-[-50%] w-[14.14px]" data-name="image 592">
                          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage592} />
                        </div>
                      </div>
                    </BackgroundImage1>
                    <BackgroundImage text="Shopify" text1="React application with TypeScript" />
                  </div>
                </BackgroundImage2>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
            <div className="bg-[#1b1b1f] h-[1.083px] relative rounded-[10.831px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border-[#28282d] border-[1.083px] border-solid inset-0 pointer-events-none rounded-[10.831px]" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[11.459px] h-[99px] items-start relative shrink-0 w-full">
            <div className="bg-[#6060f8] h-[44px] overflow-clip relative rounded-[9.168px] shrink-0 w-full">
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-31px)] not-italic text-[14.21px] text-nowrap text-white top-[calc(50%-8.38px)]">Continue</p>
            </div>
            <button className="block cursor-pointer h-[44px] overflow-clip relative rounded-[9.168px] shrink-0 w-[358px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
              <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-23.5px)] not-italic text-[14.21px] text-left text-nowrap text-white top-[calc(50%-8.38px)]">Cancel</p>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[27px] content-stretch flex gap-[10px] items-center left-[calc(50%+6px)] translate-x-[-50%]" data-name="Tabs Mode Compact">
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
    </div>
  );
}