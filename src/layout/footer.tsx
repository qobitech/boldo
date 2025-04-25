import styled from 'styled-components'
import { ContainerClass } from '.'
// import logo from '../assets/images/Logo.png'
import { LogoSVG } from '../svg-icons'

const Footer = () => {
  return (
    <FooterWrapper>
      <ContainerClass>
        <FooterContent>
          <Section1>
            {/* <img src={logo} alt="logo" /> */}
            <LogoSVG />

            <p>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </p>
          </Section1>

          <Section>
            <h3>Landings</h3>

            <ul>
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#">Products</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Section>

          <Section>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>

              <li>
                <a href="#">Careers</a>
                <button>Hiring!</button>
              </li>

              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Section>

          <Section>
            <h3>Resources</h3>

            <ul>
              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Products</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </Section>
        </FooterContent>

        <div className="copy-right">
          <p>
            &copy; {new Date().getFullYear()} Franklyn Edekobi. Assessment
            project. Not for commercial use.
          </p>
        </div>
      </ContainerClass>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  width: 100%;
  margin-top: auto;
  padding: 100px 0 70px;
  color: #777777;
  background: #ffffff;

  .copy-right {
    margin-top: 45px;

    p {
      font-size: 16px;
      font-family: OpenSans_Regular;
    }
  }
`

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr; /* First section takes up more space */
  gap: 37px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr; /* Stack everything in a single column for small screens */
  }
`

const Section1 = styled.div`
  margin-right: 50px;

  svg {
    // width: 156px;
    // height: 41px;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 28px;
    font-family: OpenSans_Regular;
  }
`

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 8px;

  h3 {
    margin-bottom: 40px;
    color: #000000;
    font-family: OpenSans_Regular;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 34px;
    margin: 0;
    padding: 0;
    align-items: flex-start; /* Align list items to the left */
  }

  li {
    list-style-type: none;
    padding: 3px 0;

    a {
      font-size: 16px;
      color: #777777;
      text-decoration: none;
      font-family: OpenSans_Regular;
      &:hover {
        color: #000;
      }
    }

    button {
      margin-left: 15px;
      background: #65e4a3;
      color: #0a2640;
      font-size: 13px;
      font-family: OpenSans_Bold;
      line-height: 28px;
      padding: 1px 14px;
      border-radius: 120px;
      border: none;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        background: rgb(96, 207, 150);
      }
    }
  }
`
