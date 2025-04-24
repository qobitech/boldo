import { motion, useAnimation, useInView } from 'framer-motion'
import { FC, RefObject, useEffect, useRef } from 'react'

interface IReveal
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children?: any
  hidden?: any
  visible?: any
}

export const Reveal: FC<IReveal> = ({ children, hidden, visible }) => {
  const ref = useRef(null)
  const isInView = useInView(ref as unknown as RefObject<Element>, {
    once: true
  })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])
  return (
    <div
      ref={ref}
      style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
    >
      <motion.div
        variants={{
          hidden: hidden || { opacity: 0, y: 75 },
          visible: visible || { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
