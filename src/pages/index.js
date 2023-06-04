import DefaultLayout from '@/layouts/DefaultLayout'


export default function Home({user}) {
  return (
    <>
      Homepage
    </>
  )
}
Home.getLayout = function getLayout(page) {
  return (
    <DefaultLayout>
      {page}
    </DefaultLayout>
  )
}