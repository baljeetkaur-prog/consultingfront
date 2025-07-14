import React from 'react';

const testimonials = [
  {
    img: '/images/testi1.jpg',
    quote:
      'Partnering with BAX Consulting was the turning point in our growth strategy. Their AI-led transformation roadmap not only streamlined our operations but helped us unlock new revenue channels within months.',
    author: 'James Warwick',
    anim: 'anim1',
  },
  {
    img: '/images/testi2.jpg',
    quote:
      'Their approach to ESG integration and ISO-aligned compliance brought structure and confidence to our internal operations. We scaled faster and smarter.',
    author: 'Claire Houghton',
    anim: 'anim2',
  },
  {
    img: '/images/testi3.jpg',
    quote:
      'From risk advisory to financial structuring, the BAX team delivered actionable insight that gave us the competitive edge we were missing.',
    author: 'Daryl Singh',
    anim: 'anim3',
  },
  {
    img: '/images/testi1.jpg',
    quote:
      'Their leadership expertise is unmatched. With their guidance, we transitioned from founder-led chaos to a professionally managed, scalable company in under 18 months.',
    author: 'Alicia Morgan',
    anim: 'anim4',
  },
  {
    img: '/images/testi2.jpg',
    quote:
      'BAX Consulting goes beyond strategy—they engineer real transformation. Their deep understanding of logistics helped us double our throughput with zero service compromise.',
    author: 'Ankit Rao, COO – Ridgetech Logistics',
    anim: 'anim5',
  },
];


const Testimonials = () => {
  return (
    <section className="w3l-index4 py-5" id="testimonials">
      <div className="container py-md-5 py-4">
        <div className="content-slider text-center py-4">
          <div className="clients-slider">
            <div className="mask">
              <ul>
                {testimonials.map(({ img, quote, author, anim }, index) => (
                  <li className={anim} key={index}>
                    <img
                      src={img}
                      className="img-fluid rounded-circle"
                      alt={`Client ${index + 1}`}
                    />
                    <blockquote className="quote">
                      <q>{quote}</q>
                    </blockquote>
                    <div className="source">- {author}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
