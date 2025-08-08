import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

function Upload() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    genre: "",
    topic: "",
    description: "",
    file: null,
    cover_image: null,
  });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }

    axios.post(`${API_BASE_URL}/api/books/`, data)
      .then(res => alert("Uploaded successfully!"))
      .catch(err => console.error(err));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Upload eBook</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" name="title" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" name="author" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Publisher</label>
          <input type="text" name="publisher" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input type="text" name="genre" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Topic</label>
          <input type="text" name="topic" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" rows="4" onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">eBook File</label>
          <input type="file" name="file" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-4">
          <label className="form-label">Cover Image</label>
          <input type="file" name="cover_image" className="form-control" onChange={handleChange} />
        </div>

        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
}

export default Upload;
