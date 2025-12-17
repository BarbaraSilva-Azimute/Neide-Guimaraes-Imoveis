"use client";

import { useState, useCallback, useEffect } from 'react';
import { Property } from "@/lib/getProperties";

export function PropertyGallery({ property }: { property: Property }) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Combine featured image with gallery
    const allImages = [property.featured_image, ...(property.gallery || [])].filter(Boolean);

    const openGallery = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeGallery = () => setIsOpen(false);

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % allImages.length);
    }, [allImages.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }, [allImages.length]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') closeGallery();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, nextImage, prevImage]);

    return (
        <section className="w-full max-w-[1440px] mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-4 gap-4 h-auto lg:h-[600px]">
            {/* Main Featured Image */}
            <div
                className="lg:col-span-3 h-[400px] lg:h-full rounded-2xl overflow-hidden relative group cursor-pointer"
                onClick={() => openGallery(0)}
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src={allImages[0]}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {property.destaque && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-primary">
                        Destaque
                    </div>
                )}
            </div>

            {/* Side Grid */}
            <div className="hidden lg:grid grid-rows-2 gap-4 h-full">
                {allImages.slice(1, 3).map((img, idx) => (
                    <div
                        key={idx}
                        className="rounded-2xl overflow-hidden relative cursor-pointer group"
                        onClick={() => openGallery(idx + 1)}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={img}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            alt={`Galeria ${idx}`}
                        />
                        {/* "Ver todas" overlay on the last visible item if we have more images */}
                        {idx === 1 && allImages.length > 3 && (
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center hover:bg-black/50 transition-colors">
                                <span className="text-white font-bold flex items-center gap-2">
                                    <span className="material-symbols-outlined">grid_view</span>
                                    Ver todas ({allImages.length})
                                </span>
                            </div>
                        )}
                        {/* Fallback "Ver todas" if we just have exactly 3 images, still nice to show on the last one or just let it be a clickable image. 
                             The original code showed it on idx === 1 regardless. Let's keep consistent. 
                         */}
                        {idx === 1 && allImages.length <= 3 && (
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
                                <span className="text-white font-bold drop-shadow-md">
                                    Ver mais
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox / Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">

                    {/* Close Button */}
                    <button
                        onClick={closeGallery}
                        className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-50 rounded-full hover:bg-white/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-4xl">close</span>
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 md:p-4 rounded-full hover:bg-white/10 transition-colors z-50"
                    >
                        <span className="material-symbols-outlined text-4xl md:text-5xl">chevron_left</span>
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 md:p-4 rounded-full hover:bg-white/10 transition-colors z-50"
                    >
                        <span className="material-symbols-outlined text-4xl md:text-5xl">chevron_right</span>
                    </button>

                    {/* Main Image */}
                    <div className="relative w-full max-w-7xl max-h-[90vh] flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={allImages[currentIndex]}
                            alt={`Imagem ${currentIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
                        />
                        <div className="absolute bottom-[-40px] left-0 w-full text-center text-white/80 font-medium">
                            {currentIndex + 1} / {allImages.length}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
