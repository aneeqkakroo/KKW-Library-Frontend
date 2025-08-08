import { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/books/`)
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-white min-vh-100 py-5 px-3">
      <div className="container text-center">
        {/* Logo & Title */}
        <h1 className="display-5 fw-bold text-dark mb-3">Welcome to Our eBook Library</h1>
        <p className="text-secondary fs-5 mb-5">
          Discover a world of knowledge with our collection of eBooks.
        </p>

        {/* Search Bar */}
        <div className="d-flex justify-content-center mb-5">
          <div className="input-group" style={{ maxWidth: '500px', width: '100%' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search eBooks..."
              aria-label="Search eBooks"
            />
            <button className="btn btn-primary" type="button">
              Search
            </button>
          </div>
        </div>

        {/* Featured Books */}
        <h2 className="h4 fw-bold text-dark mb-4">Featured eBooks</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4 mb-5">
          {books.length > 0 ? (
            books.slice(0, 4).map(book => (
              <div className="col" key={book.id}>
                <div className="card h-100 shadow-sm">
                  {book.cover_image ? (
                    <img
                      src={book.cover_image}
                      alt={book.title}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ height: '200px', color: '#6c757d', fontSize: '0.9rem' }}
                    >
                      No Cover
                    </div>
                  )}
                  <div className="card-body text-start">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text text-muted">{book.author}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No books available</p>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-center gap-3">
          <a href="/" className="btn btn-outline-secondary">Browse</a>
          <a href="/" className="btn btn-outline-secondary">Categories</a>
          <a href="/upload" className="btn btn-outline-secondary">Upload</a>
        </div>
      </div>
    </div>
  );
}
