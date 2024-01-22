import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
};
