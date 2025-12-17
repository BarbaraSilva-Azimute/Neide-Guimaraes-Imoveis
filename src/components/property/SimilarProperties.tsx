import { getSimilarProperties, Property } from "@/lib/getProperties";
import { PropertyCard } from "@/components/PropertyCard";
import Link from "next/link";

export function SimilarProperties({ property }: { property: Property }) {
    const similar = getSimilarProperties(property);

    if (similar.length === 0) return null;

    return (
        <section className="border-t border-surface mt-24 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="font-serif text-3xl font-bold text-primary">
                        Imóveis Semelhantes
                    </h2>
                    <Link
                        href="/imoveis"
                        className="text-secondary hover:text-accent font-bold text-sm flex items-center gap-1"
                    >
                        Ver todos{" "}
                        <span className="material-symbols-outlined text-lg">
                            arrow_forward
                        </span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {similar.map((p) => (
                        <PropertyCard key={p.slug} property={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}
