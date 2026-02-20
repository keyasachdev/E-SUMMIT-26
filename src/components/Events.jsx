import React, { useRef, useState } from 'react';
import { motion, useTransform, useScroll, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Trophy, Users, AlertCircle, Layers, Star, Clock, CheckCircle2, Info } from 'lucide-react';

const EventPopup = ({ event, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#0f0505] w-full max-w-6xl h-full max-h-[90vh] rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative border border-white/10"
            >
                {/* Back Button - Inside Card */}
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 z-50 p-2 bg-black/40 backdrop-blur-md rounded-full text-white hover:bg-retro-accent hover:text-black transition-all border border-white/10 group"
                >
                    <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                </button>

                {/* Left Side: Visual / Title Header (Mobile: Top) */}
                <div className={`relative w-full md:w-1/3 h-48 md:h-full bg-gradient-to-br ${event.color} overflow-hidden p-8 flex flex-col justify-end`}>
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-30 mix-blend-overlay" />
                    <div className="relative z-10">
                        <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-tech tracking-wider text-white/80 mb-4 border border-white/10">
                            EDC PRESENTS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-2 leading-none uppercase">{event.title}</h2>
                        <div className="h-1 w-20 bg-white/50 rounded-full my-4" />
                        <p className="text-white/80 font-body text-sm md:text-base leading-relaxed line-clamp-3">
                            {event.fullDesc}
                        </p>
                    </div>
                    {/* Decorative Pattern Overlay */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                </div>

                {/* Right Side: Details & Actions */}
                <div className="w-full md:w-2/3 p-6 md:p-10 overflow-y-auto bg-[#0f0505] relative">
                    <div className="max-w-3xl mx-auto space-y-8">
                        {/* Meta Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                <Trophy className="mb-2 text-retro-accent" size={24} />
                                <span className="text-xs text-gray-400 uppercase tracking-wider font-tech">Prize Pool</span>
                                <span className="text-lg font-display text-white">{event.prize}</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                                <Users className="mb-2 text-retro-primary" size={24} />
                                <span className="text-xs text-gray-400 uppercase tracking-wider font-tech">Team Size</span>
                                <span className="text-lg font-display text-white">{event.teamSize}</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center col-span-2 md:col-span-1">
                                <AlertCircle className="mb-2 text-retro-purple" size={24} />
                                <span className="text-xs text-gray-400 uppercase tracking-wider font-tech">Status</span>
                                <span className="text-lg font-display text-green-400">Open</span>
                            </div>
                        </div>

                        {/* Key Highlights */}
                        {event.highlights && (
                            <section>
                                <h3 className="text-xl font-oriental text-desi-gold mb-4 flex items-center gap-2">
                                    <Star size={18} className="text-retro-accent" /> Key Highlights
                                </h3>
                                <ul className="space-y-3">
                                    {event.highlights.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-300 group">
                                            <CheckCircle2 size={16} className="text-retro-accent shrink-0 mt-0.5" />
                                            <span className="font-body leading-relaxed group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Prize Breakdown */}
                        {event.prizeBreakdown && (
                            <section>
                                <h3 className="text-xl font-oriental text-desi-gold mb-4 flex items-center gap-2">
                                    <Trophy size={18} className="text-retro-accent" /> Prize Breakdown
                                </h3>
                                <div className="space-y-2">
                                    {event.prizeBreakdown.map((tier, i) => (
                                        <div key={i} className="flex items-center justify-between bg-white/5 px-4 py-3 rounded-xl border border-white/5 hover:border-retro-accent/30 transition-colors">
                                            <span className="font-tech text-sm text-gray-400 uppercase tracking-wider">{tier.rank}</span>
                                            <span className="font-display text-white text-lg">{tier.amount}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Rounds */}
                        {event.rounds && (
                            <section>
                                <h3 className="text-xl font-oriental text-desi-gold mb-4 flex items-center gap-2">
                                    <Layers size={18} className="text-retro-accent" /> Event Rounds
                                </h3>
                                <ol className="space-y-3 relative border-l border-white/10 pl-6 ml-2">
                                    {event.rounds.map((round, i) => (
                                        <li key={i} className="relative group">
                                            <div className="absolute -left-[1.85rem] top-1 w-4 h-4 rounded-full bg-retro-accent/10 border border-retro-accent/40 flex items-center justify-center group-hover:bg-retro-accent/30 transition-colors">
                                                <span className="text-[9px] text-retro-accent font-bold">{i + 1}</span>
                                            </div>
                                            <p className="text-gray-300 font-body leading-relaxed group-hover:text-white transition-colors">{round}</p>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        {/* Rules or Evaluation Section */}
                        <section>
                            <h3 className="text-xl font-oriental text-desi-gold mb-4 flex items-center gap-2">
                                <Info size={18} className="text-retro-accent" />
                                {event.EvaluationCriteria ? "Evaluation Criteria" : "Rules & Regulations"}
                            </h3>
                            <ul className="space-y-4">
                                {(event.EvaluationCriteria || event.rules || []).map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-400 group">
                                        <span className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-xs text-retro-accent border border-white/10 group-hover:border-retro-accent transition-colors shrink-0 mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="font-body leading-relaxed group-hover:text-gray-200 transition-colors">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Eligibility */}
                        {event.eligibility && (
                            <section className="bg-white/[0.03] rounded-2xl p-5 border border-white/5">
                                <h3 className="text-sm font-tech text-gray-400 uppercase tracking-widest mb-3">Eligibility</h3>
                                <p className="text-gray-300 font-body leading-relaxed">{event.eligibility}</p>
                            </section>
                        )}

                        {/* Footer Action */}
                        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm text-gray-500 font-tech uppercase tracking-wider mb-1">Registration Closes</span>
                                <span className="text-white font-body font-semibold flex items-center gap-2"><Calendar size={16} className="text-retro-primary" /> {event.regDeadline || "20th March, 2026"}</span>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-retro-primary to-retro-secondary text-white font-bold font-tech tracking-widest rounded-lg hover:scale-105 transition-transform shadow-lg shadow-retro-primary/20">
                                REGISTER NOW
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const EventCard = ({ event, index, total, scrollYProgress, onSelect }) => {
    // 1. Calculate Activation Timeline
    const step = 1 / (total - 1);
    const center = step * index;
    const rangeVals = [Math.max(0, center - step), center, Math.min(1, center + step)];

    // --- Active State Animations ---
    const scale = useTransform(scrollYProgress, rangeVals, [0.85, 1.15, 0.85]);
    const opacity = useTransform(scrollYProgress, rangeVals, [0.4, 1, 0.4]);
    const y = useTransform(scrollYProgress, rangeVals, ["10%", "-5%", "10%"]);
    const blurVal = useTransform(scrollYProgress, rangeVals, [4, 0, 4]);
    const filter = useMotionTemplate`blur(${blurVal}px)`;

    // 3D Tilt
    const rotateY = useTransform(scrollYProgress, rangeVals, [15, 0, -15]);

    // Z-Index
    const zIndexVal = useTransform(scrollYProgress, rangeVals, [1, 50, 1]);
    const zIndex = useTransform(zIndexVal, (v) => Math.round(v));

    // Pointer Events
    const pointerEvents = useTransform(scrollYProgress, (val) => {
        const dist = Math.abs(val - center);
        return dist < step * 0.4 ? "auto" : "none";
    });

    return (
        <motion.div
            style={{
                scale,
                opacity,
                y,
                filter,
                rotateY,
                zIndex,
                pointerEvents
            }}
            className="relative flex-shrink-0 rounded-[2.5rem] perspective-1000 group cursor-pointer"
        >
            {/* Explicit size container */}
            <div className="w-[var(--card-width)] h-[55vh] relative rounded-[2.5rem]">
                {/* 3D Inner Container */}
                <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl transition-all duration-500 hover:border-retro-accent/50 hover:shadow-[0_0_60px_rgba(255,215,0,0.15)] origin-center">

                    {/* Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0505] via-black/40 to-transparent z-10" />
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay z-10" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-8 md:p-10 z-20 w-full flex flex-col justify-end h-full">
                        <div className="absolute top-6 right-6 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                            <span className="text-white/60 text-[10px] font-tech tracking-[0.2em] uppercase">2026</span>
                        </div>

                        {/* Animated Text Block */}
                        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white mb-3 leading-[0.9] drop-shadow-lg group-hover:text-retro-accent transition-colors uppercase">
                                {event.title}
                            </h3>
                            <div className="h-1 w-12 bg-retro-primary mb-4 rounded-full group-hover:w-20 group-hover:bg-retro-accent transition-all duration-500 ease-out" />

                            <p className="text-base sm:text-lg font-body text-gray-300 line-clamp-2 leading-snug group-hover:text-white transition-colors">
                                {event.desc}
                            </p>
                        </div>

                        {/* CTA - Reveals on Hover */}
                        <div className="mt-6 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            <button
                                onClick={() => onSelect(event)}
                                className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-retro-accent transition-colors shadow-lg shadow-white/5"
                            >
                                Explore Event
                            </button>
                        </div>
                    </div>

                    {/* Rim Light */}
                    <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 pointer-events-none group-hover:border-retro-accent/20 transition-colors duration-500 mix-blend-screen" />
                </div>
            </div>
        </motion.div>
    );
};

const Events = () => {
    const targetRef = useRef(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // --- Responsive Configuration ---
    const eventsCount = 6;
    // Map scroll progress 0-0.9 to the full index range, leaving the last 10% as a buffer.
    const scrollIndex = useTransform(scrollYProgress, [0, 0.9], [0, eventsCount - 1]);
    const x = useMotionTemplate`calc(${scrollIndex} * -1 * (var(--card-width) + var(--gap)))`;

    const events = [
        {
            title: "TRADING ALGO",
            desc: "Algorithmic Trading Competition",
            fullDesc: "Participants design and implement an algorithm that automatically executes trades in financial markets based on predefined logic. Code your edge, dominate the market.",
            color: "from-retro-purple to-indigo-900",
            prize: "₹50,000",
            teamSize: "3-4 Members",
            regDeadline: "15th March, 2026",
            eligibility: "Open to all undergraduate & postgraduate students. Prior knowledge of Python/trading APIs is recommended.",
            highlights: [
                "Algorithmic Trading Competition",
                "Quantitative strategy building (momentum, mean reversion, arbitrage, etc.)",
                "Backtesting using historical data",
                "Risk management (Sharpe ratio, drawdown control)",
            ],
            prizeBreakdown: [
                { rank: "🥇 1st Place", amount: "₹25,000" },
                { rank: "🥈 2nd Place", amount: "₹15,000" },
                { rank: "🥉 3rd Place", amount: "₹10,000" },
            ],
            rounds: [
                "Round 1 — Strategy Submission: Submit your algorithm logic and pseudocode for initial screening.",
                "Round 2 — Backtesting: Run your strategy on 3-year historical data; results evaluated by the panel.",
                "Round 3 — Live Trading: Execute real-time paper trades in a 2-hour live market session.",
                "Grand Finale — Pitch to Quants: Present your strategy rationale to a panel of industry judges.",
            ],
            EvaluationCriteria: [
                "Profitability — net returns over the live trading session",
                "Risk-adjusted returns — Sharpe ratio and max drawdown analysis",
                "Robustness of strategy — performance across multiple market conditions",
                "Code efficiency, clarity, and originality of logic",
            ],
        },
        {
            title: "REBRANDING",
            desc: "Company Transformation & Pitch",
            fullDesc: "You're given an existing company (often outdated or struggling) and must redesign its identity and reposition it in the market. Reimagine the brand, rebuild the future.",
            color: "from-retro-primary to-rose-900",
            prize: "Funding + ₹30,000",
            teamSize: "1-3 Members",
            regDeadline: "18th March, 2026",
            eligibility: "Open to all students. Designers, marketers, and strategists are encouraged to form cross-disciplinary teams.",
            highlights: [
                "Company Transformation & Pitch",
                "Analyze current brand positioning",
                "Identify gaps (target audience, USP, brand perception)",
                "Present a pitch deck",
            ],
            prizeBreakdown: [
                { rank: "🥇 1st Place", amount: "₹15,000 + Funding" },
                { rank: "🥈 2nd Place", amount: "₹10,000" },
                { rank: "🥉 3rd Place", amount: "₹5,000" },
            ],
            rounds: [
                "Round 1 — Brand Audit: Identify the core flaws and strengths of the given company.",
                "Round 2 — Strategy Deck: Present your new brand strategy, including logo direction, tone of voice & target audience.",
                "Grand Finale — Investor Pitch: Deliver a full rebrand pitch to a panel of venture capitalists and brand experts.",
            ],
            EvaluationCriteria: [
                "Creativity balanced with market practicality",
                "Depth and accuracy of market research",
                "Strategic brand alignment and coherent visual identity",
                "Persuasiveness and delivery of the pitch",
            ],
        },
        {
            title: "HI-TABLE",
            desc: "High Table / Case Round Format",
            fullDesc: "A high-pressure boardroom-style competition where teams present solutions to judges acting as investors, CEOs, or board members. Command the room. Own the narrative.",
            color: "from-retro-accent to-amber-900",
            prize: "₹20,000",
            teamSize: "2-3 Members",
            regDeadline: "17th March, 2026",
            eligibility: "Open to all students. MBA/BBA students and those with case competition experience are especially welcome.",
            highlights: [
                "High Table / Case Round Format",
                "Case study given (business, finance, operations, policy, etc.)",
                "Boardroom-style Q&A grilling",
                "Structured and strategic thinking",
            ],
            prizeBreakdown: [
                { rank: "🥇 1st Place", amount: "₹12,000" },
                { rank: "🥈 2nd Place", amount: "₹5,000" },
                { rank: "🥉 3rd Place", amount: "₹3,000" },
            ],
            rounds: [
                "Preliminary Round — Teams receive a case study and have 30 minutes to prepare their analysis.",
                "Boardroom Presentation — 15-minute structured presentation followed by 10 minutes of intense Q&A.",
                "Grand Finale — Top 4 teams face a curveball business scenario for a live, unscripted boardroom battle.",
            ],
            EvaluationCriteria: [
                "Depth and quality of business analysis",
                "Confidence, clarity, and articulation under pressure",
                "Structured and logical thinking flow",
                "Ability to handle and convincingly answer counter-questions",
            ],
        },
        {
            title: "ESPORTS",
            desc: "Battle for ultimate glory.",
            fullDesc: "Compete in top-tier titles like Valorant and BGMI. Showcase your reflexes, strategy, and teamwork on the big stage. Only the sharpest survive.",
            color: "from-emerald-600 to-green-950",
            prize: "₹25,000",
            teamSize: "5 Members",
            regDeadline: "20th March, 2026",
            eligibility: "Open to all college students with valid student ID. Participants must be enrolled in a college/university.",
            highlights: [
                "Double-elimination tournament bracket for maximum competitive depth",
                "High-spec gaming PCs provided at the venue (bring your own peripherals)",
                "Live stream with commentary broadcast on the E-Summit YouTube channel",
                "Merch drops and surprise giveaways for audience and participants",
            ],
            prizeBreakdown: [
                { rank: "🥇 Champions", amount: "₹15,000" },
                { rank: "🥈 Runners-Up", amount: "₹7,000" },
                { rank: "🥉 3rd Place", amount: "₹3,000" },
            ],
            rounds: [
                "Group Stage — Round-robin format across 4 groups; top 2 from each advance.",
                "Quarterfinals & Semifinals — Single-elimination best-of-3 matches.",
                "Grand Final — Best-of-5 series on the main stage with live audience.",
            ],
            rules: [
                "Bring your own peripherals (Mouse, Keyboard, Headset allowed).",
                "Standard tournament draft and map-pick rules apply per game title.",
                "Toxic behavior, smurfing, or cheating leads to immediate disqualification.",
                "Team must have all 5 members checked-in 30 minutes before match time.",
            ],
        },
        {
            title: "ROBOWARS",
            desc: "Metal on metal showdown.",
            fullDesc: "The ultimate destruction derby. Build a combat robot and destroy your opponents in the arena. Sparks will fly, metal will clash — only the strongest bot survives.",
            color: "from-slate-500 to-gray-900",
            prize: "₹40,000",
            teamSize: "4-6 Members",
            regDeadline: "10th March, 2026",
            eligibility: "Open to all UG/PG engineering and technical students. Teams must submit a robot design blueprint during registration.",
            highlights: [
                "Two weight categories: Featherweight (15 kg) and Middleweight (60 kg)",
                "Custom combat arena built to international Robowars standards",
                "Technical panel inspection ensures safety and fair competition",
                "Top teams get featured in Robotics Today magazine",
            ],
            prizeBreakdown: [
                { rank: "🥇 1st Place", amount: "₹20,000" },
                { rank: "🥈 2nd Place", amount: "₹12,000" },
                { rank: "🥉 3rd Place", amount: "₹8,000" },
            ],
            rounds: [
                "Registration & Blueprint Review — Submit your robot design for safety and compliance check.",
                "Qualification Bouts — 2-minute timed fights; top 8 bots advance.",
                "Elimination Rounds — Single-elimination head-to-head battles.",
                "Grand Championship — Final two bots clash in a winner-takes-all 3-minute fight.",
            ],
            rules: [
                "Bot weight limit strictly enforced: 15 kg (Featherweight) / 60 kg (Middleweight).",
                "No liquid projectiles, EMP devices, or radio-jamming equipment.",
                "Pneumatic and hydraulic weapons allowed; open flames strictly prohibited.",
                "Safety inspection is mandatory before every match — non-compliant bots are disqualified.",
            ],
        },
        {
            title: "TRADING",
            desc: "High stakes stock simulation.",
            fullDesc: "Master the markets in this real-time stock trading simulation. Analyze trends, make bold moves, and maximize your portfolio value before the bell rings.",
            color: "from-sky-600 to-blue-950",
            prize: "₹15,000",
            teamSize: "Solo / Duo",
            regDeadline: "20th March, 2026",
            eligibility: "Open to all students. No prior trading experience required — just sharp analytical thinking and nerves of steel.",
            highlights: [
                "Real-time simulated stock market with live price fluctuations",
                "News feed injects market-moving events throughout the session",
                "Leaderboard updated every 10 minutes for intense live competition",
                "Top finishers receive trading platform subscriptions as bonus prizes",
            ],
            prizeBreakdown: [
                { rank: "🥇 1st Place", amount: "₹8,000" },
                { rank: "🥈 2nd Place", amount: "₹5,000" },
                { rank: "🥉 3rd Place", amount: "₹2,000" },
            ],
            rounds: [
                "Orientation Round — Market rules and trading platform walkthrough (30 minutes).",
                "Morning Session — 90-minute trading session; establish your portfolio strategy.",
                "Afternoon Session — Final 60-minute sprint with surprise market events.",
                "Results & Awards — Top portfolios announced and winners felicitated.",
            ],
            rules: [
                "Initial virtual capital: ₹10,00,000 per participant or team.",
                "Market manipulation exploits, bots, or scripts are strictly banned.",
                "Portfolio value at market close (session end) determines the final ranking.",
                "All trades must be executed within the provided simulation platform only.",
            ],
        },
    ];

    return (
        <div className="bg-[#1a0505] relative w-full border-t border-white/5">
            {/* Header Section for Transition & Spacer */}
            <div className="relative min-h-[70vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden">
                {/* 1. Dynamic Background Layers */}
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none z-10" />

                {/* Sides: Decorative Elements to fill space */}
                {/* LEFT SIDEBAR */}
                <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 h-3/4 flex flex-col justify-between items-center z-20 pointer-events-none hidden md:flex">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                    <div className="writing-vertical-rl rotate-180 text-xs font-tech tracking-[0.3em] text-white/30 uppercase">
                        The Zenith • Est. 2026
                    </div>
                    <div className="flex flex-col gap-2">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-1 h-1 rounded-full ${i === 2 ? 'bg-retro-accent' : 'bg-white/10'}`} />
                        ))}
                    </div>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </div>

                {/* RIGHT SIDEBAR */}
                <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 h-3/4 flex flex-col justify-between items-center z-20 pointer-events-none hidden md:flex">
                    <div className="flex flex-col items-center gap-4">
                        <span className="text-[10px] font-tech text-retro-accent uppercase animate-pulse">Live</span>
                        <div className="w-[1px] h-12 bg-retro-accent/30" />
                    </div>
                    <div className="writing-vertical-rl text-xs font-tech tracking-[0.2em] text-white/30 uppercase">
                        System Status: Online
                    </div>
                    <div className="flex flex-col gap-1 opacity-30">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="w-4 h-[2px] bg-white" style={{ opacity: Math.random() }} />
                        ))}
                    </div>
                </div>

                {/* CORNER BRACKETS */}
                <svg className="absolute top-8 left-8 w-12 h-12 z-20 opacity-40 pointer-events-none hidden md:block" viewBox="0 0 40 40">
                    <path d="M1 40 V 1 H 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-retro-accent" />
                </svg>
                <svg className="absolute top-8 right-8 w-12 h-12 z-20 opacity-40 pointer-events-none hidden md:block" viewBox="0 0 40 40">
                    <path d="M0 1 H 39 V 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-retro-accent" />
                </svg>
                <svg className="absolute bottom-8 left-8 w-12 h-12 z-20 opacity-40 pointer-events-none hidden md:block" viewBox="0 0 40 40">
                    <path d="M1 0 V 39 H 40" fill="none" stroke="currentColor" strokeWidth="2" className="text-retro-accent" />
                </svg>
                <svg className="absolute bottom-8 right-8 w-12 h-12 z-20 opacity-40 pointer-events-none hidden md:block" viewBox="0 0 40 40">
                    <path d="M0 39 H 39 V 0" fill="none" stroke="currentColor" strokeWidth="2" className="text-retro-accent" />
                </svg>

                {/* Moving Spotlight */}
                <motion.div
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-retro-primary/20 rounded-full blur-[120px] pointer-events-none"
                />

                {/* Secondary Color Orb */}
                <motion.div
                    animate={{
                        x: [-100, 100, -100],
                        y: [-50, 50, -50],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-retro-purple/10 rounded-full blur-[100px] pointer-events-none"
                />

                {/* 2. Retro Perspective Grid */}
                <div className="absolute bottom-0 w-[200%] h-64 border-t border-white/5 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_top,black,transparent)] [transform:perspective(500px)_rotateX(60deg)_translateY(100px)] animate-[grid-move_20s_linear_infinite] opacity-40 pointer-events-none" />

                {/* 3. Main Content with Glitch & Stagger */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center z-20 relative px-6"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-retro-accent/30 bg-retro-accent/5 backdrop-blur-md mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-retro-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-retro-accent"></span>
                        </span>
                        <span className="text-retro-accent font-tech tracking-widest text-xs uppercase font-bold">Discover</span>
                    </motion.div>

                    <div className="relative">
                        <motion.h2
                            className="text-[15vw] md:text-[10rem] font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 leading-[0.85] tracking-tighter mb-4 relative z-10"
                            animate={{
                                textShadow: [
                                    "0 0 0px rgba(255,255,255,0)",
                                    "0 0 10px rgba(255,255,255,0.1)",
                                    "0 0 0px rgba(255,255,255,0)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            EVENTS
                        </motion.h2>

                        {/* Glitch Overlay Text */}
                        <motion.span
                            className="absolute top-0 left-0 w-full text-[15vw] md:text-[10rem] font-display text-retro-primary/20 leading-[0.85] tracking-tighter mix-blend-color-dodge select-none pointer-events-none"
                            animate={{ x: [-2, 2, -1, 0], opacity: [0, 1, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 5 }}
                        >
                            EVENTS
                        </motion.span>
                    </div>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 100 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-1 bg-gradient-to-r from-transparent via-retro-primary to-transparent mx-auto mb-8"
                    />

                    <p className="text-gray-400 font-tech max-w-lg mx-auto tracking-[0.2em] uppercase text-sm md:text-base leading-relaxed">
                        Navigate the challenges <span className="text-retro-accent mx-2">•</span> Prove your mettle
                    </p>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
                >
                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-retro-accent to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest text-white/50 font-tech animate-pulse">Scroll</span>
                </motion.div>

                {/* Floating Particles */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-retro-accent rounded-full"
                        initial={{
                            x: Math.random() * 100 - 50 + "%",
                            y: Math.random() * 100 + "%",
                            opacity: 0
                        }}
                        animate={{
                            y: [null, Math.random() * -100 + "%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5
                        }}
                    />
                ))}

                {/* Blend Gradient */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#1a0505] to-transparent pointer-events-none z-10" />
            </div>

            <section
                ref={targetRef}
                id="events"
                className="relative h-[600vh] bg-[#1a0505]"
                style={{
                    // Responsive Variables
                    "--card-width": "60vh",
                    "--gap": "3rem",
                }}
            >
                {/* Responsive Styles Injection */}
                <style>{`
                    .events-track {
                        --card-width: 60vh;
                        --gap: 3rem;
                    }
                    @media (max-width: 768px) {
                        .events-track {
                            --card-width: 85vw;
                            --gap: 1.5rem;
                        }
                    }
                 `}</style>

                {/* Sticky Container */}
                <div className="sticky top-0 flex h-screen items-center overflow-hidden perspective-1000 events-track">
                    {/* Backgrounds */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2b0a0a] to-[#1a0505] z-0" />
                    <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay z-0" />

                    {/* Horizontal Scroll Track */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-center">
                        <motion.div
                            style={{ x }}
                            className="flex gap-[var(--gap)] w-fit items-center will-change-transform pl-[50vw] pr-[50vw]"
                        >
                            {/* Spacer to center first item correctly. pl-[50vw] puts start at center. we adjust by half card width in useMotionTemplate? 
                                Actually, useMotionTemplate centers it if the logic is right.
                                Previous logic: pl-[calc(50vw-var(--card-width)/2)] 
                            */}
                        </motion.div>

                        {/* 
                            Wait, I need to restore the EXACT motion div logic from previous file.
                            previous: className="flex gap-[var(--gap)] w-fit items-center will-change-transform pl-[calc(50vw-var(--card-width)/2)] pr-[calc(50vw-var(--card-width)/2)]"
                        */}
                        <motion.div
                            style={{ x }}
                            className="flex gap-[var(--gap)] w-fit items-center will-change-transform pl-[calc(50vw-var(--card-width)/2)] pr-[calc(50vw-var(--card-width)/2)]"
                        >
                            {events.map((event, i) => (
                                <EventCard
                                    key={i}
                                    event={event}
                                    index={i}
                                    total={events.length}
                                    scrollYProgress={scrollYProgress}
                                    onSelect={setSelectedEvent}
                                />
                            ))}
                        </motion.div>

                        {/* Scroll Hint */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 mix-blend-plus-lighter pointer-events-none">
                            <span className="text-[10px] uppercase tracking-widest text-white">Scroll to Explore</span>
                            <div className="w-5 h-8 border border-white rounded-full flex justify-center pt-2">
                                <div className="w-1 h-1 bg-white rounded-full animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {selectedEvent && (
                        <EventPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} />
                    )}
                </AnimatePresence>
            </section>
        </div>
    );
};

export default Events;
