import { gql } from "@apollo/client/core/index.js";


export default function(locale:string, id:string|number) {
    const query = gql`
        query singleBlogPage {
            blog(id:${id}, locale:"${locale}"){
                data {
                    attributes {
                        title
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
                        publishedAt
                        layout {
                            __typename
                            ...on ComponentBlogLayoutParagraph {
                                paragraph
                            }
                            ...on ComponentBlogLayoutHeading {
                                heading
                            }
                            ...on ComponentBlogLayoutQuote {
                                quote
                                author
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
            blogs(locale:"${locale}", pagination: { page: 1, pageSize: 100 }){
                data {
                    id
                    attributes {
                        title
                        publishedAt
                        thumbnail {
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
    `

    return query
}