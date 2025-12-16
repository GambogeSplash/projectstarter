import svgPaths from "./svg-keok9fhdek";

export default function Frame() {
  return (
    <div className="border border-[#1f1f24] border-solid overflow-clip relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(34, 34, 39) 0%, rgb(34, 34, 39) 100%)" }}>
      <div className="absolute border border-[#1f1f24] border-solid h-[44px] left-1/2 overflow-clip rounded-tl-[12px] rounded-tr-[12px] top-[-0.5px] translate-x-[-50%] w-[420px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-193px)] not-italic text-[14px] text-nowrap text-white top-[calc(50%-9.5px)]">Add Product</p>
        <button className="absolute block cursor-pointer left-[385px] size-[18px] top-[calc(50%+1px)] translate-y-[-50%]" data-name="Frame">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Frame">
              <path d={svgPaths.p2f8d3f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.33" />
            </g>
          </svg>
        </button>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start justify-center left-1/2 top-[55px] translate-x-[-50%] w-[388px]">
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[5.856px] h-[30px] items-center relative shrink-0 w-[248px]">
            <div className="bg-[#1b1b1f] h-[28px] relative rounded-[8px] shrink-0 w-[128px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.4] left-[calc(50%-53px)] not-italic text-[#65696f] text-[11.4px] text-nowrap top-[calc(50%-8px)] tracking-[0.114px]">Connect Storefront</p>
              </div>
              <div aria-hidden="true" className="absolute border-[#232329] border-[0.922px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            <div className="bg-[#24242a] h-[28px] relative rounded-[8px] shrink-0 w-[132px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[1.4] left-[calc(50%-56px)] not-italic text-[11.2px] text-nowrap text-white top-[calc(50%-8px)] tracking-[0.224px]">Upload Spreedsheet</p>
              </div>
              <div aria-hidden="true" className="absolute border-[#2b2c32] border-[0.922px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>
          <div className="h-[210px] relative rounded-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(90deg, rgb(39, 39, 45) 0%, rgb(39, 39, 45) 100%)" }}>
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex flex-col gap-[4px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[118px]">
                <div className="relative shrink-0 size-[22px]" data-name="Frame">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <g id="Frame">
                      <path d={svgPaths.p11fbc140} fill="var(--fill-0, white)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-center text-nowrap text-white tracking-[0.12px]">Upload your product spreedsheet here</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5e5e66] text-[12px] text-center text-nowrap tracking-[0.12px]">or click to browse (.csv files only)</p>
              </div>
            </div>
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_0px_20px_2px_rgba(96,96,248,0.5)]" />
            <div aria-hidden="true" className="absolute border border-[#6060f8] border-dashed inset-0 pointer-events-none rounded-[8px]" />
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          <div className="overflow-clip relative rounded-[8px] self-stretch shrink-0 w-[185px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[69px] not-italic text-[12.4px] text-nowrap text-white top-[calc(50%-7.5px)]">Cancel</p>
          </div>
          <div className="basis-0 bg-[#6060f8] grow h-[34px] min-h-px min-w-px overflow-clip relative rounded-[8px] shrink-0">
            <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-27px)] not-italic text-[12.4px] text-nowrap text-white top-[calc(50%-7.5px)]">Continue</p>
          </div>
        </div>
      </div>
    </div>
  );
}