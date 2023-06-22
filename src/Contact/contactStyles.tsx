import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

export const ContactSection = styled.section`
  background-color: ${palette.cream};
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    padding: 2.5rem 3rem;
  }

  @media ${device.laptop} {
    padding: 2.5rem 5rem;
  }
`

export const ContactInner = styled.div`
  max-width: 1200px;
  width: 100%;
`

export const ContactTitle = styled.h2`
  color: ${palette.navy};
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`

export const ContactText = styled.p`
  text-align: center;
`

export const ContactButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

export const ContactButton = styled.a`
  cursor: pointer;
  padding: 1rem 2rem;
  border: solid 2px ${palette.red};
  border-radius: 1rem;
  background-color: ${palette.cream};
  font-weight: 600;
  color: ${palette.navy};
  transition: 0.25s;
  text-decoration: none;

  @media ${device.laptop} {
    :focus,
    :hover {
      box-shadow: 0 0.5em 0.9em -0.6em ${palette.navy};
      transform: translateY(-0.25em);
    }
  }
`

export const ContactIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 6rem;
  gap: 2rem;
`

export const ContactIcon = styled.img`
  width: 70px;
  transition: 0.25s;
  border-radius: 0.5rem;

  @media ${device.laptop} {
    :focus,
    :hover {
      box-shadow: 0 0.5em 0.9em -0.6em ${palette.navy};
      transform: translateY(-0.25em);
    }
  }
`

export const ContactIconRound = styled.img`
  width: 70px;
  transition: 0.25s;
  border-radius: 50%;

  @media ${device.laptop} {
    :focus,
    :hover {
      box-shadow: 0 0.5em 0.9em -0.6em ${palette.navy};
      transform: translateY(-0.25em);
    }
  }
`
