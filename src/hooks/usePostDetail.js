import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db, UserCollection } from "../utils/firebase";


const usePostDetail = (itemId) => {
  const [item, setItem] = useState(null);
  const [itemloading, setItemLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemRef = doc(db, "posts", itemId);
        const itemSnap = await getDoc(itemRef);

        if (itemSnap.exists()) {
          const data = itemSnap.data();
          const q = query(UserCollection, where("uid", "==", data.userId));
          const userSnap = await getDocs(q);
          const userDetails = userSnap?.docs[0].data();

          const itemData = {
            ...data,
            user: userDetails,
          };

          setItem(itemData);
        } else {
          navigate("/");
        }
      } catch (error) {
        alert("Error fetching Item");
        navigate("/");
      } finally {
        setItemLoading(false);
      }
    };

    fetchItem();
  }, []);

  return {item, itemloading}
};

export default usePostDetail;
