import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./post.scss"
import { mediaQueries } from "../components/mediaQueries"

const ArticleWrap = styled.div`
  margin: 0 auto;
  padding: 40px 80px;
  max-width: 720px;
  overflow: hidden;
  background-color: #e3e8;
  ${mediaQueries("md")`
    padding: 16px 16px 32px;
  `}
`

const ArticleHero = styled.div`
  display: block;
  border: 1px solid #ddd;
`

const ArticleHeroInner = styled.div`
  padding: 15px 30px;
  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 15px;
  }
  .date {
    font-family: Poppins, sans-serif;
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    color: #666;
    margin-bottom: 10px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;
    a {
      margin: 0 10px 0 0;
      display: inline-block;
      padding: 4px 12px 4px;
      font-size: 12px;
      line-height: 14px;
      font-weight: 400;
      color: #9096a2;
      border-radius: 12px;
      background-color: #e8ecee;
      // border: 1px solid #b0b0b0;
      transition: all 0.3s ease 0s;
      :hover {
        // color: #828282;
        // border: 1px solid #828282;
        background-color: #dadfe3;
      }
    }
  }
  ${mediaQueries("md")`
    padding: 10px;
    h1 {
      font-size: 24px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  `}
`

const ArticleContent = styled.div`
  margin-top: 20px;
  margin-bottom: 80px;
  ${mediaQueries("md")`
    margin-top: 18px;
    margin-bottom: 40px;
  `}
`
const FeaturedImage = styled.div`
  margin: 20px 0;
  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
    text-align: center;
  }
`

const ArticleBody = styled.article`
  margin-top: 60px;
  ${mediaQueries("md")`
    margin-top: 30px;
  `}
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
            <p className="date">{publishDate}</p>
            <h1>{title}</h1>
            <div className="tags">
              {tags.map(tag => (
                <Link to={tag} key={tag}>{tag}</Link>
              ))}
            </div>
          </ArticleHeroInner>
        </ArticleHero>
        <ArticleContent>
          <FeaturedImage>
            <img src={featureImage.resize.src} alt={featureImage.title}/>
          </FeaturedImage>
          <ArticleBody>
            <div dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}></div>
            <Link to="/">Back to Home</Link>
          </ArticleBody>
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