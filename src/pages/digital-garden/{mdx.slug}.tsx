import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout/Layout";
import Img from "gatsby-image";
import "./slug.css";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Note = ({ data }) => {
  const img = data.mdx.frontmatter.image?.childImageSharp.fluid;

  return (
    <Layout>
      <div className={"post-content"}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <h3><i>{data.mdx.frontmatter.subtitle}</i></h3>
        {img && <Img fluid={img} className={"title-image"} />}
        <MDXRenderer className={"post-body"}>{data.mdx.body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`;

export default Note;
