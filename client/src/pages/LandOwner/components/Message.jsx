import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io("http://localhost:5000");
const userName = nanoid(5);

export default function Message() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const chatContainerRef = useRef(null);

  const sendChat = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const newMessage = {
        content: message,
        sender: userName,
      };
      socket.emit("chat", newMessage);
      setMessage("");
    }
  };

  useEffect(() => {
    // Scroll the chat container to the bottom after new messages are added
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;

    // Add the socket event listener when the component mounts
    socket.on("chat", (payload) => {
      setChat((prevChat) => [...prevChat, payload]);
    });

    // Clean up the socket event listener when the component unmounts
    return () => {
      socket.off("chat");
    };
  }, [chat]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendChat(e);
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="h-14  bg-blue-500 flex justify-around">
          <div className="">
            <h1 className="mt-5 ml-auto text-white text-xs ">
              Shayne Meian Ejercito
            </h1>
          </div>
          <h1 className="text-center text-white font-semibold mt-3.5">
            Chat Box
          </h1>
          <h1 className="invisible mt-3.5">Hiddennn</h1>
        </div>

        <div
          className="flex-1 p-4 overflow-y-auto"
          style={{ height: "calc(100% - 40px)" }}
          ref={chatContainerRef}
        >
          {chat.map((payload, index) => (
            <div
              key={index}
              className={`${
                payload.sender === userName ? "justify-end" : "justify-start"
              } flex mb-4`}
            >
              <div>
                {/* Name of the User */}
                <h1
                  className={`${
                    payload.sender === userName
                      ? "justify-end"
                      : "justify-start"
                  } flex text-xs mb-0.5`}
                >
                  {" "}
                  {payload.sender}
                </h1>
                {/* Name of the User */}
                <div
                  className={`${
                    payload.sender === userName
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  } rounded-lg px-4 py-2 lg:max-w-3xl md:max-w-3xl  break-words`}
                >
                  {payload.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={sendChat}>
          <div className="">
            <div className="border border-blue-500"></div>
            <div className="flex gap-2 ">
              <div className="m-auto">
                <label>
                  <div className="border rounded-xl mx-3 p-1 px-2 cursor-pointer ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="skyblue"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <input className="" hidden type="file" />
                  </div>
                </label>
              </div>
              <div className="w-full">
                <input
                  className="text-xs grow m-auto"
                  type="text"
                  name="chat"
                  value={message}
                  placeholder="Type here..."
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className=" px-3  bg-blue-500 text-white text-xs p-2 mt-2 rounded-full"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
