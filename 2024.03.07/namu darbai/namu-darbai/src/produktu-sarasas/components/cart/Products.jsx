import Button from '../button/Button';
import Rating from '../rating/Rating';
import Price from '../price/Price';
import './Products.css'


const Products = ({ data }) => {

    return (
        <div className="container2">
            <div className="cart2">
                <div className="foto2">
                    <img src={data.thumbnail} alt="" />
                    <div className="nuolaida">- {data.discountPercentage} %</div>
                </div>
                <div className=" info2">
                    <h2>{data.title}</h2>
                    <Rating rating={data.rating} />
                    <p>{data.description}</p>
                </div>
                <div className="add2">
                    <div className="price2">
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