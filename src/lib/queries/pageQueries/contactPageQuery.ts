import { gql } from "@apollo/client/core/index.js";


export default function (locale:string) {
    const query = gql`
        query contactPage {
            contactPage(locale: "${locale}") {
                data {
                  attributes {
                        seoTitle
                        seoDescription
                        seoKeywords
                        heroHeading
                        heroSubtextNormal
                        heroSubtextItalicBold
                        contactChannels {
                            channelName
                            channelInfo
                            channelLink
                        }
                        spotifyHeading
                        spotifySubtextNormal
                        spotifySubtextItalicBold
                        spotifyLink
                        contactBgImage {
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
    `

    return query
}