"use client";
import WebcomicImageGrid from "../components/WebcomicImageGrid";
import WebcomicHeader from "../components/WebcomicHeader";

export default function DenStoreKatheJakten() {
    return (
        <main className="flex flex-col items-center bg-gray-100 min-h-screen py-10">
            <WebcomicHeader
                title="Den Store Kathejakten"
                description="En grå, mørk sky svever over hodet til Anders. Hans nærmeste ser noe tærer på han og ønsker sårt å hjelpe. Hva ville du gjort om en av dine nærmeste led av en dyp, seriøs depresjon?"
            />
            <WebcomicImageGrid totalImages={310} basePath="/images/den-store-kathejakten" />
        </main>
    );
}
