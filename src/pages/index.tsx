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
                <p>Hi, I'm Isabel Leccese and this is my personal website</p>
                <p>In an effort to <a href="https://www.swyx.io/learn-in-public/" target="_blank">learn in public</a> (and because if I only published posted I considered <i>done</i> I would never publish anything at all),
                I created a <Link to="/digital-garden">digital garden</Link> - a collection of work-in-progress notes. Mostly about software, but I may explore other topics</p>
                <br/>
                <p>I'm a full-stack software engineer and my weapons of choice are usually ReactJS + python or node.js</p>
                <p>I'm currently working at <a href="https://www.athenahealth.com/" target="_blank">athenahealth</a>, creating a framework for embedded third-party web applications inside of athenaNet (athena's electronic health record)</p>
                <br/>
                <p>Outside of tech, I enjoy hiking, rock climbing, and cooking</p>
                <br/>
                <p>You won't be able to find me on social media :)</p>
                <p>But you can contact me at isabel@isabel.tech</p>
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