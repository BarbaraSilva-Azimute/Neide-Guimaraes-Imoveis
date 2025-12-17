import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const pagesDirectory = path.join(process.cwd(), 'content/pages');
const settingsDirectory = path.join(process.cwd(), 'content/settings');
const testimonialsDirectory = path.join(process.cwd(), 'content/depoimentos');

export async function getPageContent(pageName: string) {
    const fullPath = path.join(pagesDirectory, `${pageName}.md`);
    if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            ...matterResult.data,
            content: matterResult.content
        };
    }
    return null;
}

export async function getSettings() {
    const fullPath = path.join(settingsDirectory, 'site.md');
    if (fs.existsSync(fullPath)) {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return matterResult.data;
    }
    // Fallback defaults
    return {
        site_name: "Neide Guimarães",
        whatsapp_number: "5592981122604",
        whatsapp_message: "Olá!",
        creci: "CRECI 1311-PF",
        default_city: "Manaus"
    };
}

export async function getTestimonials() {
    if (!fs.existsSync(testimonialsDirectory)) return [];

    const fileNames = fs.readdirSync(testimonialsDirectory);
    const allTestimonials = fileNames.filter(fileName => fileName.endsWith('.md')).map(fileName => {
        const fullPath = path.join(testimonialsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);
        return {
            id: fileName.replace(/\.md$/, ''),
            ...matterResult.data,
            text: matterResult.data.text || matterResult.content // Fallback to content if text field is empty but body exists
        };
    });
    return allTestimonials;
}
