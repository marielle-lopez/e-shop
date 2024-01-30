import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "/src/config/firebase";

export const getAllCartItems = async () => {
  const querySnapshot = await getDocs(collection(db, "cart"));
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  console.log("Retrieved all cart items.");

  return data;
};

export const addItemToCart = async (
  id,
  title,
  artist,
  format,
  img,
  price,
  qty,
  inStockQty,
  isOnSale
) => {
  const docRef = await addDoc(collection(db, "cart"), {
    productId: id,
    title: title,
    artist: artist,
    format: format,
    img: img,
    unitPrice: price,
    totalPrice: price * qty,
    qty: qty,
    inStockQty: inStockQty,
    isOnSale: isOnSale,
  });

  console.log(`Item with ID ${docRef.id} added to cart.`);
};

export const removeItemFromCart = async (cartItemId) => {
  await deleteDoc(doc(db, "cart", cartItemId));

  console.log(`Cart item with ID ${cartItemId} removed from cart.`);
};

export const subscribeToCart = (callback) => {
  const collectionRef = collection(db, "cart");
  const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
    const cartData = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    console.log("Retrieved cart data.");
    callback(cartData);
  });
  return unsubscribe;
};
