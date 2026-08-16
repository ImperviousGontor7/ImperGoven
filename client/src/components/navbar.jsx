import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Impact from "../assets/pictures/Left Nav Logo Generation.webp";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const linkClass = ({ isActive }) =>
    `
    relative rounded-full px-[2rem] my-auto
    text-[clamp(0.5rem,0.75vw,2.25rem)] font-black uppercase tracking-[1.5px]
    transition-all duration-200 font-zhoro
    ${isActive
      ? "marigold text-marigold shadow-lg"
      : "text-white hover:marigold/20 hover:text-marigold"
    }
  `;

  return (
    <div>
      <nav
        className="
    fixed top-0 left-0 z-1110
    w-full
    h-14 md:h-[clamp(3.5rem,5vw,9rem)]
    backdrop-blur-[25px]
    border-b border-borderglass/40
  "
      >

        {/* ========================= */}
        {/* DESKTOP NAVBAR */}
        {/* ========================= */}

        <div
          className="
      hidden md:grid
      mx-auto
      grid-cols-3
      w-full
      h-full
    "
        >

          {/* LOGO */}
          <div className="flex my-auto">
            <img
              src={Impact}
              alt="Impact"
              className="
          h-[clamp(2.5rem,4vw,6.5rem)]
          mx-[clamp(1.25rem,2vw,3.5rem)]
        "
            />
          </div>


          {/* MENU */}
          <div
            className="
        flex items-center justify-center
        gap-[clamp(0.5rem,1.5vw,7.5rem)]
        p-1.5 w-full
      "
          >

            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            {/* ABOUT */}
            <div
              className="relative"
              onMouseEnter={() => setOpenAbout(true)}
              onMouseLeave={() => setOpenAbout(false)}
            >
              <span
                className="
            cursor-pointer
            rounded-full
            text-[clamp(0.5rem,0.75vw,2.25rem)]
            font-black
            uppercase
            tracking-[1.5px]
            text-white
            px-5.5
            transition-all
            duration-200
            hover:text-marigold
          "
              >
                About
              </span>

              {openAbout && (
                <div
                  className="
              absolute left-0 top-full
              z-999
              flex min-w-45 flex-col gap-2
              rounded-2xl
              border border-(--borderglass)/50
              bg-(--bg-main)/90
              p-2
              shadow-xl
              backdrop-blur-md
            "
                >
                  <Link
                    to="/profil/our-generation"
                    className="rounded-xl px-4 py-2 text-white hover:text-marigold"
                  >
                    Our Generation
                  </Link>

                  <Link
                    to="/profil/history"
                    className="rounded-xl px-4 py-2 text-white hover:text-marigold"
                  >
                    History
                  </Link>

                  <Link
                    to="/profil/committee"
                    className="rounded-xl px-4 py-2 text-white hover:text-marigold"
                  >
                    Committee
                  </Link>

                  <Link
                    to="/profil/agenda"
                    className="rounded-xl px-4 py-2 text-white hover:text-marigold"
                  >
                    Agenda
                  </Link>

                  <Link
                    to="/profil/memories"
                    className="rounded-xl px-4 py-2 text-white hover:text-marigold"
                  >
                    Memories
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/forum" className={linkClass}>
              Forum
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

          </div>

          {/* SEARCH + LOGIN */}
          <div
            className="
        flex
        justify-end
        items-center
        gap-[clamp(1.5rem,2vw,3rem)]
        mx-[clamp(1.25rem,2vw,3.5rem)]
      "
          >

            {/* SEARCH */}
            <div
              className="
          flex
          gap-[clamp(0.5rem,1vw,1rem)]
          h-[clamp(2rem,3.75vw,4.5rem)]
          w-[clamp(15rem,20vw,30rem)]
          rounded-full
          overflow-hidden
          backdrop-blur-xl
          bg-linear-to-b
          from-white/5
          to-white/2
          border border-white/10
        "
            >
              <svg
                viewBox="0 0 22 22"
                className="w-10 h-10 shrink-0 text-white/70"
                fill="none"
              >
                <circle
                  cx="11.5"
                  cy="11.5"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <line
                  x1="16"
                  y1="16"
                  x2="20"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>

              <input
                type="text"
                placeholder="Search anything..."
                className="
            w-full
            bg-transparent
            outline-none
            border-none
            text-white
            placeholder:text-white/40
          "
              />
            </div>

            {/* LOGIN */}
            <button
              className="
          h-[clamp(3rem,3vw,4.25rem)]
          w-[clamp(7rem,7vw,10rem)]
          rounded-3xl
          text-white
          font-semibold
          bg-linear-to-br
          from-[rgb(227,164,25)]
          to-[rgba(227,164,25,0.8)]
          transition-all
          duration-300
          hover:-translate-y-1
        "
            >
              Login
            </button>

          </div>

        </div>

        {/* ================================= */}
        {/* MOBILE / TABLET NAVBAR */}
        {/* ================================= */}

        <div
          className="
    flex
    md:hidden
    w-full
    h-full
    items-center
    justify-between
    px-4
  "
        >

          {/* KIRI — LOGO */}
          <div className="flex items-center">
            <img
              src={Impact}
              alt="Impact"
              className="h-10 w-auto"
            />
          </div>


          {/* KANAN — SEARCH + LOGIN + HAMBURGER */}
          <div className="flex items-center gap-2">

            {/* SEARCH */}
            <button
              className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
        text-white
      "
            >
              <svg
                viewBox="0 0 22 22"
                className="h-5 w-5"
                fill="none"
              >
                <circle
                  cx="10"
                  cy="10"
                  r="5.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <line
                  x1="14"
                  y1="14"
                  x2="19"
                  y2="19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>


            {/* LOGIN */}
            <button
              className="
        h-10
        px-4
        rounded-xl
        text-sm
        font-semibold
        text-white
        bg-linear-to-br
        from-[rgb(227,164,25)]
        to-[rgba(227,164,25,0.8)]
      "
            >
              Login
            </button>


            {/* HAMBURGER */}
            <button
              onClick={() => setOpenMenu(true)}
              className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-white/10
        bg-white/5
      "
            >
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 bg-white" />
                <span className="h-0.5 w-5 bg-white" />
                <span className="h-0.5 w-5 bg-white" />
              </div>
            </button>

          </div>

        </div>

      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setOpenMenu(false)}
        className={`
    fixed
    inset-0
    z-1100
    bg-black/50
    backdrop-blur-xs
    transition-opacity
    duration-500
    md:hidden

    ${openMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
  `}
      ></div>

      {/* ================================= */}
      {/* MOBILE DRAWER / MENU DARI KANAN */}
      {/* ================================= */}

      <div
        className={`
      fixed
      top-0
      right-0
      z-1200
      h-screen
      w-[50%]
      max-w-sm
      bg-(--bg-main)/95
      backdrop-blur-2xl
      border-l border-white/10
      transition-transform
      duration-500
      ease-out

      ${openMenu
            ? "translate-x-0"
            : "translate-x-full"
          }
    `}
      >

        {/* TOMBOL CLOSE */}
        <div className="flex justify-end p-5">
          <button
            onClick={() => setOpenMenu(false)}
            className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border border-white/10
          bg-white/5
          text-white
        "
          >
            ✕
          </button>
        </div>


        {/* MENU MOBILE */}
        <div className="flex flex-col px-6">

          <NavLink
            to="/"
            onClick={() => setOpenMenu(false)}
            className="py-4 text-white"
          >
            Home
          </NavLink>

          {/* ABOUT MOBILE */}
          <div className="flex flex-col">

            <button
              onClick={() => setOpenAbout(!openAbout)}
              className="
      flex
      w-full
      items-center
      justify-between
      py-4
      text-left
      text-white
      font-black
      uppercase
      tracking-[1.5px]
    "
            >
              <span>About</span>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                className={`
    h-5 w-5
    transition-transform
    duration-300
    ${openAbout ? "rotate-90" : "rotate-0"}
  `}
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* DROPDOWN ABOUT */}
            <div
              className={`
      ml-4
      overflow-hidden
      border-l
      border-white/10
      pl-4
      transition-all
      duration-300
      ${openAbout
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
                }
    `}
            >

              <Link
                to="/profil/our-generation"
                onClick={() => setOpenMenu(false)}
                className="
        block
        py-2.5
        text-sm
        text-white/70
        transition-colors
        hover:text-marigold
      "
              >
                Our Generation
              </Link>

              <Link
                to="/profil/history"
                onClick={() => setOpenMenu(false)}
                className="
        block
        py-2.5
        text-sm
        text-white/70
        transition-colors
        hover:text-marigold
      "
              >
                History
              </Link>

              <Link
                to="/profil/committee"
                onClick={() => setOpenMenu(false)}
                className="
        block
        py-2.5
        text-sm
        text-white/70
        transition-colors
        hover:text-marigold
      "
              >
                Committee
              </Link>

              <Link
                to="/profil/agenda"
                onClick={() => setOpenMenu(false)}
                className="
        block
        py-2.5
        text-sm
        text-white/70
        transition-colors
        hover:text-marigold
      "
              >
                Agenda
              </Link>

              <Link
                to="/profil/memories"
                onClick={() => setOpenMenu(false)}
                className="
        block
        py-2.5
        text-sm
        text-white/70
        transition-colors
        hover:text-marigold
      "
              >
                Memories
              </Link>

            </div>

          </div>

          <NavLink
            to="/forum"
            onClick={() => setOpenMenu(false)}
            className="py-4 text-white"
          >
            Forum
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setOpenMenu(false)}
            className="py-4 text-white"
          >
            Contact
          </NavLink>

        </div>


        {/* SEARCH MOBILE */}


      </div>

    </div>

  );
}

export default Navbar;