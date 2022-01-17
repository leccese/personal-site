import React from "react"
import { Link, graphql } from 'gatsby'


import './card.css';
import Img from "gatsby-image"

export default function Card({ node }) {
  const img = node.frontmatter.image?.childImageSharp.fluid;
  return (
    <div key={node.id} className="card">
      {img && 
        <Img 
            fixed={img}
            className={"card-image"}
        />}
      <div className="card-text">
      <h2>
        <Link to={`/digital-garden/${node.slug}`}>
            {node.frontmatter.title}
        </Link>
        </h2>
        <p>{node.frontmatter.subtitle}</p>
      </div>
        
    </div>
  );
}