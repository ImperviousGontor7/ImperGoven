import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/pictures/Jami Emas.webp";
import Trending from "./view_all/trending";


const slides = [
  {
    title: "Jami Emas",
    subtitle: "The Absolute Spectacle",
    description: "Sebuah tampilan hero besar seperti landing page cinema.",
    image: hero,
  },
];

function Home() {
  const navigate = useNavigate();
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
    <div id="view-beranda" className="view-pane active h-full">
      <section className="relative h-svh w-full overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-[#170e07] via-[#0d0500]/40 to-transparent" />

        <div className="relative z-10 flex h-full items-center justify-center ">
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
              <button className="rounded-full w-[4vw] aspect-video bg-white  py-3 font-semibold text-black">
                Play
              </button>
              <button className="rounded-full w-[4vw] aspect-video border border-white/30  py-3 font-semibold text-white">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-500 mx-auto px-5 sm:px-8 -mt-24 relative z-10">
        <div className="max-h-[clamp(50rem,45vw,75rem)] mx-auto my-25">
          <h3 className="text-4xl mb-10">
            <span className="text-white">This Month</span>
            <span className="text-white-500"> - Month 1</span>
          </h3>
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth snap-x snap-mandatory bg-choco rounded-4xl">
              <h1 className="heading m-auto my-[clamp(18rem,12vw,22rem)]">Coming Soon</h1>
            </div>
          </div>
        </div>
        <div className="max-h-[clamp(50rem,45vw,75rem)] my-25 mx-auto">
          <h3 className="text-4xl mb-10">
            <span className="text-white">Month Ago</span>
            <span className="text-white-500"> - Month 2</span>
          </h3>
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth snap-x snap-mandatory">
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/culinary_challenge")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Culinary Challenge</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 3, 2026 • 08:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
              <div className="glow-card reveal-scroll rounded-4xl basis-138 border 
              mx-auto my-10 h-full aspect-4/5 bg-[#0f0600] overflow-hidden shrink-0 
              snap-start transition-all duration-250 hover:-translate-y-5 hover:shadow-xl"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
                onClick={() => navigate("./read_more/news/july/wellness_event")}>
                <div className="relative ">
                  <img src={hero} alt="Hero" className="block w-full h-full object-cover " />
                  <div className="absolute inset-0 translate-y-px w-full h-full bg-linear-to-t from-[#0f0600] to-[#0f0600]/25" />
                </div>
                <div className="py-25">
                  <div className="absolute px-10 bottom-0 top-75 z-10 text-white">
                    <span className="inline-block px-5 py-2.5 bg-[#5b3df5] rounded-full text-2xl font-bold mb-3">IMPACT</span>
                    <h2 className="text-5xl font-bold my-10 leading-tight">Impervious Wellness Event</h2>
                    <p className="text-2xl opacity-50 absolute bottom-7">July 10, 2026 • 06:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="glow-card relative border rounded-4xl w-full aspect-3/1 my-25 overflow-hidden"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}>
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d0500] via-[#0d0500]/85 to-transparent" />

          <div className="relative z-10 flex h-full items-center justify-center ">
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
                <button className="rounded-full w-[4vw] aspect-video bg-white  py-3 font-semibold text-black">
                  Play
                </button>
                <button className="rounded-full border w-[4vw] aspect-video border-white/30  py-3 font-semibold text-white">
                  Detail
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="max-h-[clamp(50rem,45vw,75rem)] w-full mx-auto my-25">
          <h3 className="text-4xl text-white mb-10">Behind The Events</h3>
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth snap-x snap-mandatory bg-choco rounded-4xl">
              <h1 className="heading m-auto my-[clamp(18rem,12vw,22rem)]">Coming Soon</h1>
            </div>
          </div>
        </div>
        <div className="glow-card border bg-[#0f0600] rounded-4xl px-10 mx-auto my-25 block w-full aspect-3/1"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}>
          <h1 className="text-7xl font-bold text-center mt-5">Gontor Knowledge</h1>
          <div className="grid grid-cols-2 py-10 px-15 pb-10 gap-25 mx-auto">
            <div className="border rounded-4xl w-full justify-center mx-auto my-10 backdrop-blur-md overflow-hidden">
              <img src={hero} alt="Hero" className="block object-cover h-full" />
            </div>
            <div className="justify-center mx-auto my-10 backdrop-blur-md overflow-hidden">
              <h1 className="text-5xl font-bold text-center mb-15">Apa Rahasia Jadi Sukses?</h1>
              <p className="text-2xl leading-relaxed text-justify indent-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p><br />
              <p className="text-2xl leading-relaxed text-justify indent-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
              </p>
            </div>
          </div>
        </div>
        <div className="max-h-[clamp(50rem,45vw,75rem)] w-full mx-auto my-25">
          <h3 className="text-4xl text-white mb-10">First Mid Year</h3>
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth snap-x snap-mandatory bg-choco rounded-4xl">
              <h1 className="heading m-auto my-[clamp(18rem,12vw,22rem)]">Coming Soon</h1>
            </div>
          </div>
        </div>
        <div className="max-h-[clamp(50rem,45vw,75rem)] w-full  mx-auto my-25">
          <h3 className="text-4xl text-white mb-10">Second Mid Year</h3>
          <div className="no-scrollbar overflow-x-auto">
            <div className="flex h-full gap-7.5 mx-0 w-full scroll-smooth snap-x snap-mandatory bg-choco rounded-4xl">
              <h1 className="heading m-auto my-[clamp(18rem,12vw,22rem)]">Coming Soon</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[4fr_3fr] gap-25 mx-auto my-10">
          <div className="glow-card rounded-4xl block border mx-auto w-full aspect-2/1 backdrop-blur-md p-7"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}>
            <Trending title="Trending Now" to="/trending" />

            <div className="">

            </div>
          </div>
          <div className="glow-card reveal-scroll rounded-4xl block border mx-auto w-full h-full backdrop-blur-md overflow-hidden p-7"
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}>
            <Trending title="Category" to="/all" />

            <div className="">
              <p className="text-white/70">
                Isi konten lainnya di sini.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;