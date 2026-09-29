import { Hero } from './hero/Hero'
import { Projects } from './projects/Projects'
import { Experience } from './experience/Experience'
import { Education } from './education/Education'
import { Contact } from './contact/Contact'

export function Homepage() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}
