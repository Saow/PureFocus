import "./App.css";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Settings from "./components/Settings";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#settings") {
        setCurrentPage("settings");
      } else {
        setCurrentPage("home");
      }
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Call handleHashChange initially to set the initial page based on the hash
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="overflow-y-hidden">
  <div className="flex-grow">
    {currentPage === "home" && <Home />}
    {currentPage === "settings" && <Settings />}
  </div>
  <footer className="bg-gray-800 text-white flex justify-evenly absolute bottom-0 w-full">
    <button
      className="hover:bg-gray-700 rounded px-4 py-2"
      onClick={() => (window.location.hash = "#")}
    >
      Home
    </button>
    <button
      className="hover:bg-gray-700  rounded p-8"
      onClick={() => (window.location.hash = "#settings")}
    >
      Settings
    </button>
  </footer>
</div>
  );
}

export default App;
