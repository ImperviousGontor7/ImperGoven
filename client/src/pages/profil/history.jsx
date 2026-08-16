import hero from "../../assets/pictures/Jami Emas.webp";

import { Link } from "react-router-dom";

import { FiArrowRight } from "react-icons/fi";

function History() {
  return (
    <div className="h-full">
      <div className="reveal-scroll mx-auto w-full backdrop-blur-md overflow-hidden shrink-0 snap-start">
        <div className="relative ">
          <img src={hero} alt="Hero" className="block w-full aspect-4/1 object-cover" />
          <div className="absolute inset-0 w-full h-full bg-linear-to-t from-[#0d0500] to-[#0d0500]/0" />
        </div>
        <div className="grid grid-cols-[2fr_8fr] gap-1 mx-5 items-start">
          <aside className="sticky top-1 self-start w-full border rounded-tl-2xl rounded-bl-2xl">
            <div className="p-10">
              <div className="w-full aspect-2/5 border rounded-xl">

              </div>
            </div>
          </aside>
          <main className="border h-650 rounded-tr-2xl rounded-br-2xl">
            <div className="grid grid-rows-5 gap-50 my-10 px-15">
              <div className="grid grid-cols-[7fr_3fr] gap-25 m-auto w-full h-80">
                <div className="block m-auto w-full h-full">
                  <h1 className="h1">1. Sejarah Pondok Tegalsari</h1>
                  <hr className="border-b w-12.5 mb-5" />
                  <p className="p">
                    Pada awal abad ke-18, hiduplah seorang kiai besar keturunanbangsawan dari kerajaan Majapahit
                    melalui Prabu Brawijaya V (Raja Terakhir Majapahit) Raden Patah (Raja Pertama Keturunan Demak).
                    Lalu nasabnya terus bersambung hingga mencapai ayahnya. Kyai Ageng Anom Besari. Selain dari
                    keturunan bangsawan. Beliau juga merupakan keturunan Sunan Ampel melewati nasab ibunya Nyai
                    Ageng Grubahan. Beliau bernama Kyai Ageng Hasan Bashari, yang mana beliaulah yang akan menjadi
                    cikal bakal berdirinya Pondok Modern Darussalam Gontor.
                  </p>
                  <Link
                    to="/legacy/tegalsari"
                    className="group block w-fit"
                  >
                    <div className="border w-75 p-5 rounded-xl px-7 text-marigold mt-10
                              hover:bg-cocoa/50 backdrop-blur-sm transition-all
                              duration-200 ease-in-out">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="text-xl font-main font-semibold
                           text-marigold tracking-[2px]">
                              Read More
                            </h3>
                          </div>
                        </div>
                        <FiArrowRight className="text-marigold text-xl" />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="block m-auto w-full aspect-video overflow-hidden my-auto rounded-2xl border">
                  <img src={hero} alt="Hero" className="block w-full object-cover" />
                </div>
              </div>
              <div className="grid grid-cols-[7fr_3fr] gap-25 m-auto w-full h-80">
                <div className="block m-auto w-full h-full">
                  <h1 className="h1">2. Sejarah Pondok Gontor Lama</h1>
                  <hr className="border-b w-12.5 mb-5" />
                  <p className="p">
                    Pada pertengahan abad ke-19, Pondok Tegalsari mulai mengalami kepadatan santri
                    serta tantangan dalam proses regenerasi kepemimpinan. Dalam kondisi tersebut,
                    salah satu menantu keturunan Kyai Ageng Mohammad Besari, yaitu Kyai Muda Sulaiman
                    Jamaluddin, berinisiatif untuk merintis pesantren baru yang menyerupai sistem
                    Tegalsari di wilayah desa Gontor. Gontor sendiri merupakan sebuah desa yang
                    terletak di tengah kawasan hutan, sekitar 3 km di sebelah timur Tegalsari
                    dan kurang lebih 11 km ke arah tenggara dari Kota Ponorogo, yang pada saat itu
                    masih tergolong daerah yang cukup terpencil namun potensial untuk pengembangan
                    pendidikan Islam.
                  </p>
                </div>

                <div className="block m-auto w-full aspect-video overflow-hidden my-auto rounded-2xl border">
                  <img src={hero} alt="Hero" className="block w-full object-cover" />
                </div>
                <div className="border w-75 p-5 rounded-xl px-7 text-marigold mt-10
                              hover:bg-cocoa/50 backdrop-blur-sm transition-all
                              duration-200 ease-in-out">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-xl font-main font-semibold
                           text-marigold tracking-[2px]">
                          Read More
                        </h3>
                      </div>
                    </div>
                    <FiArrowRight className="text-marigold text-xl" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[7fr_3fr] gap-25 m-auto w-full h-80">
                <div className="block m-auto w-full h-full">
                  <h1 className="h1">3. Sejarah Pondok Gontor Baru</h1>
                  <hr className="border-b w-12.5 mb-5" />
                  <p className="p">
                    Berdirinya Pondok Gontor yang baru tidak lepas dari tekad Ibu Nyai Santoso yang
                    mengirimkan ketiga puteranya—K.H. Ahmad Sahal, K.H. Zainudin Fananie, dan K.H.
                    Imam Zarkasyi—ke berbagai lembaga pendidikan untuk memperdalam ilmu agama dan
                    pengetahuan umum. Hal ini dilakukan dengan harapan agar mereka tumbuh menjadi
                    pribadi yang berilmu, berwawasan luas, dan siap mengemban amanah besar di bidang
                    pendidikan Islam. Ibu Nyai Santoso berharap ketiga puteranya tersebut kelak dapat
                    menghidupkan kembali Pondok Gontor Lama yang telah runtuh, sekaligus membangun
                    kembali sistem pendidikan yang lebih kuat dan relevan dengan perkembangan zaman.
                  </p>
                </div>
                <div className="block m-auto w-full aspect-video overflow-hidden my-auto rounded-2xl border">
                  <img src={hero} alt="Hero" className="block w-full object-cover" />
                </div>
                <div className="border w-75 p-5 rounded-xl px-7 text-marigold mt-10
                              hover:bg-cocoa/50 backdrop-blur-sm transition-all
                              duration-200 ease-in-out">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-xl font-main font-semibold
                           text-marigold tracking-[2px]">
                          Read More
                        </h3>
                      </div>
                    </div>
                    <FiArrowRight className="text-marigold text-xl" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[7fr_3fr] gap-25 m-auto w-full h-80">
                <div className="block m-auto w-full h-full">
                  <h1 className="h1">4. Sejarah Pondok Modern Darussalam Gontor</h1>
                  <hr className="border-b w-12.5 mb-5" />
                  <p className="p">
                    Gagasan membangun Gontor Baru beserta konsep pendidikan dan gambaran lulusannya
                    diilhami oleh Kongres Ummat Islam Indonesia di Surabaya pada tahun 1926. Kongres
                    yang dihadiri para ulama dan tokoh Islam dari berbagai daerah tersebut melahirkan
                    gagasan tentang pembaruan pendidikan Islam. Dari peristiwa inilah para pendiri
                    Gontor terinspirasi untuk membangun lembaga pendidikan yang tidak hanya berfokus
                    pada ilmu agama, tetapi juga membentuk karakter, kepemimpinan, dan kemandirian
                    para santri.
                  </p>
                </div>
                <div className="block m-auto w-full aspect-video overflow-hidden my-auto rounded-2xl border">
                  <img src={hero} alt="Hero" className="block w-full object-cover" />
                </div>
                <div className="border w-75 p-5 rounded-xl px-7 text-marigold mt-10
                              hover:bg-cocoa/50 backdrop-blur-sm transition-all
                              duration-200 ease-in-out">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-xl font-main font-semibold
                           text-marigold tracking-[2px]">
                          Read More
                        </h3>
                      </div>
                    </div>
                    <FiArrowRight className="text-marigold text-xl" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[7fr_3fr] gap-25 m-auto w-full h-80">
                <div className="block m-auto w-full h-full">
                  <h1 className="h1">5. Sejarah Pondok Gontor 7</h1>
                  <hr className="border-b w-12.5 mb-5" />
                  <p className="p">
                    Gontor 7 merupakan bagian dari perkembangan jaringan pendidikan Pondok Modern Darussalam
                    Gontor yang didirikan sebagai respons terhadap kebutuhan umat akan pendidikan Islam yang
                    berkualitas di berbagai daerah di Indonesia. Kehadirannya bertujuan untuk memperluas akses
                    pendidikan sekaligus membawa nilai, sistem, dan tradisi keilmuan Gontor agar dapat dirasakan
                    lebih luas oleh masyarakat. Dengan demikian, Gontor 7 diharapkan tetap menjadi lembaga
                    pendidikan yang menjaga kualitas, disiplin, dan pembentukan karakter santri sebagaimana
                    ciri khas Pondok Modern Darussalam Gontor.
                  </p>
                </div>
                <div className="block m-auto w-full aspect-video overflow-hidden my-auto rounded-2xl border">
                  <img src={hero} alt="Hero" className="block w-full object-cover" />
                </div>
                <div className="border w-75 p-5 rounded-xl px-7 text-marigold mt-10
                              hover:bg-cocoa/50 backdrop-blur-sm transition-all
                              duration-200 ease-in-out">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div>
                        <h3 className="text-xl font-main font-semibold
                           text-marigold tracking-[2px]">
                          Read More
                        </h3>
                      </div>
                    </div>
                    <FiArrowRight className="text-marigold text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default History;