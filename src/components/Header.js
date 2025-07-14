import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase().trim();

    const keywordGroups = {
      home: ['home', 'main', 'landing'],
      about: ['about', 'company', 'who are you', 'who we are'],
      services: [
        'service', 'services', 'consulting', 'consultancy', 'business', 'growth',
        'strategy', 'ai', 'digital', 'transformation', 'finance', 'operational',
        'logistics', 'construction', 'process', 'automation'
      ],
      blog: ['blog', 'article', 'news', 'update', 'insight'],
      contact: ['contact', 'connect', 'email', 'phone', 'address', 'reach']
    };

    let matchedRoute = null;
    for (const [route, keywords] of Object.entries(keywordGroups)) {
      if (keywords.some((word) => q.includes(word))) {
        matchedRoute = route;
        break;
      }
    }

    // Navigate based on matched route or 404
    if (matchedRoute) {
      navigate(matchedRoute === 'home' ? '/' : `/${matchedRoute}`);
    } else {
      navigate('*'); // 👈 Route for 404 page
    }

    setQuery('');
  };

  return (
    <header id="site-header" className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/">
            <img src="/images/mainlogo.png" alt="Company Logo" style={{ height: "85px" }} />
          </NavLink>

          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Blog</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
              </li>
            </ul>

            {/* Search Bar */}
            <form className="d-flex search-header ms-lg-2" onSubmit={handleSearch}>
              <input
                className="form-control"
                type="search"
                placeholder="Enter Keyword..."
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <button className="btn btn-style" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>

          {/* Dark/Light Toggle */}
          <div className="cont-ser-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container">
                    <i className="gg-sun"></i>
                    <i className="gg-moon"></i>
                  </div>
                </label>
              </div>
            </nav>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
