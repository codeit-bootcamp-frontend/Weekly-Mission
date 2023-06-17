import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '@/lib/global.css'

const BasicLayout = ({
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

export default BasicLayout
