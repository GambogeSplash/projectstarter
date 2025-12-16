"use client";

export function MagicLinkInput() {
    return (
        <input
            type="email"
            placeholder="Enter email for magic link"
            className="
        w-full
        h-[34px]
        rounded-[10px]
        bg-transparent
        border
        border-border-subtle
        px-4
        text-text-primary
        text-md
        placeholder:text-text-muted
        focus:outline-none
        focus:ring-2
        focus:ring-accent-brand
      "
        />
    );
}
