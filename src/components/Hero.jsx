import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Mouse Interaction for 3D Tilt
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const width = window.innerWidth;
        const height = window.innerHeight;
        // Calculate offset from center (-0.5 to 0.5)
        const xPct = (clientX / width) - 0.5;
        const yPct = (clientY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    // Parallax Transforms
    const titleX = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
    const titleY = useTransform(mouseY, [-0.5, 0.5], [-30, 30]);
    const bgX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
    const bgY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);

    // Scroll Transforms
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

    return (
        <section
            ref={containerRef}
            // onMouseMove={handleMouseMove}
            className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#1a0505] perspective-1000 pb-32 md:pb-0"
        >
            {/* 1. Dynamic Background Layer */}
            <motion.div
                style={{ x: bgX, y: bgY }}
                className="absolute inset-0 z-0 will-change-transform"
            >
                {/* Rich Gradient Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2b0a0a] via-[#4a1212] to-[#1a0505]" />

                {/* Retro Desi Pattern Background (Higher Opacity) */}
                <div className="absolute inset-0 opacity-50 mix-blend-overlay">
                    <img
                        src="/hero-desi.jpg"
                        alt="Retro Desi Texture"
                        className="w-full h-full object-cover grayscale-[10%] contrast-125 key-visual"
                    />
                </div>

                {/* Abstract Geometric Shapes (Desi Patterns simplified) */}
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-desi-saffron/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                {/* Subtle Grain Texture */}
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay" />
            </motion.div>

            {/* 2. Central 3D Typography Block */}
            <motion.div
                style={{ x: titleX, y: titleY, opacity }}
                className="relative z-20 flex flex-col items-center text-center"
            >
                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="flex items-center gap-2 sm:gap-4 mb-2 px-4"
                >
                    <span className="h-[2px] w-4 sm:w-8 bg-desi-gold/50"></span>
                    <span className="font-body text-desi-gold text-xs sm:text-sm md:text-base tracking-[0.3em] sm:tracking-[0.4em] uppercase font-semibold">
                        MATES PRESENTS
                    </span>
                    <span className="h-[2px] w-4 sm:w-8 bg-desi-gold/50"></span>
                </motion.div>

                {/* Massive 3D Main Title */}
                <div className="relative group perspective-text flex flex-col items-center">
                    {/* Shadow Layer - Blurred & Gradient (Restored) */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-western text-[clamp(2.5rem,13vw,11rem)] md:text-[9rem] lg:text-[11rem] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#4d1f1f] to-[#1a0505] absolute top-2 left-2 md:top-4 md:left-4 z-0 select-none blur-sm whitespace-nowrap px-4 sm:px-0 max-w-[100vw]"
                    >
                        E-SUMMIT'26
                    </motion.h1>

                    {/* Main Layer */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="font-western text-[clamp(2.5rem,13vw,11rem)] md:text-[9rem] lg:text-[11rem] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-[#fff0d1] via-[#ffcc66] to-[#d4af37] z-10 relative drop-shadow-2xl whitespace-nowrap px-4 sm:px-0 max-w-[100vw]"
                    >
                        E-SUMMIT<span className="font-serif text-[#ffd700] mx-[0.1em] inline-block -translate-y-[10%] md:-translate-y-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">’</span>26
                    </motion.h1>

                    {/* Subtitle Below E-SUMMIT */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4 md:mt-4 text-[0.8rem] sm:text-lg md:text-2xl font-oriental text-white/90 tracking-[0.15em] z-20 px-4 sm:px-0 text-center w-full"
                    >
                        EDC MAIT <span className="text-desi-gold">×</span> COMMUNITE
                    </motion.div>
                </div>

                {/* Animated Rotating Keyword Ring (Live Element) */}
                <div className="relative mt-6 mb-6 md:mt-12 md:mb-12">
                    <div className="absolute inset-0 bg-desi-marigold/20 blur-[40px] rounded-full"></div>
                    <div className="relative overflow-hidden h-8 sm:h-12 md:h-16 flex items-center w-full max-w-[95vw] mx-auto mask-linear-fade">
                        <motion.div
                            animate={{ x: [0, -1000] }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="flex gap-8 whitespace-nowrap"
                        >
                            {[...Array(4)].map((_, i) => (
                                <React.Fragment key={i}>
                                    {["DREAM", "DECIDE", "BUILD", "ELEVATE", "COMPETE", "CONQUER", "IMPACT"].map((word, index) => (
                                        <span key={`${i}-${index}`} className="text-lg sm:text-2xl md:text-4xl font-oriental text-white/80 tracking-wide">
                                            {word} <span className="text-desi-gold mx-2">•</span>
                                        </span>
                                    ))}
                                </React.Fragment>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Action Area - Dates Only */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col items-center mt-6 relative"
                >
                    {/* Decorative Backdrop Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-radial from-desi-red/30 to-transparent blur-2xl -z-10"></div>

                    <div className="text-center flex flex-col items-center">
                        {/* Month with Ornamental Spacing */}
                        <div className="flex items-center gap-2 sm:gap-4 mb-2">
                            <span className="text-desi-gold text-lg sm:text-2xl font-oriental">✦</span>
                            <h2 className="font-oriental text-desi-gold text-lg sm:text-2xl md:text-3xl tracking-[0.3em] sm:tracking-[0.4em] uppercase drop-shadow-lg pl-[0.3em] sm:pl-[0.4em]">
                                MARCH
                            </h2>
                            <span className="text-desi-gold text-lg sm:text-2xl font-oriental">✦</span>
                        </div>

                        {/* Dates in Massive Retro Type with Outlines */}
                        <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 mt-2">
                            {/* Day 1 */}
                            <div className="flex flex-col items-center group cursor-default">
                                <h3 className="relative font-western text-5xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#c5a059] drop-shadow-lg leading-none transition-transform duration-300 group-hover:-translate-y-2">
                                    16
                                    <span className="absolute -top-1 -right-4 sm:-top-2 sm:-right-6 text-base sm:text-xl md:text-2xl font-oriental text-desi-gold tracking-normal">th</span>
                                </h3>
                                <div className="h-[2px] w-0 group-hover:w-full bg-desi-gold transition-all duration-300 mt-2"></div>
                            </div>

                            {/* Divider */}
                            <div className="h-12 sm:h-16 w-[1px] bg-gradient-to-b from-transparent via-desi-gold/50 to-transparent rotate-12 mx-1 sm:mx-2"></div>

                            {/* Day 2 */}
                            <div className="flex flex-col items-center group cursor-default">
                                <h3 className="relative font-western text-5xl sm:text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#f0e6d2] to-[#c5a059] drop-shadow-lg leading-none transition-transform duration-300 group-hover:-translate-y-2">
                                    17
                                    <span className="absolute -top-1 -right-4 sm:-top-2 sm:-right-6 text-base sm:text-xl md:text-2xl font-oriental text-desi-gold tracking-normal">th</span>
                                </h3>
                                <div className="h-[2px] w-0 group-hover:w-full bg-desi-gold transition-all duration-300 mt-2"></div>
                            </div>
                        </div>

                        {/* Year Badge */}
                        {/* <div className="mt-6 px-6 py-1 bg-[#2b0a0a] border border-desi-gold/30 rounded-full">
                            <span className="font-body text-white/80 text-sm tracking-[0.3em]">2026</span>
                        </div> */}
                    </div>
                </motion.div>
            </motion.div>

            {/* Register Button - Bottom Right */}
            <motion.div
                style={{ opacity }}
                className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-50 pointer-events-auto"
            >
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                    animate={{ opacity: 1, x: 0, rotate: -5 }}
                    transition={{ delay: 1, type: "spring", stiffness: 100 }}
                >
                    <motion.button
                        whileHover="hover"
                        whileTap="tap"
                        initial="initial"
                        className="relative w-32 h-14 sm:w-56 sm:h-20 md:w-80 md:h-32 flex items-center justify-center group"
                    >
                        {/* 1. Base Dark Layer */}
                        <img
                            src="/mobileRegisterBtn.svg"
                            alt="Register Background"
                            className="absolute inset-0 w-full h-full object-contain z-0 opacity-80"
                        />

                        {/* 2. LIVE: Liquid Gold Flow Effect (Contained in Shape) */}
                        <motion.div
                            className="absolute inset-0 z-10 opacity-60 mix-blend-overlay"
                            style={{
                                maskImage: "url(/mobileRegisterBtn.svg)",
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskImage: "url(/mobileRegisterBtn.svg)",
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center"
                            }}
                        >
                            <motion.div
                                className="w-[200%] h-full bg-gradient-to-r from-transparent via-desi-gold to-transparent"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>

                        {/* 3. Hover Shine Effect (Restored from previous version) */}
                        <motion.div
                            variants={{
                                hover: { x: ["100%", "-100%"], opacity: [0, 1, 0] }
                            }}
                            transition={{ duration: 0.6, ease: "linear" }}
                            className="absolute inset-0 w-full h-full z-20 pointer-events-none overflow-hidden"
                            style={{
                                maskImage: "url(/mobileRegisterBtn.svg)",
                                maskSize: "contain",
                                maskRepeat: "no-repeat",
                                maskPosition: "center",
                                WebkitMaskImage: "url(/mobileRegisterBtn.svg)",
                                WebkitMaskSize: "contain",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center"
                            }}
                        >
                            <div className="w-1/2 h-full bg-white/40 skew-x-[-20deg] blur-md absolute top-0 -left-1/2" />
                        </motion.div>

                        {/* 4. Text Overlay (Restored simple style) */}
                        <motion.span
                            className="relative z-30 font-tech text-white text-sm sm:text-xl md:text-3xl tracking-widest drop-shadow-md select-none flex gap-2"
                            variants={{
                                hover: { scale: 1.1, textShadow: "0 0 15px rgba(255,215,0,0.8)" },
                                tap: { scale: 0.95 }
                            }}
                        >
                            REGISTER
                        </motion.span>
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* 3. Bottom Gradient & Texture Fade for Continuity */}
            <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#1a0505] via-[#1a0505]/80 to-transparent pointer-events-none z-10"></div>

            {/* 4. Elegant Scroll Mouse */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
            >
                <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <motion.div
                        animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="w-1 h-1 bg-desi-gold rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
