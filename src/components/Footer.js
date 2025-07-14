import React from 'react';

const Footer = () => {
  return (
    <footer className="w3l-footer py-5">
      <div className="container pt-4">
        <div className="row">
          <div className="col-lg-4 sub-one-left">
            <h6>About</h6>
            <p>
              BAX Consulting Group empowers growth-focused businesses through tailored digital transformation,
              scalable finance strategies, and intelligent risk frameworks that fuel operational excellence.
            </p>
            <ul className="social mt-4 pt-lg-1">
              <li>
                <a
                  href="https://www.linkedin.com/company/bax-consulting-group/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-5 col-md-6 mt-lg-0 mt-5 px-lg-5 sub-two-right">
            <h6>Recent Insights</h6>

            <div className="footer-post">
              <ul>
                <li>BAX Editorial</li>
                <li className="mx-2">- June 14 -</li>
                <li>8 comments</li>
              </ul>
              <p className="post-footer">
                Reimagining Insurance Advisory with AI and Risk Profiling
              </p>
            </div>

            <div className="footer-post mt-4">
              <ul>
                <li>Growth Desk</li>
                <li className="mx-2">- May 29 -</li>
                <li>6 comments</li>
              </ul>
              <p className="post-footer">
                How SMEs Can Build Resilient Financial Structures in 2025
              </p>
            </div>

            <div className="footer-post mt-4">
              <ul>
                <li>Strategy Team</li>
                <li className="mx-2">- May 18 -</li>
                <li>4 comments</li>
              </ul>
              <p className="post-footer">
                Leveraging Digital Transformation for Multi-Sector Business Scalability
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-lg-0 mt-5 sub-one-left">
            <h6>Contact</h6>
            <div className="column2">
              <div className="href1">
                <span className="fas fa-envelope-open"></span>
                <span>bax@baxcg.com</span>
              </div>
              <div className="href2 my-3">
                <span className="fas fa-phone-alt"></span>
                <span>+44 7727 119 556</span>
              </div>
              <div>
                <p className="contact-para mb-3">
                  <span className="fas fa-map-marker-alt"></span> United Kingdom, BAX Consulting Group
                </p>
              </div>
              <div>
                <p className="contact-para">
                  <span className="fas fa-clock"></span> Office Hours: 9AM - 6PM (Mon-Fri)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-footer text-center mt-5 pt-sm-4 pt-2">
          <p style={{ fontSize: '0.85rem', opacity: 0.6 }}>
            &copy; {new Date().getFullYear()} BAX Consulting Group. All rights reserved | 
            <span style={{ fontSize: '0.8rem', marginLeft: '4px' }}>
              Design by <span style={{ color: '#999' }}>W3Layouts</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
