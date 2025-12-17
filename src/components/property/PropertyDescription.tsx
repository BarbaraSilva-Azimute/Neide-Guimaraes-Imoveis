import Markdown from "react-markdown";

export function PropertyDescription({ content }: { content: string }) {
    return (
        <div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">
                Sobre o imóvel
            </h2>
            <div className="prose prose-lg text-secondary prose-p:leading-relaxed prose-a:text-accent max-w-none">
                <Markdown>{content}</Markdown>
            </div>
        </div>
    );
}
