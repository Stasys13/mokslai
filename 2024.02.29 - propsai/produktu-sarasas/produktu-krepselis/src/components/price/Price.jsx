// import data from "../../data/data";
import './Price.css'

const Price = ({ price, discountPercentage }) => {
    const discountPrice = (price - (price / 100 * discountPercentage)).toFixed();
    
    return (
        <div className="price mb-3">
                    {discountPercentage === 0 ? 
                        <span className="original-price">$ {price}  </span>
                        : 
                        <>
                            <span className="discount-price">$  {discountPrice}</span>
                            <span className="regular-price">$   {price}</span>
                        </>
                    }
                </div>
    )

}
export default Price;