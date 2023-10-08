/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `My Gatsby Site`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        `gatsby-plugin-sass`,
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-load-script",
            options: {
                src: "https://kit.fontawesome.com/116ecaa9e7.js"
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png"
            }
        },
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    "@styles": `src/styles`,
                    "@components": `src/components`,
                    "@assets": `src/assets`
                }
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-remark",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/"
            },
            __key: "pages"
        }
    ]
}
