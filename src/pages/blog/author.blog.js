import React from 'react';

const AuthorBlog = ({ props }) => {
  console.log(props);
  const { name, image, date } = props;
  return (
    <div className="blog-author">
      <img src={`/image/${image}`} alt="" />
      <div className="detail">
        <p className="author-name">{name}</p>
        <p className="date-upload">{date}</p>
      </div>
    </div>
  );
};

export default AuthorBlog;
