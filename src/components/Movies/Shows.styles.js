import styled from "styled-components"

export const Movie = styled.div`
     position: relative;
     overflow: hidden;
     &:hover div {
        transform: translateY(0);
     }
`
export const MovieInfo = styled.div`
     position: absolute;
     bottom: 0;
     left: 0;
     width: 100%;
     padding: 0.5rem 1rem;
     background: rgba(0, 0, 0, 0.6);
     transform: translateY(100%);
     transition: var(--transition);
`
export const Title = styled.h4`
  color: var(--clr-white);
  margin-bottom: 0.25rem;
`
export const Paragraph = styled.p`
  margin-bottom: 0;
  color: var(--clr-white);
`
export const MovieImage = styled.img`
  width: 100%;
  height: 400px;
  display: block;
  object-fit: cover;
`