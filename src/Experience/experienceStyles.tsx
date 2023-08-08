import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

interface ExperienceCardDetailsProps {
  visible: boolean
  maxHeight: number
}

interface ExperienceIconContainerProps {
  open: boolean
}

export const ExperienceSection = styled.section`
  background-color: ${palette.cream};
  padding: 2.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.mobileL} {
    padding: 2.5rem 3rem;
  }

  @media ${device.laptop} {
    padding: 2.5rem 10rem;
  }
`

export const ExperienceTitle = styled.h2`
  color: ${palette.navy};
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 4rem;
  }
`

export const ExperienceInner = styled.div`
  max-width: 894px;
  width: 100%;
`

export const ExperienceCard = styled.div`
  margin-bottom: 1.5rem;

  h3 {
    padding-bottom: 0.25rem;
    font-size: 1.25rem;
  }

  h4 {
    padding-bottom: 0.75rem;
  }

  ul {
    list-style-type: disc;
  }

  li {
    padding-bottom: 0.5rem;
    margin-left: 1rem;
    line-height: 1.5rem;
  }
`

export const ExperienceCardHeader = styled.button`
  border: none;
  background-color: transparent;
  border-color: ${palette.navy};
  border-bottom: 1px solid;
  margin-bottom: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  text-align: left;
  cursor: pointer;
`

export const ExperienceIcon = styled.img`
  width: 2rem;
`

export const ExperienceIconContainer = styled.div<ExperienceIconContainerProps>`
  border: none;
  background-color: transparent;
  transition: transform 0.25s;
  transform: ${(props) => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};

  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
  }
`

export const ExperienceCardDetails = styled.ul<ExperienceCardDetailsProps>`
  transition: ease-in-out 0.25s;
  overflow: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? `${props.maxHeight}px` : '0px')};
`
