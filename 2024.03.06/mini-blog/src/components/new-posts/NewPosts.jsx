// import { useState, useEffect } from 'react';
import './NewPosts.css'

const NewPosts = ({ setReload }) => {
    
    // const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for(const [key, value] of formData.entries()) {
            data[key] = value;
        }

        
        const localData = localStorage.getItem('data');

        if (localData) {

            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);


        } else {
            localStorage.setItem('data', JSON.stringify([data]));
        }

      setReload(prev => !prev)
        
    }

    
        return (
            <>
            <form   onSubmit={handleSubmit}>
                <h1>New Post</h1>
                {/* {posts.map((data, index) => <li key={index}>{data}</li>)} */}
            <label>Post image</label>
            <input type="text" name="image" required={true}/>
            <label>Post category</label>
            <input type="text" name="category" />
            <label>Post title</label>
            <input type="text" name="title"/>
            <label>Post content</label>
            <input type="text"  name="concent"/>
            <label>Post author image</label>
            <input type="text"   name="authorImage"/>
            <label>Post author</label>
            <input type="text"  name="author"/>
            <label>Post author role</label>
            <input type="text" name="authorRole"/>
            <button className="btn btn-warning">Submit</button>
            </form>
            </>
        )
}

export default NewPosts