"use client";

import { useRouter } from 'next/navigation';

export function SearchForm() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const params = new URLSearchParams();
        const finalidade = formData.get('finalidade');
        const tipo = formData.get('tipo');
        const bairro = formData.get('bairro');
        const preco = formData.get('preco');
        const quartosMin = formData.get('quartos_min');
        const areaMin = formData.get('area_min');

        if (finalidade && finalidade !== 'Qualquer') params.set('finalidade', finalidade as string);
        if (tipo && tipo !== 'Todos os tipos') params.set('tipo', tipo as string);
        if (bairro && bairro !== 'Todos os bairros') params.set('bairro', bairro as string);
        if (preco && preco !== 'Qualquer valor') params.set('preco', preco as string);
        if (quartosMin) params.set('quartos_min', quartosMin as string);
        if (areaMin) params.set('area_min', areaMin as string);

        router.push(`/imoveis?${params.toString()}`);
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-1">Finalidade</label>
                <div className="relative">
                    <select name="finalidade" className="custom-select w-full h-12 pl-4 pr-10 bg-white border border-surface rounded-lg text-primary focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none cursor-pointer font-medium">
                        <option value="Venda">Comprar</option>
                        <option value="Aluguel">Alugar</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-1">Tipo de Imóvel</label>
                <div className="relative">
                    <select name="tipo" className="custom-select w-full h-12 pl-4 pr-10 bg-white border border-surface rounded-lg text-primary focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none cursor-pointer font-medium">
                        <option>Todos os tipos</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Casa">Casa</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Sala Comercial">Comercial</option>
                        <option value="Terreno">Terreno</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-1">Bairro</label>
                <div className="relative">
                    <select name="bairro" className="custom-select w-full h-12 pl-4 pr-10 bg-white border border-surface rounded-lg text-primary focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none cursor-pointer font-medium">
                        <option>Todos os bairros</option>
                        <option>Ponta Negra</option>
                        <option>Adrianópolis</option>
                        <option>Vieiralves</option>
                        <option>Parque Dez</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-1">Preço Máximo</label>
                <div className="relative">
                    <select name="preco" className="custom-select w-full h-12 pl-4 pr-10 bg-white border border-surface rounded-lg text-primary focus:ring-2 focus:ring-secondary focus:border-secondary appearance-none cursor-pointer font-medium">
                        <option>Qualquer valor</option>
                        <option>R$ 500.000</option>
                        <option>R$ 1.000.000</option>
                        <option>R$ 2.000.000</option>
                        <option>R$ 5.000.000</option>
                    </select>
                </div>
            </div>

            {/* New Filters Row or wrapped */}
            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-1">Quartos Mín.</label>
                <input type="number" name="quartos_min" placeholder="0" className="w-full h-12 pl-4 bg-white border border-surface rounded-lg text-primary focus:ring-2 focus:ring-secondary focus:border-secondary font-medium" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary ml-1">Área Mín. (m²)</label>
                <input type="number" name="area_min" placeholder="0" className="w-full h-12 pl-4 bg-white border border-surface rounded-lg text-primary focus:ring-2 focus:ring-secondary focus:border-secondary font-medium" />
            </div>

            <button className="h-12 bg-[#2B3210] hover:bg-[#2B3210]/90 text-white rounded-lg font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-md md:col-span-2 lg:col-span-1" type="submit">
                <span className="material-symbols-outlined">search</span>
                Buscar
            </button>
        </form>
    );
}
