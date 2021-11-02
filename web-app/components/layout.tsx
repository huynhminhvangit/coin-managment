import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

interface ILayout {
  children: ReactNode
}

export default function Layout ({ children }: ILayout) {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  )
}