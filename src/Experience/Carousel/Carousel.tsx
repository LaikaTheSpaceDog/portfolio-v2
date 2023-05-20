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

interface CarouselItemInterface {
  item: {
    title: string
    subtitle: string
    points: string[]
  }
}

const CarouselItem: React.FC<CarouselItemInterface> = ({ item }) => {
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

const Carousel: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState(0)

  const expItems = [
    {
      title: 'Associate Engineer at Utility Warehouse',
      subtitle: 'February 2022 – Present',
      points: [
        'Developing new features for the mobile and web apps, building new components and refactoring old parts of the codebase.',
        'Converting the React Native mobile app over to TypeScript.',
        'Working closely with the backend team, using Apollo Client to manage our GraphQL API.',
        'Lead on a shared project between the partner and customer teams to build a UI library of components used by both teams, accessible via a Typescript package on npm.',
        'Collaborating with the design and product teams and participating in joint discussions on the direction of the app and key decisions relating to UI/UX.'
      ]
    },
    {
      title: 'Web Developer at Fanatic',
      subtitle: 'February 2021 – February 2022',
      points: [
        'Led on the development and go-live processes for Wordpress sites for new and longstanding clients of the agency',
        'Built a React app for Halfords to compare the costs of electric vehicles compared to conventional vehicles.',
        'Worked closely with the Design and Digital Marketing teams to help actualize their visions for the sites I was working on'
      ]
    },
    {
      title: 'Student at Develop Me',
      subtitle: 'June – September 2020',
      points: [
        'Took part in a 3-month-long full-time intensive bootcamp on full-stack web development.',
        'Learns the fundamentals of HTML, CSS, JavaScript and React for frontend development, as well as PHP and Laravel for server-side programming.',
        'Completed a final individual and group assessment that were presented at the end of the course.'
      ]
    }
  ]

  return (
    <ExperienceCarousel>
      <ExperienceCarouselControls>
        <ExperienceCarouselControlsHighlight activeTabId={activeTabId} />
        <ExperienceCarouselControlsItem
          active={activeTabId === 0}
          onClick={() => {
            setActiveTabId(0)
          }}
        >
          Utility Warehouse
        </ExperienceCarouselControlsItem>
        <ExperienceCarouselControlsItem
          active={activeTabId === 1}
          onClick={() => {
            setActiveTabId(1)
          }}
        >
          Fanatic
        </ExperienceCarouselControlsItem>
        <ExperienceCarouselControlsItem
          active={activeTabId === 2}
          onClick={() => {
            setActiveTabId(2)
          }}
        >
          Develop Me
        </ExperienceCarouselControlsItem>
      </ExperienceCarouselControls>
      <ExperienceCarouselSlides>
        <ExperienceCarouselSlidesInner activeTabId={activeTabId}>
          {expItems.map((item, i) => (
            <CarouselItem item={item} key={i} />
          ))}
        </ExperienceCarouselSlidesInner>
      </ExperienceCarouselSlides>
    </ExperienceCarousel>
  )
}

export default Carousel
