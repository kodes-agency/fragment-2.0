import { gql } from "@apollo/client/core/index.js";

export default function (locale: string) {
  const query = gql`
        query blogsPage {
            blogsPage(locale:"${locale}"){
                data {
                    attributes {
                        heroImage {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                    formats
                                }
                            }
                        }
                        seoTitle
                        seoDescription
                        seoKeywords
                        heroHeadingBold
                        heroHeadingItalic
                        heroSubtext
                        featuredBlog {
                            data {
                                attributes {
                                    slug
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
                                }
                            }
                        }
                        blogsHeading
                        blogsSubtext
                    }
                }
            }
            blogs(locale:"${locale}", pagination: { page: 1, pageSize: 100 }){
                data {
                    attributes {
                        slug
                        title
                        datePublished
                        thumbnail {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                    formats
                                }
                            }
                        }        
                    }
                }
            }
        }
    `;

  return query;
}
