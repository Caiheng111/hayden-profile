import React from "react"
import { graphql } from "gatsby"
import LazyLoad from "react-lazyload"
import styled from "@emotion/styled"
import Layout from "@components/layout/Layout"
import { DiscussionEmbed } from "disqus-react"

export const query = graphql`
    query($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
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
        }
    }
`

const PostContainer = styled.div`
    width: 90%;
    background: black;
    margin: 0 auto;
    font-size: 1.6rem;
    padding: 10%;

    @media only screen and (max-width: 768px) {
        padding-top: 40%;
    }
`

const PostTitle = styled.span`
    display: block;
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
    margin-top: 4rem;
    margin-bottom: 2rem;

    @media only screen and (max-width: 768px) {
        margin-top: 2rem;
        font-size: 2rem;
    }
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 1rem 0;
    color: #bbb;
`

const PostImage = styled.img`
    padding: 0;
    margin: 0;
    width: 100%;
`

const PostAuthor = styled.div`
    display: flex;
    margin: 4rem 0;
    @media only screen and (max-width: 768px) {
        margin: 0;
    }
`

const PostAuthorDetails = styled.div`
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const PostProfilePic = styled.img`
    border-radius: 100%;
    width: 4rem;
    height: 4rem;

    @media only screen and (max-width: 768px) {
        width: 2rem;
        height: 2rem;
    }
`

const PostSocialLinkWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
`

const PostSocialLink = styled.span`
    margin-right: 10px;
    color: #aaa;
    @media only screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

const PostSocialProfile = styled.div`
    display: flex;
    align-content: center;
`

export default ({ data }) => {
    const post = data.markdownRemark
    const disqusConfig = {
        shortname: "frefre",
        config: { identifier: post.fields.slug, title: post.frontmatter.title }
    }

    return (
        <Layout>
            <PostContainer className="blog-template">
                <PostTitle>{post.frontmatter.title}</PostTitle>
                <PostDate>{post.frontmatter.date} </PostDate>

                <PostAuthor>
                    <PostSocialProfile>
                        <PostProfilePic src={`/profile.png`} />
                    </PostSocialProfile>
                    <PostAuthorDetails>
                        <PostSocialLinkWrapper>
                            <a
                                href="https://www.linkedin.com/in/hengcai/"
                                target="_blank"
                            >
                                <PostSocialLink>LinkedIn</PostSocialLink>
                            </a>
                            <a
                                href="https://github.com/Caiheng111"
                                target="_blank"
                            >
                                <PostSocialLink>Github</PostSocialLink>
                            </a>
                        </PostSocialLinkWrapper>
                    </PostAuthorDetails>
                </PostAuthor>
                <LazyLoad>
                    <PostImage src={post.frontmatter.thumbnail} />
                </LazyLoad>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />

                <DiscussionEmbed {...disqusConfig} />
            </PostContainer>
        </Layout>
    )
}
