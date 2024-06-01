import { useEffect, useState } from 'react';
import dummyData from '../utils/dummy.json';
import { Heart } from 'lucide-react';

const ItemsListComponent = () => {
    const [itemList, setItemList] = useState([]);

    useEffect(() => {
        setItemList(dummyData)
    }, [])

    return (
        <section>
            <div className="container">
                <h1 className='text-2xl mb-4'>Fresh recommendations</h1>
                <div className="grid custom-grid-col gap-4 scroll-smooth">
                    {itemList.map(item => {
                        return <ItemCard key={item?.id} {...item}/>;
                    })}
                </div>
            </div>
        </section>
    );
}

const ItemCard = ({price, image, title, location, date}) => {
    return (
        <a className="p-2 border border-gray-300 rounded">
            <div className="h-[160px] overflow-hidden relative">
                <button className='absolute top-1 right-1 cursor-pointer bg-white size-10 rounded-full flex justify-center items-center'><Heart/></button>
                <img className='w-full h-auto object-center' src={image} alt="itemImage" />
            </div>
            <div className='pt-2 px-2'>
                <div className="text-xl font-bold">{price}</div>
                <div className="text-gray-500 line-clamp-1 mb-3">{title}</div>
                <div className="flex gap-2 justify-between items-center text-gray-500 text-xs">
                    <div className="line-clamp-1 uppercase">{location}</div>
                    <div className="text-nowrap">{date}</div>
                </div>
            </div>
        </a>
    );
}

export default ItemsListComponent;
