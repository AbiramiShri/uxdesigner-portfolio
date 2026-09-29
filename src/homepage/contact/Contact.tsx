import { site } from '../../data/portfolio'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__watermark" aria-hidden="true">
            Get In Touch
          </p>
          <h2 className="section-heading__title">Get In Touch</h2>
        </div>

        <div className="contact__inner">
          <div className="contact__details">
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="contact__item">
              <img
                src="/images/Phone call.svg"
                alt=""
                className="contact__icon"
                aria-hidden="true"
              />
              <span>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="contact__item">
              <img
                src="/images/Mail.svg"
                alt=""
                className="contact__icon"
                aria-hidden="true"
              />
              <span>{site.email}</span>
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact__item"
            >
              <img
                src="/images/Linkedin.svg"
                alt=""
                className="contact__icon"
                aria-hidden="true"
              />
              <span>{site.linkedin}</span>
            </a>
          </div>

          <div className="contact__illustration" aria-hidden="true">
            <img src="/images/Stay at home.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
