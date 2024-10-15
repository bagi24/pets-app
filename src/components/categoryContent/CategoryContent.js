import React from 'react';
import FourthBanner from '../fourthBanner/FourthBanner';
import FilteredContainer from '../filteredContainer/FilteredContainer';
import { CategoryContentCon } from './categoryContentStyles';

const CategoryContent = () => {
  return (
    <CategoryContentCon>
      <FourthBanner />
      <FilteredContainer />
    </CategoryContentCon>
  );
};

export default CategoryContent;
