import RestaurantCard from './RestaurantCard';
import { restaurants, SWIGGY_API_RESPONSE } from '../utils/constants';
import { useEffect, useState } from 'react';

const RestaurantsContainer = function () {
    let [restaurantsList, setRestaurantsList] = useState([]);

    function sortByRatingDescending() {
        let sortedRestaurantsList = [...restaurantsList].sort((restaurant1, restaurant2) => {
            let RestaurantOneRating = Number(restaurant1.avgRating);
            let RestaurantTwoRating = Number(restaurant2.avgRating);
            return RestaurantTwoRating - RestaurantOneRating;
        });
        setRestaurantsList(sortedRestaurantsList);
    }

    async function fetchRestaurants() {
        const data = await fetch(SWIGGY_API_RESPONSE);
        const response = await data.json();
        restaurantsListResponse = response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        restaurantsListNew = restaurantsListResponse.map(restaurant => {
            return restaurant.info;
        });
        console.log(restaurantsListNew);

        setRestaurantsList(restaurantsListNew);
    }

    useEffect(() => {
        fetchRestaurants();
    })

    return (
        <>
            <div className='search'>
                <input type="text" placeholder='Search Restaurants' className='search-input' />
                <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
                <button className='sort-by-price' onClick={() => sortByRatingDescending()}>Sort by Rating</button>
            </div>
            <div className='restaurants-container'>
                {
                    restaurantsList.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.id} data={restaurant} />
                    ))
                }
            </div>
        </>
    )
}

export default RestaurantsContainer;