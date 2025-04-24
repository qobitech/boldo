import { ContainerClass } from '../../layout'
import { OurNumbers, Paragraph, SectionHeader } from './styled-components'

const numbers = [
  {
    number: '120',
    description: 'Cool feature title'
  },
  {
    number: '10.000',
    description: 'Cool feature title'
  },
  {
    number: '240',
    description: 'Cool feature title'
  }
]

const Numbers = () => {
  return (
    <OurNumbers>
      <ContainerClass>
        <div className="header-section">
          <Paragraph>Our numbers</Paragraph>

          <SectionHeader>
            Handshake infographic mass market crowdfunding iteration.
          </SectionHeader>
        </div>

        <div className="numbers-section">
          {numbers.map((i, index) => (
            <div className="number-item" key={index}>
              <h1>{i.number}</h1>

              <Paragraph>{i.description}</Paragraph>
            </div>
          ))}
        </div>
      </ContainerClass>
    </OurNumbers>
  )
}

export default Numbers
