import { useState, useEffect } from 'react';
import Post from '../post/post';
import './Posts.css'

const Posts = ({ reload }) => {
    const [info, setInfo] = useState([]);

    useEffect(() => {

        let info = localStorage.getItem('data');
        if (!info) return;
        setInfo(JSON.parse(info));


    }, [reload]);

    return (
        <>
            <div className='row'>
                <h1>Posts</h1>
                {info.map((post, index) =>
                    <Post post={post} key={index} />        
                )}
            </div>
        </>
        )
    }


    

    export default Posts