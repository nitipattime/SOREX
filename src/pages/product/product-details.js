import React from 'react';
import ProductDetailsMain from './ProductDetailsMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetails = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ProductDetailsMain />
          <Footer />
        </div>
      </div>
          
    </>
  );
}

export default ProductDetails;
