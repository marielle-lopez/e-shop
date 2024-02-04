import styles from "./ProductPage.module.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProductById,
  adjustProductQty,
  toggleProductIsFavourite,
} from "/services/products";
import { addItemToCart, getCartItem, adjustCartItemQty } from "/services/cart";
import Button from "../../components/Button/Button";
import NumberInput from "../../components/NumberInput/NumberInput";
import PaddingWrapper from "../../containers/PaddingWrapper/PaddingWrapper";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const ProductPage = () => {
  const pathVariables = useParams();
  const id = pathVariables.id;

  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(null);
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductById(id).then((response) => {
      setProduct(response);
      setSelectedFormat(response.audioFormats[0]);
      setIsFavourite(response.isFavourite);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setQty(1);
  }, [selectedFormat]);

  const handleAddToCart = () => {
    adjustProductQty(
      id,
      selectedFormat.format,
      selectedFormat.img,
      selectedFormat.isOnSale,
      selectedFormat.price,
      selectedFormat.qty,
      selectedFormat.qty - qty
    );

    getCartItem(product.title, product.artist, selectedFormat.format)
      .then((response) => {
        adjustCartItemQty(
          response[0].cartItemId,
          response[0].inStockQty,
          response[0].qty,
          response[0].qty + qty,
          response[0].unitPrice
        );
      })
      .catch((e) => {
        console.warn(e.message);
        addItemToCart(
          id,
          product.title,
          product.artist,
          selectedFormat.format,
          selectedFormat.img,
          selectedFormat.price,
          qty,
          selectedFormat.qty - qty,
          selectedFormat.isOnSale
        );
      });
  };

  return (
    <PaddingWrapper>
      <main className={styles.wrapper}>
        {loading && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}

        {product && !loading && (
          <>
            <div className={styles.product_left_section}>
              <img
                className={styles.img}
                src={selectedFormat ? selectedFormat.img : product.coverImg}
                alt={
                  selectedFormat
                    ? `${selectedFormat.format} of ${product.title} by ${product.artist}`
                    : `Cover of ${product.title} by ${product.artist}`
                }
              />
              <button
                className={styles.fave_btn}
                onClick={() => {
                  toggleProductIsFavourite(id, !isFavourite);
                  setIsFavourite(!isFavourite);
                }}
              >
                <img
                  className={
                    isFavourite
                      ? `${styles.fave} ${styles.fave__filled}`
                      : `${styles.fave}`
                  }
                  src={isFavourite ? "/favourite-filled.png" : "/favourite.png"}
                  alt="Favourite icon"
                />
              </button>
            </div>

            <div className={styles.product_details}>
              <div>
                <h2 className={styles.product_title}>{product.title}</h2>
                <p className={styles.product_artist}>by {product.artist}</p>
              </div>

              {selectedFormat ? (
                <>
                  <div>
                    <p className={styles.product_price}>
                      {selectedFormat.isOnSale && (
                        <span className={styles.sale_label}>On Sale</span>
                      )}
                      ${selectedFormat.price.toFixed(2)}
                    </p>
                    <div className={styles.formats_wrapper}>
                      {product.audioFormats &&
                        product.audioFormats.map((format, i) => (
                          <>
                            <Button
                              key={format}
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
                          </>
                        ))}
                    </div>
                  </div>

                  {selectedFormat.qty ? (
                    <>
                      <div>
                        <p>Quantity</p>
                        <div>
                          <NumberInput
                            min={1}
                            max={selectedFormat.qty}
                            qty={qty}
                            setQty={setQty}
                          />
                        </div>
                      </div>
                      <button
                        onClick={handleAddToCart}
                        className={styles.addToCart_btn}
                        disabled={false}
                      >
                        Add to cart
                      </button>
                    </>
                  ) : (
                    <>
                      <p className={styles.out_of_stock}>Out of stock</p>
                    </>
                  )}
                </>
              ) : (
                <p className={styles.coming_soon}>Coming soon</p>
              )}
            </div>
          </>
        )}
      </main>
    </PaddingWrapper>
  );
};

export default ProductPage;
