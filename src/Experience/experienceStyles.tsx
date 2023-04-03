import styled from 'styled-components'
import { palette } from '../utils/styleVariables'

export const ExperienceSection = styled.section`
  background-color: ${palette.navy};
  padding: 1.25rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 500px;
`

export const ExperienceTitle = styled.h2`
  color: ${palette.red};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

export const ExperienceText = styled.p`
  color: ${palette.white};
`
