import React from "react"
import { Link, graphql } from 'gatsby'


import './card.css';

export default function Card({ node }) {
  return (
    <div key={node.id} className="card-container">
        <h2>
        <Link to={`/digital-garden/${node.slug}`}>
            {node.frontmatter.title}
        </Link>
        </h2>
        <p>{node.frontmatter.subtitle}</p>
    </div>
  );
}