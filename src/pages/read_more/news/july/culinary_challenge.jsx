import hero from "../../../../assets/pictures/Jami Emas.webp";


function CulinaryChallenge() {
  const topics = [
    "Architecture",
    "Urban Planning",
    "Public Space",
    "Infrastructure",
    "Climate",
    "Society",
  ];

  const shareUrl = window.location.href;
  const title = document.title;

  return (
    <div className="items-center justify-center">
      <div className="w-full mb-70">
        <div className="relative">
          <img
            src={hero}
            alt="Culinary Challenge"
            className="block h-[82.5vh] w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#170e07] to-transparent" />

          {/* Content */}
          <div className="absolute -bottom-55 left-0 w-full">
            <div className="w-full max-w-500 mx-auto px-5 sm:px-45">
              <h1 className="text-[clamp(2rem,2vw,3.5rem)] font-bold text-alabaster text-center mb-5">
                Culinary Challenge
              </h1>

              <h3 className="text-[clamp(1rem,2vw,1.5rem)] leading-loose 
              tracking-wide text-caramel-brown">
                Perjalanan Kami kini di lalui dengan penuh warna dan rasa.
                Salah satunya adalah dengan mengadakan Culinary Challenge yang
                diikuti oleh sebagian dari Kami. Kompetisi ini bertujuan untuk
                meningkatkan kreativitas dan kemampuan memasak anggota Kami,
                serta mempererat tali persaudaraan di antara kami.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-500 mx-auto px-5 sm:px-8 relative z-10">

        {/* Author / Metadata */}
        <div className="h-auto border-y border-brown-500 my-20 py-5">
          <div className="grid grid-cols-[auto_1fr_auto] gap-5 items-center">

            <div className="flex justify-center items-center">
              <div className="flex h-17.5 w-17.5 items-center justify-center rounded-full bg-[#8a6730]">
                <h4 className="text-[clamp(1.25rem,2vw,1.75rem)] font-extrabold text-cocoa">
                  IM
                </h4>
              </div>
            </div>

            <div>
              <h3 className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-white">
                Impervious Multimedia
              </h3>
              <p className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-white/50">
                Gontor 7, Kalianda Lampung Selatan
              </p>
            </div>

            <div className="text-right">
              <p className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-white/50">
                July 21, 2026
              </p>
              <p className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-amber-400/50">
                09.00 AM Published
              </p>
            </div>

          </div>
        </div>


        {/* Short Description */}
        <div className="my-15">
          <p className="text-[clamp(1rem,2vw,1.25rem)] font-bold text-vanilla/25">
            A sportsmanlike culinary competition among KMI senior students—to compete
            for the Culinary Challenge title 2026.
          </p>
        </div>


        {/* Intro Article */}
        <article className="space-y-15">

          <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-loose font-bold text-sunrise-glow/50">
            Di lingkungan siswa akhir KMI Gontor 7, tantangan tidak selalu hadir
            dalam bentuk ujian, kepemimpinan, atau padatnya kegiatan harian. Ada
            satu pengalaman sederhana yang mampu menghadirkan kebersamaan sekaligus
            menjadi hiburan di sela rutinitas, yaitu Culinary Challenge.
          </p>

          <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-loose font-bold text-sunrise-glow/50">
            Lebih dari sekadar mencicipi makanan, Culinary Challenge menjadi sarana
            mempererat ukhuwah di antara siswa akhir. Suasana penuh canda, diskusi
            mengenai rasa, hingga keberanian mencoba menu yang tidak biasa menciptakan
            kenangan yang sulit dilupakan.
          </p>

        </article>

        <div className="my-25">
          <h2 className="text-[clamp(1.25rem,3vw,3rem)] font-bold text-caramel-brown">
            Kompetisi Memasak yang Menggugah Selera.
          </h2>
        </div>
        <div className="my-20">

          <img
            src={hero}
            alt="Culinary Challenge"
            className="w-4/5 mx-auto rounded-2xl object-cover"
          />
        </div>

        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">

          <p className="first-letter:float-left first-letter:mr-4 first-letter:text-[clamp(7.5rem,5.4vw,15rem)] first-letter:font-serif first-letter:font-bold first-letter:leading-none mb-15">
            Kompetisi Kuliner atau pertandingan memasak merupakan salah satu
            kegiatan angkatan yang diselenggarakan oleh siswa akhir KMI Gontor 7
            sebagai wadah untuk mengembangkan kreativitas, keterampilan, serta
            semangat kebersamaan antaranggota angkatan. Kegiatan ini dirancang
            sebagai sarana bagi para santri untuk menyalurkan ide, bakat, dan
            kemampuan yang mereka miliki dalam bidang tata boga melalui sebuah
            kompetisi yang edukatif, menarik, dan penuh tantangan. Selain menjadi
            ajang untuk menunjukkan kemampuan memasak, kegiatan ini juga
            diharapkan mampu memberikan pengalaman baru yang dapat meningkatkan
            rasa percaya diri, melatih ketelitian, serta membangun jiwa
            kompetitif yang sehat. Dengan adanya kompetisi ini, para peserta
            didorong untuk terus berinovasi dalam menciptakan hidangan yang
            tidak hanya memiliki cita rasa yang lezat, tetapi juga menarik dari
            segi penyajian, sehingga mampu memberikan kesan terbaik kepada dewan
            juri maupun seluruh peserta yang hadir.
          </p>

          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>



        </div>

        <div className="my-25">
          <div className="bg-dark-brown/50 backdrop-blur-3xl rounded-4xl 
          w-[clamp(25rem,60vw,75rem)] mx-auto h-[clamp(12rem,20vw,20rem)] border-amber-400/50">
            <div className="grid grid-cols-2 h-full">
              <div className="border-r text-center px-4 py-2">
                <span class="text-[clamp(4rem,7vw,7.5rem)] font-bold">
                  1<sup class="text-[clamp(1.5rem,1vw,4rem)] align-super -ml-2 -top-[clamp(1.5rem,1vw,2.5rem)]">st</sup>
                </span>
                <p className="text-[clamp(0.75rem,1.5vw,1.5rem)] -mt-3 font-bold text-white/50">
                  Presented to the students of 6-G for their participation in the Culinary Challenge, showcasing creativity and teamwork.
                </p>
              </div>
              <div>
                <div className="text-center px-5 py-2">
                  <span class="text-[clamp(4rem,7vw,7.5rem)] font-bold">
                    2<sup class="text-[clamp(1.5rem,1vw,4rem)] align-super -ml-1 -top-[clamp(1.5rem,1vw,2.5rem)]">nd</sup>
                  </span>
                  <p className="text-[clamp(0.75rem,1.5vw,1.5rem)] -mt-3 font-bold text-white/50">
                    Presented to the students of 6-I for their participation in the Culinary Challenge, showcasing creativity and teamwork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-4 border-honey/75 h-[clamp(10rem5vw,20rem)] my-25 py-5 pl-10">
          <h1 className="text-[clamp(1.25rem,2vw,2.5rem)] font-bold text-antiquewhite/50 mb-10">
            Cities are not built in decades — they are built in days, repeated
            ten thousand times over by people who mostly never meet each other.
          </h1>
          <h3 className="text-[clamp(0.75rem,2vw,1.5rem)] font-bold text-honey/25">
            — Prof. Yuki Tanaka, Urban Systems Lab, ETH Zürich
          </h3>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Melalui kegiatan ini, para peserta tidak hanya diuji dalam
            keterampilan memasak, tetapi juga dibimbing untuk mengembangkan
            kemampuan berpikir kreatif, menyelesaikan permasalahan yang muncul
            selama proses perlombaan, mengelola waktu secara efektif, serta
            membangun komunikasi dan koordinasi yang baik dalam sebuah tim.
            Setiap anggota memiliki peran dan tanggung jawab yang berbeda,
            sehingga diperlukan kerja sama, saling percaya, serta kepedulian
            antarsesama agar seluruh rangkaian proses memasak dapat berjalan
            dengan lancar dan menghasilkan hidangan yang berkualitas. Di samping
            itu, kompetisi ini diharapkan mampu menanamkan nilai-nilai
            kedisiplinan, tanggung jawab, sportivitas, kerja keras, serta sikap
            saling menghargai terhadap usaha dan hasil karya setiap kelompok.
            Dengan terselenggaranya kegiatan ini, diharapkan para santri
            memperoleh pengalaman yang berharga, memperluas wawasan dalam bidang
            kuliner, meningkatkan keterampilan hidup yang bermanfaat, serta
            menjadikan kompetisi ini sebagai momentum untuk mempererat ukhuwah,
            menumbuhkan semangat berkarya, dan mengembangkan potensi diri
            secara optimal.
          </p>
        </div>
        <div className="my-20 w-4/5 mx-auto">

          <img
            src={hero}
            alt="Culinary Challenge"
            className="w-full mx-auto rounded-2xl object-cover"
          />
          <h6 className="text-[clamp(0.75rem,1.5vw,1.25rem)] text-alpine-oak/50 mt-5">
            <i>
              Culinary Challenge 2026, Impervious Generation Gontor 7. — since 2026
            </i>
          </h6>
        </div>
        <div className="my-25">
          <h2 className="text-[clamp(1.25rem,3vw,3rem)] font-bold text-caramel-brown">
            Kompetisi Memasak yang Menggugah Selera.
          </h2>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <div className="my-20 w-4/5 mx-auto">

          <img
            src={hero}
            alt="Culinary Challenge"
            className="w-full mx-auto rounded-2xl object-cover"
          />
          <h6 className="text-[clamp(0.75rem,1.5vw,1.25rem)] text-alpine-oak/50 mt-5">
            <i>
              Culinary Challenge 2026, Impervious Generation Gontor 7. — since 2026
            </i>
          </h6>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <div className="my-25">
          <h2 className="text-[clamp(1.25rem,3vw,3rem)] font-bold text-caramel-brown">
            Kompetisi Memasak yang Menggugah Selera.
          </h2>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <div className="my-20 w-4/5 mx-auto">

          <img
            src={hero}
            alt="Culinary Challenge"
            className="w-full mx-auto rounded-2xl object-cover"
          />
          <h6 className="text-[clamp(0.75rem,1.5vw,1.25rem)] text-alpine-oak/50 mt-5">
            <i>
              Culinary Challenge 2026, Impervious Generation Gontor 7. — since 2026
            </i>
          </h6>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <div className="border-l-4 border-honey/75 h-[clamp(12rem,10vw,16rem)] my-25 py-5 pl-10">
          <h1 className="text-[clamp(1.25rem,2vw,2.5rem)] font-bold text-antiquewhite/50 mb-10">
            We stopped asking whether we could afford to make cities greener.
            We started asking whether we could afford not to.
          </h1>
          <h3 className="text-[clamp(0.75rem,2vw,1.5rem)] font-bold text-honey/25">
            — Katrin Schreiber, Director of Urban Resilience, City of Rotterdam
          </h3>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <div className="my-25">
          <h2 className="text-[clamp(1.25rem,3vw,3rem)] font-bold text-caramel-brown">
            Kompetisi Memasak yang Menggugah Selera.
          </h2>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <div className="text-[clamp(1rem,2vw,1.75rem)] leading-loose tracking-wide text-white text-justify">
          <p className="my-20">
            Dalam kompetisi ini, setiap peserta yang telah mendaftarkan diri akan
            bekerja sama dengan kelompoknya untuk mengolah bahan utama berupa
            ayam menjadi berbagai hidangan yang kreatif, bercita rasa tinggi,
            bergizi, dan memiliki nilai estetika yang baik. Setiap kelompok
            diberikan kebebasan untuk menentukan konsep, menu, teknik pengolahan,
            serta cara penyajian sesuai dengan kreativitas masing-masing, tanpa
            mengabaikan aspek kebersihan, kerapian, efisiensi waktu, dan keamanan
            dalam proses memasak. Penilaian tidak hanya berfokus pada hasil akhir
            berupa rasa makanan, tetapi juga mempertimbangkan inovasi menu,
            penampilan hidangan, kekompakan tim, ketepatan teknik memasak, hingga
            kemampuan peserta dalam memanfaatkan bahan yang tersedia secara
            efektif. Oleh karena itu, setiap kelompok dituntut untuk bekerja sama
            secara maksimal, membagi tugas dengan baik, serta mengoptimalkan
            kemampuan setiap anggotanya agar dapat menghasilkan sajian terbaik
            yang mampu bersaing dengan kelompok lainnya.
          </p>
        </div>
        <hr className="border-brown-500 my-15" />
        <h4 className="font-extralight text-[clamp(1rem,2vw,1.5rem)] 
        text-alpine-oak/50 mb-15">
          Topics
        </h4>
        <div className="flex flex-wrap gap-3">

          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border text-alpine-oak/50 px-4 
              py-2 text-[clamp(1rem,2vw,1.25rem)] text-brown-500 
              bg-dark-brown/50 backdrop-blur-3xl"
            >
              {topic}
            </span>
          ))}
        </div>
        <hr className="border-brown-500 my-15" />
        <div className="grid grid-cols-2">
          <div className="justify-items-start flex items-center">
            <h1 className="text-[clamp(1rem,2vw,1.5rem)] text-alpine-oak/50 font-extralight">
              Share This Story
            </h1>
          </div>
          <div className="justify-items-end">
            <div className="flex items-center gap-3">

              <button
                className="border w-15 aspect-square rounded-xl text-alpine-oak/50
                text-[clamp(1rem,2vw,1.25rem)] bg-dark-brown/50 backdrop-blur-3xl"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`
                  )
                }
              >
                X
              </button>

              <button
                className="border w-27 aspect-video rounded-xl text-alpine-oak/50
                text-[clamp(1rem,2vw,1.25rem)] bg-dark-brown/50 backdrop-blur-3xl"
                onClick={() =>
                  window.open(
                    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
                  )
                }
              >
                LinkedIn
              </button>

              <button
                className="border w-27 aspect-video rounded-xl text-alpine-oak/50
                text-[clamp(1rem,2vw,1.25rem)] bg-dark-brown/50 backdrop-blur-3xl"
                onClick={() => navigator.clipboard.writeText(shareUrl)}
              >
                Copy link
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CulinaryChallenge;