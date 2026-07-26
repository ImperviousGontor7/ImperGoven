function Footer() {
  return (
    <footer className="relative mt-15 border-t border-(--border-glass) bg-[#0f0600] pt-15 pb-12.5">
      <div className="mx-auto w-full px-50">
        <div className="mb-25 grid grid-cols-[2fr_1fr_1fr_1fr] gap-25">
          <div className="f-brand">
            <h3 className="mb-15  font-(--font-main) text-6xl text-(--text-main)">
              IMPERVIOUS GENERATION
            </h3>
            <p className="text-2xl leading-15 text-justify text-(--text-h)">
              Mewujudkan generasi muda untuk negeri yang berlandaskan kualitas tinggi dan
              kuantitas yang mumpuni. Sebagai katalis zaman keemasan, menggerakkan perubahan
              yang bermula dari diri untuk cahaya bagi umat dan bangsa.
            </p>
          </div>

          <div className="f-col">
            <h5 className="mb-12.5 py-5 font-(--font-lato) text-3xl uppercase tracking-[2px] text-(--text-main)">
              Navigation
            </h5>

            <a
              href="/our-team"
              className="mb-3 flex items-center gap-1 text-2xl"
            >
              <i className="fas fa-user-group mr-2" />
              <span>Our Team</span>
            </a>

            <a
              href="/faq"
              className="mb-3 flex items-center gap-3 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
            >
              <i className="fas fa-circle-question mr-2" />
              <span>FAQ</span>
            </a>

            <a
              href="/support-center"
              className="mb-3 flex items-center gap-3 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
            >
              <i className="fas fa-headset mr-2" />
              <span>Support Center</span>
            </a>

            <a
              href="/privacy-policy"
              className="mb-3 flex items-center gap-3 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
            >
              <i className="fas fa-shield-halved mr-2" />
              <span>Privacy Policy</span>
            </a>
          </div>

          <div className="f-col">
            <h5 className="mb-12.5 py-5 font-(--font-lato) text-3xl uppercase tracking-[2px] text-(--text-main)">
              Social Links
            </h5>

            <a
              href="https://www.instagram.com/impervious_generation.g7/?__d=1%2F"
              className="mb-3 flex items-center gap-5 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram w-6 text-center" />
              <span>Instagram Official</span>
            </a>

            <a
              href="https://www.youtube.com/@gontortv"
              className="mb-3 flex items-center gap-5 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-youtube w-6 text-center" />
              <span>Gontortv Official</span>
            </a>

            <a
              href="https://wa.me/6281547212932?text=Halo%20saya%20mau%20tanya"
              className="mb-3 flex items-center gap-5 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-whatsapp w-6 text-center" />
              <span>Gontor Tv Official</span>
            </a>

            <a
              href="https://imperviousgeneration.my.id/"
              className="mb-3 flex items-center gap-5 text-2xl text-(--text-muted) transition-(--transition-fast) hover:translate-x-1.25 hover:text-(--text-main)"
              target="_blank"
            >
              <i className="fa-solid fa-globe w-6 text-center" />
              <span>Impervious Main Campus</span>
            </a>
          </div>

          <div className="f-col">
            <h5 className="mb-7.5 py-5 font-(--font-lato) text-3xl uppercase tracking-[2px] text-(--text-main)">
              Alamat
            </h5>
            <p className="text-2xl text-justify leading-10 my-12 text-(--text-muted)">
              Kubu Panglima, Tajimalela, Kec. Kalianda, Kabupaten Lampung Selatan, Lampung
              35551.
            </p>
          </div>
        </div>

        <div className="f-bottom flex justify-between border-t border-(--border-glass) pt-7.5 text-1xl uppercase tracking-[2px] text-(--text-muted)">
          <span>&copy; 1448 H / 2027 M IMPERVIOUS GENERATION - GONTOR Kampus 7</span>
          <span>Multimedia Gontor 7 Staff Dev Team</span>
        </div>
      </div>
    </footer>

  );
}

export default Footer;