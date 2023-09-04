import styled from "styled-components";
import { SectionBaseStyle } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
   
    section {
        width: 23rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.75rem;
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
    transition: 0.4s;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors["yellow-dark"]};
    }
`

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
    margin-top: 0.94rem;
    padding: 2.5rem;
`