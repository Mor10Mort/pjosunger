"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function WebcomicPage() {
    return (
        <main className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
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
