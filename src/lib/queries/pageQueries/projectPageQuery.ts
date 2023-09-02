import { gql } from "@apollo/client/core/index.js";


export default function (locale:string, slug:string) {
    const query = gql `
        query projectPage {
            projects(locale:"${locale}", filters: {slug: {eq: "${slug}"}}){
                data {
                    attributes {
                        seoTitle
                        seoDescription
                        seoKeywords
                        title
                        slug
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
                                }
                            }
                        }
                        layout{
                            __typename 
                            ...on ComponentProjectLayoutDynamicText {
                                id
                                dynamicTitle
                                dynamicText
                            }
                            ...on ComponentProjectLayoutProjectCarousel {
                                id
                                images {
                                    data {
                                        attributes {
                                            url
                                            formats
                                            alternativeText
                                        }
                                    }
                                }
                            }
                            ...on ComponentProjectLayoutImageNText {
                                id
                                text
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
                            ...on ComponentProjectLayoutInlineGallery {
                                id
                                images {
                                    data {
                                        attributes {
                                            url
                                            alternativeText
                                        }
                                    }
                                }
                            }
                            ...on ComponentProjectLayoutLargeHeading {
                                id
                                heading
                            }
                            ...on ComponentProjectLayoutLargeImage {
                                id
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
                            ...on ComponentProjectLayoutParagraph {
                                id
                                paragraph
                            }
                            ...on ComponentProjectLayoutLargeVideo {
                                id
                                videoLink
                            }
                        }
                    }
                }
            }
        }
    `

    return query
}