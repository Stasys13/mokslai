
import { useEffect, useState } from 'react';
import SingleComment from '../single-comment/SingleComment.jsx';
import NewComment from '../new-comment/NewComment.jsx';
import style from './Comments.module.css';
import axios from 'axios';

const Comments = ({ data, setShowComments }) => {
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Sustabdymas
        if(loading) return;

        console.log('Vyksta krovimas');

        axios.get('http://localhost:3000/comments/' + data._id)
        .then(resp => setCommentsData(resp.data));
    }, [loading]);

    return (
        <div className={style.comments}>
            <div 
                className={style.close}
                onClick={() => setShowComments(false)}
            >
                <i className="bi bi-x"></i>
            </div>
            <div className={style.modal}>
                <div className={style.leftSide}>
                    <img 
                        src={'http://localhost:3000/uploads/' + data.photo} 
                        className={style.mainPhoto}
                    /> 
                </div>
                <div className={style.rightSide}>
                    <div className={style.userInfo}>
                        <img 
                            src={'http://localhost:3000/uploads/' + data.author.photo} 
                            className={style.userPhoto}
                        />
                        <strong className={style.userName}>{data.author.user_name}</strong>
                    </div>
                    <div className={style.commentsList}>
                        {/* Originalus aprašymas */}
                        <SingleComment data={{
                            ...data,
                            text: data.description
                        }} />  
                        {commentsData.map(comment => 
                            <SingleComment data={comment} key={comment._id} />  
                        )}
                    </div>
                    <div className={style.newComment}>
                        {loading && <div className={style.loader}>Kraunasi...</div>}
                        <NewComment 
                            post_id={data._id} 
                            setLoading={setLoading}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;
