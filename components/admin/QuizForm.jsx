'use client';
import { useState, useEffect } from 'react';
import { addQuiz, getSubtopicsByCourse } from '@/app/lib/actions';
// import { useRouter } from 'next/navigation';

export default function QuizForm({ courses }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [subtopics, setSubtopics] = useState([]);
  // const router = useRouter();

  // Fetch subtopics when course changes
  useEffect(() => {
    async function fetchSubtopics() {
      if (selectedCourse) {
        try {
          const fetchedSubtopics = await getSubtopicsByCourse(selectedCourse);
          setSubtopics(fetchedSubtopics);
        } catch (err) {
          setError('Failed to load subtopics');
        }
      } else {
        setSubtopics([]);
      }
    }
    fetchSubtopics();
  }, [selectedCourse]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  async function handleSubmit(formData) {
    try {
      const data = {
        subtopicId: formData.get('subtopicId'),
        title: formData.get('title'),
        questions: questions.map((q, index) => ({
          question: formData.get(`question-${index}`),
          options: [
            formData.get(`option-${index}-0`),
            formData.get(`option-${index}-1`),
            formData.get(`option-${index}-2`),
            formData.get(`option-${index}-3`),
          ],
          correctAnswer: formData.get(`correctAnswer-${index}`),
        })),
        duration: Number(formData.get('duration')),
      };

      const result = await addQuiz(data);
      setSuccess('Quiz created successfully!');
      setError(null);
      // setTimeout(() => router.push('/admin/quizzes'), 2000);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Quiz</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}
      {success && <div className="alert alert-success mb-4">{success}</div>}
      <form action={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label" htmlFor="courseId">
            <span className="label-text">Course</span>
          </label>
          <select
            id="courseId"
            name="courseId"
            className="select select-bordered"
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="subtopicId">
            <span className="label-text">Subtopic</span>
          </label>
          <select
            id="subtopicId"
            name="subtopicId"
            className="select select-bordered"
            disabled={!selectedCourse}
            required
          >
            <option value="">Select Subtopic</option>
            {subtopics.map((subtopic) => (
              <option key={subtopic.id} value={subtopic.id}>
                {subtopic.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="title">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Questions</span>
          </label>
          {questions.map((q, index) => (
            <div key={index} className="space-y-2 mb-4 border p-4 rounded">
              <input
                type="text"
                name={`question-${index}`}
                placeholder="Question"
                className="input input-bordered w-full"
                required
              />
              {[0, 1, 2, 3].map((opt) => (
                <input
                  key={opt}
                  type="text"
                  name={`option-${index}-${opt}`}
                  placeholder={`Option ${opt + 1}`}
                  className="input input-bordered w-full"
                  required
                />
              ))}
              <input
                type="text"
                name={`correctAnswer-${index}`}
                placeholder="Correct Answer"
                className="input input-bordered w-full"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addQuestion}
            className="btn btn-secondary w-full"
          >
            Add Question
          </button>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="duration">
            <span className="label-text">Duration (minutes)</span>
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            className="input input-bordered"
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Create Quiz
        </button>
      </form>
    </div>
  );
}