import LaptopCard from './LaptopCard';
import { laptops } from '../utils/constants';

const LaptopsContainer = function () {
    return (
        <div className='laptops-container'>
            {
                laptops.map((laptop, index) => (
                    <LaptopCard key={laptop.id} data={laptop} />
                ))
            }
        </div>
    )
}

export default LaptopsContainer;