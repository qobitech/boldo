import { Wrapper } from './styled-components'
import Hero from './hero-section'
import OurStory from './our-story'
import Numbers from './our-numbers'
import Team from './leadership-team'
import Values from './values'
import CTA from './cta.tsx'
import { Reveal } from '../../components/reveal'

const About = () => {
  return (
    <Wrapper>
      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <OurStory />
      </Reveal>

      <Reveal>
        <Numbers />
      </Reveal>

      <Reveal>
        <Team />
      </Reveal>

      <Reveal>
        <Values />
      </Reveal>

      <Reveal>
        <CTA />
      </Reveal>
    </Wrapper>
  )
}

export default About
