import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'

const layout = ({
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

export default layout
