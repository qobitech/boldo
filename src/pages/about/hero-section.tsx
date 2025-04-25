import hero1 from '../../assets/images/hero1.png'
import hero2 from '../../assets/images/hero2.png'
import hero3 from '../../assets/images/hero3.png'
import hero4 from '../../assets/images/hero4.png'
import hero5 from '../../assets/images/hero5.png'
import { ContainerClass } from '../../layout'
import { GridWrapper, HeroSection, Paragraph, Image } from './styled-components'

const Hero = () => {
  return (
    <>
      <HeroSection>
        <ContainerClass>
          <div className="header-section">
            <Paragraph>About</Paragraph>

            <h1>We love to make great things, things that matter.</h1>

            <Paragraph className="description">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </Paragraph>
          </div>
        </ContainerClass>
      </HeroSection>

      <ContainerClass>
        <GridWrapper>
          <Image className="item item-a" src={hero1} alt="hero 1" />

          <Image className="item item-b" src={hero2} alt="hero 2" />

          <Image className="item item-c" src={hero3} alt="hero 3" />

          <Image className="item item-d" src={hero4} alt="hero 4" />

          <Image className="item item-e" src={hero5} alt="hero 5" />
        </GridWrapper>
      </ContainerClass>
    </>
  )
}

export default Hero
