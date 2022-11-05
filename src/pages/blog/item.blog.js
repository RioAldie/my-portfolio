import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/layout';
import blogs from '../../service/data.blog';
import AuthorBlog from './author.blog';

const BlogItem = () => {
  const params = useParams();
  const [blog, setBlog] = useState({
    _id: '',
    title: '',
    thumbnail: '',
    content: '',
    author: {
      name: '',
      image: '',
      date: '',
    },
  });
  const getBlog = () => {
    blogs.map((blog) => {
      if (blog._id === params.id) return setBlog(blog);
    });
    return null;
  };

  useEffect(() => {
    let cleanUp = false;
    if (cleanUp === false) {
      getBlog();
    }
    return () => cleanUp === true;
  });

  return (
    <Layout theme={false}>
      <section className="blog">
        <div className="path-title">Writing Blog</div>
        <article>
          <div className="blog-title">{blog.title}</div>
          <AuthorBlog props={blog.author} />
          <img
            src={`/image/${blog.thumbnail}`}
            className="image-thumbnail"
            alt=""
            width={400}
          />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          <div className="box-navblog">
            <div className="share">back</div>
            <div className="share">
              <img src="/image/arrow-right.svg" alt="" width={50} />
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default BlogItem;
