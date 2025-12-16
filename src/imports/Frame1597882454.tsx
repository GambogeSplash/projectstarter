import svgPaths from "./svg-slb8w85xjg";
import clsx from "clsx";
import imgImage29 from "figma:asset/7ccf63dca6e0d24b1d2f8069d3fa5f22ccda3280.png";
import imgImage592 from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";
import imgImage39 from "figma:asset/68bd749242869a05c3a5ccf51a1d695b17213a31.png";

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgb(36, 38, 44) 0%, rgb(36, 38, 44) 100%)" }} className="basis-0 grow h-[60px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      {children}
    </div>
  );
}
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }} className={clsx("h-[30px] relative rounded-[7.887px] shrink-0 w-[191px]", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#29292f] border-[0.986px] border-solid inset-0 pointer-events-none rounded-[7.887px]" />
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
  additionalClassNames?: string;
};

function BackgroundImage({ text, text1, additionalClassNames = "" }: BackgroundImageProps) {
  return (
    <div className={clsx("content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-center leading-[1.4] not-italic relative shrink-0 text-nowrap w-full", additionalClassNames)}>
      <p className="relative shrink-0 text-[#6c6c7d] text-[11.6px] tracking-[0.232px]">{text}</p>
      <p className="relative shrink-0 text-[12px] text-white tracking-[0.12px]">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="border border-[#1f1f24] border-solid overflow-clip relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(34, 34, 39) 0%, rgb(34, 34, 39) 100%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[16px] h-[386px] items-start left-[15px] top-[57.73px] w-[388px]">
        <div className="h-[323px] relative rounded-[10px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(rgb(239, 239, 239) 26.923%, rgb(27, 27, 31) 92.308%), linear-gradient(90deg, rgb(27, 27, 31) 0%, rgb(27, 27, 31) 100%)" }}>
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute h-[323px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[266.603px]">
              <div className="absolute h-[432.676px] left-[calc(50%-0.18px)] top-0 translate-x-[-50%] w-[272.504px]" data-name="image 29">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[3.236px] items-start justify-center left-[13px] not-italic text-nowrap top-[274.44px] w-[132.67px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[13.591px] text-white tracking-[0.1359px]">Blue Ankara Dress</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[11.865px] tracking-[0.1186px]">Current stock: 2 units</p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_20px_2px_rgba(96,96,248,0.5)]" />
          <div aria-hidden="true" className="absolute border border-[#6060f8] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
        <div className="bg-[#1b1b1f] h-px relative rounded-[10px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-[388px]">
            <BackgroundImage1>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-26px)] not-italic text-[11.436px] text-nowrap text-white top-[calc(50%-7px)] tracking-[0.1144px]">Overview</p>
            </BackgroundImage1>
            <BackgroundImage1 additionalClassNames="opacity-70">
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-19px)] not-italic text-[#6c6c7d] text-[11.436px] text-nowrap top-[calc(50%-7.61px)] tracking-[0.2287px]">Orders</p>
            </BackgroundImage1>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[388px]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] h-[226px] items-start relative rounded-[10px] shrink-0 w-full">
                <div className="h-[158px] relative rounded-[10px] shrink-0 w-[388px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgb(36, 38, 44) 0%, rgb(36, 38, 44) 100%)" }}>
                  <div aria-hidden="true" className="absolute border-[#1d1e23] border-[1.043px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[13px] top-[13.73px] w-[362px]">
                    <BackgroundImage text="Category" text1="Clothing" additionalClassNames="gap-[262px]" />
                    <BackgroundImage text="SKU" text1="PRD-001" additionalClassNames="gap-[287px]" />
                    <BackgroundImage text="Added" text1="Jan 10, 2024" additionalClassNames="gap-[250px]" />
                    <BackgroundImage text="Last Updated" text1="2 days ago" additionalClassNames="gap-[223px]" />
                    <div className="content-stretch flex gap-[213px] items-center relative shrink-0 w-full">
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#6c6c7d] text-[11.6px] text-nowrap tracking-[0.232px]">Connected Apps</p>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[62.732px]">
                        <div className="bg-[#25d366] overflow-clip relative rounded-[6px] shrink-0 size-[15.458px]">
                          <div className="absolute h-[8.919px] left-[calc(50%-0.03px)] top-[calc(50%-0.03px)] translate-x-[-50%] translate-y-[-50%] w-[8.869px]" data-name="Digital_Glyph_Green 1">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                              <g clipPath="url(#clip0_5_1142)" id="Digital_Glyph_Green 1">
                                <path clipRule="evenodd" d={svgPaths.p344f8b00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
                              </g>
                              <defs>
                                <clipPath id="clip0_5_1142">
                                  <rect fill="white" height="8.91859" width="8.86931" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="relative rounded-[6px] shrink-0 size-[15.683px]" data-name="image 39">
                          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[6px] size-full" src={imgImage39} />
                        </div>
                        <div className="bg-[#e2eee7] overflow-clip relative rounded-[6px] shrink-0 size-[15.683px]">
                          <div className="absolute h-[11.037px] left-[calc(50%-0.04px)] top-[calc(50%-0.76px)] translate-x-[-50%] translate-y-[-50%] w-[9.677px]" data-name="image 592">
                            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage592} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                  <BackgroundImage2>
                    <div aria-hidden="true" className="absolute border-[#1d1e23] border-[1.043px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="absolute content-stretch flex flex-col items-start left-[14px] top-[13.73px]">
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px]">2</p>
                        <div className="h-[12px] overflow-clip relative rounded-[3.025px] shrink-0 w-[14px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(234, 37, 37) 0%, rgb(234, 37, 37) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
                          <div className="absolute left-1/2 size-[9.041px] top-[calc(50%-0.48px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                              <g id="Frame">
                                <path d={svgPaths.pfd90600} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.361076" />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#6c6c7d] text-[11px] text-nowrap tracking-[0.22px]">Units in Stock</p>
                    </div>
                  </BackgroundImage2>
                  <BackgroundImage2>
                    <div aria-hidden="true" className="absolute border-[#1d1e23] border-[1.043px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="absolute content-stretch flex flex-col items-start leading-[1.4] left-[14px] not-italic text-nowrap top-[13.73px]">
                      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[12px] text-white tracking-[0.24px]">45</p>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[11px] tracking-[0.22px]">Total Sold</p>
                    </div>
                  </BackgroundImage2>
                  <BackgroundImage2>
                    <div aria-hidden="true" className="absolute border-[#1d1e23] border-[1.043px] border-solid inset-0 pointer-events-none rounded-[10px]" />
                    <div className="absolute content-stretch flex flex-col items-start leading-[1.4] left-[14px] not-italic text-nowrap top-[13.73px]">
                      <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
                        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[12px] text-white tracking-[0.24px]">₦675,000</p>
                        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#2df18f] text-[8px] tracking-[0.16px]">+12%</p>
                      </div>
                      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[11px] tracking-[0.22px]">Total Revenue</p>
                    </div>
                  </BackgroundImage2>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[10px] h-[34px] items-start relative shrink-0 w-full">
              <button className="block cursor-pointer h-full overflow-clip relative rounded-[8px] shrink-0 w-[185px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[69px] not-italic text-[12.4px] text-left text-nowrap text-white top-[calc(50%-7.5px)]">Cancel</p>
              </button>
              <div className="basis-0 bg-[#6060f8] grow h-[34px] min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-40.5px)] not-italic text-[12.4px] text-nowrap text-white top-[calc(50%-7.5px)]">Update Stock</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#141417] border border-[#1f1f24] border-solid h-[44px] left-1/2 overflow-clip rounded-tl-[12px] rounded-tr-[12px] top-[-1.58px] translate-x-[-50%] w-[420px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-193px)] not-italic text-[13.6px] text-nowrap text-white top-[calc(50%-9px)] tracking-[0.136px]">Product Details</p>
        <button className="absolute block cursor-pointer left-[385px] size-[18px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Frame">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Frame">
              <path d={svgPaths.p14009ff0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.33" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}