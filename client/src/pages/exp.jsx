import { useState } from "react";
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


<div className="absolute -bottom-55 left-0 w-full">
            <div className="w-full max-w-500 mx-auto px-5 sm:px-45">
              <h1 className="text-[clamp(2rem,2vw,3.5rem)] font-bold text-white/50 text-center mb-5">
                Culinary Challenge
              </h1>

              <h3 className="text-[clamp(1rem,2vw,1.5rem)] leading-loose 
              tracking-wide text-dark-brown-500">
                Perjalanan Kami kini di lalui dengan penuh warna dan rasa.
                Salah satunya adalah dengan mengadakan Culinary Challenge yang
                diikuti oleh sebagian dari Kami. Kompetisi ini bertujuan untuk
                meningkatkan kreativitas dan kemampuan memasak anggota Kami,
                serta mempererat tali persaudaraan di antara kami.
              </h3>
            </div>


function NewsCard() {
  return (
    <div className="reveal-scroll w-full overflow-hidden rounded-4xl border backdrop-blur-md">
      <div className="relative">
        <img
          src={hero}
          alt="Hero"
          className="block h-56ll object-cover sm:h-64 lg:h-80"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#170e07] to-[#170e07]/0" />
      </div>

      <div className="relative min-h-40 p-4 sm:p-6 lg:p-8">
        <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white sm:p-6 lg:p-8">
          <span className="mb-3 inline-block rounded-full bg-[#5b3df5] px-3 py-1 text-sm font-bold sm:px-4 sm:py-2 sm:text-base">
            SCIENCE
          </span>

          <h2 className="my-3 text-xl font-bold leading-tight sm:text-2xl lg:text-3xl xl:text-4xl">
            New Discovery Could Change Everything
          </h2>

          <p className="text-sm opacity-70 sm:text-base lg:text-lg">
            May 18, 2025 • 09:15 AM
          </p>
        </div>
      </div>
    </div>
  );
}

function NewsSection({ title, bottomclassName = "" }) {
  return (
    <div className={`w-full ${bottomclassName}`}>
      <h3 className="mx-1 mb-6 mt-10 text-2xl font-semibold sm:mx-2 sm:text-3xl lg:text-4xl">
        {title}
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}

function Exp() {
  const [current] = useState(0);
  const slide = slides[current];

  return (
    <div id="view-beranda" className="view-pane active overflow-x-hidden">
      <section className="relative h-svh w-full overflow-hidden">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0d0500] via-[#0d0500]/40 to-transparent" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-xs tracking-[0.35em] text-white/70 sm:text-sm sm:tracking-[0.5em]">
              {slide.subtitle}
            </p>

            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {slide.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-white/75 sm:mt-6 sm:text-base md:text-lg">
              {slide.description}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black sm:px-6 sm:py-3 sm:text-base">
                Play
              </button>
              <button className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <NewsSection title="First Mid Year" />
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <NewsSection title="Second Mid Year" />
      </div>

      <section className="relative mx-4 mb-16 overflow-hidden rounded-4xl border h-128 sm:h-152 lg:h-168 xl:mx-10 2xl:mx-20 2xl:h-192">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d0500] via-[#0d0500]/85 to-transparent" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-10">
          <div className="max-w-4xl text-center text-white">
            <p className="mb-4 text-xs tracking-[0.35em] text-white/70 sm:text-sm sm:tracking-[0.5em]">
              {slide.subtitle}
            </p>

            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              {slide.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-white/75 sm:mt-6 sm:text-base md:text-lg">
              {slide.description}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-4">
              <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black sm:px-6 sm:py-3 sm:text-base">
                Play
              </button>
              <button className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white sm:px-6 sm:py-3 sm:text-base">
                Detail
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <NewsSection title="This Month" />
      </div>

      <div className="mx-auto mb-16 w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="rounded-4xl border px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <h1 className="mb-6 text-center text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Gontor Knowledge
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="mx-auto w-full overflow-hidden rounded-4xl border backdrop-blur-md aspect-3.5/4 max-w-md lg:max-w-none">
              <img
                src={hero}
                alt="Hero"
                className="block h-full w-full object-cover"
              />
            </div>

            <div className="mx-auto w-full max-w-none px-0 sm:px-2 lg:px-6 xl:px-10">
              <h1 className="mb-6 text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                Apa Rahasia Jadi Sukses?
              </h1>

              <p className="text-justify text-sm leading-relaxed indent-6 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quod.
              </p>

              <br />

              <p className="text-justify text-sm leading-relaxed indent-6 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quisquam, quod.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <NewsSection title="First Mid Year" />
      </div>

      <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <NewsSection title="Second Mid Year" bottomclassName="mb-0" />
      </div>

      <div className="mx-auto mb-16 w-full max-w-screen-2xl px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[4fr_3fr] lg:gap-10">
          <div className="reveal-scroll rounded-4xl border backdrop-blur-md overflow-hidden min-h-96">
            <div className="p-5 sm:p-6 lg:p-8">
              <Trending title="Trending Now" to="/trending" />

              <div className="mt-6">
                <p className="text-white/70 text-sm sm:text-base">
                  Isi konten trending di sini.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-scroll rounded-4xl border backdrop-blur-md overflow-hidden min-h-96">
            <div className="p-5 sm:p-6 lg:p-8">
              <Trending title="Category" to="/all" />

              <div className="mt-6">
                <p className="text-white/70 text-sm sm:text-base">
                  Isi konten lainnya di sini.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exp;