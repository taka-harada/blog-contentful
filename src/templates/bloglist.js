import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Background from "../components/atoms/_layout/Background"
import Header from "../components/molecules/Header"
import Centered from "../components/atoms/_layout/Centered"

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
    <Background>
      <Header siteTitle="demo" />
      <Centered />
      <h1>Blog Archive</h1>
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
    </Background>
  )

}

// const ListTemplate = () => (
//   <Background>
//     <Header siteTitle="demo" />
//     <Centered />
//   </Background>
// )

export default ListTemplate;