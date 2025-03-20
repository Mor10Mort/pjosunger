"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function DenStoreKatheJakten() {
    return (
        <main className="min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <WebcomicHeader
                title="Den Store Kathejakten"
                description="En grå, mørk sky svever over hodet til Anders. Hans nærmeste ser noe tærer på han og ønsker sårt å hjelpe. Hva ville du gjort om en av dine nærmeste led av en dyp, seriøs depresjon?"
            />
            <WebcomicImageGrid totalImages={310} basePath="/images/den-store-kathejakten" />
        </main>
    );
}
