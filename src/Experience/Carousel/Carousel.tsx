import React, { useState } from 'react'

import {
  ExperienceCarousel,
  ExperienceCarouselControls,
  ExperienceCarouselControlsHighlight,
  ExperienceCarouselControlsItem,
  ExperienceCarouselSlide,
  ExperienceCarouselSlides,
  ExperienceCarouselSlidesInner
} from './CarouselStyles'

import type {
  ExperienceItemsProps,
  ExperienceItemProps
} from 'src/Experience/Experience'

interface CarouselProps {
  items: ExperienceItemProps[]
}

const CarouselItem: React.FC<ExperienceItemsProps> = ({ item }) => {
  // Component inspired by and based on Brittany Chiang's carousel component: https://github.com/bchiang7/v4/blob/main/src/components/sections/jobs.js
  return (
    <ExperienceCarouselSlide>
      <h2>{item.title}</h2>
      <h3>{item.subtitle}</h3>
      <ul>
        {item.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </ExperienceCarouselSlide>
  )
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeTabId, setActiveTabId] = useState(0)

  return (
    <ExperienceCarousel>
      <ExperienceCarouselControls>
        <ExperienceCarouselControlsHighlight activeTabId={activeTabId} />
        <ExperienceCarouselControlsItem
          active={activeTabId === 0}
          onClick={() => {
            setActiveTabId(0)
          }}
          aria-label="button to show Utility Warehouse item in experience carousel"
        >
          Utility Warehouse
        </ExperienceCarouselControlsItem>
        <ExperienceCarouselControlsItem
          active={activeTabId === 1}
          onClick={() => {
            setActiveTabId(1)
          }}
          aria-label="button to show Fanatic item in experience carousel"
        >
          Fanatic
        </ExperienceCarouselControlsItem>
        <ExperienceCarouselControlsItem
          active={activeTabId === 2}
          onClick={() => {
            setActiveTabId(2)
          }}
          aria-label="button to show Develop Me item in experience carousel"
        >
          Develop Me
        </ExperienceCarouselControlsItem>
      </ExperienceCarouselControls>
      <ExperienceCarouselSlides>
        <ExperienceCarouselSlidesInner activeTabId={activeTabId}>
          {items.map((item, i) => (
            <CarouselItem item={item} key={i} />
          ))}
        </ExperienceCarouselSlidesInner>
      </ExperienceCarouselSlides>
    </ExperienceCarousel>
  )
}

export default Carousel
