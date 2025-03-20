"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function WebcomicPage() {
    return (
        <main className="min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* Use WebcomicHeader component */}
            <WebcomicHeader
                title="Sug MÆ!"
                description="Ulykke har puttet Øyvind i rullestol og han drukner sine sorger ved hjelp av Koskenkorva og Robocop. Hans nærmeste er bekymret - vil Øyvind inne har ett roblem med alkholt?"
            />

            {/* Image grid */}
            <WebcomicImageGrid
                totalImages={305}
                basePath="/images/sug-mae"
            />
        </main>
    );
}
