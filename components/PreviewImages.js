import {
    HeartIcon,
    ChatIcon
} from '@heroicons/react/solid'

const PreviewImages = () => {
    return (
        <div className="grid grid-cols-3 gap-1 md:gap-6">
            
            <Column 
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                likes={23}
                comments={5}
            />
            <Column 
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                likes={23}
                comments={5}
            />
            <Column 
                src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
                likes={23}
                comments={5}
            />
        </div>     
    )
}

const Column = ({ src, likes, comments}) => (
    <div className="relative group cursor-pointer">
        <img 
            src={src}
            className="w-full h-full object-cover"
        />
        <div
            className="hidden group-hover:flex justify-center items-center space-x-6 text-lg font-semibold absolute top-0 left-0 right-0 bottom-0 bg-black/30 text-white"
        >
            <div className='flex space-x-1 items-center'>
                <HeartIcon className='w-6 h-6' />
                <span>{likes}</span>
            </div>
            <div className='flex space-x-1 items-center'>
                <ChatIcon className='w-6 h-6' />
                <span>{comments}</span>
            </div>
        </div>
    </div>
)

export default PreviewImages
