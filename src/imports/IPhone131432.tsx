import svgPaths from "./svg-b8amy53vbq";
import clsx from "clsx";
import imgBananaMint1 from "figma:asset/2c2da8ff7a3e794c4bb7607f236b58c53dcc301c.png";
import { imgBananaMint } from "./svg-oftzi";
type LevelsHelperProps = {
  additionalClassNames?: string;
};

function LevelsHelper({ children, additionalClassNames = "" }: React.PropsWithChildren<LevelsHelperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
        {children}
      </div>
    </div>
  );
}

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type ButtonTextProps = {
  text: string;
};

function ButtonText({ text }: ButtonTextProps) {
  return (
    <div className="backdrop-blur-md backdrop-filter bg-[rgba(21,21,21,0.8)] content-stretch flex items-center justify-center px-0 py-[9px] relative rounded-[24px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.12)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-col font-['SF_Compact:Light',sans-serif] font-[350.524] justify-center leading-[0] relative shrink-0 size-[24px] text-[23px] text-center text-white">
        <p className="leading-[normal]">{text}</p>
      </div>
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="iPhone 13 & 14 - 32">
      <div className="absolute bg-[#131316] border-[#191919] border-[0px_0px_1px] border-solid bottom-[85.78%] left-[calc(50%+0.5px)] top-[7.11%] translate-x-[-50%] w-[389px]" data-name="Header">
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
      <div className="absolute content-stretch flex flex-col gap-[14px] items-center left-1/2 top-[calc(50%-103px)] translate-x-[-50%] translate-y-[-50%] w-[358px]">
        <div className="overflow-clip relative shrink-0 size-[64px]">
          <div className="absolute left-1/2 size-[64px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
              <g id="Frame">
                <path d={svgPaths.p151cb680} fill="var(--fill-0, #33FFCC)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        <div className="bg-[#1b1b1f] h-[120px] relative rounded-[14px] shrink-0 w-full">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute content-stretch flex gap-[16px] items-center left-[16px] top-[70px]">
              <div className="content-stretch flex gap-[11px] items-center relative shrink-0">
                <div className="bg-[#6060f8] overflow-clip relative rounded-[10px] shrink-0 size-[34px]">
                  <div className="absolute left-1/2 size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="Frame">
                        <path d={svgPaths.p15616400} fill="var(--fill-0, #33FFCC)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="bg-[#1f1f24] relative rounded-[10px] shrink-0 size-[34px]">
                  <div className="overflow-clip relative rounded-[inherit] size-full">
                    <div className="absolute left-1/2 size-[13.996px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                        <g id="Frame">
                          <path d={svgPaths.p258b4f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div aria-hidden="true" className="absolute border border-[#2d2d34] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
              </div>
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[16px]">
                  <Frame>
                    <path d={svgPaths.p14cbd180} fill="var(--fill-0, #5E5E66)" id="Vector" stroke="var(--stroke-0, #5E5E66)" strokeWidth="0.4" />
                  </Frame>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[14px]">
                  <div className="relative shrink-0 size-[14px]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <g id="Frame">
                        <path d={svgPaths.p1e14bd00} fill="var(--fill-0, #5E5E66)" id="Vector" stroke="var(--stroke-0, #5E5E66)" strokeWidth="0.4" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[16px]">
                  <Frame>
                    <path d={svgPaths.p25b52680} fill="var(--fill-0, #5E5E66)" id="Vector" stroke="var(--stroke-0, #5E5E66)" strokeWidth="0.4" />
                  </Frame>
                </div>
              </div>
            </div>
            <div className="absolute bg-white left-[311px] overflow-clip rounded-[10px] size-[34px] top-[70px]">
              <div className="absolute left-1/2 size-[16px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Frame">
                    <path d={svgPaths.p19eaca00} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.6" />
                  </g>
                </svg>
              </div>
            </div>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17.5px] not-italic text-[#5e5e66] text-[14px] text-nowrap top-[18px] tracking-[0.14px]">Ask Chidi anything</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#27272d] border-solid inset-0 pointer-events-none rounded-[14px]" />
        </div>
      </div>
      <div className="absolute bottom-[36px] content-stretch flex gap-[10px] items-center left-[calc(50%+6px)] translate-x-[-50%]" data-name="Tabs Mode Compact">
        <ButtonText text="􀯶" />
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
        <ButtonText text="􀍠" />
      </div>
      <div className="absolute bg-[rgba(0,0,0,0.1)] content-stretch flex gap-[154px] items-center justify-center left-0 pb-[19px] pt-[21px] px-[16px] top-0 w-[390px]" data-name="Status Bar">
        <div className="basis-0 content-stretch flex grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-[2px] px-0 relative shrink-0" data-name="Time">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-center text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
        <div className="basis-0 content-stretch flex gap-[7px] grow h-[22px] items-center justify-center min-h-px min-w-px pb-0 pt-px px-0 relative shrink-0" data-name="Levels">
          <LevelsHelper additionalClassNames="h-[12.226px] w-[19.2px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, white)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </LevelsHelper>
          <LevelsHelper additionalClassNames="h-[12.328px] w-[17.142px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, white)" fillRule="evenodd" id="Wifi" />
            </svg>
          </LevelsHelper>
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