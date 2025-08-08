import { CatNav } from '../Components/CatNav';
import { ShopHeader } from '../Components/ShopHeader';
import { ProductCard } from '../Components/ProductCard';

export const Women = () => {
    return (
        <div className='men-container'>
            <CatNav />
            <ShopHeader title="Women" />
            <ProductCard />
        </div >
    )
}
