const LaptopCard = function ({ data }) {
    const { name, price, processor, generation, ram, ssd, image, link } = data;

    return (
        <div className='laptop-card'>
            <img src={image} alt="Image of Laptop" className='laptop-image' />
            <div className='laptop-name-price'>
                <p className='laptop-name'>{name}</p>
                <p className='laptop-price'>₹ {price}</p>
            </div>
            <p className='laptop-specs'><b>Specs :-</b> {`${processor}, ${generation}th gen, ${ram}GB RAM, ${ssd}GB SSD`}</p>
            <a href={link} target='_blank' className='laptop-buy-button'>View and Buy</a>
        </div>
    )
}

export default LaptopCard;