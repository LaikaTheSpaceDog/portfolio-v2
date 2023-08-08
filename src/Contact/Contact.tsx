import React from 'react'

import linkedinIcon from 'src/assets/images/icons/linkedin.svg'
import githubIcon from 'src/assets/images/icons/github.svg'

import {
  ContactButton,
  ContactButtonContainer,
  ContactIcon,
  ContactIconRound,
  ContactIconsContainer,
  ContactInner,
  ContactSection,
  ContactText,
  ContactTitle
} from './contactStyles'

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact" aria-label="contact section">
      <ContactInner>
        <ContactTitle>Contact</ContactTitle>
        <ContactText>
          I&apos;m always interested in hearing about new and exciting
          opportunities, so please feel free to get in touch!
        </ContactText>
        <ContactButtonContainer>
          <ContactButton
            href="mailto:oscarjwales@gmail.com"
            aria-label="email link"
          >
            Say hello
          </ContactButton>
        </ContactButtonContainer>
        <ContactIconsContainer>
          <a
            href="https://github.com/LaikaTheSpaceDog"
            target="_blank"
            rel="noreferrer"
            aria-label="link to github profile"
          >
            <ContactIconRound src={githubIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/oscar-wales/"
            target="_blank"
            rel="noreferrer"
            aria-label="link to linkedin profile"
          >
            <ContactIcon src={linkedinIcon} />
          </a>
        </ContactIconsContainer>
      </ContactInner>
    </ContactSection>
  )
}

export default Contact
