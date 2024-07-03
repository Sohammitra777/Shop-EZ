import React, { useContext } from 'react'
import { HomeContext } from '../Context/HomeContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../components/BreadCrums/BreadCrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const{all_products}=useContext(HomeContext);
  const {productId}=useParams();
  const product=all_products.find((e)=>e.id===Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
