import React from 'react';

const progressData = [
  { title: 'Strategic Roadmapping', percent: 92 },
  { title: 'Digital Transformation', percent: 88 },
  { title: 'Financial Structuring', percent: 85 },
  { title: 'Operational Resilience', percent: 90 },
];

const Progresssection = () => {
  return (
    <section className="w3l-progress py-5" id="progress">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 about-2-secs-right mb-lg-0 mb-5">
            <img
              src="/images/growth.jpg"
              alt="Progress Visual"
              className="img-fluid radius-image"
            />
          </div>

          {/* Right Content */}
          <div className="col-lg-6 about-2-secs-left ps-xl-5">
            <h5 className="small-title mb-2">Performance That Speaks</h5>
            <h3 className="title-style mb-sm-3 mb-2">
              Turning Complex Challenges into Scalable Growth
            </h3>
            <p>
              At BAX Consulting Group, we deliver more than strategies — we build 
              intelligent systems and financial structures that empower businesses to grow 
              predictably, sustainably, and confidently. Our measurable impact is rooted in 
              clarity, precision, and deep industry insight.
            </p>

            <div className="w3l-progressblock mt-md-5 mt-4">
              {progressData.map((item, index) => (
                <div className={`progress-info info${index + 1}`} key={index}>
                  <h6 className="progress-tittle">
                    {item.title} <span>{item.percent}%</span>
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped"
                      role="progressbar"
                      style={{ width: `${item.percent}%` }}
                      aria-valuenow={item.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progresssection;
