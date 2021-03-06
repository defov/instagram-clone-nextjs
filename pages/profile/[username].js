import { getSession } from "next-auth/react";
import Head from "next/head";
import Header from "../../components/Header";
import Profile from '../../components/Profile';
import Modal from "../../components/Modal";

const ProfilePage = ({ session, username }) => {
 
    const owner = session?.user?.username === username
    console.log(owner)

    return (
        <div className='bg-gray-50'>
          <Head>
            <title>{ username } | Instagram</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header />
          <Profile />
          <Modal />
            
        </div>
    )
};

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);
    
    if(!session) {
        return {
            redirect : {
                permanent: false,
                destination: "/auth",
            }
        }
    }

    const { username } = ctx.query

    const data = {
        props: {
            session,
            username,
        }
    }

    return data
  }

export default ProfilePage
