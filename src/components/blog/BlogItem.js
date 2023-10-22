import React from "react"
import { Link } from "gatsby"
import LazyLoad from "react-lazyload"
import styled from "@emotion/styled"

const PostTitle = styled.span`
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    color: #000;
    margin: 1rem 0;
`

const PostDate = styled.span`
    display: block;
    margin: 0 0 1rem 0;
    color: #bbb;
`

const PostContent = styled.p`
    margin: 2rem 0;
    color: grey;
    font-size: 1rem;
`

const ImageContainer = styled.div`
    width: 100%;
    height: 300px;

    @media only screen and (max-width: 468px) {
        height: 230px;
    }
`

const PostImage = styled.img`
    padding: 0;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
`

const PostTags = styled.div`
    display: flex;
    flex-flow: row wrap;
`

function BlogItem({ post }) {
    return (
        <div className="blog">
            <Link to={post.fields.slug}>
                <LazyLoad>
                    <ImageContainer>
                        <PostImage src={post.frontmatter.thumbnail} />
                    </ImageContainer>
                </LazyLoad>
                <div key={post.id} className="blog__contents">
                    <PostDate>{post.frontmatter.date}</PostDate>
                    <PostTitle>{post.frontmatter.title} </PostTitle>
                    <PostContent>{post.excerpt}</PostContent>
                    <PostTags>
                        {post.frontmatter.tags &&
                            post.frontmatter.tags.map((tagName, index) => (
                                <p className="blog__tag">#{tagName}</p>
                            ))}
                    </PostTags>
                </div>
            </Link>
        </div>
    )
}

export default BlogItem
