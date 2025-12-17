import Link from 'next/link';
import { Property } from '@/lib/propertySchema';

interface PropertyCardProps {
    property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
    const typeColor =
        property.finalidade === 'Venda' ? 'bg-primary' :
            property.finalidade === 'Aluguel' ? 'bg-accent' :
                'bg-secondary';

    const linkUrl = `/imoveis/${property.slug || property.id}`;

    return (
        <article className="group bg-white rounded-xl overflow-hidden border border-surface shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
            <Link href={linkUrl} className="block relative aspect-[4/3] overflow-hidden">
                <div className={`absolute top-4 left-4 z-10 ${typeColor} text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide`}>
                    {property.finalidade}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={property.featured_image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-2xl font-bold">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(property.preco.valor))}
                        {property.preco.recorrencia && <span className="text-sm font-normal">/{property.preco.recorrencia}</span>}
                    </p>
                </div>
                <button className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/30 backdrop-blur-md rounded-full text-white transition-colors">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                </button>
            </Link>
            <div className="p-6 flex flex-col flex-1">
                <p className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{property.bairro}, Manaus</p>
                <Link href={linkUrl}>
                    <h3 className="font-serif text-xl font-bold text-primary mb-4 truncate group-hover:text-accent transition-colors">
                        {property.title}
                    </h3>
                </Link>

                <div className="flex items-center gap-4 text-sm text-secondary mb-6 border-b border-surface pb-6 mt-auto">
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">bed</span>
                        <span>{property.quartos} Quartos</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">bathtub</span>
                        <span>{property.banheiros} Banheiros</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[18px]">square_foot</span>
                        <span>{property.area_m2} m²</span>
                    </div>
                </div>

                <Link
                    href={linkUrl}
                    className="w-full py-2.5 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors text-center block"
                >
                    Ver Detalhes
                </Link>
            </div>
        </article>
    );
}
