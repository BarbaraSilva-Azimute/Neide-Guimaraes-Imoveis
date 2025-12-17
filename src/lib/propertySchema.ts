import { z } from 'zod';

export const PropertySchema = z.object({
    title: z.string(),
    slug: z.string(),
    status: z.enum(["disponivel", "reservado", "vendido", "alugado"]).default("disponivel"),
    finalidade: z.enum(["Venda", "Aluguel"]),
    tipo: z.enum(["Apartamento", "Casa", "Cobertura", "Sala Comercial", "Terreno", "Galpão"]),
    bairro: z.string(),
    cidade: z.string().default("Manaus"),
    uf: z.string().default("AM"),
    preco: z.object({
        valor: z.number(),
        recorrencia: z.string().optional(), // "mês" ou nada
    }),
    condominio: z.object({
        valor: z.string().optional(),
    }).optional(),
    iptu: z.object({
        valor: z.string().optional(),
    }).optional(),
    area_m2: z.number().default(0),
    quartos: z.number().default(0),
    banheiros: z.number().default(0),
    vagas: z.number().default(0),
    destaque: z.boolean().default(false),
    featured_image: z.string(),
    gallery: z.array(z.string()).default([]),
    endereco: z.object({
        lat: z.number().optional(),
        lng: z.number().optional(),
        mostrar_mapa: z.boolean().default(true),
        logradouro: z.string().optional(),
    }).optional(),
    amenities: z.array(z.string()).default([]),
    seo: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
    }).optional(),
    contato: z.object({
        whatsapp: z.string().default("5592981122604"),
        message: z.string().optional(),
    }).optional(),
});

export type Property = z.infer<typeof PropertySchema> & { content: string; id: string };
