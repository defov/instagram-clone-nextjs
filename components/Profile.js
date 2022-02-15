import Image from "next/image"
import { useState } from "react"
import { profileState } from '../lib/constants'
import PreviewImages from "./PreviewImages"
import {
    ViewGridIcon,
    BookmarkIcon
} from '@heroicons/react/outline'

const Profile = () => {
    const { POSTS, SAVED } = profileState
    const [active, setActive] = useState(POSTS)

    return (
        <main className="flex flex-col md:max-w-3xl xl:max-w-6xl mx-auto">
            <section className="flex p-4 sm:px-20 sm:py-10 space-x-8 sm:space-x-12 md:space-x-20">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden">
                    <Image
                        src="/images/InstagramLogoSmall.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                {/* Right side */}
                <div className="flex flex-col space-y-4  text-gray-900 mt-2">
                    <div className="flex items-center space-x-8">
                        <p className="text-2xl ">denis</p>
                        <button className="border rounded-[4px] px-3 py-0.5 font-semibold">Edit profile</button>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-bold mr-1">9</span>
                            <span>posts</span>
                        </div>
                        <div className="cursor-pointer">
                            <span className="font-bold mr-1">150</span>
                            <span className>followers</span>
                        </div>
                        <div className="cursor-pointer">
                            <span className="font-bold mr-1 ">343</span>
                            <span className>following</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex flex-col border-t-2">
                <div className="flex justify-center items-center space-x-16 text-sm text-semibold text-gray-400">
                    <Tab
                        Icon={ViewGridIcon}
                        text="posts"
                        onClick={() => setActive(POSTS)}
                        active={active===POSTS}
                    />
                    <Tab
                        Icon={BookmarkIcon}
                        text="saved"
                        active={active===SAVED}
                        onClick={() => setActive(SAVED)}
                    />                    
                </div>
                <PreviewImages />
            </section>
        </main>
    )
}

const Tab = ({ Icon, text, active, onClick }) => (
    <div onClick={onClick} className={`flex items-center space-x-1 py-4 cursor-pointer -mt-0.5 border-t-2 transition-all ease-out ${active && 'border-black text-black'}`}>
        <Icon className="w-4 h-4"/>
        <span className="uppercase">{text}</span>
    </div>
)

export default Profile
