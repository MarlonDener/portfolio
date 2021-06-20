import React from "react";
import styled from "styled-components";
import Title from "../../components/Title/Title";
import blogs from "../../data/blogs";
import { MainLayout, InnerLayout } from "../../styles/Layouts";

const BlogsPage = () => {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blogs"} span={"Blogs"} />
        <InnerLayout className="blog">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="blog-item">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href="/">{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
};

const BlogsStyled = styled.div`
  .blog {
    margin-top: 4.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2rem 1rem 0.5rem 1rem;
    gap: 15px;
    width: 100%;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    .blog-item {
      width: 48%;
      padding: 1rem 1rem 0.5rem 1.5rem;
      background-color: var(--background-grey);
      overflow: hidden;
      @media (max-width: 800px) {
        width: 100%;
      }
    }
    .title {
      width: 100%;
      a {
        color: #fff;
        cursor: pointer;
        font-size: 0.9rem;
      }
    }
    .image {
      width: 100%;
      height: 90%;
      img {
        width: 100%;
        height: 97%;
        transition: 0.4s ease-in-out;
        object-fit: cover;
        &:hover {
          cursor: pointer;
          transform: rotate(40deg);
        }
      }
    }
  }
`;

export default BlogsPage;
