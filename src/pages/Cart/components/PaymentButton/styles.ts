import styled from "styled-components";

export const PaymentButtonContainer = styled.button`
    display: flex;
    background: ${({ theme }) => theme.colors['base-button']};
    border: none;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors['base-text']};
    width: 178px;
    height: 51px;

    span {
        color: ${({ theme }) => theme.colors['base-text']};
        font-size: ${({ theme }) => theme.textSizes["components-button-s"]};
        font: ${({ theme }) => theme.fonts.regular};
    }
`