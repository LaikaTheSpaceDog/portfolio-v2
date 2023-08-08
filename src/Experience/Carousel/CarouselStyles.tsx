import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

export const ExperienceCarouselSlide = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 100%;

  h2 {
    font-size: 2rem;
    padding-bottom: 0.5rem;
    white-space: normal;
  }

  h3 {
    font-size: 1rem;
    padding-bottom: 1rem;
    white-space: normal;
  }

  ul {
    list-style-type: disc;
  }

  li {
    white-space: normal;
    padding-bottom: 0.75rem;
    margin-left: 1rem;
    line-height: 1.5rem;
  }
`

export const ExperienceCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const ExperienceCarouselSlides = styled.div`
  flex: 1;
  overflow: hidden;
  max-width: 100%;
`

export const ExperienceCarouselSlidesInner = styled.div<{
  activeTabId: number
}>`
  white-space: nowrap;
  transition: transform 0.3s;
  transform: translateX(calc(${({ activeTabId }) => -activeTabId} * 100%));
`

export const ExperienceCarouselControls = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;

  @media ${device.laptop} {
    flex-direction: column;
  }
`
export const ExperienceCarouselControlsItem = styled.button<{
  active: boolean
}>`
  border: none;
  background: transparent;
  text-align: left;
  cursor: pointer;
  padding: 0.5rem;
  color: ${palette.navy};
  font-weight: 600;
  transition: 0.25s;
  border-bottom: 4px solid ${palette.green};
  font-size: 1rem;
  min-width: 120px;
  width: 120px;
  text-align: center;

  @media (min-width: 566px) {
    min-width: 156px;
    width: 156px;
  }

  @media ${device.laptop} {
    border-bottom: none;
    border-left: 4px solid ${palette.green};
    min-width: 0px;
    width: auto;
    text-align: left;

    :hover,
    :focus {
      background: ${palette.red}50;
      color: ${palette.white};
    }
  }
`

export const ExperienceCarouselControlsHighlight = styled.div<{
  activeTabId: number
}>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 120px;
  background: ${palette.red};
  transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
  transition: transform 0.25s;
  transition-delay: 0.1s;

  @media ${device.mobileL} {
    width: 156px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 156px));
  }

  @media ${device.laptop} {
    transform: translateY(calc(${({ activeTabId }) => activeTabId} * 35px));
    height: 35px;
    width: 4px;
    top: 0;
    left: 0;
    bottom: auto;
  }
`
