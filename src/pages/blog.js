import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import BlogItem from "../components/blog/BlogItem"

export const query = graphql`
    query Blogs {
        allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        description
                        tags
                        thumbnail
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`

const BlogPage = ({ data }) => {
    console.log("HERE----------------", data)
    return (
        <Layout>
            <div className="blogs">
                <h5 className="blogs__title">Blogs</h5>

                <div className="blogs__container">
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <BlogItem key={node.id} post={node} />
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default BlogPage
