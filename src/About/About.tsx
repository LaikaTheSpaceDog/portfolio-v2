import React from 'react'

import jsIcon from 'src/assets/images/icons/js.svg'
import laravelIcon from 'src/assets/images/icons/laravel.svg'
import phpIcon from 'src/assets/images/icons/php.svg'
import reactIcon from 'src/assets/images/icons/react.svg'
import tsIcon from 'src/assets/images/icons/ts.svg'
import wpIcon from 'src/assets/images/icons/wordpress.svg'
import me from 'src/assets/images/me.png'

import {
  AboutIcon,
  AboutImage,
  AboutImageContainer,
  AboutImageSection,
  AboutInner,
  AboutRow,
  AboutSection,
  AboutTechItem,
  AboutText,
  AboutTextSection,
  AboutTitle
} from './aboutStyles'

const About: React.FC = () => {
  return (
    <AboutSection id="about" aria-label="about section">
      <AboutInner>
        <AboutTextSection>
          <AboutTitle>About</AboutTitle>
          <AboutText>
            Hello! My name is Oscar and I love to build things online. Since
            starting my journey as a software engineer, I&apos;ve had the
            pleasure to work for both a major UK business and in-house at a
            small agile agency. I&apos;m confident in my ability to work with
            designers, product managers, digital marketers and clients to make
            their visions a reality.
          </AboutText>
          <AboutText>
            Some tech I particularly enjoy working with include:
          </AboutText>
          <AboutRow>
            <AboutTechItem>
              <AboutIcon src={reactIcon} aria-label="react logo" />
              <AboutText>React</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={jsIcon} aria-label="javascript logo" />
              <AboutText>JavaScript</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={tsIcon} aria-label="typescript logo" />
              <AboutText>TypeScript</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={phpIcon} aria-label="php logo" />
              <AboutText>PHP</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={laravelIcon} aria-label="laravel icon" />
              <AboutText>Laravel</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={wpIcon} aria-label="wordpress icon" />
              <AboutText>WordPress</AboutText>
            </AboutTechItem>
          </AboutRow>
        </AboutTextSection>
        <AboutImageSection>
          <AboutImageContainer>
            <AboutImage
              src={me}
              aria-label="profile photo of the LaikaTheSpaceDog"
            />
          </AboutImageContainer>
        </AboutImageSection>
      </AboutInner>
    </AboutSection>
  )
}

export default About
