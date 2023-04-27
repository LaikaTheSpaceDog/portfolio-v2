import React from 'react'

import {
  PortfolioInner,
  PortfolioSection,
  PortfolioText,
  PortfolioTitle
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
