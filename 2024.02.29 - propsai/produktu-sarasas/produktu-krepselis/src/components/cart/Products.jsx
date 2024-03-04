import Button from '../button/Button';
import Rating from '../rating/Rating';
import Price from '../price/Price';
import './Products.css'


const Products = ({ data }) => {

    return (
        <div className="container">
            <div className="cart">
                <div className="foto">
                    <img src={data.thumbnail} alt="" />
                    <div className="nuolaida">- {data.discountPercentage} %</div>
                </div>
                <div className=" info">
                    <h2>{data.title}</h2>
                    <Rating rating={data.rating} />
                    <p>{data.description}</p>
                </div>
                <div className="add">
                    <div className="price">
                        <h2><Price 
                                price={data.price}

                                discountPercentage={data.discountPercentage} 
                            />
                        </h2>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    )
}
export default Products;