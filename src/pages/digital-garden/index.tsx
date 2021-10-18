import React from 'react';
import { Link, graphql } from 'gatsby'

import Layout from '../../components/Layout';

export default function Notes( { data } ) {
    return (
      <Layout>
        <p>This is a collection of work in progress notes, which may become full-fledged essays or tutorials someday. if you're not familiar with the digital garden trend check out <a href="https://maggieappleton.com/garden-history" target="_blank">this post</a> and my own thoughts on digital gardening</p>
        <ul>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                      <h2>
                        <Link to={`/digital-garden/${node.slug}`}>
                          {node.frontmatter.title}
                        </Link>
                      </h2>
                    </article>
                ))
            }
        </ul>
      </Layout>            
    )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`