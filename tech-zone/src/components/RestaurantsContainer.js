import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { restaurants, SWIGGY_API_RESPONSE } from '../utils/constants';
import { useEffect, useState } from 'react';

const RestaurantsContainer = function () {
    console.log("component re-rendered");

    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    function searchRestaurants(value) {
        let restaurantsFilteredByText = restaurantsList.filter(restaurant => {
            return restaurant.name.toLowerCase().includes(value);
        })
        setSearchText(value);
        setFilteredRestaurants(restaurantsFilteredByText);
    }

    function sortByRatingDescending() {
        let sortedRestaurantsList = [...restaurantsList].sort((restaurant1, restaurant2) => {
            let RestaurantOneRating = Number(restaurant1.avgRating);
            let RestaurantTwoRating = Number(restaurant2.avgRating);
            return RestaurantTwoRating - RestaurantOneRating;
        });
        setFilteredRestaurants(sortedRestaurantsList);
    }

    // Use Effect Hook
    useEffect(() => {
        fetchRestaurants();
    }, []);

    const fetchRestaurants = async () => {
        const data = await fetch(SWIGGY_API_RESPONSE);
        const response = await data.json();
        const restaurantsListResponse = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const restaurantsListData = restaurantsListResponse.map(restaurant => {
            return restaurant?.info;
        });

        setRestaurantsList(restaurantsListData);
        setFilteredRestaurants(restaurantsListData);
    }

    // Use Effect Hook
    /**
     * WARNING - Placing the use Effect hook below the fetch restaurants function (in this place) has caused continous rendering issue - to be understood why
     */

    // Conditional Rendering
    return restaurantsList.length === 0 ? <Shimmer /> : (
        <>
            <div className='search'>
                <input type="text" placeholder='Search Restaurants' className='search-input' onChange={(e) => searchRestaurants(e.target.value)} />
                <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
                <button className='sort-by-rating' onClick={() => sortByRatingDescending()}>Sort by Rating</button>
            </div>
            <div className='restaurants-container'>
                {
                    filteredRestaurants.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.id} data={restaurant} />
                    ))
                }
            </div>
        </>
    )
}

export default RestaurantsContainer;