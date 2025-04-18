'use client';
import { useState } from 'react';
import { addCourse } from '@/app/lib/actions';
// import { useRouter } from 'next/navigation';
import { courseCategory } from '@/data/category';

export default function CourseForm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  // const router = useRouter();

  async function handleSubmit(formData) {
    try {
      const data = {
        title: formData.get('title'),
        description: formData.get('description'),
        thumbnail: formData.get('thumbnail'),
        price: Number(formData.get('price')),
        category: formData.get('category'),
        difficulty: formData.get('difficulty'),
        duration: Number(formData.get('duration')),
      };

      const result = await addCourse(data);
      // console.log("[course created] ", result);
      setSuccess('Course created successfully!');
      setError(null);
      // setTimeout(() => router.push('/admin/courses'), 2000);
    } catch (err) {
      setError(err.message);
      setSuccess(null);
    }
  }

  return (
    <div className="card bg-base-100 shadow-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Course</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}
      {success && <div className="alert alert-success mb-4">{success}</div>}
      <form action={handleSubmit} className="space-y-4">
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
          <label className="label" htmlFor="thumbnail">
            <span className="label-text">Thumbnail URL</span>
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="price">
            <span className="label-text">Price (&#x20b9;)</span>
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="input input-bordered"
            min="0"
            step="0.01"
            required
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="category">
            <span className="label-text">Category</span>
          </label>
          <select id="category" name="category" className="select select-bordered" required>
            <option value="">Select Category</option>

            {courseCategory.map((category)=>{
                return (<option value={category.value}>{category.title}</option>);
            })}
          </select>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="difficulty">
            <span className="label-text">Difficulty</span>
          </label>
          <select id="difficulty" name="difficulty" className="select select-bordered" required>
            <option value="">Select Difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
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
          Create Course
        </button>
      </form>
    </div>
  );
}