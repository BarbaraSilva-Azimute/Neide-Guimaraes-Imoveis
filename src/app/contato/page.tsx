import { getPageContent } from "@/lib/content";
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const data = await getPageContent('contato') as any;
    return {
        title: data?.seo_title || 'Fale Conosco',
        description: data?.seo_description || 'Entre em contato.',
    }
}

export default async function ContactPage() {
    const data = await getPageContent('contato') as any;

    if (!data) return <div>Conteúdo não encontrado.</div>;

    return (
        <main className="pt-32 pb-20 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
                        Fale Conosco
                    </h1>
                    <p className="text-lg text-secondary opacity-80 max-w-2xl mx-auto">
                        Estamos prontos para atender você. Entre em contato por um dos canais abaixo.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Informações de Contato */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-surface flex flex-col gap-8">
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined">call</span>
                                Telefone
                            </h3>
                            <a href={`tel:${data.phone}`} className="text-xl text-secondary hover:text-accent transition-colors">
                                {data.phone}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined">chat</span>
                                WhatsApp
                            </h3>
                            <a href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-xl text-secondary hover:text-accent transition-colors">
                                Iniciar conversa
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined">mail</span>
                                Email
                            </h3>
                            <a href={`mailto:${data.email}`} className="text-xl text-secondary hover:text-accent transition-colors">
                                {data.email}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                <span className="material-symbols-outlined">location_on</span>
                                Endereço
                            </h3>
                            <p className="text-lg text-secondary">
                                {data.address}<br />
                                {data.city} - {data.state}
                            </p>
                        </div>
                    </div>

                    {/* Formulário (Simples, linkado ao WhatsApp ou apenas visual por enquanto) */}
                    <div className="bg-[#FBF8EF] p-8 rounded-2xl border border-surface">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Envie uma mensagem</h3>
                        <form className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-secondary mb-1">Nome</label>
                                <input type="text" id="name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent" placeholder="Seu nome" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-secondary mb-1">Telefone / WhatsApp</label>
                                <input type="text" id="phone" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent" placeholder="(92) 99999-9999" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-secondary mb-1">Mensagem</label>
                                <textarea id="message" rows={4} className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-accent" placeholder="Como podemos ajudar?"></textarea>
                            </div>
                            <button type="button" className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors mt-2">
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
