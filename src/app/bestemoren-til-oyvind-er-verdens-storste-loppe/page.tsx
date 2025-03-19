"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function WebcomicPage() {
    return (
        <main className="min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <WebcomicHeader
                title="Bestemoren til Øyvind"
                description="Øyvind skal begynne på komedie skole i New York, men trenger først seriøs brutto får å kunne komme inn. I håp om å tjene noen slanter på loppe salg, havner Morten, Øyvind og Anders inn i en markedsføringsplan de sent vil glemme."
            />

            <WebcomicImageGrid
                totalImages={334}
                basePath="/images/bestemoren-til-oyvind-er-verdens-storste-loppe"
            />
        </main>
    );
}
