import styled from 'styled-components'

import { palette } from 'src/utils/styleVariables'

export const PortfolioSection = styled.section`
  background-color: ${palette.navy};
  padding: 2.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PortfolioTitle = styled.h2`
  color: ${palette.red};
  font-size: 4rem;
  margin-bottom: 1.5rem;
`

export const PortfolioText = styled.p`
  color: ${palette.white};
`
export const PortfolioInner = styled.div`
  max-width: 1200px;
  width: 100%;
`
