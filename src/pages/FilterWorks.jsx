import React from 'react';
import { filterData } from '../data/filterData';

export const FilterWorks = () => {
  return (
    <div className="w100 container-fluid" id="filterWork">
      <div className="row product">
        {filterData.map((data) => (
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
