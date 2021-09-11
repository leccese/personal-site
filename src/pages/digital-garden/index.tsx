import React from 'react';
import { Link, graphql } from 'gatsby'

import NavBar from '../../components/NavBar';

export default function Notes( { data } ) {
    return (
        <>
        <NavBar/>
        <h1>Notes</h1>
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
        </>
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