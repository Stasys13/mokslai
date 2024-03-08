import { useState, useEffect } from "react";
import Button from "./Button";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        // duomenu paemimas is localStorage
        //patikrinimas ar negautas null rezultatas
        //konvertuojam duomenis is JSON stringo
        //duomenu priskyrimas prie state`o

        let data = localStorage.getItem('data');

        if (!data)
            return;

        data = JSON.parse(data)
        setProducts(data);
    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for (const input of formData.entries()) {
            data[input[0]] = input[1];
        }
        const localData = (localStorage.getItem('data'));

        if (localData) {

            let convertedData = JSON.parse(localData);
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', convertedData);


        } else {
            localStorage.setItem('data', JSON.stringify([data]));
        }

        setLoading(!loading);
    }

    const remove = (index) => {
        const localData = (localStorage.getItem('data'));
        let convertedData = JSON.parse(localData);
        convertedData.splice(index, 1)
        convertedData = JSON.stringify(convertedData);
        localStorage.setItem('data', convertedData);
        setLoading(!loading);

    }

    return (
        <>
            <h1>
                <span>Products</span>
                <button
                    className="btn btn-success"
                    
                >
                    New product
                </button>
            </h1>
            {products.length > 0 ?
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Photo</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((data, index) =>
                            <tr key={index}>
                                <td>{data.title}</td>
                                <td>
                                    <img src={data.photo} style={{
                                        maxWidth: 100

                                    }} />


                                </td>
                                <td>{data.price}</td>
                                <td>{data.qty}</td>
                                <td> <Button onClick={() => remove(index)} /></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                :
                <h4>No producuts yet</h4>
            }
            <h2>New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label >Produkto pavadinimas</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                    />
                </div>
                <div className="mb-3">
                    <label >Produkto foto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="photo"
                    />
                </div>
                <div className="mb-3">
                    <label >Produkto kaina</label>
                    <input
                        type="number"
                        className="form-control"
                        name="price"
                    />
                </div>
                <div className="mb-3">
                    <label >Produkto kiekis</label>
                    <input
                        type="number"
                        className="form-control"
                        name="qty"
                    />
                </div>
                <button className="btn btn-primary">Prideti</button>
            </form>
        </>
    )
}
export default Products