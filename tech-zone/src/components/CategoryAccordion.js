export default function CategoryAccordion({ category }) {
    return (
        <div className="">
            <div className="flex justify-between p-3 px-4 shadow-lg bg-gray-100 my-2 rounded cursor-pointer">
                <h1 className="font-bold text-gray-700">{category?.card?.card?.title} ({category?.card?.card?.itemCards.length})</h1>
                <i className="fa-solid fa-angle-down pt-1"></i>
            </div>
        </div>
    )
}