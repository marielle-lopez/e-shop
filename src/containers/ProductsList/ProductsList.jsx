import styles from "./ProductsList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          artist={product.artist}
          coverImg={product.coverImg}
          cheapestPrice={
            product.audioFormats &&
            product.isForSale &&
            product.audioFormats.reduce((min, format) => {
              if (format.price > min || min === 0) {
                return (min = format.price);
              }
              return min;
            }, 0) / 100
          }
        />
      ))}
    </div>
  );
};

export default ProductsList;
