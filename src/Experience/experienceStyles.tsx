import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

export const ExperienceSection = styled.section`
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
    padding: 2.5rem 15rem;
  }
`

export const ExperienceTitle = styled.h2`
  color: ${palette.navy};
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`

export const ExperienceInner = styled.div`
  max-width: 894px;
  width: 100%;
`

export const ExperienceText = styled.p``
