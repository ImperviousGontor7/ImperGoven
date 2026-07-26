import { FaWhatsapp, FaInstagram, FaDiscord, FaTelegramPlane, FaMapMarkedAlt } from "react-icons/fa";
import { FiMail, FiArrowRight, FiInfo } from "react-icons/fi";


import contact from "../assets/pictures/Jami Emas.webp";

function Contact() {
  return (
    <div className="w-full max-w-500 mx-auto px-5 sm:px-8 -mt-24 relative z-10">
      <div className="grid grid-cols-2">
        <div className="py-10">
          <span className="inline-block backdrop-blur-md bg-white/10 span before:content-['•'] before:mr-2 before:text-amber-500 border p-2 rounded-4xl">
            CONTACT US
          </span>
          <h1 className="max-heading my-10">
            Let’s Connect To Improve What’s Needed
          </h1>
          <h2 className="h2">
            Experiencing Issues With This Website?<br />
            Stuck, Bugs, Errors, Or Unexpected Logouts?<br />
            Don’t Worry, Feel Free To Contact Us For a Better Experience!
          </h2>
          <div className="grid grid-cols-2 w-2/3 gap-10 my-10">
            <button type="submit"
              onClick={() => {
                console.log("View Services diklik");
              }}
              className="block h-[clamp(42px,4vw,50px)] px-[clamp(16px,2vw,25px)] rounded-3xl 
        text-white font-semibold text-[clamp(15px,1.1vw,18px)] bg-linear-to-br 
        from-[rgb(227,164,25)] to-[rgba(227,164,25,0.8)]">
              Send Message
            </button>
            <button type="button"
              onClick={() => {
                console.log("View Services diklik");
              }}
              className="block h-[clamp(42px,4vw,50px)] px-[clamp(16px,2vw,25px)] rounded-3xl 
        text-white font-semibold text-[clamp(15px,1.1vw,18px)] border 
        hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
              View Services
            </button>
          </div>
        </div>

        <div className="block relative w-full h-full aspect-video">
          <img src={contact} alt="Contact" className="block align-middle w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-[#170e07] via-[#170e07]/5 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#170e07]/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-linear-to-l from-[#170e07] via-[#170e07]/5 to-transparent" />

        </div>

      </div>
      <div className="grid grid-cols-[3fr_7fr] gap-5 mb-15 h-full">
        <div className="border rounded-4xl w-full p-5">

          <div className="grid grid-rows-6 p-3 h-full">
            <div>
              <h2 className="h2 my-5 ml-3">
                Contact Information
              </h2>
            </div>
            <div className="border rounded-tr-2xl rounded-tl-2xl w-full p-5
            hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl bg-white/5 flex items-center justify-center">
                    <FiMail className="text-violet-500 text-6xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold h3">Email</h4>
                    <p className="text-gray-400 h4 opacity-25">hello@aistudio.com</p>
                  </div>
                </div>

                <FiArrowRight className="text-gray-400 text-xl" />
              </div>
            </div>
            <div className="border w-full p-5
            hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl bg-white/5 flex items-center justify-center">
                    <FaWhatsapp className="text-green-500 text-6xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold h3">Whatsapp</h4>
                    <p className="text-gray-400 h4 opacity-25">+62 815 4721 2932</p>
                  </div>
                </div>

                <FiArrowRight className="text-gray-400 text-xl" />
              </div>
            </div>
            <div className="border w-full p-5
            hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl bg-white/5 flex items-center justify-center">
                    <FaInstagram className="text-pink-500 text-6xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold h3">Instagram</h4>
                    <p className="text-gray-400 h4 opacity-25">@impervious.generation.g7</p>
                  </div>
                </div>

                <FiArrowRight className="text-gray-400 text-xl" />
              </div>
            </div>
            <div className="border w-full p-5
            hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl bg-white/5 flex items-center justify-center">
                    < FaMapMarkedAlt className="text-violet-500 text-6xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold h3">Location</h4>
                    <p className="text-gray-400 h4 opacity-25">Kalianda, Lampung Selatan</p>
                  </div>
                </div>

                <FiArrowRight className="text-gray-400 text-xl" />
              </div>
            </div>
            <div className="border rounded-br-2xl rounded-bl-2xl w-full p-5
            hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-xl bg-white/5 flex items-center justify-center">
                    <FiInfo className="text-violet-500 text-6xl" />
                  </div>

                  <div>
                    <h4 className="font-semibold h3">Status Online</h4>
                    <p className="text-gray-400 h4 opacity-25">Usually replies within 1 hour</p>
                  </div>
                </div>

                <FiArrowRight className="text-gray-400 text-xl" />
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-5">
          <div className="border rounded-4xl w-full h-full p-5">
            <div className="grid grid-rows-[1.57fr_2fr_2fr_3fr_0.5fr] p-3 h-full">
              <h2 className="h2 mt-5">
                Send a Message
              </h2>
              <div className="grid grid-cols-2 gap-5">
                <div className="border w-full rounded-3xl px-7 p-4">
                  <label className="h4 my-3">
                    Your Name
                  </label>
                  <input type="text"
                    placeholder="Enter your name"
                    className="w-full bg-transparent outline-none 
              border-none text-white placeholder font-normal 
              placeholder:text-white/25" />
                </div>
                <div className="border w-full rounded-3xl px-7 p-4">
                  <label className="h4 my-3">
                    Your Email
                  </label>
                  <input type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent outline-none 
              border-none text-white placeholder font-normal 
              placeholder:text-white/25" />
                </div>
              </div>
              <div className="border w-full rounded-3xl px-7 pt-5 my-3">
                <label className="h4">
                  Subject
                </label>
                <textarea type="text"
                  placeholder="How can i help you?"
                  className="w-full bg-transparent outline-none 
              border-none text-white placeholder font-normal 
              placeholder:text-white/25 mt-1" />
              </div>
              <div className="border w-full rounded-3xl px-7 p-5 my-3">
                <label className="h4 my-3">
                  Message
                </label>
                <textarea type="text"
                  placeholder="Write your message here..."
                  className="w-full bg-transparent outline-none 
              border-none text-white placeholder font-normal 
              placeholder:text-white/25 mt-1" />
              </div>
              <button type="submit"
                onClick={() => {
                  console.log("View Services diklik");
                }}
                className="block h-[clamp(4.25rem,4vw,5rem)] px-[clamp(1rem,0.75vw,2.5rem)] rounded-3xl mt-7
        text-white font-semibold text-[clamp(1rem,1.5vw,1.5rem)] border w-60
        hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
                Send Message
              </button>
            </div>

          </div>

        </form>
      </div>
      <div className="border rounded-4xl w-full mb-5 p-5">
        <h2 className="subheading-box ">
          Quick Contact
        </h2>
        <h5 className="note-box mb-2">
          Reach out to me directly through your preferred platform
        </h5>
        <div className="grid grid-cols-4 gap-10">
          <div className="quick-contact">
            <div className="grid grid-cols-[1fr_3fr_1fr]">
              <FaWhatsapp className="text-green-500 fa-size m-auto" />
              <div>
                <h2 className="subheading-box text-[clamp(1rem,1.5vw,1.5rem)]">
                  Whatsapp
                </h2>
                <h5 className="note-box my-2 text-[clamp(0.75rem,1vw,1rem)]">
                  Chat Now
                </h5>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
          <div className="quick-contact">
            <div className="grid grid-cols-[1fr_3fr_1fr]">
              <FaDiscord className="text-indigo-500 fa-size m-auto " />
              <div>
                <h2 className="subheading-box text-[clamp(1rem,1.5vw,1.5rem)]">
                  Discord
                </h2>
                <h5 className="note-box my-2 text-[clamp(0.75rem,1vw,1rem)]">
                  Join Server
                </h5>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
          <div className="quick-contact">
            <div className="grid grid-cols-[1fr_3fr_1fr]">
              <FaTelegramPlane className="text-sky-500 fa-size m-auto" />
              <div>
                <h2 className="subheading-box text-[clamp(1rem,1.5vw,1.5rem)]">
                  Telegram
                </h2>
                <h5 className="note-box my-2 text-[clamp(0.5rem,0.vw,1rem)]">
                  Send Message
                </h5>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
          <div className="quick-contact">
            <div className="grid grid-cols-[1fr_3fr_1fr]">
              <FaInstagram className="text-pink-500 fa-size m-auto" />
              <div>
                <h2 className="subheading-box ">
                  Instagram
                </h2>
                <h5 className="note-box my-2 text-[clamp(0.75rem,1vw,1rem)]">
                  Message Us
                </h5>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-4xl w-full  p-5">
        <h2 className="subheading-box mb-2">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-2 gap-10 px-5 py-2">
          <div className="border aspect-12.5/1 rounded-2xl
          hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
            <div className="grid grid-cols-[9fr_1fr]">
              <div>
                <h3 className="h3 py-5 pl-5">
                  What is Impervious Generation?
                </h3>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
          <div className="border aspect-12.5/1 rounded-2xl
          hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
            <div className="grid grid-cols-[9fr_1fr]">
              <div>
                <h3 className="h3 py-5 pl-5">
                  How can I join Impervious Generation?
                </h3>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 px-5 py-2">
          <div className="border aspect-12.5/1 rounded-2xl
          hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
            <div className="grid grid-cols-[9fr_1fr]">
              <div>
                <h3 className="h3 py-5 pl-5">
                  Is this website free to use?
                </h3>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
          <div className="border aspect-12.5/1 rounded-2xl
          hover:bg-white/15 backdrop-blur-sm transition-all
            duration-200 ease-in-out">
            <div className="grid grid-cols-[9fr_1fr]">
              <div>
                <h3 className="h3 py-5 pl-5">
                  I found a bug or technical issue. What should I do?
                </h3>
              </div>
              <div className="m-auto">
                <FiArrowRight className="arrow-size" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Contact;