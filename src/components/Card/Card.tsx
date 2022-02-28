import React from "react";
import { Link } from "gatsby";

import "./card.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Card({ node }) {
  const img = getImage(node.frontmatter.image)
  return (
    <div key={node.id} className="card">
      {img && <GatsbyImage image={img} className={"card-image"} alt={"card image"}/>}
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
