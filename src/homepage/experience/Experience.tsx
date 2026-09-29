import { experience } from '../../data/portfolio'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__watermark" aria-hidden="true">
            Experience
          </p>
          <h2 className="section-heading__title">Experience</h2>
        </div>

        <ul className="experience__list">
          {experience.map((item) => (
            <li key={item.id} className="experience__item">
              <div className="experience__left">
                <span className="experience__role">{item.role}</span>
                <span className="experience__company">{item.company}</span>
              </div>
              <span className="experience__period">{item.period}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
