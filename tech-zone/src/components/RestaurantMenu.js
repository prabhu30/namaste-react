import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Dish from "./Dish";
import CategoryAccordion from "./CategoryAccordion";

export default function RestaurantMenu() {

  const { id } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [recommendedItems, setRecommendedItems] = useState(null);
  const [categoryHeading, setCategoryHeading] = useState("");
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    fetchRestaurantInfo();
  }, [])

  async function fetchRestaurantInfo() {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=${id}`);
    const restaurantDetails = await response.json();
    const restaurantInfo = restaurantDetails?.data?.cards[0]?.card?.card?.info;
    let recommendedItems = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const allCategories = restaurantDetails?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const categories = allCategories.filter(category => category?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    setCategories(categories);

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

  console.log(categories);

  if (restaurantDetails === null) return <Shimmer />;

  return (
    <div className="restaurant-page  bg-gray-100">
      <div className="restaurant-menu w-[800px] m-auto pt-8">
        <p className="bread-crumb text-xs  text-gray-500"><span>Home</span> / {restaurantInfo?.city} / <span className="text-gray-900">{restaurantInfo?.name}</span></p>

        <div className="res-header py-8 px-4 border border-dashed border-t-0 border-x-0 border-b-gray-400">
          <div className="res-header-top flex justify-between">
            <div className="res-header-top-left">
              <h1 className="res-name font-bold text-xl">{restaurantInfo?.name}</h1>
              <p className="res-cuisines text-sm text-gray-500 pt-2">{restaurantInfo?.cuisines.join(', ')}</p>
              <p className="res-areaName text-sm text-gray-500 pt-0">{restaurantInfo?.areaName}, {restaurantInfo?.sla.lastMileTravelString}</p>
            </div>
            <div className="res-header-top-right border border-gray-400 rounded-lg text-green-500 text-center font-bold p-2">
              <p className="res-rating  border border-t-0 border-x-0 border-b-gray-400 pb-2"><i className="fa-sharp fa-solid fa-star"></i> {restaurantInfo?.avgRatingString}</p>
              <p className="ratings-string text-gray-400 text-xs pt-2">{restaurantInfo?.totalRatingsString}</p>
            </div>
          </div>

          <div>
            <p className="res-distance-delivery-msg text-gray-500 text-sm pt-4"> <i className="fa-solid fa-person-biking"></i> {restaurantInfo?.feeDetails?.message}</p>
          </div>
        </div>

        <div className="res-delivery-time-cost px-4 py-4 flex gap-6 text-gray-800">
          <p><i className="fa-solid fa-clock"></i> {restaurantInfo?.sla.slaString}</p>
          <p><i className="fa-solid fa-coins"></i> {restaurantInfo?.costForTwoMessage}</p>
        </div>
      </div>

      <div className="w-[800px] m-auto px-4 pt-4">
        {/* <h1 className="categoryHeading font-bold text-xl text-blue-800 pb-2">{categoryHeading} ({recommendedItems.length})</h1> */}
        {/* {
          recommendedItems.map((item) => (
            <Dish key={item.card.info.id} item={item.card.info} />
          ))
        } */}
        {
          categories.map((category, index) => (
            <CategoryAccordion key={index} category={category} />
          ))
        }
      </div>
    </div>
  )
}