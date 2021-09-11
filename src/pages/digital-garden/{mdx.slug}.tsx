import * as React from 'react';
import { graphql } from 'gatsby'
import NavBar from '../../components/NavBar';
import { MDXRenderer } from 'gatsby-plugin-mdx';


const Note = ({data}) => {

  return (
      <>
      <NavBar />
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
        <MDXRenderer>
            {data.mdx.body}
        </MDXRenderer>
      </>
  )
};

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default Note;
