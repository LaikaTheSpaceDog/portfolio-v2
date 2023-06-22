import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'

import { ReactComponent as Logo } from 'src/assets/images/logo.svg'
import linkedinIcon from 'src/assets/images/icons/linkedin.svg'
import emailIcon from 'src/assets/images/icons/email.svg'
import githubIcon from 'src/assets/images/icons/github.svg'
import menuIcon from 'src/assets/images/icons/menu.svg'
import useWindowSize from 'src/utils/useWindowSize'

import {
  HomeHeader,
  HomeIcon,
  HomeIconRound,
  HomeIconsContainer,
  HomeLogo,
  HomeMain,
  HomeMenu,
  HomeMenuItem,
  HomeMobileMenu,
  HomeMobileMenuList,
  HomeMobileMenuListItem,
  HomeSection,
  HomeStop,
  HomeSubtitle,
  HomeText,
  HomeTitle
} from './homeStyles'

const Home: React.FC = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const size = useWindowSize()

  const handleClickMenu = (): void => {
    setMobileMenuVisible(!mobileMenuVisible)
  }

  const menuItems = ['About', 'Experience', 'Portfolio', 'Contact']

  useEffect(() => {
    if (size.width > 1024) {
      setMobileMenuVisible(false)
    }
  })

  return (
    <HomeSection aria-label="home section">
      <HomeHeader aria-label="header">
        <a href="/" aria-label="home link">
          <HomeLogo>
            <Logo aria-label="logo" />
          </HomeLogo>
        </a>
        <HomeMenu role="navigation" aria-label="menu">
          {menuItems.map((item) => (
            <HomeMenuItem key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                aria-label={`link to ${item} section`}
              >
                {item}
              </Link>
            </HomeMenuItem>
          ))}
          {size.width <= 1024 && (
            <HomeMobileMenu onClick={handleClickMenu} src={menuIcon} />
          )}
          <HomeMobileMenuList
            visible={mobileMenuVisible}
            role="navigation"
            aria-label="mobile menu"
          >
            {menuItems.map((item) => (
              <HomeMobileMenuListItem key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setMobileMenuVisible(false)
                  }}
                  aria-label="mobile menu item"
                >
                  {item}
                </Link>
              </HomeMobileMenuListItem>
            ))}
          </HomeMobileMenuList>
        </HomeMenu>
      </HomeHeader>
      <HomeMain>
        <HomeTitle>
          Laika Dev<HomeStop>|</HomeStop>
        </HomeTitle>
        <HomeSubtitle>Frontend Engineer</HomeSubtitle>
        <HomeText>
          I specialise in crafting beautiful frontend apps with great user
          experiences.
        </HomeText>
      </HomeMain>
      <HomeIconsContainer>
        <a
          href="mailto:oscarjwales@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="email link"
        >
          <HomeIcon src={emailIcon} />
        </a>
        <a
          href="https://github.com/LaikaTheSpaceDog"
          target="_blank"
          rel="noreferrer"
          aria-label="github link"
        >
          <HomeIconRound src={githubIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/oscar-wales/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin link"
        >
          <HomeIcon src={linkedinIcon} />
        </a>
      </HomeIconsContainer>
    </HomeSection>
  )
}

export default Home
