"use client";

import { useState } from "react";
import Link from "next/link";
// import NotesModal from "./NotesModal"; // Adjust path if needed

import NotesModal from "../revision-hub/NotesModal";

export default function SubtopicsList({ courseId, subtopics }) {
  const [selectedNotes, setSelectedNotes] = useState(null);

  const openNotesModal = (notes) => {
    setSelectedNotes(notes);
  };

  const closeNotesModal = () => {
    setSelectedNotes(null);
  };

  return (
    <>
      <ul className="list bg-base-100 rounded-box shadow-md">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          <u>Subtopics</u>
        </li>
        {subtopics.map((subtopic, index) => (
          <li
            key={subtopic.id}
            className="list-row flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b last:border-b-0"
          >
            <div className="flex items-center mb-2 md:mb-0">
              <div>
                <div className="flex items-center">
                  <span className="font-bold uppercase text-sm md:text-base w-full break-words md:break-normal">
                    {index + 1}. {subtopic.title}
                  </span>
                </div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  Quiz
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row items-center mt-2 md:mt-0">
              <progress
                className="progress progress-secondary w-full md:w-56 mb-2 md:mb-0 mr-0 md:mr-2"
                value={subtopic.attemptedQuestions}
                max={subtopic.totalQuestions}
              />
              <Link href={`/courses/${courseId}/quiz/${subtopic.id}`}>
                <button className="btn btn-square btn-ghost">
                  <svg
                    className="size-[1.2em]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M6 3L20 12 6 21 6 3z"></path>
                    </g>
                  </svg>
                </button>
              </Link>
              {subtopic.notes ? (
                <button
                  className="btn btn-square btn-ghost"
                  onClick={() => openNotesModal(subtopic.notes)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-notebook-pen-icon lucide-notebook-pen"
                  >
                    <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
                    <path d="M2 6h4" />
                    <path d="M2 10h4" />
                    <path d="M2 14h4" />
                    <path d="M2 18h4" />
                    <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                  </svg>
                </button>
              ) : (
                <button
                  className="btn btn-square btn-ghost btn-disabled"
                  disabled
                  title="No notes available"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-notebook-pen-icon lucide-notebook-pen"
                  >
                    <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
                    <path d="M2 6h4" />
                    <path d="M2 10h4" />
                    <path d="M2 14h4" />
                    <path d="M2 18h4" />
                    <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
                  </svg>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
      {selectedNotes && (
        <NotesModal notes={selectedNotes} onClose={closeNotesModal} />
      )}
    </>
  );
}
