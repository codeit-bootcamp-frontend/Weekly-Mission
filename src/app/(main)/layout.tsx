import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
