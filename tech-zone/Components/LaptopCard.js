const LaptopCard = function (props) {
    const { name, price, specs, productImage, productLink } = props;

    return (
        <div className='laptop-card'>
            <img src={productImage} alt="Image of Laptop" className='laptop-image' />
            <div className='laptop-name-price'>
                <p className='laptop-name'>{name}</p>
                <p className='laptop-price'>{price}</p>
            </div>
            <p className='laptop-specs'><b>Specs :-</b> {specs}</p>
            <a href={productLink} target='_blank' className='laptop-buy-button'>View and Buy</a>
        </div>
    )
}

export default LaptopCard;