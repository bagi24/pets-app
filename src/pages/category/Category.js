import React from 'react';
import SecondaryHeder from '../../components/secondaryHeder/SecondaryHeder';
import Footer from '../../components/footer/Footer';
import CategoryContent from '../../components/categoryContent/CategoryContent';
import { CategoryPageCon, CatCon } from './categoryStyles';

const Category = () => {
  return (
    <CatCon>
      <CategoryPageCon>
        <SecondaryHeder />
        <CategoryContent />
      </CategoryPageCon>
      <Footer />
    </CatCon>
  );
};

export default Category;
