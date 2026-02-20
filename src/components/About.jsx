import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

// --- Helper Components ---

const AnimatedCounter = ({ value, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
    const displayValue = useTransform(springValue, (latest) => Math.floor(latest) + "+");

    useEffect(() => {
        if (isInView) {
            // Parse numerical part from string like "2500+"
            const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
            motionValue.set(numericValue);
        }
    }, [isInView, value, motionValue]);

    return (
        <div ref={ref} className="text-center sm:text-left">
            <motion.h4 className="text-3xl md:text-4xl font-display text-retro-accent mb-1 min-w-[4ch]">
                <motion.span>{displayValue}</motion.span>
            </motion.h4>
            <p className="text-xs text-gray-400 font-tech uppercase tracking-wider leading-tight">{label}</p>
        </div>
    );
};

const InfiniteTicker = () => {
    return (
        <div className="w-full overflow-hidden bg-retro-primary/10 border-y border-white/5 py-4 my-24 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0505] via-transparent to-[#1a0505] z-10 pointer-events-none" />
            <motion.div
                className="flex whitespace-nowrap gap-16"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center gap-16 shrink-0">
                        <span className="text-4xl font-display text-white/10 uppercase tracking-widest">Innovation</span>
                        <span className="text-xl font-oriental text-retro-accent">★</span>
                        <span className="text-4xl font-display text-white/10 uppercase tracking-widest">Entrepreneurship</span>
                        <span className="text-xl font-oriental text-retro-accent">★</span>
                        <span className="text-4xl font-display text-white/10 uppercase tracking-widest">Leadership</span>
                        <span className="text-xl font-oriental text-retro-accent">★</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const About = () => {
    // Staggered Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom easing for smoothness
        }
    };

    return (
        <section id="about" className="relative bg-[#1a0505] overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2b0a0a] to-[#0f0505] z-0" />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none z-0" />

            {/* Seamless Transition Overlays */}
            <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-[#1a0505] to-transparent z-10 pointer-events-none" />

            {/* Floating Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-retro-primary/20 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-retro-accent/10 rounded-full blur-[128px] animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 flex flex-col">

                {/* 🧩 SECTION 1 — E-SUMMIT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left: Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-retro-accent"></span>
                            </span>
                            <span className="text-retro-accent font-tech tracking-[0.2em] text-sm uppercase font-bold">The Vision</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-display text-white leading-[0.9] mb-8">
                            ABOUT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-retro-primary via-retro-secondary to-retro-accent">
                                E-SUMMIT
                            </span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-gray-300 font-body text-lg leading-relaxed mb-6 border-l-2 border-retro-primary/50 pl-6">
                            E-Summit 2026 is the flagship entrepreneurship and business festival of Maharaja Agrasen Institute of Technology (MAIT), built to foster <span className="text-white font-semibold">innovation</span>, <span className="text-white font-semibold">entrepreneurship</span>, and <span className="text-white font-semibold">leadership</span>.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-gray-300 font-body text-lg leading-relaxed mb-8 italic pl-6 opacity-80">
                            "E-Summit creates a dynamic platform where ideas connect with opportunity and ambition turns into action."
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                            {[
                                "Industry Expos", "Startup Showcases",
                                "Expert Seminars", "Business Competitions",
                                "Direct Brand Engagement"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-1.5 h-1.5 bg-retro-accent rotate-45 group-hover:scale-150 transition-transform" />
                                    <span className="text-gray-300 font-tech uppercase tracking-wide text-sm group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Animated Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/10">
                            <AnimatedCounter value="2500+" label="Students & Founders" />
                            <AnimatedCounter value="50+" label="Startups Showcased" />
                            <AnimatedCounter value="10+" label="Business Events" />
                            <AnimatedCounter value="100+" label="Industry Partners" />
                        </motion.div>
                    </motion.div>

                    {/* Right: Interactive Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: 30 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="perspective-1000"
                    >
                        <div className="relative aspect-[3/4] rounded-[2.5rem] bg-gradient-to-br from-[#2a0a0a] to-[#0f0505] border border-white/10 p-8 flex flex-col justify-between overflow-hidden shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                            {/* Animated Gradient Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                            {/* <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                <div className="text-9xl font-display text-retro-accent rotate-90 origin-top-right">26</div>
                            </div> */}

                            {/* Subtle Glow */}
                            <div className="absolute inset-0 bg-retro-primary/10 blur-[80px] group-hover:bg-retro-primary/20 transition-colors duration-500" />

                            {/* Watermark */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] lg:text-[10rem] font-display text-white/5 rotate-90 whitespace-nowrap pointer-events-none select-none">
                                E-SUMMIT
                            </div>

                            <div className="relative z-10 mt-auto">
                                <span className="text-retro-accent font-oriental text-xl mb-2 block">MAIT Presents</span>
                                {/* <h3 className="text-5xl font-display text-white mb-4">ZENITH</h3> */}
                                <p className="text-gray-400 font-tech text-sm leading-relaxed">
                                    Where ideas connect with opportunity and ambition turns into action.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* 🔄 LIVE TICKER SEPARATOR */}
            <InfiniteTicker />

            <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                {/* 🧩 SECTION 2 — COMMUNITE x EDC */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Visual (Swapped for better flow) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1 relative"
                    >
                        <div className="aspect-square max-w-md mx-auto rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden bg-black/20 backdrop-blur-sm group">
                            {/* Spinning Ring */}
                            <div className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full animate-[spin_10s_linear_infinite] group-hover:border-retro-accent/30" />
                            <div className="absolute inset-4 border border-white/5 rounded-full" />

                            <div className="text-center z-10">
                                <h3 className="text-6xl font-display text-white mb-2">EDC</h3>
                                <span className="text-retro-primary font-oriental text-2xl">x</span>
                                <h3 className="text-4xl font-display text-white mt-2 tracking-widest">COMMUNITE</h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-display text-white mb-6 leading-none">
                            THE <span className="text-retro-primary">ECOSYSTEM</span>
                        </motion.h2>

                        <motion.h3 variants={itemVariants} className="text-xl md:text-2xl font-oriental text-white/80 mb-6 tracking-wide">
                            Communite x EDC
                        </motion.h3>

                        <motion.p variants={itemVariants} className="text-xl text-gray-300 font-body font-light mb-8">
                            COMMUNITE × EDC is MAIT’s unified entrepreneurship ecosystem, focused on taking ideas from <span className="text-white font-normal underline decoration-retro-accent underline-offset-4">concept to execution</span>.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-gray-400 font-body text-lg mb-8">
                            It empowers students to <span className="text-retro-accent">think boldly</span>, <span className="text-retro-accent">build confidently</span>, and <span className="text-retro-accent">lead innovatively</span>.
                        </motion.p>

                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border-l-4 border-retro-accent transition-colors">
                                <h4 className="text-white font-display text-2xl mb-1">10+ High-Impact Events</h4>
                                <p className="text-gray-400 font-tech text-sm">Direct access to industry veterans.</p>
                            </div>
                            <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border-l-4 border-retro-primary transition-colors">
                                <h4 className="text-white font-display text-2xl mb-1">50+ Flagship Initiatives</h4>
                                <p className="text-gray-400 font-tech text-sm">Resources to build your MVP.</p>
                            </div>
                            <div className="bg-white/5 hover:bg-white/10 p-6 rounded-xl border-l-4 border-retro-purple transition-colors">
                                <h4 className="text-white font-display text-2xl mb-1">Mentorship & Incubation</h4>
                                <p className="text-gray-400 font-tech text-sm">Startup readiness framework.</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
