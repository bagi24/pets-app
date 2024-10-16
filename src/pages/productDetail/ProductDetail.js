import React from 'react';
import { ProductDetailContainer, ProductDetailSpace } from './productDetailStyles';

import SecondaryHeder from '../../components/secondaryHeder/SecondaryHeder';
import Footer from '../../components/footer/Footer';
import ProductDetailContent from '../../components/productDetailContent/ProductDetailContent';

const ProductDetail = () => {
  return (
    <ProductDetailSpace>
      <ProductDetailContainer>
        <SecondaryHeder />
        <ProductDetailContent />
      </ProductDetailContainer>
      <Footer />
    </ProductDetailSpace>
  );
};

export default ProductDetail;
