// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Testimonial({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="py-24 px-4 bg-background border-t border-surface overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-3">{data.heading}</h2>
                    <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data.items?.map((item: any, idx: number) => (
                        <div
                            key={idx}
                            className="group relative bg-white p-8 pt-14 rounded-2xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] border border-surface/50 flex flex-col gap-6 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 ease-out"
                            style={{
                                animation: `fadeInUp 0.8s ease-out forwards`,
                                animationDelay: `${idx * 0.2}s`,
                                opacity: 0 // Start invisible for animation
                            }}
                        >
                            {/* Decorative Quote Mark */}
                            <div className="absolute top-6 left-8 text-6xl text-accent/20 font-serif leading-none select-none">
                                “
                            </div>

                            <p className="relative z-10 font-serif text-lg text-primary/80 italic leading-relaxed flex-grow">
                                &quot;{item.quote}&quot;
                            </p>

                            <div className="relative z-10 flex items-center gap-4 border-t border-surface/50 pt-6 mt-2">
                                <div className="w-12 h-12 rounded-full bg-[#2B3210] text-[#E5E2D9] flex items-center justify-center font-serif font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
                                    {item.author.split(' ').map((n: string) => n[0]).join('').substring(0, 2)}
                                </div>
                                <div className="text-left">
                                    <p className="font-bold text-primary text-base">{item.author}</p>
                                    <p className="text-xs font-bold text-accent uppercase tracking-widest">{item.context}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
