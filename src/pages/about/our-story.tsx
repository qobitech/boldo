import { ContainerClass } from '../../layout'
import { OurStorySection, Paragraph, SectionHeader } from './styled-components'

const OurStory = () => {
  return (
    <ContainerClass>
      <OurStorySection>
        <div className="content">
          <div className="header">
            <Paragraph>Our story</Paragraph>

            <SectionHeader>
              Handshake infographic mass market crowdfunding iteration.
            </SectionHeader>

            <Paragraph className="description">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
              Sales user experience branding growth hacking holy grail
              monetization conversion prototype stock network effects. Learning
              curve network effects return on investment bootstrapping
              business-to-consumer.
            </Paragraph>
          </div>
        </div>
      </OurStorySection>
    </ContainerClass>
  )
}

export default OurStory
