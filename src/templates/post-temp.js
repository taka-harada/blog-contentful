import React from "react";
import { graphql, Link } from "gatsby";

import Background from "../components/atoms/_layout/Background"
import Header from "../components/molecules/Header"
import Centered from "../components/atoms/_layout/Centered"

const BlogPost = ({ data }) => {
  const { title, featureImage, publishDate, tags, body } = data.contentfulBlog;
  //const contentHtml = data.contentfulBlog.body.childMarkdownRemark.html
  return (
    <Background>
      <Header />
      <Centered />
      <div className="blogpost">
        <h1>{title}</h1>
        <p>{publishDate}</p>
        <img src={featureImage.resize.src} alt={featureImage.title}/>
        <div className="tags">
          {tags.map(tag => (
            <li className="tag" key={tag}>
              {tag}
            </li>
          ))}
        </div>
        <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}></div>
        <Link to="/">Back to Home</Link>
      </div>
    </Background>
  );
};
export default BlogPost;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      featureImage {
        title
        resize {
          src
        }
      }
      publishDate(formatString: "Do MMMM, YYYY")
      slug
      body {
        body
        childMarkdownRemark {
          html
        }
      }
      tags
    }
  }
`;