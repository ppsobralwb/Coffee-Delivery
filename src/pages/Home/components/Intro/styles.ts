import styled from "styled-components";

import introBackgroundImg from "../../../../assets/intro-background.png";
import { TitleText } from "../../../../components/Typography";

export const IntroContainer = styled.section`
    width: 100%;
    height: 34rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${() => `url(${introBackgroundImg})`} no-repeat center;
    background-size: cover;
`
export const IntroContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
`

export const Title = styled(TitleText)`
    margin-bottom: 1rem;
`

export const IconsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  margin-top: 4.125rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    margin-top: 3rem;
    font-size: 1.1rem;
  }
`