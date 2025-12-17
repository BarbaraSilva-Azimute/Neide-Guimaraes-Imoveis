import { getAllProperties, getPropertyBySlug } from "@/lib/getProperties";
import { notFound } from "next/navigation";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyHeader } from "@/components/property/PropertyHeader";
import { PropertyKPIs } from "@/components/property/PropertyKPIs";
import { PropertyDescription } from "@/components/property/PropertyDescription";
import { AmenitiesList } from "@/components/property/AmenitiesList";
import { MapEmbed } from "@/components/property/MapEmbed";
import { StickyWhatsAppCTA } from "@/components/property/StickyWhatsAppCTA";
import { SimilarProperties } from "@/components/property/SimilarProperties";

export async function generateStaticParams() {
    const properties = getAllProperties();
    return properties.map((property) => ({
        slug: property.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const property = getPropertyBySlug(slug);

    if (!property) return { title: "Imóvel não encontrado" };

    return {
        title: property.seo?.title || `${property.title} | Neide Guimarães`,
        description: property.seo?.description || `Imóvel à venda no bairro ${property.bairro}.`,
    };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const property = getPropertyBySlug(slug);

    if (!property) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pt-28 pb-24">
            {/* Gallery */}
            <PropertyGallery property={property} />

            <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 mt-4">
                {/* Main Content */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                    <PropertyHeader property={property} />
                    <PropertyKPIs property={property} />
                    <PropertyDescription content={property.content} />
                    <AmenitiesList amenities={property.amenities} />
                    <MapEmbed address={property.endereco} />
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 relative">
                    <StickyWhatsAppCTA property={property} />
                </div>
            </div>

            {/* Similar Properties */}
            <SimilarProperties property={property} />
        </div>
    );
}
