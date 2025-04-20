"use client";
import { useEffect } from "react";

export default function NotesModal({ notes, onClose }) {
  useEffect(() => {
    // Prevent right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Prevent keyboard shortcuts and PrintScreen
    const handleKeyDown = (e) => {
      if (
        e.key === "PrintScreen" ||
        (e.ctrlKey && ["p", "P", "s", "S"].includes(e.key)) ||
        (e.metaKey && ["p", "P", "s", "S"].includes(e.key))
      ) {
        e.preventDefault();
        alert("Screenshots and saving are disabled to protect course content.");
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // // Clear clipboard periodically to disrupt PrintScreen
    // const clearClipboard = setInterval(() => {
    //   navigator.clipboard.writeText("").catch((err) => {
    //     console.error("Failed to clear clipboard:", err);
    //   });
    // }, 1000);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      // clearInterval(clearClipboard);
    };
  }, []);

  // Convert Google Drive link to embeddable URL
  const embedUrl = notes.replace("/view?usp=sharing", "/preview");

  return (
    <div className="modal modal-open">
      <div
        className="modal-box relative w-[95%] max-w-5xl p-4 select-none max-h-[90vh] overflow-auto"
        style={{ userSelect: "none" }}
      >
        {/* Watermark */}
        <div className="absolute inset-0 pointer-events-none z-20 opacity-20 flex items-center justify-center text-2xl sm:text-4xl text-gray-500 rotate-45">
          Quiz Masalaa - Protected Content
        </div>

        {/* Semi-opaque Overlay */}
        <div className="absolute inset-0 z-10 opacity-5 bg-gray-100" />

        {/* Modal Content */}
        <div className="relative z-30 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-primary">Notes</h3>

          {/* Scrollable Iframe */}
          <div className="w-full h-[60vh] overflow-auto rounded border">
            <iframe
              src={embedUrl}
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
              title="Notes"
            />
          </div>

          <p className="text-sm text-gray-500">
            Content protected by Quiz Masalaa. Unauthorized reproduction is
            prohibited.
          </p>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
            by Sahitya
          </p>

          <div className="modal-action">
            <button className="btn btn-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
