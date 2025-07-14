import React from "react";
import { useNavigate } from "react-router-dom";

const Notfoundpage = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Optionally add dynamic search behavior here
    alert("Search feature not available on 404 page.");
  };

  return (
    <section className="error-page">
      <div className="container py-4">
        <div className="main-cover text-center">
          <i className="far fa-frown-open fa-5x text-secondary"></i>
          <h5 className="error mt-lg-4">Sorry, We Can't Find That Page!</h5>
          <p>The page you are looking for was moved, removed, renamed or never existed.</p>
          
          <form className="form-inline search-form-error mt-md-5 mt-4" onSubmit={handleSearch}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              required
            />
            <button className="btn search" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>

          <button
            className="btn-style btn mt-md-5 mt-4"
            onClick={() => navigate("/")}
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Notfoundpage;
