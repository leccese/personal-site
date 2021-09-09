import React from 'react';
import { graphql } from 'gatsby'

import NavBar from '../components/NavBar';

export default function Notes( { data } ) {
    return (
        <>
        <NavBar/>
        <h1>Notes</h1>
        <ul>
            {
                data.allFile.nodes.map(node => (
                    <li>
                        {node.name}
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export const notes = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }`;