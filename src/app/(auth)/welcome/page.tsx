"use client";

import { useRouter } from "next/navigation";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthButton } from "@/components/auth/AuthButton";
import { MagicLinkInput } from "@/components/auth/MagicLinkInput";

export default function WelcomePage() {
    const router = useRouter();
    return (
        <main
            className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-bg-primary
        px-16
      "
        >
            <AuthCard>
                {/* Logo */}
                <div className="mb-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9" />
                            <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                            <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-text-primary text-2xl font-semibold text-center mb-3">
                    Welcome to CHIDI
                </h1>

                {/* Subtext */}
                <p className="text-text-secondary text-center mb-8 text-base">
                    Your AI business assistant for WhatsApp & Instagram
                </p>

                {/* Auth options */}
                <div className="space-y-3">
                    <AuthButton
                        label="Continue with Google"
                        onClick={() => router.push("/onboarding")}
                        icon={
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4" />
                                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853" />
                                <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
                                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335" />
                            </svg>
                        }
                    />
                    <AuthButton
                        label="Continue with Shopify"
                        icon={
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M14.5 3.8c0-.1 0-.1-.1-.1 0 0-.9-.1-1.5-.1-.5-.5-1.1-1.1-1.2-1.1-.1 0-.1 0-.2 0 0 0-.2.1-.4.2-.3-.9-.8-1.7-1.7-1.7h-.1c-.5-.6-1-.9-1.4-.9-3.5 0-5.2 4.4-5.7 6.6-1.3.4-2.2.7-2.3.7-.7.2-.7.2-.8.9C-.1 9-.1 16.5-.1 16.5l11.6 2 5.1-1.1S14.5 3.9 14.5 3.8zm-4.8-.5v.1c-.6.2-1.3.4-2 .6.2-.8.6-1.6 1.1-2.1.1-.1.2-.2.4-.3.3.4.5 1 .5 1.7zm-1.1-2.5c.1 0 .2.1.3.1-.5.5-1 1.4-1.2 2.8l-1.6.5c.5-1.4 1.4-3.2 2.5-3.4zm-.5 10.9l-1.7-5.6c.5-.2 1.2-.4 1.7-.5v6.1zm1.1-6.2c.6-.2 1.2-.4 1.8-.5 0 .5-.1 1.2-.4 2.2-.4 1.2-1 2.1-1.4 2.5v-4.2zm1.9-2.3c.3 0 .6 0 .8.1-.1.9-.4 2.4-1.3 4.1-.7 1.3-1.6 2.4-2.4 2.9V5.8c.6-.2 1.2-.4 1.9-.6.1.4.3.8.5 1.2.1.2.3.3.5.3.2 0 .4-.1.5-.3.1-.2.1-.4 0-.6-.2-.4-.4-.9-.5-1.4z" fill="#95BF47" />
                            </svg>
                        }
                    />
                </div>

                {/* Divider */}
                <div className="my-6 text-center text-text-muted text-xs">
                    OR
                </div>

                {/* Magic link */}
                <MagicLinkInput />

                {/* Legal */}
                <p className="mt-6 text-center text-text-muted text-xs">
                    By continuing, you agree to CHIDI's Terms & Privacy Policy
                </p>
            </AuthCard>
        </main>
    );
}
