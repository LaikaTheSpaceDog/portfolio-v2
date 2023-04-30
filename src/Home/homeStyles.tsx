import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

export const HomeSection = styled.section`
  height: 100vh;
  background-color: ${palette.cream};
  padding: 1.25rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-left: -40px;

  svg {
    :hover {
      .bolt {
        fill: ${palette.red};
      }
    }
  }
`
export const HomeHeader = styled.header`
  display: flex;
  margin: 1.25rem 0;
  position: absolute;
  justify-content: space-between;
  width: calc(100vw - 10rem);
  max-width: 1200px;
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
  cursor: pointer;

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
  width: 100%;
  max-width: 1200px;
  @media (min-height: 700px) {
    padding-top: 0;
  }
`

export const HomeIconsContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: calc(100vw - 10rem);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-bottom: 1.25rem;
  margin: 0 5rem;
  gap: 1rem;
`
export const HomeIcon = styled.img`
  width: 35px;
  transition: 0.25s;
  :focus,
  :hover {
    box-shadow: 0 0.5em 0.9em -0.6em ${palette.navy};
    transform: translateY(-0.25em);
  }
`
export const HomeIconRound = styled.img`
  width: 35px;
  transition: 0.25s;
  border-radius: 50%;
  :focus,
  :hover {
    box-shadow: 0 0.5em 0.9em -0.6em ${palette.navy};
    transform: translateY(-0.25em);
  }
`
