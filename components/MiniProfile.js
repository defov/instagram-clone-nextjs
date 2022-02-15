import { signOut } from "next-auth/react"

const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                src="/images/InstagramLogoSmall.png"
                alt=""
                className="w-16 h-16 rounded-full border p-0.5 cursor-pointer"
            />

            <div className="flex-1 mx-4">
                <h2 className="font-bold cursor-pointer w-fit">denis</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram Clone</h3>
            </div>

            <button onClick={signOut} className="text-sm font-semibold text-blue-400">SignOut</button>
        </div>
    )
}

export default MiniProfile
