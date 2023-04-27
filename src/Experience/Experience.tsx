import React from 'react'
import {
  ExperienceSection,
  ExperienceText,
  ExperienceTitle,
  ExperienceInner
} from './experienceStyles'

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceInner>
        <ExperienceTitle>Experience</ExperienceTitle>
        <ExperienceText>Blah blah blah</ExperienceText>
      </ExperienceInner>
    </ExperienceSection>
  )
}

export default Experience
