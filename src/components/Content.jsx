import React from 'react';

import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { FilterWorks } from '../pages/FilterWorks';

export const Content = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <Contact />
      <FilterWorks />
    </div>
  );
};
