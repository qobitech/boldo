import { JSX, lazy, startTransition } from 'react'
import { pageurl } from '../constants/pageurl'

export type PreloadableComponent<T extends React.ComponentType<any>> =
  React.LazyExoticComponent<T> & {
    preload?: () => Promise<void>
  }

interface IRouteComponent {
  path: string
  Component: PreloadableComponent<() => JSX.Element>
}

export function ReactLazyPreload<T extends React.ComponentType<any>>(
  importStatement: () => Promise<{ default: T }>
): PreloadableComponent<T> {
  const Component = lazy(importStatement) as PreloadableComponent<T>

  Component.preload = async () => {
    return await new Promise<void>((resolve) => {
      startTransition(() => {
        importStatement().then(() => resolve())
      })
    })
  }

  return Component
}

const AboutPage = ReactLazyPreload(async () => await import('../pages/about'))

export const routes: IRouteComponent[] = [
  { path: pageurl.ABOUT, Component: AboutPage }
]
