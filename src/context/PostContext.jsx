import { createContext, useContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { PostCollection } from "../utils/firebase";

const PostContext = createContext();

export const usePostList = () => {
    return useContext(PostContext)
}

const PostContextProvider = ({children}) => {
    const [itemsList, setItemsList] = useState([]);
    const [filteredItemsList, setFilteredItemsList] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const fetchItems = async () => {
        try {
            const querySnapshot = await getDocs(PostCollection);
            const data = querySnapshot.docs.map((doc) => {
            return {
                id : doc.id,
                ...doc.data()}
            });

            setItemsList(data);
            setFilteredItemsList(data);
        } catch (error) {
            alert("Error while fetching items")
        }
        finally {
            setItemsLoading(false)
        }
        };

        fetchItems();
    }, [update]);


    const filterItems = (title = '') => {
        const filteredData = itemsList.filter((item) => {
            return item?.title.toLowerCase().includes(title.toLowerCase())
        })

        if(filteredData.length > 0){
            setFilteredItemsList(filteredData);
        }
    }

    const UpdateList = () => {
        setUpdate(!update);
    }

    return (
        <PostContext.Provider value={{itemsList : filteredItemsList, itemsLoading, filterItems, UpdateList}}>
            {children}
        </PostContext.Provider>
    );
}

export default PostContextProvider;
