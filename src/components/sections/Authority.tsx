// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Authority({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3 text-accent">
                        <span className="h-px w-12 bg-accent"></span>
                        <span className="text-sm font-bold uppercase tracking-widest">{data.eyebrow}</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                        {data.heading}
                    </h2>
                    <p className="text-secondary text-lg leading-relaxed">
                        {data.text}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                        {data.highlights?.map((highlight: any, index: number) => (
                            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-surface">
                                <div className="p-3 rounded-full bg-background text-accent">
                                    <span className="material-symbols-outlined">verified</span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-primary mb-1">{highlight.title}</h3>
                                    <p className="text-sm text-secondary">{highlight.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-surface">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/assets/consultoria-new.jpg"
                            alt="Consultoria Imobiliária"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {data.badge && (
                        <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-lg shadow-lg max-w-[220px] hidden md:block border-t-4 border-accent">
                            <p className="font-serif text-5xl font-bold text-white mb-1">{data.badge.value}</p>
                            <p className="text-sm font-medium text-surface leading-tight">{data.badge.label}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
