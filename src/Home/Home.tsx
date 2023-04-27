import React from 'react'
import { Link } from 'react-scroll'

import {
  HomeSection,
  HomeStop,
  HomeSubtitle,
  HomeText,
  HomeTitle,
  HomeLogo,
  HomeHeader,
  HomeMain,
  HomeMenu,
  HomeMenuItem
} from './homeStyles'
import { ReactComponent as Logo } from 'src/assets/images/logo.svg'

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
