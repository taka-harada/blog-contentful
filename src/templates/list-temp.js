import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Background from "../components/atoms/_layout/Background"
import Header from "../components/molecules/Header"
import Centered from "../components/atoms/_layout/Centered"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ListTemplate = () => {
  // graphql経由でValueを取得して、自動的にdataに渡す
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlog {
        edges {
          node {
            id
            slug
            title
            publishDate
            featureImage {
              id
              title
              file {
                url
              }
              resize {
                src
              }
            }
          }
        }
      }
    }
  `)

  // dataの中身を確認
  console.log(data)

  return (
    <Layout>
      <SEO title="ARCHIVE" />
      <h1>Blog Archives</h1>
      {data.allContentfulBlog.edges.map(edge => {
        return (
          <li>
            <Link to={`/blog/${edge.node.slug}`} >
              <h2>{edge.node.title}</h2>
              <img src={edge.node.featureImage.resize.src} alt={edge.node.featureImage.title}/>
            </Link>
          </li>
        )
      })}
    </Layout>
  )

}

export default ListTemplate;