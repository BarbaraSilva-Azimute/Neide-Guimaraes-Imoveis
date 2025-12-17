"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ... imports
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Footer({ settings }: { settings?: any }) {
    const pathname = usePathname();
    const isContactPage = pathname === '/contato';

    // Defaults
    const creci = settings?.creci || "CRECI 1311-PF";
    const city = settings?.default_city || "Manaus";
    const waNumber = settings?.whatsapp_number || "5592981122604";
    const email = "contato@neideguimaraes.com.br"; // Not in settings yet, or add it to settings logic later. Keeping hardcoded fallback or create field. User didn't ask for email in generic settings, only in contact page.

    if (isContactPage) {
        return (
            <footer className="w-full border-t border-surface bg-[#FBF8EF] pt-16 pb-10 px-6">
                <div className="mx-auto max-w-[960px] flex flex-col gap-10 text-center">
                    <div className="flex flex-col items-center gap-5">
                        <div className="w-16 h-16 mb-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/logo-dark.png" alt="Neide Guimarães Logo" className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-primary text-2xl font-serif font-bold">Neide Guimarães</h3>
                        <p className="text-secondary opacity-80">Especialista em imóveis de médio e alto padrão em {city}.</p>
                        <p className="font-bold text-accent">{creci}</p>
                    </div>
                    {/* ... (Social Icons same as before) */}
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="group flex items-center justify-center size-12 rounded-full bg-surface text-secondary hover:bg-primary hover:text-[#FBF8EF] transition-all duration-300">
                            <span className="material-symbols-outlined">camera_alt</span>
                        </a>
                        <a href="#" className="group flex items-center justify-center size-12 rounded-full bg-surface text-secondary hover:bg-primary hover:text-[#FBF8EF] transition-all duration-300">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a href={`mailto:${email}`} className="group flex items-center justify-center size-12 rounded-full bg-surface text-secondary hover:bg-primary hover:text-[#FBF8EF] transition-all duration-300">
                            <span className="material-symbols-outlined">mail</span>
                        </a>
                    </div>
                    <div className="h-px w-full bg-surface"></div>
                    <p className="text-secondary/70 text-sm font-normal">
                        © 2025 Neide Guimarães Imóveis. {creci}. <br className="sm:hidden" /> Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        );
    }

    return (
        <footer className="bg-primary text-surface py-16 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12">
                            {/* Footer is dark bg, so use Light Logo */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/assets/logo-light.png" alt="Neide Guimarães Logo" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="font-serif text-xl font-bold text-white">Neide Guimarães</h2>
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed">
                        Especialista em imóveis de médio e alto padrão em {city}.
                    </p>
                    <p className="text-sm font-bold mt-2 text-accent">{creci}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-sm tracking-wider">Navegação</h3>
                    <nav className="flex flex-col gap-2">
                        <Link href="/" className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors">Início</Link>
                        <Link href="/imoveis" className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors">Imóveis</Link>
                        <Link href="/contato" className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors">Contato</Link>
                    </nav>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-sm tracking-wider">Contato</h3>
                    <div className="flex flex-col gap-3">
                        <a href={`tel:${waNumber}`} className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-accent transition-colors">
                            <span className="material-symbols-outlined text-base">call</span>
                            (92) 98112-2604
                        </a>
                        <div className="flex items-center gap-2 text-sm opacity-70">
                            <span className="material-symbols-outlined text-base">location_on</span>
                            {city} / AM
                        </div>
                    </div>
                </div>
                {/* Socials ... */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-white font-bold uppercase text-sm tracking-wider">Siga-nos</h3>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                            <span className="text-sm font-bold">IG</span>
                        </a>
                        <a href={`https://wa.me/${waNumber}`} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                            <span className="text-sm font-bold">WA</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
                <p>© 2025 Neide Guimarães Imóveis. {creci}.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white">Política de Privacidade</a>
                    <a href="#" className="hover:text-white">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
}
