import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { graphicWorks } from '../../data/portfolio'
import './Graphic.css'

export function Graphic() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="graphic">
      <div className="container graphic__header">
        <div className="section-heading graphic__heading">
          <p className="section-heading__watermark" aria-hidden="true">
            Graphic
          </p>
          <h1 className="section-heading__title">Selected Work</h1>
        </div>
        <Link to="/" className="graphic__home">
          Home
        </Link>
      </div>

      <div className="container graphic__grid">
        {graphicWorks.map((work) => (
          <figure
            key={work.src}
            className={`graphic__item${work.wide ? ' graphic__item--wide' : ''}`}
          >
            <img src={work.src} alt={work.alt} className="graphic__image" />
          </figure>
        ))}
      </div>
    </div>
  )
}
