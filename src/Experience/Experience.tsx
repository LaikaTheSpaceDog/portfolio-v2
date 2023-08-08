import React, { useRef, useState } from 'react'

import useWindowSize from 'src/utils/useWindowSize'
import addIcon from 'src/assets/images/icons/add.svg'

import Carousel from './Carousel'
import {
  ExperienceCard,
  ExperienceCardDetails,
  ExperienceCardHeader,
  ExperienceIcon,
  ExperienceIconContainer,
  ExperienceInner,
  ExperienceSection,
  ExperienceTitle
} from './experienceStyles'

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

export interface ExperienceItemProps {
  title: string
  subtitle: string
  points: string[]
}

export interface ExperienceItemsProps {
  item: ExperienceItemProps
}

const ExperienceItem: React.FC<ExperienceItemsProps> = ({ item }) => {
  const [visible, setVisible] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <ExperienceCard>
      <ExperienceCardHeader
        onClick={() => {
          setVisible(!visible)
        }}
        aria-label="clickable accordion header for experience section"
      >
        <div>
          <h3>{item.title}</h3>
          <h4>{item.subtitle}</h4>
        </div>
        <ExperienceIconContainer open={visible}>
          <ExperienceIcon src={addIcon} aria-label="open and close icon" />
        </ExperienceIconContainer>
      </ExperienceCardHeader>
      <ExperienceCardDetails
        visible={visible}
        maxHeight={contentRef.current?.getBoundingClientRect()?.height ?? 0}
      >
        <div ref={contentRef}>
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </div>
      </ExperienceCardDetails>
    </ExperienceCard>
  )
}

const Experience: React.FC = () => {
  const size = useWindowSize()
  return (
    <ExperienceSection id="experience" aria-label="experience-section">
      <ExperienceInner>
        <ExperienceTitle>Experience</ExperienceTitle>
        {size.width > 1024 ? (
          <Carousel items={expItems} />
        ) : (
          <div>
            {expItems.map((item, i) => (
              <ExperienceItem item={item} key={i} />
            ))}
          </div>
        )}
      </ExperienceInner>
    </ExperienceSection>
  )
}

export default Experience
