import value1 from '../../assets/images/value1.png'
import value2 from '../../assets/images/value2.png'
import value3 from '../../assets/images/value3.png'

import { ContainerClass } from '../../layout'
import { OurValuesSection, Paragraph, SectionHeader } from './styled-components'

const values = [
  {
    image: value1,
    title: 'We are commited.',
    description:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. '
  },
  {
    image: value2,
    title: 'We are responsible.',
    description:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. '
  },
  {
    image: value3,
    title: 'We aim for progress.',
    description:
      'Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. '
  }
]

const Values = () => {
  return (
    <OurValuesSection>
      <ContainerClass>
        <div className="content">
          <div className="header">
            <Paragraph>Our values</Paragraph>

            <SectionHeader>Things we believe</SectionHeader>

            <Paragraph className="description">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </Paragraph>
          </div>

          <div className="body">
            {values.map((i, index) => (
              <div className="item" key={index}>
                <img src={i.image} alt="" />

                <div className="text-content">
                  <h5>{i.title}</h5>

                  <Paragraph>{i.description}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContainerClass>
    </OurValuesSection>
  )
}

export default Values
