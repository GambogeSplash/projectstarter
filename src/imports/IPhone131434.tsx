import svgPaths from "./svg-gegnalwb1q";
import clsx from "clsx";
import imgImage27 from "figma:asset/970a6099d18ecdde86b25fd865a31ac8af661858.png";
import imgImage28 from "figma:asset/d113bba5048453f815b2aaa16856202bc9801a38.png";
import imgImage29 from "figma:asset/7fb6752fa1b0dfa20e9398de73a380bf223fc3b6.png";
import imgImage30 from "figma:asset/578110739e5ed34f52c8a1403ab222281341fc88.png";
import imgImage31 from "figma:asset/a4ed4a16dee4a7e223e87c2e52fc0168d955ebe1.png";
import imgImage32 from "figma:asset/b135fd57d9e8fc11da7d87b2b118d0dff06d5205.png";
import imgImage33 from "figma:asset/16425050cfc58002d2ff51954632729459cc4c09.png";
import imgBananaMint1 from "figma:asset/2c2da8ff7a3e794c4bb7607f236b58c53dcc301c.png";
import { imgBananaMint } from "./svg-9pyx1";
type BackgroundImage3Props = {
  additionalClassNames?: string;
};

function BackgroundImage3({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage3Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }} className={clsx("relative shrink-0", additionalClassNames)}>
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
type BackgroundImage2Props = {
  additionalClassNames?: string;
};

function BackgroundImage2({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage2Props>) {
  return (
    <div className={clsx("bg-[#1b1b1f] relative rounded-[8.958px] shrink-0 w-[320px]", additionalClassNames)}>
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#1f1f24] border-[0.896px] border-solid inset-0 pointer-events-none rounded-[8.958px]" />
    </div>
  );
}

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#2d2d34] h-[17.02px] relative rounded-[4.479px] shrink-0 w-[31.352px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[0.896px] border-solid inset-0 pointer-events-none rounded-[4.479px]" />
    </div>
  );
}

function FrameBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8.958px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-1/2 size-[11.645px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">{children}</g>
      </svg>
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

function FrameBackgroundImage1() {
  return (
    <BackgroundImage>
      <path d={svgPaths.p434af00} fill="var(--fill-0, #626269)" id="Vector" stroke="var(--stroke-0, #626269)" strokeWidth="0.895784" />
    </BackgroundImage>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <BackgroundImage3 additionalClassNames="h-[17.02px] rounded-[4.479px] w-[49.268px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-18.81px)] not-italic text-[#848490] text-[9.854px] text-nowrap top-[calc(50%-6.72px)]">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[0.896px] border-solid inset-0 pointer-events-none rounded-[4.479px]" />
    </BackgroundImage3>
  );
}

function FrameBackgroundImage() {
  return (
    <BackgroundImage>
      <path d={svgPaths.pd802a00} fill="var(--fill-0, #626269)" id="Vector" stroke="var(--stroke-0, #626269)" strokeWidth="0.895784" />
    </BackgroundImage>
  );
}
type ImageBackgroundImageProps = {
  additionalClassNames?: string;
};

function ImageBackgroundImage({ additionalClassNames = "" }: ImageBackgroundImageProps) {
  return (
    <div className={clsx("absolute left-[calc(50%-0.06px)] size-[155.542px] translate-x-[-50%] translate-y-[-50%]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage27} />
    </div>
  );
}

export default function IPhone() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="iPhone 13 & 14 - 34">
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
      <div className="absolute bg-[#131316] border-[#191919] border-[0px_0px_1px] border-solid bottom-[95.1%] left-[calc(50%+0.5px)] top-[2.45%] translate-x-[-50%] w-[389px]" data-name="Header">
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
      <div className="absolute content-stretch flex flex-col gap-[22px] items-center justify-center left-1/2 top-[140px] translate-x-[-50%] w-[358px]">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-[320px]">
          <div className="content-stretch flex h-[44px] items-center pl-0 pr-[68px] py-0 relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[3px] items-start mr-[-68px] not-italic overflow-clip relative shrink-0 text-nowrap w-[279px]">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-right text-white">Inventory</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[13px] tracking-[0.13px]">Get personalized answers on your inventory.</p>
            </div>
          </div>
          <div className="bg-[#1b1b1f] h-[50px] relative rounded-[10px] shrink-0 w-full">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-66.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[165px]">
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
                <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12px] text-nowrap text-right text-white">Add Product</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[17.916px] items-center justify-center relative rounded-[10.299px] shrink-0 w-full">
          <div className="bg-[#1b1b1f] h-[363px] relative rounded-[10px] shrink-0 w-[320px]">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bg-[#e3e3e3] h-[270px] left-1/2 overflow-clip top-px translate-x-[-50%] w-[320px]">
                <ImageBackgroundImage additionalClassNames="top-[calc(50%-30.63px)]" />
                <div className="absolute h-[416.324px] left-[calc(50%+0.1px)] top-0 translate-x-[-50%] w-[262.206px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.66px] border-solid left-[290px] overflow-clip rounded-[6.603px] size-[22.451px] top-[7.17px]">
                  <BackgroundImage>
                    <path d={svgPaths.p317d7d80} fill="var(--fill-0, #626269)" id="Vector" stroke="var(--stroke-0, #626269)" strokeWidth="0.895784" />
                  </BackgroundImage>
                </div>
                <div className="absolute border-[#929298] border-[0.896px] border-solid left-[7.17px] rounded-[5.375px] size-[17.916px] top-[7.17px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[4.402px] items-start justify-center left-[14px] top-[282.1px] w-[121.262px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[12.816px] text-nowrap tracking-[0.1282px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[7.887px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[16.76px] text-nowrap text-white tracking-[-0.3352px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.943px] items-center relative shrink-0">
                    <div className="bg-[#2d2d34] h-[18.731px] relative rounded-[4.929px] shrink-0 w-[34.505px]">
                      <div className="overflow-clip relative rounded-[inherit] size-full">
                        <div className="absolute content-stretch flex gap-[4.929px] items-center left-[calc(50%-0.49px)] top-[calc(50%-0.99px)] translate-x-[-50%] translate-y-[-50%]">
                          <div className="relative shrink-0 size-[9.859px]" data-name="Frame">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                              <g clipPath="url(#clip0_5_3694)" id="Frame">
                                <path d={svgPaths.pfbe0100} fill="var(--fill-0, white)" id="Vector" />
                              </g>
                              <defs>
                                <clipPath id="clip0_5_3694">
                                  <rect fill="white" height="9.85868" width="9.85868" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[10.845px] text-nowrap text-white">2</p>
                        </div>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[0.986px] border-solid inset-0 pointer-events-none rounded-[4.929px]" />
                    </div>
                    <BackgroundImage3 additionalClassNames="h-[18.731px] rounded-[4.929px] w-[54.223px]">
                      <div className="overflow-clip relative rounded-[inherit] size-full">
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-20.7px)] not-italic text-[#848490] text-[10.845px] text-nowrap top-[calc(50%-7.4px)]">clothing</p>
                      </div>
                      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[0.986px] border-solid inset-0 pointer-events-none rounded-[4.929px]" />
                    </BackgroundImage3>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-[#232328] border-[0.896px] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <BackgroundImage2 additionalClassNames="h-[323px]">
            <div className="absolute bg-[#f6f9f8] h-[243.653px] left-1/2 overflow-clip top-[0.9px] translate-x-[-50%] w-[320px]">
              <div className="absolute h-[245.343px] left-[calc(50%-5.57px)] top-[7.17px] translate-x-[-50%] w-[154.52px]" data-name="image 28">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
              </div>
              <div className="absolute bg-white border-[#dedeeb] border-[0.66px] border-solid left-[290px] overflow-clip rounded-[6.603px] size-[22.451px] top-[7.17px]">
                <FrameBackgroundImage />
              </div>
              <div className="absolute border-[#929298] border-[0.896px] border-solid left-[7.17px] rounded-[5.375px] size-[17.916px] top-[7.17px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[2.687px] items-start justify-center left-[10.6px] top-[251.71px] w-[110.181px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.645px] text-nowrap tracking-[0.1165px]">Blue Ankara Dress</p>
              <div className="content-stretch flex flex-col gap-[7.166px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15.228px] text-nowrap text-white tracking-[-0.3046px]">₦15,000</p>
                <div className="content-stretch flex gap-[3.583px] items-center relative shrink-0">
                  <BackgroundImage1>
                    <div className="absolute content-stretch flex gap-[4.479px] items-center left-[calc(50%-0.45px)] top-[calc(50%-0.9px)] translate-x-[-50%] translate-y-[-50%]">
                      <FrameBackgroundImage2>
                        <g clipPath="url(#clip0_5_3700)" id="Frame">
                          <path d={svgPaths.p21e64cf0} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_3700">
                            <rect fill="white" height="8.95784" width="8.95784" />
                          </clipPath>
                        </defs>
                      </FrameBackgroundImage2>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.854px] text-nowrap text-white">2</p>
                    </div>
                  </BackgroundImage1>
                  <BackgroundImageAndText text="clothing" />
                </div>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2 additionalClassNames="h-[322px]">
            <div className="absolute bg-[#ededed] h-[243.653px] left-1/2 overflow-clip top-[0.9px] translate-x-[-50%] w-[320px]">
              <div className="absolute h-[231.084px] left-[calc(50%+0.1px)] top-[12.57px] translate-x-[-50%] w-[145.539px]" data-name="image 28">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage30} />
              </div>
              <div className="absolute bg-white border-[#dedeeb] border-[0.66px] border-solid left-[290px] overflow-clip rounded-[6.603px] size-[22.451px] top-[7.17px]">
                <FrameBackgroundImage />
              </div>
              <div className="absolute border-[#929298] border-[0.896px] border-solid left-[7.17px] rounded-[5.375px] size-[17.916px] top-[7.17px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[2.687px] items-start justify-center left-[10.6px] top-[251.71px] w-[110.181px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.645px] text-nowrap tracking-[0.1165px]">Blue Ankara Dress</p>
              <div className="content-stretch flex flex-col gap-[7.166px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15.228px] text-nowrap text-white tracking-[-0.3046px]">₦15,000</p>
                <div className="content-stretch flex gap-[3.583px] items-center relative shrink-0">
                  <div className="h-[17.02px] overflow-clip relative rounded-[4.479px] shrink-0 w-[31.352px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(234, 37, 37) 0%, rgb(234, 37, 37) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
                    <div className="absolute content-stretch flex gap-[4.479px] items-center left-[calc(50%-0.45px)] top-[calc(50%-0.9px)] translate-x-[-50%] translate-y-[-50%]">
                      <FrameBackgroundImage2>
                        <g clipPath="url(#clip0_5_3697)" id="Frame">
                          <path d={svgPaths.p574af40} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_3697">
                            <rect fill="white" height="8.95784" width="8.95784" />
                          </clipPath>
                        </defs>
                      </FrameBackgroundImage2>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.854px] text-nowrap text-white">2</p>
                    </div>
                  </div>
                  <BackgroundImageAndText text="clothing" />
                </div>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2 additionalClassNames="h-[323px]">
            <div className="absolute bg-[#eee] h-[243.653px] left-1/2 overflow-clip top-[0.9px] translate-x-[-50%] w-[320px]">
              <ImageBackgroundImage additionalClassNames="top-[calc(50%-30.46px)]" />
              <div className="absolute h-[373.664px] left-[calc(50%+0.1px)] top-[14.33px] translate-x-[-50%] w-[235.338px]" data-name="image 28">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
              </div>
              <div className="absolute bg-white border-[#dedeeb] border-[0.66px] border-solid left-[290px] overflow-clip rounded-[6.603px] size-[22.451px] top-[7.17px]">
                <FrameBackgroundImage1 />
              </div>
              <div className="absolute border-[#929298] border-[0.896px] border-solid left-[7.17px] rounded-[5.375px] size-[17.916px] top-[7.17px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[2.687px] items-start justify-center left-[10.6px] top-[251.72px] w-[110.181px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.645px] text-nowrap tracking-[0.1165px]">Blue Ankara Dress</p>
              <div className="content-stretch flex flex-col gap-[7.166px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15.228px] text-nowrap text-white tracking-[-0.3046px]">₦15,000</p>
                <div className="content-stretch flex gap-[3.583px] items-center relative shrink-0">
                  <BackgroundImage1>
                    <div className="absolute content-stretch flex gap-[4.479px] items-center left-[calc(50%-0.45px)] top-[calc(50%-0.9px)] translate-x-[-50%] translate-y-[-50%]">
                      <FrameBackgroundImage2>
                        <g clipPath="url(#clip0_5_3682)" id="Frame">
                          <path d={svgPaths.p92e9e80} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_3682">
                            <rect fill="white" height="8.95784" width="8.95784" />
                          </clipPath>
                        </defs>
                      </FrameBackgroundImage2>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.854px] text-nowrap text-white">2</p>
                    </div>
                  </BackgroundImage1>
                  <BackgroundImageAndText text="clothing" />
                </div>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2 additionalClassNames="h-[322px]">
            <div className="absolute bg-[#f6f9f8] h-[243.653px] left-1/2 overflow-clip top-[0.9px] translate-x-[-50%] w-[320px]">
              <ImageBackgroundImage additionalClassNames="top-[calc(50%-30.46px)]" />
              <div className="absolute h-[418.369px] left-1/2 top-[-38px] translate-x-[-50%] w-[320px]" data-name="image 28">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
              </div>
              <div className="absolute bg-white border-[#dedeeb] border-[0.66px] border-solid left-[290px] overflow-clip rounded-[6.603px] size-[22.451px] top-[7.17px]">
                <FrameBackgroundImage1 />
              </div>
              <div className="absolute border-[#929298] border-[0.896px] border-solid left-[7.17px] rounded-[5.375px] size-[17.916px] top-[7.17px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[2.687px] items-start justify-center left-[10.6px] top-[251.72px] w-[110.181px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.645px] text-nowrap tracking-[0.1165px]">Blue Ankara Dress</p>
              <div className="content-stretch flex flex-col gap-[7.166px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15.228px] text-nowrap text-white tracking-[-0.3046px]">₦15,000</p>
                <div className="content-stretch flex gap-[3.583px] items-center relative shrink-0">
                  <BackgroundImage1>
                    <div className="absolute content-stretch flex gap-[4.479px] items-center left-[calc(50%-0.45px)] top-[calc(50%-0.9px)] translate-x-[-50%] translate-y-[-50%]">
                      <FrameBackgroundImage2>
                        <g clipPath="url(#clip0_5_3685)" id="Frame">
                          <path d={svgPaths.pf801c80} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_3685">
                            <rect fill="white" height="8.95784" width="8.95784" />
                          </clipPath>
                        </defs>
                      </FrameBackgroundImage2>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.854px] text-nowrap text-white">2</p>
                    </div>
                  </BackgroundImage1>
                  <BackgroundImageAndText text="clothing" />
                </div>
              </div>
            </div>
          </BackgroundImage2>
          <BackgroundImage2 additionalClassNames="h-[322px]">
            <div className="absolute bg-[#ededed] h-[243.653px] left-1/2 overflow-clip top-[0.9px] translate-x-[-50%] w-[320px]">
              <ImageBackgroundImage additionalClassNames="top-[calc(50%-30.46px)]" />
              <div className="absolute h-[356.266px] left-[calc(50%+0.09px)] top-0 translate-x-[-50%] w-[224.38px]" data-name="image 28">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage33} />
              </div>
              <div className="absolute bg-white border-[#dedeeb] border-[0.66px] border-solid left-[290px] overflow-clip rounded-[6.603px] size-[22.451px] top-[7.17px]">
                <BackgroundImage>
                  <path d={svgPaths.p34c91bf0} fill="var(--fill-0, #626269)" id="Vector" stroke="var(--stroke-0, #626269)" strokeWidth="0.895784" />
                </BackgroundImage>
              </div>
              <div className="absolute border-[#929298] border-[0.896px] border-solid left-[7.17px] rounded-[5.375px] size-[17.916px] top-[7.17px]" />
            </div>
            <div className="absolute content-stretch flex flex-col gap-[2.687px] items-start justify-center left-[10.6px] top-[251.72px] w-[110.181px]">
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.645px] text-nowrap tracking-[0.1165px]">Blue Ankara Dress</p>
              <div className="content-stretch flex flex-col gap-[7.166px] items-start relative shrink-0">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[15.228px] text-nowrap text-white tracking-[-0.3046px]">₦15,000</p>
                <div className="content-stretch flex gap-[3.583px] items-center relative shrink-0">
                  <BackgroundImage1>
                    <div className="absolute content-stretch flex gap-[4.479px] items-center left-[calc(50%-0.45px)] top-[calc(50%-0.9px)] translate-x-[-50%] translate-y-[-50%]">
                      <FrameBackgroundImage2>
                        <g clipPath="url(#clip0_5_3676)" id="Frame">
                          <path d={svgPaths.pb94cfc0} fill="var(--fill-0, white)" id="Vector" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_3676">
                            <rect fill="white" height="8.95784" width="8.95784" />
                          </clipPath>
                        </defs>
                      </FrameBackgroundImage2>
                      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.854px] text-nowrap text-white">2</p>
                    </div>
                  </BackgroundImage1>
                  <BackgroundImageAndText text="clothing" />
                </div>
              </div>
            </div>
          </BackgroundImage2>
        </div>
      </div>
      <div className="absolute bottom-[18px] content-stretch flex gap-[10px] items-center left-[calc(50%+6px)] translate-x-[-50%]" data-name="Tabs Mode Compact">
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