import { IconButton, IconsContainer, MainContainer, MainContent, TextBox } from "./styles";
import hero from '../../../../assets/hero.svg'
import { ShoppingCart, Timer, Coffee, Package } from 'phosphor-react'

export default function Main() {
    return (
        <MainContainer>
            <MainContent className="container">
                <div>
                    <TextBox>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffe Delivery você recebe seu café onde estiver,a qualquer hora</p>
                    </TextBox>
                    <IconsContainer>
                        <IconButton variant='yellow-dark'>
                            <ShoppingCart size={20} weight="fill" />
                        </IconButton>
                        Compra simples e segura
                        <IconButton variant='yellow'>
                            <Timer size={20} weight="fill" />
                        </IconButton>
                        Entrega rápida e rastreada
                        <IconButton variant='base-text'>
                            <Package size={20} weight="fill" />
                        </IconButton>
                        Embalagem mantém o café intacto
                        <IconButton variant='purple'>
                            <Coffee size={20} weight="fill" />

                        </IconButton>
                        O café chega fresquinho até você

                    </IconsContainer>

                </div>
                <img src={hero} alt="" />
            </MainContent>
        </MainContainer>
    )
}