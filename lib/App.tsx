import { useState } from 'react'
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("message", (data) => {
        setMessages((prev) => [...prev, data]);
    });


    return () => {
        socket.off("message");
    };
}, []);


const sendMessage = () => {
    if (message) {
        socket.emit("message", message);
        setMessage("");
     }
 };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
                        <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Wpisz wiadomość..."
            />
            <button onClick={sendMessage}>Wyślij</button>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            {messages.flat().map((message, index) => (
                <div key={index} style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                margin: "8px",
                maxWidth: "400px",
                textAlign: "left",
                backgroundColor: "#f9f9f9",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}>
                <p><strong>Date:</strong> {new Date(message.readingDate).toLocaleString()}</p>
                <p><strong>Temperature:</strong> {message.temperature}°C</p>
                <p><strong>Humidity:</strong> {message.humidity}%</p>
                <p><strong>Pressure:</strong> {message.pressure} hPa</p>
                <p><strong>Device ID:</strong> {message.deviceId}</p>
                </div>
            ))}
            </div>
        </div>
  );
}

export default App
