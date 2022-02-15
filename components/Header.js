import Image from "next/image"
import { useState } from 'react'
import { useRecoilState } from "recoil"
import { modalOpenState } from "../atoms/modalAtom"
import { 
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon
 } from '@heroicons/react/outline'
 import { HomeIcon } from "@heroicons/react/solid"
import { useRouter } from "next/router"
import { signOut, useSession } from "next-auth/react"

const Header = () => {

    const {data: session} = useSession()
    const router = useRouter()
    const [open, setOpen] = useRecoilState(modalOpenState)
    const [profileMenu, setProfileMenu] = useState(false)

    const addPost = () => {
        setOpen(true)
    }

    return (
        <header className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 py-3 sm:py-0 lg:mx-auto">
                {/* Logos */}
                <div onClick={() => router.push("/")} className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image
                        src="/images/InstagramLogo.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div onClick={() => router.push("/")} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src="/images/InstagramLogoSmall.png"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* Search */}
                <div className="hidden sm:flex max-w-sm">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input
                            className="bg-gray-300 bg-opacity-60 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md" 
                            type="text" 
                            placeholder="Search" 
                        />
                    </div>
                </div>

                {/* Icons */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navIcon" />
                    <div className="relative navIcon">
                        <PaperAirplaneIcon className="rotate-45 -mt-0.5 navIcon" />
                        <div className="absolute -top-1.5 -right-1.5 text-xs w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse">
                            1
                        </div>
                    </div>
                    <PlusCircleIcon onClick={addPost} className="navIcon" />
                    <UserGroupIcon className="navIcon" />
                    <HeartIcon className="navIcon"/>
                    <img 
                        onClick={() => setProfileMenu(!profileMenu)}
                        src="/images/InstagramLogoSmall.png"
                        alt="profile image"
                        className="h-10 rounded-full cursor-pointer"
                    />
                </div>
            </div>

            {/* Profile Menu */}
            {profileMenu && (
                <>
                <div onClick={() => setProfileMenu(false)} className="fixed w-screen h-screen"></div>
                <div className="absolute z-52 w-48 h-6 top-14 right-4 xl:right-28">
                    <div className="w-48 h-32 bg-white shadow-lg border rounded-lg flex flex-col text-sm">
                        <div 
                            onClick={() => { 
                                setProfileMenu(false)
                                router.push(`/profile/${session.user.username}`)
                            }}
                            className="hover:bg-gray-100 cursor-pointer px-3 flex-grow flex items-center"
                        >
                            <p className="">Profile</p>
                        </div>
                        <div
                            onClick={() => { 
                                setProfileMenu(false)
                                router.push(`/profile/${session.user.username}`)
                            }}
                            className="hover:bg-gray-100 cursor-pointer px-3 flex-grow flex items-center border-t border-b"
                        >
                            <p className="">Saved</p>
                        </div>
                        <div 
                            onClick={() => {
                                setProfileMenu(false)
                                signOut()
                            }}
                            className="hover:bg-gray-100 cursor-pointer px-3 flex-grow flex items-center"
                        >
                            <p className="">Sign Out</p>
                        </div>
                    </div>
                </div>
                </>
            )}
        </header>
    )
}

export default Header
