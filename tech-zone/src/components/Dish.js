import { RESTAURANT_IMAGE } from '../utils/constants';

export default function Dish({ item }) {
    // console.log(item);
    const { name, price, description, imageId } = item;
    return (
        <div className="item">
            <div className="item-details">
                <h1 className="item-name">{name}</h1>
                <p className="item-price">₹ {price / 100}</p>
                <p className="item-description">{description}</p>
            </div>
            <div className="item-image">
                <img src={RESTAURANT_IMAGE + imageId} />
                <button>ADD</button>
            </div>
        </div>
    )
}