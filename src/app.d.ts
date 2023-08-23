// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type {
  HomePage,
  ContactPage,
  WorkPage,
  AboutPage,
  LandingPage,
  Project,
  Blog,
  BlogsPage,
  Client,
  ProjectCategory,
  Service,
} from "./__generated__/graphql";



declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: string;
    }
    interface PageData {
      data?: {
        homePage?: {
          data?: {
            attributes?: HomePage;
          };
        };
        contactPage?: {
          data?: {
            attributes?: ContactPage;
          };
        };
        aboutPage?: {
          data?: {
            attributes?: AboutPage;
          };
        };
        services?:{
          data?:  Array<{ attributes?: Service  }>
          
        },
        clients?:{
          data?: Array<{ attributes?: Client }>
        }, 
        landingPage?: {
          data?: {
            attributes?: LandingPage;
          };
        },
        workPage?: {
          data?:{
            attributes?: WorkPage
          }
        }
        projects?: {
          data: Array<{ attributes?: Project }>
        }
        projectCategories?: {
          data: Array<{ attributes?: ProjectCategory }>
        }
        project?:{
          data?: {
            attributes?: Project
          }
        }
        blogsPage?:{
          data?: {
            attributes?: BlogsPage
          }
        },
        blogs:? {
          data?: Array<{ attributes?: Blog}>
        }
        blog?:{
          data?: {
            attributes?: Blog
          }
        },
      };
    }
    // interface Platform {}
  }
}

export {};
