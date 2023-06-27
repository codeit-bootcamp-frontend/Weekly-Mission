import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

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
