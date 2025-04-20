"use client";
import { useState, useEffect } from "react";
import NotesModal from "@/components/revision-hub/NotesModal";

export default function NotesViewer({ params }) {
  const [notes, setNotes] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { subtopicId } = await params;
        const data = await getSubtopicData({
          subtopicId,
        });
        console.log("data: ", data);
        setNotes(data.notes);
      } catch (err) {
        console.error("Error fetching subtopic data:", err);
      }
    };
    fetchData();
  });

  return (
    <div>
      {isModalOpen && (
        <NotesModal notes={notes} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
