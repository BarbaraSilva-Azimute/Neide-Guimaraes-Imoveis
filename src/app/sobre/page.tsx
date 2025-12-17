import { getPageContent } from "@/lib/content";
// eslint-disable-next-line @next/next/no-img-element
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageContent('sobre') as any;
    return {
        title: pageData?.seo_title || 'Sobre Neide Guimarães',
        description: pageData?.seo_description || 'Conheça a corretora Neide Guimarães.',
    }
}

export default async function SobrePage() {
    const data = await getPageContent('sobre') as any;

    if (!data) return <div>Conteúdo não encontrado.</div>;

    return (
        <main className="pt-32 pb-20 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Imagem */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                        <img
                            src={data.photo || "https://placehold.co/600x800"}
                            alt={data.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Stats Overlay */}
                        <div className="absolute bottom-0 left-0 w-full bg-primary/90 backdrop-blur-sm p-6 text-white grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-3xl font-bold font-serif">{data.years_experience}</p>
                                <p className="text-sm opacity-80 uppercase tracking-wider">Anos de Exp.</p>
                            </div>
                            {data.deals_done && (
                                <div>
                                    <p className="text-3xl font-bold font-serif">{data.deals_done}</p>
                                    <p className="text-sm opacity-80 uppercase tracking-wider">Negócios</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="flex flex-col gap-8">
                        <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary">
                            {data.title}
                        </h1>
                        <div className="prose prose-lg text-secondary prose-headings:font-serif prose-headings:text-primary">
                            <ReactMarkdown>{data.content}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
