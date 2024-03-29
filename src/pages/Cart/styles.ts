import styled from "styled-components";

export const CartContainer = styled.form`
    margin-top: 2.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`

export const SectionBaseStyle = styled.div `
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`