import { Property } from "@/lib/getProperties";

export function MapEmbed({ address }: { address: Property['endereco'] }) {
    if (!address || !address.mostrar_mapa) return null;

    return (
        <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Localização
            </h2>
            <div className="bg-surface/30 rounded-2xl h-[300px] w-full flex items-center justify-center border border-surface relative overflow-hidden">
                {/* Placeholder for map logic */}
                <div className="text-center p-6">
                    <span className="material-symbols-outlined text-4xl text-secondary mb-2">
                        map
                    </span>
                    <p className="text-secondary font-bold">Mapa da Região</p>
                    {address.lat && address.lng ? (
                        <p className="text-sm text-secondary/70">Coords: {address.lat}, {address.lng}</p>
                    ) : (
                        <p className="text-sm text-secondary/70">Coordenadas não disponíveis</p>
                    )}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs text-primary shadow-sm">
                    Localização aproximada para privacidade
                </div>
            </div>
        </div>
    );
}
