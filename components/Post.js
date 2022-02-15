import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

const Post = ({ id, username, userImg, img, caption }) => {
  
    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Header */}
            <div className='flex items-center p-5'>
                <img 
                    src={userImg} 
                    alt="" 
                    className='h-12 w-12 rounded-full object-contain border p-1 mr-3 cursor-pointer'    
                />
                <div className='flex-1'>
                    <p className='font-bold w-fit cursor-pointer'>{username}</p>
                </div>
                <DotsHorizontalIcon className='h-5 cursor-pointer' />
            </div>

            {/* Image */}
            <img 
                src={img}
                alt=""
                className="object-cover w-full"
            />

            {/* Buttons */}
            <div className='flex items-center justify-between p-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='btn' />
                    <ChatIcon className='btn' />
                    <PaperAirplaneIcon className='rotate-45 -mt-0.5 btn' />
                </div>
                <BookmarkIcon className='btn' />
            </div>

            {/* Caption */}
            <p className='p-5 truncate'>
                <span className='font-bold mr-2 hover:underline cursor-pointer'>{username}</span>
                {caption}
            </p>

            {/* Comments */}

            {/* Input */}
            <form className='flex items-center p-4'>
                <EmojiHappyIcon className='h-7 cursor-pointer' />
                <input 
                    type="text"
                    placeholder='Add a comment...'
                    className='border-none flex-1 focus:ring-0 outline-none'
                />
                <button className='font-semibold text-blue-400'>Post</button>
            </form>

        </div>
    )
}

export default Post
