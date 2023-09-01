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
                        privacyMenuItem
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
                    }
                }
            }
        } 
    `

    return query
}