import svgPaths from "./svg-zodkguw222";
import clsx from "clsx";
import imgImage27 from "figma:asset/970a6099d18ecdde86b25fd865a31ac8af661858.png";
import imgImage28 from "figma:asset/d113bba5048453f815b2aaa16856202bc9801a38.png";
import imgImage30 from "figma:asset/a283c4770f4329f7b6f5fd17fd6443562040eeac.png";

function BackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(39, 39, 45) 0%, rgb(39, 39, 45) 100%)" }} className="h-[34px] relative rounded-[8px] shrink-0 w-full">
      {children}
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ children, text, text1 }: React.PropsWithChildren<BackgroundImageProps>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(90deg, rgb(39, 39, 45) 0%, rgb(39, 39, 45) 100%)" }} className="basis-0 grow h-[90px] min-h-px min-w-px relative rounded-[10px] shrink-0">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-1/2 not-italic text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%] w-[86px]">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white tracking-[0.24px]">{text}</p>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[11px] tracking-[0.11px]">{text1}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#222228] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
type FrameBackgroundImageProps = {
  additionalClassNames?: string;
};

function FrameBackgroundImage({ children, additionalClassNames = "" }: React.PropsWithChildren<FrameBackgroundImageProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="overflow-clip relative rounded-[inherit] size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[12px] not-italic text-[#5e5e66] text-[12px] text-nowrap top-[calc(50%-7.44px)] tracking-[0.12px]">{text}</p>
      <div className="absolute left-[359px] size-[16px] top-1/2 translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Frame">
            <path d={svgPaths.pb528080} fill="var(--fill-0, #5F5F65)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="border border-[#1f1f24] border-solid overflow-clip relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(34, 34, 39) 0%, rgb(34, 34, 39) 100%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[16px] items-center left-1/2 top-[59px] translate-x-[-50%] w-[388px]">
        <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
          <div className="bg-[#1b1b1f] h-[52px] relative rounded-[10px] shrink-0 w-full">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-103.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[165px]">
                <div className="bg-[#f36d21] overflow-clip relative rounded-[8px] shrink-0 size-[34px]">
                  <div className="absolute h-[18.046px] left-[calc(50%+0.47px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18.043px]" data-name="image 30">
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <img alt="" className="absolute h-[571.69%] left-[-290.24%] max-w-none top-[-236.29%] w-[1089.09%]" src={imgImage30} />
                    </div>
                  </div>
                  <div className="absolute bg-[#e3e3e3] h-[37.494px] left-1/2 overflow-clip top-0 translate-x-[-50%] w-[39.424px]">
                    <div className="absolute left-[calc(50%-0.03px)] size-[23.935px] top-[calc(50%-4.69px)] translate-x-[-50%] translate-y-[-50%]" data-name="image 27">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage27} />
                    </div>
                    <div className="absolute h-[64.065px] left-1/2 top-0 translate-x-[-50%] w-[40.349px]" data-name="image 28">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
                    </div>
                  </div>
                </div>
                <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12.6px] text-white tracking-[0.126px]">Blue Ankara Dress</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[11px] tracking-[0.11px]">Current stock: 2 units</p>
                </div>
              </div>
              <div className="absolute border-[#2f2f35] border-[0.961px] border-solid h-[30.767px] left-[273.27px] overflow-clip rounded-[6.865px] top-1/2 translate-y-[-50%] w-[106.412px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
                <div className="absolute content-stretch flex gap-[6.54px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <FrameBackgroundImage additionalClassNames="size-[11.538px]">
                    <path d={svgPaths.p1ed87300} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.326896" />
                  </FrameBackgroundImage>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11.153px] text-nowrap text-white">Edit Product</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <div className="bg-[#1b1b1f] h-px relative rounded-[10px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12.4px] text-nowrap text-white">Quick Restock Options</p>
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
              <BackgroundImage text="10" text1="Weekly average" />
              <BackgroundImage text="20" text1="Recommended" />
              <BackgroundImage text="50" text1="Bulk discount" />
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[0px] text-[12.4px] text-white w-full">
              New Stock Count <span className="text-[#d12d2d]">*</span>
            </p>
            <BackgroundImage1>
              <BackgroundImageAndText text="10" />
              <div aria-hidden="true" className="absolute border-[#6060f8] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </BackgroundImage1>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12.4px] text-white w-full">Restock Cost (Optional)</p>
            <BackgroundImage1>
              <BackgroundImageAndText text="15,000" />
              <div aria-hidden="true" className="absolute border border-[#24242a] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </BackgroundImage1>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
          <button className="block cursor-pointer overflow-clip relative rounded-[8px] self-stretch shrink-0 w-[185px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[69px] not-italic text-[12.4px] text-left text-nowrap text-white top-[calc(50%-7.5px)]">Cancel</p>
          </button>
          <div className="basis-0 bg-[#6060f8] grow h-[34px] min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-40.5px)] not-italic text-[12.4px] text-nowrap text-white top-[calc(50%-7.5px)]">Update Stock</p>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#1f1f24] border-solid h-[44px] left-1/2 overflow-clip rounded-tl-[12px] rounded-tr-[12px] top-[-0.5px] translate-x-[-50%] w-[420px]">
        <button className="absolute block cursor-pointer left-[385px] size-[18px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Frame">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Frame">
              <path d={svgPaths.p14009ff0} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.33" />
            </g>
          </svg>
        </button>
        <div className="absolute content-stretch flex gap-[5px] items-center left-[17px] top-1/2 translate-y-[-50%]">
          <FrameBackgroundImage additionalClassNames="size-[12px]">
            <path d={svgPaths.pa6c8700} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.34" />
          </FrameBackgroundImage>
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[13px] text-nowrap text-white tracking-[0.13px]">Back</p>
        </div>
      </div>
    </div>
  );
}