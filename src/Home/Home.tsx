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
          <HomeMenuItem href="#about">About</HomeMenuItem>
          <HomeMenuItem href="#experience">Experience</HomeMenuItem>
          <HomeMenuItem href="#portfolio">Portfolio</HomeMenuItem>
          <HomeMenuItem href="#contact">Contact</HomeMenuItem>
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
