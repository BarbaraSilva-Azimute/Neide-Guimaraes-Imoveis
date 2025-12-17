import { Property } from "@/lib/getProperties";

export function PropertyKPIs({ property }: { property: Property }) {
    const kpis = [
        { label: "Área Útil", value: `${property.area_m2} m²`, icon: "square_foot" },
        { label: "Quartos", value: property.quartos, icon: "bed" },
        { label: "Banheiros", value: property.banheiros, icon: "bathtub" },
        { label: "Vagas", value: property.vagas, icon: "directions_car" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((kpi) => (
                <div
                    key={kpi.label}
                    className="p-4 bg-white border border-surface rounded-xl flex flex-col items-center justify-center gap-1 text-center"
                >
                    <span className="material-symbols-outlined text-accent text-3xl">
                        {kpi.icon}
                    </span>
                    <span className="font-bold text-primary text-lg">{kpi.value}</span>
                    <span className="text-xs text-secondary uppercase tracking-wider">
                        {kpi.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
