import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

interface HomeMobileMenuListProps {
  visible: boolean
}

export const HomeSection = styled.section`
  height: 100vh;
  background-color: ${palette.cream};
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileL} {
    padding: 2.5rem 3rem;
  }

  @media ${device.laptop} {
    padding: 2.5rem 5rem;
  }
`

export const HomeTitle = styled.h1`
  font-size: 5rem;
  color: ${palette.navy};

  @media (min-width: 1129px) {
    font-size: 6rem;
  }
`

export const HomeSubtitle = styled.h2`
  font-size: 2rem;
  color: ${palette.navy};
  margin: 1.5rem 0;

  @media (min-width: 970px) {
    margin-top: 0;
  }

  @media (min-width: 1129px) {
    font-size: 3rem;
  }
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

  @media ${device.laptop} {
    svg {
      :hover {
        .bolt {
          fill: ${palette.red};
        }
      }
    }
  }
`
export const HomeHeader = styled.header`
  display: flex;
  margin: 1.25rem 0;
  position: absolute;
  justify-content: space-between;
  width: calc(100vw - 2rem);
  max-width: 1200px;

  @media ${device.mobileL} {
    width: calc(100vw - 6rem);
  }

  @media ${device.laptop} {
    width: calc(100vw - 10rem);
  }
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
  display: none;

  @media ${device.laptop} {
    display: block;

    :hover,
    :focus {
      border-bottom: 2px solid ${palette.red};
    }
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
  width: calc(100vw - 2rem);
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 1.25rem;
  margin: 0 1rem;
  gap: 1rem;

  @media ${device.mobileL} {
    flex-direction: column;
    margin: 0 3rem;
    width: calc(100vw - 6rem);
  }

  @media ${device.laptop} {
    flex-direction: column;
    margin: 0 5rem;
    width: calc(100vw - 10rem);
  }
`
export const HomeIcon = styled.img`
  width: 35px;
  transition: 0.25s;

  @media ${device.laptop} {
    :focus,
    :hover {
      box-shadow: 0 0.5em 0.9em -0.6em ${palette.navy};
      transform: translateY(-0.25em);
    }
  }
`
export const HomeIconRound = styled.img`
  width: 35px;
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
export const HomeMobileMenu = styled.img`
  width: 35px;
  cursor: pointer;
  @media ${device.laptop} {
    display: none;
  }
`
export const HomeMobileMenuList = styled.ul<HomeMobileMenuListProps>`
  position: absolute;
  overflow: hidden;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? '128px' : '0px')};
  top: 8rem;
  right: 0;
  text-align: right;
  transition: all 0.3s ease-in-out;
`

export const HomeMobileMenuListItem = styled.li`
  padding-bottom: 1rem;

  a {
    font-weight: 600;
    color: ${palette.navy};
    cursor: pointer;

    @media ${device.laptop} {
      :hover,
      :focus {
        color: ${palette.red};
      }
    }
  }
`
