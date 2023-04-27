import React from 'react'
import {
  ContactSection,
  ContactText,
  ContactTitle,
  ContactInner
} from './contactStyles'

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <ContactInner>
        <ContactTitle>Contact</ContactTitle>
        <ContactText>Blah blah blah</ContactText>
      </ContactInner>
    </ContactSection>
  )
}

export default Contact
