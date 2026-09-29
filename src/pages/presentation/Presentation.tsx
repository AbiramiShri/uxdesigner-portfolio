import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { presentationSlides } from '../../data/portfolio'
import './Presentation.css'

export function Presentation() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="presentation">
      <div className="presentation__top">
        <div className="container presentation__header">
          <div className="section-heading presentation__heading">
            <p className="section-heading__watermark" aria-hidden="true">
              Presentation
            </p>
            <h1 className="section-heading__title">Selected Work</h1>
          </div>
          <Link to="/" className="presentation__home">
            Home
          </Link>
        </div>

        <div className="container presentation__slides">
          {presentationSlides.light.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Light theme slide ${index + 1}`}
              className="presentation__slide"
            />
          ))}
        </div>
      </div>

      <div className="presentation__bottom">
        <div className="container presentation__slides">
          {presentationSlides.dark.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Dark theme slide ${index + 1}`}
              className="presentation__slide"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
