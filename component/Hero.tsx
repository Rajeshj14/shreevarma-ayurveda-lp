export default function HeroSection() {
  return (
    <section id="overview" className="relative w-full overflow-hidden">
      {/* Mobile image (hidden on lg+) */}
      <div
        className="sv-animate-top block lg:hidden"
        style={{
          backgroundImage: "url('/site_assets_consultation_hero_mobile.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "120vw",
        }}
      />

      {/* Desktop image (hidden below lg) */}
      <div
        className="sv-animate-top hidden w-full lg:block"
        style={{
          backgroundImage: "url('/site_assets_consultation_hero_desktop.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "320px",
          maxHeight: "400px",
          height: "55vw",
        }}
      />
    </section>
  );
}
