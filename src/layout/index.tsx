import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import { useEffect } from 'react'
import Lenis from 'lenis'

const Layout = ({ children }: { children?: any }) => {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      anchors: true,
      prevent: () => true
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf) // Keep the scroll smooth
    }

    const frameId = requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // Clean up Lenis instance
      cancelAnimationFrame(frameId) // Cancel the animation frame to avoid memory leaks
    }
  }, [])

  return (
    <MainClass>
      <Header />
      <div>{children}</div>
      <Footer />
    </MainClass>
  )
}

export default Layout

export const ContainerClass = styled.div`
  margin: auto;
  max-width: 1100px;
  width: 90%;
`

const MainClass = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`
