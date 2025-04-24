import { ContainerClass } from '../../layout'
import { CallToActionSection, SectionHeader } from './styled-components'

const CTA = () => {
  return (
    <ContainerClass>
      <CallToActionSection>
        <div className="content">
          <SectionHeader>
            An enterprise template to ramp up your company website
          </SectionHeader>

          <form onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your email address" required />

            <button>Start now</button>
          </form>
        </div>
      </CallToActionSection>
    </ContainerClass>
  )
}

export default CTA
