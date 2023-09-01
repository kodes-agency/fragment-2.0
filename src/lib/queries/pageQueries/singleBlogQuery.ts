import { gql } from "@apollo/client/core/index.js";


export default function(locale:string, slug:string) {
    const query = gql`
        query singleBlog {
            blogs(locale:"${locale}", filters: {slug: {eq: "${slug}"}}){
                data {
                    attributes {
                        title
                        slug
                        thumbnail {
                            data {
                                attributes {
                                    url
                                    formats
                                    alternativeText
                                }
                            }
                        }
                        author
                        shortDescription
                        datePublished
                        publishedAt
                        layout {
                            __typename
                            ...on ComponentBlogLayoutParagraphContent {
                                Paragraph
                            }
                            ...on ComponentBlogLayoutImage {
                                image {
                                    data {
                                        attributes {
                                            url
                                            formats
                                            alternativeText
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }   
        }
    `

    return query
}