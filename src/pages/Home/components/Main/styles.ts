import styled, { css } from "styled-components";

export const MainContainer = styled.section`
    width: 100%;
    height: 34rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const TextBox = styled.div`
    width: 36rem;
    font-size:  ${({ theme }) => theme.textSizes["title-title-l"]};
    font-family: ${({ theme }) => theme.fonts["title"]};
    color: ${({ theme }) => theme.colors["base-title"]};
    margin-bottom: 2rem;
`

export const IconsContainer = styled.div`
    width: 35rem;
    height: 5rem;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 4px;
    
    padding: 0 0.5rem;
    position: relative;
`

interface IconsProps {
    variant: 'purple' | 'yellow' | 'yellow-dark' | 'base-text'
}

export const IconButton = styled.button<IconsProps>`
    min-width: 2.3rem;
    height: 2.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    color: ${({ theme })=> theme.colors["background"]};
    border: none;
    
    ${({ variant, theme }) => css`
      background: ${theme.colors[`${variant}`]};
`}
`