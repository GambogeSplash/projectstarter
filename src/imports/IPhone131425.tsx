import svgPaths from "./svg-u78v9s7nvf";
import clsx from "clsx";
import imgImage593 from "figma:asset/2667586cd38c65745259f9696dd541557e483dbe.png";
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

function BackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }} className="h-[44px] relative rounded-[9px] shrink-0 w-full">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#2f2f36] border-solid inset-0 pointer-events-none rounded-[9px]" />
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

function Frame() {
  return <div className="bg-[#303033] h-px shrink-0 w-[157px]" />;
}

export default function IPhone() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="iPhone 13 & 14 - 25">
      <div className="absolute content-stretch flex flex-col gap-[20px] items-center left-1/2 top-[calc(50%-34.72px)] translate-x-[-50%] translate-y-[-50%] w-[350px]">
        <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-[326px]">
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
          <div className="content-stretch flex flex-col gap-[4px] items-center leading-[normal] not-italic relative shrink-0 w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold min-w-full relative shrink-0 text-[24px] text-center text-white tracking-[-0.12px] w-[min-content]">Welcome to CHIDI</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#5e5e66] text-[14px] text-nowrap tracking-[0.14px]">{`Your AI business assistant for WhatsApp & Instagram `}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <BackgroundImage>
              <div className="absolute content-stretch flex gap-[8px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <div className="relative shrink-0 size-[13.982px]" data-name="google-icon-logo-svgrepo-com 2">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_1_60)" id="google-icon-logo-svgrepo-com 2">
                      <path d={svgPaths.p5a9cc0} fill="var(--fill-0, #4285F4)" id="Vector" />
                      <path d={svgPaths.p1c81fc80} fill="var(--fill-0, #34A853)" id="Vector_2" />
                      <path d={svgPaths.pe7a1400} fill="var(--fill-0, #FBBC05)" id="Vector_3" />
                      <path d={svgPaths.p29b60600} fill="var(--fill-0, #EB4335)" id="Vector_4" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_60">
                        <rect fill="white" height="13.9824" width="13.9824" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Continue with Google</p>
              </div>
            </BackgroundImage>
            <BackgroundImage>
              <div className="absolute content-stretch flex gap-[8px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <div className="h-[16.546px] relative shrink-0 w-[14.508px]" data-name="image 593">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage593} />
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Continue with Shopify</p>
              </div>
            </BackgroundImage>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <Frame />
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#424246] text-[11px] text-nowrap">OR</p>
            <Frame />
          </div>
          <div className="content-stretch flex flex-col gap-[10.211px] items-center relative shrink-0 w-full">
            <div className="h-[44px] relative rounded-[9px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgb(39, 39, 45) 0%, rgb(39, 39, 45) 100%)" }}>
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[14px] not-italic text-[#5e5e66] text-[13.228px] text-nowrap top-[calc(50%-7.77px)]">Enter email for magic link</p>
              </div>
              <div aria-hidden="true" className="absolute border-[#6060f8] border-[1.021px] border-solid inset-0 pointer-events-none rounded-[9px]" />
            </div>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#5e5e66] text-[12.253px] text-center tracking-[0.1225px] w-[360.727px]">{`By continuing, you agree to CHIDI's Terms & Privacy Policy`}</p>
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