import { useEffect, useRef, useState } from "react";

const SkillsIntro = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px 100px 0px", // Start animating 100px before section enters viewport
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen bg-gradient-to-b from-[#7DD3FC] via-[#F9A8D4] to-[#FBBF7A] dark:from-[#0C4A6E] dark:via-[#4a2040] dark:to-[#5c3a1e] transition-colors duration-300 flex items-center justify-center overflow-hidden"
        >
            <style>{`
                @keyframes pulse-ring {
                    0% { transform: scale(0.8); opacity: 0.5; }
                    50% { transform: scale(1.2); opacity: 0; }
                    100% { transform: scale(0.8); opacity: 0.5; }
                }
                @keyframes float-bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>

            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Floating circles */}
                <div
                    className="absolute w-32 h-32 rounded-full border border-white/10"
                    style={{
                        top: "20%",
                        left: "10%",
                        transform: isVisible ? "scale(2) rotate(90deg)" : "scale(0.5) rotate(0deg)",
                        opacity: isVisible ? 0.35 : 0.15,
                        transition: "all 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                />
                <div
                    className="absolute w-48 h-48 rounded-full border border-white/10"
                    style={{
                        top: "60%",
                        right: "8%",
                        transform: isVisible ? "scale(1.5) rotate(-60deg)" : "scale(0.3) rotate(0deg)",
                        opacity: isVisible ? 0.25 : 0.1,
                        transition: "all 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
                    }}
                />
                <div
                    className="absolute w-24 h-24 rounded-full"
                    style={{
                        top: "30%",
                        right: "20%",
                        background: "radial-gradient(circle, rgba(253,224,71,0.3) 0%, transparent 70%)",
                        transform: isVisible ? "scale(2)" : "scale(0)",
                        opacity: isVisible ? 0.5 : 0,
                        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
                    }}
                />
                <div
                    className="absolute w-20 h-20 rounded-full"
                    style={{
                        bottom: "25%",
                        left: "15%",
                        background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)",
                        transform: isVisible ? "scale(2.5)" : "scale(0)",
                        opacity: isVisible ? 0.4 : 0,
                        transition: "all 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s",
                    }}
                />

                {/* Horizontal reveal line */}
                <div
                    className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                        width: isVisible ? "100%" : "0%",
                        transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
                    }}
                />
            </div>

            {/* Main text content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">
                {/* Line 1 */}
                <p
                    className="text-sm md:text-base tracking-[0.4em] uppercase text-white/60 mb-6 font-light"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0px)" : "translateY(40px)",
                        transition: "all 1.2s ease-in-out 0.2s",
                    }}
                >
                    Now, let me show you
                </p>

                {/* Line 2 — Main statement */}
                <h2
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0px)" : "translateY(50px)",
                        transition: "all 1.4s ease-in-out 0.5s",
                    }}
                >
                    WHAT I
                    <br />
                    <span
                        className="inline-block bg-gradient-to-b from-cyan-200 to-indigo-500 bg-clip-text text-transparent "
                        style={{
                           // background: "linear-gradient(135deg, #FDE047, #A78BFA)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        CAN DO
                    </span>
                </h2>

                {/* Line 3 */}
                <p
                    className="text-base md:text-lg text-white/50 max-w-md mx-auto leading-relaxed"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0px)" : "translateY(40px)",
                        transition: "all 1.3s ease-in-out 0.8s",
                    }}
                >
                    A curated collection of technologies, tools and skills I've honed through learning and building.
                </p>

                {/* Scroll down arrow */}
                <div
                    className="mt-16 flex flex-col items-center gap-2"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: "opacity 1.2s ease-in-out 1s",
                        animation: isVisible ? "float-bounce 2s ease-in-out infinite" : "none",
                    }}
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">
                        Keep scrolling
                    </span>
                    <svg
                        className="w-5 h-5 text-white/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default SkillsIntro;
