import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import { StaticImage }  from 'gatsby-plugin-image'

import './index.css';

export default function Index() {
    return (
        <Layout>
        <div className="landing-page-container">
            <div className="text">
                <h1>hi, I'm Isabel Leccese</h1>
                <p>I love solving problems and consider myself very fortunate to have access to humanity's finest problem-solving platform - the modern web </p>
                <p>in particular, I enjoy creating delightful user interfaces in ReactJS</p>
                <br/>
                <p>I'm currently working at <a href="https://www.athenahealth.com/" target="_blank">athenahealth</a>, creating a framework for embedding third-party web applications inside of athenaNet (athena's electronic health record)</p>
                <br/>
                <p>you can check out what I've been learning and thinking about in my <Link to="/digital-garden">digital garden</Link> - a collection of work-in-progress notes</p>
                <br/>
                <p>outside of tech, I enjoy hiking, rock climbing, and cooking</p>
                <br/>
                <p>you won't be able to find me on social media :)</p>
                <p>but you can contact me at isabel@isabel.tech</p>
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