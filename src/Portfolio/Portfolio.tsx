import React from 'react'
import {
  PortfolioSection,
  PortfolioText,
  PortfolioTitle
} from './portfolioStyles'

const Portfolio: React.FC = () => {
  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioText>Blah blah blah</PortfolioText>
    </PortfolioSection>
  )
}

export default Portfolio
