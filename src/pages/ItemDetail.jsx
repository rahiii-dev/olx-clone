import { User } from "lucide-react";
import { useParams } from "react-router-dom";
import usePostDetail from "../hooks/usePostDetail";

const ItemDetail = () => {
  const { itemId } = useParams();
  const {item, itemloading} = usePostDetail(itemId);  

  return (
    <section>
        {itemloading ? <ItemDetailShimmer/> :
      <div className="container grid grid-cols-12 gap-4 pb-3">
        <div className="image bg-black col-span-8 p-3 rounded h-[250px] overflow-hidden">
            <img className="h-full m-auto" src={item?.image}/>
        </div>
        <div className="col-span-4">
          <div className="px-5 py-3 bg-white border border-gray-300 rounded mb-3">
            <div className="font-bold text-4xl mb-3">₹ {item?.price}</div>
            <div className="mb-2">
              {item?.title}
            </div>
            <div className="flex justify-between items-center flex-nowrap text-gray-600 text-xs text-nowrap">
              <div className="place">
                {`${item?.state}, ${item?.city}`}
              </div>
              <div>{item?.date}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded">
            <User size={38} />
            <div className="font-semibold text-xl">{item?.user?.displayName}</div>
          </div>
        </div>
        <div className="col-span-8 px-5 pt-3 pb-5 bg-white border border-gray-300 rounded">
          <h4 className="text-xl font-bold mb-3">Description</h4>
          <p>
            {item?.description}
          </p>
        </div>
      </div>}
    </section>
  );
};

const ItemDetailShimmer = () => {
    return (
        <div className="container grid grid-cols-12 gap-4 pb-3">
        <div className="bg-black col-span-8 p-3 rounded h-[250px] overflow-hidden">
        </div>
        <div className="col-span-4">
          <div className="px-5 py-3 bg-white border border-gray-300 rounded mb-3">
            <div className="h-6 w-[90%] bg-gray-300 rounded-full mb-5 animate-pulse "></div>
            <div className="mb-2 h-4 w-[90%] bg-gray-300 rounded-full animate-pulse">
            </div>
              <div className="h-5">
            </div>
          </div>
          <div className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-300 rounded">
            <div className="size-12 bg-gray-300 rounded-full animate-pulse"></div>
            <div className="h-5 w-[90%] bg-gray-300 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="col-span-8 px-5 pt-3 pb-5 bg-white border border-gray-300 rounded">
          <h4 className="text-xl font-bold mb-3">Description</h4>
          <p className="h-4 w-[90%] bg-gray-300 rounded-full animate-pulse mb-2"></p>
          <p className="h-4 w-[70%] bg-gray-300 rounded-full animate-pulse"></p>
        </div>
      </div>
    );
}

export default ItemDetail;
