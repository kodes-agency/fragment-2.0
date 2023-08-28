import { gql } from "@apollo/client/core/index.js";

export default function(locale: string) {
  const query = gql`
        query aboutPage {
            aboutPage{
                data {
                    attributes {
                        heroHeading
                        heroSubtext
                        heroBgImage {
                            data {
                                attributes {
                                    url
                                    formats
                                    alternativeText
                                }
                            }
                        }
                        stepsHeading
                        step {
                            heading
                            text
                        }
                        servicesHeading
                        servicesSubtext
                        clientsHeading
                    }
                }
            }
            services{
                data {
                    id
                    attributes {
                        title
                        text
                    }
                }
            }
            clients(pagination: { page: 1, pageSize: 100 }){
                data {
                    attributes {
                        clientLogo {
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
    `;

  return query;
}
