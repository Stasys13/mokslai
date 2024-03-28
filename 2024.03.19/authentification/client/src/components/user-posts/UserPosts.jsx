import styles from './UserPosts.module.css';

const UserPosts = ({ data }) => {
    return (
        <div className={styles.posts}>
            {data && data.map(post => 
                <div className={styles.post} key={post._id}>
                    <img src={'http://localhost:3000/uploads/' + post.photo} />
                </div>
            )}
        </div>        
    );
}

export default UserPosts;