"use client";
import { useState, useEffect } from "react";
import Image from "next/image"; // You can use Image directly instead of ComicCard if you don't need additional information

interface WebcomicImageGridProps {
    totalImages: number;
    basePath: string;
}

const WebcomicImageGrid: React.FC<WebcomicImageGridProps> = ({ totalImages, basePath }) => {
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        const imageList = Array.from({ length: totalImages }, (_, i) => `${basePath}/${i}.webp`);
        setImages(imageList);
    }, [totalImages, basePath]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-screen-lg px-4">
            {images.map((src, index) => (
                <div key={index} className="w-full h-auto transition-transform transform hover:scale-105">
                    <Image
                        src={src}
                        alt={`Image ${index + 1}`}
                        width={400}
                        height={300}
                        className="rounded-lg"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
};

export default WebcomicImageGrid;
