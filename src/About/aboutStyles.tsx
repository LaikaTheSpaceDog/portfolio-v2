import styled from 'styled-components'

import { device, palette } from 'src/utils/styleVariables'

export const AboutSection = styled.section`
  background-color: ${palette.navy};
  padding: 2.5rem 1rem;
  display: flex;
  justify-content: center;

  @media ${device.mobileL} {
    padding: 2.5rem 3rem;
  }

  @media ${device.laptop} {
    padding: 2.5rem 5rem;
  }
`

export const AboutInner = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const AboutTitle = styled.h2`
  color: ${palette.red};
  font-size: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;

  @media ${device.laptop} {
    font-size: 4rem;
    text-align: left;
  }
`

export const AboutText = styled.p`
  color: ${palette.white};
  line-height: 1.5rem;
  padding-bottom: 0.5rem;
`

export const AboutTextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    width: 60%;
    margin-bottom: 0;
  }
`

export const AboutImageSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-left: 2rem;

  @media ${device.laptop} {
    width: 40%;
    align-items: flex-end;
  }
`

export const AboutImageContainer = styled.div`
  width: 250px;
  max-width: 100%;
  overflow: hidden;
  border-radius: 50%;

  @media ${device.laptop} {
    width: 350px;
  }
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
