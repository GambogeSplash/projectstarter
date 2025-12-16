import { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextProps extends HTMLAttributes<HTMLElement> {
    as?: ElementType;
    variant?: "h1" | "h2" | "h3" | "h4" | "body" | "small" | "muted";
}

export function Text({
    as: Component = "p",
    variant = "body",
    className,
    children,
    ...props
}: TextProps) {
    const styles = {
        h1: "text-4xl font-bold tracking-tight text-text-primary",
        h2: "text-3xl font-bold tracking-tight text-text-primary",
        h3: "text-2xl font-bold tracking-tight text-text-primary",
        h4: "text-xl font-semibold text-text-primary",
        body: "text-base text-text-primary leading-relaxed",
        small: "text-sm text-text-muted",
        muted: "text-sm text-text-muted",
    };

    const ComponentToRender = Component || (variant.startsWith("h") ? variant : "p");

    return (
        <ComponentToRender className={cn(styles[variant], className)} {...props}>
            {children}
        </ComponentToRender>
    );
}
