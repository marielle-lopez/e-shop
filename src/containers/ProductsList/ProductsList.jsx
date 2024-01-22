import styles from "./ProductsList.module.scss";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className={styles.wrapper}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          artist={product.artist}
          coverImg={product.coverImg}
        />
      ))}
    </div>
  );
};

export default ProductsList;
