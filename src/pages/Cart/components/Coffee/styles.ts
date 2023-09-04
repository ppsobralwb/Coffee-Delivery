import styled from "styled-components";

export const CoffeeContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    
    > img {
        width: 4rem;
        height: 4rem;
        margin-right:1.25rem;
    }

    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const CoffeeInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const InteractionContainer = styled.div`
    display: flex;
    height: 2rem;
    width: 10.6875rem;
    align-items: center;
    margin-top: 0.5rem;

    > div {
        max-width: 4.5rem;
        height: 100%;
    }
`

export const RemoveButton = styled.button`
    background: ${({ theme }) => theme.colors["base-button"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;
    border: none;
    padding: 0.5rem;
    margin: 0.5rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.textSizes["components-button-s"]};
    transition: 0.4s;

    svg {
        color: ${({ theme }) => theme.colors['purple']};
    }

    &:hover {
        background: ${({ theme }) => theme.colors['base-hover']};
    }
`