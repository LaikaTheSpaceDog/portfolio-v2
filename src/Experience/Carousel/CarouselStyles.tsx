import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

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
  }
`

export const ExperienceCarousel = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`
export const ExperienceCarouselSlides = styled.div`
  flex: 1;
  overflow: hidden;
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
  flex-direction: column;
  position: relative;
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
  border-left: 4px solid ${palette.green};
  font-size: 1rem;

  :hover {
    background: ${palette.red}50;
    color: ${palette.white};
  }
`

export const ExperienceCarouselControlsHighlight = styled.div<{
  activeTabId: number
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 35px;
  width: 4px;
  background: ${palette.red};
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 35px));
  transition: transform 0.25s;
  transition-delay: 0.1s;
`
