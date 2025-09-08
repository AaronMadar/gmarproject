import '../style/Post.css'


// This post component is the component that represents how each post will be seen and available in the news feed, it includes the possibility to share images or texts with friends, and allows other users to see and like.

type propspost = { url: string, description: string, likes: number, username: string, time: string, key:any }

export default function Post({ key,url, description, likes, username, time }: propspost) {



    return (
        <section className="post-box" key={key}>
            <p className="username-post">By {username}</p>
            <img src={url} className="img-post" />
            <p className="text-post">{description}</p>
            <section className="meta-post">              
                <button className="likes-post">{likes} Likes</button>
                <p className="time-post">posted : {time}</p>               
            </section>
        </section>

    )
}   