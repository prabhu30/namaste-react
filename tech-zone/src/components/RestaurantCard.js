import { RESTAURANT_IMAGE, RESTAURANT_URL_PREFIX } from '../utils/constants';

const RestaurantCard = function ({ data }) {
    let { id, name, locality, areaName, avgRating, sla, cuisines, cloudinaryImageId } = data;

    const imageUrl = RESTAURANT_IMAGE + cloudinaryImageId;

    let restaurantName = name;
    let restaurantArea = areaName;
    name = name.toLowerCase().split(' ').join('-');
    locality = locality.toLowerCase().split(' ').join('-');
    areaName = areaName.toLowerCase().split(' ').join('-');

    cuisines = cuisines.join(', ');

    const restaurantLink = `${RESTAURANT_URL_PREFIX}${name}-${locality}-${areaName}-${id}`;

    return (
        <a href={restaurantLink} target="_blank" className='restaurant-card'>
            <img src={imageUrl} alt="Image of Food" className='restaurant-image' />
            <div className='restaurant-details'>
                <p className='restaurant-name'>{restaurantName}</p>
                <div className='rating-and-delivery-time'>
                    <i className="fa-solid fa-star" style={{ 'color': '#42a98f' }}></i>
                    <div className='rating'>{avgRating}</div> |
                    <div className='delivery-time'>{sla.deliveryTime} mins</div>
                </div>
                <p className='cuisines'>{cuisines}</p>
                <p className='restaurant-area'>{restaurantArea}</p>
            </div>
        </a>
    )
}

export default RestaurantCard;