import Post from "./Post";

const posts = [
    {
        id: '123',
        username: 'denis',
        userImg: '/images/InstagramLogoSmall.png',
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        caption: 'This is a new photo taken today'
    },
    {
        id: '124',
        username: 'denis',
        userImg: '/images/InstagramLogoSmall.png',
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        caption: 'This is a new photo taken today'
    },
    {
        id: '125',
        username: 'denis',
        userImg: '/images/InstagramLogoSmall.png',
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        caption: 'This is a new photo taken today'
    },
    {
        id: '126',
        username: 'denis',
        userImg: '/images/InstagramLogoSmall.png',
        img: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        caption: 'This is a new photo taken today'
    },
]

const Posts = () => {
    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />
            ))}
        </div>
    )
};

export default Posts
