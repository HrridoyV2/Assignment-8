import React, { useEffect } from 'react';
import './Detail.css'
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../fakeData';
import { useState } from 'react';

const Detail = (props) => {
    var {postId} = useParams();
    
    console.log();
    postId = Number(postId);
    console.log((postId));
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data));
        
    },[])
    console.log(comment);
    const [post, setPost] = useState({})
useEffect(() => {
    const postUrl = `https://jsonplaceholder.typicode.com/posts/${postId}`
    fetch(postUrl)
    .then(res => res.json())
    .then(data => setPost(data));
},[])


for(let i = 0; i<comment.length ;i++){
    const random = Math.floor(Math.random() * 50 + 1);
    comment[i].image = `https://randomuser.me/api/portraits/women/${random}.jpg`;
}
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            {
                comment.map(com => <div className="comment">
                    
                    <img className="img" src={com.image} alt=""/>
                    <span>{com.email}</span>
                    <p>{com.body}</p>

                <br/><br/>
                </div>)
            }
            
            
        </div>
    );
};

export default Detail;