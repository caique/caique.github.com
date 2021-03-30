import React from "react"
import styled from "@emotion/styled"

import GitHubBrand from "../images/social/github.svg"
import LinkedInBrand from "../images/social/linkedin.svg"
import MediumBrand from "../images/social/medium.svg"

const Container = styled.div`
  text-align: center;
`

const SocialLogo = styled.img`
    min-width: 24px;
    max-width: 24px;
    margin-left: 5%;

`

const SocialLinks = () => {
    return (
        <Container>
            <a href="https://github.com/caique" target="_blank" rel="noopener noreferrer">
                <SocialLogo src={GitHubBrand} />
            </a>

            <a href="https://www.linkedin.com/in/caiquepeixoto/" target="_blank" rel="noopener noreferrer">
                <SocialLogo src={LinkedInBrand} />
            </a>

            <a href="https://medium.com/@caiquerodrigues" target="_blank" rel="noopener noreferrer">
                <SocialLogo src={MediumBrand} />
            </a>
        </Container>
    );
};

export default SocialLinks;