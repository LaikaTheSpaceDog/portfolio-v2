import React from 'react'
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
import { ReactComponent as Logo } from '../assets/images/logo.svg'

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
            <a href="#about">About</a>
          </HomeMenuItem>
          <HomeMenuItem>
            <a href="#experience">Experience</a>
          </HomeMenuItem>
          <HomeMenuItem>
            <a href="#portfolio">Portfolio</a>
          </HomeMenuItem>
          <HomeMenuItem>
            <a href="#contact">Contact</a>
          </HomeMenuItem>
        </HomeMenu>
      </HomeHeader>
      <HomeMain>
        <HomeTitle>
          LaikaTheSpaceDog<HomeStop>|</HomeStop>
        </HomeTitle>
        <HomeSubtitle>Frontend Engineer</HomeSubtitle>
        <HomeText>
          Hey, my name is Oscar and I specialise in crafting beautiful frontend
          apps with great user experiences.
        </HomeText>
      </HomeMain>
    </HomeSection>
  )
}

export default Home
