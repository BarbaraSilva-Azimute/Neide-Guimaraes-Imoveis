import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Neighborhoods({ data }: { data: any }) {
    if (!data) return null;

    return (
        <section className="py-10 border-y border-surface bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-secondary mb-2">{data.heading}</h2>
                    <p className="text-sm text-secondary/70">{data.subheading}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {data.items?.map((bairro: string) => (
                        <Link key={bairro} href={`/imoveis?bairro=${bairro}`} className="px-6 py-2.5 rounded-full border border-surface bg-background text-primary hover:bg-primary hover:text-white hover:border-primary transition-all text-sm font-medium">
                            {bairro}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
