import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
const BlogPost = ({ data }) => {
  const { title, featureImage, publishDate, tags } = data.contentfulBlog;
  const contentHtml = data.contentfulBlog.body.childMarkdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
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
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
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