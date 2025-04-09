import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']

function Content() {

    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    },[type])

    return (
        <div>

            {tabs.map(tab => {
                return <button key={tab} style={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333'
                } : {} } onClick={() => setType(tab)}>
                    {tab}
                </button>
            })}

            <h1>Hi anh em</h1>
            


            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title || post.name}</li>
                })}
            </ul>
        </div>
    )
}

export default Content;