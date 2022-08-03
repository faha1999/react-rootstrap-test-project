import React from 'react';

export const Categories = ({ categories, filterItem }) => {
  return (
    <div>
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filterBtn"
            key={index}
            onClick={() => filterItem(category)}
          ></button>
        );
      })}
    </div>
  );
};
