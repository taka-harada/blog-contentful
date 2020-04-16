import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

const BlogList = () => {

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
    </Layout>
  )
}

export default BlogList

// // siteMetadataの中からValueを取得する
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `

// // graphqlの実行結果を自動的にdataに渡す
// export default ({data}) => {
//   //dataの中身を確認
//   console.log(data)
//   return (
//     <div>
//       <h1>title: {data.site.siteMetadata.title}</h1>
//       <p>author:{data.site.siteMetadata.author}</p>
//       <p>description:{data.site.siteMetadata.description}</p>
//     </div>
//   )
// }