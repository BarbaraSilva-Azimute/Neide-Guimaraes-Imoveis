import { Property } from "@/lib/getProperties";

export function PropertyHeader({ property }: { property: Property }) {
    return (
        <div className="border-b border-surface pb-8">
            <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded">
                    {property.finalidade}
                </span>
                <span className="px-3 py-1 bg-surface text-secondary text-xs font-bold uppercase tracking-widest rounded">
                    {property.tipo}
                </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary mb-2 leading-tight">
                {property.title}
            </h1>
            <p className="text-lg text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                {property.bairro}, Manaus/AM
            </p>
            <div className="mt-6 flex flex-wrap items-baseline gap-2">
                <span className="text-4xl font-serif font-bold text-accent">
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(Number(property.preco.valor))}
                </span>
                {property.preco.recorrencia && (
                    <span className="text-secondary text-lg">/{property.preco.recorrencia}</span>
                )}
            </div>
        </div>
    );
}
