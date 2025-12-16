import svgPaths from "./svg-830r66t3m7";
import imgImage30 from "figma:asset/a283c4770f4329f7b6f5fd17fd6443562040eeac.png";

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        {children}
      </svg>
    </div>
  );
}

function FrameBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <BackgroundImage>
      <g id="Frame">{children}</g>
    </BackgroundImage>
  );
}

function FrameBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[15px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1b1b1f] h-px relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="border border-[#232328] border-solid overflow-clip relative rounded-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.16) 0%, rgba(0, 0, 0, 0.16) 100%), linear-gradient(90deg, rgb(34, 34, 39) 0%, rgb(34, 34, 39) 100%)" }}>
      <div className="absolute content-stretch flex flex-col gap-[14px] items-start left-1/2 top-[14px] translate-x-[-50%] w-[189px]">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <div className="bg-[#f36d21] overflow-clip relative rounded-[8.455px] shrink-0 size-[28.748px]">
            <div className="absolute h-[15.258px] left-[calc(50%+0.4px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[15.256px]" data-name="image 30">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[571.69%] left-[-290.24%] max-w-none top-[-236.29%] w-[1089.09%]" src={imgImage30} />
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white tracking-[0.24px]">ZALANDO DE</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[11px] tracking-[0.11px]">Free Plan</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
          <Frame />
          <div className="content-stretch flex gap-[7px] h-[15.811px] items-center relative shrink-0 w-full">
            <BackgroundImage>
              <g clipPath="url(#clip0_5_1398)" id="Frame">
                <path d={svgPaths.p11e1b800} fill="var(--fill-0, #878791)" id="Vector" stroke="var(--stroke-0, #878791)" strokeWidth="0.34" />
              </g>
              <defs>
                <clipPath id="clip0_5_1398">
                  <rect fill="white" height="14" width="14" />
                </clipPath>
              </defs>
            </BackgroundImage>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.2px] text-nowrap tracking-[0.244px]">Upgrade Plan</p>
          </div>
          <div className="content-stretch flex gap-[7px] h-[15.811px] items-center relative shrink-0 w-full">
            <FrameBackgroundImage>
              <path d={svgPaths.p13057a00} fill="var(--fill-0, #878791)" id="Vector" stroke="var(--stroke-0, #878791)" strokeWidth="0.34" />
            </FrameBackgroundImage>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.2px] text-nowrap tracking-[0.244px]">Personalization</p>
          </div>
          <div className="content-stretch flex gap-[7px] h-[15.811px] items-center relative shrink-0 w-full">
            <FrameBackgroundImage>
              <path d={svgPaths.p3c0a5200} fill="var(--fill-0, #878791)" id="Vector" stroke="var(--stroke-0, #878791)" strokeWidth="0.34" />
            </FrameBackgroundImage>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.2px] text-nowrap tracking-[0.244px]">Settings</p>
          </div>
          <Frame />
          <div className="content-stretch flex gap-[6px] h-[15.811px] items-center relative shrink-0">
            <FrameBackgroundImage1>
              <path d={svgPaths.p126c0380} fill="var(--fill-0, #878791)" id="Vector" stroke="var(--stroke-0, #878791)" strokeWidth="0.34" />
            </FrameBackgroundImage1>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.2px] text-nowrap tracking-[0.244px]">{`Help & Support`}</p>
          </div>
          <div className="content-stretch flex gap-[7.905px] h-[15.811px] items-center relative shrink-0 w-full">
            <FrameBackgroundImage1>
              <path d={svgPaths.p2285a500} fill="var(--fill-0, #878791)" id="Vector" stroke="var(--stroke-0, #878791)" strokeWidth="0.34" />
            </FrameBackgroundImage1>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.2px] text-nowrap tracking-[0.244px]">Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
}