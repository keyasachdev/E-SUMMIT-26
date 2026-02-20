import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const team = [
        //{ name: "Vishrut Gupta", role: "Operations Head", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Ishita", linkedin: "https://www.linkedin.com/in/vishrut-gupta-3026a2232/", email: "mailto:vishrut@esummit.in", phone: "tel:‪+91 82878 42513‬" },
        { name: "Chehak Trehan", role: "R&D Head", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Rahul", linkedin: "https://www.linkedin.com/in/chehak-trehan-475b22216/", email: "mailto:chehak@esummit.in", phone: "tel:‪+91 99713 47997‬" },
         { name: "Arlin Jain", role: "President", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Dhruv", linkedin: "https://www.linkedin.com/in/arlin-jain-4154b22aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", email: "mailto:arlin@esummit.in", phone: "tel:+91 9319324001" },
        { name: "Yug Raheja", role: "R&D Head", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Arshita", linkedin: "https://www.linkedin.com/in/yug-raheja/", email: "mailto:yug@esummit.in", phone: "tel:‪+91 93508 06451‬" },
       // { name: "Aryan Kumar", role: "Content Head", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Pranav", linkedin: "https://www.linkedin.com/in/aryan-kumar-650044250/", email: "mailto:aryan@esummit.in", phone: "tel:‪+91 82350 25433" },
        //{ name: "Neel Chugh", role: "Vice-President", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Ayushmaan", linkedin: "https://www.linkedin.com/in/neel-chugh-5b6101374?utm_source=share_via&utm_content=profile&utm_medium=member_ios", email: "mailto:neel@esummit.in", phone: "tel:+91 95996 06454" },
        //{ name: "Dia Gandhi", role: "General Secretary", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Sajal", linkedin: "https://www.linkedin.com/in/dia-gandhi-21078b365?utm_source=share_via&utm_content=profile&utm_medium=member_ios", email: "mailto:dia@esummit.in", phone: "tel:+91 83830 41430" },
        { name: "Parth Udar", role: "Joint Secretary", img: "https://api.dicebear.com/7.x/notionists/svg?seed=Aditya", linkedin: "https://www.linkedin.com/in/parth-udar-b34020298?utm_source=share_via&utm_content=profile&utm_medium=member_android", email: "mailto:parth@esummit.in", phone: "tel:+91 96677 74204" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: (index) => ({
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // Even from Left, Odd from Right
            y: 50
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { type: "spring", stiffness: 40, damping: 15 }
        }
    };

    return (
        <section id="contact" className="relative min-h-screen py-32 overflow-hidden bg-[#1a0505]">
            {/* 1. Continuity: Top Gradient to merge with dark previous section */}
            <div className="absolute top-0 w-full h-64 bg-gradient-to-b from-[#1a0505] via-[#1a0505]/80 to-transparent z-20 pointer-events-none" />

            {/* 2. Cyber/Tech Background Pattern */}
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 mix-blend-overlay z-0" />

            {/* Digital Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #ff4d00 1px, transparent 1px),
                        linear-gradient(to bottom, #ff4d00 1px, transparent 1px)
                    `,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-retro-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-retro-primary/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-30 flex flex-col items-center">

                {/* 3. Header Banner - Coming from DOWN to UP */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-32 group"
                >
                    <div className="relative z-10">
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80 tracking-widest drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]">
                            CONTACT US
                        </h2>
                        {/* Underline Glitch Effect */}
                        <div className="absolute -bottom-4 left-0 w-full h-1 bg-retro-primary/50 rounded-full overflow-hidden">
                            <div className="absolute inset-0 bg-retro-accent w-1/3 animate-[shimmer_2s_infinite]" />
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-retro-primary/20 blur-[50px] -z-10 opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                </motion.div>

                {/* 4. Hanging/Floating Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 sm:gap-y-24 gap-x-6 sm:gap-x-8 w-full px-2 sm:px-4 md:px-12"
                >
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            className="flex flex-col items-center relative group"
                        >

                            {/* The 'String' - Now a Laser Line */}
                            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-retro-primary/50 to-retro-primary z-0 group-hover:h-36 transition-all duration-500" />

                            {/* The 'Pin' - Glowing Node */}
                            <div className="absolute -top-[8rem] left-1/2 -translate-x-1/2 w-2 h-2 bg-retro-accent rounded-full z-10 shadow-[0_0_10px_#ffd700]" />

                            {/* The Digital Card */}
                            <div
                                className="relative w-full aspect-[4/3] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center text-center transform transition-all duration-500 hover:-translate-y-2 hover:border-retro-primary/50 hover:shadow-[0_0_30px_rgba(255,77,0,0.2)] group-hover:bg-[#1a0505]/80"
                            >
                                {/* Holographic Sheen */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Avatar */}
                                <div className="relative w-24 h-24 mb-4 mt-2">
                                    <div className="absolute inset-0 bg-retro-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-retro-primary transition-colors duration-300 bg-black/40">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1 flex flex-col justify-center relative z-10">
                                    <h3 className="text-xl md:text-2xl font-display text-white mb-2 tracking-wide">{member.name}</h3>
                                    <p className="text-xs md:text-sm font-body text-gray-400 font-light uppercase tracking-wider group-hover:text-retro-accent transition-colors">
                                        {member.role}
                                    </p>
                                </div>

                                {/* Social Actions */}
                                <div className="mt-4 flex gap-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                    <a href={member.email} className="p-2 hover:bg-white/10 rounded-full transition-colors group/icon">
                                        <Mail className="w-5 h-5 text-white group-hover/icon:text-retro-primary transition-colors" />
                                    </a>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors group/icon">
                                        <Linkedin className="w-5 h-5 text-white group-hover/icon:text-retro-primary transition-colors" />
                                    </a>
                                    <a href={member.phone} className="p-2 hover:bg-white/10 rounded-full transition-colors group/icon">
                                        <Phone className="w-5 h-5 text-white group-hover/icon:text-retro-primary transition-colors" />
                                    </a>
                                </div>

                                {/* Corner Accents */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 rounded-tl-lg" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 rounded-tr-lg" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 rounded-bl-lg" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 rounded-br-lg" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
