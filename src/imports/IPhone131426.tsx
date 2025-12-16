import svgPaths from "./svg-voq1i83b3w";
import clsx from "clsx";
import imgImage29 from "figma:asset/7ccf63dca6e0d24b1d2f8069d3fa5f22ccda3280.png";
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

export default function IPhone() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="iPhone 13 & 14 - 26">
      <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-1/2 top-[180px] translate-x-[-50%] w-[350px]">
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
            <div className="h-[323px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgb(239, 239, 239) 26.923%, rgb(27, 27, 31) 92.308%), linear-gradient(90deg, rgb(27, 27, 31) 0%, rgb(27, 27, 31) 100%)" }}>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute h-[323px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[266.603px]">
                  <div className="absolute h-[432.676px] left-[calc(50%-0.18px)] top-0 translate-x-[-50%] w-[272.504px]" data-name="image 29">
                    <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
                  </div>
                </div>
                <div className="absolute content-stretch flex gap-[6px] items-start left-[13px] top-[274.44px] w-[304px]">
                  <div className="relative shrink-0 size-[16px]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g id="Frame">
                        <path d={svgPaths.p62ecd80} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0 text-nowrap w-[264px]">
                    <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12.955px] text-right text-white">Manage Inventory</p>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[12px] text-center tracking-[0.12px]">Track products, stock levels, and get low-stock alerts.</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_20px_2px_rgba(96,96,248,0.5)]" />
              <div aria-hidden="true" className="absolute border border-[#6060f8] border-solid inset-0 pointer-events-none rounded-[10px]" />
            </div>
          </div>
          <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0 w-full">
            <div className="bg-[#4d4d59] h-[4px] rounded-bl-[8px] rounded-tl-[8px] shrink-0 w-[20px]" />
            {[...Array(2).keys()].map((_, i) => (
              <div className="bg-[#1f1f24] h-[4px] relative shrink-0 w-[20px]">
                <div aria-hidden="true" className="absolute border border-[rgba(45,45,52,0.6)] border-solid inset-0 pointer-events-none" />
              </div>
            ))}
            <div className="bg-[#1f1f24] h-[4px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-[20px]">
              <div aria-hidden="true" className="absolute border border-[rgba(45,45,52,0.6)] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px]" />
            </div>
          </div>
        </div>
        <div className="bg-[#6060f8] h-[44px] overflow-clip relative rounded-[10px] shrink-0 w-full">
          <div className="absolute content-stretch flex gap-[5.554px] items-center left-[calc(50%+2.89px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[15.551px] text-nowrap text-white">Next</p>
            <div className="relative shrink-0 size-[16.92px]" data-name="Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                <g id="Frame">
                  <path d={svgPaths.p2c23e800} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.241716" />
                </g>
              </svg>
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