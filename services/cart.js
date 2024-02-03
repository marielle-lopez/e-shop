import {
  getDocs,
  getDoc,
  collection,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
  where,
  query,
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

export const getCartItem = async (title, artist, format) => {
  const cartRef = collection(db, "cart");

  const q = query(
    cartRef,
    where("artist", "==", artist),
    where("title", "==", title),
    where("format", "==", format)
  );

  // const q = query(collection(db, "cart"), where("title", "==", title));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => {
    return {
      cartItemId: doc.id,
      ...doc.data(),
    };
  });

  console.log(data);

  return data;

  // try {
  //   return querySnapshot.docs.forEach((doc) => {
  //     // console.log({
  //     //   cartItemId: doc.id,
  //     //   ...doc.data(),
  //     // });

  //     return {
  //       cartItemId: doc.id,
  //       ...doc.data(),
  //     };
  //   });
  // } catch (e) {
  //   throw new Error(
  //     `${format} of ${title} by ${artist} not found in cart; ${e.message}`
  //   );
  // }

  // const docRef = doc(db, "cart", productId);
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log(`Product with ID ${productId} found in cart.`);
  //   return {
  //     cartItemId: docSnap.id,
  //     ...docSnap.data(),
  //   };
  // }
};

export const adjustCartItemQty = async (
  cartItemId,
  inStockQty,
  oldQty,
  newQty,
  unitPrice
) => {
  console.log(cartItemId, inStockQty + (oldQty - newQty), oldQty, newQty);
  const docRef = doc(db, "cart", cartItemId);

  await updateDoc(docRef, {
    inStockQty: inStockQty + (oldQty - newQty),
    qty: newQty,
    totalPrice: newQty * unitPrice,
  });

  console.log(`Adjusted quantity of cart item ${cartItemId}.`);
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
