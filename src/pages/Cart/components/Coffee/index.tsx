import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CoffeeContainer, RemoveButton, InteractionContainer, CoffeeInfo, Container } from "./styles";
import { RegularText } from "../../../../components/Typography";
import { useTheme } from "styled-components";

export function Coffee() {
    const { colors } = useTheme();

    return (
        <CoffeeContainer>
            <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1692576000&Signature=Ge7V3B-BunO78f-SkOrJ39-MRS6eEMQmflKAlJC4iNtFD0vhCaTsRfvDnQZnt-DBojgWNQf18S0FjG6yc2nyrzDGBeCngD0GCdK-2exVZszFNJV0wC4qCj2j~e025tCiXONHWSqnMzO20z-nXyJOAGRmLCiROKqrgVBBSG5k7R66nQj3JuXwFcygckFPE7Ywiv1c0ZyFCv1tdJgmjxjm14Anf9wMz44lwS~hCluK7mazZ6QRrMXWz23zvK~ZO4UCcLAM121Q6YVaLYLCIudg7JavZO6LRB4wZPpsmfh9KDW8vEQHC~jdEchNUTjyLaLw2xCSFkZa8TjAaqhohLWfeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
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
                    <QuantityInput />
                    <RemoveButton>
                        <Trash size={16} color={colors.purple}/>
                        REMOVER
                    </RemoveButton>
                </InteractionContainer>
            </Container>      
        </CoffeeContainer>       
    )
}