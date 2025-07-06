// src/App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔐 Firebase Auth Context
import { FirebaseProvider } from "./contexts/FirebaseProvider";

// 🧱 Core Components
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";

// 🧠 Responsive Home Interface
import ResponsiveInterface from "./components/home/ResponsiveInterface";

// 👤 Characters
import CharacterGallery from "./components/CharacterGallery";
import CharacterProfile from "./components/profiles/CharacterProfile";
import SecureCharacterProfile from "./components/profiles/SecureCharacterProfile";

// 📺 Broadcast
import Broadcast from "./pages/broadcast/Broadcast";

// 📚 Books
import Book1 from "./pages/books/book1/Book1";
import Book2 from "./pages/books/book2/Book2";
import Book3 from "./pages/books/book3/Book3";

// 🧭 Lore
import Lore from "./pages/Lore";
import Races from "./pages/races/Races";
import POIHub from "./pages/POIHub";

// 🔐 Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// 📄 About
import About from "./pages/About";

// 💻 AI Boot Sequence
import AIBootup from "./components/home/AIBootup";

// 🗣 Voice Preloader
import { usePreloadVoices } from "./utils/usePreloadVoices";

function App() {
  const [bootComplete, setBootComplete] = useState(() => {
    return sessionStorage.getItem("bootCompleted") === "true";
  });

  usePreloadVoices(); // ✅ preload speechSynthesis voices early

  useEffect(() => {
    const unlock = () => {
      document.body.style.overflow = "auto";
    };
    unlock();
    const interval = setInterval(unlock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem("bootCompleted", "true");
    setBootComplete(true);
  };

  return (
    <FirebaseProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-black text-green-400 font-mono">
          {!bootComplete ? (
            <AIBootup onComplete={handleBootComplete} />
          ) : (
            <>
              <Navbar />
              <main className="px-6 py-8">
                <Routes>
                  {/* 🌐 Home */}
                  <Route path="/" element={<ResponsiveInterface />} />

                  {/* 👤 Characters */}
                  <Route path="/characters" element={<CharacterGallery />} />
                  <Route path="/characters/:slug" element={<SecureCharacterProfile />} />

                  {/* 📺 Broadcast */}
                  <Route path="/broadcast" element={<Broadcast />} />

                  {/* 📚 Books */}
                  <Route path="/books/book1" element={<Book1 />} />
                  <Route path="/books/book2" element={<Book2 />} />
                  <Route path="/books/book3" element={<Book3 />} />

                  {/* 🧭 Lore */}
                  <Route path="/lore" element={<Lore />} />
                  <Route path="/lore/races" element={<Races />} />
                  <Route path="/lore/pois/*" element={<POIHub />} />

                  {/* 🔐 Auth */}
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />

                  {/* 📄 About */}
                  <Route path="/about" element={<About />} />

                  {/* 🛑 404 */}
                  <Route
                    path="*"
                    element={
                      <div className="text-center text-red-500 text-xl py-20">
                        404 — Page not found
                      </div>
                    }
                  />
                </Routes>
              </main>
            </>
          )}
        </div>
      </Router>
    </FirebaseProvider>
  );
}

export default App;
