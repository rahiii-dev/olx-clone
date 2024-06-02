import { User } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const {itemId} = useParams()
    return (
        <section>
            <div className="container grid grid-cols-12 gap-4 pb-3">
                <div className="image bg-black col-span-8 p-10 rounded"></div>
                <div className="col-span-4">
                    <div className='px-5 py-3 bg-white border border-gray-300 rounded mb-3'>
                        <div className="font-bold text-4xl mb-3">₹ 1,80,000</div>
                        <div className="mb-2">Duke200 extra fitting 390 display branded new condition</div>
                        <div className="flex justify-between items-center flex-nowrap text-gray-600 text-xs text-nowrap">
                            <div className="place">Aberdeen Bazar, Port Blair, Andaman & Nicobar Islands</div>
                            <div>May 23</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded">
                        <User size={38}/>
                        <div className="font-semibold text-xl">John Doe</div>
                    </div>
                </div>
                <div className="col-span-8 px-5 pt-3 pb-5 bg-white border border-gray-300 rounded">
                    <h4 className='text-xl font-bold mb-3'>Description</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod blanditiis voluptas facilis labore voluptate quibusdam quaerat a sit! Cupiditate, soluta consequatur quia impedit eius et culpa quos nemo sunt optio.</p>
                </div>
            </div>
        </section>
    );
}

export default ItemDetail;
