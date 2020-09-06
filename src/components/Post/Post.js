import React from 'react';
import './Post.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import { useEffect } from 'react';
const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    console.log(posts);

    return (
        <div>
            {
                posts.map(post => <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link to={'/detail/'+post.id}><Button className="btn" color="secondary" variant="contained">See More</Button></Link>
                </div>)
            }
            
            
        </div>
    );
};

export default Post;