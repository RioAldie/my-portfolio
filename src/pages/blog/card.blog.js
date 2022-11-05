import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ title, _id, date }) => {
  return (
    <div className="border border-grey blog-card">
      <Link to={`/blog/${_id}`} className=" text-dark">
        <p className="title">{title}</p>
      </Link>
      <p className="date">{date}</p>
    </div>
  );
};

export default BlogCard;
