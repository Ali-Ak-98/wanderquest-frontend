"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ opacity: 0 }} // Initially invisible
            animate={{ opacity: 1 }}  // Fade in
            exit={{ opacity: 0 }}     // Fade out
            transition={{ duration: 1 }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
}
