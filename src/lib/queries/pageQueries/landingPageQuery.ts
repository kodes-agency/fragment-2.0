import { gql } from "@apollo/client/core/index.js";


export default function(locale: string, id:string|number) {
    const query = gql`
        query landingPage {
            landingPage(locale:"${locale}", id:${id}){
                data {
                    attributes {
                        title
                        actionButtonText
                        actionButtonLink
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
                                    alternativeText
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
                            ...on ComponentProjectLayoutBgImagaNText {
                                id
                                title
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
                            ...on ComponentProjectLayoutBgImageNDynamicText {
                                id
                                dynamicText
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
                                            formats
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
                                video {
                                    data {
                                        attributes {
                                            url
                                            alternativeText
                                            formats
                                        }
                                    }
                                }
                            }
                            ...on ComponentProjectLayoutInlineVideos {
                                id
                                Videos {
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
            }
        }
    `

    return query
}