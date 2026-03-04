import { useEffect, useRef, useState } from "react";

const SkillsIntro = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = sectionRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;

            // Calculate how far through the section we've scrolled (0 to 1)
            const progress = Math.max(
                0,
                Math.min(1, (viewportHeight - rect.top) / (sectionHeight + viewportHeight))
            );
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation phases based on scroll progress
    const line1Opacity = Math.min(1, Math.max(0, (scrollProgress - 0.1) * 5));
    const line1Y = Math.max(0, (1 - Math.min(1, (scrollProgress - 0.1) * 5)) * 60);

    const line2Opacity = Math.min(1, Math.max(0, (scrollProgress - 0.25) * 5));
    const line2Y = Math.max(0, (1 - Math.min(1, (scrollProgress - 0.25) * 5)) * 60);

    const line3Opacity = Math.min(1, Math.max(0, (scrollProgress - 0.4) * 5));
    const line3Y = Math.max(0, (1 - Math.min(1, (scrollProgress - 0.4) * 5)) * 60);

    const arrowOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.6) * 4));
    const arrowBounce = Math.sin(scrollProgress * Math.PI * 4) * 8;

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[200vh] bg-gradient-to-b from-[#7DD3FC] via-[#38BDF8] to-[#0EA5E9] dark:from-[#0C4A6E] dark:via-[#0c4a6e] dark:to-[#0a3d5c] transition-colors duration-300"
        >
            <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0; }
          100% { transform: scale(0.8); opacity: 0.5; }
        }
      `}</style>

            {/* Sticky container for the animated content */}
            <div className="sticky top-0 min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Floating circles that respond to scroll */}
                    <div
                        className="absolute w-32 h-32 rounded-full border border-white/10"
                        style={{
                            top: "20%",
                            left: "10%",
                            transform: `scale(${0.5 + scrollProgress * 1.5}) rotate(${scrollProgress * 90}deg)`,
                            opacity: 0.15 + scrollProgress * 0.2,
                            transition: "opacity 0.3s",
                        }}
                    />
                    <div
                        className="absolute w-48 h-48 rounded-full border border-white/10"
                        style={{
                            top: "60%",
                            right: "8%",
                            transform: `scale(${0.3 + scrollProgress * 1.2}) rotate(${-scrollProgress * 60}deg)`,
                            opacity: 0.1 + scrollProgress * 0.15,
                            transition: "opacity 0.3s",
                        }}
                    />
                    <div
                        className="absolute w-24 h-24 rounded-full"
                        style={{
                            top: "30%",
                            right: "20%",
                            background: "radial-gradient(circle, rgba(253,224,71,0.3) 0%, transparent 70%)",
                            transform: `scale(${scrollProgress * 2})`,
                            opacity: scrollProgress * 0.5,
                        }}
                    />
                    <div
                        className="absolute w-20 h-20 rounded-full"
                        style={{
                            bottom: "25%",
                            left: "15%",
                            background: "radial-gradient(circle, rgba(167,139,250,0.3) 0%, transparent 70%)",
                            transform: `scale(${scrollProgress * 2.5})`,
                            opacity: scrollProgress * 0.4,
                        }}
                    />

                    {/* Horizontal scroll-reveal line */}
                    <div
                        className="absolute top-1/2 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        style={{
                            width: `${scrollProgress * 100}%`,
                            transition: "width 0.1s linear",
                        }}
                    />
                </div>

                {/* Main text content */}
                <div className="relative z-10 text-center px-6 max-w-3xl">
                    {/* Line 1 */}
                    <p
                        className="text-sm md:text-base tracking-[0.4em] uppercase text-white/60 mb-6 font-light"
                        style={{
                            opacity: line1Opacity,
                            transform: `translateY(${line1Y}px)`,
                        }}
                    >
                        Now, let me show you
                    </p>

                    {/* Line 2 — Main statement */}
                    <h2
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[0.9] mb-8"
                        style={{
                            opacity: line2Opacity,
                            transform: `translateY(${line2Y}px)`,
                        }}
                    >
                        WHAT I
                        <br />
                        <span
                            className="inline-block"
                            style={{
                                background: "linear-gradient(135deg, #FDE047, #A78BFA)",
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
                            opacity: line3Opacity,
                            transform: `translateY(${line3Y}px)`,
                        }}
                    >
                        A curated collection of technologies, tools and skills I've honed through learning and building.
                    </p>

                    {/* Scroll down arrow */}
                    <div
                        className="mt-16 flex flex-col items-center gap-2"
                        style={{
                            opacity: arrowOpacity,
                            transform: `translateY(${arrowBounce}px)`,
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

                {/* Progress indicator on the side */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-1">
                    <div
                        className="w-[2px] rounded-full bg-white/20"
                        style={{ height: "120px" }}
                    >
                        <div
                            className="w-full rounded-full bg-[#FDE047] transition-all duration-100"
                            style={{ height: `${scrollProgress * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsIntro;
