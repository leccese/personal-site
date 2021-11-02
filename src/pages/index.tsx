import React from 'react';
import { Link, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout/Layout';
import { StaticImage }  from 'gatsby-plugin-image'

import './index.css';

export default function Index( { data } ) {
    console.log(data)
    return (
        <Layout>
        <div className="landing-page-container">
            <div className="text">
            <MDXRenderer>{ data.mdx.body }</MDXRenderer>
            </div>
            
            <div className="photo">
                <StaticImage 
                    src='../images/profile_pic.jpg' 
                    alt="icon"
                    width={300}
                />
            </div>
        </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        mdx(frontmatter: {title: {eq: "about"}}) {
            body
          }
    }
`