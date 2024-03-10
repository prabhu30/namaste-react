import LaptopCard from './LaptopCard';

const LaptopsContainer = function () {
    return (
        <div className='laptops-container'>
            <LaptopCard name="HP Laptop 15s" price="₹ 96,248" specs="i5, 12th Gen, 16 GB RAM, 512 GB SSD" productImage="https://m.media-amazon.com/images/I/71t3PXu3lNL._AC_UY327_FMwebp_QL65_.jpg" productLink="https://amzn.eu/d/j0iAPrj" />

            <LaptopCard name="Lenovo Ideapad 3" price="₹ 33,990" specs="i3, 11th Gen, 8 GB RAM, 512 GB SSD" productImage="https://m.media-amazon.com/images/I/61jyqpkeJQL._SX679_.jpg" productLink="https://amzn.eu/d/0vGBh6M" />

            <LaptopCard name="MacBook Air M1" price="₹ 74,990" specs="i5, 12th Gen, 8 GB RAM, 256 GB SSD" productImage="https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg" productLink="https://amzn.eu/d/jl7maoK" />
        </div>
    )
}

export default LaptopsContainer;