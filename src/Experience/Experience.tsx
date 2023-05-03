import React from 'react'

import Carousel from './Carousel'
import {
  ExperienceInner,
  ExperienceSection,
  ExperienceTitle
} from './experienceStyles'

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceInner>
        <ExperienceTitle>Experience</ExperienceTitle>
        <Carousel />
      </ExperienceInner>
    </ExperienceSection>
  )
}

export default Experience
