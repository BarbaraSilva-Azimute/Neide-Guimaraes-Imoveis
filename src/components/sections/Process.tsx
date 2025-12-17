// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Process({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="py-20 px-4 bg-primary text-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{data.heading}</h2>
                    <p className="text-surface opacity-80">{data.subheading}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data.steps?.map((step: any, idx: number) => (
                        <div key={idx} className="relative flex flex-col items-center text-center group">
                            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors shadow-lg">
                                <span className="material-symbols-outlined text-3xl text-surface">{step.icon || 'circle'}</span>
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-white">{step.title}</h3>
                            <p className="text-sm text-surface opacity-70">{step.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
