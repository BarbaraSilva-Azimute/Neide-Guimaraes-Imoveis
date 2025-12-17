import { getPageContent, getTestimonials, getSettings } from '@/lib/content';
import { getFeaturedProperties } from '@/lib/getProperties';
import { Hero } from '@/components/sections/Hero';
import { Authority } from '@/components/sections/Authority';
import { Neighborhoods } from '@/components/sections/Neighborhoods';
import { FeaturedProperties } from '@/components/sections/FeaturedProperties';
import { Process } from '@/components/sections/Process';
import { Testimonial } from '@/components/sections/Testimonial';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageContent('home') as any;
  const settings = await getSettings();

  return {
    title: pageData?.hero_title ? `${pageData.hero_title} | ${settings.site_name}` : settings.site_name,
    description: pageData?.description || settings.seo_description,
  }
}

export default async function Home() {
  const pageData = await getPageContent('home') as any;
  const settings = await getSettings();
  const testimonials = await getTestimonials();
  const displayProperties = getFeaturedProperties(3);

  // Default / Fallback Data Construction if CMS is empty or fields missing
  const heroData = {
    heading: pageData?.hero_title || "Especialista nos melhores endereços de Manaus.",
    subheading: pageData?.hero_subtitle || "Imóveis de médio e alto padrão.",
    primary_cta: {
      label: pageData?.hero_cta_primary_label || "Ver imóveis",
      link: "/imoveis"
    },
    secondary_cta: {
      label: pageData?.hero_cta_secondary_label || "Falar no WhatsApp",
      link: `https://wa.me/${settings.whatsapp_number}`
    },
    search: { enabled: true }
  };

  const authorityData = {
    eyebrow: "Consultoria Imobiliária",
    heading: pageData?.authority_title || "Imóveis selecionados.",
    text: pageData?.authority_text || "Atuo há mais de 20 anos no mercado.",
    highlights: pageData?.authority_cards || [],
    badge: { value: "20+", label: "Anos de experiência" }
  };

  const neighborhoodsData = {
    heading: "Bairros mais procurados",
    subheading: "Toque para ver imóveis disponíveis",
    items: ["Ponta Negra", "Adrianópolis", "Vieiralves", "Parque Dez", "Dom Pedro", "Flores"]
  };

  const featuredPropsData = {
    heading: "Imóveis em destaque",
    subheading: "Oportunidades únicas.",
    cta: { label: "Ver todos", link: "/imoveis" }
  };

  const processData = {
    heading: "Como funciona",
    subheading: "Da primeira conversa ao contrato.",
    steps: [
      { title: "Entendimento", text: "Conversamos para compreender seu perfil.", icon: "psychology" },
      { title: "Curadoria", text: "Seleciono os melhores imóveis.", icon: "filter_list" },
      { title: "Negociação", text: "Busco as melhores condições.", icon: "forum" },
      { title: "Fechamento", text: "Suporte até as chaves.", icon: "key" }
    ]
  };

  const testimonialData = {
    heading: "O que dizem meus clientes",
    items: testimonials.map((t: any) => ({
      quote: t.text,
      author: t.name,
      context: t.tipo_negociacao ? `${t.tipo_negociacao} em ${t.bairro}` : t.bairro
    }))
  };

  const finalCtaData = {
    heading: pageData?.final_cta_title || "Vamos encontrar seu imóvel?",
    text: pageData?.final_cta_text || "Me diga o que procura.",
    cta: {
      label: pageData?.final_cta_button_label || "Falar no WhatsApp",
      link: `https://wa.me/${settings.whatsapp_number}`
    }
  };

  return (
    <>
      <Hero data={heroData} heroImage={pageData?.hero_image} />
      <Authority data={authorityData} />
      <Neighborhoods data={neighborhoodsData} />
      <FeaturedProperties data={featuredPropsData} properties={displayProperties} />
      <Process data={processData} />
      <Testimonial data={testimonialData} />
      <FinalCTA data={finalCtaData} />
    </>
  );
}
