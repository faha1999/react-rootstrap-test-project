import React, { useEffect, useState } from 'react';
import { filterData } from '../data/filterData';

export const Filter = () => {
  const [category, setCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    category === 'all'
      ? setFilteredImages(filterData)
      : setFilteredImages(
          filterData.filter((image) => image.category === category),
        );
  }, [category]);
  return (
    <div className="w100 container-fluid" id="filterWork">
      <div class="row text-center">
        <div class="col">
          <ul class="filter mb-0 pl-0">
            <TagButton
              class=" radius-2 mb-3 mb-md-0"
              name="all"
              tagActive={category === 'all' ? true : false}
              handleSetTag={setCategory}
            >
              <span class="list inner radius-2">all</span>
            </TagButton>

            <TagButton
              class=" radius-2 mb-3 mb-md-0"
              name="mobile"
              tagActive={category === 'mobile' ? true : false}
              handleSetTag={setCategory}
            >
              <span class="list inner radius-2">Mobile</span>
            </TagButton>

            <TagButton
              class=" radius-2 mb-3 mb-md-0"
              name="laptop"
              tagActive={category === 'laptop' ? true : false}
              handleSetTag={setCategory}
            >
              <span class="list inner radius-2">Laptop</span>
            </TagButton>
          </ul>
        </div>
      </div>

      <div className="row product">
        {filteredImages.map((data) => (
          <div className="col-lg-4 mb-5 itemBox ">
            <div className="item">
              <a
                className="radius-1 shadow-inner  hover-effect d-block"
                data-overlay="rgba(52,58,64,.6)"
                href={data.url}
              >
                <span className="hover-effect-container">
                  <span className="hover-effect-icon ">
                    <span className=" fas fa-eye top-icon "></span>
                  </span>
                </span>
                <div className="  p-2  ">
                  <div className="shadow radius-1">
                    <img className=" radius-1" alt={data.alt} src={data.src} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <li
      className={`category ${tagActive ? 'active' : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </li>
  );
};
