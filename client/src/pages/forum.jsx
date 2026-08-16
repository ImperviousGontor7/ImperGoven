import { useState } from "react";

import { FaChevronRight, FaPaperPlane } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Forum() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, welcome to the forum!",
      sender: "other",
      name: "Ahmad",
      time: "08:15",
      avatar: "A",
    },
    {
      id: 2,
      text: "Thank you, brother.",
      sender: "me",
      name: "You",
      time: "08:16",
      avatar: "Y",
    },
  ]);

  const [input, setInput] = useState("");

  const formatTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleSend = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    const newMessage = {
      id: Date.now(),
      text: trimmed,
      sender: "me",
      name: "You",
      time: formatTime(),
      avatar: "Y",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-[2fr_5fr]">
        <div className="border rounded-4xl p-5 my-7.5 ml-10 mr-5">
          <h2 className="h2 mt-7.5 ml-5 mb-5">
            FAQ
          </h2>
          <div className="p-5">
            <div className="grid gap-10 auto-rows-max mb-10">
              <div className="border p-5 rounded-3xl">
                <div className="grid grid-cols-[2fr_9fr] gap-5">
                  <div className="flex-1 flex-col">
                    <h3 className="h3 my-4">
                      [Icon]
                    </h3>
                  </div>
                  <div>
                    <details className="group p-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="faq-title">
                          What Is the General Forum?
                        </h3>
                        <FaChevronRight className="transition-transform duration-500 group-open:rotate-90 text-xl" />
                      </summary>
                      <h4 className="faq-detail">
                        The General Forum is a place for members to share
                        knowledge, ask questions, exchange ideas, and engage
                        in respectful discussions. Every conversation should
                        reflect Islamic values, good manners (akhlaq), and
                        mutual respect.
                      </h4>
                    </details>
                  </div>

                </div>
              </div>
              <div className="border p-5 rounded-3xl">
                <div className="grid grid-cols-[2fr_9fr] gap-5">
                  <div className="flex-1 flex-col">
                    <h3 className="h3 my-4">
                      [Icon]
                    </h3>
                  </div>
                  <div>
                    <details className="group p-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="faq-title">
                          Who Can Join the Forum?
                        </h3>
                        <FaChevronRight className="transition-transform duration-500 group-open:rotate-90 text-xl" />
                      </summary>
                      <h4 className="faq-detail">
                        We apologize, but this forum is exclusively for members
                        of the Gontor Alumni Class of 2027. This ensures that
                        discussions remain relevant, respectful, and aligned with
                        the shared values, discipline, and brotherhood established
                        during our time at Gontor.
                      </h4>
                    </details>
                  </div>

                </div>
              </div>
              <div className="border p-5 rounded-3xl">
                <div className="grid grid-cols-[2fr_9fr] gap-5">
                  <div className="flex-1 flex-col">
                    <h3 className="h3 my-4">
                      [Icon]
                    </h3>
                  </div>
                  <div>
                    <details className="group p-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="faq-title">
                          What Are the Rules for Posting and Commenting?
                        </h3>
                        <FaChevronRight className="transition-transform duration-500 group-open:rotate-90 text-xl" />
                      </summary>
                      <h4 className="faq-detail">
                        Members must communicate politely, avoid offensive
                        language, insults, slander (ghibah and fitnah), hate
                        speech, and unnecessary arguments. Discussions should
                        be constructive, truthful, and beneficial, in accordance
                        with Islamic teachings and the discipline of the community.
                      </h4>
                    </details>
                  </div>

                </div>
              </div>



              <div className="border p-5 rounded-3xl">
                <div className="grid grid-cols-[2fr_9fr] gap-5">
                  <div className="flex-1 flex-col">
                    <h3 className="h3 my-4">
                      [Icon]
                    </h3>
                  </div>
                  <div>
                    <details className="group p-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="faq-title">
                          How Should I Conduct Myself?
                        </h3>
                        <FaChevronRight className="transition-transform duration-500 group-open:rotate-90 text-xl" />
                      </summary>
                      <h4 className="faq-detail">
                        Treat everyone with respect, humility, and sincerity. Be
                        patient when differences of opinion arise, avoid provoking
                        conflicts, and remember that every word reflects your
                        character. As Muslims, we are encouraged to speak what is
                        good or remain silent.
                      </h4>
                    </details>
                  </div>

                </div>
              </div>
              <div className="border p-5 rounded-3xl">
                <div className="grid grid-cols-[2fr_9fr] gap-5">
                  <div className="flex-1 flex-col">
                    <h3 className="h3 my-4">
                      [Icon]
                    </h3>
                  </div>
                  <div>
                    <details className="group p-3">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="faq-title">
                          Is the Forum Moderated?
                        </h3>
                        <FaChevronRight className="transition-transform duration-500 group-open:rotate-90 text-xl" />
                      </summary>
                      <h4 className="faq-detail">
                        Yes. The forum is actively monitored by moderators to ensure
                        discussions remain respectful, safe, and consistent with
                        Islamic principles and community guidelines. Content that
                        violates these rules may be edited or removed, and appropriate
                        action may be taken when necessary.
                      </h4>
                    </details>
                  </div>

                </div>
              </div>
            </div>
            <div className="border p-5 rounded-3xl">
              <div className="grid-grid-rows-[8fr_1fr] gap-5">
                <div>
                  <div className="grid grid-cols-[2fr_9fr] gap-5">
                    <div className="mb-15">
                      <h3 className="h3 my-4">
                        [Icon]
                      </h3>
                    </div>
                    <div>
                      <h3 className="faq-title">
                        Do You Have Any Other Questions?
                      </h3>
                      <h4 className="faq-detail">
                        If your question is not covered here, feel free to contact our
                        moderators or administrators. We are happy to assist you and
                        help make this forum a welcoming and beneficial place for everyone.
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="my-5 mt-10">
                  <div className="border rounded-3xl mx-auto 
                  w-2/3 h-25 block py-7.5 px-15 bg-amber-400 backdrop-transparant">
                    <div className="flex items-center justify-between ">

                      <div className="flex items-center gap-4">

                        <div className="my-auto">
                          <h4 className="font-semibold h2">Contact Us</h4>
                        </div>
                      </div>

                      <FiArrowRight className="text-gray-400 text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-7.5 ml-5 mr-10">
          <div className="grid grid-rows-[4fr_10fr] ">
            <div className="border border-b-0  
            rounded-tr-4xl rounded-tl-4xl p-10
            ">
              <div className="grid grid-cols-[3fr_1fr]">
                <div>
                  <h1 className="heading">
                    GENERAL FORUM
                  </h1>
                  <h2 className="h2">
                    An open discussion space for all participants.
                    Share your ideas, ask questions, and engage with
                    each other in meaningful conversations!
                  </h2>
                </div>
                <div>
                  <div className="border w-3/4 aspect-5/1 rounded-2xl ml-25
                  bg-amber-400 backdrop-blur-xl py-7.5">
                    <h2 className="h2 text-center">
                      Forum Guidelines
                    </h2>
                  </div>
                </div>
              </div>

            </div>
            <div className="h-screen border border-t-0 rounded-br-4xl rounded-bl-4xl">
              <div className="w-full h-full flex flex-col overflow-hidden">

                {/* Messages */}
                <div className="flex-1 p-10 overflow-y-auto space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-end gap-3 ${msg.sender === "me" ? "flex-row-reverse" : "flex-row"
                        }`}
                    >
                      {/* Profile */}
                      <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-semibold shrink-0">
                        {msg.avatar}
                      </div>

                      {/* Message content */}
                      <div
                        className={`max-w-[75%] flex flex-col ${msg.sender === "me"
                          ? "items-end text-right"
                          : "items-start text-left"
                          }`}
                      >
                        <div className="flex items-center gap-2 text-xs mb-1">
                          <span className="font-medium">{msg.name}</span>
                          <span>{msg.time}</span>
                        </div>

                        <div
                          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.sender === "me"
                            ? "bg-blue-500 text-white rounded-br-md"
                            : "bg-gray-200 text-gray-900 rounded-bl-md"
                            }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="p-5 py-5 border-t flex gap-3 h-25 ">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="flex-1 border rounded-full px-4 py-2 text-xl outline-none focus:ring-2 focus:ring-amber-400"
                  />

                  <button
                    onClick={handleSend}
                    className="bg-amber-500 text-white w-13.5 h-13.5 rounded-full 
  hover:bg-amber-600 transition flex items-center justify-center"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Forum;