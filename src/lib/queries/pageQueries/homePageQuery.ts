import { gql } from "@apollo/client/core/index.js";

export default function(locale:string){
    const query = gql`
      query homePage {
        homePage(locale: "${locale}") {
          data {
            attributes {
              heroHeading
              heroSubtext
              workHeading
              featuredProjects {
                data {
                  attributes {
                    title
                    client {
                      data {
                        attributes {
                          clientName
                        }
                      }
                    }
                    category {
                      data {
                        attributes {
                          category
                        }
                      }
                    }
                    thumbnail {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
              servicesSubtext
              servicesImage1 {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              servicesImage2 {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              blogHeading
              blogSubtext
              featuredBlogs {
                data {
                  attributes {
                    slug
                    title
                    publishedAt
                    thumbnail {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                  }
                }
              }
              contactHeadingBold1
              contactHeadingBold2
              contactHeadingItalicBold
              contactSubtext
              contactFormSubtext
            }
          }
        }
      }
    `;

    return query
}

