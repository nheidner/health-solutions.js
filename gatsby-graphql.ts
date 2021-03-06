export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childMarkdownRemark?: Maybe<MarkdownRemark>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childMarkdownRemark___id'
  | 'childMarkdownRemark___frontmatter___title'
  | 'childMarkdownRemark___frontmatter___templateKey'
  | 'childMarkdownRemark___frontmatter___locale'
  | 'childMarkdownRemark___frontmatter___pageTitle'
  | 'childMarkdownRemark___frontmatter___path'
  | 'childMarkdownRemark___frontmatter___heading'
  | 'childMarkdownRemark___frontmatter___markdown_text'
  | 'childMarkdownRemark___frontmatter___header_section___heading'
  | 'childMarkdownRemark___frontmatter___header_section___markdown_text'
  | 'childMarkdownRemark___frontmatter___contact_section___section_heading'
  | 'childMarkdownRemark___frontmatter___contact_section___heading'
  | 'childMarkdownRemark___frontmatter___header___heading'
  | 'childMarkdownRemark___frontmatter___header___markdown_text'
  | 'childMarkdownRemark___frontmatter___image___alt'
  | 'childMarkdownRemark___frontmatter___about_us_section___markdown_text'
  | 'childMarkdownRemark___frontmatter___about_us_section___heading'
  | 'childMarkdownRemark___frontmatter___about_us_section___section_heading'
  | 'childMarkdownRemark___frontmatter___philosophy_section___section_heading'
  | 'childMarkdownRemark___frontmatter___philosophy_section___cards'
  | 'childMarkdownRemark___frontmatter___verfahren_section___section_heading'
  | 'childMarkdownRemark___frontmatter___anonymous_section_2___heading'
  | 'childMarkdownRemark___frontmatter___anonymous_section_2___subheading'
  | 'childMarkdownRemark___frontmatter___anonymous_section_2___button_text'
  | 'childMarkdownRemark___frontmatter___praxis_section___section_heading'
  | 'childMarkdownRemark___frontmatter___laboratory_section___heading'
  | 'childMarkdownRemark___frontmatter___laboratory_section___markdown_text'
  | 'childMarkdownRemark___frontmatter___team_section___section_heading'
  | 'childMarkdownRemark___frontmatter___team_section___markdown_text'
  | 'childMarkdownRemark___frontmatter___meta_description'
  | 'childMarkdownRemark___frontmatter___footer___copyright'
  | 'childMarkdownRemark___frontmatter___footer___links'
  | 'childMarkdownRemark___excerpt'
  | 'childMarkdownRemark___rawMarkdownBody'
  | 'childMarkdownRemark___fileAbsolutePath'
  | 'childMarkdownRemark___fields___slug'
  | 'childMarkdownRemark___html'
  | 'childMarkdownRemark___htmlAst'
  | 'childMarkdownRemark___excerptAst'
  | 'childMarkdownRemark___headings'
  | 'childMarkdownRemark___headings___id'
  | 'childMarkdownRemark___headings___value'
  | 'childMarkdownRemark___headings___depth'
  | 'childMarkdownRemark___timeToRead'
  | 'childMarkdownRemark___tableOfContents'
  | 'childMarkdownRemark___wordCount___paragraphs'
  | 'childMarkdownRemark___wordCount___sentences'
  | 'childMarkdownRemark___wordCount___words'
  | 'childMarkdownRemark___parent___id'
  | 'childMarkdownRemark___parent___parent___id'
  | 'childMarkdownRemark___parent___parent___children'
  | 'childMarkdownRemark___parent___children'
  | 'childMarkdownRemark___parent___children___id'
  | 'childMarkdownRemark___parent___children___children'
  | 'childMarkdownRemark___parent___internal___content'
  | 'childMarkdownRemark___parent___internal___contentDigest'
  | 'childMarkdownRemark___parent___internal___description'
  | 'childMarkdownRemark___parent___internal___fieldOwners'
  | 'childMarkdownRemark___parent___internal___ignoreType'
  | 'childMarkdownRemark___parent___internal___mediaType'
  | 'childMarkdownRemark___parent___internal___owner'
  | 'childMarkdownRemark___parent___internal___type'
  | 'childMarkdownRemark___children'
  | 'childMarkdownRemark___children___id'
  | 'childMarkdownRemark___children___parent___id'
  | 'childMarkdownRemark___children___parent___children'
  | 'childMarkdownRemark___children___children'
  | 'childMarkdownRemark___children___children___id'
  | 'childMarkdownRemark___children___children___children'
  | 'childMarkdownRemark___children___internal___content'
  | 'childMarkdownRemark___children___internal___contentDigest'
  | 'childMarkdownRemark___children___internal___description'
  | 'childMarkdownRemark___children___internal___fieldOwners'
  | 'childMarkdownRemark___children___internal___ignoreType'
  | 'childMarkdownRemark___children___internal___mediaType'
  | 'childMarkdownRemark___children___internal___owner'
  | 'childMarkdownRemark___children___internal___type'
  | 'childMarkdownRemark___internal___content'
  | 'childMarkdownRemark___internal___contentDigest'
  | 'childMarkdownRemark___internal___description'
  | 'childMarkdownRemark___internal___fieldOwners'
  | 'childMarkdownRemark___internal___ignoreType'
  | 'childMarkdownRemark___internal___mediaType'
  | 'childMarkdownRemark___internal___owner'
  | 'childMarkdownRemark___internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 
  | 'PLAIN'
  | 'HTML'
  | 'MARKDOWN';

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type MarkdownRemark = Node & {
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  slug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum = 
  | 'id'
  | 'frontmatter___title'
  | 'frontmatter___templateKey'
  | 'frontmatter___locale'
  | 'frontmatter___pageTitle'
  | 'frontmatter___path'
  | 'frontmatter___heading'
  | 'frontmatter___markdown_text'
  | 'frontmatter___header_section___heading'
  | 'frontmatter___header_section___markdown_text'
  | 'frontmatter___header_section___image___alt'
  | 'frontmatter___contact_section___section_heading'
  | 'frontmatter___contact_section___right_column___heading'
  | 'frontmatter___contact_section___right_column___markdown_text'
  | 'frontmatter___contact_section___right_column___show_newsletter'
  | 'frontmatter___contact_section___right_column___address_markdown'
  | 'frontmatter___contact_section___heading'
  | 'frontmatter___contact_section___left_column___markdown_text'
  | 'frontmatter___contact_section___left_column___button_text'
  | 'frontmatter___header___logo_image___alt'
  | 'frontmatter___header___heading'
  | 'frontmatter___header___markdown_text'
  | 'frontmatter___header___logo_img___alt'
  | 'frontmatter___form___name_field___label'
  | 'frontmatter___form___name_field___max_number_characters'
  | 'frontmatter___form___telephone_number_field___label'
  | 'frontmatter___form___telephone_number_field___max_number_characters'
  | 'frontmatter___form___email_address_field___label'
  | 'frontmatter___form___send_button___button_text'
  | 'frontmatter___image___source___sourceInstanceName'
  | 'frontmatter___image___source___absolutePath'
  | 'frontmatter___image___source___relativePath'
  | 'frontmatter___image___source___extension'
  | 'frontmatter___image___source___size'
  | 'frontmatter___image___source___prettySize'
  | 'frontmatter___image___source___modifiedTime'
  | 'frontmatter___image___source___accessTime'
  | 'frontmatter___image___source___changeTime'
  | 'frontmatter___image___source___birthTime'
  | 'frontmatter___image___source___root'
  | 'frontmatter___image___source___dir'
  | 'frontmatter___image___source___base'
  | 'frontmatter___image___source___ext'
  | 'frontmatter___image___source___name'
  | 'frontmatter___image___source___relativeDirectory'
  | 'frontmatter___image___source___dev'
  | 'frontmatter___image___source___mode'
  | 'frontmatter___image___source___nlink'
  | 'frontmatter___image___source___uid'
  | 'frontmatter___image___source___gid'
  | 'frontmatter___image___source___rdev'
  | 'frontmatter___image___source___ino'
  | 'frontmatter___image___source___atimeMs'
  | 'frontmatter___image___source___mtimeMs'
  | 'frontmatter___image___source___ctimeMs'
  | 'frontmatter___image___source___atime'
  | 'frontmatter___image___source___mtime'
  | 'frontmatter___image___source___ctime'
  | 'frontmatter___image___source___birthtime'
  | 'frontmatter___image___source___birthtimeMs'
  | 'frontmatter___image___source___blksize'
  | 'frontmatter___image___source___blocks'
  | 'frontmatter___image___source___publicURL'
  | 'frontmatter___image___source___id'
  | 'frontmatter___image___source___children'
  | 'frontmatter___image___alt'
  | 'frontmatter___home_section___text_column___markdown_text'
  | 'frontmatter___home_section___text_column___heading'
  | 'frontmatter___home_section___text_column___button_text'
  | 'frontmatter___about_us_section___markdown_text'
  | 'frontmatter___about_us_section___heading'
  | 'frontmatter___about_us_section___section_heading'
  | 'frontmatter___about_us_section___image___alt'
  | 'frontmatter___philosophy_section___section_heading'
  | 'frontmatter___philosophy_section___cards'
  | 'frontmatter___philosophy_section___cards___heading'
  | 'frontmatter___philosophy_section___cards___markdown_text'
  | 'frontmatter___verfahren_section___section_heading'
  | 'frontmatter___verfahren_section___text_column___heading'
  | 'frontmatter___verfahren_section___text_column___markdown_text'
  | 'frontmatter___verfahren_section___text_column___button_text'
  | 'frontmatter___anonymous_section_1___text_column___heading'
  | 'frontmatter___anonymous_section_1___text_column___markdown_text'
  | 'frontmatter___anonymous_section_2___heading'
  | 'frontmatter___anonymous_section_2___subheading'
  | 'frontmatter___anonymous_section_2___button___button_text'
  | 'frontmatter___anonymous_section_2___button___button_href'
  | 'frontmatter___anonymous_section_2___button_text'
  | 'frontmatter___praxis_section___section_heading'
  | 'frontmatter___praxis_section___text_column___heading'
  | 'frontmatter___praxis_section___text_column___markdown_text'
  | 'frontmatter___praxis_section___text_column___button_text'
  | 'frontmatter___praxis_section___image___alt'
  | 'frontmatter___laboratory_section___heading'
  | 'frontmatter___laboratory_section___markdown_text'
  | 'frontmatter___team_section___section_heading'
  | 'frontmatter___team_section___markdown_text'
  | 'frontmatter___meta_description'
  | 'frontmatter___footer___logo_img___alt'
  | 'frontmatter___footer___copyright'
  | 'frontmatter___footer___links'
  | 'frontmatter___footer___links___text'
  | 'frontmatter___footer___links___href'
  | 'excerpt'
  | 'rawMarkdownBody'
  | 'fileAbsolutePath'
  | 'fields___slug'
  | 'html'
  | 'htmlAst'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  title?: Maybe<Scalars['String']>;
  templateKey?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  pageTitle?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  header_section?: Maybe<MarkdownRemarkFrontmatterHeader_Section>;
  contact_section?: Maybe<MarkdownRemarkFrontmatterContact_Section>;
  header?: Maybe<MarkdownRemarkFrontmatterHeader>;
  form?: Maybe<MarkdownRemarkFrontmatterForm>;
  image?: Maybe<MarkdownRemarkFrontmatterImage>;
  home_section?: Maybe<MarkdownRemarkFrontmatterHome_Section>;
  about_us_section?: Maybe<MarkdownRemarkFrontmatterAbout_Us_Section>;
  philosophy_section?: Maybe<MarkdownRemarkFrontmatterPhilosophy_Section>;
  verfahren_section?: Maybe<MarkdownRemarkFrontmatterVerfahren_Section>;
  anonymous_section_1?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1>;
  anonymous_section_2?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_2>;
  praxis_section?: Maybe<MarkdownRemarkFrontmatterPraxis_Section>;
  laboratory_section?: Maybe<MarkdownRemarkFrontmatterLaboratory_Section>;
  team_section?: Maybe<MarkdownRemarkFrontmatterTeam_Section>;
  meta_description?: Maybe<Scalars['String']>;
  footer?: Maybe<MarkdownRemarkFrontmatterFooter>;
};

