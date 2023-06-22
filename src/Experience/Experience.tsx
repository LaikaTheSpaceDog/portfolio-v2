import React from 'react'

import Carousel from './Carousel'
import {
  ExperienceInner,
  ExperienceSection,
  ExperienceTitle
} from './experienceStyles'

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience" aria-label="experience-section">
      <ExperienceInner>
        <ExperienceTitle>Experience</ExperienceTitle>
        <Carousel />
      </ExperienceInner>
    </ExperienceSection>
  )
}

export default Experience
