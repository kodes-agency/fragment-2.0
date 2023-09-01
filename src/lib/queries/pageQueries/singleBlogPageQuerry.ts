import { gql } from "@apollo/client/core/index.js";


export default function(locale:string) {
    const query = gql`
        query singleBlogPage {
            blogs(locale:"${locale}", pagination: { page: 1, pageSize: 100 }){
                data {
                    attributes {
                        slug
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