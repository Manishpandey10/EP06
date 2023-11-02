import RestroCard from "./RestroCard";
// import resList from "../Utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // state Variables
  const [listOfRestraunts, setListOfRestraunts] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants]= useState([])
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2127918&lng=74.9330899&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const apiData = await data.json();
    // console.log(apiData)
    console.log(apiData.data.cards[5].card.card);
    //optional chaining

    setListOfRestraunts(
      apiData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurants(apiData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants)
  };
  //also called conditional Rendering
  // if(listOfRestraunts.length === 0 ){
  //   return <Shimmer />
  // }

  //this is array destructuring on the fly ^^^^^
  //like this.
  // const arr = useState([])
  // const[listOfRestraunts, setListOfRestraunts] = arr
  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body ">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="Search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const newList = listOfRestraunts.filter(
                (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurants(newList)
            }}
          >
            Search
          </button>
          <button onClick={()=>filteredRestaurants}>Reset Search </button>  
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            filteredList = listOfRestraunts.filter((res) => {
              return res.info.avgRating > 4.1;
            });
            console.log(filteredList);
            setFilteredRestaurants(filteredList);
          }}
        >
          Today's Top Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restraunt) => (
          <RestroCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};
export default Body;
