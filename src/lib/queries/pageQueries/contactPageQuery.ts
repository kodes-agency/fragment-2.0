import { gql } from "@apollo/client/core/index.js";


export default function (locale:string) {
    const query = gql`
        query contactPage {
            contactPage {
                data {
                  attributes {
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