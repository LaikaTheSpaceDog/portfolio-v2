import React from 'react'
import {
  PortfolioSection,
  PortfolioText,
  PortfolioTitle,
  PortfolioInner
} from './portfolioStyles'

const Portfolio: React.FC = () => {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioInner>
        <PortfolioTitle>Portfolio</PortfolioTitle>
        <PortfolioText>Blah blah blah</PortfolioText>
      </PortfolioInner>
    </PortfolioSection>
  )
}

export default Portfolio
