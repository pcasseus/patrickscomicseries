import React from "react";
import { Link } from "react-router-dom";

export default function NavbarMobileMenu({
  open,
  isAuthenticated,
  user,
  username,
  handleLogout,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="sm:hidden bg-black border-t border-yellow-500 text-yellow-300 px-6 py-6 space-y-5 text-sm font-mono z-50">
      <div className="space-y-4">
        <Link to="/characters" className="block hover:text-yellow-400" onClick={onClose}>
          Character Gallery
        </Link>
        <Link to="/lore" className="block hover:text-yellow-400" onClick={onClose}>
          Lore
        </Link>
        <Link to="/books/book1" className="block hover:text-yellow-400" onClick={onClose}>
          📘 Book 1
        </Link>
        <Link to="/books/book2" className="block hover:text-yellow-400" onClick={onClose}>
          📙 Book 2
        </Link>
        <Link to="/books/book3" className="block hover:text-yellow-400" onClick={onClose}>
          📗 Book 3
        </Link>
        <Link to="/broadcast" className="block hover:text-yellow-400" onClick={onClose}>
          Broadcast
        </Link>
        <Link to="/about" className="block hover:text-yellow-400" onClick={onClose}>
          About the Creator
        </Link>
      </div>

      {isAuthenticated ? (
        <div className="pt-4 border-t border-yellow-800 space-y-3">
          <div className="text-cyan-300 font-bold break-words">
            {username || user?.email}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-center text-red-400 border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-black transition uppercase font-bold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="pt-4 border-t border-yellow-800 space-y-3">
          <Link
            to="/login"
            onClick={onClose}
            className="block w-full text-center border border-yellow-400 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition uppercase font-bold"
          >
            Login
          </Link>
          <Link
            to="/register"
            onClick={onClose}
            className="block w-full text-center border border-yellow-400 text-yellow-300 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition uppercase font-bold"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
