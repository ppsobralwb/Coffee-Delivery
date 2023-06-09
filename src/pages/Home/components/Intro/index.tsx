import { IconsContainer, IntroContainer, IntroContent, Title } from "./styles";
import hero from '../../../../assets/hero.svg'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'
import { RegularText } from "../../../../components/Typography";
import InfoWithIcon from "../../../../components/InfoWithIcon";
import { useTheme } from "styled-components";

export default function Intro() {
    const { colors } = useTheme();

    return (
        <IntroContainer>
            <IntroContent className="container">
                <div >
                    <section>
                        <Title size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </Title>
                        <RegularText size="l" color="subtitle" as="h3">
                            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer hora
                        </RegularText>
                    </section>
                    <IconsContainer>
                        <InfoWithIcon 
                            icon={<ShoppingCart size={20} weight="fill" />}
                            text="Compra simples e segura"
                            color={colors["yellow-dark"]}
                        />
                        <InfoWithIcon 
                            icon={<Package size={20} weight="fill" />}
                            text="Embalagem mantém o café intacto"
                            color={colors["base-text"]}
                        />
                        <InfoWithIcon 
                            icon={<Timer size={20} weight="fill" />}
                            text="Entrega rápida e rastreada"
                            color={colors["yellow"]}
                        />
                        <InfoWithIcon 
                            icon={<Coffee size={20} weight="fill" />}
                            text="O café chega fresquinho até você"
                            color={colors["purple"]}
                        />
                    </IconsContainer>
                </div>
                
                <img src={hero} alt="" />
               
            </IntroContent>
        </IntroContainer>
    )
}