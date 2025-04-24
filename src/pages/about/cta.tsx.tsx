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

          <form>
            <input placeholder="Your email address" />

            <button>Start now</button>
          </form>
        </div>
      </CallToActionSection>
    </ContainerClass>
  )
}

export default CTA
