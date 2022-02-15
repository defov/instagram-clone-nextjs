import { useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image';
import CredentialsForm from '../components/CredentialsForm';
import { getSession } from 'next-auth/react';

const Auth = () => {

    const interval = 7 //seconds

    const [seconds, setSeconds] = useState(interval)
    const [index, setIndex] = useState(0)

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            if (seconds === 0) {
                setIndex(index >= 4 ? 0 : (index + 1))
                setSeconds(interval)
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval)
        };
    }, [seconds]);

    return (
        <div>
            <Head>
                <title>Login | Instagram</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='flex justify-center max-w-4xl mx-auto py-5 space-x-4'>
                {/* Left side */}
                <div className='relative w-[380px] h-[600px] hidden md:block'>
                    <Image
                        src="/images/InstagramLoginPhones.png"
                        layout='fill'
                        objectFit='cover'
                    />

                    <div className='absolute w-[240px] h-[424px] top-[92px] right-[28px]'>
                        <Image
                            className={`${index === 0 ? 'opacity-1' : `opacity-0 delay-[3000ms]`} translate-opacity duration-[3000ms]`}
                            src="/images/ImageLogin1.jpg"
                            layout='fill'
                            objectFit='cover'
                        />
                        <Image
                            className={`${index === 1 ? 'opacity-1' : `opacity-0 delay-[3000ms]`} translate-opacity duration-[3000ms]`}
                            src="/images/ImageLogin2.jpg"
                            layout='fill'
                            objectFit='cover'
                        />
                        <Image
                            className={`${index === 2 ? 'opacity-1' : `opacity-0 delay-[3000ms]`} translate-opacity duration-[3000ms]`}
                            src="/images/ImageLogin3.jpg"
                            layout='fill'
                            objectFit='cover'
                        />
                        <Image
                            className={`${index === 3 ? 'opacity-1' : `opacity-0 delay-[3000ms]`} translate-opacity duration-[3000ms]`}
                            src="/images/ImageLogin4.jpg"
                            layout='fill'
                            objectFit='cover'
                        />
                        <Image
                            className={`${index === 4 ? 'opacity-1' : `opacity-0 delay-[3000ms]`} translate-opacity duration-[3000ms]`}
                            src="/images/ImageLogin5.jpg"
                            layout='fill'
                            objectFit='cover'
                        />
                    </div>

                </div>

                {/* Right side */}
                <div className='w-[22rem] flex-shrink-0 flex flex-col justify-center space-y-4 py-1 text-sm mx-auto md:mx-0'>

                    <CredentialsForm />

                    <p className='text-center'>Get the app.</p>

                    <div className='flex align-center justify-center space-x-4'>
                        <div className='relative w-36 h-12 cursor-pointer'>
                            <Image
                                src="/images/AppStore.png"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className='relative w-36 h-12 cursor-pointer'>
                            <Image
                                src="/images/PlayStore.png"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className='max-w-2xl mx-auto p-3 text-xs text-gray-400'>
                <div className='flex space-x-4 flex-wrap justify-center'>
                    <p className='cursor-pointer'>Meta</p>
                    <p className='cursor-pointer'>About</p>
                    <p className='cursor-pointer'>Blog</p>
                    <p className='cursor-pointer'>Jobs</p>
                    <p className='cursor-pointer'>Help</p>
                    <p className='cursor-pointer'>API</p>
                    <p className='cursor-pointer'>Privacy</p>
                    <p className='cursor-pointer'>Terms</p>
                    <p className='cursor-pointer'>Top accounts</p>
                    <p className='cursor-pointer'>Hashtags</p>
                    <p className='cursor-pointer'>Locations</p>
                    <p className='cursor-pointer'>Instagram Lite</p>
                </div>
                <div className='flex space-x-4 flex-wrap justify-center mt-1'>
                    <p className='cursor-pointer'>Beauty</p>
                    <p className='cursor-pointer'>Dance</p>
                    <p className='cursor-pointer'>Fitness</p>
                    <p className='cursor-pointer'>Food & Drink</p>
                    <p className='cursor-pointer'>Home & Garden</p>
                    <p className='cursor-pointer'>Music</p>
                    <p className='cursor-pointer'>Visual Arts</p>
                </div>
                <p className='text-center mt-5'>Instagram Clone</p>
            </footer>
        </div>
    ) 
};

export async function getServerSideProps(ctx) {
    const session = await getSession(ctx);

    const data = {
        props: {}
    }

    if(session) {
        data.redirect = {
            permanent: false,
            destination: "/",
        }
    }

    return data
}

export default Auth