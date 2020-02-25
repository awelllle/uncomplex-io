/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from 'utils/typography';
import './Bio.css';

import SocialBar from '../SocialBar';

function Bio() {
  return (
    <StaticQuery
      // eslint-disable-next-line no-use-before-define
      query={bioQuery}
      render={data => {
        const { author, description } = data.site.siteMetadata;
        return (
          <div
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <div className="bio">
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                className="pic"
                style={{
                  marginRight: rhythm(1 / 2),
                }}
                imgStyle={{
                  borderRadius: '50%',
                }}
              />
              <div className="description">

            
                <p style={{ fontWeight: 400 }}> 
                
                <a   rel="noopener noreferrer" target="_blank" className= "bio-link-name" href="https://twitter.com/Awelllle"> Awelle&apos;s</a> Personal Blog <br />
                Those tech terms are really not complex! <br />
                </p>
              
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { regex: "/me2.jpeg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;

export default Bio;
