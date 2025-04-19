import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../Layout/Layout";
import Loader from "../../Loader/Loader";
import styles from './ProductDetail.module.css';


function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) return <Loader />;

  if (!product) return <p>❌ Product not found</p>;

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
          <h3 className={styles.price}>${product.price}</h3>
          <p className={styles.rating}>
            Rating: ⭐ {product.rating?.rate} ({product.rating?.count})
          </p>
          <button className={styles.addToCartBtn}>Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
  
}

export default ProductDetail;



