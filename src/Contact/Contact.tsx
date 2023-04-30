import React from 'react'

import {
  ContactButton,
  ContactButtonContainer,
  ContactInner,
  ContactSection,
  ContactText,
  ContactTitle
} from './contactStyles'

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <ContactInner>
        <ContactTitle>Contact</ContactTitle>
        <ContactText>
          I&apos;m always interested in hearing about new and exciting
          opportunities, so please feel free to get in touch!
        </ContactText>
        <ContactButtonContainer>
          <ContactButton href="mailto:oscarjwales@gmaiul.com">
            Say hello
          </ContactButton>
        </ContactButtonContainer>
      </ContactInner>
    </ContactSection>
  )
}

export default Contact
