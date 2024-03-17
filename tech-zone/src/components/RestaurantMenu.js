import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Dish from "./Dish";

export default function RestaurantMenu() {

  const { id } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [recommendedItems, setRecommendedItems] = useState(null);
  const [categoryHeading, setCategoryHeading] = useState("");

  useEffect(() => {
    fetchRestaurantInfo();
  }, [])

  async function fetchRestaurantInfo() {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=${id}`);
    const restaurantDetails = await response.json();
    const restaurantInfo = restaurantDetails?.data?.cards[0]?.card?.card?.info;
    let recommendedItems = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    if (!recommendedItems) {
      recommendedItems = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    }
    const categoryHeading = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title;

    // console.log(restaurantDetails);
    // console.log(restaurantDetails?.data?.cards[0]?.card?.card);
    // console.log(recommendedItems);
    // console.log(restaurantInfo);

    setRestaurantDetails(restaurantDetails);
    setRestaurantInfo(restaurantInfo);
    setCategoryHeading(categoryHeading);
    setRecommendedItems(recommendedItems);
  }

  if (restaurantDetails === null) return <Shimmer />;

  return (
    <div className="restaurant-page">
      <div className="restaurant-menu">
        <p className="bread-crumb">Home / {restaurantInfo?.city} / <span>{restaurantInfo?.name}</span></p>

        <div className="res-header">
          <div className="res-header-top">
            <div className="res-header-top-left">
              <h1 className="res-name">{restaurantInfo?.name}</h1>
              <p className="res-cuisines">{restaurantInfo?.cuisines.join(', ')}</p>
              <p className="res-areaName">{restaurantInfo?.areaName}, {restaurantInfo?.sla.lastMileTravelString}</p>
            </div>
            <div className="res-header-top-right">
              <p className="res-rating"><i className="fa-sharp fa-solid fa-star"></i> {restaurantInfo?.avgRatingString}</p>
              <p className="ratings-string">{restaurantInfo?.totalRatingsString}</p>
            </div>
          </div>

          <div>
            <p className="res-distance-delivery-msg"> <i className="fa-solid fa-person-biking"></i> {restaurantInfo?.feeDetails?.message}</p>
          </div>
        </div>

        <div className="res-delivery-time-cost">
          <p><i className="fa-solid fa-clock"></i> {restaurantInfo?.sla.slaString}</p>
          <p><i className="fa-solid fa-coins"></i> {restaurantInfo?.costForTwoMessage}</p>
        </div>
      </div>

      <div>
        <h1 className="categoryHeading">{categoryHeading} ({recommendedItems.length})</h1>
        {
          recommendedItems.map((item) => (
            <Dish key={item.card.info.id} item={item.card.info} />
          ))
        }
      </div>
    </div>
  )
}