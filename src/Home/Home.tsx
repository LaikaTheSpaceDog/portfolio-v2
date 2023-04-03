import React from 'react'
import {
  HomeSection,
  HomeStop,
  HomeSubtitle,
  HomeText,
  HomeTitle
} from './homeStyles'

const Home: React.FC = () => {
  return (
    <HomeSection>
      <HomeTitle>
        LaikaTheSpaceDog<HomeStop>|</HomeStop>
      </HomeTitle>
      <HomeSubtitle>Frontend Engineer</HomeSubtitle>
      <HomeText>
        Hey, my name is Oscar and I specialise in crafting beautiful frontend
        apps with great user experiences.
      </HomeText>
    </HomeSection>
  )
}

export default Home
