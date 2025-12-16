"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Text, Button, softSpring, enterSoft } from "@/design-system";

interface ExpandableInsightCardProps {
    title: string;
    subtitle: string;
    insight: string[];
    actionLabel?: string;
}

export function ExpandableInsightCard({ title, subtitle, insight, actionLabel = "Track signal" }: ExpandableInsightCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.8 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-bg-primary z-40"
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsOpen(false);
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Card */}
            <motion.div
                layout
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "bg-bg-surface rounded-xl p-8 border border-white/5 cursor-pointer relative z-50 overflow-hidden",
                    isOpen ? "fixed inset-x-4 top-1/4 mx-auto max-w-lg shadow-2xl" : "relative w-full hover:bg-bg-surface/80 transition-colors"
                )}
                transition={softSpring}
            >
                <motion.div layout className="flex flex-col gap-2">
                    <div className="flex justify-between items-start">
                        <div>
                            <Text variant={isOpen ? "h2" : "h3"}>{title}</Text>
                            <Text variant="small" className="opacity-80 mt-1">{subtitle}</Text>
                        </div>
                        {/* Indicator Icon? */}
                        {!isOpen && <div className="p-2 rounded-full bg-white/5"><div className="w-2 h-2 rounded-full bg-accent-brand" /></div>}
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 flex flex-col gap-4"
                            >
                                <div className="h-px w-full bg-white/10" />

                                <div className="flex flex-col gap-3">
                                    {insight.map((line, index) => (
                                        <motion.p
                                            key={index}
                                            initial={{ opacity: 0, y: 4 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 + 0.2 }}
                                            className="text-text-primary text-lg leading-relaxed"
                                        >
                                            {line}
                                        </motion.p>
                                    ))}
                                </div>

                                <motion.div
                                    {...enterSoft}
                                    transition={{ ...softSpring, delay: 0.4 }}
                                    className="mt-4 flex justify-end"
                                >
                                    <Button
                                        variant="primary"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            alert("Tracked!");
                                        }}
                                    >
                                        {actionLabel}
                                    </Button>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </>
    );
}
