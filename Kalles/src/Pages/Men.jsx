import { CatNav } from '../Components/CatNav';
import { ShopHeader } from '../Components/ShopHeader';
import { ProductCard } from '../Components/ProductCard';

export const Men = () => {
    return (
        <div className='men-container'>
            <CatNav />
            <ShopHeader title="Men" />
            <ProductCard />
        </div >
    )
}
