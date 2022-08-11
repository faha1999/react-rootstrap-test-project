import React from 'react';

import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Contact } from '../pages/Contact';
import { Filter } from '../pages/Filter';
import { Blog } from '../pages/Blog';

export const Content = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <Contact />
      <Filter />
      <Blog />
    </div>
  );
};
