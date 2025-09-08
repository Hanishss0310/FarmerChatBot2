import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import FarmerChatbotStats from "./FarmerChatbotStats";
import FeaturesSection from "./FeaturesSection";
import Footer from "./Footer";
import SuccessStories from "./SuccessStories";
import {
  MessageCircle,
  X,
  Menu,
  Trash2,
  Mic,
  Send,
  Paperclip,
  Sprout,
  BarChart3,
  Bot,
} from "lucide-react";

function HomeIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("Farmer Chatbot");
  const [isModelMenuOpen, setIsModelMenuOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [listening, setListening] = useState(false);

  const recognitionRef = useRef(null);

  // Setup SpeechRecognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognitionRef.current.onend = () => setListening(false);
    }
  }, []);

  const handleSend = () => {
    if (input.trim() === "" && !file) return;

    if (file) {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: `📎 ${file.name}`, file },
      ]);
      setFile(null);
    } else {
      setMessages((prev) => [...prev, { sender: "user", text: input }]);
    }

    setInput("");

    // Simulated bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: `Response from ${selectedModel}` },
      ]);
    }, 800);
  };

  const handleClear = () => {
    setMessages([]);
  };

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setInput(uploadedFile.name);
    }
  };

  const toggleVoice = () => {
    if (!recognitionRef.current) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    if (listening) {
      recognitionRef.current.stop();
      setListening(false);
    } else {
      recognitionRef.current.start();
      setListening(true);
    }
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FarmerChatbotStats />
      <FeaturesSection />
      <SuccessStories />
      <Footer />

      {/* Floating Bot Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
      >
        <MessageCircle size={28} />
      </button>

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-[9999] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b bg-purple-600 text-white">
          <div className="flex items-center gap-3">
            <button onClick={() => setIsModelMenuOpen(!isModelMenuOpen)}>
              <Menu size={24} />
            </button>
            <h2 className="text-lg font-semibold">{selectedModel}</h2>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Model Selection Dropdown */}
        {isModelMenuOpen && (
          <div className="absolute top-14 right-0 w-60 bg-white shadow-lg border rounded-md z-[10000]">
            <button
              onClick={() => {
                setSelectedModel("Farmer Chatbot");
                setIsModelMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full p-3 hover:bg-purple-100 text-left"
            >
              <Sprout size={18} /> Farmer Chatbot
            </button>
            <button
              onClick={() => {
                setSelectedModel("Analytics Bot");
                setIsModelMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full p-3 hover:bg-purple-100 text-left"
            >
              <BarChart3 size={18} /> Analytics Bot
            </button>
            <button
              onClick={() => {
                setSelectedModel("General Assistant");
                setIsModelMenuOpen(false);
              }}
              className="flex items-center gap-2 w-full p-3 hover:bg-purple-100 text-left"
            >
              <Bot size={18} /> General Assistant
            </button>
          </div>
        )}

        {/* Chat Window */}
        <div className="flex flex-col h-[calc(100%-120px)] p-4 overflow-y-auto">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center mt-10">
              Start chatting with {selectedModel}...
            </p>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-purple-600 text-white"
                    : "mr-auto bg-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>

        {/* Chat Input Area */}
        <div className="flex items-center gap-2 p-3 border-t bg-gray-50">
          <button
            onClick={handleClear}
            className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            <Trash2 size={18} />
          </button>

          {/* Hidden File Input */}
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileUpload}
          />
          <label
            htmlFor="fileInput"
            className="p-2 bg-gray-300 hover:bg-gray-400 rounded-full cursor-pointer"
          >
            <Paperclip size={18} />
          </label>

          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          {/* Voice Button */}
          <button
            onClick={toggleVoice}
            className={`p-2 rounded-full ${
              listening
                ? "bg-red-500 text-white"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <Mic size={18} />
          </button>

          <button
            onClick={handleSend}
            className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeIndex;
