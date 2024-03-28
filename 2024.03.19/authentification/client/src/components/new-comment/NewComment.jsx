import { useContext } from 'react';
import MainContext from '../../context/Main.jsx';
import style from './NewComment.module.css';
import axios from 'axios';

const NewComment = ({ post_id, setLoading }) => {
    const { user } = useContext(MainContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoading(true);

        const formData = new FormData(e.target);

        const data = {
            // LAIKINAS SPRENDIMAS
            author: user._id,
            post: post_id
        };

        for(const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        axios.post('http://localhost:3000/comments', data)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
        .finally(() => {
            // Išvalo visus formos laukelius
            e.target.reset();
            setLoading(false);
        });
    }

    return (
        <form 
            className={style.commentForm}
            onSubmit={handleSubmit}
        >
            <textarea 
                placeholder="Add a comment"
                name="text"
            ></textarea>
            <button 
                className={style.button}
            >Post</button>
        </form>
    )
}

export default NewComment;