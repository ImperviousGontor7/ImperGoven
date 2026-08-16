import hero from "../../assets/pictures/Jami Emas.webp";

function Memories() {
  return (
    <div className="h-275">
      <div className="grid grid-cols-[2fr_8fr]">
        {/* LEFT SIDEBAR */}
        <div className="border-r h-screen">
          <aside className="flex h-250 flex-col px-10">
            <div className="flex items-center justify-between px-5 py-15">
              <h2 className="h2">FILTER</h2>
              <h2 className="h2">FILTER</h2>
            </div>

            <div className="mt-5 flex-1 overflow-y-auto px-5">
              <div className="flex flex-col gap-5">
                <div className="memories-filter">All Memories</div>
                <div className="memories-filter">PBR</div>
                <div className="memories-filter">Tahsin Qiroah</div>
                <div className="memories-filter">Muntadal Lugoh</div>
                <div className="memories-filter">Penta Show</div>
                <div className="memories-filter">Yudisium Kelas 5</div>
                <div className="memories-filter">PBS</div>
                <div className="memories-filter">Panggung Gembira</div>
                <div className="memories-filter">Khutbatul 'Arsy</div>
                <div className="memories-filter">Acara Bahasa</div>
                <div className="memories-filter">Pramuka</div>
                <div className="memories-filter">Angkatan</div>
              </div>
            </div>

            <div className="mt-10 h-75 rounded-3xl border p-15 relative">
              <span className="absolute left-10 top-10 text-9xl leading-none text-marigold">
                “
              </span>
              <p className="mt-15 span">
                Every moment, a story.
                <br />
                Every story, a memory.
              </p>
              <div className="absolute border h-12 aspect-square rounded-2xl leading-none bottom-8 right-8">
                <span className="h1 absolute right-3 top-2">♥</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="p-10 bg-cocoa">
          <div className="flex h-265 flex-col">

            {/* Header */}
            <div className="flex items-start justify-between">

              <div>
                <h1 className="heading">
                  Our Memories
                </h1>

                <h2 className="h2 mt-2">
                  Every moment, a story. Every story, a memory.
                </h2>
              </div>
              <div className="flex gap-3">
                <button className="button">
                  Newest First
                </button>
                <button className="button">
                  Grid
                </button>
                <button className="button">
                  List
                </button>
              </div>
            </div>
            {/* Gallery */}
            <div className="mt-10 flex-1 overflow-y-auto">
              <div className="grid grid-cols-6 gap-5">
                {/* Card */}
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div><div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                <div className="memories-card">
                  <div className="h-full overflow-hidden">
                    <img
                      src={hero}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="h3">
                      First Day Together
                    </h3>
                    <div className="mt-4 flex justify-between">
                      <span className="span text-white/75 bg-amber-500 backdrop-blur-sm rounded-md px-2">School Life</span>
                      <span className="span">♥ 32</span>
                    </div>
                  </div>
                </div>
                {/* ulangi */}

              </div>

            </div>

            {/* Pagination */}

            <div className="mt-5 flex justify-center gap-3 text-2xl">

              <button className="flex h-10 w-10 items-center justify-center rounded-full border">
                &lt;
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border bg-marigold text-black
              onClick={() => setPage(1)}">
                1
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border
              onClick={() => setPage(2)}">
                2
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border
              onClick={() => setPage(3)}">
                3
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-full border">
                &gt;
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Memories;