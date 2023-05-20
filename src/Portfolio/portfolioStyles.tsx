import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

export const PortfolioSection = styled.section`
  background-color: ${palette.navy};
  padding: 2.5rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    padding: 2.5rem 3rem 1rem;
  }

  @media ${device.laptop} {
    padding: 2.5rem 5rem;
  }
`

export const PortfolioTitle = styled.h2`
  color: ${palette.red};
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`

export const PortfolioInfo = styled.div`
  margin-bottom: 2rem;
  @media ${device.laptop} {
    width: calc(50% - 1rem);
    padding: 1rem;
    margin-bottom: 0;
  }

  p {
    line-height: 1.5rem;

    a {
      color: ${palette.white};
      text-decoration: underline;
      cursor: pointer;
    }
  }
`

export const PortfolioText = styled.p`
  color: ${palette.white};
`
export const PortfolioInner = styled.div`
  max-width: 1200px;
  width: 100%;
`

export const PortfolioItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row;
    margin-top: 2rem;
    gap: 2rem;
  }
`
export const PortfolioLink = styled.a`
  text-decoration: none;
  color: ${palette.white};

  :before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    width: 100%;
    height: calc(100% - 1.5rem);
    top: 0;
    left: 0;

    @media ${device.laptop} {
      height: 100%;
    }
  }
`

export const PortfolioItem = styled.div`
  transition: 0.25s;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.laptop} {
    width: calc(50% - 1rem);

    :hover {
      transform: translateY(-1.5em);

      h3 {
        display: inline-block;
      }
    }
  }

  h3,
  p {
    color: ${palette.white};
  }

  h3 {
    text-align: center;
    width: calc(100% - 32px);
    order: 2;

    @media ${device.laptop} {
      display: none;
      position: absolute;
      bottom: -16px;
      order: 3;
    }
  }
`
export const PortfolioImage = styled.img`
  object-fit: cover;
  border-radius: 5px;
  max-width: 100%;

  @media ${device.laptop} {
    max-width: 100%;
  }
`

export const PortfolioImageContainer = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
  order: 1;

  @media ${device.laptop} {
    order: 2;
  }
`

export const PortfolioImageMask = styled.div`
  background-color: ${palette.navy};
  width: 100%;
  height: 100%;
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  order: 3;
  margin-bottom: 1.5rem;

  @media ${device.laptop} {
    opacity: 0;
    position: absolute;
    z-index: 10;
    order: 1;
    margin-bottom: 0;
    :hover {
      opacity: 0.95;
    }
  }
`
export const PortfolioIcon = styled.a`
  width: 2.5rem;
  z-index: 15;
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 25px;
  height: 25px;

  @media (min-width: 550px) {
    width: 40px;
    height: 40px;
  }
`
