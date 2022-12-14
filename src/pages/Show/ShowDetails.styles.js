import styled from "styled-components"

export const SingleMovie = styled.section`
    width: 90vw;
    max-width: var(--max-width);
    margin: 4rem auto;
    display: grid;
    gap: 2rem;
    h4{
        margin-top: 1.5rem;
    }
    @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 2fr;
}
`
export const SingleMovieImg = styled.img`
    width: 100%;
    display: block;
`

export const SingleMovieParagraph = styled.h6`
    max-width: 35em;
    font-size: 1.1rem;
    margin-top: 1.5rem;
    line-height: 1.8;
    font-weight: lighter;
`




