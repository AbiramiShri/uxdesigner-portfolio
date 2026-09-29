import { site } from '../../data/portfolio'
import './Hero.css'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__layout">
        <h1 className="hero__name">
          <span className="hero__name-solid">{site.firstName}</span>
          <span className="hero__name-outline">{site.lastName}</span>
        </h1>

        <div className="hero__body">
          <div className="hero__content">
            <p className="hero__role">{site.role}</p>
            <p className="hero__bio">{site.bio}</p>
            <a href="#work" className="hero__cta">
              Know More
            </a>
          </div>

          <div className="hero__portrait">
            <img
              src={site.heroImage}
              alt={`${site.firstName} ${site.lastName}`}
              className="hero__portrait-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
