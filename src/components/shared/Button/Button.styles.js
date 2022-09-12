import styled from "styled-components"

export const BaseButton = styled.button`
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    display: inline-block;
    margin-top: 0.5rem;
    letter-spacing: var(--spacing);
    border: none;
    cursor: pointer;
`

export const AddBtn =styled(BaseButton)`
 background-color: #38a3a5;
      color: white;

`
export const RemoveBtn =styled(BaseButton)`
background-color: white;
      color: #e63946;
  
`