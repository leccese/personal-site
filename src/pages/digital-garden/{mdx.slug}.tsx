import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "./slug.css";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Note = ({ data }) => {
  const img = getImage(data.mdx.frontmatter.image)

  return (
    <Layout>
      <div className={"post-content"}>
        <h1>{data.mdx.frontmatter.title}</h1>
        <h3><i>{data.mdx.frontmatter.subtitle}</i></h3>
        {img && <GatsbyImage image={img} className={"title-image"} alt={"header image"}/>}
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
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
            )
          }
        }
      }
      body
    }
  }
`;

export default Note;
