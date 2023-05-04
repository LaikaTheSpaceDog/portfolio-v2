import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

export const PortfolioSection = styled.section`
  background-color: ${palette.navy};
  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PortfolioTitle = styled.h2`
  color: ${palette.red};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

export const PortfolioInfo = styled.div`
  width: calc(50% - 1rem);
  padding: 1rem;

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
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
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
    height: 100%;
    top: 0;
    left: 0;
  }
`

export const PortfolioItem = styled.div`
  width: calc(50% - 1rem);
  transition: 0.25s;
  position: relative;

  :hover {
    transform: translateY(-1.5em);

    h3 {
      display: inline-block;
    }
  }

  h3,
  p {
    color: ${palette.white};
  }

  h3 {
    text-align: center;
    display: none;
    position: absolute;
    width: calc(100% - 32px);
    bottom: -16px;
  }
`
export const PortfolioImage = styled.img`
  max-width: 100%;
  object-fit: cover;
  border-radius: 5px;
`

export const PortfolioImageContainer = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`

export const PortfolioImageMask = styled.div`
  background-color: ${palette.navy};
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: 0.25s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
  z-index: 10;

  :hover {
    opacity: 0.95;
  }
`
export const PortfolioIcon = styled.a`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 2.5rem;
  z-index: 15;
`
