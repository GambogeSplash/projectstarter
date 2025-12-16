interface PlatformIconProps {
  children: React.ReactNode;
}

export function PlatformIcon({ children }: PlatformIconProps) {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">{children}</div>
      <div aria-hidden="true" className="absolute border border-[#2d2d34] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}
