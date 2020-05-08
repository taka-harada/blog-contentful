/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const slash = require(`slash`);

// 動的にページを生成する関数
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
    {
      allContentfulBlog {
        edges {
          node {
            id
            slug
            title
            featureImage {
              title
              resize {
                src
              }
            }
            publishDate
            body {
              body
              childMarkdownRemark {
                html
              }
            }
            tags
          }
        }
      }
    }
    `
  ).then(result => {
    if (result.errors) {
      console.log("Error retrieving contentful data", result.errors);
    }

    // 利用するテンプレートファイルを指定
    const blogPostTemplate = path.resolve("./src/templates/post-temp.js");

    // GraphQLのデータを使ってページを追加する処理
    result.data.allContentfulBlog.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.slug}`,
        component: slash(blogPostTemplate),
        context: {
          slug: edge.node.slug,
          id: edge.node.id
        }
      });
    });
  })
  .catch(error => {
    console.log("Error retrieving contentful data", error);
  })
}