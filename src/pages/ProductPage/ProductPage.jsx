import styles from "./ProductPage.module.scss";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";

const ProductPage = () => {
  const pathVariables = useParams();
  const id = pathVariables.id;

  const [product, setProduct] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response);
      setSelectedFormat(response.audioFormats[0]);
    });
  }, []);

  return (
    <main>
      {product && selectedFormat && (
        <div className={styles.wrapper}>
          <img
            className={styles.img}
            src={selectedFormat.img}
            alt={`${selectedFormat.format} of ${product.title} by ${product.artist}`}
          />
          <div className={styles.product_details}>
            <h2 className={styles.product_title}>{product.title}</h2>
            <p className={styles.product_artist}>by {product.artist}</p>
            <p className={styles.product_price}>${selectedFormat.price}</p>
            {product.audioFormats &&
              product.audioFormats.map((format) => (
                <button>{format.format}</button>
              ))}
            <p>Quantity</p>
            <button>-</button>
            <input type="number" min="1" disabled />
            <button>+</button>
            <button disabled={false}>Add to cart</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProductPage;
