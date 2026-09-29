import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { getUiuxProject } from '../../data/portfolio'
import './CaseStudy.css'

export function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getUiuxProject(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return <Navigate to="/uiux" replace />
  }

  return (
    <div className="case-study">
      <div className="container case-study__top">
        <div className="section-heading case-study__heading">
          <p className="section-heading__watermark" aria-hidden="true">
            {project.title}
          </p>
          <h1 className="section-heading__title">{project.name}</h1>
        </div>
        <Link to="/uiux" className="case-study__back">
          Back
        </Link>
      </div>

      <div className="container case-study__hero">
        <img src={project.hero} alt={`${project.name} hero`} />
      </div>

      <section className="container case-study__section">
        <h2 className="case-study__label">About Project</h2>
        <div className="case-study__meta">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Tools</span>
            <strong>{project.tools}</strong>
          </div>
          <div>
            <span>Duration</span>
            <strong>{project.duration}</strong>
          </div>
        </div>
        <div className="case-study__copy-grid">
          <div>
            <h3>Overview</h3>
            <p>{project.overview}</p>
          </div>
          <div>
            <h3>The Problem</h3>
            <p>{project.problem}</p>
          </div>
        </div>
      </section>

      {project.wireframes.length > 0 && (
        <section className="container case-study__section">
          <h2 className="case-study__label">Wireframing</h2>
          <div className="case-study__wireframes">
            {project.wireframes.map((src) => (
              <img key={src} src={src} alt={`${project.name} wireframe`} />
            ))}
          </div>
        </section>
      )}

      <section className="container case-study__section">
        <h2 className="case-study__label">Design System</h2>
        <div className="case-study__colors">
          {project.colors.map((color) => (
            <div key={color.hex} className="case-study__swatch">
              <span style={{ background: color.hex }} />
              <small>{color.hex}</small>
              <em>{color.label}</em>
            </div>
          ))}
        </div>
        <p className="case-study__type">{project.typography}</p>
        {project.designSystem && (
          <img
            src={project.designSystem}
            alt={`${project.name} design system`}
            className="case-study__system"
          />
        )}
      </section>

      <section className="container case-study__section">
        <h2 className="case-study__label">Final UI</h2>
        <div className="case-study__screens">
          {project.screens.map((src) => (
            <img key={src} src={src} alt={`${project.name} screen`} />
          ))}
        </div>
      </section>

      <section className="container case-study__section case-study__section--last">
        <h2 className="case-study__label">Reflection</h2>
        <p className="case-study__reflection">{project.reflection}</p>
      </section>
    </div>
  )
}
