import * as React from 'react';
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../../components/Layout/Layout';


const Note = ({data}) => {

  return (
      <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <i>{data.mdx.frontmatter.subtitle}</i>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
      </Layout>
  )
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Note;
