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
    <HomeSection>
      <HomeHeader>
        <a href="/">
          <HomeLogo>
            <Logo />
          </HomeLogo>
        </a>
        <HomeMenu>
          {menuItems.map((item) => (
            <HomeMenuItem key={item}>
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                {item}
              </Link>
            </HomeMenuItem>
          ))}
          {size.width <= 1024 && (
            <HomeMobileMenu onClick={handleClickMenu} src={menuIcon} />
          )}
          <HomeMobileMenuList visible={mobileMenuVisible}>
            {menuItems.map((item) => (
              <HomeMobileMenuListItem key={item}>
                <Link
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setMobileMenuVisible(false)
                  }}
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
        <a href="mailto:oscarjwales@gmail.com" target="_blank" rel="noreferrer">
          <HomeIcon src={emailIcon} />
        </a>
        <a
          href="https://github.com/LaikaTheSpaceDog"
          target="_blank"
          rel="noreferrer"
        >
          <HomeIconRound src={githubIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/oscar-wales/"
          target="_blank"
          rel="noreferrer"
        >
          <HomeIcon src={linkedinIcon} />
        </a>
      </HomeIconsContainer>
    </HomeSection>
  )
}

export default Home
