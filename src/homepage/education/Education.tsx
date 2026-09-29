import { education } from '../../data/portfolio'
import './Education.css'

export function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__watermark" aria-hidden="true">
            Education
          </p>
          <h2 className="section-heading__title">Education</h2>
        </div>

        <ul className="education__list">
          {education.map((item) => (
            <li key={item.id} className="education__item">
              <div className="education__left">
                <span className="education__degree">{item.degree}</span>
                <span className="education__school">{item.school}</span>
              </div>
              <span className="education__date">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
