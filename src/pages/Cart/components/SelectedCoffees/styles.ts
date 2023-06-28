import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    text-align: center;
    margin-top: 1rem;

    section {
        width: 23rem;
        display: flex;
        justify-content: space-between;
    }
`

export const ConfirmationButton = styled.button`
    border: none;
    background: ${({ theme }) => theme.colors['yellow']};
    color: ${({ theme }) => theme.colors["white"]};
    border-radius: 6px;
    width: 23rem;
    height: 2.875rem;
    margin-top: 1.5rem;
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    font: ${({ theme }) => theme.fonts["regular"]};
    font-weight: 700;
`