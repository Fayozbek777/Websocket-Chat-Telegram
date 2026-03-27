import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  const socketRef = useRef(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8000/ws");
    socketRef.current = socket;

    socket.onopen = () => {
      setIsConnected(true);
      setMessages((prev) => [...prev, "✅ Ulandi"]);
    };

    socket.onmessage = (e) => {
      setMessages((prev) => [...prev, e.data]);
    };

    socket.onclose = () => {
      setIsConnected(false);
      setMessages((prev) => [...prev, "❌ Uzildi"]);
    };

    socket.onerror = () => {
      setMessages((prev) => [...prev, "⚠️ Xatolik"]);
    };

    return () => socket.close();
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    if (socketRef.current && isConnected) {
      socketRef.current.send(input);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">🔥 WebSocket Chat + Telegram</h1>

      <p className="status">
        Status: <b>{isConnected ? "🟢 Connected" : "🔴 Disconnected"}</b>
      </p>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className="message">
            {msg}
          </div>
        ))}
      </div>

      <div className="input-area">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Xabar yoz..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
