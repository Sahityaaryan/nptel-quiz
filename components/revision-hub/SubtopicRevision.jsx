"use client";
import { useState, useEffect } from "react";
import { getSubtopicData } from "@/app/lib/actions";
import NotesModal from "./NotesModal";

export default function SubtopicRevision({ courseId, subtopics }) {
  const [selectedSubtopicId, setSelectedSubtopicId] = useState("");
  const [quizData, setQuizData] = useState([]);
  const [notes, setNotes] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedSubtopicId) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const data = await getSubtopicData({
            subtopicId: selectedSubtopicId,
          });
          setQuizData(data.quizzes);
          setNotes(data.notes);
        } catch (err) {
          console.error("Error fetching subtopic data:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [selectedSubtopicId]);

  return (
    <div className="relative min-h-screen">
      {/* Top Right Select Menu */}
      <div className="flex justify-end mb-4">
        <select
          className="select select-bordered w-full sm:max-w-xs"
          value={selectedSubtopicId}
          onChange={(e) => setSelectedSubtopicId(e.target.value)}
        >
          <option value="">Select a Subtopic</option>
          {subtopics.map((subtopic) => (
            <option key={subtopic.id} value={subtopic.id}>
              {subtopic.title}
            </option>
          ))}
        </select>
      </div>

      {/* Quiz List */}
      <div className="card bg-base-100 shadow-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold text-primary mb-4">
          Quiz Questions
        </h2>

        {loading ? (
          <p className="text-base-content">Loading...</p>
        ) : selectedSubtopicId && quizData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {quizData.map((quiz) => {
              const questions = quiz.questions;

              return (
                <div
                  key={quiz.id}
                  className="w-full bg-base-200 rounded-xl p-4 shadow-md border border-base-300"
                >
                  <h3 className="text-lg font-medium mb-3">{quiz.title}</h3>
                  <div className="space-y-3">
                    {questions.map((question, qIndex) => (
                      <div key={qIndex}>
                        <p className="text-sm font-medium text-base-content break-words">
                          Q{qIndex + 1}: {question.question}
                        </p>
                        <p className="text-sm italic text-gray-500 border-l-4 border-primary pl-3 mt-1">
                          Correct Answer: {question.correctAnswer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-base-content">
            Select a subtopic to view quizzes.
          </p>
        )}

        {notes && (
          <button
            className="btn btn-primary mt-6 mx-auto w-2xs"
            onClick={() => setIsModalOpen(true)}
          >
            View Notes
          </button>
        )}
      </div>

      {/* Notes Modal */}
      {isModalOpen && (
        <NotesModal notes={notes} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
