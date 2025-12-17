export function AmenitiesList({ amenities }: { amenities: string[] }) {
    if (!amenities || amenities.length === 0) return null;

    return (
        <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">
                Destaques e Comodidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {amenities.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-secondary group">
                        <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform"></span>
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
