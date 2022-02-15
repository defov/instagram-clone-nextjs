import Head from 'next/head'
import { getSession } from 'next-auth/react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home = ({ session }) => {
    return (
        <div className='bg-gray-50'>
          <Head>
            <title>Instagram</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Feed />
          <Modal />
            
        </div>
    )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);

  const data = {
      props: {}
  }
  
  if(!session) {
      data.redirect = {
          permanent: false,
          destination: "/auth",
      }
  } else {
    data.props.session = session
  }

  return data
}

export default Home