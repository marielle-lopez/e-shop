import styles from "./ProductPage.module.scss";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import Button from "../../components/Button/Button";
import NumberInput from "../../components/NumberInput/NumberInput";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";

const ProductPage = () => {
  const pathVariables = useParams();
  const id = pathVariables.id;

  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    getProductById(id).then((response) => {
      setProduct(response);
      setSelectedFormat(response.audioFormats[0]);
    });
  }, []);

  useEffect(() => {
    setQty(1);
  }, [selectedFormat]);

  return (
    <PaddingWrapper>
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
                product.audioFormats.map((format, i) => (
                  <Button
                    key={format.format}
                    handleClick={setSelectedFormat}
                    fnParams={product.audioFormats[i]}
                    text={format.format}
                    variant={
                      selectedFormat.format === format.format
                        ? "primary"
                        : "inactive"
                    }
                    size="small"
                  />
                ))}
              <p>Quantity</p>
              <div>
                <NumberInput
                  min={1}
                  max={selectedFormat.qty}
                  qty={qty}
                  setQty={setQty}
                />
              </div>
              <button className={styles.addToCart_btn} disabled={false}>
                Add to cart
              </button>
            </div>
          </div>
        )}
      </main>
    </PaddingWrapper>
  );
};

export default ProductPage;
