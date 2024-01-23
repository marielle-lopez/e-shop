import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const getAllCartItems = async () => {
  const querySnapshot = await getDocs(collection(db, "cart"));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  console.log(data);

  return data;
};
