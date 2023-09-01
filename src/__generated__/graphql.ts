/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlogLayoutDynamicZoneInput: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  LandingPageLayoutDynamicZoneInput: { input: any; output: any; }
  ProjectLayoutDynamicZoneInput: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AboutPage = {
  __typename?: 'AboutPage';
  clientsHeading?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroBgImage?: Maybe<UploadFileEntityResponse>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AboutPageRelationResponseCollection>;
  servicesHeading?: Maybe<Scalars['String']['output']>;
  servicesSubtext?: Maybe<Scalars['String']['output']>;
  step?: Maybe<Array<Maybe<ComponentStepsLayoutStep>>>;
  stepsHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutPageStepArgs = {
  filters?: InputMaybe<ComponentStepsLayoutStepFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  clientsHeading?: InputMaybe<Scalars['String']['input']>;
  heroBgImage?: InputMaybe<Scalars['ID']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
  servicesHeading?: InputMaybe<Scalars['String']['input']>;
  servicesSubtext?: InputMaybe<Scalars['String']['input']>;
  step?: InputMaybe<Array<InputMaybe<ComponentStepsLayoutStepInput>>>;
  stepsHeading?: InputMaybe<Scalars['String']['input']>;
};

export type AboutPageRelationResponseCollection = {
  __typename?: 'AboutPageRelationResponseCollection';
  data: Array<AboutPageEntity>;
};

export type Blog = {
  __typename?: 'Blog';
  author?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  datePublished?: Maybe<Scalars['Date']['output']>;
  layout?: Maybe<Array<Maybe<BlogLayoutDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BlogRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogLocalizationsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  datePublished?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogFiltersInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  datePublished?: InputMaybe<Scalars['Date']['input']>;
  layout?: InputMaybe<Array<Scalars['BlogLayoutDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogLayoutDynamicZone = ComponentBlogLayoutImage | ComponentBlogLayoutParagraphContent | Error;

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BlogsPage = {
  __typename?: 'BlogsPage';
  blogsHeading?: Maybe<Scalars['String']['output']>;
  blogsSubtext?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredBlog?: Maybe<BlogEntityResponse>;
  heroHeadingBold?: Maybe<Scalars['String']['output']>;
  heroHeadingItalic?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BlogsPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogsPageEntity = {
  __typename?: 'BlogsPageEntity';
  attributes?: Maybe<BlogsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogsPageEntityResponse = {
  __typename?: 'BlogsPageEntityResponse';
  data?: Maybe<BlogsPageEntity>;
};

export type BlogsPageInput = {
  blogsHeading?: InputMaybe<Scalars['String']['input']>;
  blogsSubtext?: InputMaybe<Scalars['String']['input']>;
  featuredBlog?: InputMaybe<Scalars['ID']['input']>;
  heroHeadingBold?: InputMaybe<Scalars['String']['input']>;
  heroHeadingItalic?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
};

export type BlogsPageRelationResponseCollection = {
  __typename?: 'BlogsPageRelationResponseCollection';
  data: Array<BlogsPageEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Client = {
  __typename?: 'Client';
  clientLogo?: Maybe<UploadFileEntityResponse>;
  clientName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  landingPages?: Maybe<LandingPageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ClientRelationResponseCollection>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ClientLandingPagesArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClientLocalizationsArgs = {
  filters?: InputMaybe<ClientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClientProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClientEntity = {
  __typename?: 'ClientEntity';
  attributes?: Maybe<Client>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ClientEntityResponse = {
  __typename?: 'ClientEntityResponse';
  data?: Maybe<ClientEntity>;
};

export type ClientEntityResponseCollection = {
  __typename?: 'ClientEntityResponseCollection';
  data: Array<ClientEntity>;
  meta: ResponseCollectionMeta;
};

export type ClientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  clientName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  landingPages?: InputMaybe<LandingPageFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ClientFiltersInput>;
  not?: InputMaybe<ClientFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientInput = {
  clientLogo?: InputMaybe<Scalars['ID']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  landingPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ClientRelationResponseCollection = {
  __typename?: 'ClientRelationResponseCollection';
  data: Array<ClientEntity>;
};

export type ComponentBlogLayoutHeading = {
  __typename?: 'ComponentBlogLayoutHeading';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogLayoutImage = {
  __typename?: 'ComponentBlogLayoutImage';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBlogLayoutParagraph = {
  __typename?: 'ComponentBlogLayoutParagraph';
  id: Scalars['ID']['output'];
  paragraph?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlogLayoutParagraphContent = {
  __typename?: 'ComponentBlogLayoutParagraphContent';
  Paragraph?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogLayoutQuote = {
  __typename?: 'ComponentBlogLayoutQuote';
  author?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  quote?: Maybe<Scalars['String']['output']>;
};

export type ComponentContactChannelsContactChannel = {
  __typename?: 'ComponentContactChannelsContactChannel';
  channelInfo?: Maybe<Scalars['String']['output']>;
  channelLink?: Maybe<Scalars['String']['output']>;
  channelName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentContactChannelsContactChannelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactChannelsContactChannelFiltersInput>>>;
  channelInfo?: InputMaybe<StringFilterInput>;
  channelLink?: InputMaybe<StringFilterInput>;
  channelName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactChannelsContactChannelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactChannelsContactChannelFiltersInput>>>;
};

export type ComponentContactChannelsContactChannelInput = {
  channelInfo?: InputMaybe<Scalars['String']['input']>;
  channelLink?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentGeneralStylingMixedStylesHeading = {
  __typename?: 'ComponentGeneralStylingMixedStylesHeading';
  boldText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  italicText?: Maybe<Scalars['String']['output']>;
  normalText?: Maybe<Scalars['String']['output']>;
};

export type ComponentNavMenuNavMenu = {
  __typename?: 'ComponentNavMenuNavMenu';
  id: Scalars['ID']['output'];
  menuItem?: Maybe<Scalars['String']['output']>;
};

export type ComponentNavMenuNavMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavMenuNavMenuFiltersInput>>>;
  menuItem?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavMenuNavMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavMenuNavMenuFiltersInput>>>;
};

export type ComponentNavMenuNavMenuInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  menuItem?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProjectLayoutBgImagaNText = {
  __typename?: 'ComponentProjectLayoutBgImagaNText';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectLayoutBgImageNDynamicText = {
  __typename?: 'ComponentProjectLayoutBgImageNDynamicText';
  dynamicText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentProjectLayoutDynamicText = {
  __typename?: 'ComponentProjectLayoutDynamicText';
  dynamicText?: Maybe<Scalars['String']['output']>;
  dynamicTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentProjectLayoutImageNText = {
  __typename?: 'ComponentProjectLayoutImageNText';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectLayoutInlineGallery = {
  __typename?: 'ComponentProjectLayoutInlineGallery';
  id: Scalars['ID']['output'];
  images?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentProjectLayoutInlineGalleryImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentProjectLayoutInlineVideos = {
  __typename?: 'ComponentProjectLayoutInlineVideos';
  Videos?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentProjectLayoutInlineVideosVideosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentProjectLayoutLargeHeading = {
  __typename?: 'ComponentProjectLayoutLargeHeading';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentProjectLayoutLargeImage = {
  __typename?: 'ComponentProjectLayoutLargeImage';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentProjectLayoutLargeVideo = {
  __typename?: 'ComponentProjectLayoutLargeVideo';
  id: Scalars['ID']['output'];
  video?: Maybe<UploadFileEntityResponse>;
};

export type ComponentProjectLayoutParagraph = {
  __typename?: 'ComponentProjectLayoutParagraph';
  id: Scalars['ID']['output'];
  paragraph?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectLayoutProjectCarousel = {
  __typename?: 'ComponentProjectLayoutProjectCarousel';
  id: Scalars['ID']['output'];
  images?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentProjectLayoutProjectCarouselImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentStepsLayoutStep = {
  __typename?: 'ComponentStepsLayoutStep';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentStepsLayoutStepFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentStepsLayoutStepFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentStepsLayoutStepFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStepsLayoutStepFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentStepsLayoutStepInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  contactBgImage?: Maybe<UploadFileEntityResponse>;
  contactChannels?: Maybe<Array<Maybe<ComponentContactChannelsContactChannel>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubtextItalicBold?: Maybe<Scalars['String']['output']>;
  heroSubtextNormal?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContactPageRelationResponseCollection>;
  spotifyHeading?: Maybe<Scalars['String']['output']>;
  spotifyLink?: Maybe<Scalars['String']['output']>;
  spotifySubtextItalicBold?: Maybe<Scalars['String']['output']>;
  spotifySubtextNormal?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactPageContactChannelsArgs = {
  filters?: InputMaybe<ComponentContactChannelsContactChannelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactPageEntity = {
  __typename?: 'ContactPageEntity';
  attributes?: Maybe<ContactPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactPageEntityResponse = {
  __typename?: 'ContactPageEntityResponse';
  data?: Maybe<ContactPageEntity>;
};

export type ContactPageInput = {
  contactBgImage?: InputMaybe<Scalars['ID']['input']>;
  contactChannels?: InputMaybe<Array<InputMaybe<ComponentContactChannelsContactChannelInput>>>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubtextItalicBold?: InputMaybe<Scalars['String']['input']>;
  heroSubtextNormal?: InputMaybe<Scalars['String']['input']>;
  spotifyHeading?: InputMaybe<Scalars['String']['input']>;
  spotifyLink?: InputMaybe<Scalars['String']['input']>;
  spotifySubtextItalicBold?: InputMaybe<Scalars['String']['input']>;
  spotifySubtextNormal?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPageRelationResponseCollection = {
  __typename?: 'ContactPageRelationResponseCollection';
  data: Array<ContactPageEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AboutPage | Blog | BlogsPage | Client | ComponentBlogLayoutHeading | ComponentBlogLayoutImage | ComponentBlogLayoutParagraph | ComponentBlogLayoutParagraphContent | ComponentBlogLayoutQuote | ComponentContactChannelsContactChannel | ComponentGeneralStylingMixedStylesHeading | ComponentNavMenuNavMenu | ComponentProjectLayoutBgImagaNText | ComponentProjectLayoutBgImageNDynamicText | ComponentProjectLayoutDynamicText | ComponentProjectLayoutImageNText | ComponentProjectLayoutInlineGallery | ComponentProjectLayoutInlineVideos | ComponentProjectLayoutLargeHeading | ComponentProjectLayoutLargeImage | ComponentProjectLayoutLargeVideo | ComponentProjectLayoutParagraph | ComponentProjectLayoutProjectCarousel | ComponentStepsLayoutStep | ContactPage | HomePage | I18NLocale | LandingPage | Menu | Project | ProjectCategory | Service | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | WorkPage;

export type HomePage = {
  __typename?: 'HomePage';
  blogHeading?: Maybe<Scalars['String']['output']>;
  blogSubtext?: Maybe<Scalars['String']['output']>;
  contactFormSubtext?: Maybe<Scalars['String']['output']>;
  contactHeadingBold1?: Maybe<Scalars['String']['output']>;
  contactHeadingBold2?: Maybe<Scalars['String']['output']>;
  contactHeadingItalicBold?: Maybe<Scalars['String']['output']>;
  contactSubtext?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredBlogs?: Maybe<BlogRelationResponseCollection>;
  featuredProjects?: Maybe<ProjectRelationResponseCollection>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  servicesImage1?: Maybe<UploadFileEntityResponse>;
  servicesImage2?: Maybe<UploadFileEntityResponse>;
  servicesSubtext?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workHeading?: Maybe<Scalars['String']['output']>;
};


export type HomePageFeaturedBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageFeaturedProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  blogHeading?: InputMaybe<Scalars['String']['input']>;
  blogSubtext?: InputMaybe<Scalars['String']['input']>;
  contactFormSubtext?: InputMaybe<Scalars['String']['input']>;
  contactHeadingBold1?: InputMaybe<Scalars['String']['input']>;
  contactHeadingBold2?: InputMaybe<Scalars['String']['input']>;
  contactHeadingItalicBold?: InputMaybe<Scalars['String']['input']>;
  contactSubtext?: InputMaybe<Scalars['String']['input']>;
  featuredBlogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featuredProjects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
  servicesImage1?: InputMaybe<Scalars['ID']['input']>;
  servicesImage2?: InputMaybe<Scalars['ID']['input']>;
  servicesSubtext?: InputMaybe<Scalars['String']['input']>;
  workHeading?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LandingPage = {
  __typename?: 'LandingPage';
  actionButtonLink?: Maybe<Scalars['String']['output']>;
  actionButtonText?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ProjectCategoryEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  layout?: Maybe<Array<Maybe<LandingPageLayoutDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<LandingPageRelationResponseCollection>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LandingPageLocalizationsArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingPageEntity = {
  __typename?: 'LandingPageEntity';
  attributes?: Maybe<LandingPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingPageEntityResponse = {
  __typename?: 'LandingPageEntityResponse';
  data?: Maybe<LandingPageEntity>;
};

export type LandingPageEntityResponseCollection = {
  __typename?: 'LandingPageEntityResponseCollection';
  data: Array<LandingPageEntity>;
  meta: ResponseCollectionMeta;
};

export type LandingPageFiltersInput = {
  actionButtonLink?: InputMaybe<StringFilterInput>;
  actionButtonText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LandingPageFiltersInput>>>;
  category?: InputMaybe<ProjectCategoryFiltersInput>;
  client?: InputMaybe<ClientFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<LandingPageFiltersInput>;
  not?: InputMaybe<LandingPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LandingPageFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LandingPageInput = {
  actionButtonLink?: InputMaybe<Scalars['String']['input']>;
  actionButtonText?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  client?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Array<Scalars['LandingPageLayoutDynamicZoneInput']['input']>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageLayoutDynamicZone = ComponentProjectLayoutBgImagaNText | ComponentProjectLayoutBgImageNDynamicText | ComponentProjectLayoutDynamicText | ComponentProjectLayoutImageNText | ComponentProjectLayoutInlineGallery | ComponentProjectLayoutInlineVideos | ComponentProjectLayoutLargeHeading | ComponentProjectLayoutLargeImage | ComponentProjectLayoutLargeVideo | ComponentProjectLayoutParagraph | ComponentProjectLayoutProjectCarousel | Error;

export type LandingPageRelationResponseCollection = {
  __typename?: 'LandingPageRelationResponseCollection';
  data: Array<LandingPageEntity>;
};

export type Menu = {
  __typename?: 'Menu';
  browseAll?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  letsTalk?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menuItems?: Maybe<Array<Maybe<ComponentNavMenuNavMenu>>>;
  moreWork?: Maybe<Scalars['String']['output']>;
  openCase?: Maybe<Scalars['String']['output']>;
  readFullArticle?: Maybe<Scalars['String']['output']>;
  scrollDown?: Maybe<Scalars['String']['output']>;
  subscribePlaceholder?: Maybe<Scalars['String']['output']>;
  subscribeSuccess?: Maybe<Scalars['String']['output']>;
  subscribeToOurMailing?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewAllBlogs?: Maybe<Scalars['String']['output']>;
};


export type MenuMenuItemsArgs = {
  filters?: InputMaybe<ComponentNavMenuNavMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuInput = {
  browseAll?: InputMaybe<Scalars['String']['input']>;
  letsTalk?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<Array<InputMaybe<ComponentNavMenuNavMenuInput>>>;
  moreWork?: InputMaybe<Scalars['String']['input']>;
  openCase?: InputMaybe<Scalars['String']['input']>;
  readFullArticle?: InputMaybe<Scalars['String']['input']>;
  scrollDown?: InputMaybe<Scalars['String']['input']>;
  subscribePlaceholder?: InputMaybe<Scalars['String']['input']>;
  subscribeSuccess?: InputMaybe<Scalars['String']['input']>;
  subscribeToOurMailing?: InputMaybe<Scalars['String']['input']>;
  viewAllBlogs?: InputMaybe<Scalars['String']['input']>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutPageLocalization?: Maybe<AboutPageEntityResponse>;
  createBlog?: Maybe<BlogEntityResponse>;
  createBlogLocalization?: Maybe<BlogEntityResponse>;
  createBlogsPageLocalization?: Maybe<BlogsPageEntityResponse>;
  createClient?: Maybe<ClientEntityResponse>;
  createClientLocalization?: Maybe<ClientEntityResponse>;
  createContactPageLocalization?: Maybe<ContactPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createLandingPage?: Maybe<LandingPageEntityResponse>;
  createLandingPageLocalization?: Maybe<LandingPageEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createProjectCategory?: Maybe<ProjectCategoryEntityResponse>;
  createProjectLocalization?: Maybe<ProjectEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createServiceLocalization?: Maybe<ServiceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWorkPageLocalization?: Maybe<WorkPageEntityResponse>;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteBlogsPage?: Maybe<BlogsPageEntityResponse>;
  deleteClient?: Maybe<ClientEntityResponse>;
  deleteContactPage?: Maybe<ContactPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteLandingPage?: Maybe<LandingPageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteProjectCategory?: Maybe<ProjectCategoryEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWorkPage?: Maybe<WorkPageEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateBlogsPage?: Maybe<BlogsPageEntityResponse>;
  updateClient?: Maybe<ClientEntityResponse>;
  updateContactPage?: Maybe<ContactPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateLandingPage?: Maybe<LandingPageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateProjectCategory?: Maybe<ProjectCategoryEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWorkPage?: Maybe<WorkPageEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAboutPageLocalizationArgs = {
  data?: InputMaybe<AboutPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogsPageLocalizationArgs = {
  data?: InputMaybe<BlogsPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateClientArgs = {
  data: ClientInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateClientLocalizationArgs = {
  data?: InputMaybe<ClientInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactPageLocalizationArgs = {
  data?: InputMaybe<ContactPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLandingPageArgs = {
  data: LandingPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLandingPageLocalizationArgs = {
  data?: InputMaybe<LandingPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectCategoryArgs = {
  data: ProjectCategoryInput;
};


export type MutationCreateProjectLocalizationArgs = {
  data?: InputMaybe<ProjectInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateServiceLocalizationArgs = {
  data?: InputMaybe<ServiceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWorkPageLocalizationArgs = {
  data?: InputMaybe<WorkPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteBlogsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLandingPageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateBlogsPageArgs = {
  data: BlogsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateClientArgs = {
  data: ClientInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateLandingPageArgs = {
  data: LandingPageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProjectCategoryArgs = {
  data: ProjectCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkPageArgs = {
  data: WorkPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  category?: Maybe<ProjectCategoryEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  layout?: Maybe<Array<Maybe<ProjectLayoutDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ProjectRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectLocalizationsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectCategory = {
  __typename?: 'ProjectCategory';
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  landingPages?: Maybe<LandingPageRelationResponseCollection>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectCategoryLandingPagesArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProjectCategoryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectCategoryEntity = {
  __typename?: 'ProjectCategoryEntity';
  attributes?: Maybe<ProjectCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectCategoryEntityResponse = {
  __typename?: 'ProjectCategoryEntityResponse';
  data?: Maybe<ProjectCategoryEntity>;
};

export type ProjectCategoryEntityResponseCollection = {
  __typename?: 'ProjectCategoryEntityResponseCollection';
  data: Array<ProjectCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectCategoryFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  landingPages?: InputMaybe<LandingPageFiltersInput>;
  not?: InputMaybe<ProjectCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectCategoryFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectCategoryInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  landingPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  category?: InputMaybe<ProjectCategoryFiltersInput>;
  client?: InputMaybe<ClientFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProjectFiltersInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  client?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  layout?: InputMaybe<Array<Scalars['ProjectLayoutDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLayoutDynamicZone = ComponentProjectLayoutBgImagaNText | ComponentProjectLayoutBgImageNDynamicText | ComponentProjectLayoutDynamicText | ComponentProjectLayoutImageNText | ComponentProjectLayoutInlineGallery | ComponentProjectLayoutInlineVideos | ComponentProjectLayoutLargeHeading | ComponentProjectLayoutLargeImage | ComponentProjectLayoutLargeVideo | ComponentProjectLayoutParagraph | ComponentProjectLayoutProjectCarousel | Error;

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  blog?: Maybe<BlogEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  blogsPage?: Maybe<BlogsPageEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  clients?: Maybe<ClientEntityResponseCollection>;
  contactPage?: Maybe<ContactPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  landingPage?: Maybe<LandingPageEntityResponse>;
  landingPages?: Maybe<LandingPageEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  project?: Maybe<ProjectEntityResponse>;
  projectCategories?: Maybe<ProjectCategoryEntityResponseCollection>;
  projectCategory?: Maybe<ProjectCategoryEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  workPage?: Maybe<WorkPageEntityResponse>;
};


export type QueryAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryClientArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryClientsArgs = {
  filters?: InputMaybe<ClientFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLandingPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryLandingPagesArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryProjectCategoriesArgs = {
  filters?: InputMaybe<ProjectCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ServiceRelationResponseCollection>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceLocalizationsArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ServiceFiltersInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  data: Array<ServiceEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type WorkPage = {
  __typename?: 'WorkPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeadingBold1?: Maybe<Scalars['String']['output']>;
  heroHeadingBold2?: Maybe<Scalars['String']['output']>;
  heroHeadingItalic?: Maybe<Scalars['String']['output']>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WorkPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workBackgroundImage?: Maybe<UploadFileEntityResponse>;
  workHeading?: Maybe<Scalars['String']['output']>;
  workSubtext?: Maybe<Scalars['String']['output']>;
};

export type WorkPageEntity = {
  __typename?: 'WorkPageEntity';
  attributes?: Maybe<WorkPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkPageEntityResponse = {
  __typename?: 'WorkPageEntityResponse';
  data?: Maybe<WorkPageEntity>;
};

export type WorkPageInput = {
  heroHeadingBold1?: InputMaybe<Scalars['String']['input']>;
  heroHeadingBold2?: InputMaybe<Scalars['String']['input']>;
  heroHeadingItalic?: InputMaybe<Scalars['String']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
  workBackgroundImage?: InputMaybe<Scalars['ID']['input']>;
  workHeading?: InputMaybe<Scalars['String']['input']>;
  workSubtext?: InputMaybe<Scalars['String']['input']>;
};

export type WorkPageRelationResponseCollection = {
  __typename?: 'WorkPageRelationResponseCollection';
  data: Array<WorkPageEntity>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', heroHeading?: string | null, heroSubtext?: string | null, stepsHeading?: string | null, servicesHeading?: string | null, servicesSubtext?: string | null, clientsHeading?: string | null, heroBgImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, step?: Array<{ __typename?: 'ComponentStepsLayoutStep', heading?: string | null, text?: string | null } | null> | null } | null } | null } | null, services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', title?: string | null, text?: string | null } | null }> } | null, clients?: { __typename?: 'ClientEntityResponseCollection', data: Array<{ __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientLogo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type BlogsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogsPageQuery = { __typename?: 'Query', blogsPage?: { __typename?: 'BlogsPageEntityResponse', data?: { __typename?: 'BlogsPageEntity', attributes?: { __typename?: 'BlogsPage', heroHeadingBold?: string | null, heroHeadingItalic?: string | null, heroSubtext?: string | null, blogsHeading?: string | null, blogsSubtext?: string | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null, featuredBlog?: { __typename?: 'BlogEntityResponse', data?: { __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', title?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null } | null } | null, blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', slug: string, title?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { __typename?: 'Query', contactPage?: { __typename?: 'ContactPageEntityResponse', data?: { __typename?: 'ContactPageEntity', attributes?: { __typename?: 'ContactPage', heroHeading?: string | null, heroSubtextNormal?: string | null, heroSubtextItalicBold?: string | null, spotifyHeading?: string | null, spotifySubtextNormal?: string | null, spotifySubtextItalicBold?: string | null, spotifyLink?: string | null, contactChannels?: Array<{ __typename?: 'ComponentContactChannelsContactChannel', channelName?: string | null, channelInfo?: string | null, channelLink?: string | null } | null> | null, contactBgImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', heroHeading?: string | null, heroSubtext?: string | null, workHeading?: string | null, servicesSubtext?: string | null, blogHeading?: string | null, blogSubtext?: string | null, contactHeadingBold1?: string | null, contactHeadingBold2?: string | null, contactHeadingItalicBold?: string | null, contactSubtext?: string | null, contactFormSubtext?: string | null, featuredProjects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', title?: string | null, client?: { __typename?: 'ClientEntityResponse', data?: { __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientName?: string | null } | null } | null } | null, category?: { __typename?: 'ProjectCategoryEntityResponse', data?: { __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null } | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null, servicesImage1?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, servicesImage2?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, featuredBlogs?: { __typename?: 'BlogRelationResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', slug: string, title?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQueryQuery = { __typename?: 'Query', menu?: { __typename?: 'MenuEntityResponse', data?: { __typename?: 'MenuEntity', attributes?: { __typename?: 'Menu', scrollDown?: string | null, letsTalk?: string | null, browseAll?: string | null, readFullArticle?: string | null, subscribeSuccess?: string | null, subscribeToOurMailing?: string | null, subscribePlaceholder?: string | null, moreWork?: string | null, viewAllBlogs?: string | null, openCase?: string | null, menuItems?: Array<{ __typename?: 'ComponentNavMenuNavMenu', menuItem?: string | null } | null> | null } | null } | null } | null, contactPage?: { __typename?: 'ContactPageEntityResponse', data?: { __typename?: 'ContactPageEntity', attributes?: { __typename?: 'ContactPage', contactChannels?: Array<{ __typename?: 'ComponentContactChannelsContactChannel', channelName?: string | null, channelInfo?: string | null, channelLink?: string | null } | null> | null } | null } | null } | null };

export type ProjectPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectPageQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', title?: string | null, slug: string, category?: { __typename?: 'ProjectCategoryEntityResponse', data?: { __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null } | null } | null, client?: { __typename?: 'ClientEntityResponse', data?: { __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientName?: string | null } | null } | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } | null, layout?: Array<{ __typename: 'ComponentProjectLayoutBgImagaNText', id: string, title?: string | null, text?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutBgImageNDynamicText', id: string, dynamicText?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutDynamicText', id: string, dynamicTitle?: string | null, dynamicText?: string | null } | { __typename: 'ComponentProjectLayoutImageNText', id: string, text?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutInlineGallery', id: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> } | null } | { __typename: 'ComponentProjectLayoutInlineVideos', id: string, Videos?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null }> } | null } | { __typename: 'ComponentProjectLayoutLargeHeading', id: string, heading?: string | null } | { __typename: 'ComponentProjectLayoutLargeImage', id: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutLargeVideo', id: string, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutParagraph', id: string, paragraph?: string | null } | { __typename: 'ComponentProjectLayoutProjectCarousel', id: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null }> } | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type SingleBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SingleBlogPageQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', slug: string, title?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type SingleBlogQueryVariables = Exact<{ [key: string]: never; }>;


export type SingleBlogQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', title?: string | null, slug: string, author?: string | null, shortDescription?: string | null, datePublished?: any | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, layout?: Array<{ __typename: 'ComponentBlogLayoutImage', image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentBlogLayoutParagraphContent', Paragraph?: string | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type WorkPageQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkPageQuery = { __typename?: 'Query', workPage?: { __typename?: 'WorkPageEntityResponse', data?: { __typename?: 'WorkPageEntity', attributes?: { __typename?: 'WorkPage', heroHeadingBold1?: string | null, heroHeadingItalic?: string | null, heroHeadingBold2?: string | null, heroSubtext?: string | null, workHeading?: string | null, workSubtext?: string | null, workBackgroundImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | null } | null } | null, projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', slug: string, title?: string | null, category?: { __typename?: 'ProjectCategoryEntityResponse', data?: { __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null } | null } | null, client?: { __typename?: 'ClientEntityResponse', data?: { __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientName?: string | null } | null } | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null, projectCategories?: { __typename?: 'ProjectCategoryEntityResponseCollection', data: Array<{ __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null }> } | null };


export const AboutPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"aboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aboutPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"heroBgImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"stepsHeading"}},{"kind":"Field","name":{"kind":"Name","value":"step"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"servicesHeading"}},{"kind":"Field","name":{"kind":"Name","value":"servicesSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"clientsHeading"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"services"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"clients"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<AboutPageQuery, AboutPageQueryVariables>;
export const BlogsPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"blogsPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogsPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"heroHeadingBold"}},{"kind":"Field","name":{"kind":"Name","value":"heroHeadingItalic"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"featuredBlog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogsHeading"}},{"kind":"Field","name":{"kind":"Name","value":"blogsSubtext"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<BlogsPageQuery, BlogsPageQueryVariables>;
export const ContactPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"contactPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtextNormal"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtextItalicBold"}},{"kind":"Field","name":{"kind":"Name","value":"contactChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelName"}},{"kind":"Field","name":{"kind":"Name","value":"channelInfo"}},{"kind":"Field","name":{"kind":"Name","value":"channelLink"}}]}},{"kind":"Field","name":{"kind":"Name","value":"spotifyHeading"}},{"kind":"Field","name":{"kind":"Name","value":"spotifySubtextNormal"}},{"kind":"Field","name":{"kind":"Name","value":"spotifySubtextItalicBold"}},{"kind":"Field","name":{"kind":"Name","value":"spotifyLink"}},{"kind":"Field","name":{"kind":"Name","value":"contactBgImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ContactPageQuery, ContactPageQueryVariables>;
export const HomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"homePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"homePage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeading"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"workHeading"}},{"kind":"Field","name":{"kind":"Name","value":"featuredProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"servicesSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"servicesImage1"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"servicesImage2"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogHeading"}},{"kind":"Field","name":{"kind":"Name","value":"blogSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"featuredBlogs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactHeadingBold1"}},{"kind":"Field","name":{"kind":"Name","value":"contactHeadingBold2"}},{"kind":"Field","name":{"kind":"Name","value":"contactHeadingItalicBold"}},{"kind":"Field","name":{"kind":"Name","value":"contactSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"contactFormSubtext"}}]}}]}}]}}]}}]} as unknown as DocumentNode<HomePageQuery, HomePageQueryVariables>;
export const LayoutQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"layoutQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menu"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"menuItem"}}]}},{"kind":"Field","name":{"kind":"Name","value":"scrollDown"}},{"kind":"Field","name":{"kind":"Name","value":"letsTalk"}},{"kind":"Field","name":{"kind":"Name","value":"browseAll"}},{"kind":"Field","name":{"kind":"Name","value":"readFullArticle"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeSuccess"}},{"kind":"Field","name":{"kind":"Name","value":"subscribeToOurMailing"}},{"kind":"Field","name":{"kind":"Name","value":"subscribePlaceholder"}},{"kind":"Field","name":{"kind":"Name","value":"moreWork"}},{"kind":"Field","name":{"kind":"Name","value":"viewAllBlogs"}},{"kind":"Field","name":{"kind":"Name","value":"openCase"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"contactPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contactChannels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"channelName"}},{"kind":"Field","name":{"kind":"Name","value":"channelInfo"}},{"kind":"Field","name":{"kind":"Name","value":"channelLink"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LayoutQueryQuery, LayoutQueryQueryVariables>;
export const ProjectPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"projectPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutDynamicText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dynamicTitle"}},{"kind":"Field","name":{"kind":"Name","value":"dynamicText"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutProjectCarousel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutBgImagaNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutBgImageNDynamicText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dynamicText"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutImageNText"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutInlineGallery"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutLargeHeading"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutLargeImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutParagraph"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"paragraph"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutLargeVideo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentProjectLayoutInlineVideos"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"Videos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProjectPageQuery, ProjectPageQueryVariables>;
export const SingleBlogPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"singleBlogPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SingleBlogPageQuery, SingleBlogPageQueryVariables>;
export const SingleBlogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"singleBlog"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"blogs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"shortDescription"}},{"kind":"Field","name":{"kind":"Name","value":"datePublished"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogLayoutParagraphContent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Paragraph"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ComponentBlogLayoutImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SingleBlogQuery, SingleBlogQueryVariables>;
export const WorkPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"workPage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"heroHeadingBold1"}},{"kind":"Field","name":{"kind":"Name","value":"heroHeadingItalic"}},{"kind":"Field","name":{"kind":"Name","value":"heroHeadingBold2"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"workHeading"}},{"kind":"Field","name":{"kind":"Name","value":"workSubtext"}},{"kind":"Field","name":{"kind":"Name","value":"workBackgroundImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"StringValue","value":"","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"IntValue","value":"100"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"client"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientName"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"formats"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"projectCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"category"}}]}}]}}]}}]}}]} as unknown as DocumentNode<WorkPageQuery, WorkPageQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BlogLayoutDynamicZoneInput: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  LandingPageLayoutDynamicZoneInput: { input: any; output: any; }
  ProjectLayoutDynamicZoneInput: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AboutPage = {
  __typename?: 'AboutPage';
  clientsHeading?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroBgImage?: Maybe<UploadFileEntityResponse>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<AboutPageRelationResponseCollection>;
  servicesHeading?: Maybe<Scalars['String']['output']>;
  servicesSubtext?: Maybe<Scalars['String']['output']>;
  step?: Maybe<Array<Maybe<ComponentStepsLayoutStep>>>;
  stepsHeading?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type AboutPageStepArgs = {
  filters?: InputMaybe<ComponentStepsLayoutStepFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AboutPageEntity = {
  __typename?: 'AboutPageEntity';
  attributes?: Maybe<AboutPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AboutPageEntityResponse = {
  __typename?: 'AboutPageEntityResponse';
  data?: Maybe<AboutPageEntity>;
};

export type AboutPageInput = {
  clientsHeading?: InputMaybe<Scalars['String']['input']>;
  heroBgImage?: InputMaybe<Scalars['ID']['input']>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
  servicesHeading?: InputMaybe<Scalars['String']['input']>;
  servicesSubtext?: InputMaybe<Scalars['String']['input']>;
  step?: InputMaybe<Array<InputMaybe<ComponentStepsLayoutStepInput>>>;
  stepsHeading?: InputMaybe<Scalars['String']['input']>;
};

export type AboutPageRelationResponseCollection = {
  __typename?: 'AboutPageRelationResponseCollection';
  data: Array<AboutPageEntity>;
};

export type Blog = {
  __typename?: 'Blog';
  author?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  datePublished?: Maybe<Scalars['Date']['output']>;
  layout?: Maybe<Array<Maybe<BlogLayoutDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BlogRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type BlogLocalizationsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogEntity = {
  __typename?: 'BlogEntity';
  attributes?: Maybe<Blog>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogEntityResponse = {
  __typename?: 'BlogEntityResponse';
  data?: Maybe<BlogEntity>;
};

export type BlogEntityResponseCollection = {
  __typename?: 'BlogEntityResponseCollection';
  data: Array<BlogEntity>;
  meta: ResponseCollectionMeta;
};

export type BlogFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  author?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  datePublished?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<BlogFiltersInput>;
  not?: InputMaybe<BlogFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<BlogFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  shortDescription?: InputMaybe<StringFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type BlogInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  datePublished?: InputMaybe<Scalars['Date']['input']>;
  layout?: InputMaybe<Array<Scalars['BlogLayoutDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type BlogLayoutDynamicZone = ComponentBlogLayoutImage | ComponentBlogLayoutParagraphContent | Error;

export type BlogRelationResponseCollection = {
  __typename?: 'BlogRelationResponseCollection';
  data: Array<BlogEntity>;
};

export type BlogsPage = {
  __typename?: 'BlogsPage';
  blogsHeading?: Maybe<Scalars['String']['output']>;
  blogsSubtext?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredBlog?: Maybe<BlogEntityResponse>;
  heroHeadingBold?: Maybe<Scalars['String']['output']>;
  heroHeadingItalic?: Maybe<Scalars['String']['output']>;
  heroImage?: Maybe<UploadFileEntityResponse>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<BlogsPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type BlogsPageEntity = {
  __typename?: 'BlogsPageEntity';
  attributes?: Maybe<BlogsPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BlogsPageEntityResponse = {
  __typename?: 'BlogsPageEntityResponse';
  data?: Maybe<BlogsPageEntity>;
};

export type BlogsPageInput = {
  blogsHeading?: InputMaybe<Scalars['String']['input']>;
  blogsSubtext?: InputMaybe<Scalars['String']['input']>;
  featuredBlog?: InputMaybe<Scalars['ID']['input']>;
  heroHeadingBold?: InputMaybe<Scalars['String']['input']>;
  heroHeadingItalic?: InputMaybe<Scalars['String']['input']>;
  heroImage?: InputMaybe<Scalars['ID']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
};

export type BlogsPageRelationResponseCollection = {
  __typename?: 'BlogsPageRelationResponseCollection';
  data: Array<BlogsPageEntity>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Client = {
  __typename?: 'Client';
  clientLogo?: Maybe<UploadFileEntityResponse>;
  clientName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  landingPages?: Maybe<LandingPageRelationResponseCollection>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ClientRelationResponseCollection>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ClientLandingPagesArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClientLocalizationsArgs = {
  filters?: InputMaybe<ClientFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ClientProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ClientEntity = {
  __typename?: 'ClientEntity';
  attributes?: Maybe<Client>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ClientEntityResponse = {
  __typename?: 'ClientEntityResponse';
  data?: Maybe<ClientEntity>;
};

export type ClientEntityResponseCollection = {
  __typename?: 'ClientEntityResponseCollection';
  data: Array<ClientEntity>;
  meta: ResponseCollectionMeta;
};

export type ClientFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  clientName?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  landingPages?: InputMaybe<LandingPageFiltersInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ClientFiltersInput>;
  not?: InputMaybe<ClientFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClientFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClientInput = {
  clientLogo?: InputMaybe<Scalars['ID']['input']>;
  clientName?: InputMaybe<Scalars['String']['input']>;
  landingPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ClientRelationResponseCollection = {
  __typename?: 'ClientRelationResponseCollection';
  data: Array<ClientEntity>;
};

export type ComponentBlogLayoutHeading = {
  __typename?: 'ComponentBlogLayoutHeading';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogLayoutImage = {
  __typename?: 'ComponentBlogLayoutImage';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentBlogLayoutParagraph = {
  __typename?: 'ComponentBlogLayoutParagraph';
  id: Scalars['ID']['output'];
  paragraph?: Maybe<Scalars['String']['output']>;
};

export type ComponentBlogLayoutParagraphContent = {
  __typename?: 'ComponentBlogLayoutParagraphContent';
  Paragraph?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentBlogLayoutQuote = {
  __typename?: 'ComponentBlogLayoutQuote';
  author?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  quote?: Maybe<Scalars['String']['output']>;
};

export type ComponentContactChannelsContactChannel = {
  __typename?: 'ComponentContactChannelsContactChannel';
  channelInfo?: Maybe<Scalars['String']['output']>;
  channelLink?: Maybe<Scalars['String']['output']>;
  channelName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentContactChannelsContactChannelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentContactChannelsContactChannelFiltersInput>>>;
  channelInfo?: InputMaybe<StringFilterInput>;
  channelLink?: InputMaybe<StringFilterInput>;
  channelName?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentContactChannelsContactChannelFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContactChannelsContactChannelFiltersInput>>>;
};

export type ComponentContactChannelsContactChannelInput = {
  channelInfo?: InputMaybe<Scalars['String']['input']>;
  channelLink?: InputMaybe<Scalars['String']['input']>;
  channelName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentGeneralStylingMixedStylesHeading = {
  __typename?: 'ComponentGeneralStylingMixedStylesHeading';
  boldText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  italicText?: Maybe<Scalars['String']['output']>;
  normalText?: Maybe<Scalars['String']['output']>;
};

export type ComponentNavMenuNavMenu = {
  __typename?: 'ComponentNavMenuNavMenu';
  id: Scalars['ID']['output'];
  menuItem?: Maybe<Scalars['String']['output']>;
};

export type ComponentNavMenuNavMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentNavMenuNavMenuFiltersInput>>>;
  menuItem?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentNavMenuNavMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentNavMenuNavMenuFiltersInput>>>;
};

export type ComponentNavMenuNavMenuInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  menuItem?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentProjectLayoutBgImagaNText = {
  __typename?: 'ComponentProjectLayoutBgImagaNText';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectLayoutBgImageNDynamicText = {
  __typename?: 'ComponentProjectLayoutBgImageNDynamicText';
  dynamicText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentProjectLayoutDynamicText = {
  __typename?: 'ComponentProjectLayoutDynamicText';
  dynamicText?: Maybe<Scalars['String']['output']>;
  dynamicTitle?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentProjectLayoutImageNText = {
  __typename?: 'ComponentProjectLayoutImageNText';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectLayoutInlineGallery = {
  __typename?: 'ComponentProjectLayoutInlineGallery';
  id: Scalars['ID']['output'];
  images?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentProjectLayoutInlineGalleryImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentProjectLayoutInlineVideos = {
  __typename?: 'ComponentProjectLayoutInlineVideos';
  Videos?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentProjectLayoutInlineVideosVideosArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentProjectLayoutLargeHeading = {
  __typename?: 'ComponentProjectLayoutLargeHeading';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentProjectLayoutLargeImage = {
  __typename?: 'ComponentProjectLayoutLargeImage';
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentProjectLayoutLargeVideo = {
  __typename?: 'ComponentProjectLayoutLargeVideo';
  id: Scalars['ID']['output'];
  video?: Maybe<UploadFileEntityResponse>;
};

export type ComponentProjectLayoutParagraph = {
  __typename?: 'ComponentProjectLayoutParagraph';
  id: Scalars['ID']['output'];
  paragraph?: Maybe<Scalars['String']['output']>;
};

export type ComponentProjectLayoutProjectCarousel = {
  __typename?: 'ComponentProjectLayoutProjectCarousel';
  id: Scalars['ID']['output'];
  images?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentProjectLayoutProjectCarouselImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentStepsLayoutStep = {
  __typename?: 'ComponentStepsLayoutStep';
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  text?: Maybe<Scalars['String']['output']>;
};

export type ComponentStepsLayoutStepFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentStepsLayoutStepFiltersInput>>>;
  heading?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentStepsLayoutStepFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentStepsLayoutStepFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
};

export type ComponentStepsLayoutStepInput = {
  heading?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPage = {
  __typename?: 'ContactPage';
  contactBgImage?: Maybe<UploadFileEntityResponse>;
  contactChannels?: Maybe<Array<Maybe<ComponentContactChannelsContactChannel>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubtextItalicBold?: Maybe<Scalars['String']['output']>;
  heroSubtextNormal?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ContactPageRelationResponseCollection>;
  spotifyHeading?: Maybe<Scalars['String']['output']>;
  spotifyLink?: Maybe<Scalars['String']['output']>;
  spotifySubtextItalicBold?: Maybe<Scalars['String']['output']>;
  spotifySubtextNormal?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContactPageContactChannelsArgs = {
  filters?: InputMaybe<ComponentContactChannelsContactChannelFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContactPageEntity = {
  __typename?: 'ContactPageEntity';
  attributes?: Maybe<ContactPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContactPageEntityResponse = {
  __typename?: 'ContactPageEntityResponse';
  data?: Maybe<ContactPageEntity>;
};

export type ContactPageInput = {
  contactBgImage?: InputMaybe<Scalars['ID']['input']>;
  contactChannels?: InputMaybe<Array<InputMaybe<ComponentContactChannelsContactChannelInput>>>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubtextItalicBold?: InputMaybe<Scalars['String']['input']>;
  heroSubtextNormal?: InputMaybe<Scalars['String']['input']>;
  spotifyHeading?: InputMaybe<Scalars['String']['input']>;
  spotifyLink?: InputMaybe<Scalars['String']['input']>;
  spotifySubtextItalicBold?: InputMaybe<Scalars['String']['input']>;
  spotifySubtextNormal?: InputMaybe<Scalars['String']['input']>;
};

export type ContactPageRelationResponseCollection = {
  __typename?: 'ContactPageRelationResponseCollection';
  data: Array<ContactPageEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AboutPage | Blog | BlogsPage | Client | ComponentBlogLayoutHeading | ComponentBlogLayoutImage | ComponentBlogLayoutParagraph | ComponentBlogLayoutParagraphContent | ComponentBlogLayoutQuote | ComponentContactChannelsContactChannel | ComponentGeneralStylingMixedStylesHeading | ComponentNavMenuNavMenu | ComponentProjectLayoutBgImagaNText | ComponentProjectLayoutBgImageNDynamicText | ComponentProjectLayoutDynamicText | ComponentProjectLayoutImageNText | ComponentProjectLayoutInlineGallery | ComponentProjectLayoutInlineVideos | ComponentProjectLayoutLargeHeading | ComponentProjectLayoutLargeImage | ComponentProjectLayoutLargeVideo | ComponentProjectLayoutParagraph | ComponentProjectLayoutProjectCarousel | ComponentStepsLayoutStep | ContactPage | HomePage | I18NLocale | LandingPage | Menu | Project | ProjectCategory | Service | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | WorkPage;

export type HomePage = {
  __typename?: 'HomePage';
  blogHeading?: Maybe<Scalars['String']['output']>;
  blogSubtext?: Maybe<Scalars['String']['output']>;
  contactFormSubtext?: Maybe<Scalars['String']['output']>;
  contactHeadingBold1?: Maybe<Scalars['String']['output']>;
  contactHeadingBold2?: Maybe<Scalars['String']['output']>;
  contactHeadingItalicBold?: Maybe<Scalars['String']['output']>;
  contactSubtext?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredBlogs?: Maybe<BlogRelationResponseCollection>;
  featuredProjects?: Maybe<ProjectRelationResponseCollection>;
  heroHeading?: Maybe<Scalars['String']['output']>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<HomePageRelationResponseCollection>;
  servicesImage1?: Maybe<UploadFileEntityResponse>;
  servicesImage2?: Maybe<UploadFileEntityResponse>;
  servicesSubtext?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workHeading?: Maybe<Scalars['String']['output']>;
};


export type HomePageFeaturedBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type HomePageFeaturedProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  blogHeading?: InputMaybe<Scalars['String']['input']>;
  blogSubtext?: InputMaybe<Scalars['String']['input']>;
  contactFormSubtext?: InputMaybe<Scalars['String']['input']>;
  contactHeadingBold1?: InputMaybe<Scalars['String']['input']>;
  contactHeadingBold2?: InputMaybe<Scalars['String']['input']>;
  contactHeadingItalicBold?: InputMaybe<Scalars['String']['input']>;
  contactSubtext?: InputMaybe<Scalars['String']['input']>;
  featuredBlogs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  featuredProjects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  heroHeading?: InputMaybe<Scalars['String']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
  servicesImage1?: InputMaybe<Scalars['ID']['input']>;
  servicesImage2?: InputMaybe<Scalars['ID']['input']>;
  servicesSubtext?: InputMaybe<Scalars['String']['input']>;
  workHeading?: InputMaybe<Scalars['String']['input']>;
};

export type HomePageRelationResponseCollection = {
  __typename?: 'HomePageRelationResponseCollection';
  data: Array<HomePageEntity>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LandingPage = {
  __typename?: 'LandingPage';
  actionButtonLink?: Maybe<Scalars['String']['output']>;
  actionButtonText?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ProjectCategoryEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  layout?: Maybe<Array<Maybe<LandingPageLayoutDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<LandingPageRelationResponseCollection>;
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type LandingPageLocalizationsArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingPageEntity = {
  __typename?: 'LandingPageEntity';
  attributes?: Maybe<LandingPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type LandingPageEntityResponse = {
  __typename?: 'LandingPageEntityResponse';
  data?: Maybe<LandingPageEntity>;
};

export type LandingPageEntityResponseCollection = {
  __typename?: 'LandingPageEntityResponseCollection';
  data: Array<LandingPageEntity>;
  meta: ResponseCollectionMeta;
};

export type LandingPageFiltersInput = {
  actionButtonLink?: InputMaybe<StringFilterInput>;
  actionButtonText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<LandingPageFiltersInput>>>;
  category?: InputMaybe<ProjectCategoryFiltersInput>;
  client?: InputMaybe<ClientFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<LandingPageFiltersInput>;
  not?: InputMaybe<LandingPageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<LandingPageFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type LandingPageInput = {
  actionButtonLink?: InputMaybe<Scalars['String']['input']>;
  actionButtonText?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  client?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Array<Scalars['LandingPageLayoutDynamicZoneInput']['input']>>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type LandingPageLayoutDynamicZone = ComponentProjectLayoutBgImagaNText | ComponentProjectLayoutBgImageNDynamicText | ComponentProjectLayoutDynamicText | ComponentProjectLayoutImageNText | ComponentProjectLayoutInlineGallery | ComponentProjectLayoutInlineVideos | ComponentProjectLayoutLargeHeading | ComponentProjectLayoutLargeImage | ComponentProjectLayoutLargeVideo | ComponentProjectLayoutParagraph | ComponentProjectLayoutProjectCarousel | Error;

export type LandingPageRelationResponseCollection = {
  __typename?: 'LandingPageRelationResponseCollection';
  data: Array<LandingPageEntity>;
};

export type Menu = {
  __typename?: 'Menu';
  browseAll?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  letsTalk?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<MenuRelationResponseCollection>;
  menuItems?: Maybe<Array<Maybe<ComponentNavMenuNavMenu>>>;
  moreWork?: Maybe<Scalars['String']['output']>;
  openCase?: Maybe<Scalars['String']['output']>;
  readFullArticle?: Maybe<Scalars['String']['output']>;
  scrollDown?: Maybe<Scalars['String']['output']>;
  subscribePlaceholder?: Maybe<Scalars['String']['output']>;
  subscribeSuccess?: Maybe<Scalars['String']['output']>;
  subscribeToOurMailing?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewAllBlogs?: Maybe<Scalars['String']['output']>;
};


export type MenuMenuItemsArgs = {
  filters?: InputMaybe<ComponentNavMenuNavMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuEntity = {
  __typename?: 'MenuEntity';
  attributes?: Maybe<Menu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenuEntityResponse = {
  __typename?: 'MenuEntityResponse';
  data?: Maybe<MenuEntity>;
};

export type MenuInput = {
  browseAll?: InputMaybe<Scalars['String']['input']>;
  letsTalk?: InputMaybe<Scalars['String']['input']>;
  menuItems?: InputMaybe<Array<InputMaybe<ComponentNavMenuNavMenuInput>>>;
  moreWork?: InputMaybe<Scalars['String']['input']>;
  openCase?: InputMaybe<Scalars['String']['input']>;
  readFullArticle?: InputMaybe<Scalars['String']['input']>;
  scrollDown?: InputMaybe<Scalars['String']['input']>;
  subscribePlaceholder?: InputMaybe<Scalars['String']['input']>;
  subscribeSuccess?: InputMaybe<Scalars['String']['input']>;
  subscribeToOurMailing?: InputMaybe<Scalars['String']['input']>;
  viewAllBlogs?: InputMaybe<Scalars['String']['input']>;
};

export type MenuRelationResponseCollection = {
  __typename?: 'MenuRelationResponseCollection';
  data: Array<MenuEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAboutPageLocalization?: Maybe<AboutPageEntityResponse>;
  createBlog?: Maybe<BlogEntityResponse>;
  createBlogLocalization?: Maybe<BlogEntityResponse>;
  createBlogsPageLocalization?: Maybe<BlogsPageEntityResponse>;
  createClient?: Maybe<ClientEntityResponse>;
  createClientLocalization?: Maybe<ClientEntityResponse>;
  createContactPageLocalization?: Maybe<ContactPageEntityResponse>;
  createHomePageLocalization?: Maybe<HomePageEntityResponse>;
  createLandingPage?: Maybe<LandingPageEntityResponse>;
  createLandingPageLocalization?: Maybe<LandingPageEntityResponse>;
  createMenuLocalization?: Maybe<MenuEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createProjectCategory?: Maybe<ProjectCategoryEntityResponse>;
  createProjectLocalization?: Maybe<ProjectEntityResponse>;
  createService?: Maybe<ServiceEntityResponse>;
  createServiceLocalization?: Maybe<ServiceEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWorkPageLocalization?: Maybe<WorkPageEntityResponse>;
  deleteAboutPage?: Maybe<AboutPageEntityResponse>;
  deleteBlog?: Maybe<BlogEntityResponse>;
  deleteBlogsPage?: Maybe<BlogsPageEntityResponse>;
  deleteClient?: Maybe<ClientEntityResponse>;
  deleteContactPage?: Maybe<ContactPageEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteLandingPage?: Maybe<LandingPageEntityResponse>;
  deleteMenu?: Maybe<MenuEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteProjectCategory?: Maybe<ProjectCategoryEntityResponse>;
  deleteService?: Maybe<ServiceEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWorkPage?: Maybe<WorkPageEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateAboutPage?: Maybe<AboutPageEntityResponse>;
  updateBlog?: Maybe<BlogEntityResponse>;
  updateBlogsPage?: Maybe<BlogsPageEntityResponse>;
  updateClient?: Maybe<ClientEntityResponse>;
  updateContactPage?: Maybe<ContactPageEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateLandingPage?: Maybe<LandingPageEntityResponse>;
  updateMenu?: Maybe<MenuEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateProjectCategory?: Maybe<ProjectCategoryEntityResponse>;
  updateService?: Maybe<ServiceEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWorkPage?: Maybe<WorkPageEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAboutPageLocalizationArgs = {
  data?: InputMaybe<AboutPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogArgs = {
  data: BlogInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogLocalizationArgs = {
  data?: InputMaybe<BlogInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateBlogsPageLocalizationArgs = {
  data?: InputMaybe<BlogsPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateClientArgs = {
  data: ClientInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateClientLocalizationArgs = {
  data?: InputMaybe<ClientInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateContactPageLocalizationArgs = {
  data?: InputMaybe<ContactPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateHomePageLocalizationArgs = {
  data?: InputMaybe<HomePageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLandingPageArgs = {
  data: LandingPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateLandingPageLocalizationArgs = {
  data?: InputMaybe<LandingPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateMenuLocalizationArgs = {
  data?: InputMaybe<MenuInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateProjectCategoryArgs = {
  data: ProjectCategoryInput;
};


export type MutationCreateProjectLocalizationArgs = {
  data?: InputMaybe<ProjectInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateServiceLocalizationArgs = {
  data?: InputMaybe<ServiceInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWorkPageLocalizationArgs = {
  data?: InputMaybe<WorkPageInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteBlogArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteBlogsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteClientArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteLandingPageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteProjectCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWorkPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateAboutPageArgs = {
  data: AboutPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateBlogArgs = {
  data: BlogInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateBlogsPageArgs = {
  data: BlogsPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateClientArgs = {
  data: ClientInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateContactPageArgs = {
  data: ContactPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateLandingPageArgs = {
  data: LandingPageInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateMenuArgs = {
  data: MenuInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateProjectCategoryArgs = {
  data: ProjectCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWorkPageArgs = {
  data: WorkPageInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  category?: Maybe<ProjectCategoryEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  layout?: Maybe<Array<Maybe<ProjectLayoutDynamicZone>>>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ProjectRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  thumbnail?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectLocalizationsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectCategory = {
  __typename?: 'ProjectCategory';
  category?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  landingPages?: Maybe<LandingPageRelationResponseCollection>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProjectCategoryLandingPagesArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ProjectCategoryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProjectCategoryEntity = {
  __typename?: 'ProjectCategoryEntity';
  attributes?: Maybe<ProjectCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectCategoryEntityResponse = {
  __typename?: 'ProjectCategoryEntityResponse';
  data?: Maybe<ProjectCategoryEntity>;
};

export type ProjectCategoryEntityResponseCollection = {
  __typename?: 'ProjectCategoryEntityResponseCollection';
  data: Array<ProjectCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectCategoryFiltersInput>>>;
  category?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  landingPages?: InputMaybe<LandingPageFiltersInput>;
  not?: InputMaybe<ProjectCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectCategoryFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectCategoryInput = {
  category?: InputMaybe<Scalars['String']['input']>;
  landingPages?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  category?: InputMaybe<ProjectCategoryFiltersInput>;
  client?: InputMaybe<ClientFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ProjectFiltersInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  category?: InputMaybe<Scalars['ID']['input']>;
  client?: InputMaybe<Scalars['ID']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  layout?: InputMaybe<Array<Scalars['ProjectLayoutDynamicZoneInput']['input']>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectLayoutDynamicZone = ComponentProjectLayoutBgImagaNText | ComponentProjectLayoutBgImageNDynamicText | ComponentProjectLayoutDynamicText | ComponentProjectLayoutImageNText | ComponentProjectLayoutInlineGallery | ComponentProjectLayoutInlineVideos | ComponentProjectLayoutLargeHeading | ComponentProjectLayoutLargeImage | ComponentProjectLayoutLargeVideo | ComponentProjectLayoutParagraph | ComponentProjectLayoutProjectCarousel | Error;

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  aboutPage?: Maybe<AboutPageEntityResponse>;
  blog?: Maybe<BlogEntityResponse>;
  blogs?: Maybe<BlogEntityResponseCollection>;
  blogsPage?: Maybe<BlogsPageEntityResponse>;
  client?: Maybe<ClientEntityResponse>;
  clients?: Maybe<ClientEntityResponseCollection>;
  contactPage?: Maybe<ContactPageEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  landingPage?: Maybe<LandingPageEntityResponse>;
  landingPages?: Maybe<LandingPageEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  menu?: Maybe<MenuEntityResponse>;
  project?: Maybe<ProjectEntityResponse>;
  projectCategories?: Maybe<ProjectCategoryEntityResponseCollection>;
  projectCategory?: Maybe<ProjectCategoryEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  service?: Maybe<ServiceEntityResponse>;
  services?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  workPage?: Maybe<WorkPageEntityResponse>;
};


export type QueryAboutPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryBlogArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryBlogsPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryClientArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryClientsArgs = {
  filters?: InputMaybe<ClientFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContactPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryHomePageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLandingPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryLandingPagesArgs = {
  filters?: InputMaybe<LandingPageFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenuArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryProjectCategoriesArgs = {
  filters?: InputMaybe<ProjectCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWorkPageArgs = {
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Service = {
  __typename?: 'Service';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<ServiceRelationResponseCollection>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ServiceLocalizationsArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ServiceEntity = {
  __typename?: 'ServiceEntity';
  attributes?: Maybe<Service>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ServiceEntityResponse = {
  __typename?: 'ServiceEntityResponse';
  data?: Maybe<ServiceEntity>;
};

export type ServiceEntityResponseCollection = {
  __typename?: 'ServiceEntityResponseCollection';
  data: Array<ServiceEntity>;
  meta: ResponseCollectionMeta;
};

export type ServiceFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<ServiceFiltersInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  text?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceRelationResponseCollection = {
  __typename?: 'ServiceRelationResponseCollection';
  data: Array<ServiceEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type WorkPage = {
  __typename?: 'WorkPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  heroHeadingBold1?: Maybe<Scalars['String']['output']>;
  heroHeadingBold2?: Maybe<Scalars['String']['output']>;
  heroHeadingItalic?: Maybe<Scalars['String']['output']>;
  heroSubtext?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WorkPageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  workBackgroundImage?: Maybe<UploadFileEntityResponse>;
  workHeading?: Maybe<Scalars['String']['output']>;
  workSubtext?: Maybe<Scalars['String']['output']>;
};

export type WorkPageEntity = {
  __typename?: 'WorkPageEntity';
  attributes?: Maybe<WorkPage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WorkPageEntityResponse = {
  __typename?: 'WorkPageEntityResponse';
  data?: Maybe<WorkPageEntity>;
};

export type WorkPageInput = {
  heroHeadingBold1?: InputMaybe<Scalars['String']['input']>;
  heroHeadingBold2?: InputMaybe<Scalars['String']['input']>;
  heroHeadingItalic?: InputMaybe<Scalars['String']['input']>;
  heroSubtext?: InputMaybe<Scalars['String']['input']>;
  workBackgroundImage?: InputMaybe<Scalars['ID']['input']>;
  workHeading?: InputMaybe<Scalars['String']['input']>;
  workSubtext?: InputMaybe<Scalars['String']['input']>;
};

export type WorkPageRelationResponseCollection = {
  __typename?: 'WorkPageRelationResponseCollection';
  data: Array<WorkPageEntity>;
};

export type AboutPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AboutPageQuery = { __typename?: 'Query', aboutPage?: { __typename?: 'AboutPageEntityResponse', data?: { __typename?: 'AboutPageEntity', attributes?: { __typename?: 'AboutPage', heroHeading?: string | null, heroSubtext?: string | null, stepsHeading?: string | null, servicesHeading?: string | null, servicesSubtext?: string | null, clientsHeading?: string | null, heroBgImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, step?: Array<{ __typename?: 'ComponentStepsLayoutStep', heading?: string | null, text?: string | null } | null> | null } | null } | null } | null, services?: { __typename?: 'ServiceEntityResponseCollection', data: Array<{ __typename?: 'ServiceEntity', id?: string | null, attributes?: { __typename?: 'Service', title?: string | null, text?: string | null } | null }> } | null, clients?: { __typename?: 'ClientEntityResponseCollection', data: Array<{ __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientLogo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type BlogsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type BlogsPageQuery = { __typename?: 'Query', blogsPage?: { __typename?: 'BlogsPageEntityResponse', data?: { __typename?: 'BlogsPageEntity', attributes?: { __typename?: 'BlogsPage', heroHeadingBold?: string | null, heroHeadingItalic?: string | null, heroSubtext?: string | null, blogsHeading?: string | null, blogsSubtext?: string | null, heroImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null, featuredBlog?: { __typename?: 'BlogEntityResponse', data?: { __typename?: 'BlogEntity', id?: string | null, attributes?: { __typename?: 'Blog', title?: string | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null } | null } | null, blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', slug: string, title?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | null }> } | null };

export type ContactPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ContactPageQuery = { __typename?: 'Query', contactPage?: { __typename?: 'ContactPageEntityResponse', data?: { __typename?: 'ContactPageEntity', attributes?: { __typename?: 'ContactPage', heroHeading?: string | null, heroSubtextNormal?: string | null, heroSubtextItalicBold?: string | null, spotifyHeading?: string | null, spotifySubtextNormal?: string | null, spotifySubtextItalicBold?: string | null, spotifyLink?: string | null, contactChannels?: Array<{ __typename?: 'ComponentContactChannelsContactChannel', channelName?: string | null, channelInfo?: string | null, channelLink?: string | null } | null> | null, contactBgImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | null } | null } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', heroHeading?: string | null, heroSubtext?: string | null, workHeading?: string | null, servicesSubtext?: string | null, blogHeading?: string | null, blogSubtext?: string | null, contactHeadingBold1?: string | null, contactHeadingBold2?: string | null, contactHeadingItalicBold?: string | null, contactSubtext?: string | null, contactFormSubtext?: string | null, featuredProjects?: { __typename?: 'ProjectRelationResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', title?: string | null, client?: { __typename?: 'ClientEntityResponse', data?: { __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientName?: string | null } | null } | null } | null, category?: { __typename?: 'ProjectCategoryEntityResponse', data?: { __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null } | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null, servicesImage1?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, servicesImage2?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null, featuredBlogs?: { __typename?: 'BlogRelationResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', slug: string, title?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null };

export type LayoutQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type LayoutQueryQuery = { __typename?: 'Query', menu?: { __typename?: 'MenuEntityResponse', data?: { __typename?: 'MenuEntity', attributes?: { __typename?: 'Menu', scrollDown?: string | null, letsTalk?: string | null, browseAll?: string | null, readFullArticle?: string | null, subscribeSuccess?: string | null, subscribeToOurMailing?: string | null, subscribePlaceholder?: string | null, moreWork?: string | null, viewAllBlogs?: string | null, openCase?: string | null, menuItems?: Array<{ __typename?: 'ComponentNavMenuNavMenu', menuItem?: string | null } | null> | null } | null } | null } | null, contactPage?: { __typename?: 'ContactPageEntityResponse', data?: { __typename?: 'ContactPageEntity', attributes?: { __typename?: 'ContactPage', contactChannels?: Array<{ __typename?: 'ComponentContactChannelsContactChannel', channelName?: string | null, channelInfo?: string | null, channelLink?: string | null } | null> | null } | null } | null } | null };

export type ProjectPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectPageQuery = { __typename?: 'Query', projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', title?: string | null, slug: string, category?: { __typename?: 'ProjectCategoryEntityResponse', data?: { __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null } | null } | null, client?: { __typename?: 'ClientEntityResponse', data?: { __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientName?: string | null } | null } | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } | null, layout?: Array<{ __typename: 'ComponentProjectLayoutBgImagaNText', id: string, title?: string | null, text?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutBgImageNDynamicText', id: string, dynamicText?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutDynamicText', id: string, dynamicTitle?: string | null, dynamicText?: string | null } | { __typename: 'ComponentProjectLayoutImageNText', id: string, text?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutInlineGallery', id: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null } | null }> } | null } | { __typename: 'ComponentProjectLayoutInlineVideos', id: string, Videos?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null }> } | null } | { __typename: 'ComponentProjectLayoutLargeHeading', id: string, heading?: string | null } | { __typename: 'ComponentProjectLayoutLargeImage', id: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutLargeVideo', id: string, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentProjectLayoutParagraph', id: string, paragraph?: string | null } | { __typename: 'ComponentProjectLayoutProjectCarousel', id: string, images?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null }> } | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type SingleBlogPageQueryVariables = Exact<{ [key: string]: never; }>;


export type SingleBlogPageQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', slug: string, title?: string | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null };

export type SingleBlogQueryVariables = Exact<{ [key: string]: never; }>;


export type SingleBlogQuery = { __typename?: 'Query', blogs?: { __typename?: 'BlogEntityResponseCollection', data: Array<{ __typename?: 'BlogEntity', attributes?: { __typename?: 'Blog', title?: string | null, slug: string, author?: string | null, shortDescription?: string | null, datePublished?: any | null, publishedAt?: any | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null, layout?: Array<{ __typename: 'ComponentBlogLayoutImage', image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | { __typename: 'ComponentBlogLayoutParagraphContent', Paragraph?: string | null } | { __typename: 'Error' } | null> | null } | null }> } | null };

export type WorkPageQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkPageQuery = { __typename?: 'Query', workPage?: { __typename?: 'WorkPageEntityResponse', data?: { __typename?: 'WorkPageEntity', attributes?: { __typename?: 'WorkPage', heroHeadingBold1?: string | null, heroHeadingItalic?: string | null, heroHeadingBold2?: string | null, heroSubtext?: string | null, workHeading?: string | null, workSubtext?: string | null, workBackgroundImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | null } | null } | null, projects?: { __typename?: 'ProjectEntityResponseCollection', data: Array<{ __typename?: 'ProjectEntity', attributes?: { __typename?: 'Project', slug: string, title?: string | null, category?: { __typename?: 'ProjectCategoryEntityResponse', data?: { __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null } | null } | null, client?: { __typename?: 'ClientEntityResponse', data?: { __typename?: 'ClientEntity', attributes?: { __typename?: 'Client', clientName?: string | null } | null } | null } | null, thumbnail?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null, alternativeText?: string | null } | null } | null } | null } | null }> } | null, projectCategories?: { __typename?: 'ProjectCategoryEntityResponseCollection', data: Array<{ __typename?: 'ProjectCategoryEntity', attributes?: { __typename?: 'ProjectCategory', category?: string | null } | null }> } | null };
