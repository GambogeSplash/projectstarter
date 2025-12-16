import svgPaths from "./svg-tebv238ptz";
import clsx from "clsx";
import imgImage27 from "figma:asset/970a6099d18ecdde86b25fd865a31ac8af661858.png";
import imgImage28 from "figma:asset/d113bba5048453f815b2aaa16856202bc9801a38.png";
import imgImage29 from "figma:asset/7fb6752fa1b0dfa20e9398de73a380bf223fc3b6.png";
import imgImage30 from "figma:asset/578110739e5ed34f52c8a1403ab222281341fc88.png";
import imgImage31 from "figma:asset/a4ed4a16dee4a7e223e87c2e52fc0168d955ebe1.png";
import imgImage32 from "figma:asset/b135fd57d9e8fc11da7d87b2b118d0dff06d5205.png";
import imgImage33 from "figma:asset/16425050cfc58002d2ff51954632729459cc4c09.png";
import imgImage34 from "figma:asset/a283c4770f4329f7b6f5fd17fd6443562040eeac.png";
type BackgroundImage6Props = {
  additionalClassNames?: string;
};

function BackgroundImage6({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage6Props>) {
  return (
    <div style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }} className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}

function BackgroundImage5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#1b1b1f] h-[313.126px] relative rounded-[8.698px] shrink-0 w-[250.501px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#1f1f24] border-[0.87px] border-solid inset-0 pointer-events-none rounded-[8.698px]" />
    </div>
  );
}

function BackgroundImage4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[8.698px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
        {children}
      </svg>
    </div>
  );
}

function BackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#2d2d34] h-[16.526px] relative rounded-[4.349px] shrink-0 w-[30.443px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[0.87px] border-solid inset-0 pointer-events-none rounded-[4.349px]" />
    </div>
  );
}

function FrameBackgroundImage3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

function FrameBackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[15.153px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute left-1/2 size-[11.307px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

function BackgroundImage1() {
  return (
    <BackgroundImage3>
      <div className="absolute content-stretch flex gap-[4.349px] items-center left-[calc(50%-0.43px)] top-[calc(50%-0.87px)] translate-x-[-50%] translate-y-[-50%]">
        <BackgroundImage4>
          <g clipPath="url(#clip0_4_949)" id="Frame">
            <path d={svgPaths.p22b55900} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <defs>
            <clipPath id="clip0_4_949">
              <rect fill="white" height="8.69794" width="8.69794" />
            </clipPath>
          </defs>
        </BackgroundImage4>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.568px] text-nowrap text-white">{"2"}</p>
      </div>
    </BackgroundImage3>
  );
}

function FrameBackgroundImage1() {
  return (
    <BackgroundImage2>
      <path d={svgPaths.ped2800} fill="var(--fill-0, #626269)" id="Vector" stroke="var(--stroke-0, #626269)" strokeWidth="0.869794" />
    </BackgroundImage2>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <BackgroundImage6 additionalClassNames="h-[16.526px] rounded-[4.349px] w-[47.839px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[calc(50%-18.27px)] not-italic text-[#848490] text-[9.568px] text-nowrap top-[calc(50%-6.52px)]">{text}</p>
      </div>
      <div aria-hidden="true" className="absolute border-[#2d2d34] border-[0.87px] border-solid inset-0 pointer-events-none rounded-[4.349px]" />
    </BackgroundImage6>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage3>
      <BackgroundImageAndText text="2" />
    </BackgroundImage3>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="absolute content-stretch flex gap-[4.349px] items-center left-[calc(50%-0.43px)] top-[calc(50%-0.87px)] translate-x-[-50%] translate-y-[-50%]">
      <BackgroundImage4>
        <g clipPath="url(#clip0_4_955)" id="Frame">
          <path d={svgPaths.p503ed80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_4_955">
            <rect fill="white" height="8.69794" width="8.69794" />
          </clipPath>
        </defs>
      </BackgroundImage4>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[9.568px] text-nowrap text-white">{text}</p>
    </div>
  );
}

function ImageBackgroundImage() {
  return (
    <div className="absolute left-[calc(50%-0.16px)] size-[151.029px] top-[calc(50%-29.57px)] translate-x-[-50%] translate-y-[-50%]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage27} />
    </div>
  );
}

function FrameBackgroundImage() {
  return (
    <BackgroundImage2>
      <path d={svgPaths.p25925a80} fill="var(--fill-0, #626269)" id="Vector" stroke="var(--stroke-0, #626269)" strokeWidth="0.869794" />
    </BackgroundImage2>
  );
}

export default function Component() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="7">
      <div className="absolute bg-[#131316] border-[#2f2f31] border-[0px_0.5px_0px_0px] border-solid h-[830px] left-0 overflow-clip top-0 w-[248px]">
        <div className="absolute border-[#2f2f31] border-[0.5px_0px_0px] border-solid h-[86px] left-0 overflow-clip top-[744px] w-[247px]">
          <div className="absolute bg-[#1b1b1f] border border-[#28282d] border-solid h-[50px] left-[12px] overflow-clip rounded-[10px] top-[calc(50%-0.25px)] translate-y-[-50%] w-[224px]">
            <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-19.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[165px]">
              <div className="bg-[#f36d21] overflow-clip relative rounded-[10px] shrink-0 size-[34px]">
                <div className="absolute h-[18.046px] left-[calc(50%+0.47px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18.043px]" data-name="image 30">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <img alt="" className="absolute h-[571.69%] left-[-290.24%] max-w-none top-[-236.29%] w-[1089.09%]" src={imgImage34} />
                  </div>
                </div>
              </div>
              <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white tracking-[0.24px]">ZALANDO DE</p>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[11px] tracking-[0.11px]">Free Plan</p>
              </div>
            </div>
            <div className="absolute left-[199px] size-[16px] top-1/2 translate-y-[-50%]" data-name="Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <g id="Frame">
                  <path d={svgPaths.pb528080} fill="var(--fill-0, #5F5F65)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#1f1f24] border-[#6060f8] border-[0px_0px_0px_2px] border-solid h-[36px] left-0 top-[113px] w-[248px]" />
        <div className="absolute content-stretch flex items-center justify-between left-[calc(50%+0.25px)] top-[15.39px] translate-x-[-50%] w-[214px]">
          <div className="bg-[#6060f8] h-[30.608px] overflow-clip relative rounded-[8px] shrink-0 w-[31.129px]">
            <div className="absolute left-1/2 size-[18.311px] top-[calc(50%+0.26px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
                <g id="Frame">
                  <path d={svgPaths.p1bc27480} fill="var(--fill-0, white)" id="Vector" />
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <FrameBackgroundImage3>
              <path d={svgPaths.p27447000} fill="var(--fill-0, #696972)" id="Vector" stroke="var(--stroke-0, #696972)" strokeWidth="0.3" />
            </FrameBackgroundImage3>
            <FrameBackgroundImage3>
              <path d={svgPaths.p11c56280} fill="var(--fill-0, #696972)" id="Vector" stroke="var(--stroke-0, #696972)" strokeWidth="0.3" />
            </FrameBackgroundImage3>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[22px] top-[89px] w-[214px]">
          <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8.082px] items-center relative shrink-0 w-full">
              <FrameBackgroundImage2>
                <path d={svgPaths.p2319ce00} fill="var(--fill-0, #878791)" id="Vector" />
              </FrameBackgroundImage2>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.527px] text-nowrap tracking-[0.1253px]">New Chat</p>
            </div>
            <div className="content-stretch flex gap-[8.082px] items-center relative shrink-0 w-full">
              <FrameBackgroundImage2>
                <path d={svgPaths.pa8ddf80} fill="var(--fill-0, white)" id="Vector" />
              </FrameBackgroundImage2>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[12.325px] text-nowrap text-white tracking-[0.1232px]">Inventory</p>
            </div>
            <div className="content-stretch flex gap-[104.051px] items-center relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8.082px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[15px]" data-name="Frame">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <g id="Frame">
                      <path d={svgPaths.p2fa2aa80} fill="var(--fill-0, #878791)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.527px] text-nowrap tracking-[0.1253px]">Orders</p>
              </div>
              <div className="bg-[rgba(51,255,204,0.1)] h-[17.174px] relative rounded-[4.393px] shrink-0 w-[32.327px]">
                <div className="overflow-clip relative rounded-[inherit] size-full">
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-10.45px)] not-italic text-[#3fc] text-[9.665px] text-nowrap top-[calc(50%-6.06px)]">Beta</p>
                </div>
                <div aria-hidden="true" className="absolute border-[0.879px] border-[rgba(51,255,204,0.2)] border-solid inset-0 pointer-events-none rounded-[4.393px]" />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[175px]">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#5e5e66] text-[12.4px] w-full">Chats</p>
            <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[20px] items-start leading-[normal] not-italic relative shrink-0 text-[12.4px] text-nowrap text-white tracking-[0.124px] w-full">
              <p className="relative shrink-0">Your sales are looking...</p>
              <p className="relative shrink-0">I can see that your Casual...</p>
              <p className="relative shrink-0">Memory and Dreams: Unra...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[22px] items-start left-[450.85px] top-[63px] w-[786.15px]">
        <div className="content-stretch flex flex-col gap-[17px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[247px] h-[44px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[3px] items-start not-italic relative shrink-0 text-nowrap">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[20px] text-right text-white">Inventory</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[13px] tracking-[0.13px]">Get improved, personalized answers by connecting your knowledge.</p>
            </div>
            <BackgroundImage6 additionalClassNames="h-[32px] rounded-[7.14px] w-[110.678px]">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute content-stretch flex gap-[6.802px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <div className="relative shrink-0 size-[11.901px]" data-name="Frame">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                      <g id="Frame">
                        <path d={svgPaths.p32158100} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.340121" />
                      </g>
                    </svg>
                  </div>
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[11.6px] text-nowrap text-white">Add Product</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[7.14px]" />
            </BackgroundImage6>
          </div>
          <div className="bg-[#1b1b1f] h-[54px] relative rounded-[10px] shrink-0 w-full">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-301.58px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[165px]">
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
                <div className="basis-0 content-stretch flex flex-col gap-[3px] grow items-start justify-center min-h-px min-w-px not-italic relative shrink-0 text-nowrap">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[12px] text-right text-white">John Wright-Nyingifa</p>
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#5e5e66] text-[11px] tracking-[0.11px]">Chidi Free</p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#28282d] border-solid inset-0 pointer-events-none rounded-[10px]" />
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[17.396px] h-[595px] items-start overflow-x-clip overflow-y-auto relative rounded-[10px] shrink-0 w-full">
          <div className="content-stretch flex gap-[17.396px] items-center relative rounded-[10px] shrink-0 w-full">
            <BackgroundImage5>
              <div className="absolute bg-[#e3e3e3] h-[236.584px] left-[0.72px] overflow-clip top-[0.87px] w-[248.761px]">
                <ImageBackgroundImage />
                <div className="absolute h-[404.245px] left-1/2 top-0 translate-x-[-50%] w-[254.598px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage28} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.641px] border-solid left-[222.61px] overflow-clip rounded-[6.412px] size-[21.799px] top-[6.96px]">
                  <FrameBackgroundImage />
                </div>
                <div className="absolute border-[#929298] border-[0.87px] border-solid left-[6.96px] rounded-[5.219px] size-[17.396px] top-[6.96px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2.609px] items-start justify-center left-[10.29px] top-[244.41px] w-[106.985px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.307px] text-nowrap tracking-[0.1131px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[6.958px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.786px] text-nowrap text-white tracking-[-0.2957px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.479px] items-center relative shrink-0">
                    <BackgroundImage />
                    <BackgroundImageAndText1 text="clothing" />
                  </div>
                </div>
              </div>
            </BackgroundImage5>
            <BackgroundImage5>
              <div className="absolute bg-[#f6f9f8] h-[236.584px] left-[0.72px] overflow-clip top-[0.87px] w-[248.761px]">
                <div className="absolute h-[238.224px] left-[calc(50%-2.83px)] top-[6.78px] translate-x-[-50%] w-[150.036px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage29} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.641px] border-solid left-[222.61px] overflow-clip rounded-[6.412px] size-[21.799px] top-[6.96px]">
                  <FrameBackgroundImage />
                </div>
                <div className="absolute border-[#929298] border-[0.87px] border-solid left-[6.96px] rounded-[5.219px] size-[17.396px] top-[6.96px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2.609px] items-start justify-center left-[10.29px] top-[244.41px] w-[106.985px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.307px] text-nowrap tracking-[0.1131px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[6.958px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.786px] text-nowrap text-white tracking-[-0.2957px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.479px] items-center relative shrink-0">
                    <BackgroundImage />
                    <BackgroundImageAndText1 text="clothing" />
                  </div>
                </div>
              </div>
            </BackgroundImage5>
            <BackgroundImage5>
              <div className="absolute bg-[#ededed] h-[236.584px] left-[0.72px] overflow-clip top-[0.87px] w-[248.761px]">
                <div className="absolute h-[224.38px] left-1/2 top-[12.2px] translate-x-[-50%] w-[141.317px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage30} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.641px] border-solid left-[222.61px] overflow-clip rounded-[6.412px] size-[21.799px] top-[6.96px]">
                  <FrameBackgroundImage />
                </div>
                <div className="absolute border-[#929298] border-[0.87px] border-solid left-[6.96px] rounded-[5.219px] size-[17.396px] top-[6.96px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2.609px] items-start justify-center left-[10.29px] top-[244.41px] w-[106.985px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.307px] text-nowrap tracking-[0.1131px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[6.958px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.786px] text-nowrap text-white tracking-[-0.2957px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.479px] items-center relative shrink-0">
                    <div className="h-[16.526px] overflow-clip relative rounded-[4.349px] shrink-0 w-[30.443px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(234, 37, 37) 0%, rgb(234, 37, 37) 100%), linear-gradient(90deg, rgb(45, 45, 52) 0%, rgb(45, 45, 52) 100%)" }}>
                      <BackgroundImageAndText text="2" />
                    </div>
                    <BackgroundImageAndText1 text="clothing" />
                  </div>
                </div>
              </div>
            </BackgroundImage5>
          </div>
          <div className="content-stretch flex gap-[17.396px] items-center relative rounded-[10px] shrink-0 w-full">
            <BackgroundImage5>
              <div className="absolute bg-[#eee] h-[236.584px] left-[0.72px] overflow-clip top-[0.87px] w-[248.761px]">
                <ImageBackgroundImage />
                <div className="absolute h-[362.823px] left-1/2 top-[13.92px] translate-x-[-50%] w-[228.509px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage31} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.641px] border-solid left-[222.61px] overflow-clip rounded-[6.412px] size-[21.799px] top-[6.96px]">
                  <FrameBackgroundImage1 />
                </div>
                <div className="absolute border-[#929298] border-[0.87px] border-solid left-[6.96px] rounded-[5.219px] size-[17.396px] top-[6.96px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2.609px] items-start justify-center left-[10.29px] top-[244.41px] w-[106.985px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.307px] text-nowrap tracking-[0.1131px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[6.958px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.786px] text-nowrap text-white tracking-[-0.2957px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.479px] items-center relative shrink-0">
                    <BackgroundImage1 />
                    <BackgroundImageAndText1 text="clothing" />
                  </div>
                </div>
              </div>
            </BackgroundImage5>
            <BackgroundImage5>
              <div className="absolute bg-[#f6f9f8] h-[236.584px] left-[0.72px] overflow-clip top-[0.87px] w-[248.761px]">
                <ImageBackgroundImage />
                <div className="absolute h-[406.231px] left-1/2 top-[-59.33px] translate-x-[-50%] w-[255.848px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage32} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.641px] border-solid left-[222.61px] overflow-clip rounded-[6.412px] size-[21.799px] top-[6.96px]">
                  <FrameBackgroundImage1 />
                </div>
                <div className="absolute border-[#929298] border-[0.87px] border-solid left-[6.96px] rounded-[5.219px] size-[17.396px] top-[6.96px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2.609px] items-start justify-center left-[10.29px] top-[244.41px] w-[106.985px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.307px] text-nowrap tracking-[0.1131px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[6.958px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.786px] text-nowrap text-white tracking-[-0.2957px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.479px] items-center relative shrink-0">
                    <BackgroundImage1 />
                    <BackgroundImageAndText1 text="clothing" />
                  </div>
                </div>
              </div>
            </BackgroundImage5>
            <BackgroundImage5>
              <div className="absolute bg-[#ededed] h-[236.584px] left-[0.72px] overflow-clip top-[0.87px] w-[248.761px]">
                <ImageBackgroundImage />
                <div className="absolute h-[345.93px] left-1/2 top-0 translate-x-[-50%] w-[217.87px]" data-name="image 28">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage33} />
                </div>
                <div className="absolute bg-white border-[#dedeeb] border-[0.641px] border-solid left-[222.61px] overflow-clip rounded-[6.412px] size-[21.799px] top-[6.96px]">
                  <FrameBackgroundImage1 />
                </div>
                <div className="absolute border-[#929298] border-[0.87px] border-solid left-[6.96px] rounded-[5.219px] size-[17.396px] top-[6.96px]" />
              </div>
              <div className="absolute content-stretch flex flex-col gap-[2.609px] items-start justify-center left-[10.29px] top-[244.41px] w-[106.985px]">
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.3] not-italic relative shrink-0 text-[#6e6e75] text-[11.307px] text-nowrap tracking-[0.1131px]">Blue Ankara Dress</p>
                <div className="content-stretch flex flex-col gap-[6.958px] items-start relative shrink-0">
                  <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14.786px] text-nowrap text-white tracking-[-0.2957px]">₦15,000</p>
                  <div className="content-stretch flex gap-[3.479px] items-center relative shrink-0">
                    <BackgroundImage1 />
                    <BackgroundImageAndText1 text="clothing" />
                  </div>
                </div>
              </div>
            </BackgroundImage5>
          </div>
        </div>
      </div>
    </div>
  );
}