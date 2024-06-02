import { useEffect, useState } from 'react';
import dummyData from '../utils/dummy.json';
import { Heart } from 'lucide-react';

const ItemsListComponent = () => {
    const [itemList, setItemList] = useState([]);
    const [itemLoading, setItemLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setItemList(dummyData)
            setItemLoading(false)
        }, 1000)
    }, [])

    return (
        <section>
            <div className="container">
                <h1 className='text-2xl mb-4'>Fresh recommendations</h1>
                <div className="grid custom-grid-col gap-4 scroll-smooth">
                    {itemLoading ? 
                        <ItemShimmerList/>
                        : itemList.map(item => <ItemCard key={item?.id} {...item}/>)
                    }
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

const ItemCardShimmer = () => {
    return (
        <a className="p-2 border border-gray-300 rounded animate-pulse">
            <div className="h-[160px] overflow-hidden">
                <div className='bg-gray-300 w-full h-full'> </div>
            </div>
            <div className='pt-2 px-2'>
                <div className="h-4 w-[90%] bg-gray-300 rounded-full mb-2"></div>
                <div className="h-3 w-[80%] bg-gray-300 rounded-full mb-3"></div>
                <div className="h-3 w-[80%] bg-gray-300 rounded-full">
                </div>
            </div>
        </a>
    );
}

const ItemShimmerList = () => {
    return(
        <>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        <ItemCardShimmer/>
        </>
    )
}

export default ItemsListComponent;
