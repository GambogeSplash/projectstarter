import svgPaths from "./svg-3k6a2wntnm";
import clsx from "clsx";
import imgImage30 from "figma:asset/a283c4770f4329f7b6f5fd17fd6443562040eeac.png";

function Frame({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[17px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={additionalClassNames}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return <Wrapper3 additionalClassNames={clsx("absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]", additionalClassNames)}>{children}</Wrapper3>;
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute size-[16px] top-1/2 translate-y-[-50%]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">{children}</g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#131316] relative size-full" data-name="8">
      <div className="absolute border-[#2f2f31] border-[0px_0.5px_0px_0px] border-solid h-[830px] left-0 overflow-clip top-0 w-[248px]">
        <div className="absolute border-[#2f2f31] border-[0.5px_0px_0px] border-solid h-[86px] left-0 overflow-clip top-[744px] w-[247px]">
          <div className="absolute bg-[#1b1b1f] border border-[#28282d] border-solid h-[50px] left-[12px] overflow-clip rounded-[10px] top-[calc(50%-0.25px)] translate-y-[-50%] w-[224px]">
            <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(50%-19.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[165px]">
              <div className="bg-[#f36d21] overflow-clip relative rounded-[10px] shrink-0 size-[34px]">
                <div className="absolute h-[18.046px] left-[calc(50%+0.47px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18.043px]" data-name="image 30">
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
            <Wrapper additionalClassNames="left-[199px]">
              <path d={svgPaths.pb528080} fill="var(--fill-0, #5F5F65)" id="Vector" />
            </Wrapper>
          </div>
        </div>
        <div className="absolute bg-[#1f1f24] border-[#6060f8] border-[0px_0px_0px_2px] border-solid h-[38px] left-0 top-[218px] w-[248px]" />
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
            <Frame>
              <path d={svgPaths.p27447000} fill="var(--fill-0, #696972)" id="Vector" stroke="var(--stroke-0, #696972)" strokeWidth="0.3" />
            </Frame>
            <Frame>
              <path d={svgPaths.p11c56280} fill="var(--fill-0, #696972)" id="Vector" stroke="var(--stroke-0, #696972)" strokeWidth="0.3" />
            </Frame>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[25px] items-start left-[22px] top-[89px] w-[214px]">
          <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[8.082px] items-center relative shrink-0 w-full">
              <Wrapper1 additionalClassNames="size-[15.153px]">
                <path d={svgPaths.p2145ec80} fill="var(--fill-0, #878791)" id="Vector" />
              </Wrapper1>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.527px] text-nowrap tracking-[0.1253px]">New Chat</p>
            </div>
            <div className="content-stretch flex gap-[8.082px] items-center relative shrink-0 w-full">
              <Wrapper1 additionalClassNames="size-[15.153px]">
                <path d={svgPaths.p20495080} fill="var(--fill-0, #878791)" id="Vector" />
              </Wrapper1>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#878791] text-[12.325px] text-nowrap tracking-[0.1232px]">Inventory</p>
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
                  <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-10.45px)] not-italic text-[#3fc] text-[9.665px] text-nowrap top-[calc(50%-6.59px)]">Beta</p>
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
      <div className="absolute h-[700px] left-[478px] top-[80px] w-[730px]">
        <div className="absolute bg-[#6060f8] h-[26.269px] left-0 overflow-clip rounded-[6.866px] top-[87px] w-[26.716px]">
          <div className="absolute left-1/2 size-[15.715px] top-[calc(50%+0.22px)] translate-x-[-50%] translate-y-[-50%]" data-name="Frame">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g id="Frame">
                <path d={svgPaths.pc797300} fill="var(--fill-0, white)" id="Vector" />
              </g>
            </svg>
          </div>
        </div>
        <div className="absolute h-[442px] left-[39px] top-[96px] w-[674px]">
          <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#83838b] text-[14.2px] top-[-8px] tracking-[0.2272px] w-[674px]">
            <p className="leading-[1.6] mb-0">{`Determining a "very good" weight for a 5'8", 25-year-old guy can depend on various factors, including body composition, muscle mass, and overall health. However, a commonly used measure is the Body Mass Index (BMI), which provides a general guideline.`}</p>
            <p className="leading-[1.6] mb-0">&nbsp;</p>
            <p className="leading-[1.6] mb-0">{`For a 5'8" individual, a healthy weight range according to BMI is typically between 129 lbs (63 kg) and 174 lbs (79 kg). This corresponds to a BMI of 18.5 to 24.9, which is considered normal.`}</p>
            <p className="leading-[1.6] mb-0">&nbsp;</p>
            <p className="leading-[1.6] mb-0">{`Here's a breakdown:`}</p>
            <ul className="list-disc mb-0">
              <li className="mb-0 ms-[21.299999999999997px]">
                <span className="leading-[1.6]">Underweight: Below 129 lbs (63 kg)</span>
              </li>
              <li className="mb-0 ms-[21.299999999999997px]">
                <span className="leading-[1.6]">Normal weight: 129 lbs (63 kg) to 174 lbs (79 kg)</span>
              </li>
              <li className="mb-0 ms-[21.299999999999997px]">
                <span className="leading-[1.6]">Overweight: 174 lbs (79 kg) to 208 lbs (94 kg)</span>
              </li>
              <li className="ms-[21.299999999999997px]">
                <span className="leading-[1.6]">Obese: Above 208 lbs (94 kg)</span>
              </li>
            </ul>
            <p className="leading-[1.6] mb-0">&nbsp;</p>
            <p className="leading-[1.6] mb-0">{`However, BMI is not the only factor to consider. Muscle mass, for example, can affect weight significantly, and BMI does not distinguish between muscle and fat. Therefore, it's also important to consider body fat percentage and overall fitness.`}</p>
            <p className="leading-[1.6] mb-0">&nbsp;</p>
            <p className="leading-[1.6]">{`For a more personalized assessment, it's best to consult with a healthcare professional or a fitness expert.`}</p>
          </div>
        </div>
        <div className="absolute bg-[#1b1b1f] h-[42px] left-[330px] overflow-clip rounded-[26px] top-0 w-[400px]">
          <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.6] left-[calc(50%-180px)] not-italic text-[14.2px] text-nowrap text-white top-[9.04px] tracking-[0.2272px]">What’s a very good weight for a 5’8, 25 year old guy</p>
        </div>
        <div className="absolute bg-[#1f1f24] border border-[#2d2d34] border-solid left-[351px] overflow-clip rounded-[90px] size-[30px] top-[512px]">
          <Wrapper2 additionalClassNames="size-[14px]">
            <path d={svgPaths.p2ff05080} fill="var(--fill-0, #5D5D66)" id="Vector" stroke="var(--stroke-0, #5D5D66)" strokeWidth="0.4" />
          </Wrapper2>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[10px] items-center left-[8px] top-[553px] w-[716px]">
          <div className="bg-[#1b1b1f] h-[118px] relative rounded-[14px] shrink-0 w-full">
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
                      <Wrapper2 additionalClassNames="size-[13.996px]">
                        <path d={svgPaths.p258b4f00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
                      </Wrapper2>
                    </div>
                    <div aria-hidden="true" className="absolute border border-[#2d2d34] border-solid inset-0 pointer-events-none rounded-[10px]" />
                  </div>
                </div>
                <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[78px]">
                    <Wrapper1 additionalClassNames="size-[16px]">
                      <path d={svgPaths.p14d3e840} fill="var(--fill-0, #5E5E66)" id="Vector" stroke="var(--stroke-0, #5E5E66)" strokeWidth="0.4" />
                    </Wrapper1>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5e5e66] text-[13px] text-nowrap text-right tracking-[0.13px]">Research</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[55px]">
                    <Wrapper3 additionalClassNames="relative shrink-0 size-[14px]">
                      <path d={svgPaths.p1e14bd00} fill="var(--fill-0, #5E5E66)" id="Vector" stroke="var(--stroke-0, #5E5E66)" strokeWidth="0.4" />
                    </Wrapper3>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5e5e66] text-[13px] text-nowrap text-right tracking-[0.13px]">Think</p>
                  </div>
                  <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[54px]">
                    <Wrapper1 additionalClassNames="size-[16px]">
                      <path d={svgPaths.p25b52680} fill="var(--fill-0, #5E5E66)" id="Vector" stroke="var(--stroke-0, #5E5E66)" strokeWidth="0.4" />
                    </Wrapper1>
                    <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#5e5e66] text-[13px] text-nowrap text-right tracking-[0.13px]">Tools</p>
                  </div>
                </div>
              </div>
              <div className="absolute bg-white left-[668px] overflow-clip rounded-[10px] size-[34px] top-[70px]">
                <Wrapper additionalClassNames="left-1/2 translate-x-[-50%]">
                  <path d={svgPaths.p2d443000} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeWidth="0.6" />
                </Wrapper>
              </div>
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[normal] left-[17.5px] not-italic text-[#5e5e66] text-[14px] text-nowrap top-[18px] tracking-[0.14px]">Ask Chidi anything</p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#1f1f24] border-solid inset-0 pointer-events-none rounded-[14px]" />
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#5e5e66] text-[12px] text-center tracking-[0.12px] w-full">
            <span>{`Chidi can make mistakes. Check answers. `}</span>Learn more
          </p>
        </div>
      </div>
      <div className="absolute h-[60px] left-[248px] overflow-clip top-0 w-[1192px]">
        <div className="absolute content-stretch flex gap-[8px] items-start left-[1040px] top-[16.83px]">
          <div className="bg-[#1b1b1f] h-[28px] relative rounded-[8px] shrink-0 w-[103px]">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute content-stretch flex gap-[6px] items-center left-[calc(50%+2px)] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                <Wrapper3 additionalClassNames="relative shrink-0 size-[14px]">
                  <path d={svgPaths.p1c8cf0} fill="var(--fill-0, #83838B)" id="Vector" />
                </Wrapper3>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#83838b] text-[11.2px] text-nowrap tracking-[0.224px]">Add people</p>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#202025] border-solid inset-0 pointer-events-none rounded-[8px]" />
          </div>
          <div className="bg-[#1b1b1f] relative rounded-[7.746px] shrink-0 size-[28px]">
            <div className="overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute flex items-center justify-center left-[calc(50%+0.16px)] size-[13.662px] top-[calc(50%+0.17px)] translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
                <div className="flex-none rotate-[270deg]">
                  <Wrapper3 additionalClassNames="relative size-[13.662px]">
                    <path d={svgPaths.p2ce99980} fill="var(--fill-0, #83838B)" id="Vector" stroke="var(--stroke-0, #83838B)" strokeWidth="1.05089" />
                  </Wrapper3>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[#202025] border-solid inset-0 pointer-events-none rounded-[7.746px]" />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[6px] items-center left-[16px] top-1/2 translate-y-[-50%] w-[76px]">
          <p className="font-['IBM_Plex_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#d7d7df] text-[19px] text-nowrap tracking-[0.19px]">Chidi</p>
          <Wrapper3 additionalClassNames="relative shrink-0 size-[14px]">
            <path d={svgPaths.p1e4b1280} fill="var(--fill-0, #D7D7DF)" id="Vector" stroke="var(--stroke-0, #D7D7DF)" strokeWidth="0.6" />
          </Wrapper3>
        </div>
      </div>
    </div>
  );
}