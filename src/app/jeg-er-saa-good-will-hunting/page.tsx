"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function WebcomicPage() {
    return (
        <main className="min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
