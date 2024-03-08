import { useState, useEffect } from 'react';

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('data'));

        if(localData)
            setData(localData);
    }, []);

    return (
        <>
            <h1>Home</h1>
            <div className="row mt-5">
                {data.map(product => 
                    <div className="col-3">
                        <div className="image px-5">
                            <img src={product.photo} style={{ maxWidth: '100%' }} />
                        </div>
                        <h4>{product.title}</h4>
                        <div className="price">
                            $ {product.price}
                        </div>
                    </div>    
                )}
            </div>
        </>
    );
}

export default Home;