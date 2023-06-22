import React, { useState } from 'react'
import { Link } from 'react-scroll'

import zoe from 'src/assets/images/zoe.png'
import food from 'src/assets/images/food.png'
import pong from 'src/assets/images/pong.png'
import { ReactComponent as GithubIcon } from 'src/assets/images/icons/github.svg'
import { palette } from 'src/utils/styleVariables'
import useWindowSize from 'src/utils/useWindowSize'

import {
  PortfolioIcon,
  PortfolioImage,
  PortfolioImageContainer,
  PortfolioImageMask,
  PortfolioInfo,
  PortfolioInner,
  PortfolioItem,
  PortfolioItemsContainer,
  PortfolioLink,
  PortfolioSection,
  PortfolioText,
  PortfolioTitle
} from './portfolioStyles'

const Portfolio: React.FC = () => {
  const [iconFill, setIconFill] = useState(palette.white)
  const size = useWindowSize()

  const items = [
    {
      liveLink: 'https://weldonproductions.co.uk/',
      githubLink: 'https://github.com/LaikaTheSpaceDog/weldon-productions',
      desc: 'A custom Wordpress theme built for an independent theatre producer.',
      title: 'Zoe Weldon Productions',
      image: zoe,
      variant: 'dark'
    },
    {
      liveLink: 'https://laikathespacedog.github.io/food-atlas',
      githubLink: 'https://github.com/LaikaTheSpaceDog/food-atlas',
      desc: 'An interactive map that allows you to explore the national dishes of the world. Built using React, Redux and Laravel.',
      title: 'Food Atlas',
      image: food,
      variant: 'light'
    },
    {
      liveLink: 'https://laikathespacedog.github.io/pong',
      githubLink: 'https://github.com/LaikaTheSpaceDog/pong',
      desc: 'A pong-themed ping-pong tournament bracket creator. Built using React and Redux.',
      title: 'Ping-Pong',
      image: pong,
      variant: 'dark'
    }
  ]

  const handleMouseEnter = (): void => {
    if (window.innerWidth >= 1024) {
      setIconFill(palette.yellow)
    }
  }

  const handleMouseLeave = (): void => {
    if (window.innerWidth >= 1024) {
      setIconFill(palette.white)
    }
  }

  return (
    <PortfolioSection id="portfolio" aria-label="portfolio section">
      <PortfolioInner>
        <PortfolioItemsContainer>
          <PortfolioInfo>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioText>
              Here are a few examples of my work from some personal projects. If
              you would like to see some more, please check out my{' '}
              <a
                href="https://github.com/LaikaTheSpaceDog"
                target="_blank"
                rel="noreferrer"
                aria-label="github link"
              >
                GitHub
              </a>{' '}
              or{' '}
              <Link
                to="contact"
                smooth={true}
                duration={500}
                aria-label="link to contact section"
              >
                contact me
              </Link>{' '}
              below.
            </PortfolioText>
          </PortfolioInfo>
          {items.map((item, i) => (
            <PortfolioItem key={i}>
              <PortfolioImageMask>
                <PortfolioLink
                  href={item.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to portfolio item"
                >
                  {item.desc}
                </PortfolioLink>
                <PortfolioIcon
                  href={item.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="link to portfolio item's github repo"
                >
                  <GithubIcon
                    fill={
                      item.variant === 'light' && size.width <= 1024
                        ? palette.navy
                        : iconFill
                    }
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ transition: '0.25s' }}
                    aria-label="github icon"
                  />
                </PortfolioIcon>
              </PortfolioImageMask>
              <PortfolioImageContainer>
                <PortfolioImage
                  src={item.image}
                  aria-label="portfolio item screenshot image"
                />
              </PortfolioImageContainer>
              <h3>{item.title}</h3>
            </PortfolioItem>
          ))}
        </PortfolioItemsContainer>
      </PortfolioInner>
    </PortfolioSection>
  )
}

export default Portfolio
