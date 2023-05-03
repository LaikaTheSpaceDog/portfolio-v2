import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

export const ExperienceSection = styled.section`
  background-color: ${palette.cream};
  padding: 2.5rem 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ExperienceTitle = styled.h2`
  color: ${palette.navy};
  font-size: 4rem;
  margin-bottom: 2rem;
  text-align: center;
`

export const ExperienceInner = styled.div`
  max-width: 894px;
  width: 100%;
`

export const ExperienceText = styled.p``
