import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useFirebase } from "../../contexts/FirebaseProvider";
import NavbarLogo from "./NavbarLogo";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarUserBlock from "./NavbarUserBlock";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const [editingName, setEditingName] = useState(false);

  const { uid, user, isAuthenticated, loading } = useFirebase();
  const location = useLocation();
  const navigate = useNavigate();
  const booksDropdownRef = useRef(null);

  // ✅ Fix: Run scroll check immediately
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // 👈 fixes flash glitch
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setBooksOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!booksDropdownRef.current?.contains(e.target)) {
        setBooksOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !uid) return;
    const ref = doc(db, "users", uid);
    const unsub = onSnapshot(ref, (snap) => {
      const data = snap.data();
      if (data?.username) setUsername(data.username);
    });
    return () => unsub();
  }, [isAuthenticated, uid]);

  const handleLogout = async () => {
    await signOut(auth);
    setUsername(null);
    navigate("/login");
  };

  const saveUsername = async () => {
    if (!uid || !username) return;
    await updateDoc(doc(db, "users", uid), { username });
    setEditingName(false);
  };

  const navLinkClass = (path) =>
    `relative group flex items-center gap-1 transition ${
      location.pathname === path
        ? "text-yellow-400 after:scale-x-100"
        : "hover:text-yellow-300"
    } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-yellow-400 after:scale-x-0 after:transition-transform after:origin-left group-hover:after:scale-x-100`;

  if (loading) return null;

  return (
    <header
      className={`site-navbar ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-black"
      } text-green-300 font-mono border-b border-yellow-500 sticky top-0 z-[999] transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 relative">
        <NavbarLogo />

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-yellow-400 sm:hidden text-2xl"
        >
          ☰
        </button>

        <nav className="hidden sm:flex items-center gap-5 text-xs sm:text-sm uppercase tracking-wide relative z-[999]">
          <Link to="/characters" className={navLinkClass("/characters")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Character Gallery
          </Link>

          <Link to="/lore" className={navLinkClass("/lore")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Lore
          </Link>

          <div className="relative" ref={booksDropdownRef}>
            <button
              onClick={() => setBooksOpen(!booksOpen)}
              className="relative group flex items-center gap-1 hover:text-yellow-300 transition"
            >
              <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
              Trilogy 1 ▾
            </button>

            {booksOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-zinc-900 border border-yellow-500 rounded-lg shadow-xl z-[9999] animate-dropdown-in">
                <div className="p-3 space-y-2">
                  <Link
                    to="/books/book1"
                    onClick={() => setBooksOpen(false)}
                    className="block px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition font-mono text-sm"
                  >
                    📘 Book 1: Return of Iztan
                  </Link>
                  <Link
                    to="/books/book2"
                    onClick={() => setBooksOpen(false)}
                    className="block px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition font-mono text-sm"
                  >
                    📙 Book 2: A New World Order
                  </Link>
                  <Link
                    to="/books/book3"
                    onClick={() => setBooksOpen(false)}
                    className="block px-4 py-2 rounded hover:bg-yellow-400 hover:text-black transition font-mono text-sm"
                  >
                    📗 Book 3: Nerulean Invasion
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/broadcast" className={navLinkClass("/broadcast")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            Broadcast
          </Link>

          <Link to="/about" className={navLinkClass("/about")}>
            <span className="inline-block h-2 w-1 bg-yellow-400 rounded-sm animate-pulse" />
            About the Creator
          </Link>

          <NavbarUserBlock
            isAuthenticated={isAuthenticated}
            username={username}
            user={user}
            editingName={editingName}
            setEditingName={setEditingName}
            setUsername={setUsername}
            saveUsername={saveUsername}
            handleLogout={handleLogout}
            navLinkClass={navLinkClass}
          />
        </nav>
      </div>

      <NavbarMobileMenu
        open={mobileOpen}
        isAuthenticated={isAuthenticated}
        user={user}
        username={username}
        handleLogout={handleLogout}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
