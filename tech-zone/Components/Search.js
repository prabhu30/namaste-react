const Search = function () {
    return (
        <div className='search'>
            <input type="text" placeholder='Search Catalog' className='search-input' />
            <button className='search-icon'><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default Search;