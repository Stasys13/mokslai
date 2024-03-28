import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../comments/Comments.jsx';
import MainContext from '../../context/Main.jsx';
import style from './Post.module.css';
import axios from 'axios';

const Post = ({ data, setLoading }) => {
    const [showComments, setShowComments] = useState(false);
    const { user } = useContext(MainContext);

    const handleLike = () => {
        setLoading(true);

        axios.post('http://localhost:3000/likes/', {
            post: data._id,
            author: user._id
        })
        .then(resp => console.log(resp))
        .catch(resp => console.log(err))
        .finally(() => setLoading(false));
    }

    return (
        <div className={style.post}>
            <div className={style.user}>
                <div className={style.userPhoto}>
                    <img src={'http://localhost:3000/uploads/' + data.author.photo} />
                </div>
                <div className={style.userName}>
                    <Link to={'/user/' + data.author._id}>
                        {data.author.user_name}
                    </Link>
                </div>
            </div>
            <div className={style.photo}>
                <img src={'http://localhost:3000/uploads/' + data.photo} />
            </div>
            <div className={style.actions}>
                <ul>
                    <li
                        onClick={handleLike}
                    >
                        <i className="bi bi-heart"></i>
                    </li>
                    <li
                        onClick={() => setShowComments(true)}
                    >
                        <i className="bi bi-chat-square-dots"></i>
                    </li>
                </ul>
            </div>
            <div className={style.likeCount}>
                <strong>{data.likes}</strong>
                <span>likes</span>
            </div>
            <div className={style.description}>
                <Link to={'/user/' + data.author._id}>
                    <strong className={style.userName}>
                        {data.author.user_name}
                    </strong>
                </Link>
                {data.description}
            </div>
            <div 
                className={style.commentsLink}
                onClick={() => setShowComments(true)}
            >
                <span>View All Comments</span>
            </div>
            {showComments && 
                <Comments 
                    data={data}
                    setShowComments={setShowComments} 
                />
            }
        </div>    
    );
}

export default Post;