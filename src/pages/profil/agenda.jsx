import { useState } from "react";
import hero from "../../assets/pictures/Jami Emas.webp";

const slides = [
  {
    title: "Jami Emas",
    subtitle: "The Absolute Spectacle",
    description: "Sebuah tampilan hero besar seperti landing page cinema.",
    image: hero,
  },
];

function Agenda() {
  const [current] = useState(0);
  const slide = slides[current];

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
    e.currentTarget.style.setProperty("--opacity", "1");
  };

  const handleLeave = (e) => {
    e.currentTarget.style.setProperty("--opacity", "0");
  };

  return (
    <>
      <section className="relative h-svh w-full overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-[#170e07] via-[#0d0500]/40 to-transparent" />

        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-sm tracking-[0.5em] text-white/70">
              {slide.subtitle}
            </p>

            <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
              {slide.title}
            </h1>

            <p className="mx-auto max-w-2xl text-base text-white/75 md:text-lg">
              {slide.description}
            </p>

            <div className="flex justify-center gap-4">
              <button className="rounded-full w-[4vw] aspect-video bg-white py-3 font-semibold text-black">
                Play
              </button>
              <button className="rounded-full w-[4vw] aspect-video border border-white/30 py-3 font-semibold text-white">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-500 mx-auto px-5 sm:px-8 -mt-24 relative z-10">
        <div className="max-h-[clamp(50rem,45vw,75rem)] mx-auto my-25">
          <h3 className="text-4xl">First Mid Year</h3>

          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth 
                      snap-x snap-mandatory">
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div><div className="glow-card reveal-scroll rounded-4xl basis-138 border mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 snap-start"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[clamp(50rem,45vw,75rem)] my-25 mx-auto">
          <h3 className="text-4xl">Second Mid Year</h3>

          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth 
                      snap-x snap-mandatory">
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
                        mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
                        snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div><div className="glow-card reveal-scroll rounded-4xl basis-138 border mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 snap-start"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 h-[clamp(5rem,3.9vw,20rem)] z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">SCIENCE</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">New Discovery Could Change Everything</h2>
                    <p className="text-2xl opacity-50 absolute">May 18, 2025 • 09:15 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Agenda;