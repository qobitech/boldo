import { useState } from 'react'
import styled from 'styled-components'
import { HamburgerSVG, LogoHeaderSVG } from '../svg-icons'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Wrapper>
      <div className="content">
        <div className="logo-container">
          <LogoHeaderSVG aria-label="logo header" />
        </div>

        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <button>Login</button>
        </ul>

        <HamburgerSVG
          aria-label="mobile menu"
          focusable="true"
          className="mobile-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  background: #0a2640;
  width: 100%;
  padding: 26px 0;
  position: fixed;
  z-index: 3;

  .content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
  }

  .logo-container {
    flex-shrink: 0;
  }

  ul.menu {
    margin: 0 0 0 auto;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 40px;
    transition: all 0.3s ease;

    li {
      list-style-type: none;

      a {
        font-size: 16px;
        color: #ffffff;
        cursor: pointer;
        &:hover {
          color: rgb(130, 255, 217);
        }
      }
    }

    button {
      padding: 8px 40px;
      background: #ffffff;
      font-family: Manrope_Bold;
      font-size: 16px;
      color: #0a2640;
      border-radius: 24px;
      border: none;
      cursor: pointer;
      transition: 0.2s ease-in-out;
      &:hover {
        background: #65e4a3;
        color: #0a2640;
      }
    }
  }

  .mobile-menu {
    display: none;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    .content {
      width: 95%;
    }

    .mobile-menu {
      display: block;
      margin-left: auto;
    }

    ul.menu {
      position: absolute;
      top: 100%;
      left: -26px;
      width: 100%;
      background: #0a2640;
      flex-direction: column;
      align-items: center;
      padding: 0;
      gap: 24px;
      overflow: hidden;
      max-height: 0;
      opacity: 0;
      pointer-events: none;
      transition: all 0.4s ease-in-out;
    }

    ul.menu.open {
      padding: 24px;
      max-height: 500px;
      opacity: 1;
      pointer-events: auto;
    }
  }
`
