export function IntegrationList({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="w-full max-w-[400px] space-y-3">
            {children}
        </div>
    );
}
