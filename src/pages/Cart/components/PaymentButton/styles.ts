import styled from "styled-components";

export const PaymentButtonContainer = styled.button`
    display: flex;
    background: ${({ theme }) => theme.colors['base-button']};
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.5rem;
    height: 3rem;
    text-transform: uppercase;
    transition: 0.4s;
    color: ${({ theme }) => theme.colors['purple']};

    &:hover {
        background: ${({ theme }) => theme.colors['base-hover']};
    }

    user-select: none;

    span {
        color: ${({ theme }) => theme.colors['base-text']};
        font-size: ${({ theme }) => theme.textSizes["components-button-s"]};
        font: ${({ theme }) => theme.fonts.regular};
    }
`