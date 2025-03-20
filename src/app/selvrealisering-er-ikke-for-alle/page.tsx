"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function WebcomicPage() {
    return (
        <main className="min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* Use WebcomicHeader component */}
            <WebcomicHeader
                title="Selvrealisering er ikke for alle"
                description="Kan Øyvind og Morten bli den beste versjonen av seg selv?"
            />

            {/* Image grid */}
            <WebcomicImageGrid
                totalImages={190}
                basePath="/images/selvrealisering-er-ikke-for-alle"
            />
        </main>
    );
}
