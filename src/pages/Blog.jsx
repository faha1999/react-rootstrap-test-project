import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BlogHome } from '../components/blogs/BlogHome';
import { Blogs } from '../components/blogs/Blogs';

export const Blog = () => {
  return (
    <div className="w100" id="blog">
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/blogs/:id" element={<Blogs />} />
      </Routes>
    </div>
  );
};
