import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../LayOut/LayOut';
import ProductCard from '../../Product/ProductCard';
import Loader from '../../Loader/Loader';
import classes from './Results.module.css';

function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const sectionStyles = { padding: '30px' };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://fakestoreapi.com/products'); // or your API
        const data = await res.json();

        // Filter by category
        const filtered = data.filter(
          (item) =>
            item?.category?.toLowerCase() === categoryName?.toLowerCase()
        );

        setResults(filtered);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <h1 style={sectionStyles}>Results</h1>
        <p style={sectionStyles}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : results.length === 0 ? (
          <p style={{ padding: '20px' }}>No products found in this category.</p>
        ) : (
          <div className={classes.products_container}>
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;





