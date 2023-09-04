import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CoffeeContainer, RemoveButton, InteractionContainer, CoffeeInfo, Container } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { useTheme } from "styled-components";

export function Coffee() {
    const { colors } = useTheme();

    return (
        <CoffeeContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1694390400&Signature=LBNPEOLC4OLrSyZzelNMobyQugQwwWyLBNhwXoqpPUMBUacWHVTyYHRyO47DXmqg399pDrL0d6Gw6Ar4NmxiInwmtCt89pd96BvzbLwwFzYZFsKZt3zYpU~UtVr13IliQ1BHXiJEko0ogcUg7ZHtneTkvNszOHe737oHC5DQnVfN2vTZyEBzK8FMjzzahjEUptTHx4LGuqp9sysgCpfK4ExI~h5-ubkgC7OYlzwK7w4wt1hOa2HE8TndLdkXVaFINsgL9Qk4HduvJoKDM6WLcGSG-SeFO5uiRr-nEH6gk6SfVn8pZlGbCoe-v1ojCHdbc1NUhC13wIQ3gfrATYwL1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            <Container>
                <CoffeeInfo>
                    <RegularText size="m" color="subtitle">
                        Expresso Tradicional
                    </RegularText>
                    <RegularText size="m" color="text" weight={'bold-m'}>
                        R$ 9,90
                    </RegularText>
                </CoffeeInfo>
                <InteractionContainer>
                    <QuantityInput size="small" />
                    <RemoveButton>
                        <Trash size={16} color={colors.purple}/>
                        REMOVER
                    </RemoveButton>
                </InteractionContainer>
            </Container>      
        </CoffeeContainer>       
    )
}