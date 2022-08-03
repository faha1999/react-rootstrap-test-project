import React, { useState } from 'react';
import { Categories } from '../components/Categories';
import { FilterWorks } from './FilterWorks';
import { filterData } from '../data/filterData';

const allCategories = [
  'all',
  ...new Set(filterData.map((filterDataList) => filterDataList.category)),
];

export const Filter = () => {
  const [menuItems, setMenuItems] = useState(filterData);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === 'all') {
      setMenuItems(filterData);
      return;
    }

    const newItem = filterData.filter(
      (filterDataList) => filterDataList.category === category,
    );
    setMenuItems(newItem);
  };

  return (
    <>
      <div className="manu section">
        <div className="title">
          <h2>Our menu</h2>
        </div>
      </div>
      <Categories categories={categories} filterItem={filterItem} />
      <FilterWorks filterData={menuItems} />
    </>
  );
};
