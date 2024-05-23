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
          className="hover:bg-gray-700 hover:p-5 rounded px-5 p-8"
          onClick={() => (window.location.hash = "#")}
        >
          <span class="material-symbols-rounded">home</span>
        </button>
        <button
          className="hover:bg-gray-700 hover:p-5 px-5 rounded p-8"
          onClick={() => (window.location.hash = "#settings")}
        >
          <span class="material-symbols-rounded">settings</span>
        </button>
      </footer>
    </div>
  );
}

export default App;
