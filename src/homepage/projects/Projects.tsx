import { skillTags, workCategories } from '../../data/portfolio'
import { Link } from 'react-router-dom'
import './Projects.css'

export function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__watermark" aria-hidden="true">
            Portfolio
          </p>
          <h2 className="section-heading__title">Portfolio</h2>
        </div>

        <div className="projects__grid">
          {workCategories.map((category) => {
            const content = (
              <>
                <img
                  src={category.image}
                  alt={category.title}
                  className="project-card__image"
                />
                <div className="project-card__overlay">
                  <h3 className="project-card__title">
                    <span className="project-card__label">{category.label}</span>
                    <span className="project-card__design">Design</span>
                  </h3>
                </div>
              </>
            )

            if ('href' in category && category.href) {
              return (
                <Link
                  key={category.id}
                  to={category.href}
                  className="project-card"
                >
                  {content}
                </Link>
              )
            }

            return (
              <article key={category.id} className="project-card">
                {content}
              </article>
            )
          })}
        </div>
      </div>

      <div className="projects__skills">
        <div className="projects__skills-track">
          {[...skillTags, ...skillTags].map((tag, i) => (
            <span key={`${tag}-${i}`} className="projects__skill-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
