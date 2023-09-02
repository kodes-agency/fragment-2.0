import { gql } from "@apollo/client/core/index.js";

export default function (locale: string) {
  const query = gql`
        query workPage{
            workPage(locale:"${locale}"){
                data {
                    attributes {
                        seoTitle
                        seoDescription
                        seoKeywords
                        heroHeadingBold1
                        heroHeadingItalic
                        heroHeadingBold2
                        heroSubtext
                        workHeading
                        workSubtext
                        workBackgroundImage {
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
            projects(locale:"${locale}", pagination: { page: 1, pageSize: 100 }){
                data {
                    attributes {
                        slug
                        title
                        categories {
                            data {
                                attributes {
                                    category
                                }
                            }
                        }
                        client {
                            data {
                                attributes {
                                    clientName
                                }
                            }
                        }
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
            projectCategories{
                data {
                    attributes {
                        category
                    }
                }
            }
        }
    `;

  return query;
}
