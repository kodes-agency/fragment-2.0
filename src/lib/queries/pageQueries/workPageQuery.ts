import { gql } from "@apollo/client/core/index.js";

export default function (locale: string) {
  const query = gql`
        query workPage{
            workPage(locale:"${locale}"){
                data {
                    attributes {
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
                                }
                            }
                        }
                    }
                }
            }
            projects(locale:"${locale}", pagination: { page: 1, pageSize: 100 }){
                data {
                    id
                    attributes {
                        title
                        category {
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