export type MarkdownRemarkFrontmatterAbout_Us_Section = {
  markdown_text?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  section_heading?: Maybe<Scalars['String']>;
  image?: Maybe<MarkdownRemarkFrontmatterAbout_Us_SectionImage>;
};

export type MarkdownRemarkFrontmatterAbout_Us_SectionFilterInput = {
  markdown_text?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  section_heading?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MarkdownRemarkFrontmatterAbout_Us_SectionImageFilterInput>;
};

export type MarkdownRemarkFrontmatterAbout_Us_SectionImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAbout_Us_SectionImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1 = {
  image_column?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1Image_Column>;
  text_column?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1Text_Column>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1FilterInput = {
  image_column?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnFilterInput>;
  text_column?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1Text_ColumnFilterInput>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1Image_Column = {
  image?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnImage>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnFilterInput = {
  image?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnImageFilterInput>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1Text_Column = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_1Text_ColumnFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_2 = {
  heading?: Maybe<Scalars['String']>;
  subheading?: Maybe<Scalars['String']>;
  button?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_2Button>;
  button_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_2Button = {
  button_text?: Maybe<Scalars['String']>;
  button_href?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_2ButtonFilterInput = {
  button_text?: Maybe<StringQueryOperatorInput>;
  button_href?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterAnonymous_Section_2FilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  subheading?: Maybe<StringQueryOperatorInput>;
  button?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_2ButtonFilterInput>;
  button_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_Section = {
  section_heading?: Maybe<Scalars['String']>;
  image_column?: Maybe<MarkdownRemarkFrontmatterContact_SectionImage_Column>;
  right_column?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_Column>;
  heading?: Maybe<Scalars['String']>;
  left_column?: Maybe<MarkdownRemarkFrontmatterContact_SectionLeft_Column>;
};

export type MarkdownRemarkFrontmatterContact_SectionFilterInput = {
  section_heading?: Maybe<StringQueryOperatorInput>;
  image_column?: Maybe<MarkdownRemarkFrontmatterContact_SectionImage_ColumnFilterInput>;
  right_column?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFilterInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  left_column?: Maybe<MarkdownRemarkFrontmatterContact_SectionLeft_ColumnFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionImage_Column = {
  image?: Maybe<MarkdownRemarkFrontmatterContact_SectionImage_ColumnImage>;
};

export type MarkdownRemarkFrontmatterContact_SectionImage_ColumnFilterInput = {
  image?: Maybe<MarkdownRemarkFrontmatterContact_SectionImage_ColumnImageFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionImage_ColumnImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionImage_ColumnImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionLeft_Column = {
  markdown_text?: Maybe<Scalars['String']>;
  button?: Maybe<MarkdownRemarkFrontmatterContact_SectionLeft_ColumnButton>;
  button_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionLeft_ColumnButton = {
  button_text?: Maybe<Scalars['String']>;
  button_href?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionLeft_ColumnButtonFilterInput = {
  button_text?: Maybe<StringQueryOperatorInput>;
  button_href?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionLeft_ColumnFilterInput = {
  markdown_text?: Maybe<StringQueryOperatorInput>;
  button?: Maybe<MarkdownRemarkFrontmatterContact_SectionLeft_ColumnButtonFilterInput>;
  button_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_Column = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  form?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnForm>;
  show_newsletter?: Maybe<Scalars['Boolean']>;
  newsletter?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnNewsletter>;
  address_markdown?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  form?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormFilterInput>;
  show_newsletter?: Maybe<BooleanQueryOperatorInput>;
  newsletter?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnNewsletterFilterInput>;
  address_markdown?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnForm = {
  name_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_Field>;
  telephone_number_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_Field>;
  email_address_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_Field>;
  message_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_Field>;
  send_button?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_Button>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_Field = {
  label?: Maybe<Scalars['String']>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldMessages>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldMessagesFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldMessages = {
  is_email?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldMessagesFilterInput = {
  is_email?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormFilterInput = {
  name_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldFilterInput>;
  telephone_number_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldFilterInput>;
  email_address_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldFilterInput>;
  message_field?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldFilterInput>;
  send_button?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_Field = {
  max_number_characters?: Maybe<Scalars['Int']>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldMessages>;
  label?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldFilterInput = {
  max_number_characters?: Maybe<IntQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldMessagesFilterInput>;
  label?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldMessages = {
  character_maximum?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldMessagesFilterInput = {
  character_maximum?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_Field = {
  label?: Maybe<Scalars['String']>;
  max_number_characters?: Maybe<Scalars['Int']>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldMessages>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  max_number_characters?: Maybe<IntQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldMessagesFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldMessages = {
  character_maximum?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldMessagesFilterInput = {
  character_maximum?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_Button = {
  button_text?: Maybe<Scalars['String']>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonMessages>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonFilterInput = {
  button_text?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonMessagesFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonMessages = {
  is_sent?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonMessagesFilterInput = {
  is_sent?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_Field = {
  label?: Maybe<Scalars['String']>;
  max_number_characters?: Maybe<Scalars['Int']>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldMessages>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  max_number_characters?: Maybe<IntQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldMessagesFilterInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldMessages = {
  character_maximum?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldMessagesFilterInput = {
  character_maximum?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnNewsletter = {
  heading?: Maybe<Scalars['String']>;
  placeholder?: Maybe<Scalars['String']>;
  button_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterContact_SectionRight_ColumnNewsletterFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  placeholder?: Maybe<StringQueryOperatorInput>;
  button_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  templateKey?: Maybe<StringQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  pageTitle?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  header_section?: Maybe<MarkdownRemarkFrontmatterHeader_SectionFilterInput>;
  contact_section?: Maybe<MarkdownRemarkFrontmatterContact_SectionFilterInput>;
  header?: Maybe<MarkdownRemarkFrontmatterHeaderFilterInput>;
  form?: Maybe<MarkdownRemarkFrontmatterFormFilterInput>;
  image?: Maybe<MarkdownRemarkFrontmatterImageFilterInput>;
  home_section?: Maybe<MarkdownRemarkFrontmatterHome_SectionFilterInput>;
  about_us_section?: Maybe<MarkdownRemarkFrontmatterAbout_Us_SectionFilterInput>;
  philosophy_section?: Maybe<MarkdownRemarkFrontmatterPhilosophy_SectionFilterInput>;
  verfahren_section?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionFilterInput>;
  anonymous_section_1?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_1FilterInput>;
  anonymous_section_2?: Maybe<MarkdownRemarkFrontmatterAnonymous_Section_2FilterInput>;
  praxis_section?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionFilterInput>;
  laboratory_section?: Maybe<MarkdownRemarkFrontmatterLaboratory_SectionFilterInput>;
  team_section?: Maybe<MarkdownRemarkFrontmatterTeam_SectionFilterInput>;
  meta_description?: Maybe<StringQueryOperatorInput>;
  footer?: Maybe<MarkdownRemarkFrontmatterFooterFilterInput>;
};

export type MarkdownRemarkFrontmatterFooter = {
  logo_img?: Maybe<MarkdownRemarkFrontmatterFooterLogo_Img>;
  copyright?: Maybe<Scalars['String']>;
  links?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterFooterLinks>>>;
};

export type MarkdownRemarkFrontmatterFooterFilterInput = {
  logo_img?: Maybe<MarkdownRemarkFrontmatterFooterLogo_ImgFilterInput>;
  copyright?: Maybe<StringQueryOperatorInput>;
  links?: Maybe<MarkdownRemarkFrontmatterFooterLinksFilterListInput>;
};

export type MarkdownRemarkFrontmatterFooterLinks = {
  text?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFooterLinksFilterInput = {
  text?: Maybe<StringQueryOperatorInput>;
  href?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFooterLinksFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterFooterLinksFilterInput>;
};

export type MarkdownRemarkFrontmatterFooterLogo_Img = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFooterLogo_ImgFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterForm = {
  name_field?: Maybe<MarkdownRemarkFrontmatterFormName_Field>;
  telephone_number_field?: Maybe<MarkdownRemarkFrontmatterFormTelephone_Number_Field>;
  email_address_field?: Maybe<MarkdownRemarkFrontmatterFormEmail_Address_Field>;
  send_button?: Maybe<MarkdownRemarkFrontmatterFormSend_Button>;
};

export type MarkdownRemarkFrontmatterFormEmail_Address_Field = {
  label?: Maybe<Scalars['String']>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormEmail_Address_FieldMessages>;
};

export type MarkdownRemarkFrontmatterFormEmail_Address_FieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormEmail_Address_FieldMessagesFilterInput>;
};

export type MarkdownRemarkFrontmatterFormEmail_Address_FieldMessages = {
  is_email?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFormEmail_Address_FieldMessagesFilterInput = {
  is_email?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFormFilterInput = {
  name_field?: Maybe<MarkdownRemarkFrontmatterFormName_FieldFilterInput>;
  telephone_number_field?: Maybe<MarkdownRemarkFrontmatterFormTelephone_Number_FieldFilterInput>;
  email_address_field?: Maybe<MarkdownRemarkFrontmatterFormEmail_Address_FieldFilterInput>;
  send_button?: Maybe<MarkdownRemarkFrontmatterFormSend_ButtonFilterInput>;
};

export type MarkdownRemarkFrontmatterFormName_Field = {
  label?: Maybe<Scalars['String']>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormName_FieldMessages>;
  max_number_characters?: Maybe<Scalars['Int']>;
};

export type MarkdownRemarkFrontmatterFormName_FieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormName_FieldMessagesFilterInput>;
  max_number_characters?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFormName_FieldMessages = {
  required?: Maybe<Scalars['String']>;
  character_maximum?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFormName_FieldMessagesFilterInput = {
  required?: Maybe<StringQueryOperatorInput>;
  character_maximum?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFormSend_Button = {
  button_text?: Maybe<Scalars['String']>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormSend_ButtonMessages>;
};

export type MarkdownRemarkFrontmatterFormSend_ButtonFilterInput = {
  button_text?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormSend_ButtonMessagesFilterInput>;
};

export type MarkdownRemarkFrontmatterFormSend_ButtonMessages = {
  is_sent?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFormSend_ButtonMessagesFilterInput = {
  is_sent?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFormTelephone_Number_Field = {
  label?: Maybe<Scalars['String']>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormTelephone_Number_FieldMessages>;
  max_number_characters?: Maybe<Scalars['Int']>;
};

export type MarkdownRemarkFrontmatterFormTelephone_Number_FieldFilterInput = {
  label?: Maybe<StringQueryOperatorInput>;
  messages?: Maybe<MarkdownRemarkFrontmatterFormTelephone_Number_FieldMessagesFilterInput>;
  max_number_characters?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFormTelephone_Number_FieldMessages = {
  character_maximum?: Maybe<Scalars['String']>;
  required?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterFormTelephone_Number_FieldMessagesFilterInput = {
  character_maximum?: Maybe<StringQueryOperatorInput>;
  required?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterHeader = {
  logo_image?: Maybe<MarkdownRemarkFrontmatterHeaderLogo_Image>;
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  logo_img?: Maybe<MarkdownRemarkFrontmatterHeaderLogo_Img>;
};

export type MarkdownRemarkFrontmatterHeader_Section = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  image?: Maybe<MarkdownRemarkFrontmatterHeader_SectionImage>;
};

export type MarkdownRemarkFrontmatterHeader_SectionFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MarkdownRemarkFrontmatterHeader_SectionImageFilterInput>;
};

export type MarkdownRemarkFrontmatterHeader_SectionImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterHeader_SectionImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterHeaderFilterInput = {
  logo_image?: Maybe<MarkdownRemarkFrontmatterHeaderLogo_ImageFilterInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  logo_img?: Maybe<MarkdownRemarkFrontmatterHeaderLogo_ImgFilterInput>;
};

export type MarkdownRemarkFrontmatterHeaderLogo_Image = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterHeaderLogo_ImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterHeaderLogo_Img = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterHeaderLogo_ImgFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterHome_Section = {
  text_column?: Maybe<MarkdownRemarkFrontmatterHome_SectionText_Column>;
  image_column?: Maybe<MarkdownRemarkFrontmatterHome_SectionImage_Column>;
};

export type MarkdownRemarkFrontmatterHome_SectionFilterInput = {
  text_column?: Maybe<MarkdownRemarkFrontmatterHome_SectionText_ColumnFilterInput>;
  image_column?: Maybe<MarkdownRemarkFrontmatterHome_SectionImage_ColumnFilterInput>;
};

export type MarkdownRemarkFrontmatterHome_SectionImage_Column = {
  image?: Maybe<MarkdownRemarkFrontmatterHome_SectionImage_ColumnImage>;
};

export type MarkdownRemarkFrontmatterHome_SectionImage_ColumnFilterInput = {
  image?: Maybe<MarkdownRemarkFrontmatterHome_SectionImage_ColumnImageFilterInput>;
};

export type MarkdownRemarkFrontmatterHome_SectionImage_ColumnImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterHome_SectionImage_ColumnImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterHome_SectionText_Column = {
  markdown_text?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  button_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterHome_SectionText_ColumnFilterInput = {
  markdown_text?: Maybe<StringQueryOperatorInput>;
  heading?: Maybe<StringQueryOperatorInput>;
  button_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterLaboratory_Section = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterLaboratory_SectionFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPhilosophy_Section = {
  section_heading?: Maybe<Scalars['String']>;
  cards?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterPhilosophy_SectionCards>>>;
};

export type MarkdownRemarkFrontmatterPhilosophy_SectionCards = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  image?: Maybe<MarkdownRemarkFrontmatterPhilosophy_SectionCardsImage>;
};

export type MarkdownRemarkFrontmatterPhilosophy_SectionCardsFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<MarkdownRemarkFrontmatterPhilosophy_SectionCardsImageFilterInput>;
};

export type MarkdownRemarkFrontmatterPhilosophy_SectionCardsFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterPhilosophy_SectionCardsFilterInput>;
};

export type MarkdownRemarkFrontmatterPhilosophy_SectionCardsImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPhilosophy_SectionCardsImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPhilosophy_SectionFilterInput = {
  section_heading?: Maybe<StringQueryOperatorInput>;
  cards?: Maybe<MarkdownRemarkFrontmatterPhilosophy_SectionCardsFilterListInput>;
};

export type MarkdownRemarkFrontmatterPraxis_Section = {
  section_heading?: Maybe<Scalars['String']>;
  image_column?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionImage_Column>;
  text_column?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionText_Column>;
  image?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionImage>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionFilterInput = {
  section_heading?: Maybe<StringQueryOperatorInput>;
  image_column?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnFilterInput>;
  text_column?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionText_ColumnFilterInput>;
  image?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionImageFilterInput>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionImage_Column = {
  image?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnImage>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnFilterInput = {
  image?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnImageFilterInput>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionText_Column = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  button?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionText_ColumnButton>;
  button_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionText_ColumnButton = {
  button_text?: Maybe<Scalars['String']>;
  button_href?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionText_ColumnButtonFilterInput = {
  button_text?: Maybe<StringQueryOperatorInput>;
  button_href?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPraxis_SectionText_ColumnFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  button?: Maybe<MarkdownRemarkFrontmatterPraxis_SectionText_ColumnButtonFilterInput>;
  button_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterTeam_Section = {
  section_heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterTeam_SectionFilterInput = {
  section_heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterVerfahren_Section = {
  section_heading?: Maybe<Scalars['String']>;
  image_column?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionImage_Column>;
  text_column?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionText_Column>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionFilterInput = {
  section_heading?: Maybe<StringQueryOperatorInput>;
  image_column?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnFilterInput>;
  text_column?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnFilterInput>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionImage_Column = {
  image?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnImage>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnFilterInput = {
  image?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnImageFilterInput>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnImage = {
  source?: Maybe<File>;
  alt?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnImageFilterInput = {
  source?: Maybe<FileFilterInput>;
  alt?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionText_Column = {
  heading?: Maybe<Scalars['String']>;
  markdown_text?: Maybe<Scalars['String']>;
  button?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnButton>;
  button_text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnButton = {
  button_text?: Maybe<Scalars['String']>;
  button_href?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnButtonFilterInput = {
  button_text?: Maybe<StringQueryOperatorInput>;
  button_href?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnFilterInput = {
  heading?: Maybe<StringQueryOperatorInput>;
  markdown_text?: Maybe<StringQueryOperatorInput>;
  button?: Maybe<MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnButtonFilterInput>;
  button_text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___localesSettings___locales'
  | 'siteMetadata___localesSettings___primary'
  | 'siteMetadata___menu'
  | 'siteMetadata___menu___item___en'
  | 'siteMetadata___menu___item___de'
  | 'siteMetadata___menu___to'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___modalProps___closeTimeoutMS'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___destinationDir'
  | 'pluginCreator___pluginOptions___custom___families'
  | 'pluginCreator___pluginOptions___custom___urls'
  | 'pluginCreator___pluginOptions___modulePath'
  | 'pluginCreator___pluginOptions___enableIdentityWidget'
  | 'pluginCreator___pluginOptions___publicPath'
  | 'pluginCreator___pluginOptions___htmlTitle'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___name'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___destinationDir'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___modalProps___closeTimeoutMS'
  | 'pluginOptions___path'
  | 'pluginOptions___name'
  | 'pluginOptions___fileName'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___destinationDir'
  | 'pluginOptions___custom___families'
  | 'pluginOptions___custom___urls'
  | 'pluginOptions___modulePath'
  | 'pluginOptions___enableIdentityWidget'
  | 'pluginOptions___publicPath'
  | 'pluginOptions___htmlTitle'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  modalProps?: Maybe<SitePluginPluginOptionsModalProps>;
  path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  destinationDir?: Maybe<Scalars['String']>;
  custom?: Maybe<SitePluginPluginOptionsCustom>;
  modulePath?: Maybe<Scalars['String']>;
  enableIdentityWidget?: Maybe<Scalars['String']>;
  publicPath?: Maybe<Scalars['String']>;
  htmlTitle?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsCustom = {
  families?: Maybe<Array<Maybe<Scalars['String']>>>;
  urls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsCustomFilterInput = {
  families?: Maybe<StringQueryOperatorInput>;
  urls?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  modalProps?: Maybe<SitePluginPluginOptionsModalPropsFilterInput>;
  path?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  destinationDir?: Maybe<StringQueryOperatorInput>;
  custom?: Maybe<SitePluginPluginOptionsCustomFilterInput>;
  modulePath?: Maybe<StringQueryOperatorInput>;
  enableIdentityWidget?: Maybe<StringQueryOperatorInput>;
  publicPath?: Maybe<StringQueryOperatorInput>;
  htmlTitle?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsModalProps = {
  closeTimeoutMS?: Maybe<Scalars['Int']>;
};

export type SitePluginPluginOptionsModalPropsFilterInput = {
  closeTimeoutMS?: Maybe<IntQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  name?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  destinationDir?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  destinationDir?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  localesSettings?: Maybe<SiteSiteMetadataLocalesSettings>;
  menu?: Maybe<Array<Maybe<SiteSiteMetadataMenu>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  localesSettings?: Maybe<SiteSiteMetadataLocalesSettingsFilterInput>;
  menu?: Maybe<SiteSiteMetadataMenuFilterListInput>;
};

export type SiteSiteMetadataLocalesSettings = {
  locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  primary?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataLocalesSettingsFilterInput = {
  locales?: Maybe<StringQueryOperatorInput>;
  primary?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMenu = {
  item?: Maybe<SiteSiteMetadataMenuItem>;
  to?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMenuFilterInput = {
  item?: Maybe<SiteSiteMetadataMenuItemFilterInput>;
  to?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataMenuFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataMenuFilterInput>;
};

export type SiteSiteMetadataMenuItem = {
  en?: Maybe<Scalars['String']>;
  de?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataMenuItemFilterInput = {
  en?: Maybe<StringQueryOperatorInput>;
  de?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type FooterQueryVariables = Exact<{ [key: string]: never; }>;


export type FooterQuery = { en?: Maybe<{ frontmatter?: Maybe<{ footer?: Maybe<(
        Pick<MarkdownRemarkFrontmatterFooter, 'copyright'>
        & { links?: Maybe<Array<Maybe<Pick<MarkdownRemarkFrontmatterFooterLinks, 'href' | 'text'>>>>, logo_img?: Maybe<(
          Pick<MarkdownRemarkFrontmatterFooterLogo_Img, 'alt'>
          & { source?: Maybe<LogoFragment> }
        )> }
      )> }> }>, de?: Maybe<{ frontmatter?: Maybe<{ footer?: Maybe<(
        Pick<MarkdownRemarkFrontmatterFooter, 'copyright'>
        & { links?: Maybe<Array<Maybe<Pick<MarkdownRemarkFrontmatterFooterLinks, 'href' | 'text'>>>>, logo_img?: Maybe<(
          Pick<MarkdownRemarkFrontmatterFooterLogo_Img, 'alt'>
          & { source?: Maybe<LogoFragment> }
        )> }
      )> }> }> };

export type HeaderQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderQuery = { en?: Maybe<{ frontmatter?: Maybe<{ header?: Maybe<{ logo_img?: Maybe<(
          Pick<MarkdownRemarkFrontmatterHeaderLogo_Img, 'alt'>
          & { source?: Maybe<SvgImageFragment> }
        )> }> }> }>, de?: Maybe<{ frontmatter?: Maybe<{ header?: Maybe<{ logo_img?: Maybe<(
          Pick<MarkdownRemarkFrontmatterHeaderLogo_Img, 'alt'>
          & { source?: Maybe<SvgImageFragment> }
        )> }> }> }>, site?: Maybe<{ siteMetadata?: Maybe<{ menu?: Maybe<Array<Maybe<(
        Pick<SiteSiteMetadataMenu, 'to'>
        & { item?: Maybe<Pick<SiteSiteMetadataMenuItem, 'en' | 'de'>> }
      )>>> }> }> };

export type SiteMetadataQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteMetadataQuery = { en?: Maybe<{ frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'meta_description'>> }>, de?: Maybe<{ frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'meta_description'>> }> };

export type ContactQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ContactQuery = { markdownRemark?: Maybe<{ frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'pageTitle'>
      & { header_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterHeader_Section, 'heading' | 'markdown_text'>
        & { image?: Maybe<(
          Pick<MarkdownRemarkFrontmatterHeader_SectionImage, 'alt'>
          & { source?: Maybe<FullWidthImageFragment> }
        )> }
      )>, contact_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterContact_Section, 'section_heading' | 'heading'>
        & { image_column?: Maybe<{ image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterContact_SectionImage_ColumnImage, 'alt'>
            & { source?: Maybe<ColumnImageMediumFragment> }
          )> }>, right_column?: Maybe<(
          Pick<MarkdownRemarkFrontmatterContact_SectionRight_Column, 'heading' | 'markdown_text' | 'address_markdown' | 'show_newsletter'>
          & { form?: Maybe<{ name_field?: Maybe<(
              Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_Field, 'label' | 'max_number_characters'>
              & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormName_FieldMessages, 'character_maximum' | 'required'>> }
            )>, telephone_number_field?: Maybe<(
              Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_Field, 'label' | 'max_number_characters'>
              & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormTelephone_Number_FieldMessages, 'character_maximum' | 'required'>> }
            )>, email_address_field?: Maybe<(
              Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_Field, 'label'>
              & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormEmail_Address_FieldMessages, 'is_email' | 'required'>> }
            )>, message_field?: Maybe<(
              Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_Field, 'label' | 'max_number_characters'>
              & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormMessage_FieldMessages, 'character_maximum' | 'required'>> }
            )>, send_button?: Maybe<(
              Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_Button, 'button_text'>
              & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnFormSend_ButtonMessages, 'is_sent'>> }
            )> }>, newsletter?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnNewsletter, 'heading' | 'placeholder' | 'button_text'>> }
        )> }
      )> }
    )> }> };

export type ContactPopupQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ContactPopupQuery = { markdownRemark?: Maybe<{ frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'locale'>
      & { header?: Maybe<(
        Pick<MarkdownRemarkFrontmatterHeader, 'heading' | 'markdown_text'>
        & { logo_image?: Maybe<(
          Pick<MarkdownRemarkFrontmatterHeaderLogo_Image, 'alt'>
          & { source?: Maybe<LogoFragment> }
        )> }
      )>, form?: Maybe<{ name_field?: Maybe<(
          Pick<MarkdownRemarkFrontmatterFormName_Field, 'label' | 'max_number_characters'>
          & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterFormName_FieldMessages, 'required' | 'character_maximum'>> }
        )>, telephone_number_field?: Maybe<(
          Pick<MarkdownRemarkFrontmatterFormTelephone_Number_Field, 'label' | 'max_number_characters'>
          & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterFormTelephone_Number_FieldMessages, 'character_maximum' | 'required'>> }
        )>, email_address_field?: Maybe<(
          Pick<MarkdownRemarkFrontmatterFormEmail_Address_Field, 'label'>
          & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterFormEmail_Address_FieldMessages, 'is_email' | 'required'>> }
        )>, send_button?: Maybe<(
          Pick<MarkdownRemarkFrontmatterFormSend_Button, 'button_text'>
          & { messages?: Maybe<Pick<MarkdownRemarkFrontmatterFormSend_ButtonMessages, 'is_sent'>> }
        )> }>, image?: Maybe<(
        Pick<MarkdownRemarkFrontmatterImage, 'alt'>
        & { source?: Maybe<PopupColumnImageFragment> }
      )> }
    )> }> };

export type IndexQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type IndexQuery = { markdownRemark?: Maybe<{ frontmatter?: Maybe<(
      Pick<MarkdownRemarkFrontmatter, 'locale' | 'pageTitle' | 'path'>
      & { home_section?: Maybe<{ image_column?: Maybe<{ image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterHome_SectionImage_ColumnImage, 'alt'>
            & { source?: Maybe<ColumnImageLargeFragment> }
          )> }>, text_column?: Maybe<Pick<MarkdownRemarkFrontmatterHome_SectionText_Column, 'heading' | 'markdown_text' | 'button_text'>> }>, about_us_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterAbout_Us_Section, 'section_heading' | 'heading' | 'markdown_text'>
        & { image?: Maybe<(
          Pick<MarkdownRemarkFrontmatterAbout_Us_SectionImage, 'alt'>
          & { source?: Maybe<SvgImageFragment> }
        )> }
      )>, philosophy_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterPhilosophy_Section, 'section_heading'>
        & { cards?: Maybe<Array<Maybe<(
          Pick<MarkdownRemarkFrontmatterPhilosophy_SectionCards, 'heading' | 'markdown_text'>
          & { image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterPhilosophy_SectionCardsImage, 'alt'>
            & { source?: Maybe<CardHeaderImageFragment> }
          )> }
        )>>> }
      )>, verfahren_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterVerfahren_Section, 'section_heading'>
        & { text_column?: Maybe<(
          Pick<MarkdownRemarkFrontmatterVerfahren_SectionText_Column, 'heading' | 'markdown_text'>
          & { button?: Maybe<Pick<MarkdownRemarkFrontmatterVerfahren_SectionText_ColumnButton, 'button_text' | 'button_href'>> }
        )>, image_column?: Maybe<{ image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterVerfahren_SectionImage_ColumnImage, 'alt'>
            & { source?: Maybe<ColumnImageLargeFragment> }
          )> }> }
      )>, anonymous_section_1?: Maybe<{ image_column?: Maybe<{ image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterAnonymous_Section_1Image_ColumnImage, 'alt'>
            & { source?: Maybe<ColumnImageMediumFragment> }
          )> }>, text_column?: Maybe<Pick<MarkdownRemarkFrontmatterAnonymous_Section_1Text_Column, 'heading' | 'markdown_text'>> }>, anonymous_section_2?: Maybe<(
        Pick<MarkdownRemarkFrontmatterAnonymous_Section_2, 'heading' | 'subheading'>
        & { button?: Maybe<Pick<MarkdownRemarkFrontmatterAnonymous_Section_2Button, 'button_text' | 'button_href'>> }
      )>, praxis_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterPraxis_Section, 'section_heading'>
        & { image_column?: Maybe<{ image?: Maybe<(
            Pick<MarkdownRemarkFrontmatterPraxis_SectionImage_ColumnImage, 'alt'>
            & { source?: Maybe<ColumnImageMediumFragment> }
          )> }>, text_column?: Maybe<(
          Pick<MarkdownRemarkFrontmatterPraxis_SectionText_Column, 'heading' | 'markdown_text'>
          & { button?: Maybe<Pick<MarkdownRemarkFrontmatterPraxis_SectionText_ColumnButton, 'button_text' | 'button_href'>> }
        )>, image?: Maybe<(
          Pick<MarkdownRemarkFrontmatterPraxis_SectionImage, 'alt'>
          & { source?: Maybe<SvgImageFragment> }
        )> }
      )>, laboratory_section?: Maybe<Pick<MarkdownRemarkFrontmatterLaboratory_Section, 'heading' | 'markdown_text'>>, team_section?: Maybe<Pick<MarkdownRemarkFrontmatterTeam_Section, 'section_heading' | 'markdown_text'>>, contact_section?: Maybe<(
        Pick<MarkdownRemarkFrontmatterContact_Section, 'section_heading' | 'heading'>
        & { left_column?: Maybe<(
          Pick<MarkdownRemarkFrontmatterContact_SectionLeft_Column, 'markdown_text'>
          & { button?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionLeft_ColumnButton, 'button_text' | 'button_href'>> }
        )>, right_column?: Maybe<(
          Pick<MarkdownRemarkFrontmatterContact_SectionRight_Column, 'address_markdown' | 'show_newsletter'>
          & { newsletter?: Maybe<Pick<MarkdownRemarkFrontmatterContact_SectionRight_ColumnNewsletter, 'heading' | 'placeholder' | 'button_text'>> }
        )> }
      )> }
    )> }> };

export type OneColumnPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OneColumnPageQuery = { markdownRemark?: Maybe<{ frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'pageTitle' | 'heading' | 'markdown_text'>> }> };

export type ColumnImageMediumFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type ColumnImageLargeFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type LogoFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type CardHeaderImageFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type GalleryImageFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type SvgImageFragment = Pick<File, 'extension' | 'publicURL'>;

export type PopupColumnImageFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type FullWidthImageFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }> };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allMarkdownRemark: { edges: Array<{ node: { fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>, frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'locale'>> } }> } };

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { site?: Maybe<{ siteMetadata?: Maybe<{ localesSettings?: Maybe<Pick<SiteSiteMetadataLocalesSettings, 'locales' | 'primary'>> }> }> };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
