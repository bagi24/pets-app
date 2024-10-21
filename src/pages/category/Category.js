import React from 'react';
import SecondaryHeder from '../../components/secondaryHeder/SecondaryHeder';
import Footer from '../../components/footer/Footer';
import CategoryContent from '../../components/categoryContent/CategoryContent';
import { CategoryPageCon, CatCon } from './categoryStyles';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Category = () => {
  const location = useLocation();
  const initialName = location.state?.name || 'Join the community';
  const [name, setName] = useState(initialName);
  return (
    <CatCon>
      <CategoryPageCon>
        <SecondaryHeder name={name} setName={setName} />
        <CategoryContent />
      </CategoryPageCon>
      <Footer />
    </CatCon>
  );
};

export default Category;
