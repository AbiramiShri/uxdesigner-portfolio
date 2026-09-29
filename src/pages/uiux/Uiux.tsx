import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { uiuxProjects } from '../../data/portfolio'
import './Uiux.css'

export function Uiux() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="uiux">
      <div className="container uiux__header">
        <div className="section-heading uiux__heading">
          <p className="section-heading__watermark" aria-hidden="true">
            UI UX Design
          </p>
          <h1 className="section-heading__title">Selected Work</h1>
        </div>
        <Link to="/" className="uiux__home">
          Home
        </Link>
      </div>

      <div className="container uiux__list">
        {uiuxProjects.map((project) => (
          <article key={project.slug} className="uiux-card">
            <div className="uiux-card__media">
              <img src={project.cover} alt={project.name} />
            </div>
            <div className="uiux-card__body">
              <span className="uiux-card__category">{project.category}</span>
              <h2 className="uiux-card__title">{project.name}</h2>
              <p className="uiux-card__summary">{project.summary}</p>
              <Link to={`/uiux/${project.slug}`} className="uiux-card__cta">
                Know More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
