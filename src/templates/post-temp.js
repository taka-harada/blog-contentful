import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticleWrap = styled.div`
  margin: 0 auto;
  padding: 0 80px;
  max-width: 720px;
  overflow: hidden;
  background-color: #e3e3;
`

const ArticleHero = styled.div`
  display: block;
  border: 1px solid #ddd;
`

const ArticleHeroInner = styled.div`
  padding: 35px 30px 25px;
  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 25px;
  }
  .date {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    color: #666;
    margin-bottom: 14px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    margin: 7px 0 0;
    a {
      margin: 7px 10px 0 0;
      display: inline-block;
      padding: 4px 12px 3px;
      font-size: 12px;
      line-height: 12px;
      font-weight: bold;
      color: #b0b0b0;
      border-radius: 20px;
      border: 1px solid #b0b0b0;
      :hover {
        color: #828282;
        border: 1px solid #828282;
      }
    }
  }
`

const ArticleContent = styled.div`
  margin-top: 60px;
  margin-bottom: 120px;
`

const BlogPost = ({ data }) => {
  const { title, featureImage, publishDate, tags, body } = data.contentfulBlog;
  //const contentHtml = data.contentfulBlog.body.childMarkdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
      <ArticleWrap>
        <ArticleHero>
          <ArticleHeroInner>
            <h1>{title}</h1>
            <p className="date">{publishDate}</p>
            <div className="tags">
              {tags.map(tag => (
                <Link to={tag} key={tag}>{tag}</Link>
              ))}
            </div>
            <img src={featureImage.resize.src} alt={featureImage.title}/>
          </ArticleHeroInner>
        </ArticleHero>
        <ArticleContent>
          <div className="blogpost">
            <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}></div>
            <Link to="/">Back to Home</Link>
          </div>
        </ArticleContent>
      </ArticleWrap>
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
      publishDate(formatString: "YYYY.MM.DD")
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