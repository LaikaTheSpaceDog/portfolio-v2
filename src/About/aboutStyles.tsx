import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

export const AboutSection = styled.section`
  background-color: ${palette.navy};
  padding: 2.5rem 5rem;
  display: flex;
  justify-content: center;
`

export const AboutInner = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: center;
`

export const AboutTitle = styled.h2`
  color: ${palette.red};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

export const AboutText = styled.p`
  color: ${palette.white};
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
`

export const AboutTextSection = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

export const AboutImageSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  padding-left: 2rem;
`

export const AboutImageContainer = styled.div`
  width: 350px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 50%;
`

export const AboutImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export const AboutRow = styled.div`
  display: flex;
  padding-top: 1rem;
`

export const AboutTechItem = styled.div`
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`

export const AboutIcon = styled.img`
  width: 50px;
  margin-bottom: 0.5rem;
`
