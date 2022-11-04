import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, _id, date }) => {
  return (
    <div className="blog-card">
      <Link to={`/blog/${_id}`}>
        <p className="title">{title}</p>
      </Link>
      <p className="date">{date}</p>
    </div>
  );
};

export default BlogCard;
