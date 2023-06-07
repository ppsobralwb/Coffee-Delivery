import styled from "styled-components";

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`
interface IconContainerProps {
    color: string;
}

export const IconContainer = styled.div<IconContainerProps>`
    min-width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background: ${({ color }) => color};
    color: ${({ theme })=> theme.colors["white"]};
   
    display: flex;
    align-items: center;
    justify-content: center;
`