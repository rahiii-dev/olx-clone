import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { PostCollection } from "../utils/firebase";

const usePosts = () => {
    const [itemsList, setItemsList] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
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
            console.log(data);
        } catch (error) {
            alert("Error while fetching items")
        }
        finally {
            setItemsLoading(false)
        }
        };

        fetchItems();
    }, []);

    return {itemsList, itemsLoading}
}

export default usePosts;
