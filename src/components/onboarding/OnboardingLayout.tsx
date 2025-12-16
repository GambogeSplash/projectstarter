export function OnboardingLayout({ children }: { children: React.ReactNode }) {
    return (
        <main
            className="
        min-h-screen
        bg-bg-primary
        flex
        items-center
        justify-center
        px-16
      "
        >
            {children}
        </main>
    );
}
