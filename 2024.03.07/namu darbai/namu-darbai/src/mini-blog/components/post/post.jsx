const Post = ({ post }) => {
    return (
        <div className="post col-4">
            <img className="image" src={post.image} />
            <h5>{post.category}</h5>
            <h3>{post.title}</h3>
            <p>{post.concent}</p>
            <div className='author'>
                <img src={post.authorImage} />
                <div>
                    <div>{post.author}</div>
                    <div>{post.authorRole}</div>
                </div>
            </div>
        </div>
        )
}
    

export default Post;