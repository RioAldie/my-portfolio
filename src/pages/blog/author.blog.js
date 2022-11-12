import React from 'react';
import PropTypes from 'prop-types';
const AuthorBlog = ({ props }) => {
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

AuthorBlog.propTypes = {
  props: PropTypes.object,
};
export default AuthorBlog;
