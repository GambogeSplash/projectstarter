import { MotionProps } from "framer-motion";

export const enterSoft: MotionProps = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
};

export const pressFeedback: MotionProps = {
    whileTap: { scale: 0.98 },
};

export const fadeOnly: MotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};
