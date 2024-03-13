import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { restaurants, SWIGGY_API_RESPONSE } from '../utils/constants';
import { useEffect, useState } from 'react';

const RestaurantsContainer = function () {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log("component re-rendered");

    function searchRestaurants(value) {
        setSearchText(value);
    }

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
        let restaurantsListResponse = response.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        let restaurantsListNew = restaurantsListResponse.map(restaurant => {
            return restaurant.info;
        });

        setRestaurantsList(restaurantsListNew);
    }

    // Use Effect Hook
    useEffect(() => {
        fetchRestaurants();
    })

    // Conditional Rendering
    return restaurantsList.length === 0 ? <Shimmer /> : (
        <>
            <div className='search'>
                <input type="text" placeholder='Search Restaurants' className='search-input' />
                <button className='search-icon' onChange={(e) => searchRestaurants(e.target.value)}><i className="fa-solid fa-magnifying-glass"></i></button>
                <button className='sort-by-rating' onClick={() => sortByRatingDescending()}>Sort by Rating</button>
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