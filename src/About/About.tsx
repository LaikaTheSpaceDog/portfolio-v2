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
    <AboutSection id="about">
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
              <AboutIcon src={reactIcon} />
              <AboutText>React</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={jsIcon} />
              <AboutText>JavaScript</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={tsIcon} />
              <AboutText>TypeScript</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={phpIcon} />
              <AboutText>PHP</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={laravelIcon} />
              <AboutText>Laravel</AboutText>
            </AboutTechItem>
            <AboutTechItem>
              <AboutIcon src={wpIcon} />
              <AboutText>WordPress</AboutText>
            </AboutTechItem>
          </AboutRow>
        </AboutTextSection>
        <AboutImageSection>
          <AboutImageContainer>
            <AboutImage src={me} />
          </AboutImageContainer>
        </AboutImageSection>
      </AboutInner>
    </AboutSection>
  )
}

export default About
