import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

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

export const getFeaturedProducts = async () => {
  const q = query(collection(db, "products"), where("isFeatured", "==", true));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
};
