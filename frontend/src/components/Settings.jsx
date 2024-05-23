import React from "react";

function Settings() {
  const resetLocalStorage = () => {
    localStorage.removeItem("totalAppOpenings");
    localStorage.removeItem("totalTimerUses");
    alert("Total app openings have been reset.");
  };

  // functionality for the settings page


  return (
    <div className="p-5">
      <h1>Settings</h1>
      <p>Settings page content</p>
      <button
        className="bg-red-400 p-2 rounded-md hover:bg-red-500 transition-all mt-4"
        onClick={resetLocalStorage}
      >
        Reset Total App Openings
      </button>
    </div>
  );
}

export default Settings;
