import './Rating.css'

const calculateWidth = (rating, width, max) => {
    return rating * width / max;
}

const Rating = ({ rating }) => {
    return (
        <div className="rating">
            <div className="gray-stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
            </div>
            <div 
                className="yellow-stars" 
                style={{ width: calculateWidth(rating, 80, 5) }}
            >
                <div className="stars-container">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                </div>
            </div>
        </div>
    )
}
export default Rating;