import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contactus = () => {
 const openCalendly = () => {
  window.open('https://bit.ly/BookingWithBax', '_blank');
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkzrblo', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        toast.success('Thank you! We’ll get back to you shortly.');
        form.reset();
      } else {
        toast.error('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={4000} />

      {/* Inner Banner */}
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">Contact Us</h4>
            <ul className="breadcrumbs-custom-path">
              <li><Link to="/">Home</Link></li>
              <li className="active">
                <i className="fas fa-angle-right mx-2"></i>Contact Us
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w3l-contact-info-main py-5" id="contact">
        <div className="container pt-lg-5 pt-md-4 pt-2">
          <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: '700px' }}>
            <h5 className="small-title mb-1">Let’s Talk Growth</h5>
            <h3 className="title-style">Connect with BAX Consulting Group</h3>
            <p className="mt-3">
              Ready to scale your business, implement AI frameworks, or create operational excellence?
              Let’s begin a conversation that transforms your business trajectory.
            </p>

            <button onClick={openCalendly} className="btn btn-style mt-4">
              Book a Strategy Call
            </button>
          </div>

          <div className="row">
            {/* Contact Info */}
            <div className="col-md-6 left-cont-contact pe-md-4">
              <div className="contact-address p-4">
                <div className="contact-icon d-flex align-items-center">
                  <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                  <div className="ms-3">
                    <h5 className="contact-text">Visit Us:</h5>
                    <p>11 Cavendish Square, London W1G 0DT, United Kingdom</p>
                  </div>
                </div>
              </div>
              <div className="contact-address p-4 mt-4">
                <div className="contact-icon d-flex align-items-center">
                  <i className="fas fa-phone-alt" aria-hidden="true"></i>
                  <div className="ms-3">
                    <h5 className="contact-text">Call Us:</h5>
                    <a href="tel:+447727119556">+44 7727 119 556</a>
                  </div>
                </div>
              </div>
              <div className="contact-address p-4 mt-4">
                <div className="contact-icon d-flex align-items-center">
                  <i className="fas fa-envelope-open-text" aria-hidden="true"></i>
                  <div className="ms-3">
                    <h5 className="contact-text">Mail Us:</h5>
                    <a href="mailto:bax@baxcg.com">bax@baxcg.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6 right-cont-contact ps-md-4 mt-md-0 mt-5">
              <form onSubmit={handleSubmit} className="w3layouts-contact-fm">
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="name" placeholder="Your Full Name" required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="email" name="email" placeholder="Your Email Address" required />
                </div>
                <div className="form-group mb-3">
                  <input className="form-control" type="text" name="subject" placeholder="Your Company / Role (Optional)" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" placeholder="Tell us briefly what you need help with…" required></textarea>
                </div>
                <div className="form-group-2 mt-3 text-end">
                  <button type="submit" className="btn btn-style">Submit Inquiry</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <div className="map-contact pt-5">
        <iframe
          className="map-w3layouts"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19850.435216501085!2d-0.14772166075158802!3d51.51644060626698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad97c7cf9e9%3A0x6e9e3f1854e8b92a!2s11%20Cavendish%20Square%2C%20London%20W1G%200DT%2C%20UK!5e0!3m2!1sen!2sin!4v1720451888888!5m2!1sen!2sin"
          width="100%"
          height="400"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="BAX Consulting Location"
        ></iframe>
      </div>
    </>
  );
};

export default Contactus;
