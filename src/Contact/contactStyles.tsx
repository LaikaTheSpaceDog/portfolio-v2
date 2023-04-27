import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

export const ContactSection = styled.section`
  background-color: ${palette.cream};
  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContactInner = styled.div`
  max-width: 1200px;
  width: 100%;
`

export const ContactTitle = styled.h2`
  color: ${palette.navy};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

export const ContactText = styled.p``
