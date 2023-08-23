import { gql } from "@apollo/client/core/index.js";


export default function (locale:string, id:string|number) {
    const query = gql `
        query projectPage {
            project(locale:"${locale}", id:${id}){
                data {
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