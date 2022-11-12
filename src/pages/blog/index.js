import React from 'react';
import Layout from '../../components/layout';
import blogs from '../../service/data.blog';
import './blog.css';
import BlogCard from './card.blog';

const Blog = () => {
  return (
    <Layout>
      <section className="blog">
        <div className="path-title">Writing Blog</div>
        <div className="blog-container">
          {blogs.map((blog, i) => {
            return (
              <BlogCard
                key={i}
                title={blog.title}
                _id={blog._id}
                date={blog.author.date}
              />
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
