import { db } from "/src/config/firebase";
import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data = querySnapshot.docs.map((doc) => {
    console.log("Retrieved all products.");

    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
};

export const getFilteredProducts = async (property, value) => {
  const q = query(collection(db, "products"), where(property, "==", value));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    console.log("Retrieved filtered products.");

    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return data;
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Retrieved product with ID: ", id);

    return {
      id: id,
      ...docSnap.data(),
    };
  }

  throw new Error("Sorry, the product you're looking for doesn't exist.");
};

export const adjustProductQty = async (
  id,
  format,
  img,
  isOnSale,
  price,
  oldQty,
  newQty
) => {
  const docRef = doc(db, "products", id);

  await updateDoc(docRef, {
    audioFormats: arrayRemove({
      format: format,
      img: img,
      isOnSale: isOnSale,
      price: price,
      qty: oldQty,
    }),
  });

  await updateDoc(docRef, {
    audioFormats: arrayUnion({
      format: format,
      img: img,
      isOnSale: isOnSale,
      price: price,
      qty: newQty,
    }),
  });

  console.log("Adjusted product quantity.");
};
