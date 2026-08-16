import Sheild from "../../assets/pictures/06. Angkatan/Master Logo.webp";

function OurGeneration() {
  return (
    <div className="h-full ">
      <div className="h-full px-[10svw] grid grid-cols-[3fr_5fr] gap-25 w-full mx-auto mb-75 mt-50 items-center justify-center">
        <div className="reveal-scroll relative rounded-full m-auto  w-full h-[clamp(20rem,25vw,40rem)] backdrop-blur-md overflow-hidden flex items-center justify-center">
          <img
            src={Sheild}
            alt="Shield"
            className="max-w-full max-h-full object-contain z-50"
          />
        </div>
        <div className="reveal-scroll px-25 py-15 rounded-4xl block border mx-auto my-5 w-full backdrop-blur-md overflow-hidden">
          <h1 className="text-7xl font-bold mb-10 text-center">Our Generation</h1>
          <p className="text-2xl leading-relaxed text-justify indent-20">Impervious Generation stands as a symbol of resilience, unity, and
            excellence forged through time. Built on shared experiences and unwavering
            determination, our journey reflects a generation that refuses to be defined
            by limits. Every step we take is a testament to growth, ambition, and the
            pursuit of something greater than ourselves.
          </p><br />
          <p className="text-2xl leading-relaxed text-justify indent-20">We are more than just a name—we are a story in motion. From challenges
            that shaped us to moments that defined us, Impervious Generation carries a
            spirit that endures beyond time. This is where legacy begins, where memories
            are made, and where an unforgettable chapter continues to be written.
          </p>
        </div>
      </div>
      <hr className="stickyw-full my-25 bg-amber-400" />
      <div className="block px-[10svw]">
        <div className="block rounded-4xl aspect-3/1.5 w-full mx-auto my-20">
          <h1 className="text-7xl font-bold text-center mt-5">Chief Of Generation</h1>
          <div className="grid grid-cols-3 h-full mx-auto py-15 gap-25">
            <div className="border rounded-4xl w-full justify-center mx-auto backdrop-blur-md overflow-hidden asppect-2/6">

            </div>
            <div className="border rounded-4xl w-full justify-center mx-auto backdrop-blur-md overflow-hidden asppect-2/3">
              <img
                src={Sheild}
                alt="Shield"
                className="max-w-full max-h-full object-contain z-50"
              />
            </div>
            <div className="border rounded-4xl w-full justify-center mx-auto backdrop-blur-md overflow-hidden asppect-2/3">
              <img
                src={Sheild}
                alt="Shield"
                className="max-w-full max-h-full object-contain z-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex-1 h-px bg-gray-400"></div>
        <h2 className="text-xl font-bold uppercase">
          Filosofi Logo
        </h2>
        <div className="flex-1 h-px bg-gray-400"></div>
      </div>
      <div className="block px-[10svw]">
        <div className="block rounded-4xl aspect-3/1.5 w-full mx-auto my-20">
          <div className="grid grid-cols-[7fr_6fr_7fr] h-full mx-auto py-25 gap-10">
            <div className="border rounded-4xl w-full justify-center mx-auto backdrop-blur-md overflow-hidden asppect-2/6">

            </div>
            <div className="border rounded-4xl w-full justify-center mx-auto backdrop-blur-md overflow-hidden asppect-2/3">
              <img
                src={Sheild}
                alt="Shield"
                className="max-w-full max-h-full object-contain z-50"
              />
            </div>
            <div className="border rounded-4xl w-full justify-center mx-auto backdrop-blur-md overflow-hidden asppect-2/3">
              <img
                src={Sheild}
                alt="Shield"
                className="max-w-full max-h-full object-contain z-50"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[2fr_3fr] gap-25 px-[10svw]">
        <div className="border block rounded-4xl w-full justify-center mx-auto backdrop-blur-md asppect-2/1">
          <div className="w-full">

          </div>
        </div>
        <div className="border block rounded-4xl w-full justify-center mx-auto backdrop-blur-md asppect-2/1">
          <div className="w-1/4">

          </div>
        </div>
      </div>
    </div>
  );
}

export default OurGeneration;