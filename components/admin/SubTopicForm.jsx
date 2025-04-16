'use client';
import { useState } from 'react';
import { addSubtopic } from '@/app/lib/actions';
// import { useRouter } from 'next/navigation';

export default function SubtopicForm({ courses }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // const router = useRouter();

  async function handleSubmit(formData) {
    try {
      const data = {
        courseId: formData.get('courseId'),
        title: formData.get('title'),
        description: formData.get('description'),
        notes: formData.get('notes'),
      };

      const result = await addSubtopic(data);
      setSuccess('Subtopic created successfully!');
      setError(null);
      // setTimeout(() => router.push('/admin/subtopics'), 2000);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Subtopic</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}
      {success && <div className="alert alert-success mb-4">{success}</div>}
      <form action={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label" htmlFor="courseId">
            <span className="label-text">Course</span>
          </label>
          <select id="courseId" name="courseId" className="select select-bordered" required>
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
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
          <label className="label" htmlFor="description">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="textarea textarea-bordered"
            required
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="notes">
            <span className="label-text">Notes</span>
          </label>
          <input
            type="text"
            id="notes"
            name="notes"
            className="input input-bordered"
            placeholder="Drive link of the notes"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Create Subtopic
        </button>
      </form>
    </div>
  );
}