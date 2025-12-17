import Link from 'next/link';
import { SearchForm } from '@/components/SearchForm';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Hero({ data, heroImage }: { data: any, heroImage?: string }) {
    if (!data) return null;

    const bgImage = heroImage || '/assets/hero-bg-final.jpg';

    return (
        <section className="flex flex-col w-full">
            {/* 1. VISUAL HERO BLOCK */}
            <div className="relative w-full min-h-[600px] lg:min-h-[800px] flex items-start bg-[#2B3210]">
                {/* Background & Gradient Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(to right, #2B3210 0%, rgba(43, 50, 16, 0.9) 30%, rgba(43, 50, 16, 0.2) 100%), url('${bgImage}')`
                    }}
                />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-48">
                    <div className="max-w-2xl flex flex-col gap-8">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight max-w-xl">
                            {data.heading}
                        </h1>
                        <p className="text-[#E5E2D9] text-lg md:text-xl font-light leading-relaxed max-w-lg opacity-90">
                            {data.subheading}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-2">
                            {/* Primary CTA (WhatsApp) */}
                            {data.secondary_cta && (
                                <a
                                    href="https://wa.me/5592981122604"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#DE6E27] hover:bg-[#c95d1b] text-white px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center min-w-[200px]"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                    {data.secondary_cta.label}
                                </a>
                            )}

                            {/* Secondary CTA (Ver Imóveis) */}
                            {data.primary_cta && (
                                <Link
                                    href="/imoveis"
                                    className="bg-[#E5E2D9] hover:bg-[#D6D3CA] text-[#2B3210] px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center min-w-[200px]"
                                >
                                    {data.primary_cta.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. SEARCH BOX BLOCK (INDEPENDENT) */}
            {data.search && data.search.enabled && (
                <div className="relative z-20 w-full -mt-0 lg:-mt-16 mb-8 lg:mb-8 pb-0">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-[#FBF8EF] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-6 md:p-8 border border-black/5">
                            <SearchForm />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
