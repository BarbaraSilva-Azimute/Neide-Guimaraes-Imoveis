import { getSortedPropertiesData } from '@/lib/getProperties';
import { PropertyCard } from '@/components/PropertyCard';
import { SearchForm } from '@/components/SearchForm';
import Link from 'next/link';

export default async function Listings({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const allProperties = getSortedPropertiesData();
    const sp = await searchParams;

    const finalidade = sp.finalidade as string | undefined;
    const tipo = sp.tipo as string | undefined;
    const bairro = sp.bairro as string | undefined;
    const precoMaxStr = sp.preco as string | undefined;

    // Novas filtragens
    const precoMin = sp.preco_min ? Number(sp.preco_min) : 0;
    const areaMin = sp.area_min ? Number(sp.area_min) : 0;
    const quartosMin = sp.quartos_min ? Number(sp.quartos_min) : 0;

    let precoMax = Infinity;
    if (precoMaxStr && precoMaxStr !== 'Qualquer valor') {
        // Parsing "R$ 500.000" etc is messy, so let's rely on robust handling or just simple "500000" if form sends that
        // Existing SearchForm sends formatted strings. I should ideally handle that or assume the form will send standard values.
        // For now, simple text matching or basic parsing:
        const clean = precoMaxStr.replace(/\D/g, '');
        if (clean) precoMax = Number(clean);
    }

    const filtered = allProperties.filter(p => {
        // Ignorar indisponíveis
        if (p.status === 'vendido' || p.status === 'alugado') return false;

        if (finalidade && finalidade !== 'Qualquer' && p.finalidade !== finalidade) return false;
        if (tipo && tipo !== 'Todos os tipos' && p.tipo !== tipo) return false;
        if (bairro && bairro !== 'Todos os bairros' && p.bairro !== bairro) return false;

        // Numeric filters
        if (p.preco.valor < precoMin) return false;
        if (p.preco.valor > precoMax) return false;
        if (p.area_m2 < areaMin) return false;
        if (p.quartos < quartosMin) return false;

        return true;
    });

    return (
        <div className="min-h-screen bg-background pb-20">
            <div className="bg-primary text-white pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Nossos Imóveis</h1>
                    <p className="opacity-80 max-w-2xl">Explore nossa seleção exclusiva de imóveis em Manaus.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12 relative z-10">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-surface">
                    <SearchForm />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {filtered.length === 0 ? (
                    <div className="text-center py-20">
                        <span className="material-symbols-outlined text-4xl text-secondary mb-4">search_off</span>
                        <p className="text-xl text-secondary">Nenhum imóvel encontrado com esses critérios.</p>
                        <Link href="/imoveis" className="text-accent font-bold mt-4 inline-block hover:underline">Limpar filtros</Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
                    </div>
                )}
            </div>
        </div>
    )
}
