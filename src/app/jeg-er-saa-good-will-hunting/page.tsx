"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function WebcomicPage() {
    return (
        <main className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
            {/* Use WebcomicHeader component */}
            <WebcomicHeader
                title="Jeg er så Good Will Hunting"
                description="Skjuler det seg ett indre geni i Anders?"
            />

            {/* Image grid */}
            <WebcomicImageGrid
                totalImages={291}
                basePath="/images/jeg-er-saa-good-will-hunting"
            />
        </main>
    );
}
