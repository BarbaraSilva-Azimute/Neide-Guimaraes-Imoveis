import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Property, PropertySchema } from './propertySchema';

export type { Property };


const propertiesDirectory = path.join(process.cwd(), 'content/imoveis');

export function getAllProperties(): Property[] {
    if (!fs.existsSync(propertiesDirectory)) return [];

    const filenames = fs.readdirSync(propertiesDirectory);
    const properties = filenames
        .filter((name) => name.endsWith('.md'))
        .map((name) => {
            const filePath = path.join(propertiesDirectory, name);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const { data, content } = matter(fileContents);

            const parsed = PropertySchema.safeParse(data);
            if (!parsed.success) {
                console.error(`Error parsing ${name}:`, parsed.error);
                return null;
            }

            return {
                id: name.replace(/\.md$/, ''),
                ...parsed.data,
                content,
            };
        })
        .filter((prop): prop is Property => prop !== null);

    return properties.sort((a, b) => {
        // Prioritize featured, then newest (based on file creation? No, maybe just title for now or explicit field)
        // Since we don't have created_date, sorting by featured then price
        if (a.destaque && !b.destaque) return -1;
        if (!a.destaque && b.destaque) return 1;
        return 0;
    });
}

export function getPropertyBySlug(slug: string): Property | null {
    const all = getAllProperties();
    return all.find((p) => p.slug === slug) || null;
}

export function getSortedPropertiesData() {
    return getAllProperties();
}

export function getFeaturedProperties(limit = 3): Property[] {
    const all = getAllProperties();
    // Filter available only generally, but featured logic allows any status technically
    const active = all.filter(p => p.status === 'disponivel' || p.status === 'reservado');
    const featured = active.filter(p => p.destaque);

    if (featured.length >= limit) return featured.slice(0, limit);

    const fallback = active.filter(p => !p.destaque).slice(0, limit - featured.length);
    return [...featured, ...fallback];
}

export function getSimilarProperties(property: Property): Property[] {
    const all = getAllProperties();
    return all
        .filter(p => p.id !== property.id && p.status === 'disponivel')
        .filter(p => p.bairro === property.bairro || p.finalidade === property.finalidade)
        .slice(0, 3);
}

export async function getPropertyData(slug: string) {
    return getPropertyBySlug(slug);
}
