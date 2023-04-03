import styled from 'styled-components'
import { palette } from '../utils/styleVariables'

export const HomeSection = styled.section`
  min-height: 100vh;
  background-color: ${palette.cream};
  padding: 1.25rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HomeTitle = styled.h1`
  font-size: 4rem;
  color: ${palette.navy};
`

export const HomeSubtitle = styled.h2`
  font-size: 2.5rem;
  color: ${palette.navy};
  margin-bottom: 1.5rem;
`

export const HomeText = styled.p`
  color: ${palette.navy};
  font-size: 1.5em;
`

export const HomeStop = styled.span`
  color: ${palette.red};
  animation: blinker 1s step-end infinite;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`
