// components/ComicCard.tsx

import Image from "next/image";
import Link from "next/link";

// Define types for props
interface ComicCardProps {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
}

const ComicCard: React.FC<ComicCardProps> = ({ href, imageSrc, title, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link href={href}>
                <Image
                    src={imageSrc}
                    alt={title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{description}</p>
            </Link>
        </div>
    );
};

export default ComicCard;
