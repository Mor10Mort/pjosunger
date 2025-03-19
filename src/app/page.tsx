import ComicCard from "./components/ComicCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full">

        <ComicCard
          href="/bestemoren-til-oyvind-er-verdens-storste-loppe"
          imageSrc="/images/bestemoren-til-oyvind-er-verdens-storste-loppe/0.webp"
          title="Bestemoren til Øyvind er verdens største loppe"
          description="Øyvind skal begynne på komedie skole i New York, men trenger først seriøs brutto får å kunne komme inn. I håp om å tjene noen slanter på loppe salg, havner Morten, Øyvind og Anders inn i en markedsføringsplan de sent vil glemme."
        />

        <ComicCard
          href="/den-store-kathejakten/"
          imageSrc="/images/den-store-kathejakten/0.webp"
          title="Den Store Kathejakten"
          description="En grå, mørk sky svever over hodet til Anders. Hans nærmeste ser noe tærer på han og ønsker sårt å hjelpe. Hva ville du gjort om en av dine nærmeste led av en dyp, seriøs, depresjon?"
        />

        <ComicCard
          href="/selvrealisering-er-ikke-for-alle/"
          imageSrc="/images/selvrealisering-er-ikke-for-alle/0.webp"
          title="Selvrealisering er ikke for alle"
          description="Kan Øyvind og Morten bli den beste versjonen av seg selv?"
        />

        <ComicCard
          href="/sug-mae"
          imageSrc="/images/sug-mae/0.webp"
          title="Sug MÆ!"
          description="Ulykke har puttet Øyvind i rullestol og han drukner sine sorger ved hjelp av Koskenkorva og Robocop. Hans nærmeste er bekymret - vil Øyvind inne har ett roblem med alkholt?"
        />

        <ComicCard
          href="/jeg-er-saa-good-will-hunting/"
          imageSrc="/images/jeg-er-saa-good-will-hunting/0.webp"
          title="Jeg er så Good Will Hunting"
          description="Skjuler det seg ett indre geni i Anders?"
        />
      </div>
    </div>
  );
}