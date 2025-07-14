// components/ServiceDetail.js
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import serviceData from './Servicedata';

const Servicedetail = () => {
  const { id } = useParams();
  const service = serviceData.find((item) => item.id === id);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <section className="py-5">
        <div className="container">
          <h3 className="text-center">Service not found.</h3>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Top Banner and Breadcrumb */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">{service.title}</h4>
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home</Link></li>
              <li><i className="fas fa-angle-right mx-2"></i><Link to="/#services">Services</Link></li>
              <li className="active"><i className="fas fa-angle-right mx-2"></i>{service.title}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Detail Content */}
      <section className="service-detail py-5">
        <div className="container py-md-5 py-sm-4 py-2">
          <div className="row">
            <div className="col-12">
              <div className="text11-content">
                <h4 className="mb-4 text-center text-lg-start">{service.title}</h4>
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: service.description }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
<section className="w3l-content1 py-5">
  <div className="container py-md-5 py-sm-4 py-2">
    <div className="row py-4">
      <div className="col-lg-7">
        <h3 className="title-style text-white">Empowering Business Transformation</h3>
        <p className="mt-4 text-light">
          At BAX Consulting Group, we specialize in doubling business turnover in less than three years through 
          strategic growth, digital transformation, operational excellence, and AI implementation. With over 28 years of 
          cross-sector experience, we guide ambitious SMEs through their most critical growth phases.
        </p>
        <button
          onClick={() => window.open('https://bit.ly/BookingWithBax', '_blank')}
          className="btn btn-style mt-md-5 mt-4"
        >
          Book a Free Strategy Call
        </button>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Servicedetail;
