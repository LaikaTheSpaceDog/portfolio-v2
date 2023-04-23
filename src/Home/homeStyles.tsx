import styled from 'styled-components'
import { palette } from '../utils/styleVariables'

export const HomeSection = styled.section`
  height: 100vh;
  background-color: ${palette.cream};
  padding: 1.25rem 5rem;
  display: flex;
  flex-direction: column;
`

export const HomeTitle = styled.h1`
  font-size: 6rem;
  color: ${palette.navy};
`

export const HomeSubtitle = styled.h2`
  font-size: 3rem;
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
export const HomeLogo = styled.div`
  width: 200px;
  height: 172.5px;
`
export const HomeHeader = styled.header`
  display: flex;
  margin: 1.25rem 0;
  position: absolute;
  justify-content: space-between;
  width: calc(100vw - 10rem);
`

export const HomeMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const HomeMenuItem = styled.div`
  padding-bottom: 5px;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.5s ease;

  :hover {
    border-bottom: 2px solid ${palette.red};
  }

  a {
    font-size: 1.5rem;
    color: ${palette.navy};
    font-family: Bergen Mono W05 Regular;
    text-decoration: none;
  }
`

export const HomeMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: calc(172.5px + 2.5rem);
  flex: 1;
  @media (min-height: 700px) {
    padding-top: 0;
  }
`
