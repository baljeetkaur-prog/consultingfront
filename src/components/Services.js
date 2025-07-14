import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: '1',
    number: '01',
    icon: 'fas fa-briefcase',
    title: 'Business Consulting',
    desc: 'We help you scale operations, streamline systems, and shift from founder-led to professionally managed structures.',
  },
  {
    id: '2',
    number: '02',
    icon: 'fas fa-coins',
    title: 'Business Finance Solutions',
    desc: 'We unlock capital through tailored options like invoice financing, asset funding, and growth-driven investment plans.',
  },
  {
    id: '3',
    number: '03',
    icon: 'fas fa-shield-alt',
    title: 'Insurance & Risk Advisory',
    desc: 'Protect your business with the right coverage plans—aligned with your operations, risks, and compliance needs.',
  },
  {
    id: '4',
    number: '04',
    icon: 'fas fa-robot',
    title: 'AI & Digital Transformation',
    desc: 'We enable digital growth by implementing AI tools and automation to improve efficiency and drive innovation.',
  },
];

const Services = () => {
  return (
    <section className="home-services py-5" id="services">
      <div className="container py-lg-5 py-md-4 py-2">
        <div
          className="title-main text-center mx-auto mb-md-5 mb-4"
          style={{ maxWidth: '700px' }}
        >
          <h5 className="small-title mb-2">BAX Consulting Group</h5>
          <h3 className="title-style">
            Strategic Growth, Digital Transformation & Operational Excellence
          </h3>
        </div>
        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" key={index}>
              <div className="box-wrap">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <h4 className="number">{service.number}</h4>
                <h4>
                  <Link to={`/servicedetail/${service.id}`}>{service.title}</Link>
                </h4>
                <p>{service.desc}</p>
                <Link to={`/servicedetail/${service.id}`} className="read">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
