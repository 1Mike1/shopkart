import { useState, useEffect, useRef } from 'react';
import { Card } from '../../components/cards/card';
import { GetAllProducts } from '../../services/product/productService';

export const ProductList = () => {
  const [products, setProduct] = useState([]);
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    GetAllProducts().then(
      (res) => setProduct(res.data.data));
    console.log(products);
    dataFetchedRef.current = true;
  }, [])

  return (
    <div className='container'>
      <h2><b>All Products</b> </h2>
      <div className='row row-cols-4'>
        {
          products.map
            (
              (data, index) =>
                <div className='col my-2' key={index}>
                  <Card product={data} key={index} />
                </div>
            )
        }
      </div>
    </div>
  );
}
