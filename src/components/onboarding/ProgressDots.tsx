type Props = {
    total: number;
    active: number;
};

export function ProgressDots({ total, active }: Props) {
    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`
            h-2 w-2 rounded-full transition-colors
            ${i === active ? "bg-accent-brand" : "bg-border-subtle"}
          `}
                />
            ))}
        </div>
    );
}
