import React from 'react';
import Layout from '../../components/layout';
import blogs from '../../service/data.blog';
import AuthorBlog from './author.blog';
import './blog.css';
import BlogCard from './card.blog';
import BlogItem from './item.blog';

const Blog = () => {
  console.log('blog=>', blogs);
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
