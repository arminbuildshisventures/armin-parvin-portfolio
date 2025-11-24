import lorenzoLogo from "@/assets/clients/LorenzoLogo.png";
import rahmaniniaLogo from "@/assets/clients/Rahmaninia.png";
import wtlLogo from "@/assets/clients/WTL.png";
import bsuiteLogo from "@/assets/clients/bsuite-logo.svg";
import citronityLogo from "@/assets/clients/citronity.svg";
import cloudzyLogo from "@/assets/clients/cloudzy.svg";
import convertLogo from "@/assets/clients/convert.svg";
import nordicLogo from "@/assets/clients/nordic.svg";
import roomvuLogo from "@/assets/clients/roomvu.svg";
import veronalabsLogo from "@/assets/clients/veronalabs.png";
import wpsmsLogo from "@/assets/clients/wpsms.png";

export const ClientLogos = () => {
  const clientLogos = [
    { src: lorenzoLogo, alt: "Lorenzo CPA" },
    { src: rahmaniniaLogo, alt: "Mehdi Rahmaninia" },
    { src: wtlLogo, alt: "WatchThemLive" },
    { src: bsuiteLogo, alt: "BSuite" },
    { src: citronityLogo, alt: "Citronity" },
    { src: cloudzyLogo, alt: "Cloudzy" },
    { src: convertLogo, alt: "Convert" },
    { src: nordicLogo, alt: "Nordic Defender" },
    { src: roomvuLogo, alt: "Roomvu" },
    { src: veronalabsLogo, alt: "Verona Labs" },
    { src: wpsmsLogo, alt: "WP SMS" },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="pixel-border bg-zinc-800 backdrop-blur-sm p-8 rounded-lg relative">
          <p className="text-center text-zinc-400 font-secondary mb-6">Trusted by Leading Brands</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex [--duration:40s]">
              <div className="flex gap-16 flex-shrink-0 animate-marquee">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`set1-${index}`}
                    className={`flex items-center justify-center h-20 w-52 flex-shrink-0 hover:scale-110 transition-transform duration-300 ${
                      logo.alt === "WP SMS" || logo.alt === "Lorenzo CPA" ? "px-10" : ""
                    }`}
                  >
                    <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain brightness-0 invert" />
                  </div>
                ))}
              </div>
              <div className="flex gap-16 flex-shrink-0 animate-marquee" aria-hidden="true">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`set2-${index}`}
                    className={`flex items-center justify-center h-20 w-52 flex-shrink-0 hover:scale-110 transition-transform duration-300 ${
                      logo.alt === "WP SMS" || logo.alt === "Lorenzo CPA" ? "px-10" : ""
                    }`}
                  >
                    <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain brightness-0 invert" />
                  </div>
                ))}
              </div>
              <div className="flex gap-16 flex-shrink-0 animate-marquee" aria-hidden="true">
                {clientLogos.map((logo, index) => (
                  <div
                    key={`set3-${index}`}
                    className={`flex items-center justify-center h-20 w-52 flex-shrink-0 hover:scale-110 transition-transform duration-300 ${
                      logo.alt === "WP SMS" || logo.alt === "Lorenzo CPA" ? "px-10" : ""
                    }`}
                  >
                    <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain brightness-0 invert" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-800 to-transparent pointer-events-none rounded-l-lg" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-800 to-transparent pointer-events-none rounded-r-lg" />
        </div>
      </div>
    </section>
  );
};
