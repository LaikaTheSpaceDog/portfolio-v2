import React from 'react'
import { Link } from 'react-scroll'

import { ReactComponent as Logo } from 'src/assets/images/logo.svg'

import {
  HomeHeader,
  HomeLogo,
  HomeMain,
  HomeMenu,
  HomeMenuItem,
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
        <HomeSubtitle>Frontend Engineer</HomeSubtitle>
        <HomeText>
          I specialise in crafting beautiful frontend apps with great user
          experiences.
        </HomeText>
      </HomeMain>
    </HomeSection>
  )
}

export default Home
