interface PlatformInfoProps {
  title: string;
  description: string;
}

export function PlatformInfo({ title, description }: PlatformInfoProps) {
  return (
    <div className="content-stretch flex flex-col gap-px items-start leading-[1.4] not-italic relative shrink-0 text-nowrap">
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[12px] text-white tracking-[0.24px]">{title}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6c6c7d] text-[11px] tracking-[0.22px]">{description}</p>
    </div>
  );
}
