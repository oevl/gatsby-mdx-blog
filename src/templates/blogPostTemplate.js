import { graphql, Link } from 'gatsby';
import Dump from '../components/Dump';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import {Layout} from '../components/Layout';

export default ({data, pageContext}) => {
    const {frontmatter, body} = data.mdx;
    const {previous, next} = pageContext;
  return (
    <Layout>
      <Dump previous={previous} />
      <Dump next={next} />
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>&lt;&nbsp;{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}&nbsp;&gt;</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
query Slug($slug:String!){
  mdx(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      date
    }
    body
  }
}
`;
