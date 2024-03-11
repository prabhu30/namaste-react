import LaptopCard from './LaptopCard';
import { laptops } from '../utils/constants';
import { useState } from 'react';

const LaptopsContainer = function () {
    let [laptopsList, setLaptopsList] = useState(laptops);

    function sortByPriceAscending() {
        let sortedLaptopsList = [...laptopsList].sort((laptop1, laptop2) => {
            let laptopOnePrice = Number(laptop1.price);
            let laptopTwoPrice = Number(laptop2.price);
            return laptopOnePrice - laptopTwoPrice;
        });
        setLaptopsList(sortedLaptopsList);
    }

    return (
        <>
            <div className='search'>
                <input type="text" placeholder='Search Catalog' className='search-input' />
                <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
                <button className='sort-by-price' onClick={() => sortByPriceAscending()}>Sort by Price</button>
            </div>
            <div className='laptops-container'>
                {
                    laptopsList.map((laptop, index) => (
                        <LaptopCard key={laptop.id} data={laptop} />
                    ))
                }
            </div>
        </>
    )
}

export default LaptopsContainer;