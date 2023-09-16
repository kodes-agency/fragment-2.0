import { gql } from "@apollo/client/core/index.js";


export default function (locale:string) {
    const query = gql`
        query layoutQuery {
            menu(locale:"${locale}") {
                data {
                    attributes {
                        menuItems {
                            menuItem
                            link
                        }
                        seoTitle
                        seoDescription
                        seoKeywords
                        privacyMenuItem
                        gdprMenuItem
                        cookiesMenuItem
                        scrollDown
                        letsTalk
                        browseAll
                        readFullArticle
                        subscribeSuccess
                        subscribeToOurMailing
                        subscribePlaceholder
                        moreWork
                        viewAllBlogs
                        openCase
                        articleBy
                        facebookLink
                        instagramLink
                        linkedinLink
                        addressName
                        addressLink
                        emailName
                        emailLink
                        phoneName
                        phoneLink
                        youMayFindInteresting
                    }
                }
            }
            cookiesPolicy(locale: "${locale}") {
                data {
                    attributes {
                        bannerHeading
                        bannerDescription
                        acceptLabel
                        rejectLabel
                        settingsLabel
                        closeLabel
                        editLabel
                        necessaryLabel
                        necessaryDescription
                        trackingLabel
                        trackingDescription
                        analyticsLabel
                        analyticsDescription
                        marketingLabel
                        marketingDescription
                    }
                }
            }
        } 
    `

    return query
}