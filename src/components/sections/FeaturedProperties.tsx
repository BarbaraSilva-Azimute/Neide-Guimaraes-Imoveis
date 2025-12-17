import Link from 'next/link';
import { PropertyCard } from '@/components/PropertyCard';
import { Property } from '@/lib/propertySchema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FeaturedProperties({ data, properties }: { data: any, properties: Property[] }) {
    if (!data) return null;

    // Filter properties based on limit if needed, though usually passed pre-filtered
    const displayProperties = properties.slice(0, data.limit || 3);

    return (
        <section className="py-20 px-4 bg-background">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-3">{data.heading}</h2>
                        <p className="text-secondary">{data.subheading}</p>
                    </div>
                    {data.cta && (
                        <Link href={data.cta.link} className="text-accent font-bold hover:text-primary flex items-center gap-1 group transition-colors">
                            {data.cta.label}
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProperties.map(p => <PropertyCard key={p.id} property={p} />)}
                    {displayProperties.length === 0 && <p>Nenhum imóvel em destaque no momento.</p>}
                </div>
            </div>
        </section>
    );
}
