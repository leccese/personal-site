import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";

export default function Notes({ data }) {
  return (
    <Layout>
      <p>
        This is a collection of work in progress notes, which may become
        full-fledged essays or tutorials someday
      </p>

      <p>
        if you're not familiar with the digital garden trend check out{" "}
        <a href="https://maggieappleton.com/garden-history" target="_blank">
          this post
        </a>{" "}
        and my own thoughts on digital gardening
      </p>
      {data.allMdx.nodes.map((node) => (
        <Card node={node} />
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//digital-garden//" } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          image {
            childImageSharp {
              fluid(maxWidth: 500, maxHeight: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
        slug
      }
    }
  }
`;
