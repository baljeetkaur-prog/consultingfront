import React from 'react';
import blogPosts from './Blogdata'; // Import the blog data

const Blogsection = () => {
  return (
    <div className="w3l-blog-block-5 py-5" id="blog">
      <div className="container py-md-5 py-4">
        <div
          className="title-main text-center mx-auto mb-md-5 mb-4"
          style={{ maxWidth: '700px' }}
        >
          <h5 className="small-title mb-2">News Feed</h5>
          <h3 className="title-style">Latest Blog Posts</h3>
        </div>

        <div className="row justify-content-center">
          {blogPosts.slice(0, 3).map((post, index) => (
            <div className="col-lg-4 col-md-6 mt-4 mt-md-0" key={index}>
              <div className="blog-card-single">
                <div className="grids5-info">
                  <a href={`/blogdetail/${index}`}>
                    <img src={post.img} alt="Blog" className="img-fluid" />
                  </a>
                  <div className="blog-info">
                    <h4>
                      <a href={`/blogdetail/${index}`}>{post.title}</a>
                    </h4>
                    <p>{post.excerpt}</p>
                    <div className="d-flex align-items-center justify-content-between mt-4">
                      <a
                        className="d-flex align-items-center"
                        href="#blog"
                        title="Author"
                      >
                        <img
                          className="img-fluid"
                          src={post.authorImg}
                          alt="admin"
                          style={{ maxWidth: '40px' }}
                        />
                        <span className="small ms-2">{post.author}</span>
                      </a>
                      <p className="date-text">
                        <i className="far fa-calendar-alt me-1"></i>
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogsection;
