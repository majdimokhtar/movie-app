import styled from "styled-components"

export const MoviesSection = styled.section`
    width: 90vw;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    padding-bottom: 5rem;
    padding-top: 3rem;
    @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}
`