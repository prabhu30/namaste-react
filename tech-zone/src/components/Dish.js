import { RESTAURANT_IMAGE } from '../utils/constants';

export default function Dish({ item }) {
    // console.log(item);
    const { name, price, description, imageId } = item;
    return (
        <div className="item pt-6 py-8 border border-dashed border-x-0 border-t-0 border-b-gray-400 flex justify-between">
            <div className="item-details">
                <h1 className="item-name font-bold text-gray-800">{name}</h1>
                <p className="item-price text-sm">₹ {price / 100}</p>
                <p className="item-description pt-8 text-[0.825rem] text-gray-400 w-[80%]">{description}</p>
            </div>
            <div className="item-image flex flex-col gap-2 cursor-pointer">
                <img src={RESTAURANT_IMAGE + imageId} className='w-[120px] h-[100px] rounded-lg bg-center bg-cover' />
                <button className='px-8 py-1 font-bold text-sm text-green-500 bg-white rounded-sm border border-slate-300'>ADD</button>
            </div>
        </div>
    )
}