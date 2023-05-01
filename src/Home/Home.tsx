import React from 'react'
import { Link } from 'react-scroll'

import { ReactComponent as Logo } from 'src/assets/images/logo.svg'
import linkedinIcon from 'src/assets/images/icons/linkedin.svg'
import emailIcon from 'src/assets/images/icons/email.svg'
import githubIcon from 'src/assets/images/icons/github.svg'

import {
  HomeHeader,
  HomeIcon,
  HomeIconRound,
  HomeIconsContainer,
  HomeLogo,
  HomeMain,
  HomeMenu,
  HomeMenuItem,
  HomeMobileTitle,
  HomeSection,
  HomeStop,
  HomeSubtitle,
  HomeText,
  HomeTitle
} from './homeStyles'

const Home: React.FC = () => {
  return (
    <HomeSection>
      <HomeHeader>
        <a href="/">
          <HomeLogo>
            <Logo />
          </HomeLogo>
        </a>
        <HomeMenu>
          <HomeMenuItem>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </HomeMenuItem>
          <HomeMenuItem>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </HomeMenuItem>
          <HomeMenuItem>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </HomeMenuItem>
          <HomeMenuItem>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </HomeMenuItem>
        </HomeMenu>
      </HomeHeader>
      <HomeMain>
        <HomeTitle>
          LaikaTheSpaceDog<HomeStop>|</HomeStop>
        </HomeTitle>
        <HomeMobileTitle>Laika</HomeMobileTitle>
        <HomeMobileTitle>
          TheSpaceDog<HomeStop>|</HomeStop>
        </HomeMobileTitle>
        <HomeSubtitle>Frontend Engineer</HomeSubtitle>
        <HomeText>
          I specialise in crafting beautiful frontend apps with great user
          experiences.
        </HomeText>
      </HomeMain>
      <HomeIconsContainer>
        <a href="mailto:oscarjwales@gmail.com" target="_blank" rel="noreferrer">
          <HomeIcon src={emailIcon} />
        </a>
        <a
          href="https://github.com/LaikaTheSpaceDog"
          target="_blank"
          rel="noreferrer"
        >
          <HomeIconRound src={githubIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/oscar-wales/"
          target="_blank"
          rel="noreferrer"
        >
          <HomeIcon src={linkedinIcon} />
        </a>
      </HomeIconsContainer>
    </HomeSection>
  )
}

export default Home
